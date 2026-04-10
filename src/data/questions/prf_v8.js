import { PRF_TEXTS } from './prf_texts';

export const prf_v8 = [
  // IDs 231-260: SIMULADO 02 (CONCLUSÃO - DIREITOS)
  {
    id: 231,
    category: 'PRF',
    question: 'O poder constituinte derivado reformador é considerado um poder jurídico, limitado e condicionado à Constituição.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Direito na mente, {{USER_NAME}}! Sim, diferente do originário (que é político e ilimitado), o reformador deve seguir as regras de processo legislativo e respeitar as cláusulas pétreas impostas pela CF/88.',
    timeLimit: 60
  },
  {
    id: 232,
    category: 'PRF',
    question: 'O preso possui o direito fundamental à identificação dos responsáveis por sua prisão ou por seu interrogatório policial.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! É uma garantia fundamental prevista no Art. 5º, LXIV da Constituição para coibir abusos de autoridade e garantir a transparência do ato estatal.',
    timeLimit: 60
  },
  {
    id: 233,
    category: 'PRF',
    question: 'É vedada a dispensa de empregado sindicalizado até o prazo de 2 anos após o término do mandato diretivo.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado com os prazos, {{USER_NAME}}! A estabilidade sindical dura desde o registro da candidatura até UM ANO após o final do mandato. A questão errou ao citar 2 anos.',
    timeLimit: 60
  },
  {
    id: 234,
    category: 'PRF',
    question: 'O brasileiro que fizer pedido expresso de perda de nacionalidade fica permanentemente impedido de readquiri-la.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Atualização EC 131/23, {{USER_NAME}}! Errado. Conforme o novo texto do Art. 12, § 5º, a renúncia não impede o interessado de readquirir sua nacionalidade originária nos termos da lei. O Brasil agora busca evitar a apatridia.',
    timeLimit: 60
  },
  {
    id: 235,
    category: 'PRF',
    question: 'O Presidente da República ficará suspenso de suas funções após a instauração de processo por crime de responsabilidade no Senado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Processo no Executivo, {{USER_NAME}}! Correto. Admitida a acusação pela Câmara (2/3) e instaurado o processo no Senado, o Presidente é afastado por até 180 dias enquanto aguarda o julgamento.',
    timeLimit: 60
  },
  {
    id: 236,
    category: 'PRF',
    question: 'O Poder Público deve promover a educação ambiental em todos os níveis de ensino e a conscientização pública para preservação.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Ambiental na veia, {{USER_NAME}}! Art. 225, § 1º, VI da CF. A educação ambiental é um dever estatal imposto para garantir o equilíbrio ecológico das futuras gerações.',
    timeLimit: 60
  },
  {
    id: 237,
    category: 'PRF',
    question: 'No crime de contrabando, é inadmissível a aplicação do princípio da insignificância como regra geral.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Súmulas Criminais, {{USER_NAME}}! Sim. Diferente do descaminho, o contrabando atinge a saúde e a segurança pública (importação de bens proibidos), o que impede a bagatela em regra. Nota: STJ abre exceção mínima para cigarros até 1.000 maços.',
    timeLimit: 60
  },
  {
    id: 238,
    category: 'PRF',
    question: 'O Código Penal adota a teoria objetiva pura para o crime impossível, punindo sempre a tentativa.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Teoria Errada, {{USER_NAME}}! O Brasil adota a Teoria Objetiva TEMPERADA (Intermediária). Só não se pune a tentativa se a ineficácia for absoluta. Se for relativa, haverá punição.',
    timeLimit: 60
  },
  {
    id: 239,
    category: 'PRF',
    question: 'A lei penal brasileira admite a extratividade benéfica (novatio legis in mellius) abrangendo inclusive sentenças transitadas em julgado.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Retroatividade+, {{USER_NAME}}! Correto. A lei posterior que de qualquer modo favorecer o agente se aplica aos fatos anteriores, mesmo já decididos, conforme o Art. 2º, parágrafo único do CP.',
    timeLimit: 60
  },
  {
    id: 240,
    category: 'PRF',
    question: 'Feminicídio exige apenas o contexto de violência doméstica e familiar para sua configuração específica.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Fique atento, {{USER_NAME}}! São DUAS vertentes: 1) Violência doméstica/familiar OU 2) Menosprezo/Discriminação à condição de mulher. A questão errou ao dizer "apenas".',
    timeLimit: 60
  },
  {
    id: 241,
    category: 'PRF',
    question: 'O delito de adulteração de sinal identificador (VIN) tem pena aumentada se cometido no exercício de função pública.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Pena majorada, {{USER_NAME}}! Sim. O Art. 311, § 1º do CP prevê esse aumento de 1/3 para agentes públicos, devido à violação da confiança depositada pelo Estado.',
    timeLimit: 60
  },
  {
    id: 242,
    category: 'PRF',
    question: 'As provas não repetíveis (ex: corpo de delito) colhidas na fase policial dependem obrigatoriamente de autorização judicial prévia.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Procedimento CPP, {{USER_NAME}}! Incorreto. Elas são realizadas de imediato pela autoridade policial para evitar a perda do vestígio e independem de ordem judicial (Art. 155 do CPP).',
    timeLimit: 60
  },
  {
    id: 243,
    category: 'PRF',
    question: 'A lavratura de auto de prisão em flagrante admite ser feita por qualquer pessoa designada se o escrivão estiver impedido.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Papel do Delegado, {{USER_NAME}}! Correto. Na falta de escrivão, a autoridade policial nomeia um escrivão "ad hoc" para o ato, que prestará o compromisso legal.',
    timeLimit: 60
  },
  {
    id: 244,
    category: 'PRF',
    question: 'Existe flagrante presumido quando o agente é encontrado logo após com instrumentos que façam presumir ser ele o autor.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Típico PRF, {{USER_NAME}}! Correto. É o Art. 302, IV do CPP. Diferente do impróprio (perseguição), aqui a presunção ocorre pela posse da prova/instrumento do crime.',
    timeLimit: 60
  },
  {
    id: 245,
    category: 'PRF',
    question: 'A Lei 14.994/24 de 2024 tornou o feminicídio o delito com a maior pena máxima do Código Penal brasileiro.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Fato Histórico, {{USER_NAME}}! Sim, com reclusão de até 40 anos, ele superou outros crimes graves, tornando-se o crime de maior reprovabilidade da nossa lei.',
    timeLimit: 30
  },
  {
    id: 246,
    category: 'PRF',
    question: 'A identificação criminal é proibida para quem possui carteira profissional de conselho de classe.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Cuidado, {{USER_NAME}}! A identificação civil pode ser feita com carteira profissional (OAB, CREA, etc). A identificação CRIMINAL só ocorre se a civil for insuficiente ou nos casos excepcionais do Art. 3º da Lei 12.037/09.',
    timeLimit: 60
  },
  {
    id: 247,
    category: 'PRF',
    question: 'Adolescente apreendido por tráfico de drogas deve ser obrigatoriamente submetido à medida de internação.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Súmula 492 STJ, {{USER_NAME}}! Incorreto. O tráfico de drogas por si só não conduz obrigatoriamente à internação imediata, devendo-se analisar a gravidade e o histórico do jovem.',
    timeLimit: 60
  },
  {
    id: 248,
    category: 'PRF',
    question: 'Nos juizados especiais criminais, vedam-se embargos de declaração devido ao princípio da celeridade máxima.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Direito Processual, {{USER_NAME}}! Errado. Os embargos de declaração (Art. 83 da Lei 9.099/95) são sempre cabíveis quando houver obscuridade, dúvida ou omissão na sentença.',
    timeLimit: 60
  },
  {
    id: 249,
    category: 'PRF',
    question: 'O STF decidiu em 2024 que se presume usuário quem porta até 40g de cannabis sativa ou possui seis plantas-fêmeas.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Histórico, {{USER_NAME}}! Correto. Decisao do Pleno do STF na repercussão geral tema 506. Estabeleceu um critério objetivo para distinguir usuário de traficante até nova lei.',
    timeLimit: 60
  },
  {
    id: 250,
    id: 250,
    category: 'PRF',
    question: 'Infiltração de agentes de inteligência demanda autorização judicial sigilosa e fundamentada segundo a Lei de Org Criminosas.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Clássica, {{USER_NAME}}! Sim. Art. 10 da Lei 12.850/13. É medida excepcional que exige controle rigoroso do Poder Judiciário.',
    timeLimit: 60
  },
  {
    id: 251,
    category: 'PRF',
    question: 'PRF que cumpre mandado de busca após as 18h comete abuso de autoridade por violar o limite noturno.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Limite Legal, {{USER_NAME}}! Incorreto. A Lei 13.869/19 proíbe o cumprimento entre 21h e 5h. Cumprir às 18h (ou 20h) é perfeitamente legal e dentro do horário permitido.',
    timeLimit: 60
  },
  {
    id: 252,
    category: 'PRF',
    question: 'O princípio da legalidade administrativa não admite exceções sob qualquer pretexto.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Teoria Adm, {{USER_NAME}}! Errado. Existem as exceções como Medidas Provisórias, Estado de Defesa e Estado de Sítio, onde atos podem ser praticados com contornos diferentes da legalidade ordinária.',
    timeLimit: 60
  },
  {
    id: 253,
    category: 'PRF',
    question: 'A DUDH prevê que todas as pessoas têm direito de participar dos progressos científicos e seus benefícios.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'DH de 2ª Geração, {{USER_NAME}}! Exato. Artigo 27 da Declaração Universal. Garante o acesso democrático ao conhecimento e tecnologias produzidas pela humanidade.',
    timeLimit: 60
  },
  {
    id: 254,
    category: 'PRF',
    question: 'O ensino fundamental é declarado obrigatório e gratuito para todos na Declaração Universal dos Direitos Humanos.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Sutileza, {{USER_NAME}}! A DUDH diz que o ensino ELEMENTAR será obrigatório. O termo "fundamental" aparece nas legislações modernas, mas a declaração foi escrita com foco no grau inicial.',
    timeLimit: 60
  },
  {
    id: 255,
    category: 'PRF',
    question: 'O acusado tem direito à comunicação prévia e pormenorizada da acusação formulada conforme o Pacto de San José.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Garantia Judicial, {{USER_NAME}}! Sim, Artigo 8 do CADH. Ninguém pode se defender sem saber exatamente do que está sendo acusado.',
    timeLimit: 60
  },
  {
    id: 256,
    category: 'PRF',
    question: 'A DUDH veda terminantemente a escravidão e o tráfico de escravos em todas as suas formas e manifestações.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Direito Absoluto, {{USER_NAME}}! Artigo 4. Um dos poucos direitos que não admite relativização nem mesmo em tempos de guerra ou emergência.',
    timeLimit: 60
  },
  {
    id: 257,
    category: 'PRF',
    question: 'O direito ao trabalho na DUDH exclui a proteção contra o desemprego, focando apenas no exercício da atividade.',
    options: ['Certo', 'Errado'],
    correct: 1,
    comment: 'Incorreto, {{USER_NAME}}! O Artigo 23 é expresso: o direito ao trabalho INCLUI a proteção contra o desemprego.',
    timeLimit: 60
  },
  {
    id: 258,
    category: 'PRF',
    question: 'A Convenção Americana proíbe interpretações que visem suprimir o gozo de direitos reconhecidos no pacto.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Check, {{USER_NAME}}! Artigo 29. Nenhuma norma do pacto pode ser lida para destruir garantias já conquistadas pela pessoa humana.',
    timeLimit: 60
  },
  {
    id: 259,
    category: 'PRF',
    question: 'Qualquer pessoa ou grupo pode denunciar violações de DH à Comissão Interamericana contra Estados signatários.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Acesso à Justiça, {{USER_NAME}}! Correto. É o que permite o sistema interamericano de proteção atuar diante de omissões ou abusos nacionais.',
    timeLimit: 60
  },
  {
    id: 260,
    category: 'PRF',
    question: 'O Pacto de São José proíbe a expulsão coletiva de estrangeiros em qualquer hipótese.',
    options: ['Certo', 'Errado'],
    correct: 0,
    comment: 'Conclusão batida! Parabéns, {{USER_NAME}}. Você acaba de zerar 260 questões de altíssimo nível em alta fidelidade. Rumo à aprovação com o Bunker Quiz!',
    timeLimit: 30
  }
];
