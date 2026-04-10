import { PRF_TEXTS } from './prf_texts';

export const prf_v4 = [
  // IDs 97-111: SIMULADO 01 (TRÂNSITO CONT.)
  {
    id: 97,
    category: 'PRF',
    question: 'Para amarração da carga, a resistência à tração deve ser de no mínimo 1,50 vez o peso da carga.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado extra, {{USER_NAME}}! Conforme a Resolução nº 945/2022 do CONTRAN, os dispositivos de amarração (cintas, cabos) devem ter resistência total de no mínimo 2 (DUAS) VEZES o peso da carga, e não 1,5.',
    timeLimit: 30
  },
  {
    id: 98,
    category: 'PRF',
    question: 'Na falta de pontos de amarração suficientes, permite-se a fixação no próprio chassi do veículo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Art. 4º, § 5º da Res. 945/22: Na inexistência de pontos de amarração adequados, ou em número suficiente, fica permitida a fixação dos dispositivos de amarração no próprio chassi do veículo.',
    timeLimit: 30
  },
  {
    id: 99,
    category: 'PRF',
    question: 'Veículos tipo prancha transportando equipamentos exigem no mínimo 4 terminais de amarração por unidade.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! Art. 5º da Res. 945/22. Em veículos tipo prancha ou carroceria aberta, cada unidade de carga deve ser ancorada em pelo menos 4 terminais de amarração.',
    timeLimit: 30
  },
  {
    id: 100,
    category: 'PRF',
    question: 'Em fiscalização de cronotacógrafo, o PRF deve assinar o verso do disco ou fita diagrama.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Protocolo PRF, {{USER_NAME}}! Exatamente. Conforme a Res. 938/22, o agente deve identificar-se e assinar o verso, mencionando local, data e horário da fiscalização.',
    timeLimit: 30
  },
  {
    id: 101,
    category: 'PRF',
    question: 'O cronotacógrafo é obrigatório em todos os tipos de veículos, sem exceção.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Incorreto, {{USER_NAME}}! O cronotacógrafo é obrigatório para veículos de transporte escolar, carga com PBT > 4.536 kg e passageiros com mais de 10 lugares. Existem exceções.',
    timeLimit: 30
  },
  {
    id: 102,
    category: 'PRF',
    question: 'O cronotacógrafo deve disponibilizar dados das últimas 12 horas de operação.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: '24 HORAS, {{USER_NAME}}! O equipamento deve registrar e disponibilizar, a qualquer momento, as informações das últimas 24 horas de operação do veículo.',
    timeLimit: 30
  },
  {
    id: 103,
    category: 'PRF',
    question: 'A autorização para conduzir ciclomotor (ACC) é necessária para veículos com Vmax superior a 20 km/h.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Limite errado, {{USER_NAME}}! Segundo a Res. 789/20, a ACC é necessária para veículos com velocidade máxima superior a 25 km/h.',
    timeLimit: 30
  },
  {
    id: 104,
    category: 'PRF',
    question: 'Todos os tratores e veículos destinados à exportação estão isentos de identificação VIN.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado, {{USER_NAME}}! Tratores são isentos, mas veículos de exportação só são isentos se não estiverem sujeitos ao registro e licenciamento no Brasil.',
    timeLimit: 30
  },
  {
    id: 105,
    category: 'PRF',
    question: 'VIN – Número de Identificação do Veículo – possui 17 caracteres e é estruturado em três seções.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Padrão global, {{USER_NAME}}! Sim, composto pelas seções WMI, VDS e VIS, totalizando 17 caracteres alfanuméricos.',
    timeLimit: 30
  },
  {
    id: 106,
    category: 'PRF',
    question: 'O VIN deve ser gravado no lado esquerdo do chassi em profundidade mínima de 2 mm.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Dois erros, {{USER_NAME}}! DEVE ser gravado no lado DIREITO e a profundidade mínima é de 0,2 mm (Res. 968/22).',
    timeLimit: 30
  },
  {
    id: 107,
    category: 'PRF',
    question: 'A Segurança Viária baseia-se nos pilares: Fiscalização, Cidadania e Uniformização.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Mnemônico EEEL, {{USER_NAME}}! Educação, Engenharia e Esforço Legal. Estes são os três pilares que sustentam a Segurança Viária.',
    timeLimit: 30
  },
  {
    id: 108,
    category: 'PRF',
    question: 'A mera designação por portaria torna um agente competente para realizar fiscalização de trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Negativo, {{USER_NAME}}! O agente deve pertencer às categorias específicas listadas no CTB/Resoluções, não bastando apenas o ato administrativo.',
    timeLimit: 30
  },
  {
    id: 109,
    category: 'PRF',
    question: 'Infrações concorrentes geram um único AIT.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Lógica punitiva, {{USER_NAME}}! Sim. Se o cometimento de uma infração implica necessariamente a outra, lavra-se apenas uma autuação por economia e justiça.',
    timeLimit: 30
  },
  {
    id: 110,
    category: 'PRF',
    question: 'Em sinistros com conjuntos (trator + reboque), avalia-se o dano de forma unificada.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Individualizada, {{USER_NAME}}! De acordo com a Res. 810/23, cada veículo do conjunto deve ter seu próprio BAT e sua própria classificação de danos.',
    timeLimit: 30
  },
  {
    id: 111,
    category: 'PRF',
    question: 'Os danos em veículos são classificados em: Pequena, Média e Grande monta.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Estas são as três categorias técnicas oficiais após um sinistro.',
    timeLimit: 30
  },

  // IDs 112-130: SIMULADO 01 (DIREITO ADM/CONST/PENAL)
  {
    id: 112,
    category: 'PRF',
    question: 'Autarquias são entes de direito público da administração indireta.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pilar do Adm, {{USER_NAME}}! Sim, criadas por lei específica para exercer atividades típicas de Estado.',
    timeLimit: 60
  },
  {
    id: 113,
    category: 'PRF',
    question: 'A desconcentração envolve a repartição de competências entre diferentes pessoas jurídicas.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Hierarquia interna, {{USER_NAME}}! A desconcentração é uma técnica de organização que ocorre DENTRO da mesma pessoa jurídica. Entre PJs diferentes é DESCENTRALIZAÇÃO.',
    timeLimit: 60
  },
  {
    id: 114,
    category: 'PRF',
    question: 'A presunção de veracidade dos atos administrativos é absoluta (juris et jure).',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Relativa, {{USER_NAME}}! A presunção é juris tantum, ou seja, admite prova em contrário. O ônus da prova cabe ao particular que contesta o ato.',
    timeLimit: 60
  },
  {
    id: 115,
    category: 'PRF',
    question: 'O poder disciplinar permite punir particulares que possuam vínculo especial com o Estado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Doutrina Mazza, {{USER_NAME}}! Sim. Além de punir servidores, o poder disciplinar alcança particulares com contrato administrativo ou alunos de escolas públicas.',
    timeLimit: 60
  },
  {
    id: 116,
    category: 'PRF',
    question: 'O povo é o único e legítimo titular do poder constituinte originário.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Soberania, {{USER_NAME}}! Conforme Emmanuel Sieyès e a própria CF/88: "Todo poder emana do povo".',
    timeLimit: 60
  },
  {
    id: 117,
    category: 'PRF',
    question: 'O rol de direitos e garantias fundamentais da CF/88 é exaustivo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Exemplificativo, {{USER_NAME}}! Pela Cláusula de Abertura (§ 2º, Art. 5º), outros direitos decorrentes do regime e tratados internacionais são admitidos.',
    timeLimit: 60
  },
  {
    id: 118,
    category: 'PRF',
    question: 'O sigilo da fonte profissional é garantido pela CF, mas pode ser quebrado em qualquer investigação policial.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Direito Absoluto, {{USER_NAME}}! O Art. 5º, XIV da CF protege o sigilo da fonte quando necessário ao exercício profissional. É uma garantia de liberdade de informação.',
    timeLimit: 60
  },
  {
    id: 119,
    category: 'PRF',
    question: 'Compete privativamente ao Presidente nomear e exonerar os Ministros de Estado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Atribuição Executiva, {{USER_NAME}}! Literalidade do Art. 84, I da CF. É ato discricionário do Chefe do Executivo.',
    timeLimit: 60
  },
  {
    id: 120,
    category: 'PRF',
    question: 'A lei técnica ultrativa aplica-se ao fato praticado durante sua vigência mesmo após cessar as circunstâncias que a determinaram.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Art. 3º do CP, {{USER_NAME}}! Correto. Leis excepcionais e temporárias possuem ultratividade por natureza jurídica.',
    timeLimit: 60
  },
  {
    id: 121,
    category: 'PRF',
    question: 'O crime impossível admite punição por tentativa se a inidoneidade do meio for apenas relativa.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Teoria Objetiva Temperada, {{USER_NAME}}! Exato. Só não há punição se a ineficácia do meio ou impropriedade do objeto for ABSOLUTA. Sendo relativa, houve risco ao bem jurídico.',
    timeLimit: 60
  },
  {
    id: 122,
    category: 'PRF',
    question: 'O feminicídio tornou-se delito autônomo após a Lei nº 14.994 de 2024.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Atualização crítica, {{USER_NAME}}! Corretíssimo. Antes era qualificador do homicídio, hoje é crime independente.',
    timeLimit: 60
  },
  {
    id: 123,
    category: 'PRF',
    question: 'Somente crimes consumados com força letal permitem que o investigado constitua defensor público ou particular.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado, {{USER_NAME}}! Os crimes TENTADOS com uso de força letal também garantem esse direito ao agente de segurança (Art. 14-A do CPP).',
    timeLimit: 60
  },
  {
    id: 124,
    category: 'PRF',
    question: 'O MP pode desistir da ação penal pública proposta se convencer-se da inocência do réu.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Indisponibilidade, {{USER_NAME}}! Vigora o princípio da indisponibilidade. O MP pode pedir a absolvição, mas JAMAIS desistir da ação após proposta.',
    timeLimit: 60
  },
  {
    id: 125,
    category: 'PRF',
    question: 'Qualquer pessoa do povo pode provocar a iniciativa do MP fornecendo informações sobre o fato e autoria.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Notitia Criminis, {{USER_NAME}}! Sim, o cidadão pode e deve auxiliar a justiça reportando ilícitos.',
    timeLimit: 60
  },
  {
    id: 126,
    category: 'PRF',
    question: 'Peritos não oficiais prestam compromisso de bem e fielmente desempenhar o encargo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'CPP 159, {{USER_NAME}}! Correto. Apenas o perito oficial está dispensado do compromisso por já tê-lo feito na posse.',
    timeLimit: 60
  },
  {
    id: 127,
    category: 'PRF',
    question: 'A prisão em flagrante depende de ordem fundamentada da autoridade judiciária competente.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Independe de ordem, {{USER_NAME}}! O flagrante é uma exceção constitucional à ordem escrita por ser uma situação de urgência e casualidade.',
    timeLimit: 60
  },
  {
    id: 128,
    category: 'PRF',
    question: 'É lícito reter RG original se houver indício de falsidade material evidente.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Vedação Legal, {{USER_NAME}}! A Lei 5.553/68 PROÍBE a retenção de documentos de identificação pessoal por qualquer repartição ou pessoa jurídica.',
    timeLimit: 60
  },
  {
    id: 129,
    category: 'PRF',
    question: 'É dever de todos velar pela dignidade da criança, pondo-as a salvo de tratamento vexatório.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Art. 18 do ECA, {{USER_NAME}}! Pilar de proteção integral da infância.',
    timeLimit: 60
  },
  {
    id: 130,
    category: 'PRF',
    question: 'O TCO pode ser lavrado pela PRF conforme decisão do STF e Decreto 10.073/19.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Fim do Simulado 01! Excelente desempenho, {{USER_NAME}}. A PRF possui essa competência garantida para otimizar a atividade policial.',
    timeLimit: 60
  }
];
