import { PRF_TEXTS } from './prf_texts';

export const prf_v7 = [
  // IDs 201-223: SIMULADO 02 (TRÂNSITO CONT.)
  {
    id: 201,
    category: 'PRF',
    question: 'Para entrar à esquerda em via de sentido único, o condutor deve aproximar-se do bordo direito da pista antes de manobrar.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção à manobra, {{USER_NAME}}! Errado. Em vias de sentido ÚNICO, se você vai virar à esquerda, deve se aproximar do bordo ESQUERDO (Art. 38, II). A questão descreveu a regra geral de vias de duplo sentido ou conversões à direita.',
    timeLimit: 30
  },
  {
    id: 202,
    category: 'PRF',
    question: 'Bicicletas em vias rurais de pista dupla possuem preferência sobre os veículos automotores quando circulam nos bordos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Art. 58 do CTB. As bicicletas têm prioridade sobre os veículos motorizados. É dever dos veículos maiores zelar pela segurança dos ciclistas.',
    timeLimit: 30
  },
  {
    id: 203,
    category: 'PRF',
    question: 'Pedestres em vias rurais sem acostamento devem circular em sentido contrário ao deslocamento dos veículos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Art. 68, § 3º. Circular em sentido contrário permite que o pedestre veja o veículo se aproximando, aumentando sua segurança em locais sem área própria para caminhada.',
    timeLimit: 30
  },
  {
    id: 204,
    category: 'PRF',
    question: 'Automotor é um exemplo de classificação de veículos quanto à espécie segundo o CTB.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento à classificação, {{USER_NAME}}! Automotor é classificação quanto à TRAÇÃO. A classificação quanto à ESPÉCIE engloba: passageiros, carga, misto, tração, especial, etc.',
    timeLimit: 30
  },
  {
    id: 205,
    category: 'PRF',
    question: 'Os grupos de classificação de veículos no Brasil são: Tração, Espécie e Categoria.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Sim, {{USER_NAME}}! Art. 96 do CTB. É o mnemônico TEC. Cada um desses grupos possui diversas subdivisões técnicas importantes para a tipificação.',
    timeLimit: 30
  },
  {
    id: 206,
    category: 'PRF',
    question: 'Veículos importados por pessoa jurídica exigem que os dados do importador sejam prestados ao RENAVAM.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Legalidade pura, {{USER_NAME}}! Art. 125, III do CTB. O importador (PJ) é o responsável por fornecer as características originais e dados de identificação para o registro nacional.',
    timeLimit: 30
  },
  {
    id: 207,
    category: 'PRF',
    question: 'Veículos de uso bélico das Forças Armadas deverão obrigatoriamente ser licenciados pelo órgão executivo de trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção à exceção, {{USER_NAME}}! Art. 130, § 1º do CTB. Veículos de uso bélico estão ISENTOS de licenciamento anual e possuem numeração própria mantida pelas próprias Forças Armadas.',
    timeLimit: 30
  },
  {
    id: 208,
    category: 'PRF',
    question: 'O condutor que comete homicídio culposo na faixa de pedestres terá sua pena agravada judicialmente.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Terminologia técnica, {{USER_NAME}}! O erro é sutil: no Art. 302, § 1º, II, isso é uma CAUSA DE AUMENTO DE PENA (Majorante), e não uma circunstância agravante. Além disso, aplica-se o princípio da especialidade sobre o Art. 298.',
    timeLimit: 30
  },
  {
    id: 209,
    category: 'PRF',
    question: 'O juiz poderá aplicar a suspensão da CNH em caso de reincidência em crime de trânsito.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Poder-dever, {{USER_NAME}}! Art. 296 do CTB. Se o réu for reincidente na prática de crimes de trânsito, o juiz aplicará a suspensão da habilitação como medida pedagógica e punitiva.',
    timeLimit: 30
  },
  {
    id: 210,
    category: 'PRF',
    question: 'É proibido o transporte de passageiros em pé em veículos operando a título precário.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Segurança em 1º lugar, {{USER_NAME}}! Conforme a Res. 508/14, o transporte precário (como em caminhões autorizados) exige assentos fixos e proíbe terminantemente passageiros em pé.',
    timeLimit: 30
  },
  {
    id: 211,
    category: 'PRF',
    question: 'A idade mínima para transporte precário de passageiros é de 10 anos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! Res. 508/14. É vedado o transporte de crianças com idade inferior a 10 anos nesse tipo de operação precária devido ao risco elevado.',
    timeLimit: 30
  },
  {
    id: 212,
    category: 'PRF',
    question: 'O transporte precário é totalmente vedado em veículos do tipo basculante e boiadeiros.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Sim, {{USER_NAME}}! Res. 508/14. Estes veículos não possuem estrutura de segurança mínima ou conforto para serem adaptados ao transporte de pessoas, mesmo em emergência.',
    timeLimit: 30
  },
  {
    id: 213,
    category: 'PRF',
    question: 'Em trajetos que abrangem diversos municípios, deve-se obter autorização única da capital.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Incorreto, {{USER_NAME}}! Cada trecho sob circunscrição diferente (Municipal, Estadual, Federal) exige a anuência ou autorização da autoridade competente daquela via específica.',
    timeLimit: 30
  },
  {
    id: 214,
    category: 'PRF',
    question: 'Equipamentos obrigatórios são exigidos também para veículos em vias particulares fechadas.',
    options: ['Certo', 'Errado'],
    category: 'PRF',
    correct: 1,
    comment: 'Limitação do CTB, {{USER_NAME}}! As normas administrativas do código e as resoluções do CONTRAN aplicam-se às VIAS PÚBLICAS. Vias particulares não estão sob essa égide administrativa direta.',
    timeLimit: 30
  },
  {
    id: 215,
    category: 'PRF',
    question: 'O dispositivo de controle de ruído de motor é obrigatório em quadriciclos e triciclos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Conforme a Res. 993/23, estes veículos devem possuir sistema de escapamento e silenciador para controle de emissões sonoras e poluentes.',
    timeLimit: 30
  },
  {
    id: 216,
    category: 'PRF',
    question: 'O cronotacógrafo é obrigatório para tratores que desenvolvem velocidade acima de 60km/h.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Res. 993/23. Tratores de rodas de alta performance em velocidade exigem o registrador de tempo e velocidade para monitoramento de segurança.',
    timeLimit: 30
  },
  {
    id: 217,
    category: 'PRF',
    question: 'A altura máxima permitida para transporte de bicicleta no teto é de 4,40 metros do solo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Sim, {{USER_NAME}}! Res. 955/22 e Res. 882/21. O conjunto veículo + carga (bicicleta no teto) deve respeitar o limite máximo de altura das vias nacionais, que é 4,40m.',
    timeLimit: 30
  },
  {
    id: 218,
    category: 'PRF',
    question: 'O valor máximo de altura de carga projetada sobre o teto é de 1 metro.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado, {{USER_NAME}}! Segundo a Res. 955/22, o limite de projeção de carga acima do teto para veículos de passeio/utilitários é de apenas 50 centímetros.',
    timeLimit: 30
  },
  {
    id: 219,
    category: 'PRF',
    question: 'Segundo as resoluções, a bicicleta é considerada carga indivisível quando transportada.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Art. 10 da Res. 955/22. Por possuir dimensões fixas que não permitem o fracionamento prático para transporte, ela entra nessa categoria para fins de regulamentação.',
    timeLimit: 30
  },
  {
    id: 220,
    category: 'PRF',
    question: 'Radares portáteis em vias rurais devem ser instalados a no mínimo 1km de distância de um radar fixo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Margem curta, {{USER_NAME}}! Errado. A distância mínima exigida pela Res. 798/20 é de 2.000 metros (2km) em trechos de via rural para evitar "frenagens bruscas" desnecessárias.',
    timeLimit: 30
  },
  {
    id: 221,
    category: 'PRF',
    question: 'Ônibus e veículos leves com reboque são classificados como veículos PESADOS para fiscalização de velocidade.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Art. 12, § 1º da Res. 798/20. É uma regra fundamental na fiscalização: acoplou reboque, virou veículo pesado no radar.',
    timeLimit: 30
  },
  {
    id: 222,
    category: 'PRF',
    question: 'Juan, espanhol habilitado na Espanha, pode dirigir no Brasil por 180 dias com sua CNH de origem.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check internacional, {{USER_NAME}}! Sim, o Brasil possui acordos internacionais que permitem a reciprocidade para turistas por até 6 meses com documento estrangeiro válido.',
    timeLimit: 30
  },
  {
    id: 223,
    category: 'PRF',
    question: 'O limite total de largura para tratores agrícolas que transitam em via pública é de 2,60 metros.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Larga demais, {{USER_NAME}}! Incorreto. A Resolução 882/21 permite largura até 2,80 metros para tratores destinados a puxar maquinário agrícola.',
    timeLimit: 30
  },

  // IDs 224-230: SIMULADO 02 (DIREITO ADM START)
  {
    id: 224,
    category: 'PRF',
    question: 'A principal diferença entre descentralização e desconcentração é o número de pessoas jurídicas envolvidas.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Bunker Administrativo, {{USER_NAME}}! Sim. Descentralização = duas ou mais PJs (Ex: União e Autarquia). Desconcentração = uma única PJ repartindo competências em órgãos (Ex: PRF e Superintendências).',
    timeLimit: 60
  },
  {
    id: 225,
    category: 'PRF',
    question: 'Fundações públicas podem ter natureza de direito público ou privado conforme o ato instituidor.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! Existem as fundações autárquicas (públicas) e as fundações autorizadas por lei (privadas), cada uma com regime jurídico próprio.',
    timeLimit: 60
  },
  {
    id: 226,
    category: 'PRF',
    question: 'A presunção de veracidade admite prova em contrário, cabendo ao particular o ônus da prova.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Sim, {{USER_NAME}}! É a presunção JURIS TANTUM. O ato administrativo é tido como verdadeiro até que se prove (pelo interessado) que os fatos não ocorreram como narrados.',
    timeLimit: 60
  },
  {
    id: 227,
    category: 'PRF',
    question: 'Todos os elementos do ato administrativo (Competência, Finalidade, Forma, Motivo, Objeto) são discricionários.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Não confunda, {{USER_NAME}}! Competência, Finalidade e Forma são SEMPRE VINCULADOS. Apenas Motivo e Objeto podem ser discricionários nos atos que assim a lei permitir.',
    timeLimit: 60
  },
  {
    id: 228,
    category: 'PRF',
    question: 'A denúncia anônima sozinha é insuficiente para abrir PAD, exigindo sindicância investigatória prévia.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Súmula 611 STJ, {{USER_NAME}}! Correto. A Administração deve primeiro verificar a veracidade mínima dos fatos antes de expor o servidor a um processo disciplinar completo.',
    timeLimit: 60
  },
  {
    id: 229,
    category: 'PRF',
    question: 'O poder disciplinar alcança apenas os servidores públicos com cargo efetivo ou comissão.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Doutrina ampliada, {{USER_NAME}}! Errado. O poder disciplinar alcança qualquer um com VÍNCULO ESPECIAL com o Estado, inclusive particulares em contrato ou alunos da rede pública.',
    timeLimit: 60
  },
  {
    id: 230,
    category: 'PRF',
    question: 'A responsabilidade civil do Estado em direito de regresso contra o agente é subjetiva.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Importante: se o cidadão processa o Estado, a responsabilidade é Objetiva. Mas quando o Estado processa seu agente (REGRESSO), ele DEVE provar dolo ou culpa do servidor.',
    timeLimit: 60
  }
];
