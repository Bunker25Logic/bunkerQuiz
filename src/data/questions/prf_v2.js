import { PRF_TEXTS } from './prf_texts';

export const prf_v2 = [
  // IDs 33-36: SIMULADO 01 (ESPANHOL CONT.)
  {
    id: 33,
    category: 'PRF',
    question: 'Antoñito compartía la soga con otros niños del vecindario y la prestaba cuando se lo pedían.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Vamos com cautela, {{USER_NAME}}! O conto deixa claro que o personagem não emprestava sua corda a ninguém, somente ele sabia como manuseá-la, encarando-a como seu brinquedo favorito e quase uma extensão de si mesmo. O quarto parágrafo do conto expressa explicitamente que ele não compartilhava e não emprestava a corda a nenhuma outra criança.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },
  {
    id: 34,
    category: 'PRF',
    question: 'La soga siempre permanecía en el mismo estado, sin cambiar de color ni textura con el tiempo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Pense bem, {{USER_NAME}}! Podemos entender do texto que, por se tratar de uma corda, o tempo de uso e o manuseio constante trariam danos. O narrador relata detalhadamente a transformação: “Con el tiempo se volvió más flexible y oscura, casi verde y, por último, un poco viscosa y desagradable, en mi opinión.” Portanto, a afirmação de que não mudava é incorreta.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },
  {
    id: 35,
    category: 'PRF',
    question: 'A Antoñito López le gustaban los juegos peligrosos, como subir a la escalera del tanque de agua y encender papeles en la chimenea.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! O primeiro parágrafo descreve a personalidade intrépida e aventureira do personagem. Sendo uma criança de apenas sete anos, ele era extremamente ativo e o narrador descreve especificamente brincadeiras consideradas “perigosas” para a idade, como subir escadas altas e lidar com fogo na chaminé, o que estabelece o tom do conto.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },
  {
    id: 36,
    category: 'PRF',
    question: 'Al final, Antoñito logró amarrar al gato con la soga y lo usaba para jugar con él en el jardín.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado ao interpretar, {{USER_NAME}}! Em nenhum momento do conto o personagem usa a corda como guia ou para brincar COM o gato de forma amigável. Na verdade, o animal tinha pavor da corda: “El gato no se le acercaba y a veces... se demoraban sapos extasiados”. Além disso, quando Antoñito tenta algo agressivo, “Toñito quiso ahorcar un gato con la soga. La soga se rehusó. Era buena.” Logo, a interação sugerida na questão é falsa.',
    readingText: PRF_TEXTS.S1_SPANISH,
    timeLimit: 120
  },

  // IDs 37-54: SIMULADO 01 (PORTUGUÊS)
  {
    id: 37,
    category: 'PRF',
    question: 'A afirmação inicial do texto evidencia a alta incidência de acidentes de trabalho no Brasil.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Excelente, {{USER_NAME}}! A questão trata sobre compreensão textual. A frase em análise: “Até você terminar de ler este parágrafo, mais um acidente de trabalho será notificado no Brasil.” coloca o acidente como algo extremamente comum, corriqueiro e notificado em intervalos mínimos de tempo. Assim, pode-se depreender que a afirmação evidencia, sim, uma estatística alarmante e alta incidência no território nacional.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 120
  },
  {
    id: 38,
    category: 'PRF',
    question: 'Segundo as informações do texto, na contabilização dos dados apresentados pelo SmartLab, foram considerados os diferentes tipos de relações trabalhistas.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Não caia nessa, {{USER_NAME}}! O texto é restritivo. Veja o trecho: “Segundo dados do Observatório de Segurança e Saúde no Trabalho (SmartLab), que consideram apenas registros envolvendo pessoas com carteira assinada...”. Perceba que o autor deixa claro que apenas trabalhadores FORMAIS foram considerados. Por isso, não se pode afirmar que abrangeram "diferentes tipos" de relações (como informais ou autônomos).',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 120
  },
  {
    id: 39,
    category: 'PRF',
    question: 'O termo em destaque exerce uma função restritiva ao que foi dito anteriormente no trecho "SmartLab, que consideram apenas registros...".',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Análise gramatical apurada, {{USER_NAME}}! As orações subordinadas adjetivas explicativas (como esta, iniciada por "que" após vírgula) fornecem uma explicação adicional, mas não essencial para a identificação do termo anterior. Como há a presença obrigatória da vírgula antes do pronome relativo "que", a função é EXPLICATIVA, e não restritiva. Nas restritivas, a vírgula é inexistente.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 40,
    category: 'PRF',
    question: 'No primeiro parágrafo do texto, o termo “desses” realiza coesão anafórica.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Exato, {{USER_NAME}}! A coesão anafórica ocorre quando um termo retoma algo que já foi dito anteriormente no texto. No trecho “Em menos de quatro horas, mais uma pessoa morrerá em decorrência de um desses acidentes”, o vocábulo “desses” está remetendo diretamente à ideia de “acidente de trabalho” mencionada na primeira frase. Nota: DESSE (passado/anafórico) vs DESTE (futuro/catafórico).',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 41,
    category: 'PRF',
    question: 'No último parágrafo, o conectivo “Além disso” estabelece uma relação consecutiva.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atenção aos conectivos, {{USER_NAME}}! O conectivo “Além disso” é tipicamente ADITIVO. Ele serve para somar uma nova informação (a perda de dias de trabalho) a uma informação anterior (as perdas financeiras de R$ 13 bilhões). Relações consecutivas (consequência) seriam marcadas por termos como "de modo que", "consequentemente" ou "por isso".',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 42,
    category: 'PRF',
    question: 'O segundo período do último parágrafo poderia ser passado para a voz passiva como: “Os valores pagos pelo INSS... são considerados pelo montante”.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Gramática de Bunker, {{USER_NAME}}! Correto. O montante (sujeito agente) considera (verbo VTD) valores pagos (objeto direto). Na voz passiva analítica, o objeto vira sujeito: "Valores pagos pelo INSS são considerados pelo montante". A estrutura mantém a correção e o sentido perfeitamente.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 43,
    category: 'PRF',
    question: 'O adjetivo “grave”, grafado no último período do texto, é do tipo biforme.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento, {{USER_NAME}}! O adjetivo "grave" é UNIFORME. Ele possui uma única forma para ambos os gêneros (masculino e feminino). Exemplo: "um ferimento grave" (masc.) e "uma lesão grave" (fem.). Adjetivos biformes são aqueles que mudam a grafia, como "bom/boa" ou "perigoso/perigosa".',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 44,
    category: 'PRF',
    question: 'No primeiro período do segundo parágrafo, poderia ser inserido acento grave no vocábulo “a” após a palavra “suscetíveis”.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Regra de crase na veia, {{USER_NAME}}! Incorreto. No trecho "suscetíveis a condições", o "a" é apenas preposição (está no singular e a palavra seguinte "condições" está no plural e sem artigo). Para haver crase, seria necessário o artigo plural: "suscetíveis às condições". Crase de "a" (singular) antes de substantivo no plural é proibida.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 30
  },
  {
    id: 45,
    category: 'PRF',
    question: 'No último período do texto I, o pronome oblíquo átono “se” não poderia ser deslocado para antes da palavra “contabilizando”.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pura colocação pronominal, {{USER_NAME}}! A questão está certa. Há uma vírgula imediatamente antes do verbo "contabilizando". De acordo com a gramática normativa, não se inicia oração ou segmento após pausa pontuada com pronome oblíquo átono (próclise proibida). Portanto, a ênclise ("contabilizando-se") é obrigatória.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 46,
    category: 'PRF',
    question: 'O verbo “morrer”, utilizado no texto I, pode ser classificado como um verbo abundante.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! Verbos abundantes são aqueles que possuem mais de uma forma para o particípio passado. O verbo morrer possui: 1) Morrido (forma regular, usada com ter/haver) e 2) Morto (forma irregular, usada com ser/estar). Portanto, a classificação está correta.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 47,
    category: 'PRF',
    question: 'No primeiro período do terceiro parágrafo, a passagem “de trabalho” pode ser classificada como complemento nominal.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Sutileza gramatical, {{USER_NAME}}! A expressão "de trabalho" em "acidentes de trabalho" é ADJUNTO ADNOMINAL. Embora "acidentes" seja um substantivo abstrato, o trabalho é o agente ou a origem do acidente (natureza ativa), e não o paciente sofrido da ação. O adjunto adnominal possui essa natureza de origem/posse/agente.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 48,
    category: 'PRF',
    question: 'Em contramão do verbo “mostrar”, o verbo “abolir” é considerado defectivo.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Lexicologia pura, {{USER_NAME}}! Correto. Verbos defectivos são os que não possuem conjugação em todas as pessoas ou tempos. O verbo "abolir" não possui a primeira pessoa do presente do indicativo ("eu abolo" não existe) e, consequentemente, não possui o presente do subjuntivo completo. Já "mostrar" é um verbo regular completo.',
    readingText: PRF_TEXTS.S1_PORT_1,
    timeLimit: 60
  },
  {
    id: 49,
    category: 'PRF',
    question: 'Estabelece-se relação de oposição entre as duas orações de: “Porque é dramático, é fortemente desafiador.”',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Lógica textual, {{USER_NAME}}! O erro está no termo "oposição". No trecho citado, a relação é de CAUSA e CONSEQUÊNCIA. O fato de ser dramático (Causa) é o motivo para que seja fortemente desafiador (Consequência). Não há ideias contrárias, mas sim decorrentes uma da outra.',
    readingText: PRF_TEXTS.S1_PORT_2,
    timeLimit: 60
  },
  {
    id: 50,
    category: 'PRF',
    question: 'Depreende-se do texto que, na passagem de uma época para outra, o conservadorismo se exacerba.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Não extrapole, {{USER_NAME}}! O texto menciona que existem contradições entre valores novos e valores do ontem em busca de preservação. No entanto, afirmar que o conservadorismo "se exacerba" (torna-se mais forte ou agudo de forma generalizada) é uma conclusão que o texto de Paulo Freire não apresenta explicitamente. É erro de extrapolação.',
    readingText: PRF_TEXTS.S1_PORT_2,
    timeLimit: 60
  },
  {
    id: 51,
    category: 'PRF',
    question: 'Embora o texto seja predominantemente dissertativo, verificam-se nele traços do tipo narrativo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Pense na estrutura, {{USER_NAME}}! O texto é puramente dissertativo-expositivo. Ele discute conceitos, épocas históricas e a atitude crítica do homem. Não há personagens agindo no tempo, diálogos ou uma sequência de fatos (enredo) que caracterizariam o tipo narrativo. É uma explanação teórica e objetiva.',
    readingText: PRF_TEXTS.S1_PORT_2,
    timeLimit: 60
  },
  {
    id: 52,
    category: 'PRF',
    question: 'O trecho “À medida que” poderia ser alterado para “Na medida em que” sem prejuízo à correção.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Diferença essencial, {{USER_NAME}}! Jamais confunda. "À medida que" indica Proporcionalidade (conforme algo acontece, outra coisa ocorre na mesma razão). "Na medida em que" indica Causa/Explicação (já que/visto que). A substituição alteraria o sentido logico-semântico pretendido por Freire no texto.',
    readingText: PRF_TEXTS.S1_PORT_2,
    timeLimit: 60
  },
  {
    id: 53,
    category: 'PRF',
    question: 'No trecho “... mais precisamente, de sua objetivação”, o advérbio “precisamente” significa “rigorosamente”.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Semântica correta, {{USER_NAME}}! No contexto, ambos os advérbios remetem à ideia de exatidão, delimitação absoluta e rigor na definição do termo citado. São sinônimos contextuais perfeitos para expressar uma especificação mais apurada da ideia anterior.',
    readingText: PRF_TEXTS.S1_PORT_2,
    timeLimit: 60
  },
  {
    id: 54,
    category: 'PRF',
    question: 'No trecho sugerido por Paulo Freire sobre atitudes generalizadas, a crase utilizada é facultativa.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Regra rígida, {{USER_NAME}}! A crase em "frente às quais" é obrigatória porque é regida pela locução prepositiva feminina "frente a" somada ao artigo plural que acompanha o pronome relativo. Casos facultativos envolvem nomes próprios femininos sem sobrenome, pronomes possessivos femininos no singular ou após a preposição "até". Este não é o caso.',
    readingText: PRF_TEXTS.S1_PORT_2,
    timeLimit: 60
  },

  // IDs 55-60: SIMULADO 01 (RLM - RESOLUÇÕES COMPLETAS)
  {
    id: 55,
    category: 'PRF',
    question: 'No ano XXXX, um indivíduo pagou R$ 4.000,00 em multas. No ano seguinte, após reajuste de R$ 40,00 e 3 multas a mais, pagou R$ 6.720,00. Na situação, em XXXX, o valor de cada multa era R$ 800,00.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Matemática na mente, {{USER_NAME}}! Resolução completa:\n1. Sejam P o valor da multa e Q a quantidade. P * Q = 4000 (I).\n2. No ano seguinte: (P + 40) * (Q + 3) = 6720 (II).\n3. Expandindo (II): P*Q + 3P + 40Q + 120 = 6720.\n4. Substituindo (I): 4000 + 3P + 40(4000/P) + 120 = 6720.\n5. Resultando na equação: 3P² - 2600P + 160000 = 0.\n6. Usando Bhaskara: P = 800 ou P = 66,66. Como o valor era superior a 200, P = 800. Gabarito Certo!',
    timeLimit: 120
  },
  {
    id: 56,
    category: 'PRF',
    question: 'Para reduzir o teor de álcool de 40% para 22% em um recipiente de 100L, substituindo parte por gasolina pura, a quantidade retirada deve ser superior a 45 litros.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Paciência no cálculo, {{USER_NAME}}! Resolução:\n1. Volume constante = 100L. Álcool inicial = 40L. Gasolina inicial = 60L.\n2. Retira-se X litros da mistura (que contém 0,4X de álcool) e repõe-se com gasolina.\n3. Álcool final: 40 - 0,4X. Queremos que isso seja 22% de 100L, ou seja, 22L.\n4. Equação: 40 - 0,4X = 22 -> 0,4X = 18 -> X = 18 / 0,4 -> X = 45.\n5. Como o valor é EXATAMENTE 45, a afirmação de que é "superior" está errada.',
    timeLimit: 120
  },
  {
    id: 57,
    category: 'PRF',
    question: 'Três grupos de agentes (3, 5 e 7 proporcionais) somam 48 nos dois menores. As quantidades totais estão em progressão geométrica.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cálculo de PA/PG, {{USER_NAME}}!\n1. Grupos: 3x, 5x, 7x.\n2. Condição: 3x + 5x = 48 -> 8x = 48 -> x = 6.\n3. Valores reais: 18, 30 e 42 agentes.\n4. Razão entre termos: 30/18 = 5/3 (1,66...) e 42/30 = 7/5 (1,4). Como as razões são diferentes, não há uma Progressão Geométrica. Estão, na verdade, em PA de razão 12.',
    timeLimit: 120
  },
  {
    id: 58,
    category: 'PRF',
    question: 'O número de escolhas distintas para uma senha de 8 dígitos diferentes (0-9) é igual a 8!.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Análise Combinatória, {{USER_NAME}}! A ordem importa (123 != 321) e não há reposição. Trata-se de Arranjo de 10 elementos tomados 8 a 8.\nCálculo: A(10,8) = 10! / (10-8)! = 10! / 2! = 1.814.400.\nO valor 8! é igual a apenas 40.320. Portanto, o número real é muito superior a 8!. Gabarito Errado.',
    timeLimit: 120
  },
  {
    id: 59,
    category: 'PRF',
    question: 'A probabilidade de Mévio ser sorteado em um pelotão de 36 (4 colunas de 9), onde se sorteia um por coluna e depois um dos quatro sorteados, é 1/36.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Probabilidade certeira, {{USER_NAME}}! Resolução em etapas:\n1. Probabilidade de Mévio ser sorteado em sua coluna (entre 9 pessoas) = 1/9.\n2. Probabilidade de, uma vez sorteado na coluna, ser sorteado entre os 4 finalistas = 1/4.\n3. Probabilidade total (interseção de eventos independentes) = 1/9 * 1/4 = 1/36. Gabarito Certo.',
    timeLimit: 120
  },
  {
    id: 60,
    category: 'PRF',
    question: 'Considerando conjuntos A = {{1}, 1, 2} e B = {{2}, 3, 4}, o elemento 2 pertence ao conjunto B.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Teoria dos Conjuntos, {{USER_NAME}}! Olhe as chaves. No conjunto B, o elemento presente é o CONJUNTO unitário {2}, e não o número 2 puro. Pertinência de elemento deve ser exata. O número 2 PURO não consta em B. Estaria correto dizer que {2} pertence a B, ou que {{2}} está contido em B. Mas o item é Falso.',
    timeLimit: 60
  },

  // IDs 61-65: SIMULADO 01 (INFORMÁTICA)
  {
    id: 61,
    category: 'PRF',
    question: 'A Intranet é uma versão mais rápida da Internet, enquanto a Internet é limitada a serviços de comunicação por e-mail.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Conceitos de Rede, {{USER_NAME}}! Completamente errado. A Intranet é uma rede PRIVADA de acesso restrito a membros de uma organização. A Internet é a rede MUNDIAL de computadores, de acesso público e vasta quantidade de serviços que vão muito além do e-mail. A velocidade não é a definição técnica que as diferencia.',
    timeLimit: 60
  },
  {
    id: 62,
    category: 'PRF',
    question: 'O campo Com Cópia Oculta (BCC) é utilizado para identificar o destinatário principal do e-mail, sendo possível incluir apenas um endereço nesse campo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado no e-mail, {{USER_NAME}}! O campo BCC serve para enviar cópias ocultas a múltiplos destinatários sem que eles vejam os endereços uns dos outros. O destinatário principal deve ir no campo "Para" (To). Além disso, pode-se incluir quantos endereços forem necessários, limitados apenas pelo servidor, e não apenas um.',
    timeLimit: 60
  },
  {
    id: 63,
    category: 'PRF',
    question: 'O Windows 10 permite ocultar arquivos e pastas, mas o usuário pode configurar o Explorador de Arquivos para exibir itens ocultos.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Correto, {{USER_NAME}}! É um recurso de segurança e organização padrão. Na aba "Exibir" do Explorador de Arquivos, basta marcar a caixa "Itens ocultos" para revelar arquivos que possuem esse atributo ativado.',
    timeLimit: 60
  },
  {
    id: 64,
    category: 'PRF',
    question: 'Em Big Data, o Volume refere-se à quantidade de dados gerados e armazenados em diversas fontes.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Isso aí, {{USER_NAME}}! É um dos "5 Vs" do Big Data. O Volume trata da escala massiva de dados digitais produzidos por redes sociais, transações financeiras, sensores de IoT, etc., que exigem ferramentas especiais de processamento devido à sua magnitude.',
    timeLimit: 60
  },
  {
    id: 65,
    category: 'PRF',
    question: 'DDoS (Distributed Denial of Service) refere-se a enganar usuários falsificando a identidade de uma pessoa ou site.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Não confunda ataques, {{USER_NAME}}! O DDoS é um ataque de NEGAÇÃO DE SERVIÇO, onde uma rede de computadores infectados (botnet) inunda um servidor com tráfego massivo para derrubá-lo. O ato de enganar falsificando a identidade chama-se SPOOFING (de e-mail, de IP ou de site).',
    timeLimit: 60
  }
];
