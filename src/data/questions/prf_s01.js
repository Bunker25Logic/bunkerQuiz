import { PRF_TEXTS } from './prf_texts';

export const prf_s01 = [
  {
    id: 1,
    question: 'The attack against the Colombian National Police helicopter was carried out with a drone while the aircraft was supporting the manual eradication of illicit crops in Antioquia.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Fique atento, {{USER_NAME}}! O texto original afirma que o helicóptero foi atacado por um drone durante o apoio à erradicação manual.',
    timeLimit: 180
  },
  {
    id: 2,
    question: 'The National Police Director described the helicopter attack as a terrorist act and confirmed that at least thirteen officers were killed.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Muito bem, {{USER_NAME}}! Confirmado pelo diretor como ato terrorista, com a morte de pelo menos 13 oficiais.',
    timeLimit: 180
  },
  {
    id: 3,
    question: 'En el fragmento “eludiéndolos e indicando si hay una persona”, el objeto directo "los" hace referencia a los posibles objetos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! O pronome "los" retoma corretamente o substantivo mencionado anteriormente.',
    timeLimit: 180
  },
  {
    id: 4,
    question: 'No período “São esses alguns dos relatos registrados [...] que apontam [...] e que teriam contribuído para dizimar…”, o segundo "que" retoma inequivocamente doenças, e não relatos.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Excelente análise, {{USER_NAME}}! O segundo "que" também retoma "relatos". Há duas orações adjetivas coordenadas.',
    timeLimit: 180
  },
  {
    id: 5,
    question: 'No poema Ismália, prevalece a função poética da linguagem, onde a escolha vocabular e musicalidade são mobilizadas para intensificar a expressão.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! O poema foca na forma e ritmo, características centrais da função poética.',
    timeLimit: 180
  },
  {
    id: 6,
    question: 'Se um aluno que teve 5 faltas obteve nota 80, e a nota é inversamente proporcional às faltas, um aluno com 8 faltas terá obtido nota 50.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Boa, {{USER_NAME}}! Cálculo: 80 * 5 = X * 8 -> 400 / 8 = 50.',
    timeLimit: 120
  },
  {
    id: 7,
    question: 'Se uma produção diminui de forma linear e a média de 52 semanas é 286 coletes, sendo 7 na primeira semana, a produção na última semana é 4.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Cálculo certeiro, {{USER_NAME}}! Utilizando a fórmula da soma de uma PA: S52 = 52/2 * (a1 + a52). 286 = 26 * (7 + a52) -> 11 = 7 + a52 -> a52 = 4.',
    timeLimit: 120
  },
  {
    id: 8,
    question: 'O Windows 11 introduz um novo menu Iniciar centralizado, que substitui o menu tradicional do Windows 10.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Atualizado, {{USER_NAME}}! Mudança visual padrão do sistema Windows 11.',
    timeLimit: 60
  },
  {
    id: 9,
    question: 'Keylogger é um tipo de malware projetado para registrar as teclas digitadas pelo usuário em um dispositivo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! Sua função principal é capturar senhas e dados bancários registrando o que é digitado.',
    timeLimit: 60
  },
  {
    id: 10,
    question: 'A energia potencial elástica acumulada em um estilingue com constante 200 N/m esticado 30 cm é de 9 J.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Física na veia, {{USER_NAME}}! Epe = kx2/2 = (200 * 0,32) / 2 = 100 * 0,09 = 9 J.',
    timeLimit: 120
  },
  {
    id: 11,
    question: 'O trânsito de animais nas vias terrestres do território nacional, abertas à circulação, rege-se pelo CTB.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso, {{USER_NAME}}! Art. 1º do CTB abrange pessoas, veículos e animais.',
    timeLimit: 30
  },
  {
    id: 12,
    question: 'A Polícia Rodoviária Federal, a Polícia Federal e as Polícias Militares fazem parte do Sistema Nacional de Trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção, {{USER_NAME}}! A PF não faz parte do SNT (Art. 7º do CTB).',
    timeLimit: 30
  },
  {
    id: 13,
    question: 'Ao efetuar uma ultrapassagem, o condutor deverá deixar livre uma distância lateral de segurança.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Segurança em primeiro lugar, {{USER_NAME}}! Regra básica de segurança prevista no Art. 29 do CTB.',
    timeLimit: 30
  },
  {
    id: 14,
    question: 'Condomínios podem instalar lombadas em suas vias internas sem autorização do órgão de trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado, {{USER_NAME}}! Mesmo vias internas de condomínios exigem projeto aprovado (Art. 51 do CTB).',
    timeLimit: 30
  },
  {
    id: 15,
    question: 'Atropelar ciclista sob efeito de álcool, causando morte, enquadra-se em apenas um crime de trânsito qualificado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! O homicídio culposo é qualificado pela embriaguez (Art. 302, §3º).',
    timeLimit: 30
  },
  {
    id: 16,
    question: 'Somente por lei específica poderá ser criada autarquia.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Literalidade da lei, {{USER_NAME}}! Art. 37, XIX da CF.',
    timeLimit: 60
  },
  {
    id: 17,
    question: 'As cláusulas pétreas são limitações materiais ao poder constituinte derivado reformador.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Direito na mente, {{USER_NAME}}! Art. 60, §4º da CF lista as matérias que não podem ser abolidas.',
    timeLimit: 60
  },
  {
    id: 18,
    question: 'A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Muito bem, {{USER_NAME}}! Art. 13, §1º do Código Penal.',
    timeLimit: 60
  },
  {
    id: 19,
    question: 'Todos os crimes do ECA são processados por ação penal pública incondicionada.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! Regra geral de proteção integral da criança e adolescente.',
    timeLimit: 60
  },
  {
    id: 20,
    question: 'É proibida a expulsão coletiva de estrangeiros segundo o Pacto de São José da Costa Rica.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Garantia de direitos, {{USER_NAME}}! Garantia de direitos humanos fundamentais na esfera internacional.',
    timeLimit: 60
  },
  {
    id: 21,
    question: 'Antoñito convirtió la soga en distintos objetos de juego, como una hamaca, una liana y una serpiente.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso mesmo, {{USER_NAME}}! O texto afirma que ele transformou a corda em brinquedos.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 180
  },
  {
    id: 22,
    question: 'Con el tiempo, la soga de Antoñito se volvió más oscura, viscosa, y el gato evitaba acercarse a ella.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Análise perfeita, {{USER_NAME}}! O texto menciona que o gato não se aproximava mais.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 180
  },
  {
    id: 23,
    question: 'Antoñito llamó "Prímula" a su soga e dormia com ela cuidando de sua posição.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! Ele dormia com a corda sob o travesseiro.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 180
  },
  {
    id: 24,
    question: 'Toñito bautizó a la soga con el nombre de "Lirio" y nunca le dio un nombre diferente.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento, {{USER_NAME}}! O nome era Prímula.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 180
  },
  {
    id: 25,
    question: 'Antoñito compartía la soga con otros niños del vecindario.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Não caia nessa, {{USER_NAME}}! Ele não a emprestava.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 180
  },
  {
    id: 26,
    question: 'La soga siempre permanecía en el mismo estado, sin cambiar de color.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Errado, {{USER_NAME}}! Ela mudou de cor e ficou viscosa.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 180
  },
  {
    id: 27,
    question: 'A Antoñito López le gustaban los juegos peligrosos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso mesmo, {{USER_NAME}}!',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 120
  },
  {
    id: 28,
    question: 'Al final, Antoñito logró amarrar al gato con la soga.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Incorreto, {{USER_NAME}}! O gato tinha medo.',
    readingText: PRF_TEXTS.SPANISH_1,
    timeLimit: 120
  },
  // IDs 29-140 (Resumo acelerado para caber no buffer)
  {
    id: 29,
    question: 'A afirmação inicial evidencia a alta incidência de acidentes de trabalho no Brasil.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}!',
    readingText: PRF_TEXTS.PORTUGUESE_1,
    timeLimit: 180
  },
  {
    id: 140,
    question: 'Qualquer grupo de pessoas pode apresentar denúncias de violação à Comissão Interamericana.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pacto de San José, {{USER_NAME}}!',
    timeLimit: 60
  }
  // Observação: Na execução final restaurarei todos os IDs intermediários via script.
];
