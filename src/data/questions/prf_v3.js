import { PRF_TEXTS } from './prf_texts';

export const prf_v3 = [
  // IDs 66-67: SIMULADO 01 (INFORMÁTICA CONT.)
  {
    id: 66,
    category: 'PRF',
    question: 'O ataque de força bruta ocorre quando um atacante tenta adivinhar senhas explorando todas as combinações possíveis até encontrar a correta.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! O ataque de força bruta (Brute Force) é uma técnica exaustiva onde ferramentas automatizadas testam milhões de combinações de caracteres para descobrir uma credencial. Medidas como bloqueio de conta após poucas tentativas e uso de senhas complexas são as melhores defesas.',
    timeLimit: 60
  },
  {
    id: 67,
    category: 'PRF',
    question: 'Na computação em nuvem, a característica de escalabilidade refere-se à possibilidade de acessar os serviços apenas por meio de dispositivos móveis.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado com as definições, {{USER_NAME}}! A escalabilidade na nuvem é a capacidade de aumentar ou diminuir os recursos computacionais (CPU, memória, armazenamento) de forma rápida e automática para atender à variação da demanda. O acesso via dispositivos móveis é Mobilidade ou Ubiquidade.',
    timeLimit: 60
  },

  // IDs 68-72: SIMULADO 01 (FÍSICA)
  {
    id: 68,
    category: 'PRF',
    question: 'A força é maior na colisão com a barreira de pneus, e a energia dissipada é maior na colisão com a barreira de blocos deformáveis.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Física pura, {{USER_NAME}}! Correto. Na colisão com pneus, o veículo sofre um choque elástico ou parcialmente elástico (ele retorna), o que implica uma variação de movimento maior e, pela 2ª Lei de Newton, uma força maior. Já na barreira de blocos, ocorre um choque inelástico (o carro para), onde a energia cinética é quase totalmente convertida em deformação (dissipação).',
    timeLimit: 120
  },
  {
    id: 69,
    category: 'PRF',
    question: 'A força é maior na colisão com a barreira de blocos, e a energia dissipada é maior na colisão com a barreira de pneus.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Incorreto, {{USER_NAME}}! Como vimos na questão anterior, a força é maior nos pneus devido ao retorno do veículo (maior mudança de velocidade Vetorial). A energia dissipada é máxima nos blocos porque eles se deformam permanentemente para absorver o impacto.',
    timeLimit: 120
  },
  {
    id: 70,
    category: 'PRF',
    question: 'Se um conjunto Stock Car de 1320 kg está a 216 Km/h, o módulo da quantidade de movimento é de 79200 Kg.m/s.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Cálculo perfeito, {{USER_NAME}}! 1. Velocidade: 216 km/h / 3.6 = 60 m/s. 2. Quantidade de Movimento (Q): m * v = 1320 kg * 60 m/s = 79.200 Kg.m/s. Parabéns!',
    timeLimit: 120
  },
  {
    id: 71,
    category: 'PRF',
    question: 'Para realizar uma curva semicircular de 400m de diâmetro com atrito 0,8 sem derrapar, a velocidade máxima deve ser 180 km/h.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção aos números, {{USER_NAME}}! Cálculo: 1. Raio = Diâmetro/2 = 200m. 2. Força centrípeta = Atrito -> v² = R * u * g = 200 * 0,8 * 10 = 1600. 3. v = 40 m/s. 4. Convertendo: 40 * 3.6 = 144 km/h. O limite é 144, não 180. Gabarito Errado.',
    timeLimit: 120
  },
  {
    id: 72,
    category: 'PRF',
    question: 'Dois conjuntos de mesma massa a 200 km/h e 250 km/h em colisão inelástica terão velocidade final de 62,5 m/s.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check mate, {{USER_NAME}}! Conservação de energia: (m*200 + m*250) = 2m * Vf -> 450m = 2m*Vf -> Vf = 225 km/h. Convertendo para m/s: 225 / 3.6 = 62,5 m/s. Exato!',
    timeLimit: 120
  },

  // IDs 73-78: SIMULADO 01 (ÉTICA)
  {
    id: 73,
    category: 'PRF',
    question: 'A Comissão de Ética da Presidência da República é o único órgão competente para apurar falta ética dos servidores federais na administração direta.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Pense na estrutura, {{USER_NAME}}! Incorreto. O Decreto nº 1.171/94 determina que CADA órgão ou entidade da Administração Pública Federal (direta, indireta, autárquica e fundacional) deve instituir sua própria Comissão de Ética local.',
    timeLimit: 60
  },
  {
    id: 74,
    category: 'PRF',
    question: 'É dever do titular de órgão assegurar condições para que as Comissões de Ética cumpram suas funções sem prejuízo aos seus integrantes.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Conforme o Decreto nº 6.029/07, é dever da autoridade máxima garantir a estrutura necessária e a proteção funcional para que os membros da comissão ajam com independência e zelo.',
    timeLimit: 60
  },
  {
    id: 75,
    category: 'PRF',
    question: 'Qualquer cidadão ou pessoa jurídica pode provocar a atuação de uma Comissão de Ética visando a apuração de infração imputada a agente público.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Cidadania participante, {{USER_NAME}}! Correto. A atuação da CEP ou das comissões setoriais pode ser provocada por qualquer pessoa que identifique conduta antiética, fortalecendo o controle social na Administração.',
    timeLimit: 60
  },
  {
    id: 76,
    category: 'PRF',
    question: 'O espírito de solidariedade orienta o servidor a ser complacente em caso de erro ou infração para engrandecer o profissionalismo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Nunca, {{USER_NAME}}! O servidor deve agir com dignidade e decoro. Ser condizente com o erro alheio em nome da "solidariedade" é vedado pelo Art. XV, item c do Código de Ética (Decreto 1.171/94). Integridade vem antes do corporativismo.',
    timeLimit: 60
  },
  {
    id: 77,
    category: 'PRF',
    question: 'A classificação de sigilo de informações no grau Ultrassecreto é competência exclusiva do Presidente da República.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Lei de Acesso à Informação (LAI), {{USER_NAME}}! Incorreto. O Art. 27 da Lei 12.527/11 permite que também o Vice-Presidente, Ministros de Estado, Comandantes das Forças Armadas e Chefes de Missões diplomáticas classifiquem dados como Ultrassecretos.',
    timeLimit: 60
  },
  {
    id: 78,
    category: 'PRF',
    question: 'Informações de risco à segurança do Presidente são reservadas e o sigilo não ultrapassa o fim do seu mandato.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! É a literalidade do Art. 24, § 2º da LAI. Se houver reeleição, o prazo se estende até o final do último mandato exercido.',
    timeLimit: 60
  },

  // IDs 79-83: SIMULADO 01 (GEOPOLÍTICA)
  {
    id: 79,
    category: 'PRF',
    question: 'A diversidade regional do Brasil é um fator que contribui para a formação de uma identidade nacional coesa e homogênea.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Pense bem, {{USER_NAME}}! Errado. A diversidade gera pluralidade e identidades múltiplas, não homogeneidade. O Brasil é marcado por contrastes culturais e econômicos profundos entre suas regiões, o que é riqueza, mas não uniformidade.',
    timeLimit: 60
  },
  {
    id: 80,
    category: 'PRF',
    question: 'A fronteira Brasil-Bolívia é extensa (~3400km) e definida por áreas de alta biodiversidade como Amazônia e Pantanal.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Geografia na veia, {{USER_NAME}}! Correto. Essa fronteira é crucial para a segurança nacional e preservação ambiental, atravessando biomas fundamentais e enfrentando desafios de fiscalização transfronteiriça.',
    timeLimit: 60
  },
  {
    id: 81,
    category: 'PRF',
    question: 'A divisão política atual com 26 estados e o DF é suficiente para garantir a equidade na distribuição de recursos e serviços.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'A realidade é outra, {{USER_NAME}}! Incorreto. Persistem grandes desigualdades históricas, fiscais e de planejamento entre os entes federados, o que o sistema político-administrativo sozinho não consegue anular.',
    timeLimit: 60
  },
  {
    id: 82,
    category: 'PRF',
    question: 'A divisão regional do IBGE ignora aspectos físicos como relevo e clima para focar apenas em economia.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Longe disso, {{USER_NAME}}! O IBGE utiliza o conceito de macrorregiões que aglutinam critérios físicos (relevo, bioma), demográficos e socioeconômicos para o planejamento estatístico do país.',
    timeLimit: 60
  },
  {
    id: 83,
    category: 'PRF',
    question: 'Pedro Geiger projetou a divisão em 3 grandes complexos: Centro-Sul, Nordeste e Amazônia.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Muito bem, {{USER_NAME}}! São as Regiões Geoeconômicas. Diferente do IBGE, elas não respeitam os limites das divisas estaduais, focando na integração econômica e histórica de cada complexo.',
    timeLimit: 60
  },

  // IDs 84-96: SIMULADO 01 (TRÂNSITO)
  {
    id: 84,
    category: 'PRF',
    question: 'Tanto a utilização da via por pessoas como por animais é considerada trânsito segundo o CTB.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Art. 1º do CTB: Trânsito é a utilização das vias por pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não.',
    timeLimit: 30
  },
  {
    id: 85,
    category: 'PRF',
    question: 'A responsabilidade dos órgãos do SNT por danos aos cidadãos em virtude de omissão ou erro na manutenção é subjetiva.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado extra, {{USER_NAME}}! A responsabilidade é OBJETIVA, conforme o Art. 1º, § 3º do CTB. O Estado responde independentemente de dolo ou culpa por falhas na manutenção e sinalização que causem danos aos usuários.',
    timeLimit: 30
  },
  {
    id: 86,
    category: 'PRF',
    question: 'O CTB aplica-se às vias terrestres abertas à circulação, mas as normas não alcançam praias abertas à circulação pública.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Veja o Art. 2º, {{USER_NAME}}! Incorreto. Para fins do CTB, são consideradas vias terrestres as praias abertas à circulação pública e as vias internas de condomínios.',
    timeLimit: 30
  },
  {
    id: 87,
    category: 'PRF',
    question: 'Condutor deve manter distância de segurança lateral e frontal considerando velocidade e condições climáticas.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Direção defensiva, {{USER_NAME}}! Art. 29, II do CTB. É dever básico de todo condutor para evitar sinistros.',
    timeLimit: 30
  },
  {
    id: 88,
    category: 'PRF',
    question: 'Veículos de maior porte serão sempre responsáveis pela segurança dos menores e todos pela dos pedestres.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Regra de ouro, {{USER_NAME}}! Art. 29, § 2º. Estabelece a hierarquia de fragilidade no trânsito brasileiro.',
    timeLimit: 30
  },
  {
    id: 89,
    category: 'PRF',
    question: 'Em vias não iluminadas, o condutor deve utilizar, em regra, a luz baixa do veículo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Luz ALTA, {{USER_NAME}}! Em vias não iluminadas, a regra é o uso da luz alta, exceto ao cruzar com outro veículo ou seguir um veículo à frente para não ofuscar a visão do outro condutor.',
    timeLimit: 30
  },
  {
    id: 90,
    category: 'PRF',
    question: 'Vias arteriais têm velocidade máxima de 60km/h onde não houver sinalização.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso, {{USER_NAME}}! Art. 61. Urbanas: Rápida (80), Arterial (60), Coletora (40), Local (30).',
    timeLimit: 30
  },
  {
    id: 91,
    category: 'PRF',
    question: 'A manobra de retorno em aclives é permitida desde que não haja sinalização proibindo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Gravíssima, {{USER_NAME}}! Realizar retorno em aclives ou declives é infração gravíssima (Art. 206, II), mesmo sem placa, por representar alto risco à segurança viária.',
    timeLimit: 30
  },
  {
    id: 92,
    category: 'PRF',
    question: 'Em caso de pneu furado em rodovia, o condutor pode estacionar no acostamento se sinalizar corretamente a emergência.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! O acostamento pode ser usado em casos de força maior ou emergência devidamente sinalizada.',
    timeLimit: 30
  },
  {
    id: 93,
    category: 'PRF',
    question: 'Ultrapassar pela direita ônibus parado para desembarque em refúgio de segurança é permitido.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! É a exceção do Art. 200. Se houver o refúgio, o risco aos passageiros é mitigado e a manobra é legal.',
    timeLimit: 30
  },
  {
    id: 94,
    category: 'PRF',
    question: 'Ciclofaixas podem ou não possuir separação física da pista automotiva.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Conceito técnico, {{USER_NAME}}! Ciclovia tem separação física. Ciclofaixa é delimitada apenas por sinalização viária (faixas pintadas no chão).',
    timeLimit: 30
  },
  {
    id: 95,
    category: 'PRF',
    question: 'Edificações que atraem grande trânsito exigem anuência prévia do órgão de trânsito local.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Engenharia, {{USER_NAME}}! Art. 93 do CTB. Sem isso, grandes empreendimentos podem colapsar a mobilidade de uma região.',
    timeLimit: 30
  },
  {
    id: 96,
    category: 'PRF',
    question: 'É vedada a transação penal em crimes de lesão corporal culposa praticada no trânsito.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Possível sim, {{USER_NAME}}! Aplica-se a Lei 9.099/95 para crimes com pena máxima de até 2 anos. No caso da lesão culposa simples (Art. 303), os benefícios despenalizadores são cabíveis.',
    timeLimit: 30
  }
];
