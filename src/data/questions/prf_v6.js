import { PRF_TEXTS } from './prf_texts';

export const prf_v6 = [
  // IDs 166-170: SIMULADO 02 (RLM CONT.)
  {
    id: 166,
    category: 'PRF',
    question: 'Na função logarítmica 2*log2(1/4) + log4(8), o resultado final é igual a -3/2.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Matemática na mente, {{USER_NAME}}! Vamos resolver por partes:\n1. 2 * log2(1/4) = 2 * (-2) = -4.\n2. log4(8) = log2(8) / log2(4) = 3 / 2 = 1.5.\n3. Resultado: -4 + 1.5 = -2.5 (ou -5/2).\nA afirmação dizia -3/2, portanto está Errada.',
    timeLimit: 120
  },
  {
    id: 167,
    category: 'PRF',
    question: 'O número de impressões digitalizadas por dia é diretamente proporcional ao número de membros da equipe, dadas as mesmas condições.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Lógica Proporcional, {{USER_NAME}}! Correto. Mantendo as mesmas condições de trabalho (horas, ferramentas), se você dobra a equipe, dobra a produção. É uma relação de proporcionalidade direta clássica.',
    timeLimit: 60
  },
  {
    id: 168,
    category: 'PRF',
    question: 'Para dobrar as digitalizações, é suficiente aumentar em 25% a equipe e alterar o regime para 9 horas diárias.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cálculo de Regra de Três, {{USER_NAME}}! Vamos conferir:\nEquipe (1) -> 6h -> 7.2 mil.\nEquipe (1.25) -> 9h -> X mil.\nX = 1.25 * (9/6) * 7.2 = 13.5 mil.\nPara dobrar, seriam necessários 14.4 mil (2 * 7.2). Como 13.5 é menor que 14.4, a afirmação está Errada.',
    timeLimit: 120
  },
  {
    id: 169,
    category: 'PRF',
    question: 'A probabilidade de um policial ter exatamente 3 meninas e 2 meninos (chance de 50% cada) é de 3/16.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Probabilidade Binomial, {{USER_NAME}}!\nFórmula: C(5,3) * (1/2)³ * (1/2)².\nC(5,3) = 10 maneiras.\nProbabilidade = 10 * (1/32) = 10/32 = 5/16.\nA afirmação dizia 3/16, portanto está Errada.',
    timeLimit: 120
  },
  {
    id: 170,
    category: 'PRF',
    question: 'Em uma PA onde entre 6h e 7h houve 12 ligações e a razão horária é 4, a quantidade entre 18h e 19h será 60.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Progressão Aritmética, {{USER_NAME}}! \na1 = 12.\nO intervalo 18h-19h é o 13º termo (18 - 6 + 1).\na13 = a1 + (13-1)*r = 12 + 12*4 = 12 + 48 = 60. Perfeito!',
    timeLimit: 90
  },

  // IDs 171-177: SIMULADO 02 (INFORMÁTICA)
  {
    id: 171,
    category: 'PRF',
    question: 'A Intranet é uma versão reduzida da Internet, acessível apenas em regiões específicas do mundo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Conceitos de Rede, {{USER_NAME}}! Errado. A Intranet não é uma versão "reduzida" geográfica, mas sim PRIVADA. Ela usa os mesmos protocolos da Internet, mas o acesso é restrito aos membros de uma rede local ou organização específica.',
    timeLimit: 60
  },
  {
    id: 172,
    category: 'PRF',
    question: 'Cookies são pequenos arquivos usados para coletar informações e personalizar a navegação do usuário.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Segurança Web, {{USER_NAME}}! Sim. Eles armazenam preferências, tokens de sessão e dados de navegação para facilitar o retorno do usuário ao site com configurações personalizadas.',
    timeLimit: 60
  },
  {
    id: 173,
    category: 'PRF',
    question: 'A assinatura de e-mail é um recurso usado para adicionar automaticamente informações de contato ao final das mensagens.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Uso de ferramentas, {{USER_NAME}}! Correto. É uma funcionalidade padrão dos clientes de e-mail que economiza tempo e padroniza a comunicação profissional.',
    timeLimit: 60
  },
  {
    id: 174,
    category: 'PRF',
    question: 'No Windows 10, o atalho END + DELETE é usado para excluir permanentemente um arquivo ou pasta.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atalhos de sistema, {{USER_NAME}}! O atalho correto para exclusão permanente (sem passar pela lixeira) é SHIFT + DELETE. "End" não tem essa função combinatória no explorador.',
    timeLimit: 30
  },
  {
    id: 175,
    category: 'PRF',
    question: 'Ransomware é um tipo de malware que se propaga automaticamente sem interação do usuário.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Segurança da Informação, {{USER_NAME}}! Incorreto. O malware que se propaga sozinho é o WORM. O Ransomware foca no sequestro de dados via criptografia para exigir resgate.',
    timeLimit: 60
  },
  {
    id: 176,
    category: 'PRF',
    question: 'O firewall é um dispositivo de segurança que monitora e controla o tráfego que entra ou sai de uma rede.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Proteção perimetral, {{USER_NAME}}! Exato. Ele atua como uma barreira baseada em regras de segurança pré-estabelecidas para bloquear acessos suspeitos.',
    timeLimit: 60
  },
  {
    id: 177,
    category: 'PRF',
    question: 'O uso de cloud computing elimina completamente a necessidade de manutenção de infraestrutura local.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Mito da nuvem, {{USER_NAME}}! Errado. Embora reduza drasticamente, ainda é necessária infraestrutura local mínima (terminais, rede de acesso, roteadores) para se conectar aos serviços na nuvem.',
    timeLimit: 60
  },

  // IDs 178-182: SIMULADO 02 (FÍSICA)
  {
    id: 178,
    category: 'PRF',
    question: 'O movimento retilíneo uniforme (MRU) sempre é progressivo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cinemática básica, {{USER_NAME}}! Errado. O MRU pode ser progressivo (v > 0) ou retrógrado (v < 0), dependendo do sentido do movimento em relação ao referencial adotado.',
    timeLimit: 60
  },
  {
    id: 179,
    category: 'PRF',
    question: 'Em um gráfico V x t de um MRUV, a aceleração pode ser calculada pelo módulo da tangente do ângulo da reta.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Propriedade gráfica, {{USER_NAME}}! Correto. A inclinação da reta (tangente) no gráfico de velocidade por tempo representa numericamente a aceleração do corpo.',
    timeLimit: 90
  },
  {
    id: 180,
    category: 'PRF',
    question: 'O alcance máximo de um objeto lançado obliquamente ocorre quando o ângulo de lançamento é de 45°.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Lançamento oblíquo, {{USER_NAME}}! Correto. Para uma mesma velocidade inicial, o ângulo de 45° é o ponto ideal que maximiza a projeção horizontal no vácuo.',
    timeLimit: 60
  },
  {
    id: 181,
    category: 'PRF',
    question: 'O momento linear e o impulso são grandezas vetoriais que podem ser medidas em N.s ou kg.m/s.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Dinâmica aplicada, {{USER_NAME}}! Sim. Pelo Teorema do Impulso, I = dQ. Como são equivalentes, as unidades de força*tempo (N.s) e massa*velocidade (kg.m/s) são intercambiáveis.',
    timeLimit: 60
  },
  {
    id: 182,
    category: 'PRF',
    question: 'Um corpo em equilíbrio tem quantidade de movimento necessariamente nula.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado extra, {{USER_NAME}}! Equilíbrio significa que a FORÇA RESULTANTE é zero. Isso ocorre tanto no repouso (v=0, Q=0) quanto no MRU (v constante != 0, Q != 0). Logo, não é "necessariamente" nula.',
    timeLimit: 60
  },

  // IDs 183-188: SIMULADO 02 (ÉTICA)
  {
    id: 183,
    category: 'PRF',
    question: 'Segundo Aristóteles, os seres morais são definidos pelos hábitos e costumes desenvolvidos no tempo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Filosofia ética, {{USER_NAME}}! Sim. A ética das virtudes de Aristóteles foca na prática repetida (hábito) para moldar o caráter virtuoso do cidadão.',
    timeLimit: 60
  },
  {
    id: 184,
    category: 'PRF',
    question: 'A ética regulamenta as ações humanas, configurando-se como teorias expressas em princípios e normas.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Definição correta, {{USER_NAME}}! A ética é a reflexão filosófica que fornece a base teórica para as normas morais e jurídicas da sociedade.',
    timeLimit: 60
  },
  {
    id: 185,
    category: 'PRF',
    question: 'Novas práticas sociais progressistas representam um estado de amoralidade por não manterem valores tradicionais.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Pense sociologicamente, {{USER_NAME}}! Errado. Mudanças de valores não significam "ausência de moral", mas sim uma REAVALIAÇÃO ética. A ética não está presa ao conservadorismo.',
    timeLimit: 60
  },
  {
    id: 186,
    category: 'PRF',
    question: 'A ética está relacionada a princípios universais, enquanto a moral refere-se a costumes mutáveis conforme a cultura.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Distinção clássica, {{USER_NAME}}! Exato. Ética (Universal/Teórica) vs Moral (Cultural/Prática/Temporal).',
    timeLimit: 60
  },
  {
    id: 187,
    category: 'PRF',
    question: 'A imoralidade administrativa é capaz de configurar ato de improbidade passível de sanção.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Direito Adm, {{USER_NAME}}! Sim. O princípio da moralidade é pilar da Administração Pública. Sua violação grave leva às penalidades da Lei de Improbidade.',
    timeLimit: 60
  },
  {
    id: 188,
    category: 'PRF',
    question: 'No serviço público, é dispensável o dever de atuar com lealdade às instituições públicas.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Dever funcional, {{USER_NAME}}! Incorreto. A lealdade às instituições é um dever fundamental do servidor previsto na Lei 8.112/90.',
    timeLimit: 60
  },

  // IDs 189-193: SIMULADO 02 (GEOPOLÍTICA)
  {
    id: 189,
    category: 'PRF',
    question: 'A Região Concentrada (Milton Santos) integra os principais meios técnico-científicos e as finanças do país.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Geografia Crítica, {{USER_NAME}}! Correto. Engloba Sudeste e Sul, sendo o núcleo do "meio técnico-científico-informacional" brasileiro.',
    timeLimit: 60
  },
  {
    id: 190,
    category: 'PRF',
    question: 'A produção de alimentos do Nordeste é suficiente para abastecer todas as demais regiões brasileiras.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Economia regional, {{USER_NAME}}! Incorreto. Apesar do agronegócio no Vale do São Francisco, o Nordeste ainda depende da importação de vários gêneros alimentícios de outras regiões.',
    timeLimit: 60
  },
  {
    id: 191,
    category: 'PRF',
    question: 'Brasília funciona como um núcleo produtivo nacional diretamente integrado às indústrias de SP e RJ.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Função urbana, {{USER_NAME}}! Errado. Brasília tem função eminentemente POLÍTICO-ADMINISTRATIVA. Sua integração industrial é limitada se comparada ao eixo Rio-São Paulo.',
    timeLimit: 60
  },
  {
    id: 192,
    category: 'PRF',
    question: 'O Centro-Oeste lidera a produção de soja e milho devido à mecanização e infraestrutura logística.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Agronegócio, {{USER_NAME}}! Sim. A região consolidou-se como o celeiro do país e do mundo através de forte investimento tecnológico na terra.',
    timeLimit: 60
  },
  {
    id: 193,
    category: 'PRF',
    question: 'Nas últimas décadas, a Região Norte tornou-se um grande polo industrial central ao lado do Sudeste.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Análise de polos, {{USER_NAME}}! Incorreto. Embora tenha a Zona Franca de Manaus, o Norte ainda enfrenta carências logísticas imensas que impedem um protagonismo industrial equiparável ao Sudeste.',
    timeLimit: 60
  },

  // IDs 194-200: SIMULADO 02 (TRÂNSITO)
  {
    id: 194,
    category: 'PRF',
    question: 'A adesão ao Registro Nacional Positivo de Condutores (RNPC) ocorre de forma automática para quem não tem multas.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Nova regra do CTB, {{USER_NAME}}! Errado. O condutor deve SOLICITAR autorização prévia para ser incluído no cadastro positivo.',
    timeLimit: 30
  },
  {
    id: 195,
    category: 'PRF',
    question: 'Condutor de transporte escolar deve ter idade superior a 21 anos e ser habilitado na categoria D.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Literalidade do Art. 138, {{USER_NAME}}! Correto. São requisitos rigorosos para garantir a segurança dos estudantes.',
    timeLimit: 30
  },
  {
    id: 196,
    category: 'PRF',
    question: 'O canteiro central é a parte da via destinada a parada ou estacionamento em caso de emergência.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Definições do Anexo I, {{USER_NAME}}! Incorreto. A descrição dada é a do ACOSTAMENTO. O canteiro central é o separador físico entre as pistas.',
    timeLimit: 30
  },
  {
    id: 197,
    category: 'PRF',
    question: 'A operação de carga e descarga em via pública é considerada trânsito conforme o Código Brasileiro.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Art. 1º do CTB, {{USER_NAME}}! Sim, trânsito abrange circulação, parada, estacionamento e carga/descarga.',
    timeLimit: 30
  },
  {
    id: 198,
    category: 'PRF',
    question: 'O conceito de trânsito estabelecido pelo código não engloba animais não conduzidos.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Falso, {{USER_NAME}}! O código cita "animais, isolados ou em grupos, conduzidos ou não". Animais soltos na pista são responsabilidade de trânsito.',
    timeLimit: 30
  },
  {
    id: 199,
    category: 'PRF',
    question: 'Em nenhuma hipótese será admitida a circulação pelo lado esquerdo da via no Brasil.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Regras de Circulação, {{USER_NAME}}! Incorreto. Existem exceções sinalizadas para ultrapassagens ou configurações específicas de fluxo determinadas pela autoridade.',
    timeLimit: 30
  },
  {
    id: 200,
    category: 'PRF',
    question: 'Veículos precedidos de batedores possuem livre circulação, estacionamento e parada em qualquer local.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção, {{USER_NAME}}! Eles possuem apenas PRIORIDADE DE PASSAGEM. Livre circulação/estacionamento é prerrogativa de veículos de emergência (polícia, ambulância) em serviço.',
    timeLimit: 30
  }
];
