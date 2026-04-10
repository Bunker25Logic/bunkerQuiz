import { db, auth } from './firebaseConfig';
import { collection, addDoc, serverTimestamp, query, where, getDocs, orderBy, doc, getDoc, setDoc, updateDoc, increment, limit } from 'firebase/firestore';

export const saveQuizResult = async (category, mode, score, total) => {
  try {
    const user = auth.currentUser;
    if (!user) return null;

    const resultData = {
      userId: user.uid,
      category,
      mode,
      score,
      total,
      percentage: (score / total) * 100,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'results'), resultData);
    
    // Update user stats
    await updateUserStats(score);

    return docRef.id;
  } catch (error) {
    console.error("Error saving result: ", error);
    throw error;
  }
};

export const updateUserStats = async (hits) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    const xpGained = hits * 10;

    if (userSnap.exists()) {
      await updateDoc(userRef, {
        totalHits: increment(hits),
        xp: increment(xpGained),
        updatedAt: serverTimestamp()
      });
    } else {
      await setDoc(userRef, {
        userId: user.uid,
        displayName: user.displayName || 'Novo Guerreiro',
        totalHits: hits,
        xp: xpGained,
        level: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    }
  } catch (error) {
    console.error("Error updating user stats:", error);
  }
};

export const getUserProfile = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return null;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      // Calculate level based on XP (100 XP per level)
      const currentLevel = Math.floor(data.xp / 100) + 1;
      const progressToNextLevel = (data.xp % 100) / 100;

      return { ...data, level: currentLevel, progress: progressToNextLevel };
    }
    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const updateDisplayName = async (name) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      displayName: name,
      userId: user.uid,
      totalHits: 0,
      xp: 0,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error("Error updating display name:", error);
  }
};

export const getRanking = async () => {
  try {
    const q = query(
      collection(db, 'users'),
      orderBy('totalHits', 'desc'),
      limit(20)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching ranking:", error);
    return [];
  }
};

export const getUserHistory = async (category = null) => {
  try {
    const user = auth.currentUser;
    if (!user) return [];

    let q = query(
      collection(db, 'results'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    if (category) {
      q = query(q, where('category', '==', category));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching history: ", error);
    return [];
  }
};
