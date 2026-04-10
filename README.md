# BunkerQuiz 🛡️🧠

![BunkerQuiz Banner](./assets/banner.png)

> **Fortify your mind. Master knowledge.**
> O BunkerQuiz é uma plataforma premium de simulados e questões, projetada especificamente para concurseiros de alto desempenho que buscam aprovação em carreiras como PRF, PM e Saúde.

---

[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-v12-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

## ✨ Destaques do Projeto

O BunkerQuiz não é apenas mais um app de questões. Ele foi construído com foco na **experiência do usuário (UX)** e na **retenção de conhecimento**, utilizando princípios de gamificação e uma interface "Bunker Zen" que elimina distrações.

*   **🎮 Gamificação Completa:** Acumule XP, suba de nível e acompanhe sua evolução através de um sistema de progressão imersivo.
*   **🏆 Ranking Global:** Compare seu desempenho com outros estudantes em tempo real através do leaderboard integrado com Firebase.
*   **⚡ Modos de Estudo Duplos:**
    *   **Modo Treino:** Feedback imediato e comentários detalhados após cada questão. Ideal para aprendizado inicial.
    *   **Modo Exame:** Simulação real com cronômetro, sem feedback imediato, focado em medir sua prontidão para o dia da prova.
*   **🔒 Autenticação Robusta:** Integração completa com Firebase Auth para manter seus dados e progresso seguros.

## 🎨 Design Experience: Bunker Zen

O "Bunker Zen" é a nossa filosofia de design que equilibra o minimalismo com uma estética futurista "cyber-military".

- **Glassmorphism:** Efeitos de desfoque e transparência que trazem profundidade e sofisticação.
- **Dark Mode Nativo:** Otimizado para longas sessões de estudo, reduzindo a fadiga ocular.
- **Tipografia Premium:** Uso das fontes *Orbitron* e *Oxanium* para uma leitura clara e um feeling tecnológico.
- **Micro-interações:** Feedback táctil e animações suaves (Reanimated) que tornam o uso do app viciante.

## 🛠️ Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema mobile:

*   **Core:** React Native (Expo SDK 54)
*   **Navegação:** React Navigation v7
*   **Estilização:** Vanilla CSS (Refined Stylesheets)
*   **Backend:** Firebase (Firestore & Authentication)
*   **Animações:** React Native Reanimated & Gesture Handler
*   **Ícones:** Lucide React Native
*   **Fontes:** Google Fonts (Orbitron, Oxanium)

## 🚀 Começando

### Pré-requisitos
- Node.js instalado
- Expo Go no seu smartphone ou um emulador (Android/iOS) configurado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Bunker25Logic/bunkerQuiz.git
cd bunkerQuiz
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Firebase:
Crie um projeto no [Firebase Console](https://console.firebase.google.com/), adicione uma aplicação Android/iOS e substitua o arquivo `google-services.json` (para Android) ou configure as credenciais no arquivo de ambiente.

4. Inicie o projeto:
```bash
npx expo start
```

## 📁 Estrutura de Pastas

```text
BunkerQuiz/
├── assets/             # Imagens, fontes e splash screen
├── src/
│   ├── components/     # Componentes reutilizáveis (Botões, Cards, etc)
│   ├── data/           # Banco de questões (PRF, PM, etc)
│   ├── navigation/     # Configuração de rotas e navegação
│   ├── screens/        # Telas principais do aplicativo
│   ├── services/       # Integração com Firebase e APIs
│   └── theme/          # Design System (Cores, Tipografia)
├── App.js              # Ponto de entrada
└── app.json            # Configurações do Expo
```

## 🤝 Contribuindo

Pull requests são bem-vindos! Para mudanças maiores, abra uma issue primeiro para discutir o que você gostaria de mudar.

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<p align="center">
  Desenvolvido com ❤️ por <b>Bunker25Logic</b>
</p>
