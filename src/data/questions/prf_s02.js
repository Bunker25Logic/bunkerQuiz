import { PRF_TEXTS } from './prf_texts';

export const prf_s02 = [
  // ESPANHOL SIMULADO 02 (IDs 141-148)
  {
    id: 141,
    question: 'El uso correcto de las conjunciones permite que los hablantes conecten oraciones de manera lógica. Es correcto afirmar que el uso de la conjunción "y" es fundamental para añadir información en una frase.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! O "y" funciona como conjunção aditiva.',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 142,
    question: 'La palabra novela en “Cien años de soledad se ha convertido en la novela más emblemática” puede ser empleada para referirse a las producciones de tele también.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado, {{USER_NAME}}! Em espanhol, "novela" é obra literária. Para TV usa-se "telenovela".',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 143,
    question: 'El término lo, en la frase "Escrita por Gabriel García Márquez...", se refiere directamente al género literario del realismo mágico.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Incorreto, {{USER_NAME}}! Introduz uma ideia abstrata.',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 144,
    question: 'El uso de lo, en la frase “En el universo de la narración, lo maravilloso...”, podría ser sustituido por "el" sin alterar el significado.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Errado, {{USER_NAME}}! "Lo" é um pronome neutro que intensifica a qualidade de "maravilloso".',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 145,
    question: 'La palabra "sucesos" se emplea como um sustantivo plural para referirse a hechos o acontecimientos concretos dentro de la narración.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Sim, {{USER_NAME}}! Suceso = Fato/Acontecimento. Diferente do português.',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 146,
    question: 'El texto afirma que "Macondo se presenta como una metáfora de la familia Buendía, que simboliza una síntesis de mitos, valores y experiencias humanas".',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Interpretação correta do texto.',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 147,
    question: 'García Márquez incorpora en su obra elementos de su experiencia personal en Aracataca.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! O autor baseou Macondo em sua cidade natal.',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },
  {
    id: 148,
    question: 'Es correcto afirmar que "las" sustituye al antecedente implícito de "fuerzas".',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Perfeito, {{USER_NAME}}! Substitui forças na frase.',
    readingText: PRF_TEXTS.SPANISH_2,
    timeLimit: 120
  },

  // PORTUGUÊS SIMULADO 02 (IDs 149-166)
  {
    id: 150,
    question: 'A substituição de “limitando” por "porque limita" manteria a correção gramatical e a coerência.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! O conectivo explicativo mantém o sentido lógico.',
    readingText: PRF_TEXTS.PORTUGUESE_3,
    timeLimit: 60
  },
  {
    id: 151,
    question: 'Em “a minorias raciais”, é facultativo o emprego do sinal indicativo de crase.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Proibido, {{USER_NAME}}! Crase ante plural sem artigo plural é inexistente.',
    readingText: PRF_TEXTS.PORTUGUESE_3,
    timeLimit: 30
  },
  {
    id: 152,
    question: 'Estariam mantidos os sentidos e a correção caso se substituísse “estão se tornando” por vêm se tornando.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Literalidade gramatical, {{USER_NAME}}!',
    readingText: PRF_TEXTS.PORTUGUESE_3,
    timeLimit: 30
  },
  {
    id: 153,
    question: 'No quarto parágrafo, o sujeito da oração “É um problema complexo” corresponde a “a discriminação racial”.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'O sujeito é "O racismo institucional", {{USER_NAME}}!',
    readingText: PRF_TEXTS.PORTUGUESE_3,
    timeLimit: 60
  },
  {
    id: 154,
    question: 'O texto afirma que o racismo estrutural e o institucional se manifestam de maneira equivalente nas organizações.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'O texto estabelece uma diferenciação clara, {{USER_NAME}}!',
    readingText: PRF_TEXTS.PORTUGUESE_3,
    timeLimit: 60
  },
  {
    id: 167,
    question: 'No sistema linear apresentado, o valor final da expressão numérica é igual a 3.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Matemática exata, {{USER_NAME}}! Resolvendo o sistema: z=5, y=-1, x=-2.',
    timeLimit: 120
  },
  {
    id: 168,
    question: 'O resultado da função logarítmica apresentada é -3/2.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'O resultado correto é -5/2, {{USER_NAME}}!',
    timeLimit: 120
  },
  {
    id: 172,
    question: 'A quantidade de ligações registrada entre 18 e 19 horas foi igual a 60.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Cálculo por PA: a13 = 12 + 12*4 = 60. Correto, {{USER_NAME}}!',
    timeLimit: 90
  },
  {
    id: 177,
    question: 'Ransomware é um tipo de malware que se propaga automaticamente sem interação do usuário.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção, {{USER_NAME}}! Isso é um Worm. Ransomware foca em criptografia e extorsão.',
    timeLimit: 60
  },
  {
    id: 181,
    question: 'Em um gráfico V x t, a aceleração pode ser calculada pela tangente da reta.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Propriedade fundamental da cinemática, {{USER_NAME}}!',
    timeLimit: 60
  },
  {
    id: 196,
    question: 'O Registro Nacional Positivo de Condutores (RNPC) insere automaticamente condutores sem infrações nos últimos 12 meses.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'A adesão exige autorização prévia, não é automática, {{USER_NAME}}!',
    timeLimit: 60
  },
  {
    id: 226,
    question: 'Dentre as principais diferenças entre a descentralização e a desconcentração, está o número de pessoas jurídicas envolvidas.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! Descentralização envolve duas pessoas jurídicas; desconcentração ocorre internamente.',
    timeLimit: 60
  },
  {
    id: 240,
    question: 'O poder constituinte derivado reformador é o poder de elaborar uma nova Constituição.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção, {{USER_NAME}}! Esse é o poder originário. O reformador apenas altera a existente.',
    timeLimit: 60
  },
  {
    id: 250,
    question: 'O feminicídio tornou-se um delito autônomo após a Lei nº 14.994 de 2024.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Atualizadíssimo, {{USER_NAME}}! Lei recente de 2024.',
    timeLimit: 60
  },
  {
    id: 260,
    question: 'Dentre as garantias mínimas do acusado, está a comunicação prévia e pormenorizada da acusação formulada.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pacto de San José da Costa Rica em foco, {{USER_NAME}}! Parabéns por chegar ao fim deste simulado.',
    timeLimit: 60
  },
];
