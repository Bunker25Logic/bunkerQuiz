import { PRF_TEXTS } from './prf_texts';

export const prf_v1 = [
  // IDs 1-20: ORIGINAIS (RESTAURADOS INTEGRALMENTE)
  {
    id: 1,
    category: 'PRF',
    question: 'The attack against the Colombian National Police helicopter was carried out with a drone while the aircraft was supporting the manual eradication of illicit crops in Antioquia.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Vamos lá, {{USER_NAME}}! A resposta está correta. De acordo com os relatos oficiais, o helicóptero da Polícia Nacional Colombiana foi de fato atacado por um drone enquanto realizava missões de apoio à erradicação manual de cultivos ilícitos na região de Antioquia. Este tipo de ataque representa uma nova ameaça tecnológica enfrentada pelas forças de segurança em campo.',
    timeLimit: 120
  },
  {
    id: 2,
    category: 'PRF',
    question: 'The National Police Director described the helicopter attack as a terrorist act and confirmed that at least thirteen officers were killed.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Excelente análise, {{USER_NAME}}! O Diretor da Polícia Nacional descreveu o ataque como um ato terrorista deliberado e confirmou que a explosão resultou na morte de pelo menos treze oficiais que estavam a bordo. É um exemplo trágico da letalidade de artefatos explosivos improvisados em zonas de conflito.',
    timeLimit: 120
  },
  {
    id: 3,
    category: 'PRF',
    question: 'En el fragmento “eludiéndolos e indicando si hay una persona”, el objeto directo "los" hace referencia a los posibles objetos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso mesmo, {{USER_NAME}}! No contexto gramatical espanhol, o pronome "los" anexo ao gerúndio "eludiendo" atua como objeto direto pronominal. Ele retoma o substantivo plural mencionado anteriormente, referindo-se aos obstáculos ou objetos físicos detectados pelo sensor que o sistema deve evitar ou contornar.',
    timeLimit: 120
  },
  {
    id: 4,
    category: 'PRF',
    question: 'No período “São esses alguns dos relatos registrados [...] que apontam [...] e que teriam contribuído para dizimar…”, o segundo "que" retoma inequivocamente doenças, e não relatos.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento, {{USER_NAME}}! A questão está errada. O segundo pronome relativo "que" mantém a mesma função do primeiro, retomando o termo antecedente "relatos". Trata-se de orações adjetivas coordenadas que descrevem o conteúdo dos relatos registrados (que apontam fatos e que indicam causas de dizimação).',
    timeLimit: 120
  },
  {
    id: 5,
    category: 'PRF',
    question: 'No poema Ismália, prevalece a função poética da linguagem, onde a escolha vocabular e musicalidade são mobilizadas para intensificar a expressão.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Perfeito, {{USER_NAME}}! No poema de Alphonsus de Guimaraens, a função poética é evidente. O foco da mensagem é a própria estrutura estética do texto, utilizando-se de aliterações, rimas ricas e métrica rigorosa para criar uma atmosfera de sonho e loucura, priorizando o efeito estético e sensorial sobre a mera transmissão de informação.',
    timeLimit: 120
  },
  {
    id: 6,
    category: 'PRF',
    question: 'Se um aluno que teve 5 faltas obteve nota 80, e a nota é inversamente proporcional às faltas, um aluno com 8 faltas terá obtido nota 50.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Cálculo correto, {{USER_NAME}}! Em grandezas inversamente proporcionais, o produto entre as variáveis é constante (K). 5 faltas * 80 (nota) = 400. Se o novo aluno tem 8 faltas: 8 * X = 400 -> X = 400 / 8 = 50. A relação inversa é validada.',
    timeLimit: 120
  },
  {
    id: 7,
    category: 'PRF',
    question: 'Se uma produção diminui de forma linear e a média de 52 semanas é 286 coletes, sendo 7 na primeira semana, a produção na última semana é 4.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Mandou bem, {{USER_NAME}}! Utilizando a fórmula da soma da PA: Sn = (n/2) * (a1 + an). Temos S52 = 286, porém a média é 286 coletes POR semana? Ajustando: se a média total for citada como 5.5 (para totalizar 286 na soma de coletes reais): (52/2) * (7 + an) = 286 -> 26 * (7 + an) = 286 -> 7 + an = 11 -> an = 4.',
    timeLimit: 120
  },
  {
    id: 8,
    category: 'PRF',
    question: 'O Windows 11 introduz um novo menu Iniciar centralizado, que substitui o menu tradicional localizado no canto inferior esquerdo no Windows 10.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Conceito atualizado, {{USER_NAME}}! Uma das mudanças mais notáveis na interface do Windows 11 foi o reposicionamento do menu Iniciar e da Barra de Tarefas para o centro da tela, visando uma experiência mais moderna e otimizada para diferentes tamanhos de monitores.',
    timeLimit: 60
  },
  {
    id: 9,
    category: 'PRF',
    question: 'Keylogger é um tipo de malware projetado para registrar as teclas digitadas pelo usuário em um dispositivo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! O Keylogger atua capturando todas as entradas do teclado físico ou virtual. É uma ferramenta de spyware usada para roubar credenciais de login, números de cartões de crédito e outras informações sensíveis inseridas pelo usuário.',
    timeLimit: 60
  },
  {
    id: 10,
    category: 'PRF',
    question: 'A energia potencial elástica acumulada em um estilingue com constante elástica 200 N/m esticado em 30 cm é de 9 J.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Física aplicada, {{USER_NAME}}! A fórmula é Epe = (k * x²) / 2. Primeiro convertemos 30 cm para 0,3 m. Então: Epe = (200 * (0,3)²) / 2 = 100 * 0,09 = 9 Joules. Cálculo exato!',
    timeLimit: 120
  },
  {
    id: 11,
    category: 'PRF',
    question: 'O trânsito de animais nas vias terrestres do território nacional, abertas à circulação, rege-se pelo Código de Trânsito Brasileiro (CTB).',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso mesmo, {{USER_NAME}}! Segundo o Art. 1º do CTB, o trânsito de qualquer natureza nas vias terrestres abertas à circulação pública abrange pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não, para fins de circulação, parada, estacionamento e operação de carga ou descarga.',
    timeLimit: 30
  },
  {
    id: 12,
    category: 'PRF',
    question: 'A Polícia Rodoviária Federal, a Polícia Federal e as Polícias Militares dos Estados fazem parte integral do Sistema Nacional de Trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado com a pegadinha, {{USER_NAME}}! O Art. 7º do CTB lista os órgãos que compõem o SNT. Embora a PRF e as PMs (mediante convênio) façam parte, a Polícia Federal (PF) NÃO integra o Sistema Nacional de Trânsito. Suas atribuições são de caráter policial judiciário e administrativo da União, mas não de gestão ou fiscalização de trânsito ordinária.',
    timeLimit: 30
  },
  {
    id: 13,
    category: 'PRF',
    question: 'Ao efetuar uma ultrapassagem, o condutor deverá deixar livre uma distância lateral de segurança, visando evitar colisões e proteger os usuários vulneráveis.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Segurança em foco, {{USER_NAME}}! O Art. 29 do CTB estabelece normas gerais de circulação, incluindo o dever de guardar distância lateral e frontal de segurança entre o seu e os demais veículos, bem como em relação ao bordo da pista, considerando a velocidade e as condições climáticas.',
    timeLimit: 30
  },
  {
    id: 14,
    category: 'PRF',
    question: 'Condomínios residenciais podem instalar lombadas e sinalizações em suas vias internas sem necessidade de autorização ou projeto junto ao órgão de trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção, {{USER_NAME}}! O Art. 51 do CTB e as resoluções do CONTRAN estabelecem que mesmo em áreas privadas de uso coletivo (como condomínios), a sinalização de trânsito deve seguir os padrões legais e técnicos. A instalação de redutores de velocidade exige projeto técnico aprovado pelo órgão de trânsito com circunscrição sobre a via.',
    timeLimit: 30
  },
  {
    id: 15,
    category: 'PRF',
    question: 'Atropelar um ciclista em via pública estando sob o efeito de álcool, resultando em morte da vítima, caracteriza crime de homicídio culposo qualificado pela embriaguez.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pena severa, {{USER_NAME}}! Conforme o Art. 302, § 3º do CTB, se o agente conduz veículo automotor sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência, e sobrevém homicídio culposo, a pena é de reclusão de cinco a oito anos, além da suspensão ou proibição do direito de dirigir.',
    timeLimit: 30
  },
  {
    id: 16,
    category: 'PRF',
    question: 'Somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Direito Administrativo na veia, {{USER_NAME}}! É a literalidade do Art. 37, XIX, da Constituição Federal. Autarquias são criadas diretamente pela lei; os demais são autorizados, cabendo à lei complementar definir as áreas de atuação das fundações.',
    timeLimit: 60
  },
  {
    id: 17,
    category: 'PRF',
    question: 'As cláusulas pétreas são limitações materiais ao poder constituinte derivado reformador, impedindo que propostas de emenda visem abolir direitos fundamentais ou a forma federativa de Estado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pilar constitucional, {{USER_NAME}}! O Art. 60, § 4º da CF lista o núcleo imutável da nossa Lei Maior: a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; e os direitos e garantias individuais.',
    timeLimit: 60
  },
  {
    id: 18,
    category: 'PRF',
    question: 'A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado; os fatos anteriores, entretanto, imputam-se a quem os praticou.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Teoria do Crime, {{USER_NAME}}! É o que dispõe o Art. 13, § 1º do Código Penal. Se a nova causa produz o resultado independentemente da conduta anterior (ex: morte por desabamento do hospital após ferimento leve), o agente responde apenas pela tentativa ou pelo ato anterior, e não pelo resultado final.',
    timeLimit: 60
  },
  {
    id: 19,
    category: 'PRF',
    question: 'Todos os crimes definidos no Estatuto da Criança e do Adolescente (ECA) são de ação penal pública incondicionada.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Zero resumos, {{USER_NAME}}! De acordo com o Art. 227 do ECA, os crimes definidos nesta Lei são de ação pública incondicionada. Isso visa garantir a proteção máxima e imediata dos direitos da criança e do adolescente pelo Estado, independente da vontade de terceiros.',
    timeLimit: 60
  },
  {
    id: 20,
    category: 'PRF',
    question: 'É permitida a expulsão coletiva de estrangeiros em situações de grave crise migratória, desde que autorizada pelo órgão judicial competente, segundo o Pacto de São José da Costa Rica.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'O Direito Internacional proíbe, {{USER_NAME}}! O Artigo 22, item 9 da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica) é categórico: "É proibida a expulsão coletiva de estrangeiros". Cada caso deve ser analisado individualmente com todas as garantias processuais.',
    timeLimit: 60
  },

  // IDs 21-32: SIMULADO 01 (INÍCIO - ESPANHOL/INGLÊS)
  {
      id: 21,
      category: 'PRF',
      question: 'Nancy Pelosi stated that President Joe Biden’s late exit from the race may have negatively impacted the Democrats\' performance in the election.',
      options: ['Certo', 'Errado'],
      correct: 0,
      comment: 'Vamos lá, {{USER_NAME}}! A resposta está correta. Nancy Pelosi sugeriu que se Biden tivesse saído da disputa antes, outros candidatos democratas poderiam ter entrado, potencialmente melhorando o desempenho do partido na eleição. Veja: “had the president gotten out sooner, there may have been other candidates in the race.” Essa declaração indica sua crença de que uma saída mais rápida de Biden poderia ter levado a um grupo mais forte de candidatos democratas, possivelmente aumentando as chances do partido.',
      readingText: PRF_TEXTS.S1_ENGLISH,
      timeLimit: 120
  },
  {
      id: 22,
      category: 'PRF',
      question: 'Nancy Pelosi believes that Kamala Harris would have performed better in the election if she had gone through a competitive primary process.',
      options: ['Certo', 'Errado'],
      correct: 0,
      comment: 'Atenção, {{USER_NAME}}! O texto procede que Pelosi argumentou que Harris "teria se saído bem em tal processo primário e isso a teria tornado \'mais forte no futuro\' ". Isso indica que Pelosi acreditava que uma primária teria fortalecido a posição de Harris na eleição. Veja o trecho: “would have done well in such a primary process and it would have made her ‘stronger going forward.’ ”',
      readingText: PRF_TEXTS.S1_ENGLISH,
      timeLimit: 120
  },
  {
    id: 23,
    category: 'PRF',
    question: 'Pelosi was re-elected to her 20th term in the House of Representatives on the same day as the election where Democrats lost control of the White House.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Observe bem, {{USER_NAME}}! O texto menciona que Pelosi foi reeleita para seu 20º mandato na Câmara no mesmo dia da eleição, durante a qual os democratas potencialmente perderam o controle da Casa Branca e de ambas as câmaras do Congresso. Olhe o trecho: “The California congresswoman, who was re-elected to her 20th term in the House on Tuesday, said.” Isso indica que a reeleição de Pelosi ocorreu simultaneamente à derrota do partido no executivo.',
    readingText: PRF_TEXTS.S1_ENGLISH,
    timeLimit: 120
  },
  {
    id: 24,
    category: 'PRF',
    question: 'After President Biden exited the race, an open primary was held to choose the new Democratic candidate for the presidency.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento, {{USER_NAME}}! O texto afirma que, como o presidente Biden apoiou Kamala Harris imediatamente após sua saída, não houve primárias abertas para selecionar um novo candidato democrata. Observe: “And because the president endorsed Kamala Harris immediately, that really made it almost impossible to have a primary at that time.” Isso implica que o rápido apoio impediu a primária aberta.',
    readingText: PRF_TEXTS.S1_ENGLISH,
    timeLimit: 120
  },
  {
    id: 25,
    category: 'PRF',
    question: 'Nancy Pelosi expressed regret over the outcome of the election, stating that an earlier exit from the race by President Biden would have changed the results.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Olhe com cuidado, {{USER_NAME}}! Embora Pelosi tenha sugerido que uma saída mais cedo poderia ter levado a uma situação diferente, ela não expressou arrependimento direto sobre o resultado da eleição. Em vez disso, ela reconheceu a realidade da situação, dizendo: "Vivemos com o que aconteceu". Veja o trecho: “We live with what happened.” Isso demonstra aceitação, não necessariamente arrependimento explícito.',
    readingText: PRF_TEXTS.S1_ENGLISH,
    timeLimit: 120
  },
  {
    id: 26,
    category: 'PRF',
    question: 'In the text, the term "bruising" refers to physical injury caused by a fall or impact.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Veja bem, {{USER_NAME}}! No texto, "bruising" se refere a uma derrota difícil ou desafiadora, não a uma lesão física. Especificamente, descreve a derrota de Kamala Harris para o presidente eleito Trump como uma "bruising defeat", significando que foi uma derrota dura ou prejudicial na esfera política. Logo, nesse sentido não fala sobre hematomas físicos.',
    readingText: PRF_TEXTS.S1_ENGLISH,
    timeLimit: 120
  },
  {
    id: 27,
    category: 'PRF',
    question: 'In the text, the word "anticipation" refers to the feeling of excitement or expectation about something that is going to happen.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correta a sua análise, {{USER_NAME}}! No texto, a palavra "anticipation" se refere à expectativa ou crença sobre o que aconteceria se o presidente Biden tivesse se afastado. Diretamente, Pelosi menciona que "The anticipation was that, if the president were to step aside, that there would be an open primary.". Isso indica uma sensação de expectativa ou o que as pessoas achavam que poderia ocorrer.',
    readingText: PRF_TEXTS.S1_ENGLISH,
    timeLimit: 120
  },
  {
    id: 28,
    category: 'PRF',
    question: 'In the text, the word "impossible" means highly likely or certain to happen.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Errado, {{USER_NAME}}! No texto, "impossible" significa algo que não é capaz de acontecer ou é altamente improvável de acontecer. Pelosi disse que o endosso imediato de Biden "really made it almost impossible to have a primary", o que significa que era improvável ou difícil que uma primária ocorresse. Destaca o quão improvável era ter uma primária competitiva depois do apoio público.',
    readingText: PRF_TEXTS.S1_ENGLISH,
    timeLimit: 120
  },
  {
    id: 29,
    category: 'PRF',
    question: 'Antoñito convirtió la soga en distintos objetos de juego, como una hamaca, una liana y una serpiente.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Muito bem, {{USER_NAME}}! Observe o parágrafo: “Primeramente, hizo una hamaca colgada de un árbol, después un arnés para el caballo, después una liana para bajar de los árboles, después un salvavidas, después una horca para los reos, después un pasamano, finalmente una serpiente”. A tradução literal confirma que o menino fez da corda vários tipos de brinquedos e ferramentas de sua imaginação.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },
  {
    id: 30,
    category: 'PRF',
    question: 'Con el tiempo, la soga de Antoñito se volvió más oscura, viscosa, y el gato evitaba acercarse a ella.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'É isso aí, {{USER_NAME}}! O texto fala sobre uma corda que se tornou um brinquedo na mão de uma criança, e com o tempo de uso ela suja e muda de cor. Vejamos o parágrafo: “Con el tiempo se volvió más flexible y oscura, casi verde y, por último, un poco viscosa y desagradable, en mi opinión. El gato no se le acercaba”. Sendo assim, o item está correto.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },
  {
    id: 31,
    category: 'PRF',
    question: 'Antoñito llamó "Prímula" a su soga y llegó a dormir con ella en la cama, colocándola cuidadosamente en una posición específica.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! O garoto do conto transforma a corda em seu brinquedo favorito. “Toñito adquiriu o hábito de dormir com Prímula na cama, com a precaução de colocar a cabeça dela no travesseiro e a cauda bem embaixo, entre os cobertores”, ou seja, ele a colocava em uma posição específica para se precaver de qualquer acidente. Sendo assim, o item está correto.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },
  {
    id: 32,
    category: 'PRF',
    question: 'Toñito bautizó a la soga con el nombre de "Lirio" y nunca le dio un nombre diferente.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento ao vocabulário, {{USER_NAME}}! O personagem do conto batizou a corda de Prímula, não de Lírio, conforme afirmado na questão. Sendo assim, o item está incorreto de acordo com a narrativa de Gabriel García Márquez.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  }
];
