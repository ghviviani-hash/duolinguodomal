

export const DEFAULT_DECKS = [
  
  // NOVO DECK DE NEUROLOGIA
  
  {
    id: "preset-neurologia-1",
    name: "  Estácio - M7 - PR1 - Neurologia ",
    questions: [
      // Cefaleias
      {
        id: "neuro-q1",
        text: "Uma paciente de 18 anos, sem comorbidades, procurou a emergência com queixa de cefaleia. Ela referia uma cefaleia de forte intensidade (\"a pior dor da vida\"), súbita, associada a fotofobia, náuseas e vômitos. Nega outros sintomas associados. Ao exame: acordada, interagindo. Força normal em membros. Coordenação normal. Sensibilidade superficial e profunda preservada. Pupilas isofotorreagentes. Rigidez de nuca. Qual a alternativa correta em relação ao provável diagnóstico e conduta?",
        options: [
          "Enxaqueca: analgésicos ou sumatriptano subcutâneo",
          "Cefaleia em salvas: oxigênio ou sumatriptano subcutâneo",
          "Hemorragia subaracnóidea: angiotomografia computadorizada do crânio",
          "Hemicrania paroxística: Indometacina"
        ],
        answerIndex: 2,
        explanation: "Cefaleia súbita de forte intensidade (\"thunderclap headache\") com rigidez de nuca é o quadro clássico de Hemorragia Subaracnóidea, exigindo neuroimagem de emergência.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q2",
        text: "Um homem de 30 anos, hipertenso leve, apresenta há 8 anos episódios mensais de cefaléia pulsátil. de forte intensidade, acompanhada de vômitos e precedida de alteração visual (fortificações). Sua mãe e irmã tem quadro semelhante e seu exame físico/neurológico é normal. O provável diagnóstico é:",
        options: [
          "Ruptura de aneurisma",
          "Enxaqueca",
          "Cefaleia tipo tensional",
          "Cefaléia em salvas"
        ],
        answerIndex: 1,
        explanation: "Cefaleia pulsátil, unilateral, com sintomas associados (vômitos), aura visual (fortificações) e história familiar positiva são características marcantes da enxaqueca com aura.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q3",
        text: "Mulher, 25 anos, apresenta há 6 anos episódios ocasionais de cefaléia em pressão, em capacete, de moderada intensidade, com 3 dias de duração em média, sem náuseas, vômitos e/ou alteração visual. Nega história familiar. O provável diagnóstico é:",
        options: [
          "Cefaléia hípnica",
          "Enxaqueca",
          "Cefaleia tipo tensional",
          "Cefaléia em salvas"
        ],
        answerIndex: 2,
        explanation: "A descrição de uma dor em pressão ou \"capacete\", bilateral, de intensidade leve a moderada e sem os sintomas associados (náuseas, fotofobia) é a apresentação típica da Cefaleia do Tipo Tensional.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q4",
        text: "São utilizadas para profilaxia de enxaqueca as substâncias abaixo EXCETO:",
        options: ["Topiramato", "Flunarizina", "Clonazepam", "Amitriptilina"],
        answerIndex: 2,
        explanation: "Topiramato, flunarizina e amitriptilina são fármacos de primeira linha para a profilaxia da enxaqueca. Clonazepam, um benzodiazepínico, não é uma escolha padrão para este fim.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q5",
        text: "As cefaleias podem ser primarias ou secundarias. Na suspeita de cefaleia secundária, exames de imagem devem ser realizados para a investigação adequada. Assinale a alternativa em que todas as situações são justificativas para exames de neuroimagem em pacientes com cefaleia.",
        options: [
          "Paciente imunossuprimido/ dor latejante",
          "Náuseas/fotofobia",
          "Fonofobia/ refratariedade ao tratamento",
          "Instalação súbita/ alterações visuais"
        ],
        answerIndex: 3,
        explanation: "A instalação súbita (\"thunderclap\") e a presença de alterações neurológicas focais (como alterações visuais) são sinais de alerta (\"red flags\") que exigem investigação com neuroimagem para descartar causas secundárias graves.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q6",
        text: "Em uma paciente com diagnóstico de enxaqueca com aura, qual das medicações abaixo deve ser evitada?",
        options: [
          "Pílula anticoncepcional com progestágeno",
          "Levotiroxina",
          "Ácido valpróico",
          "Terapia de reposição hormonal com estrogênio"
        ],
        answerIndex: 3,
        explanation: "O uso de contraceptivos ou terapia de reposição hormonal contendo estrogênio aumenta o risco de eventos isquêmicos (AVC) em pacientes com enxaqueca com aura e, portanto, deve ser evitado.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q7",
        text: "Na cefaleia em salvas, o tratamento profilático e agudo são, respectively:",
        options: [
          "Oxigênio e verapamil",
          "Verapamil e indometacina",
          "Verapamil e oxigênio",
          "Oxigênio e lamotrigina"
        ],
        answerIndex: 2,
        explanation: "O tratamento agudo da crise de cefaleia em salvas é feito com oxigênio a 100% ou sumatriptano. A profilaxia (tratamento para evitar as crises) é feita principalmente com verapamil.",
        tag: "Cefaleias"
      },
      {
        id: "neuro-q8",
        text: "Paciente idosa, 70 anos, procura a emergência com queixa de cefaleia em região temporal direita há 1 mês, pior há 1 dia. Nega irradiação da dor. Foram solicitados exames laboratoriais e de imagem. Marque a alternativa correta quanto ao possível diagnóstico.",
        options: [
          "VHS é um exame desnecessário nesse caso, pois seu valor não altera nesse caso",
          "O exame de imagem solicitado e o doppler de artéria temporal, porém não há sinais característicos que sugiram o diagnóstico",
          "O tratamento deve ser iniciado com corticoide e a resposta esperada é excelente",
          "Os jovens também são acometidos com frequência"
        ],
        answerIndex: 2,
        explanation: "O quadro de cefaleia temporal em paciente idosa levanta a forte suspeita de Arterite Temporal (ou de Células Gigantes). Esta é uma emergência reumatológica, e o tratamento com altas doses de corticoide deve ser iniciado imediatamente para prevenir a perda visual, com excelente resposta da dor.",
        tag: "Cefaleias"
      },
      // Doença de Parkinson e Parkinsonismo
      {
        id: "neuro-q9",
        text: "Paciente masculino, advogado, 66 anos, refere que há 2 anos recebeu diagnóstico de doença de Parkinson. Fez uso de múltiplos esquemas medicamentosos, incluindo levodopa, porém com pouco resultado. O quadro se iniciou há cerca de 4 anos com quedas frequentes. Ao exame: Rigidez em roda denteada (axial maior que em membros) e bradicinesia bilaterais, sem tremor, retrocólis e paralisia ao olhar vertical para baixo. Considerando a evolução e o quadro clínico acima, o diagnóstico mais provável deste paciente é:",
        options: [
          "Degeneração cortico-basal",
          "Doença de Alzheimer",
          "Paralisia supranuclear progressiva",
          "Atrofia de múltiplos sistemas"
        ],
        answerIndex: 2,
        explanation: "Um quadro de parkinsonismo com quedas precoces, pouca resposta à levodopa e, principalmente, a paralisia do olhar vertical para baixo, são sinais clássicos da Paralisia Supranuclear Progressiva (PSP), uma forma de parkinsonismo atípico.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q10",
        text: "Assinale a alternativa correta referente a doença de Parkinson:",
        options: [
          "Os sinais são assimétricos no início da fase motora",
          "A bradicinesia aparece após 10 anos do início da fase motora",
          "O sinal da cauda da andorinha está presente na ressonância magnética de crânio de 3T",
          "O tratamento medicamentoso deve ser suspenso imediatamente após o tratamento cirúrgico com Deep Brain Stimulation (DBS)"
        ],
        answerIndex: 0,
        explanation: "Uma das características cardinais da Doença de Parkinson é o início assimétrico dos sintomas motores (tremor, rigidez e/ou bradicinesia), geralmente começando em um membro de um lado do corpo.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q11",
        text: "Paciente feminino, 54 anos, com diagnóstico de doença de Parkinson há 7 anos, em uso de levodopa, pramipexol e escitalopram. Queixa-se de movimentos involuntários intensos e exaustivos cerca de 1h e 30min após a tomada da 3a e 4a doses de levodopa. Ao exame físico observa-se movimentos generalizados coreiformes. Qual a provável causa da intercorrência apresentada pela paciente?",
        options: [
          "Efeito adverso do escitalopram",
          "Transtorno somatoforme",
          "Discinesias",
          "Crises epilépticas mioclônicas"
        ],
        answerIndex: 2,
        explanation: "Os movimentos involuntários (coreiformes) que ocorrem no pico da dose da levodopa são uma complicação motora clássica do tratamento crônico da Doença de Parkinson, conhecidos como discinesias de pico de dose.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q12",
        text: "É a principal causa de demência:",
        options: [
          "Doença de Parkinson",
          "Doença de Huntington",
          "Doença de Alzheimer",
          "Demência vascular"
        ],
        answerIndex: 2,
        explanation: "A Doença de Alzheimer é a causa mais comum de demência em todo o mundo, respondendo pela maioria dos casos em idosos.",
        tag: "Demências"
      },
      {
        id: "neuro-q13",
        text: "Homem, 29 anos, diagnosticado com depressão, notou há 10 meses lentidão, tremor bilateral em mãos e alteração na fala. Exame neurológico: Hipomimia facial, disartria, bradicinesia e rigidez em roda denteada simétricas, tremor de repouso bilateral. Exame laboratorial revelou leve aumento de transaminases séricas. Considerando o diagnóstico mais provável, assinale a alternativa correta:",
        options: [
          "Trata-se de um quadro de parkinsonismo medicamentoso",
          "O nível sérico de ceruloplasmina costuma ser baixo",
          "Na ressonância magnética de crânio teremos o sinal do beija-flor (atrofia mesencefálica)",
          "A hipotensão postural é um achado frequente"
        ],
        answerIndex: 1,
        explanation: "Parkinsonismo em paciente jovem (<40-50 anos) associado a alterações hepáticas (aumento de transaminases) levanta forte suspeita da Doença de Wilson. Nesta doença, há um distúrbio no metabolismo do cobre, e o nível sérico de ceruloplasmina (a proteína que transporta o cobre) é caracteristicamente baixo.",
        tag: "Parkinsonismo"
      },
      {
        id: "neuro-q14",
        text: "Paciente masculino, 63 anos, com queixa de dificuldade de movimentar o braço D há 3 meses (dificuldade de abotoar camisa, fazer a barba e escrever). Ao exame nota-se diminuição do piscar dos olhos, lentificação dos movimentos do MSD e leve hipertonia em dimídio direito. Qual o diagnóstico mais provável?",
        options: [
          "Síndrome parkinsoniana",
          "AVC isquêmico em território de artéria cerebral média esquerda",
          "Processo expansivo intracraniano no hemisfério cerebral esquerdo",
          "AVC isquêmico de tronco cerebral"
        ],
        answerIndex: 0,
        explanation: "A presença de lentificação de movimentos (bradicinesia) e hipertonia (rigidez), com início assimétrico (dimídio direito), são os achados clínicos essenciais para o diagnóstico de uma síndrome parkinsoniana.",
        tag: "Parkinsonismo"
      },
      // AVE
      {
        id: "neuro-q15",
        text: "Na trombose de origem da cerebral média:",
        options: [
          "Pode não ocorrer na afasia motora",
          "Pode ocorrer afasia motora e sensorial acompanhada de hemianopsia, hemihiopoestesia e hemiparesia",
          "Não ocorre hemianopsia",
          "Pode não ocorrer afasia sensorial"
        ],
        answerIndex: 1,
        explanation: "A artéria cerebral média (ACM) irriga uma vasta área do cérebro. Sua oclusão no hemisfério dominante pode causar um déficit completo, incluindo afasia (motora e sensorial), hemiparesia, hemi-hipoestesia e hemianopsia contralateral.",
        tag: "AVE"
      },
      {
        id: "neuro-q16",
        text: "Paciente de 68 anos, hipertenso e diabético, é admitido às 6h45 com disfasia, disartria e hemiparesia à direita. Última vez visto bem foi à 1h15. TC de crânio sem contraste mostrou hiperdensidade em topografia de artéria cerebral média à esquerda e angio-TC mostrou falha de opacificação proximal. Em relação ao caso, assinale a alternativa CORRETA:",
        options: [
          "Trata-se de um acidente vascular hemorrágico.",
          "Trata-se de um acidente vascular isquêmico, deve ser submetido à trombólise venosa.",
          "Trata-se de um acidente vascular isquêmico, deve ser submetido a trombectomia mecânica.",
          "Trata-se de uma hemorragia subaracnóide."
        ],
        answerIndex: 2,
        explanation: "O sinal da artéria cerebral média hiperdensa na TC sem contraste e a falha de enchimento na angio-TC confirmam um AVC isquêmico por oclusão de grande vaso. Pela janela terapêutica e gravidade, a trombectomia mecânica é o tratamento de escolha.",
        tag: "AVE"
      },
      {
        id: "neuro-q17",
        text: "Paciente de 72 anos, hipertenso e dislipidêmico, admitido com hemiplegia esquerda, heminegligência e desvio do olhar para direita. TC de crânio mostrou área hipodensa extensa e hiperdensidade em artéria cerebral média direita. Angio-TC evidenciou oclusão proximal da mesma artéria. Qual a conduta CORRETA?",
        options: [
          "Manter a pressão arterial sistólica abaixo de 140mmHg.",
          "Submeter à trombólise venosa com alteplase.",
          "Contactar a neurocirurgia para realização de trombectomia mecânica.",
          "Iniciar anticoagulação com heparina."
        ],
        answerIndex: 2,
        explanation: "Assim como no caso anterior, trata-se de um AVC isquêmico com oclusão de grande vaso, fora da janela de trombólise venosa. A conduta indicada é a trombectomia mecânica.",
        tag: "AVE"
      },
      {
        id: "neuro-q18",
        text: "Paciente de 68 anos, hipertenso e diabético, é admitido com disartria e hemiparesia à esquerda. TC de crânio sem contraste mostrou hiperdensidade em núcleos da base e cápsula interna à direita. Em relação ao caso, assinale a alternativa CORRETA:",
        options: [
          "Manter o paciente hipertenso, com PAS acima de 160mmHg.",
          "Controlar a pressão arterial (PAS em torno de 140mmHg) e contactar a neurocirurgia.",
          "Submeter à trombólise venosa com alteplase.",
          "Submeter à trombectomia mecânica."
        ],
        answerIndex: 1,
        explanation: "A hiperdensidade na TC sem contraste indica um Acidente Vascular Cerebral Hemorrágico (AVCH). O tratamento agudo consiste no controle rigoroso da pressão arterial para evitar a expansão do hematoma e na avaliação neurocirúrgica.",
        tag: "AVE"
      },
      {
        id: "neuro-q19",
        text: "Paciente de 69 anos, hipertenso e diabético, é admitido com disfasia, disartria e hemiparesia à direita, acompanhados de cefaleia súbita e intensa. TC sem contraste mostrou hiperdensidade em cisternas basais e ventrículos. Em relação ao caso, assinale a alternativa CORRETA:",
        options: [
          "Contactar neurocirurgia e realizar angio-TC ou angiografia para investigar aneurisma.",
          "Submeter à trombólise venosa com alteplase.",
          "Submeter à terapia combinada de trombectomia e trombólise.",
          "Iniciar AAS 300mg e estatina."
        ],
        answerIndex: 0,
        explanation: "A presença de sangue (hiperdensidade) nas cisternas basais é característica de Hemorragia Subaracnóidea (HSA), cuja principal causa é a ruptura de um aneurisma cerebral. A investigação vascular com angio-TC ou angiografia e a avaliação neurocirúrgica são urgentes.",
        tag: "AVE"
      },
      {
        id: "neuro-q20",
        text: "Paciente de 60 anos, diabético e hipertenso, apresentou cefaleia, vômitos e torpor, sendo diagnosticado com AVC. Sobre os AVCs é correto afirmar:",
        options: [
          "Os AVCs hemorrágicos são mais frequentes que os isquêmicos.",
          "Não existe uma janela terapêutica para o uso de trombolíticos nos AVC Isquêmicos.",
          "É contra-indicado o uso de trombolíticos nos acidentes vasculares hemorrágicos.",
          "A hipertensão arterial representa o menor fator de risco para os AVC isquêmicos."
        ],
        answerIndex: 2,
        explanation: "A afirmação correta é que o uso de trombolíticos (que dissolvem coágulos) é absolutamente contraindicado em AVCs hemorrágicos, pois agravaria o sangramento. Os AVCs isquêmicos são os mais frequentes.",
        tag: "AVE"
      },
      {
        id: "neuro-q21",
        text: "A principal causa de AVC isquêmico é:",
        options: [
          "Embolia",
          "Trombose associada à crise hipertensiva",
          "Diabetes, dislipidemia e hipertensão arterial",
          "Trombose associada à crise hipertensiva, dislipidemia e diabetes"
        ],
        answerIndex: 2,
        explanation: "A principal causa subjacente do AVC isquêmico é a aterosclerose, cujo desenvolvimento é impulsionado pelos principais fatores de risco vasculares: diabetes, dislipidemia e hipertensão arterial.",
        tag: "AVE"
      },
      {
        id: "neuro-q22",
        text: "O envolvimento do III nervo craniano de modo isolado sugere:",
        options: [
          "Angioma no território cerebral do nervo",
          "Aneurisma do sistema vértebro-basilar",
          "Aneurisma da artéria carótida ou da comunicante posterior",
          "AVC isquêmico no território cerebral do nervo"
        ],
        answerIndex: 2,
        explanation: "A paralisia isolada do III nervo craniano (oculomotor), especialmente quando envolve a pupila (midríase), é frequentemente causada pela compressão do nervo por um aneurisma da artéria comunicante posterior ou da carótida interna.",
        tag: "AVE"
      },
      // Epilepsia e Crises Convulsivas
      {
        id: "neuro-q23",
        text: "Paciente feminino 65 anos com hipotireoidismo e depressão, refere episódios de perda de consciência precedidos por ouvir uma música em sua cabeça. Recupera-se lentamente, com confusão e dor de cabeça. Testemunhas referem abalos musculares. Qual o provável diagnóstico?",
        options: [
          "Doença psiquiátrica- pseudocrise",
          "Demências por corpúsculos de Lewy",
          "Crise epiléptica focal para bilateral tônico-clônica",
          "Ataques isquêmicos transitórios"
        ],
        answerIndex: 2,
        explanation: "A experiência sensorial (ouvir música) antes da perda de consciência é uma aura, característica de uma crise epiléptica focal. A evolução com abalos e confusão pós-evento (período pós-ictal) indica uma generalização para tônico-clônica bilateral.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q24",
        text: "Paciente masculino de 68 anos com atrofia de múltiplos sistemas, apresentou perda de consciência enquanto almoçava, precedida por mal-estar e palpitações. Recuperou a consciência em poucos segundos após ser colocado em decúbito. Durante o evento ocorreram breves abalos musculares e perda de urina. Qual o provável diagnóstico?",
        options: [
          "Crise epiléptica disautonômica",
          "Síncope",
          "Ataque isquêmico transitório",
          "Crise epiléptica focal para bilateral tônico-clônica"
        ],
        answerIndex: 1,
        explanation: "O gatilho postural, os pródromos (mal-estar, palpitações) e a recuperação rápida após o decúbito são características de síncope. Abalos musculares (mioclonias da síncope) e liberação esfincteriana podem ocorrer devido à hipoperfusão cerebral e não indicam necessariamente uma crise epiléptica.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q25",
        text: "Paciente de 49 anos com epilepsia e Parkinson, refere que à noite apresenta episódios de movimentação intensa durante o sono (lutas, fugas, gritos), sem se lembrar no dia seguinte. Qual a melhor conduta?",
        options: [
          "Solicitar RM de crânio e EEG para definir melhor o quadro epiléptico",
          "Suspender pramipexol, pois distúrbios de comportamento são efeitos adversos da droga",
          "Solicitar nivel sérico de levetiracetam",
          "Solicitar polissonografia devido suspeita de distúrbio comportamental do sono REM"
        ],
        answerIndex: 3,
        explanation: "A descrição de sonhos vívidos atuados com movimentação vigorosa é a apresentação clássica do Distúrbio Comportamental do Sono REM, uma parassonia frequentemente associada a doenças neurodegenerativas como a Doença de Parkinson. O diagnóstico é confirmado pela polissonografia.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q26",
        text: "Marcia, 26 anos, apresentou sua segunda crise convulsiva tônico-clônica generalizada no último ano. Não faz uso de medicação. Qual a conduta correta:",
        options: [
          "Acompanhar, pois trata-se de crise isolada.",
          "Solicitar exames (RM, EEG, laboratório) e iniciar medicação adequada.",
          "Solicitar EEG e iniciar fenobarbital.",
          "Solicitar EEG, TC de crânio e iniciar fenitoína."
        ],
        answerIndex: 1,
        explanation: "Ocorrência de duas ou mais crises epilépticas não provocadas estabelece o diagnóstico de epilepsia. A conduta adequada é realizar uma investigação etiológica completa e iniciar terapia antiepiléptica apropriada.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q27",
        text: "Jonas, 3 anos, com febre de 39°C devido a faringotonsilite, apresentou crise tônico-clônica generalizada de 3 minutos de duração. Ao chegar à emergência, já estava com comportamento normal. Qual a conduta correta:",
        options: [
          "Solicitar EEG, TC de crânio e punção lombar.",
          "Afirmar que se trata de epilepsia e iniciar fenobarbital.",
          "Tranquilizar o pai, afirmando que se trata de uma crise convulsiva febril simples.",
          "Internar a criança para investigação completa."
        ],
        answerIndex: 2,
        explanation: "O quadro é de uma crise febril simples: idade típica (6m-5a), generalizada, curta (<15min), sem recorrência em 24h e com recuperação completa. A conduta é expectante, com antitérmicos e orientação aos pais.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q28",
        text: "Camila, 26 anos, grávida de 20 semanas, apresenta sua segunda crise tônico-clônica generalizada, recebendo o diagnóstico de epilepsia. Qual medicação deve ser evitada ao máximo para essa paciente?",
        options: [
          "Carbamazepina",
          "Lamotrigina",
          "Levetiracetam",
          "Acido valproico"
        ],
        answerIndex: 3,
        explanation: "O Ácido Valproico é o antiepiléptico com o maior risco conhecido de teratogenicidade, associado a malformações graves como defeitos do tubo neural. Seu uso deve ser evitado ao máximo durante a gestação.",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q29",
        text: "Marque falso (F) ou verdadeiro (V): (1) Crises convulsivas únicas como as febris são consideradas epilepsia. (2) Crises em vigência de doenças agudas não são consideradas epilepsia. (3) A crise epiléptica é um distúrbio recorrente e transitório. (4) A maioria das crises epilépticas é idiopática.",
        options: ["FVVV", "VVFV", "FFFF", "FVFF"],
        answerIndex: 0,
        explanation: "(F) Crises únicas ou provocadas (como as febris) não definem epilepsia. (V) Crises agudas sintomáticas não são epilepsia. (V) A definição de crise epiléptica envolve transitoriedade e recorrência (no caso da epilepsia). (V) Mesmo com investigação, muitas epilepsias permanecem sem causa definida (idiopáticas).",
        tag: "Epilepsia"
      },
      {
        id: "neuro-q30",
        text: "Com relação às crises epilépticas é CORRETO afirmar:",
        options: [
          "A investigação etiológica não é importante",
          "Toda crise convulsiva deve ser tratada com antiepilépticos",
          "Crises epilépticas com mais de 30 minutos de duração, subentrantes, caracterizam o status epilepticus",
          "A caracterização da síndrome epiléptica não ajuda na conduta terapêutica"
        ],
        answerIndex: 2,
        explanation: "O status epilepticus é uma emergência neurológica definida classicamente como uma crise contínua por mais de 30 minutos, ou crises recorrentes sem recuperação da consciência entre elas. Atualmente, a definição operacional considera 5 minutos para iniciar o tratamento.",
        tag: "Epilepsia"
      },
      // Demências e Comprometimento Cognitivo
      {
        id: "neuro-q31",
        text: "Na doença de corpo de Lewy inicia-se principalmente com:",
        options: [
          "Alucinações e confabulação",
          "Perda de memória 2 anos após o parkinsonismo",
          "Parkinsonismo e alucinações visuais",
          "Alucinações auditivas e demência associada ao parkinsonismo"
        ],
        answerIndex: 2,
        explanation: "A tríade clássica da Demência com Corpos de Lewy é composta por flutuação cognitiva, alucinações visuais bem formadas e parkinsonismo. Frequentemente, o parkinsonismo e as alucinações são os sintomas de abertura do quadro.",
        tag: "Demências"
      },
      {
        id: "neuro-q32",
        text: "Dentre as classes de drogas abaixo, quais provocam comprometimento cognitivo?",
        options: [
          "Anticolinérgicos e benzodiazepínicos",
          "Antihipertensivos",
          "Antiagregantes plaquetários",
          "Anticoagulantes"
        ],
        answerIndex: 0,
        explanation: "Fármacos com forte ação anticolinérgica e os benzodiazepínicos são conhecidos por causar ou agravar o comprometimento cognitivo, especialmente em idosos, podendo mimetizar ou piorar um quadro demencial.",
        tag: "Demências"
      },
      {
        id: "neuro-q33",
        text: "É uma das causas, potencialmente, reversíveis de demência:",
        options: [
          "Doença de Alzheimer",
          "Carência de vitamina B12",
          "Demência fronto-temporal",
          "Vascular"
        ],
        answerIndex: 1,
        explanation: "A deficiência de vitamina B12 pode causar um quadro de declínio cognitivo significativo que, se diagnosticado e tratado a tempo com reposição da vitamina, pode ser parcial ou totalmente revertido.",
        tag: "Demências"
      },
      {
        id: "neuro-q34",
        text: "Assinale a resposta correta sobre a doença de Alzheimer:",
        options: [
          "Ocorrem depósitos de beta amiloides e hipofosforilação da proteína tau",
          "Ocorrem depósitos de alfa sinucleína e beta amiloide",
          "Ocorrem depósitos de beta amilóide e inibição da proteína tau",
          "Podem ocorrer depósitos de lipídeos intracelulares, de beta-amiloide e hipofosforilação da proteína tau"
        ],
        answerIndex: 0,
        explanation: "A fisiopatologia da Doença de Alzheimer é marcada por dois eventos principais: o acúmulo extracelular de placas de peptídeo beta-amiloide e a formação de emaranhados neurofibrilares intracelulares devido à hiperfosforilação da proteína tau.",
        tag: "Demências"
      },
      {
        id: "neuro-q35",
        text: "Adonias, 48 anos, com histórico de cirurgia bariátrica, apresenta dormência nos pés e esquecimento. Relata sentir estar \"pisando em nuvens\". Ao exame: marcha atáxica, Romberg positivo, hipoparestesia em membros inferiores e dismetria. Mini mental de 20/30. Assinale a alternativa correta:",
        options: [
          "O quadro pode ser um quadro inicial de doença de Alzheimer.",
          "O quadro pode ser causado por condições reversíveis, como a deficiência de vitamina B12 e sífilis.",
          "O quadro é de clara hidrocefalia de pressão normal.",
          "O quadro do paciente é de franco hipotireoidismo."
        ],
        answerIndex: 1,
        explanation: "Cirurgia bariátrica é um fator de risco para deficiências nutricionais, principalmente de vitamina B12. A deficiência de B12 causa um quadro de degeneração combinada subaguda da medula (afetando propriocepção - \"pisando em nuvens\", Romberg) e declínio cognitivo, que é uma causa reversível de demência.",
        tag: "Demências"
      },
      // Neuropatias Periféricas e Doenças Neuromusculares
      {
        id: "neuro-q36",
        text: "Paciente de 40 anos, após cirurgia bariátrica há 3 anos, queixa-se de \"andar esquisito\". Ao exame: marcha talonante, sinal de Romberg presente, redução de sensibilidade vibratória e de posição segmentar nos membros inferiores. Qual o provável local da lesão?",
        options: [
          "Trato piramidal",
          "Cerebelo",
          "Cordão posterior da medula",
          "Núcleos da base"
        ],
        answerIndex: 2,
        explanation: "A marcha talonante (pisar com força para sentir o chão), a perda de propriocepção (Romberg positivo) e a perda da sensibilidade vibratória são sinais clássicos de lesão no cordão posterior da medula espinhal, frequentemente causado por deficiência de vitamina B12.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q37",
        text: "Paciente de 48 anos queixa-se de dificuldade de fechar a mão direita há 6 meses. Ao exame: Força grau 1 nos 4º e 5º dedos, hipoestesia na região hipotênar e nos mesmos dedos. Mão em garra. Qual padrão de neuropatia e qual o provável nervo acometido?",
        options: [
          "Síndrome do Túnel do Carpo - nervo mediano",
          "Mononeuropatia do nervo ulnar",
          "Mononeuropatia do nervo radial",
          "Polineuropatia distal de membros superiores"
        ],
        answerIndex: 1,
        explanation: "A fraqueza e a perda de sensibilidade no 4º (metade ulnar) e 5º dedos, juntamente com a atrofia da musculatura intrínseca da mão resultando na \"mão em garra\", são a apresentação clássica de uma mononeuropatia do nervo ulnar.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q38",
        text: "Paciente de 70 anos relata \"ver tudo duplicado\" há 1 ano. Ao exame: queda da pálpebra esquerda e dificuldade em quase todos os movimentos oculares com o olho esquerdo, exceto olhar medial para baixo e olhar horizontal lateral. Qual é o provável nervo craniano envolvido?",
        options: [
          "Nervo oculomotor",
          "Nervo troclear",
          "Nervo abducente",
          "Nervo trigêmeo"
        ],
        answerIndex: 0,
        explanation: "O Nervo Oculomotor (III par craniano) é responsável pela maioria dos movimentos do olho, elevação da pálpebra e contração da pupila. Sua paralisia causa ptose (queda da pálpebra) e o olho fica desviado \"para baixo e para fora\", com preservação da abdução (N. Abducente - VI par) e da inciclotorção (N. Troclear - IV par).",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q39",
        text: "Paciente de 60 anos com artrite reumatoide queixa-se de dificuldade para pentear os cabelos, levantar-se da cadeira e subir escadas. Ao exame: Fraqueza simétrica de músculos proximais (deltoides, quadríceps, etc.). Em uso de prednisona, D-penicilamina e azatioprina. Qual o provável diagnóstico sindrômico e etiológico?",
        options: [
          "Síndrome de poliartrite - artrite reumatóide",
          "Síndrome miopática - uso de prednisona",
          "Síndrome miastênica/placa motora - uso de D penicilamina",
          "Síndrome de polineuropatia - diabetes"
        ],
        answerIndex: 1,
        explanation: "A fraqueza muscular proximal e simétrica, sem alterações sensitivas ou de reflexos, é a definição de uma síndrome miopática. O uso crônico de corticoides (prednisona) é uma causa bem conhecida de miopatia.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q40",
        text: "Sabemos que existem inúmeras etiologias e tipos de neuropatias periféricas. Em relação ao tema assinale a alternativa CORRETA:",
        options: [
          "Nas mononeuropatias múltiplas ocorre o envolvimento distal e simétrico dos 4 membros",
          "O sinal de Tinel e manobra de Phalen são utilizados na avaliação do nervo Ulnar",
          "A Neuropatia Diabética pode cursar com disautonomia",
          "As radiculopatias em geral não apresentam componente doloroso"
        ],
        answerIndex: 2,
        explanation: "A Neuropatia Diabética é uma das principais causas de disautonomia, manifestando-se com sintomas como hipotensão postural, gastroparesia, disfunção erétil e alterações da sudorese.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q41",
        text: "Dentre as doenças neuromusculares, destaca-se a Miastenia Gravis. Tal doença caracteriza se por:",
        options: [
          "Parestesia, fraqueza muscular flutuante, hiporreflexia e dor",
          "Diplopia, ptose, fraqueza muscular flutuante e disfonia",
          "Rigidez, bradicinesia, fraqueza muscular flutuante e ptose",
          "Diplopia, parestesia, rigidez e hiporreflexia"
        ],
        answerIndex: 1,
        explanation: "A Miastenia Gravis é marcada pela fraqueza muscular flutuante (que piora com o uso e melhora com o repouso). Atinge caracteristicamente a musculatura ocular (causando ptose e diplopia) e bulbar (causando disfonia e disfagia).",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q42",
        text: "Paciente de 65 anos com queixa de queda da pálpebra bilateral e fadiga aos esforços que piora no fim do dia. Ao exame: ptose bilateral, tetraparesia grau 4 e \"ice pack test\" positivo. Qual é o diagnóstico mais provável e o exame complementar recomendado?",
        options: [
          "Neuropatia nervo abducente bilateral - eletroneuromiografia",
          "AVC de tronco encefálico - ressonância magnética",
          "Blefaroespasmo - teste com toxina botulínica",
          "Miastenia Gravis - dosagem anticorpo anti acetilcolina"
        ],
        answerIndex: 3,
        explanation: "A fraqueza flutuante com predomínio ocular (ptose) e proximal, que piora ao longo do dia, é altamente sugestiva de Miastenia Gravis. O \"ice pack test\" positivo corrobora a suspeita, e o diagnóstico é confirmado pela dosagem de anticorpos anti-receptor de acetilcolina.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q43",
        text: "Paciente com suspeita de Síndrome de Guillain Barré. Dentre os achados abaixo, qual é considerado como sinal de alerta (red flag) para considerar um diagnóstico alternativo?",
        options: [
          "Comprometimento de nervos cranianos",
          "História de infecção gastrointestinal 4 semanas antes",
          "Exame de Líquor com 42 proteínas e 2 células",
          "Progressão do quadro nas últimas 8 semanas"
        ],
        answerIndex: 3,
        explanation: "A Síndrome de Guillain-Barré (SGB) é uma polirradiculoneuropatia aguda, com progressão dos sintomas que atinge o pico em até 4 semanas. Uma progressão por mais de 8 semanas é característica de uma polirradiculoneuropatia crônica (PDIC), um diagnóstico diferencial.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q44",
        text: "Paciente 25 anos, com ptose palpebral bilateral e diplopia há 6 meses, piores ao final do dia. Ao considerar Miastenia Gravis, qual o resultado dos testes do gelo e do Edrofônio confirmaria o diagnóstico?",
        options: [
          "Melhora da ptose com teste do gelo e teste do Edrofônio",
          "Melhora da ptose com teste do gelo e piora com teste do Edrofônio",
          "Piora da ptose com teste do gelo e com teste do Edrofônio",
          "Piora da ptose com teste do gelo e melhora com teste do Edrofônio"
        ],
        answerIndex: 0,
        explanation: "Na Miastenia Gravis, a transmissão neuromuscular é prejudicada. O frio (teste do gelo) e os inibidores da acetilcolinesterase (Edrofônio/Tensilon) melhoram essa transmissão, resultando em uma melhora transitória e visível da força muscular, como a ptose.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q45",
        text: "Paciente apresenta ao exame neurológico tremor de intenção, hipotonia, dismetria e nistagmo. Considerando o diagnóstico sindrômico, qual das alterações a seguir deve estar presente no exame físico?",
        options: [
          "Disdiadococinesia",
          "Teste de Romberg positivo",
          "Sinal de Chaddock",
          "Bradicinesia"
        ],
        answerIndex: 0,
        explanation: "Tremor de intenção, hipotonia, dismetria e nistagmo são todos sinais de uma síndrome cerebelar. A disdiadococinesia (dificuldade em realizar movimentos rápidos e alternados) é outro sinal clássico do mesmo acometimento.",
        tag: "Neurologia"
      },
      {
        id: "neuro-q46",
        text: "Paciente de 67 anos com diabetes apresenta quadro agudo de diplopia. Ao exame: ptose e déficit na adução do olho esquerdo, parestesia em luvas e botas. Qual o nervo craniano acometido?",
        options: ["Abducente", "Óptico", "Troclear", "Oculomotor"],
        answerIndex: 3,
        explanation: "A ptose (queda da pálpebra) e o déficit de adução (olhar para dentro) são funções do III nervo craniano, o Oculomotor. A mononeuropatia do III par é uma complicação comum do diabetes.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q47",
        text: "Paciente com piora de lombalgia, com dor que irradia para a coxa esquerda e parestesia no pé esquerdo. Como podemos classificar o dano neurológico?",
        options: [
          "Radiculopatia L5-S1",
          "Polineuropatia distal simétrica",
          "Plexopatia braquial",
          "Mononeuropatia múltipla"
        ],
        answerIndex: 0,
        explanation: "A dor que segue um trajeto específico (dermátomo) de uma raiz nervosa, como da lombar para a perna e pé, é a definição de uma radiculopatia. O território descrito é compatível com as raízes de L5 e/ou S1.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q48",
        text: "Paciente de 68 anos queixa-se de \"andar esquisito\". Ao exame: marcha com base alargada, Romberg ausente, dismetria e disdiadococinesia. Qual o provável local da lesão?",
        options: [
          "Trato piramidal",
          "Cerebelo",
          "Cordão posterior da medula",
          "Núcleos da base"
        ],
        answerIndex: 1,
        explanation: "Marcha de base alargada (atáxica), dismetria (errar o alvo) e disdiadococinesia (dificuldade com movimentos alternados) são a tríade clássica de uma lesão no cerebelo.",
        tag: "Neurologia"
      },
      {
        id: "neuro-q49",
        text: "Paciente de 48 anos com dificuldade de fechar a mão direita há 6 meses, e há 1 mês começou a tropeçar e cair. Ao exame: Marcha escarvante à esquerda; fraqueza nos 4° e 5° dedos da mão direita e na dorsiflexão do pé esquerdo. Qual padrão de neuropatia periférica apresentado?",
        options: [
          "Polineuropatia distal",
          "Mononeuropatia múltipla",
          "Mononeuropatia do nervo ulnar",
          "Radiculopatia de L3-L4"
        ],
        answerIndex: 1,
        explanation: "O paciente apresenta o acometimento de múltiplos nervos periféricos individuais (nervo ulnar à direita e nervo fibular à esquerda), de forma assimétrica. Esta condição é chamada de mononeuropatia múltipla.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q50",
        text: "Paciente com diagnóstico prévio de Doença de Crohn, apresenta-se com fraqueza em membros inferiores ha 2 semanas. Pensando no diagnóstico de Mielite Transversa, quais outros sinais semiológicos poderiam confirmar essa hipótese?",
        options: [
          "Paresia dimidiada em face, braço e perna esquerda, associada à sinal de Babinski",
          "Paresia, hipotonia, hiporreflexia e atrofia em membros inferiores",
          "Paresia em membros inferiores e roda denteada",
          "Paresia, espasticidade e hiperreflexia em membros inferiores e nível sensitivo"
        ],
        answerIndex: 3,
        explanation: "A Mielite Transversa é uma lesão do neurônio motor superior na medula. O quadro clássico é de paraparesia (fraqueza nos membros inferiores) com sinais de liberação piramidal (espasticidade, hiperreflexia) e um nível sensitivo bem definido, abaixo do qual a sensibilidade está alterada.",
        tag: "Neuropatias Periféricas"
      },
      {
        id: "neuro-q51",
        text: "Quanto a síndrome miastênica de Lambert-Eaton, marque a alternativa correta:",
        options: [
          "Sintomas bulbares são proeminentes",
          "É uma doença da junção neuromuscular pós sináptica",
          "A eletroneuromiografia revela um padrão decremental após a contração muscular voluntária",
          "É comum a associação com neoplasia pulmonar"
        ],
        answerIndex: 3,
        explanation: "A Síndrome de Lambert-Eaton é uma síndrome paraneoplásica, fortemente associada ao carcinoma de pequenas células do pulmão. A fraqueza muscular é causada por anticorpos contra canais de cálcio pré-sinápticos.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q52",
        text: "Paciente com cifoescoliose, panturrilhas aumentadas, sinal de Gowers e CK 20 vezes o valor de referência. Qual o diagnóstico mais provável?",
        options: [
          "Distrofia muscular de Duchenne",
          "Distrofia de Emery-Dreifuss",
          "Distrofia oculofaríngea",
          "Distrofia muscular de Becker"
        ],
        answerIndex: 3,
        explanation: "A pseudo-hipertrofia de panturrilhas, o sinal de Gowers e a elevação acentuada de CK são comuns tanto em Duchenne quanto em Becker. No entanto, a deambulação preservada (o paciente consegue andar) aponta para a forma de Becker, que é mais branda e de progressão mais lenta que a de Duchenne.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q53",
        text: "Paciente de 35 anos com Miastenia Gravis chega ao pronto socorro com \"muita falta de ar\". Está dispneica e com esforço respiratório. Qual seria a proposta terapêutica mais adequada?",
        options: [
          "Iniciar Piridostigmina e encaminhar ao neurologista",
          "Internar, suporte ventilatório, investigar infecção e iniciar Piridostigmina",
          "Internar, suporte ventilatório, investigar infecção e iniciar Imunoglobulina IV",
          "Iniciar Imunoglobulina IV junto com Plasmaférese"
        ],
        answerIndex: 2,
        explanation: "A paciente está em Crise Miastênica, uma emergência médica com risco de insuficiência respiratória. A prioridade é garantir a via aérea (suporte ventilatório), procurar e tratar o fator desencadeante (geralmente infecção) e iniciar tratamento imunomodulador de ação rápida, como Imunoglobulina Intravenosa ou Plasmaférese.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q54",
        text: "Paciente de 70 anos com fraqueza variável. Quais resultados confirmariam a hipótese de Miastenia Gravis?",
        options: [
          "Anticorpo anti-canal de cálcio positivo e aumento de potencial de ação na ENMG",
          "Detecção de neurotoxina no sangue",
          "Anticorpo anti-canal de cálcio positivo e decremento na ENMG",
          "Anticorpo anti-receptor de acetilcolina positivo e eletroneuromiografia com padrão decremental à estimulação repetitiva"
        ],
        answerIndex: 3,
        explanation: "O diagnóstico de Miastenia Gravis é confirmado pela positividade do anticorpo contra o receptor de acetilcolina (AChR) e/ou por um padrão decremental na eletroneuromiografia de estimulação repetitiva, que demonstra a \"fadiga\" da junção neuromuscular.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q55",
        text: "Paciente de 55 anos com visão dupla no final da tarde, cansaço nos braços e dificuldade para subir escadas, que melhoram com o repouso. Desenvolve tosse produtiva e febre e, dias depois, procura a emergência rouco, dispneico e com sialorreia. Qual o diagnóstico e exames confirmatórios?",
        options: [
          "Esclerose lateral amiotrófica, dosagem de CPK. eletroneuromiografia",
          "Síndrome de Guillain Barré, dosagem de anti-GM1, exame do líquor e eletroneuromiografia",
          "Miastenia gravis, dosagem de anti-ACth, eletroneuromiografia",
          "Meningoencefalite, leucograma, exame do, ressonância cerebral"
        ],
        answerIndex: 2,
        explanation: "O histórico de fraqueza flutuante que piora com o esforço e ao final do dia é clássico de Miastenia Gravis. O quadro agudo de insuficiência respiratória foi desencadeado por uma infecção. A confirmação diagnóstica é feita com a dosagem de anticorpos anti-receptor de acetilcolina e eletroneuromiografia.",
        tag: "Doenças Neuromusculares"
      },
      {
        id: "neuro-q56",
        text: "Considerando o diagnóstico da questão anterior (Miastenia Gravis com agudização por infecção), escolha a melhor alternativa para a condição e tratamento.",
        options: [
          "Pseudoautonomia, pulsoterapia com corticoide",
          "Insuficiência respiratória aguda, pulsoterapia com corticoide",
          "Crise miastênica, admissão em terapia intensiva, imunoglobulina humana ou plasmaférese",
          "Empiema subdural, antibioticoterapia guiada"
        ],
        answerIndex: 2,
        explanation: "O quadro de agudização da fraqueza em um paciente com Miastenia Gravis, especialmente com comprometimento respiratório, é chamado de Crise Miastênica. O tratamento requer internação em UTI para suporte (ventilatório, se necessário) e imunoterapia de ação rápida, como imunoglobulina ou plasmaférese.",
        tag: "Doenças Neuromusculares"
      },
      // Meningites e Encefalites
      {
        id: "neuro-q57",
        text: "É contraindicação formal ao exame de punção lombar na suspeita de meningites, EXCETO:",
        options: [
          "Crises convulsivas focais",
          "Bradicardia, arritmia respiratória e hipertensão arterial",
          "Papiledema e oftalmoparesias",
          "Sinais de irritação meníngea"
        ],
        answerIndex: 3,
        explanation: "Os sinais de irritação meníngea (como rigidez de nuca, Kernig, Brudzinski) são a própria indicação para a punção lombar. As outras opções são sinais de hipertensão intracraniana, que contraindicam a punção antes de uma neuroimagem devido ao risco de herniação cerebral.",
        tag: "Meningites"
      },
      {
        id: "neuro-q58",
        text: "Sobre as meningites bacterianas, pode-se afirmar:",
        options: [
          "Anisocoria não contra-indica a punção lombar",
          "O tratamento não deve ser postergado caso a punção lombar esteja contra-indicada ou inacessível",
          "Haemophilus influenzae tipo b é bactéria incapaz de causar meningite",
          "Crises convulsivas focais não contra-indicam a punção lombar"
        ],
        answerIndex: 1,
        explanation: "A meningite bacteriana é uma emergência médica. Se a punção lombar precisar ser adiada (por exemplo, para realizar uma TC de crânio antes), a antibioticoterapia empírica deve ser iniciada imediatamente para não atrasar o tratamento.",
        tag: "Meningites"
      },
      {
        id: "neuro-q59",
        text: "Paciente com rigidez de nuca, febre, fotofobia e cefaleia tem diagnóstico provável de:",
        options: [
          "Acidente vascular cerebral",
          "Ataque isquêmico transitório",
          "Meningite",
          "Epilepsia"
        ],
        answerIndex: 2,
        explanation: "A tétrade de febre, cefaleia, rigidez de nuca e fotofobia compõe a síndrome meníngea clássica, cujo principal diagnóstico é a meningite.",
        tag: "Meningites"
      },
      {
        id: "neuro-q60",
        text: "Em indivíduos maiores de 5 anos, o tratamento empírico das meningites é feito com:",
        options: ["Ciprofloxacina", "Ceftriaxona", "Amoxicilina", "Levofloxacina"],
        answerIndex: 1,
        explanation: "O tratamento empírico da meningite bacteriana comunitária em adultos e crianças maiores visa cobrir os patógenos mais comuns (S. pneumoniae, N. meningitidis). Uma cefalosporina de terceira geração, como a Ceftriaxona, é a base do tratamento, frequentemente associada à vancomicina.",
        tag: "Meningites"
      },
      {
        id: "neuro-q61",
        text: "Paciente de 47 anos apresenta cefaleia intensa, vômitos em jato, febre e diplopia. Ao exame: febril (39ºC), sinais de Kernig e Brudzinski presentes. Qual antibioticoterapia empírica deverá ser iniciada para essa paciente?",
        options: [
          "Ampicilina e Ceftriaxona",
          "Ampicilina e Cefotaxima",
          "Ceftriaxona e Vancomicina",
          "Ampicilina, Ceftriaxona e Vancomicina"
        ],
        answerIndex: 2,
        explanation: "Para uma meningite bacteriana comunitária em um adulto (18-50 anos), o esquema empírico padrão visa cobrir S. pneumoniae e N. meningitidis. A combinação de Ceftriaxona (cefalosporina de 3ª geração) e Vancomicina (para cobrir pneumococo resistente) é a escolha recomendada.",
        tag: "Meningites"
      },
      {
        id: "neuro-q62",
        text: "Paciente de 35 anos apresenta confusão mental progressiva e febre de 40ºC. Irmã relata que a paciente é contra vacinas. Com base na hipótese de meningoencefalite bacteriana aguda, quais patógenos principais devem ser considerados neste caso?",
        options: [
          "Neisseria meningitidis e Haemophilus influenzae",
          "Neisseria meningitidis, Streptococcus pneumoniae e Pseudomonas aeruginosa",
          "Neisseria meningitidis, Streptococcus pneumoniae e Haemophilus influenzae",
          "Streptococcus pneumoniae e Haemophilus influenzae"
        ],
        answerIndex: 2,
        explanation: "Em um adulto não vacinado, os três principais agentes etiológicos da meningite bacteriana comunitária são Streptococcus pneumoniae, Neisseria meningitidis e Haemophilus influenzae tipo b (que é coberto pela vacinação infantil de rotina).",
        tag: "Meningites"
      }
    ]
  },
  {
  id: "prova suseme 2017 emergencia",
  name: "SUSEME - Emergência - 2017",
  questions: [
    {
      id: "suseme-2017-q1",
      text: "A vítima de acidente botrópico apresenta as seguintes manifestações sistêmicas:",
      options: [
        "ptose palpebral, oftalmoplegia e turvação visual",
        "hipotensão, miastenia gravis e sialorreia",
        "gengivorragia, hematúria e hematêmese",
        "hematúria, ictericia e oftalmoplegia"
      ],
      answerIndex: 2,
      explanation: "O veneno da jararaca (acidente botrópico) tem ação coagulante, proteolítica e hemorrágica, levando a sangramentos sistêmicos. A opção C descreve manifestações hemorrágicas clássicas. A opção A (ptose, oftalmoplegia) é característica do acidente elapídico (coral). As opções B e D misturam sintomas de diferentes acidentes peçonhentos.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q2",
      text: "De acordo com o Guia de Vigilância Epidemiológica do Ministério da Saúde brasileiro, ano de 2014, o uso imediato do fosfato de oseltamivir está indicado em pacientes:",
      options: [
        "grávidas apenas no primeiro trimestre da gravidez com febre alta, lombalgia e cefaleia",
        "com dispneia e febre",
        "maiores de dois anos com febre e dor de garganta",
        "grávidas em qualquer idade gestacional com febre, prostração, dor de garganta, tosse seca, cefaleia e mialgia"
      ],
      answerIndex: 3,
      explanation: "Gestantes são consideradas grupo de risco para complicações da Influenza. A recomendação é o tratamento com oseltamivir para qualquer gestante com síndrome gripal, independentemente da idade gestacional. As outras opções são incorretas por restringirem a indicação ou descreverem quadros que não necessariamente exigem tratamento imediato em populações de baixo risco.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q3",
      text: "Para um profissional de saúde, a quimioprofilaxia da doença meningocócica está indicada na seguinte hipótese:",
      options: [
        "sempre que o médico atender paciente com suspeita de meningite meningocócica",
        "se história vacinal for incerta ou houver sorologia negativa para Neisseria meningitidis",
        "quando executar procedimentos invasivos sem o uso dos equipamentos de proteção individual adequados",
        "sempre que o paciente atendido apresentar evolução grave"
      ],
      answerIndex: 2,
      explanation: "A quimioprofilaxia é indicada apenas após contato íntimo e prolongado com o paciente ou para profissionais de saúde que tiveram exposição direta a secreções respiratórias sem uso de EPI, como em intubações ou aspiração. Simplesmente atender um paciente não é indicação.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q4",
      text: "É uma doença crônica e sistêmica que, no homem, pode ter periodo de incubação médio de 2 a 6 meses. É transmitida por mosquitos do gênero Lutzomyia sp que se contaminam a partir do cão ou mesmo raposas em ambientes silvestres. Manifesta-se com febre de longa duração associada a hepatoesplenomegalia, anemia, emagrecimento, adinamia e astenia. Essa descrição se refere à seguinte patologia:",
      options: [
        "febre amarela",
        "leishmaniose visceral",
        "febre tifoide",
        "leishmaniose tegumentar americana"
      ],
      answerIndex: 1,
      explanation: "O quadro de febre arrastada, hepatoesplenomegalia e pancitopenia (anemia, astenia) é clássico da Leishmaniose Visceral (Calazar), transmitida pelo Lutzomyia sp. As outras opções têm apresentações clínicas distintas: febre amarela é aguda com icterícia, febre tifoide tem febre em degraus, e a leishmaniose tegumentar causa lesões de pele.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q5",
      text: "Paciente de 24 anos com febre alta, cefaleia, mialgia intensa, icterícia, insuficiência renal com hipocalemia e hemoptise maciça após enchente. O paciente apresenta a sindrome de Weil, que é caracterizada por:",
      options: [
        "insuficiência renal, icterícia e febre alta",
        "febre alta, hemorragia e icterícia",
        "ictericia, coma e insuficiência renal hipocalêmica",
        "insuficiência renal, icterícia e hemorragia pulmonar"
      ],
      answerIndex: 3,
      explanation: "A Síndrome de Weil é a forma grave da leptospirose. A tríade clássica é icterícia, insuficiência renal (tipicamente não oligúrica e com hipocalemia) e fenômenos hemorrágicos. A hemorragia pulmonar é a manifestação hemorrágica mais grave e de maior letalidade. As outras opções são incompletas.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q6",
      text: "O calendário nacional de vacinação inclui a proteção contra o rotavirus humano para crianças. As idades da primeira e da segunda dose da vacina são, respectivamente:",
      options: [
        "2 e 4 meses",
        "2 e 6 meses",
        "4 e 6 meses",
        "12 e 15 meses"
      ],
      answerIndex: 0,
      explanation: "A Vacina Oral de Rotavírus Humano (VORH) é administrada aos 2 e 4 meses de idade. As idades de 2 e 6 meses são para outras vacinas como a Pentavalente (em alguns esquemas) e a VIP. 12 e 15 meses são para reforços e outras vacinas como a Tríplice Viral.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2017-q7",
      text: "São sinais de alarme na dengue:",
      options: [
        "dor abdominal intensa e febre alta",
        "aumento repentino do hematócrito e cefaleia holocraniana",
        "aumento repentino do hematócrito e queda abrupta de plaquetas",
        "hipotermia e dor lombar"
      ],
      answerIndex: 2,
      explanation: "Os sinais de alarme indicam extravasamento de plasma. O aumento do hematócrito (hemoconcentração) e a queda abrupta das plaquetas são os marcadores laboratoriais cardinais desse fenômeno. Dor abdominal intensa é um sinal de alarme, mas febre alta e cefaleia são sintomas comuns da fase febril, não de alarme.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q8",
      text: "No paciente com diagnóstico de dengue, está indicada a internação se a plaquetometria for inferior a:",
      options: [
        "20.000/mm³ independentemente de manifestações hemorrágicas",
        "50.000/mm³, sem sinais de alarme",
        "20.000/mm³ somente com sinais de alarme",
        "100.000/mm³, independentemente de manifestações hemorrágicas"
      ],
      answerIndex: 0,
      explanation: "Plaquetopenia acentuada (< 20.000/mm³) representa um risco intrínseco de sangramento grave e é uma indicação formal de internação hospitalar para monitoramento, mesmo na ausência de sangramentos visíveis ou outros sinais de alarme.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q9",
      text: "Paciente de 22 anos, militar, sofreu queimaduras de segundo grau no tronco e abdome. Sua vacinação está em dia, inclusive o reforço da vacina antitetânica foi administrado há 12 meses. Nesse caso, a profilaxia de tétano consiste em:",
      options: [
        "administrar imunoglobulina antitetânica e vacina dT",
        "aplicar apenas vacina dT",
        "administrar imunoglobulina antitetânica e vacina dT em grupamentos musculares diferentes",
        "manter observação sem fazer profilaxia"
      ],
      answerIndex: 3,
      explanation: "Para um paciente com esquema vacinal completo e atualizado (última dose há menos de 5 anos), nenhuma profilaxia adicional para tétano é necessária, mesmo em ferimentos considerados de alto risco. A conduta é apenas a limpeza do ferimento.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q10",
      text: "O uso da imunoglobulina humana antivaricela-zóster NÃO está indicada, de acordo com o Guia de Vigilância Epidemiológica, para os seguintes pacientes:",
      options: [
        "recém-nascidos de mães nas quais o início da varicela ocorreu nos últimos cinco dias da gestação",
        "crianças com varicela que não foram vacinadas com a tetra viral",
        "recém-nascidos de mães nas quais o início da varicela ocorreu em até 48h do puerpério",
        "adultos com SIDA, CD4 menor que 100 e que tiveram contato com individuo com varicela"
      ],
      answerIndex: 1,
      explanation: "A imunoglobulina é uma profilaxia pós-exposição, para tentar evitar que a doença se desenvolva. Ela não tem efeito terapêutico. Uma criança que já está com a doença (varicela manifestada) não se beneficia da imunoglobulina. As outras opções descrevem corretamente populações de risco que devem receber a profilaxia após a exposição.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q11",
      text: "A extração a fórcipe é a mais comum das operações obstétricas. Essa extração está indicada na seguinte condição:",
      options: [
        "em todas as gestantes com mais de 40 semanas",
        "em gestantes com doenças gerais, quando o esforço expulsivo for perigoso",
        "nas gestantes em trabalho de parto prematuro",
        "quando houver o desejo da gestante de abreviar a expulsão do concepto"
      ],
      answerIndex: 1,
      explanation: "O fórcipe é um instrumento para abreviar o período expulsivo quando sua continuação representa um risco para a mãe (ex: cardiopatia, exaustão) ou para o feto (sofrimento fetal). As outras opções não são indicações formais; o desejo materno isolado não é indicação.",
      tag: "G.O."
    },
    {
      id: "suseme-2017-q12",
      text: "Na abordagem da gestante com hipertensão crônica, é seguro o uso da seguinte droga:",
      options: ["nifedipina", "enalapril", "losartana", "candesartana"],
      answerIndex: 0,
      explanation: "Nifedipina, um bloqueador de canal de cálcio, é uma das drogas seguras e eficazes para o tratamento da hipertensão na gestação. Enalapril (IECA), losartana e candesartana (BRA) são formalmente contraindicados por serem teratogênicos.",
      tag: "G.O."
    },
    {
      id: "suseme-2017-q13",
      text: "São indicações para realização da operação cesariana:",
      options: [
        "cesárea prévia e necessidade de marcar data para o parto",
        "infecção pelo HIV e placenta prévia",
        "gestação gemelar e a idade materna",
        "idade materna e apresentações anômalas"
      ],
      answerIndex: 1,
      explanation: "Placenta prévia total e infecção pelo HIV com carga viral detectável são indicações absolutas para cesariana, para evitar hemorragia maciça e transmissão vertical, respectivamente. As outras opções contêm indicações relativas (apresentações anômalas) ou não-indicações (idade materna isolada, cesárea prévia).",
      tag: "G.O."
    },
    {
      id: "suseme-2017-q14",
      text: "A pré-eclampsia é considerada grave quando se verifica que:",
      options: [
        "a proteinúria supera os 3g em uma amostra de urina de 24h",
        "a pressão arterial aferida ao acaso é superior a 165 x 110 mmHg",
        "a proteinúria supera os 5g em uma amostra de urina de 24h",
        "o débito urinário é reduzido abaixo de 1,0L em 24h"
      ],
      answerIndex: 2,
      explanation: "Um dos critérios clássicos de gravidade na pré-eclâmpsia é a proteinúria maciça, definida como ≥ 5g em 24h. Outros critérios incluem PA ≥ 160x110 mmHg e sinais de disfunção de órgãos-alvo, como oligúria < 500ml/24h.",
      tag: "G.O."
    },
    {
      id: "suseme-2017-q15",
      text: "Na abordagem do paciente com cefaleia, o sintoma que sugere doença grave é:",
      options: [
        "dor pulsatil",
        "dor tipo capacete",
        "dor irradiada a partir da região cervical",
        "dor induzida pela tosse"
      ],
      answerIndex: 3,
      explanation: "Cefaleia desencadeada ou piorada por tosse, espirro ou manobra de Valsalva é um 'sinal de alerta' (red flag) que sugere hipertensão intracraniana. As outras opções descrevem características de cefaleias primárias benignas (enxaqueca, tensional).",
      tag: "Neurologia"
    },
    {
      id: "suseme-2017-q16",
      text: "Paciente na segunda semana pós-parto, com febre alta e mama esquerda ingurgitada, quente, vermelha e dolorosa, sem flutuação. Neste caso deve-se:",
      options: [
        "iniciar cefalexina 500 mg 8/8 horas e manter amamentação",
        "iniciar cefalexina 500 mg 8/8 horas e interromper amamentação na mama afetada",
        "iniciar cefalexina 500mg 6/6 horas e interromper amamentação na mama afetada",
        "iniciar cefalexina 500mg 6/6 horas e manter amamentação em ambas as mamas"
      ],
      answerIndex: 3,
      explanation: "O quadro é de mastite puerperal. A conduta é antibioticoterapia (cefalexina 500mg de 6/6h é um regime padrão) e, crucialmente, a manutenção do esvaziamento da mama para prevenir a formação de abscesso, seja por amamentação ou ordenha manual.",
      tag: "G.O."
    },
    {
      id: "suseme-2017-q17",
      text: "A trombólise venosa está contraindicada para paciente com acidente vascular encefálico isquêmico, em caso de:",
      options: [
        "tomografia computadorizada de crânio não demonstrar edema em mais de 1/3 do território da artéria cerebral média",
        "cirurgia de qualquer porte há 4 semanas",
        "melhora rápida dos sintomas",
        "uso de varfarina, mesmo com INR normal"
      ],
      answerIndex: 2,
      explanation: "A melhora rápida e substancial dos sintomas neurológicos é uma contraindicação relativa, pois o risco do trombolítico pode superar os benefícios num quadro que já está a resolver espontaneamente (sugerindo um AIT). Cirurgia há 4 semanas não é contraindicação (o limite é 2 semanas para cirurgias grandes) e o uso de varfarina só contraindica se o INR estiver alterado.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2017-q18",
      text: "Paciente de 50 anos, diabético, hipertenso, com febre, tosse e dor torácica. Exame físico com desidratação e taquicardia. PA 128x87mmHg. Após 2000mL de soro fisiológico, a PA se manteve em 126x92mmHg. O diagnóstico provável para esse paciente é:",
      options: ["choque séptico refratário", "choque séptico", "sepse precoce", "sepse grave"],
      answerIndex: 3,
      explanation: "O paciente tem sepse (infecção + disfunção de órgão, neste caso hipotensão relativa para um hipertenso crônico). Como a pressão se manteve estável após a reposição volêmica e não houve necessidade de vasopressores, o quadro é classificado como Sepse Grave (pelos critérios antigos). Choque séptico exigiria hipotensão persistente apesar da ressuscitação volêmica.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q19",
      text: "Paciente de 52 anos, tabagista, com ascite. O gradiente de albumina soroascite é de 0,5 g/dL. A doença compatível com este achado é:",
      options: ["síndrome de Budd-Chiari", "insuficiência cardíaca congestiva", "carcinomatose peritoneal", "hipertensão portal"],
      answerIndex: 2,
      explanation: "O Gradiente de Albumina Soro-Ascite (GASA) < 1,1 g/dL indica uma causa de ascite não relacionada à hipertensão portal. Entre as opções, a carcinomatose peritoneal é a causa mais provável. As outras opções (Budd-Chiari, ICC, hipertensão portal) cursam com GASA elevado (≥ 1,1 g/dL).",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2017-q20",
      text: "Paciente com úlcera duodenal apresenta, no resultado da biópsia, Helicobacter pylori. O tratamento indicado é:",
      options: [
        "inibidor de bomba de proton, norfloxacina e amoxacilina",
        "inibidor de bomba de próton, claritromicina e amoxacilina",
        "antagonista do receptor H2, claritromicina e amoxacilina",
        "antagonista do receptor H2, clindamicina e claritromicina"
      ],
      answerIndex: 1,
      explanation: "O tratamento de primeira linha para erradicação do H. pylori é a terapia tripla padrão, consistindo em um Inibidor de Bomba de Prótons (IBP) associado a dois antibióticos, sendo a combinação mais utilizada a de claritromicina e amoxicilina.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2017-q21",
      text: "Paciente de 30 anos, agredido, comatoso. Abertura ocular à dor (2), sem resposta verbal (1 - intubado), retira membro ao estímulo álgico (4). TC com hematoma epidural. Qual o Glasgow pré-cirurgia e o alvo da PPC?",
      options: [
        "Glasgow 5 e PPC ≥ 60 mmHg",
        "Glasgow 6 e PPC > 65 mmHg",
        "Glasgow 7 e PPC ≥ 60 mmHg",
        "Glasgow 7 e PPC > 70 mmHg"
      ],
      answerIndex: 2,
      explanation: "A Escala de Coma de Glasgow é a soma de: Abertura Ocular (2) + Melhor Resposta Verbal (1, pois está intubado) + Melhor Resposta Motora (4) = 7. As diretrizes de neurointensivismo recomendam manter a Pressão de Perfusão Cerebral (PPC) entre 60 e 70 mmHg. A opção C é a que melhor se enquadra.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2017-q22",
      text: "Para o tratamento de delirium, é preconizado o uso de neuroléptico como:",
      options: ["prometazina", "nimodipina", "lorazepam", "olanzapina"],
      answerIndex: 3,
      explanation: "O tratamento da agitação no delirium é feito com antipsicóticos (neurolépticos). Olanzapina e outros atípicos são frequentemente usados. Benzodiazepínicos (lorazepam) são reservados para delirium por abstinência de álcool/sedativos, pois podem piorar o quadro em outras situações.",
      tag: "Psiquiatria"
    },
    {
      id: "suseme-2017-q23",
      text: "É uma causa de hipercalemia:",
      options: ["hipomagnesemia", "diarreia", "insuficiência renal", "cetoacidose diabética"],
      answerIndex: 2,
      explanation: "Os rins são os principais responsáveis pela excreção de potássio. Na insuficiência renal, essa capacidade é reduzida, levando à hipercalemia. Diarreia e hipomagnesemia causam hipocalemia. A cetoacidose diabética causa uma pseudohipercalemia por deslocamento transcelular, mas o potássio corporal total está baixo.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2017-q24",
      text: "Paciente, em pós operatório de tireoidectomia e retirada de paratireoide, apresenta espasmo carpal após aferição de pressão arterial. O diagnóstico é:",
      options: ["hipocalcemia", "hipercalcemia", "hiperfosfatemia", "hiponatremia"],
      answerIndex: 0,
      explanation: "O espasmo carpal (mão de parteiro) induzido pela isquemia do manguito de pressão é o Sinal de Trousseau, patognomônico de hipocalcemia. A retirada inadvertida das paratireoides durante a tireoidectomia é a principal causa de hipocalcemia pós-operatória.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2017-q25",
      text: "É uma causa de alteração na adesão plaquetária com aparecimento de sangramento em mucosa:",
      options: ["doença de von Willebrand", "síndrome de von Hippel Lindau", "deficiência de fator X", "deficiência de fator II"],
      answerIndex: 0,
      explanation: "A doença de von Willebrand é o distúrbio hemorrágico hereditário mais comum, caracterizado pela deficiência do fator de von Willebrand, que é essencial para a adesão das plaquetas ao vaso lesado. As outras opções são distúrbios da coagulação (via secundária da hemostasia).",
      tag: "Hematologia"
    },
    {
      id: "suseme-2017-q26",
      text: "Em paciente com crise tireotóxica que apresenta fibrilação atrial, o tratamento preconizado é a utilização da seguinte droga:",
      options: ["amiodarona", "lidocaina", "protamina", "propranolol"],
      answerIndex: 3,
      explanation: "O propranolol, um betabloqueador não seletivo, é a droga de escolha na crise tireotóxica. Ele controla a resposta ventricular na fibrilação atrial e bloqueia os efeitos adrenérgicos sistêmicos, além de inibir a conversão periférica de T4 em T3.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2017-q27",
      text: "O acompanhamento da eficácia do tratamento do diabetes mellitus é realizado pelo seguinte exame:",
      options: ["glicosúria", "glicemia de jejum", "hemoglobina glicada", "teste de tolerância a glicose"],
      answerIndex: 2,
      explanation: "A hemoglobina glicada (HbA1c) reflete a média dos níveis de glicose no sangue nos últimos 2-3 meses, sendo o padrão-ouro para o monitoramento do controle glicêmico a longo prazo. Glicemia de jejum avalia o controle momentâneo.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2017-q28",
      text: "Paciente com cirrose apresenta suspeita de peritonite bacteriana espontânea. Esse diagnóstico é confirmado com:",
      options: [
        "liquido ascítico com 250 hemáceas e proteina maior que 2 g/dL",
        "líquido ascítico com mais que 250 células de polimorfonucleares e proteína menor que 1g/dL",
        "a presença de 100 células de polimorfos nucleares",
        "bilirrubina no liquido ascético >3mg/dL"
      ],
      answerIndex: 1,
      explanation: "O diagnóstico de Peritonite Bacteriana Espontânea (PBE) é confirmado por uma contagem de polimorfonucleares (PMN) no líquido ascítico ≥ 250/mm³. Tipicamente, a proteína é baixa (<1 g/dL) por ser um transudato. As outras opções são incorretas.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2017-q29",
      text: "Paciente internado com colite infecciosa grave, após uso de amoxacilina/clavulanato, realiza retossigmoidoscopia com visualização de pseudomembrana. Este quadro corresponde ao provocado pelo seguinte agente etiológico:",
      options: ["Clostridim difficile", "Yersinia enterocolitica", "Escherichia coli", "Salmonella"],
      answerIndex: 0,
      explanation: "A colite pseudomembranosa é uma complicação clássica associada ao uso de antibióticos (especialmente clindamicina, cefalosporinas e amoxicilina-clavulanato), causada pela proliferação e produção de toxinas pelo Clostridioides difficile.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q30",
      text: "A taquicardia ventricular polimórfica, associada ao aumento do intervalo QT, é conhecida como:",
      options: [
        "síndrome de Wolff-Parkinson-White",
        "sindrome Lown Ganong Levine",
        "torsades de pointes",
        "doença de Buerger"
      ],
      answerIndex: 2,
      explanation: "Torsades de Pointes é a designação específica para a taquicardia ventricular polimórfica que ocorre em um contexto de QT longo, caracterizada pela torção dos complexos QRS em torno da linha de base no ECG. As outras são síndromes de pré-excitação (A, B) ou uma vasculite (D).",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2017-q31",
      text: "As drogas preconizadas para a parada cardíaca em atividade elétrica sem pulso são:",
      options: [
        "lidocaina, atropina e fosfato",
        "amiodarona, adrenalina e gluconato de cálcio",
        "atropina, dobutamina e acetato de sódio",
        "adrenalina, atropina e bicarbonato de sódio"
      ],
      answerIndex: 3,
      explanation: "No algoritmo de AESP/Assistolia, a droga fundamental é a adrenalina. Atropina foi removida das diretrizes mais recentes para esta indicação. Bicarbonato de sódio pode ser usado em situações específicas (hipercalemia, acidose grave). As outras opções misturam drogas de diferentes algoritmos ou que não são usadas.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2017-q32",
      text: "A pneumonia comunitária grave provocada pelo agente Staphilococcus aureus meticilina resistente, CA-MRSA, deve ser tratada com:",
      options: ["cetriaxone", "cefepime", "linezolida", "eritromicina"],
      answerIndex: 2,
      explanation: "Para o tratamento de infecções graves por Staphylococcus aureus Meticilina-Resistente adquirido na comunidade (CA-MRSA), é necessário um antibiótico com cobertura específica, como Vancomicina ou Linezolida. As outras opções não são eficazes.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q33",
      text: "O tratamento preconizado para a endocardite infecciosa que tem como agente etiológico o bacilo gram-negativo do grupo HACEK é:",
      options: ["ampicilina", "doxiciclina", "amicacina", "ceftriaxone"],
      answerIndex: 3,
      explanation: "Os organismos do grupo HACEK (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella) são uma causa de endocardite e são sensíveis a cefalosporinas de terceira geração. Ceftriaxona é o tratamento de escolha.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q34",
      text: "O paciente com cetoacidose diabética é suscetível à infecção por Rhizopus, causando a mucormicose rinocerebral. O antifúngico preconizado para o tratamento é:",
      options: ["anfotericina B", "fluconazol", "voriconazol", "flucitosina"],
      answerIndex: 0,
      explanation: "A mucormicose é uma infecção fúngica angioinvasiva grave. O tratamento de primeira linha é com Anfotericina B lipossomal em altas doses, associada a debridamento cirúrgico agressivo. Voriconazol é para Aspergilose, Fluconazol para Candida.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2017-q35",
      text: "A intoxicação por pesticidas causa sintomas muscarinicos, que devem ser tratados com:",
      options: ["neostigmine", "dopamina", "nicotinamida", "atropina"],
      answerIndex: 3,
      explanation: "A intoxicação por organofosforados e carbamatos inibe a acetilcolinesterase, causando uma síndrome colinérgica. A atropina é um antagonista muscarínico que bloqueia esses efeitos (sialorreia, broncorreia, etc.). Neostigmina agravaria o quadro.",
      tag: "Toxicologia"
    },
    {
      id: "suseme-2017-q36",
      text: "Ao exame fisico, paciente apresenta dispneia aos esforços, angina e pulso parvus e tardus. Esses sintomas são caracteristicos da seguinte lesão valvar:",
      options: ["insuficiência aórtica", "estenose aórtica", "insuficiência tricúspide", "estenose mitral"],
      answerIndex: 1,
      explanation: "A tríade de dispneia, angina e síncope aos esforços é clássica da estenose aórtica grave. O pulso parvus et tardus (de pequena amplitude e ascensão lenta) é o achado semiológico característico no pulso carotídeo.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2017-q37",
      text: "Paciente em uso de inibidores de angiotensina apresenta hipercalemia com alterações eletrocardiográficas. O tratamento imediato é:",
      options: ["furosemida", "tiazidico", "glicoinsulina", "bloqueadores de cálcio"],
      answerIndex: 2,
      explanation: "Diante de hipercalemia com alterações no ECG (risco de arritmia fatal), a medida mais eficaz e rápida para reduzir o potássio sérico é deslocá-lo para o interior das células. A solução de glicoinsulina (insulina + glicose) é o tratamento de escolha para este fim. Bloqueadores de cálcio não são usados, e diuréticos demoram mais para agir.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2017-q38",
      text: "Uma causa de acidose metabólica, com anion gap normal, é a:",
      options: ["cetoacisode diabética", "intoxicação por metanol", "acidose tubular renal", "intoxicação por salicilato"],
      answerIndex: 2,
      explanation: "A acidose metabólica com ânion gap normal (hiperclorêmica) ocorre por perda de bicarbonato (ex: diarreia) ou por incapacidade renal de excretar ácidos ou reabsorver bicarbonato, como nas Acidoses Tubulares Renais (ATRs). As outras opções são causas clássicas de acidose com ânion gap elevado.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2017-q39",
      text: "Paciente com TVP, em uso de heparina, apresenta queda abrupta de plaquetas e anti-PF4 positivo. O diagnóstico e o tratamento adequados são, respectivamente:",
      options: [
        "púrpura trombocitopênica e plasmaferese",
        "deficiência de vitamina B12 e reposição de vitamina B12",
        "mielodisplasia e quimioterapia",
        "trombocitopenia induzida por heparina e inibidores de trombina"
      ],
      answerIndex: 3,
      explanation: "O quadro de trombocitopenia e trombose durante o uso de heparina, confirmado pelo anti-PF4, é diagnóstico de Trombocitopenia Induzida por Heparina (TIH). O tratamento requer a suspensão imediata da heparina e a introdução de um anticoagulante alternativo que não seja a varfarina, como os inibidores diretos da trombina (ex: argatroban).",
      tag: "Hematologia"
    },
    {
      id: "suseme-2017-q40",
      text: "Paciente apresenta, após uma semana de um quadro diarreico, fraqueza ascendente flácida e dispneia. Punção liquórica com proteína alta e celularidade baixa. O diagnóstico e o tratamento são, respectivamente:",
      options: [
        "miastenia gravis / neostigmine",
        "sindrome Eaton Lambert/plasmaferese",
        "neurossífilis/penicilina",
        "síndrome de Guillain-Barrè / imunoglobulina"
      ],
      answerIndex: 3,
      explanation: "A paralisia ascendente, flácida e arreflexa após um quadro infeccioso (gastrointestinal ou respiratório) é a apresentação clássica da Síndrome de Guillain-Barré. A dissociação proteinocitológica no líquor (muita proteína, poucas células) confirma o diagnóstico. O tratamento de primeira linha é com imunoglobulina intravenosa ou plasmaférese.",
      tag: "Neurologia"
    }
  ]
},
    {
    id: "preset-otorrinolaringologia-1",
    name: "  Estácio - M7 - PR1 - Otorrinolaringologia",
    questions: [
      {
        id: "otorrino-q1",
        text: "Qual das seguintes características NÃO faz parte da fácies adenoideana (respirador oral crónico)?",
        options: [
          "Face alongada e boca entreaberta",
          "Palato ogival (céu da boca fundo)",
          "Prognatismo (queixo proeminente)",
          "Má oclusão dentária com mordida cruzada"
        ],
        answerIndex: 2,
        explanation: "A fácies do respirador oral crónico é caracterizada por face alongada, boca entreaberta, palato ogival e má oclusão, mas não por prognatismo. Pelo contrário, a mandíbula tende a ser retruída.",
        tag: "Anatomia"
      },
      {
        id: "otorrino-q2",
        text: "Adolescente de 14 anos com dor de garganta, febre, linfonodomegalia difusa (incluindo cervical posterior) e hepatomegalia. O médico prescreveu amoxicilina. Qual o diagnóstico mais provável?",
        options: [
          "Faringoamigdalite Estreptocócica",
          "Herpangina",
          "Mononucleose Infecciosa",
          "Difteria"
        ],
        answerIndex: 2,
        explanation: "A tríade de faringite, febre e linfonodomegalia generalizada (especialmente posterior) num adolescente é altamente sugestiva de Mononucleose Infecciosa. O uso de amoxicilina pode causar um rash cutâneo característico nesta doença.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q3",
        text: "Qual é a forma de apresentação mais comum da candidíase oral?",
        options: [
          "Eritematosa atrófica",
          "Hiperplásica crónica (leucoplasia)",
          "Queilite angular",
          "Pseudomembranosa (sapinho)"
        ],
        answerIndex: 3,
        explanation: "A forma pseudomembranosa, caracterizada por placas brancas removíveis que deixam um leito eritematoso, é a apresentação mais clássica e comum da candidíase oral.",
        tag: "Boca"
      },
      {
        id: "otorrino-q4",
        text: "Paciente de 55 anos com epistaxe moderada em narina direita e PA de 190x110 mmHg. Qual a primeira conduta a ser adotada na emergência?",
        options: [
          "Realizar tamponamento nasal anterior imediato.",
          "Iniciar controlo da pressão arterial e realizar compressão digital.",
          "Cauterizar o ponto de sangramento com nitrato de prata.",
          "Solicitar exames de coagulação."
        ],
        answerIndex: 1,
        explanation: "A prioridade no manejo da epistaxe em um paciente hipertenso é o controlo da pressão arterial. Medidas locais como a compressão digital podem ser tentadas em simultâneo, mas a causa de base deve ser abordada.",
        tag: "Nariz"
      },
      {
        id: "otorrino-q5",
        text: "Paciente de 5 anos com obstrução nasal e rinorreia purulenta unilateral e fétida. Qual a principal hipótese diagnóstica?",
        options: [
          "Rinossinusite bacteriana aguda",
          "Pólipo nasal",
          "Corpo estranho nasal",
          "Atresia de coana unilateral"
        ],
        answerIndex: 2,
        explanation: "A rinorreia purulenta, fétida e estritamente unilateral numa criança é o sinal mais característico da presença de um corpo estranho na fossa nasal.",
        tag: "Nariz"
      },
      {
        id: "otorrino-q6",
        text: "Paciente de 27 anos com pressão facial, congestão nasal e anosmia há 11 dias, sem melhora. A rinoscopia mostra secreção purulenta no meato médio. Qual o diagnóstico e conduta?",
        options: [
          "Rinossinusite aguda viral, não necessita de exames.",
          "Rinossinusite aguda bacteriana, solicitar TC de seios paranasais.",
          "Rinossinusite aguda viral, solicitar radiografia de face.",
          "Rinossinusite aguda bacteriana, não necessita de exames de imagem."
        ],
        answerIndex: 3,
        explanation: "A persistência ou piora dos sintomas por mais de 10 dias, associada a achados como secreção purulenta, caracteriza a rinossinusite aguda bacteriana. O diagnóstico é clínico e não requer exames de imagem em casos não complicados.",
        tag: "Nariz"
      },
      {
        id: "otorrino-q7",
        text: "Criança de 7 anos com edema periorbitário à esquerda, febre de 38°C, dor de cabeça e congestão nasal. A TC mostra velamento dos seios etmoidais e coleção de pus na órbita. Qual é a complicação e o tratamento?",
        options: [
          "Celulite pré-septal / Antibiótico oral",
          "Celulite orbitária (pós-septal) / Internação e antibiótico intravenoso",
          "Dacriocistite aguda / Massagem e antibiótico tópico",
          "Abscesso palpebral / Drenagem ambulatorial"
        ],
        answerIndex: 1,
        explanation: "O edema periorbitário associado a sinais de envolvimento da órbita (comprometimento da motilidade ocular, proptose, baixa visual) e sinusite na TC caracteriza a celulite orbitária, uma emergência que requer internação e antibioticoterapia venosa.",
        tag: "Complicações"
      },
      {
        id: "otorrino-q8",
        text: "Paciente de 55 anos, atópico, com pressão facial e anosmia há 15 semanas. Qual a principal hipótese diagnóstica e o exame a ser solicitado?",
        options: [
          "Rinossinusite aguda bacteriana / Radiografia de face",
          "Rinossinusite crónica / Tomografia computadorizada de seios paranasais",
          "Rinite alérgica / Teste cutâneo",
          "Pólipose nasossinusal / Endoscopia nasal"
        ],
        answerIndex: 1,
        explanation: "Sintomas de rinossinusite que persistem por mais de 12 semanas definem o quadro como crónico. A Tomografia Computadorizada é o exame de imagem de eleição para avaliar a extensão da doença e a anatomia dos seios paranasais.",
        tag: "Nariz"
      },
      {
        id: "otorrino-q9",
        text: "Paciente de 14 anos, asmática, refere que, sempre que usa corticoide intranasal para a rinite, tem epistaxe. Qual seria uma boa alternativa terapêutica para esta paciente?",
        options: [
          "Aumentar a dose do corticoide nasal",
          "Trocar por um descongestionante tópico de uso contínuo",
          "Associar um anti-histamínico de primeira geração",
          "Iniciar um antileucotrieno (ex: montelucaste)"
        ],
        answerIndex: 3,
        explanation: "Os antileucotrienos são uma boa opção de tratamento para a rinite alérgica, especialmente em pacientes asmáticos, e não causam os efeitos adversos locais dos corticoides, como a epistaxe.",
        tag: "Rinite Alérgica"
      },
      {
        id: "otorrino-q10",
        text: "Recém-nascido de 2 semanas com ruídos durante a respiração que pioram ao amamentar e quando está agitado, apresentando estridor inspiratório. Qual o diagnóstico mais provável?",
        options: [
          "Atresia de coanas",
          "Estenose subglótica",
          "Laringomalácia",
          "Paralisia de prega vocal"
        ],
        answerIndex: 2,
        explanation: "O estridor inspiratório que piora com o choro, agitação e alimentação, presente desde as primeiras semanas de vida, é a apresentação clássica da laringomalácia, a anomalia congénita mais comum da laringe.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q11",
        text: "Professora de 51 anos, tabagista de longa data, com disfonia progressiva há 3 anos e voz mais grave. A videolaringoscopia mostra lesões bilaterais, gelatinosas e flácidas nas pregas vocais. Qual o diagnóstico?",
        options: [
          "Nódulos vocais",
          "Pólipo de prega vocal",
          "Edema de Reinke",
          "Carcinoma de laringe"
        ],
        answerIndex: 2,
        explanation: "O Edema de Reinke é uma lesão benigna caracterizada por um edema gelatinoso no espaço de Reinke das pregas vocais, fortemente associado ao tabagismo e ao abuso vocal, resultando numa voz mais grave.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q12",
        text: "Criança de 5 anos com dor intensa ao deglutir, dispneia, febre alta e que assume uma postura com hiperextensão do pescoço e boca entreaberta ('posição de tripé'). Qual o diagnóstico mais provável?",
        options: [
          "Laringotraqueobronquite (Crupe Viral)",
          "Abscesso periamigdaliano",
          "Epiglotite aguda",
          "Mononucleose Infecciosa"
        ],
        answerIndex: 2,
        explanation: "A tríade de disfagia, dispneia e salivação, associada à febre alta e à 'posição de tripé', é a apresentação clássica da epiglotite aguda, uma emergência médica causada principalmente pelo Haemophilus influenzae tipo B.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q13",
        text: "Criança de 5 anos com tosse intensa, febre, rinorreia e estridor inspiratório. A radiografia cervical em AP mostra o 'sinal da ponta de lápis' ou 'torre de igreja'. Qual o diagnóstico?",
        options: [
          "Epiglotite aguda",
          "Laringotraqueobronquite (Crupe Viral)",
          "Corpo estranho laríngeo",
          "Laringomalácia"
        ],
        answerIndex: 1,
        explanation: "A tosse 'de cão' ou 'metálica', associada a estridor e desconforto respiratório, é típica do Crupe Viral. O 'sinal da ponta de lápis' na radiografia corresponde ao estreitamento da região subglótica devido ao edema.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q14",
        text: "Criança de 6 anos com dor de garganta intensa, febre de 39°C e dificuldade para engolir. A oroscopia revela amígdalas hiperemiadas com exsudato purulento. Qual o agente etiológico mais provável?",
        options: [
          "Vírus Epstein-Barr",
          "Adenovírus",
          "Streptococcus pyogenes (Estreptococo Beta-Hemolítico do Grupo A)",
          "Vírus Coxsackie"
        ],
        answerIndex: 2,
        explanation: "A faringoamigdalite com febre alta, exsudato purulento e ausência de sintomas virais (como coriza e tosse) em crianças em idade escolar é mais provavelmente causada pelo Streptococcus pyogenes.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q15",
        text: "Paciente de 22 anos com disfagia, dor de garganta unilateral e mau hálito. A oroscopia mostra uma úlcera necrótica unilateral na amígdala. Qual o diagnóstico?",
        options: [
          "Herpangina",
          "Difteria",
          "Angina de Plaut-Vincent",
          "Carcinoma de amígdala"
        ],
        answerIndex: 2,
        explanation: "A Angina de Plaut-Vincent é uma amigdalite úlcero-necrótica, geralmente unilateral, causada por uma simbiose de bactérias fusoespiralares, comum em pacientes com má higiene oral.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q16",
        text: "Criança de 5 anos, não vacinada, com febre, dor de garganta e queda do estado geral. Ao exame, observam-se placas branco-acinzentadas e aderentes nas amígdalas. Qual a principal hipótese?",
        options: [
          "Mononucleose infecciosa",
          "Amigdalite bacteriana",
          "Candidíase oral",
          "Difteria"
        ],
        answerIndex: 3,
        explanation: "A presença de pseudomembranas branco-acinzentadas, firmemente aderentes, que sangram à tentativa de remoção, em um paciente não vacinado, é o sinal clássico da Difteria, uma doença grave causada pelo Corynebacterium diphtheriae.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q17",
        text: "Criança de 3 anos com crises noturnas súbitas de tosse rouca e dispneia, que melhoram rapidamente, mas recorrem. Entre as crises, a criança está bem, apenas com sintomas de resfriado. Qual o diagnóstico?",
        options: [
          "Epiglotite aguda",
          "Laringotraqueobronquite (Crupe Viral)",
          "Laringite Estridulosa (Crupe Espasmódico)",
          "Coqueluche"
        ],
        answerIndex: 2,
        explanation: "A Laringite Estridulosa é caracterizada por episódios súbitos e recorrentes de crupe, geralmente noturnos, sem febre alta ou pródromos virais significativos, associados a um componente alérgico ou de hiper-reatividade.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q18",
        text: "Paciente de 53 anos, obeso (IMC=35), hipertenso de difícil controlo, com queixa de cansaço diurno intenso e roncos. Qual o exame padrão-ouro para confirmar a suspeita de SAHOS?",
        options: [
          "Endoscopia nasal com manobra de Muller",
          "Radiografia de cavum",
          "Tomografia de seios paranasais",
          "Polissonografia de noite inteira"
        ],
        answerIndex: 3,
        explanation: "A Polissonografia é o exame padrão-ouro para o diagnóstico da Síndrome da Apneia Obstrutiva do Sono (SAHOS), pois monitoriza diversas variáveis fisiológicas durante o sono e quantifica os eventos de apneia e hipopneia.",
        tag: "Ronco e Apneia"
      },
      {
        id: "otorrino-q19",
        text: "Qual das seguintes afirmações sobre a leucoplasia oral é INCORRETA?",
        options: [
          "Lesões com áreas vermelhas (eritroplásicas) ou verrucosas têm maior risco de malignização.",
          "O tratamento pode incluir o uso de retinoides e betacaroteno em casos de baixo risco.",
          "Algumas leucoplasias são facilmente destacadas da mucosa com uma gaze.",
          "A localização no assoalho da boca e na face ventral da língua aumenta o risco de malignização."
        ],
        answerIndex: 2,
        explanation: "A leucoplasia é, por definição, uma placa branca que NÃO pode ser removida por raspagem, diferenciando-a de outras lesões como a candidíase pseudomembranosa.",
        tag: "Boca"
      },
      {
        id: "otorrino-q20",
        text: "Paciente de 6 anos com febre alta, odinofagia, língua em framboesa, exantema torácico e palidez perioral (Sinal de Filatov). Qual o diagnóstico mais provável?",
        options: [
          "Mononucleose infecciosa",
          "Herpangina",
          "Doença de Kawasaki",
          "Escarlatina"
        ],
        answerIndex: 3,
        explanation: "A combinação de faringite, febre, exantema micropapular (pele em lixa), língua em framboesa e sinais como Filatov e Pastia é a apresentação clássica da Escarlatina, causada por uma toxina do Streptococcus pyogenes.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q21",
        text: "Paciente de 25 anos com odinofagia, febre e linfonodomegalia, sem melhora com amoxicilina. Exame mostra linfocitose atípica. Qual a conduta?",
        options: [
          "Trocar o antibiótico por Amoxicilina com clavulanato.",
          "Internação e cirurgia para drenagem de abscesso.",
          "Tratamento com sintomáticos e repouso.",
          "Internação e antibiótico venoso."
        ],
        answerIndex: 2,
        explanation: "O quadro é altamente sugestivo de Mononucleose Infecciosa. O tratamento é de suporte, com analgésicos, antitérmicos e repouso. Antibióticos não são indicados e podem causar rash.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q22",
        text: "Qual das seguintes afirmações sobre faringoamigdalites é correta?",
        options: [
          "A cultura de orofaringe é o exame padrão-ouro para o diagnóstico da faringoamigdalite estreptocócica.",
          "As complicações não supurativas incluem Escarlatina e Abscesso periamigdaliano.",
          "O Monoteste está positivo desde o início do quadro de Mononucleose.",
          "As vesículas da herpangina são observadas em qualquer região da cavidade oral."
        ],
        answerIndex: 0,
        explanation: "Apesar de o diagnóstico ser frequentemente clínico, a cultura de orofaringe é o padrão-ouro para a confirmação da infeção por Streptococcus pyogenes.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q23",
        text: "Criança de 4 anos com tosse paroxística seguida de vômitos e um ruído semelhante a um 'guincho' inspiratório. A mãe relata não vacinar a criança. Qual a principal hipótese?",
        options: [
          "Epiglotite",
          "Coqueluche",
          "Laringite estridulosa",
          "Laringotraqueobronquite"
        ],
        answerIndex: 1,
        explanation: "A tosse paroxística (em acessos), seguida de um guincho inspiratório e frequentemente de vómitos, é a apresentação clássica da Coqueluche (tosse convulsa), causada pela Bordetella pertussis.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q24",
        text: "Paciente de 19 anos com trismo, odinofagia intensa, febre e desvio da úvula, com abaulamento do palato mole à esquerda. Qual o diagnóstico mais provável?",
        options: [
          "Angina de Plaut-Vincent",
          "Mononucleose Infecciosa",
          "Abscesso periamigdaliano",
          "Difteria"
        ],
        answerIndex: 2,
        explanation: "O trismo (dificuldade de abrir a boca), o desvio da úvula e o abaulamento do palato mole são os sinais cardinais do abscesso periamigdaliano, uma complicação supurativa da faringoamigdalite.",
        tag: "Complicações"
      },
      {
        id: "otorrino-q25",
        text: "Bebé de 30 dias de vida com diagnóstico de laringomalácia, apresentando quadro de estridor inspira cianose e dificuldade em ganhar peso. Baseado no quadro descrito e na patologia citada, marque a alter correta:",
        options: [
          "Cianose e dificuldade em ganhar peso são sinais de gravidade e o tratamento é cirúrgico.",
          "O diagnóstico da patologia é confirmado por raio-x de região cervical.",
          "O tratamento do bebé do caso acima deve ser clínico com acompanhamento periódico.",
          "Edema de epiglote é a principal alteração anatómica encontrada."
        ],
        answerIndex: 0,
        explanation: "Embora a maioria dos casos de laringomalácia seja leve e se resolva espontaneamente, a presença de sinais de gravidade como cianose, dificuldade alimentar e baixo ganho de peso indica a necessidade de intervenção cirúrgica (supraglotoplastia).",
        tag: "Laringe"
      },
      {
        id: "otorrino-q26",
        text: "Paciente de 60 anos, género feminino, procura atendimento especializado por apresentar disfonia após cirurgia de tireoidectomia. Foi então solicitado exame videolaringoscópico que evidenciou paralisia de prega vocal esquerda. Qual o nervo que mais frequentemente estaria atingido neste caso?",
        options: [
          "Laríngeo recorrente",
          "Laríngeo superior",
          "Nervo acessório",
          "Nervo glossofaríngeo"
        ],
        answerIndex: 0,
        explanation: "O nervo laríngeo recorrente tem um trajeto muito próximo à glândula tiroide, sendo a estrutura nervosa mais vulnerável a lesões durante uma tireoidectomia, o que resulta em paralisia da prega vocal.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q27",
        text: "Paciente procura atendimento otorrinolaringológico por apresentar quadro de globus faríngeo e pigarro sem epigastralgia. Alega ainda consumo de energéticos com frequência e ser etilista social com má alimentação. Qual exame deveria ser realizado inicialmente para auxiliar o diagnóstico acima.",
        options: [
          "Endoscopia nasal",
          "Videolaringoscopia",
          "Esofagografia",
          "Endoscopia digestiva"
        ],
        answerIndex: 1,
        explanation: "A videolaringoscopia é o exame inicial de escolha para avaliar a laringe e a faringe em busca de sinais inflamatórios sugestivos de Refluxo Laringofaríngeo, como edema e hiperemia da região interaritenoideia.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q28",
        text: "Sobre o respirador oral, responda a alternativa errada:",
        options: [
          "Face alongada, palato ogival, má oclusão dentária são sinais que sugerem a respiração oral somente quando a causa for por hipertrofia de amígdalas palatinas e faríngea.",
          "O diagnóstico da Atresia de coana é suspeitado em sala de parto.",
          "Para investigação da Síndrome do respirador oral, os exames para diagnóstico são: endoscopia nasal ou Rx de cavum e polissonografia.",
          "A Síndrome do respirador oral poderá levar a alterações na liberação hormonal, como exemplos teremos a alteração no hormônio do crescimento e do hormônio antidiurético."
        ],
        answerIndex: 0,
        explanation: "As alterações faciais do respirador oral ocorrem independentemente da causa da obstrução (hipertrofia de adenoide, rinite, etc.), pois são uma consequência da alteração do fluxo aéreo e do padrão de crescimento craniofacial.",
        tag: "Anatomia"
      },
      {
        id: "otorrino-q29",
        text: "Criança de 3 anos, com coriza e febre baixa há 3 dias. Evoluindo com quadro de tosse rouca, estridor inspiratório e retração supraesternal. Sem sialorreia ou disfagia. O diagnóstico e agente etiológico mais prováveis são:",
        options: [
          "Laringotraqueobronquite - Parainfluenza 1 e 2",
          "Epiglotite - Haemophilus influenza",
          "Coqueluche - Bordetella pertussis",
          "Laringite catarral aguda - Streptococcus"
        ],
        answerIndex: 0,
        explanation: "A combinação de pródromos virais, tosse rouca ('de cão'), estridor inspiratório e desconforto respiratório é a apresentação clássica da Laringotraqueobronquite, ou Crupe Viral, causada principalmente pelo vírus Parainfluenza.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q30",
        text: "Qual das seguintes estruturas forma a região glótica da laringe?",
        options: [
          "Pregas vocais, aritenoides e epiglote",
          "Pregas vocais, processos vocais e epiglote",
          "Pregas vocais, base da língua e aritenoides",
          "Pregas vocais, processos vocais das aritenoides e a rima da glote"
        ],
        answerIndex: 3,
        explanation: "A glote é o aparelho fonador da laringe e é composta estritamente pelas pregas vocais (cordas vocais), os processos vocais das cartilagens aritenoides e o espaço entre elas (rima da glote).",
        tag: "Anatomia"
      },
      {
        id: "otorrino-q31",
        text: "Sobre a drenagem linfática da laringe, responda a alternativa correta:",
        options: [
          "Entre todas as regiões laríngeas, a drenagem da região glótica é a mais escassa.",
          "A drenagem linfática é mais escassa na região subglótica do que na região glótica.",
          "A drenagem linfática é mais escassa na região supraglótica do que na região glótica.",
          "A drenagem linfática de todas as regiões laríngeas, possuem o mesmo padrão de drenagem."
        ],
        answerIndex: 0,
        explanation: "A região glótica (pregas vocais) possui uma drenagem linfática muito pobre. Este facto anatómico explica por que os tumores restritos a esta área têm um baixo índice de metástases linfonodais e, consequentemente, um melhor prognóstico.",
        tag: "Anatomia"
      },
      {
        id: "otorrino-q32",
        text: "Professora de 35 anos, com carga horária de 40 horas semanais, refere disfonia frequente que piora ao final do dia, com piora do quadro nos últimos 6 meses. Qual o achado esperado na videolaringoscopia?",
        options: [
          "Paquidermia interaritenoidea",
          "Edema de região interaritenóidea e de pregas vocais",
          "Presença de pólipo em terço médio de prega vocal direita",
          "Espessamento simétrico em terço médio de pregas vocais"
        ],
        answerIndex: 3,
        explanation: "Os nódulos vocais, ou 'calos', são lesões bilaterais e simétricas que ocorrem no ponto de maior atrito das pregas vocais, sendo típicos de profissionais da voz e resultantes do fonotrauma crónico.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q33",
        text: "Criança de 1 ano com tosse há 15 dias, que começou com um resfriado e evoluiu para acessos intensos de tosse (paroxística) seguidos de vômitos e um 'guincho' inspiratório. A mãe não vacina a criança. Qual a principal hipótese?",
        options: [
          "Epiglotite",
          "Coqueluche",
          "Laringite estridulosa",
          "Laringotraqueobronquite"
        ],
        answerIndex: 1,
        explanation: "A tosse paroxística, emetizante (causa vómitos) e com guincho inspiratório é a descrição clássica da fase paroxística da Coqueluche (tosse convulsa), uma doença prevenível por vacina.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q34",
        text: "Em relação ao tratamento da rinite alérgica, assinale a alternativa incorreta:",
        options: [
          "Os anti-histamínicos apresentam rápido início de ação e são indicados para aliviar prurido, espirros e rinorreia.",
          "O uso de corticosteroides por injeções de depósito é recomendado, pois não acarreta efeitos colaterais.",
          "Os anti-histamínicos de primeira geração causam fadiga e sonolência.",
          "Descongestionantes de uso tópico não devem ser utilizados por mais de sete a dez dias."
        ],
        answerIndex: 1,
        explanation: "O uso de corticoides de depósito é proscrito no tratamento da rinite alérgica devido ao alto risco de efeitos colaterais sistémicos graves e imprevisíveis.",
        tag: "Rinite Alérgica"
      },
      {
        id: "otorrino-q35",
        text: "Paciente de 45 anos com dor em região maxilar esquerda há 5 meses, que começou após remover um dente. Refere cacosmia e congestão nasal. Não melhorou com amoxicilina. Qual a conduta correta?",
        options: [
          "Trata-se de uma rinossinusite crónica. Solicitar Rx de seios paranasais.",
          "Trata-se de uma rinossinusite crónica, sendo necessário o uso de azitromicina por 10 dias.",
          "Trata-se de uma rinossinusite aguda. Tratar com antibiótico de amplo espectro.",
          "Trata-se de uma rinossinusite crónica, devendo ser solicitada tomografia e avaliação cirúrgica."
        ],
        answerIndex: 3,
        explanation: "O quadro é de uma rinossinusite crónica, provavelmente de origem odontogénica. A conduta correta envolve a realização de uma tomografia para avaliar a extensão da doença e a necessidade de abordagem cirúrgica para tratar a causa de base.",
        tag: "Nariz"
      },
      {
        id: "otorrino-q36",
        text: "Sobre o diagnóstico da rinossinusite aguda, assinale a alternativa correta:",
        options: [
          "Para confirmação diagnóstica é mandatório realizar Rx de seios da face.",
          "O uso de antimicrobianos pode ser prorrogado em casos leves a moderados, pois muitos se resolvem espontaneamente.",
          "O quadro de rinite alérgica aguda dificilmente leva ao quadro de rinossinusite aguda.",
          "A obstrução dos óstios de drenagem não ocorre nos casos de rinossinusite crônica."
        ],
        answerIndex: 1,
        explanation: "Muitos casos de rinossinusite aguda, mesmo com características bacterianas, são autolimitados. A estratégia de 'esperar para ver' (watchful waiting) por 48-72h antes de iniciar antibióticos é recomendada em casos não graves.",
        tag: "Nariz"
      },
      {
        id: "otorrino-q37",
        text: "KTB, 42 anos, hipertenso e diabético. Relata congestão e prurido nasal frequente, que piora à noite. Queixa-se de cefaleia constante e sonolência diurna. Qual a alternativa correta?",
        options: [
          "O quadro sugere rinite alérgica, e o diagnóstico é baseado na clínica.",
          "A indicação da realização do prick test é obrigatória para o diagnóstico.",
          "O quadro sugere rinossinusite crônica, devendo ser solicitada tomografia.",
          "O quadro sugere rinite alérgica, sendo contraindicado o uso de corticoide nasal."
        ],
        answerIndex: 0,
        explanation: "Os sintomas de congestão, prurido e rinorreia são a base para o diagnóstico clínico da rinite alérgica. A sonolência e cefaleia são consequências da má qualidade do sono causada pela obstrução nasal.",
        tag: "Rinite Alérgica"
      },
      {
        id: "otorrino-q38",
        text: "Considerando as lesões benignas da laringe, assinale a afirmativa correta:",
        options: [
          "Os pólipos de pregas vocais são causados, ocasionalmente, por IVAS.",
          "O Edema de Reinke normalmente acomete uma única prega vocal.",
          "Os nódulos são mais comuns em mulheres, devido a uma maior quantidade de ácido hialurónico.",
          "Parar o tabagismo é uma medida essencial para o controle do edema de Reinke."
        ],
        answerIndex: 3,
        explanation: "O Edema de Reinke é uma condição fortemente associada ao tabagismo. A cessação do fumo é o passo mais importante e indispensável no tratamento, podendo levar à regressão da lesão em casos iniciais.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q39",
        text: "Bebé de 15 dias de vida é levado à consulta por sua mãe, que relata que a criança faz um ruído toda vez que respira e este se torna mais intenso quando o bebé está chorando. Baseado no quadro, marque a alternativa incorreta:",
        options: [
          "A descrição clássica de laringomalácia consiste em estridor inspiratório que piora com agitação e choro.",
          "A laringoscopia direta é essencial para firmar o diagnóstico.",
          "O tratamento raramente é cirúrgico.",
          "Crises de cianose ocorrem em mais de 80% dos quadros."
        ],
        answerIndex: 3,
        explanation: "A grande maioria (mais de 90%) dos casos de laringomalácia é leve e autolimitada. Crises de cianose são um sinal de gravidade e ocorrem numa pequena minoria dos casos, indicando a necessidade de intervenção.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q40",
        text: "Paciente de 19 anos procura emergência com trismo, odinofagia e febre há mais de 6 dias, sem melhora com penicilina. Ao exame, apresenta desvio da úvula e abaulamento de tonsila esquerda. Qual o diagnóstico mais provável?",
        options: [
          "Mononucleose Infecciosa",
          "Faringite Viral",
          "Abscesso Periamigdaliano",
          "Difteria"
        ],
        answerIndex: 2,
        explanation: "O trismo (dificuldade de abrir a boca), o desvio da úvula e o abaulamento do palato mole são os sinais cardinais do abscesso periamigdaliano, uma complicação supurativa da faringoamigdalite.",
        tag: "Complicações"
      },
      {
        id: "otorrino-q41",
        text: "Em relação à rinite, qual a sequência correta para as afirmativas (Certo/Errado): (1) Pessoas com rinite alérgica têm risco aumentado para asma. (2) Diagnósticos diferenciais incluem atresia de coanas e corpo estranho. (3) A prometazina é um anti-histamínico de segunda geração.",
        options: [
          "C - C - E",
          "E - C - C",
          "C - E - E",
          "E - C - E"
        ],
        answerIndex: 0,
        explanation: "(C) A rinite alérgica é um fator de risco importante para o desenvolvimento de asma. (C) É crucial descartar causas obstrutivas como atresia e corpo estranho. (E) A prometazina (Fenergan) é um anti-histamínico de primeira geração, conhecido por causar sonolência.",
        tag: "Rinite Alérgica"
      },
      {
        id: "otorrino-q42",
        text: "Criança de 1 ano com tosse há 15 dias, que começou com resfriado e evoluiu para acessos de tosse paroxística, com vômitos e um 'guincho' inspiratório. A mãe não vacina a criança. Qual exame pode confirmar o diagnóstico?",
        options: [
          "Hemocultura",
          "Videolaringoscopia",
          "Rx de tórax em PA e perfil",
          "Cultura de material colhido de rinofaringe ou PCR"
        ],
        answerIndex: 3,
        explanation: "O quadro é clássico de Coqueluche. O diagnóstico laboratorial é confirmado pela cultura ou, mais comumente hoje em dia, pela Reação em Cadeia da Polimerase (PCR) de uma amostra de secreção da nasofaringe.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q43",
        text: "Paciente de 54 anos, obesa, hipertensa e diabética, com queixa de roncos, engasgos e irritabilidade. O exame mostra Mallampati 4. Qual o tratamento mais indicado para o quadro de SAHOS?",
        options: [
          "Aparelho intraoral",
          "Cirurgia bariátrica e CPAP",
          "Uvulopalatofaringoplastia isolada",
          "Fonoterapia"
        ],
        answerIndex: 1,
        explanation: "Numa paciente com SAHOS grave e obesidade mórbida, a abordagem mais eficaz envolve o tratamento da causa de base (perda de peso, que pode ser auxiliada pela cirurgia bariátrica) e o uso de CPAP para garantir a permeabilidade da via aérea durante o sono.",
        tag: "Ronco e Apneia"
      },
      {
        id: "otorrino-q44",
        text: "Qual das seguintes afirmações sobre o tratamento da faringotonsilite estreptocócica é VERDADEIRA?",
        options: [
          "O tratamento visa apenas melhorar os sintomas agudos.",
          "A penicilina é o antibiótico de eleição.",
          "Macrolídeos não podem ser indicados para pessoas com alergia a penicilinas.",
          "Em caso de recaída, deve-se indicar amoxicilina associada a macrolídeos."
        ],
        answerIndex: 1,
        explanation: "A penicilina (especialmente a Benzatina em dose única) continua a ser o antibiótico de primeira escolha para a faringotonsilite estreptocócica devido à sua eficácia, baixo custo e espectro de ação focado.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q45",
        text: "Qual das seguintes malformações congénitas da laringe é a mais frequente?",
        options: [
          "Laringomalácia",
          "Estenose subglótica",
          "Paralisia de pregas vocais",
          "Atresia laríngea"
        ],
        answerIndex: 0,
        explanation: "A laringomalácia, caracterizada pela flacidez das estruturas supraglóticas, é de longe a anomalia congénita mais comum da laringe e a principal causa de estridor em lactentes.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q46",
        text: "Qual das seguintes afirmações sobre a queilite actínica é CORRETA?",
        options: [
          "As principais etiologias são o etilismo e o tabagismo.",
          "A presença de ulceração é um sinal de alerta para possível malignização.",
          "O tratamento deve ser realizado com antifúngico tópico e sistémico.",
          "A vermelhectomia só deve ser indicada em casos leves."
        ],
        answerIndex: 1,
        explanation: "A queilite actínica é uma lesão pré-maligna do lábio inferior causada pela exposição solar crónica. O surgimento de áreas de ulceração, endurecimento ou crescimento rápido são sinais de transformação para um carcinoma espinocelular.",
        tag: "Boca"
      },
      {
        id: "otorrino-q47",
        text: "Qual das seguintes afirmações sobre a respiração oral é CORRETA?",
        options: [
          "Hipertrofia de tonsilas palatinas e faríngea é a principal causa na infância.",
          "Atresia coanal bilateral é frequentemente diagnosticada na fase adulta.",
          "Quando há apnéia obstrutiva do sono ocorre aumento da libertação do hormônio do crescimento.",
          "A síndrome de apnéia obstrutiva do sono não interfere no aprendizado da criança."
        ],
        answerIndex: 0,
        explanation: "A hipertrofia adenoamigdaliana é a principal causa de obstrução nasal e respiração oral em crianças, podendo levar a alterações craniofaciais e distúrbios do sono.",
        tag: "Anatomia"
      },
      {
        id: "otorrino-q48",
        text: "Lactente com febre, tosse rouca, estridor inspiratório, salivação intensa e dispneia grave. Qual o diagnóstico mais provável?",
        options: [
          "Laringite aguda",
          "Epiglotite",
          "Abscesso periamigdaliano",
          "Laringite diftérica"
        ],
        answerIndex: 1,
        explanation: "A combinação de início agudo, febre alta, estridor, dispneia e, principalmente, salivação intensa (devido à dor para engolir) é altamente sugestiva de Epiglotite, uma emergência médica.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q49",
        text: "Qual das seguintes opções NÃO é um achado laríngeo comum no Refluxo Laringofaríngeo (RLF)?",
        options: [
          "Hiperemia do espaço interaritenoideia",
          "Hiperemia de pregas vocais",
          "Estenose subglótica",
          "Estase salivar na região retrocricoaritenóide"
        ],
        answerIndex: 2,
        explanation: "Os achados mais comuns do RLF são inflamatórios, como hiperemia e edema na região posterior da laringe. A estenose subglótica é uma complicação rara e grave, não um achado comum.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q50",
        text: "Qual dos seguintes exames de diagnóstico da rinite alérgica é pouco sensível, mas bastante específico?",
        options: [
          "Dosagem de IgE sérica total",
          "Testes cutâneos de puntura (prick-test)",
          "Teste intracutâneo (intradérmico)",
          "Dosagem de IgE sérica específica"
        ],
        answerIndex: 0,
        explanation: "A IgE sérica total pode estar elevada em várias condições além da alergia (baixa especificidade) e pode estar normal em muitos alérgicos (baixa sensibilidade). Não é um bom teste de rastreio.",
        tag: "Rinite Alérgica"
      },
      {
        id: "otorrino-q51",
        text: "Considerando o cancro da laringe, qual afirmativa é FALSA?",
        options: [
          "Os principais fatores de risco são tabagismo, etilismo, idade e género masculino.",
          "Disfonia por mais de 3 semanas deve ser investigada, principalmente em pacientes de risco.",
          "O principal tipo histológico é o carcinoma espinocelular.",
          "A disseminação linfática dos tumores glóticos é mais rápida do que dos tumores supraglóticos."
        ],
        answerIndex: 3,
        explanation: "A região glótica (pregas vocais) tem uma drenagem linfática muito escassa. Por isso, tumores restritos a esta área têm um baixo índice de metástases linfonodais, ao contrário dos tumores supraglóticos, que têm uma drenagem rica.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q52",
        text: "Qual das seguintes afirmações sobre as anomalias congénitas da laringe é ERRADA?",
        options: [
          "O estridor inspiratório, que piora com a amamentação, é um sintoma comum na laringomalácia.",
          "Paciente com laringomalácia, com cianose e déficit de crescimento, tem tratamento expectante.",
          "O diagnóstico de laringomalácia é confirmado através da laringoscopia direta.",
          "A laringomalácia é a anomalia congénita de laringe mais comum."
        ],
        answerIndex: 1,
        explanation: "Cianose e déficit de crescimento são sinais de gravidade na laringomalácia e indicam a necessidade de tratamento cirúrgico (supraglotoplastia), não de uma conduta expectante.",
        tag: "Laringe"
      },
      {
        id: "otorrino-q53",
        text: "Qual das seguintes afirmações sobre faringoamigdalites é VERDADEIRA?",
        options: [
          "O tratamento da tonsilite crónica caseosa é feito com corticoides.",
          "A herpangina é um exemplo de faringoamigdalite aguda ulcero-necrótica.",
          "O tratamento da angina de Plaut-Vincent envolve antibioticoterapia e gargarejos com antissépticos.",
          "A angina de Plaut-Vincent é um exemplo de faringoamigdalite aguda vesiculosa."
        ],
        answerIndex: 2,
        explanation: "A angina de Plaut-Vincent é uma infeção bacteriana (fusoespiralar) e o seu tratamento baseia-se em antibióticos que cobrem anaeróbios (como penicilina + metronidazol) e na melhoria da higiene oral.",
        tag: "Faringe"
      },
      {
        id: "otorrino-q54",
        text: "Em relação à rinite alérgica, qual alternativa é CORRETA?",
        options: [
          "Pacientes com suspeita de rinite alérgica que já tiveram reação anafilática, não poderão realizar prick-test.",
          "O uso de corticoide nasal somente é indicado para pacientes com rinite alérgica persistente.",
          "Prurido nasal e espirros são os sintomas com menor impacto na qualidade de vida.",
          "O uso de corticosteróide nasal associado ao uso de antileucotrienos deve ser evitado."
        ],
        answerIndex: 0,
        explanation: "O teste cutâneo (prick-test) é contraindicado em pacientes com história de anafilaxia, pois há risco de desencadear uma reação grave.",
        tag: "Rinite Alérgica"
      },
      {
        id: "otorrino-q55",
        text: "Paciente de 19 anos com trismo, odinofagia e febre há mais de 6 dias, sem melhora com penicilina. Ao exame, desvio da úvula e abaulamento de tonsila esquerda. Qual a melhor conduta?",
        options: [
          "Trocar o antibiótico para Amoxicilina-Clavulanato.",
          "Suspender antibiótico por suspeita de Mononucleose.",
          "Drenagem do abscesso e antibioticoterapia.",
          "Internação e uso de Soro Antidiftérico."
        ],
        answerIndex: 2,
        explanation: "O quadro é de abscesso periamigdaliano. O tratamento consiste na drenagem cirúrgica da coleção purulenta, associada a antibioticoterapia que cubra anaeróbios.",
        tag: "Complicações"
      }
    ]
  },

  {
    id: "preset-ortopedia-1",
    name: "  Estácio - M7 - PR1 - Ortopedia",
    questions: [
      {
        id: "orto-q1",
        text: "Sobre as pseudoartroses, assinale a alternativa INCORRETA:",
        options: [
          "Na Hipertrófica, há calo ósseo exuberante na tentativa de conter a mobilidade.",
          "Na Atrófica, há presença abundante de células osteogénicas no foco.",
          "Fatores de risco para a Atrófica incluem fratura exposta e diabetes.",
          "Na Hipertrófica, a causa principal é a instabilidade mecânica da fratura."
        ],
        answerIndex: 1,
        explanation: "Na pseudoartrose atrófica, a principal característica é a falha biológica, com pouca vascularização e ausência ou escassez de células osteogénicas viáveis no foco da fratura.",
        tag: "Fraturas"
      },
      {
        id: "orto-q2",
        text: "Paciente de 58 anos, com gesso axilopalmar há 24 horas, chega com dor intensa, edema acentuado, cianose e deformidade em contratura no membro. Qual o diagnóstico mais provável?",
        options: [
          "Osteomielite aguda",
          "Trombose venosa profunda",
          "Artrite séptica de punho",
          "Síndrome compartimental com isquemia de Volkmann"
        ],
        answerIndex: 3,
        explanation: "A dor desproporcional à lesão, edema intenso, alterações neurovasculares e contratura (sinal tardio) num membro engessado são sinais clássicos de Síndrome Compartimental, uma emergência ortopédica.",
        tag: "Trauma"
      },
      {
        id: "orto-q3",
        text: "Criança de 7 anos com fratura de antebraço tratada com gesso. Após duas semanas, a radiografia não mostra desvios, mas também não há formação de calo ósseo visível. Qual a conduta?",
        options: [
          "Manter a conduta expectante e solicitar novas radiografias no retorno.",
          "Indicar tratamento cirúrgico pela falha do tratamento conservador.",
          "Solicitar uma Tomografia Computadorizada para estudar o calo.",
          "Solicitar exames de sangue (VHS, PCR) por suspeita de infeção."
        ],
        answerIndex: 0,
        explanation: "Em crianças, a consolidação óssea é rápida, mas o calo radiográfico pode não ser visível com apenas duas semanas. Na ausência de desvios, a conduta correta é aguardar e reavaliar posteriormente.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q4",
        text: "Qual é a principal complicação da Síndrome Compartimental não tratada?",
        options: [
          "Pseudoartrose atrófica",
          "Osteomielite crónica",
          "Contratura isquémica de Volkmann",
          "Trombose venosa profunda"
        ],
        answerIndex: 2,
        explanation: "A Contratura de Volkmann é a sequela clássica da Síndrome Compartimental não tratada, resultando em necrose muscular e nervosa com fibrose e contratura permanente do membro.",
        tag: "Complicações"
      },
      {
        id: "orto-q5",
        text: "Qual é a classificação de Salter-Harris mais comum em fraturas fisárias?",
        options: [
          "Tipo I (atravessa a fise)",
          "Tipo II (fise e metáfise)",
          "Tipo III (fise e epífise)",
          "Tipo IV (fise, metáfise e epífise)"
        ],
        answerIndex: 1,
        explanation: "A fratura de Salter-Harris tipo II, que envolve a placa de crescimento e um fragmento triangular da metáfise (fragmento de Thurston-Holland), é a mais frequente.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q6",
        text: "Criança de 4 anos apresenta claudicação e limitação da rotação interna do quadril, uma semana após uma infeção de garganta. Qual a hipótese diagnóstica mais provável?",
        options: [
          "Artrite séptica do quadril",
          "Doença de Legg-Calvé-Perthes",
          "Sinovite transitória do quadril",
          "Epifisiólise"
        ],
        answerIndex: 2,
        explanation: "A história de claudicação aguda em criança pequena, com limitação de movimento e história prévia de infeção de vias aéreas superiores, é a apresentação clássica da Sinovite Transitória do Quadril, uma condição benigna e autolimitada.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q7",
        text: "Qual é a principal diferença entre a manobra de Ortolani e a manobra de Barlow no exame do quadril de um recém-nascido?",
        options: [
          "Ortolani testa a luxação e Barlow a adução.",
          "Ortolani é uma manobra de redução e Barlow é uma manobra provocativa de luxação.",
          "Ortolani é para quadris estáveis e Barlow para quadris instáveis.",
          "Ortolani avalia o fémur e Barlow o acetábulo."
        ],
        answerIndex: 1,
        explanation: "A manobra de Ortolani tenta reduzir um quadril já luxado (sente-se um 'clique' de entrada), enquanto a manobra de Barlow tenta luxar um quadril instável, mas reduzido (sente-se um 'clique' de saída).",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q8",
        text: "Paciente com dor no ombro. A manobra de Patte, que testa a rotação externa contra resistência com o ombro abduzido, avalia a integridade de qual músculo?",
        options: [
          "Supraespinhoso",
          "Subescapular",
          "Infraespinhoso",
          "Deltoide"
        ],
        answerIndex: 2,
        explanation: "A manobra de Patte é um teste específico para avaliar a força e a integridade do músculo infraespinhoso, um dos principais rotadores externos do ombro.",
        tag: "Ombro"
      },
      {
        id: "orto-q9",
        text: "Criança pequena é puxada pelo braço e para de o mover, mantendo-o junto ao corpo com o antebraço pronado. Qual é o diagnóstico mais provável?",
        options: [
          "Fratura da clavícula",
          "Luxação do ombro",
          "Fratura supracondiliana do úmero",
          "Pronação dolorosa (subluxação da cabeça do rádio)"
        ],
        answerIndex: 3,
        explanation: "Este é o mecanismo e a apresentação clássica da pronação dolorosa, onde a cabeça do rádio subluxa do ligamento anular. O tratamento é uma manobra de redução simples (supinação com flexão).",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q10",
        text: "Qual é a principal característica clínica que diferencia uma luxação de uma entorse?",
        options: [
          "A presença de edema.",
          "A intensidade da dor.",
          "A perda completa e permanente do contacto articular.",
          "A presença de equimose (hematoma)."
        ],
        answerIndex: 2,
        explanation: "Enquanto a entorse é uma lesão ligamentar sem perda de contacto articular, a luxação é definida pela perda total e mantida da congruência entre as superfícies de uma articulação.",
        tag: "Trauma"
      },
      {
        id: "orto-q11",
        text: "Paciente com fratura exposta Gustilo-Anderson tipo I (ferida limpa < 1 cm). Qual a conduta antibiótica inicial?",
        options: [
          "Cefalosporina de 1ª geração (ex: Cefazolina)",
          "Cefalosporina + Aminoglicosídeo",
          "Cefalosporina + Penicilina",
          "Não é necessário antibiótico"
        ],
        answerIndex: 0,
        explanation: "Para fraturas expostas de baixa contaminação (Gustilo I e II), a profilaxia padrão é com uma cefalosporina de primeira geração para cobrir os germes da pele.",
        tag: "Fraturas"
      },
      {
        id: "orto-q12",
        text: "Paciente com dor lombar que irradia pela face posterior da coxa e face lateral da perna, com parestesia no maléolo lateral. Qual teste clínico é mais indicado para confirmar a suspeita de hérnia discal?",
        options: [
          "Teste de Thompson",
          "Teste de Lasègue",
          "Manobra de Patte",
          "Teste de Phalen"
        ],
        answerIndex: 1,
        explanation: "O Teste de Lasègue (elevação da perna estendida) é o teste clássico para avaliar a irritação do nervo ciático, comum em casos de hérnia de disco lombar.",
        tag: "Coluna"
      },
      {
        id: "orto-q13",
        text: "Paciente com parestesia e dor nos três primeiros dedos da mão, que piora com atividades manuais como tricot. Os testes de Phalen e Tinel são positivos. Qual o diagnóstico mais provável?",
        options: [
          "Síndrome do túnel cubital",
          "Radiculopatia C6",
          "Síndrome do túnel do carpo",
          "Tenossinovite de De Quervain"
        ],
        answerIndex: 2,
        explanation: "A sintomatologia nos três primeiros dedos e os testes de Phalen (flexão do punho) e Tinel (percussão do nervo) positivos são característicos da Síndrome do Túnel do Carpo, causada pela compressão do nervo mediano.",
        tag: "Mão e Punho"
      },
      {
        id: "orto-q14",
        text: "No exame físico do ombro, a manobra de Jobe (teste da lata vazia) e a manobra de Gerber (lift-off test) positivas indicam lesão de quais músculos, respetivamente?",
        options: [
          "Infraespinhoso e Supraespinhoso",
          "Supraespinhoso e Subescapular",
          "Subescapular e Redondo menor",
          "Deltoide e Peitoral maior"
        ],
        answerIndex: 1,
        explanation: "O teste de Jobe avalia o músculo supraespinhoso (principal abdutor inicial do ombro), enquanto o teste de Gerber avalia o músculo subescapular (principal rotador interno).",
        tag: "Ombro"
      },
      {
        id: "orto-q15",
        text: "Qual é o principal fator de risco para fratura do colo do fémur numa idosa de 87 anos que sofreu uma queda da própria altura?",
        options: [
          "Hipertensão arterial",
          "Diabetes Mellitus",
          "Osteoporose",
          "Uso de AAS"
        ],
        answerIndex: 2,
        explanation: "A osteoporose é a principal causa de fragilidade óssea em idosos, tornando-os suscetíveis a fraturas de baixo impacto, como a fratura do colo do fémur após uma simples queda.",
        tag: "Trauma"
      },
      {
        id: "orto-q16",
        text: "Paciente jovem sofreu queda sobre o ombro. Ao exame, a extremidade distal da clavícula está saliente e pode ser reduzida ao ser pressionada (sinal da tecla). Qual o diagnóstico?",
        options: [
          "Fratura da clavícula",
          "Luxação do ombro (glenoumeral)",
          "Luxação acromioclavicular",
          "Lesão do manguito rotador"
        ],
        answerIndex: 2,
        explanation: "A proeminência da clavícula distal e o 'sinal da tecla' são os achados clássicos da luxação da articulação acromioclavicular, indicando a rutura dos ligamentos que a estabilizam.",
        tag: "Ombro"
      },
      {
        id: "orto-q17",
        text: "Qual é a principal diferença entre consolidação óssea primária e secundária?",
        options: [
          "A primária ocorre em crianças e a secundária em adultos.",
          "A primária não forma calo ósseo visível, enquanto a secundária sim.",
          "A primária é mais rápida que a secundária.",
          "A primária só ocorre com tratamento conservador."
        ],
        answerIndex: 1,
        explanation: "A consolidação primária ocorre em fraturas com estabilidade absoluta (ex: fixação com placa e parafusos), onde o osso se remodela diretamente sem formar calo. A secundária ocorre com estabilidade relativa (ex: gesso, hastes) e depende da formação de calo ósseo.",
        tag: "Fisiologia Óssea"
      },
      {
        id: "orto-q18",
        text: "Qual das seguintes opções descreve corretamente a fratura do 'boxer'?",
        options: [
          "Fratura da base do primeiro metacarpo.",
          "Fratura da diáfise do quinto metacarpo.",
          "Fratura do colo do quinto metacarpo.",
          "Fratura da falange proximal do polegar."
        ],
        answerIndex: 2,
        explanation: "A fratura do 'boxer' é a fratura do colo (a região logo abaixo da 'cabeça') do quinto metacarpo, tipicamente causada por um soco mal dado com a mão fechada.",
        tag: "Mão e Punho"
      },
      {
        id: "orto-q19",
        text: "Num trauma raquimedular, o que indica o fim da fase de choque medular?",
        options: [
          "O retorno da sensibilidade nos membros inferiores.",
          "A normalização da pressão arterial e frequência cardíaca.",
          "O retorno do reflexo bulbocavernoso.",
          "A capacidade de mover os dedos dos pés."
        ],
        answerIndex: 2,
        explanation: "O reflexo bulbocavernoso (contração do esfíncter anal ao apertar a glande/clitóris) é o primeiro reflexo a retornar após o choque medular. A sua presença indica o fim desta fase e permite uma avaliação mais precisa do prognóstico da lesão.",
        tag: "Coluna"
      },
      {
        id: "orto-q20",
        text: "Paciente de 48 anos com dor e parestesia nos três dedos laterais da mão direita, que piora com o trabalho (tricot). Qual o diagnóstico mais provável?",
        options: [
          "Cervicobraquialgia",
          "Síndrome do túnel do carpo",
          "Epicondilite lateral",
          "Tenossinovite de De Quervain"
        ],
        answerIndex: 1,
        explanation: "A dor e parestesia na distribuição do nervo mediano (polegar, indicador, médio e metade do anelar) são características da Síndrome do Túnel do Carpo, uma neuropatia compressiva comum no punho.",
        tag: "Mão e Punho"
      },
      {
        id: "orto-q21",
        text: "Paciente de 32 anos, vítima de acidente de automóvel, chocou na sala de emergência. A radiografia da bacia e TC mostram instabilidade pélvica posterior. Qual a conduta correta?",
        options: [
          "Estabilização imediata da pelve com lençol amarrado na altura dos trocânteres femorais.",
          "Cirurgia imediata para a sínfise púbica, pois esta estrutura sofre grave sangramento.",
          "Compressão com lençol na altura dos ilíacos e laparotomia exploradora imediata.",
          "Reposição de cristaloide e sangue, pois pode evoluir com óbito devido ao choque."
        ],
        answerIndex: 0,
        explanation: "Em fraturas pélvicas instáveis com choque hemodinâmico, a prioridade é a estabilização mecânica da pelve para diminuir o volume pélvico e conter o sangramento. A compressão circunferencial com lençol é uma medida de emergência eficaz.",
        tag: "Politrauma"
      },
      {
        id: "orto-q22",
        text: "Um paciente internado com fratura fechada da tíbia direita, aguardando osteossíntese, apresenta em 48h dor, edema e hiperemia difusa no membro. A conduta nesse caso é:",
        options: [
          "Remove a imobilização e solicita ecocolor doppler de membros inferiores.",
          "Iniciar antibiótico imediatamente por provável osteomielite.",
          "Remove a imobilização pois trata-se de síndrome do compartimento.",
          "Aciona o cirurgião vascular por suspeita de lesão arterial."
        ],
        answerIndex: 0,
        explanation: "O quadro de dor, edema e hiperemia em membro inferior imobilizado após fratura é altamente sugestivo de Trombose Venosa Profunda (TVP). A primeira conduta é remover a imobilização compressiva e confirmar o diagnóstico com ecodoppler.",
        tag: "Complicações"
      },
      {
        id: "orto-q23",
        text: "Paciente masculino, 18 anos, sofreu um trauma na coxa direita. Relata quadro álgico leve, edema leve, claudicando e impotência funcional. Qual a hipótese diagnóstica e o tratamento indicado?",
        options: [
          "Fratura do fêmur. Cirurgia com osteossíntese.",
          "Tendinite do semimembranoso. Gelo + repouso.",
          "Contusão da coxa. Crioterapia + repouso + ultrassom.",
          "Luxação do joelho. Cirurgia com redução incruenta."
        ],
        answerIndex: 2,
        explanation: "O quadro de dor e edema localizado após trauma direto, sem deformidade grosseira ou instabilidade, é compatível com uma contusão muscular. O tratamento inicial é conservador.",
        tag: "Trauma"
      },
      {
        id: "orto-q24",
        text: "São afirmações verdadeiras sobre fraturas expostas: I. Mecanismos de dentro para fora geralmente levam à baixa contaminação. II. O ambiente não interfere na profilaxia antibiótica. III. A exteriorização do hematoma fraturário caracteriza a lesão como exposta. IV. A estabilização provisória com fixadores externos é útil.",
        options: [
          "I, III e IV são verdadeiras",
          "II e III são falsas",
          "II,III e IV são falsas",
          "I e II são verdadeiras"
        ],
        answerIndex: 0,
        explanation: "A afirmativa II é falsa, pois o ambiente (ex: rural) influencia na escolha do antibiótico. As demais são verdadeiras: o mecanismo de trauma, a exposição do hematoma e a utilidade dos fixadores externos estão corretos.",
        tag: "Fraturas"
      },
      {
        id: "orto-q25",
        text: "Paciente com quadro de dor em joelho direito, sem trauma, com rubor, edema, calor e bloqueio articular. Qual resultado laboratorial da análise do líquido sinovial você espera encontrar?",
        options: [
          "Proteína diminuída com grumos",
          "Líquido claro com proteína elevada",
          "Leucocitose com diminuição da glicose",
          "Líquido turvo com um teste de mucina firme"
        ],
        answerIndex: 2,
        explanation: "Num quadro de artrite séptica, a análise do líquido sinovial tipicamente revela um grande aumento de leucócitos (leucocitose) e consumo de glicose pelas bactérias, resultando em níveis de glicose mais baixos que os do soro.",
        tag: "Infecção Ortopédica"
      },
      {
        id: "orto-q26",
        text: "Paciente jovem, 22 anos, com fratura da clavícula esquerda tratada de forma conservadora. Após 2 meses, a radiografia de controle mostra calo ósseo. Assinale a alternativa correta:",
        options: [
          "A consolidação foi primária.",
          "A única imobilização correta seria a tipóia americana.",
          "A consolidação foi secundária, por estabilidade relativa.",
          "As opções de imobilização seriam a tipóia americana e o gesso pendente."
        ],
        answerIndex: 2,
        explanation: "O tratamento conservador de fraturas da clavícula (com tipóia ou imobilização em 8) promove uma estabilidade relativa, que leva à consolidação secundária, caracterizada pela formação de calo ósseo visível na radiografia.",
        tag: "Fraturas"
      },
      {
        id: "orto-q27",
        text: "Paciente de 22 anos sofreu entorse do tornozelo direito. A radiografia mostra desvio importante do maléolo medial. Qual a conduta correta?",
        options: [
          "Indicar cirurgia, realizar perfil e imobilizar com tala.",
          "Tratar com gesso cruro-podálico por ser estável.",
          "Indicar cirurgia imediata, podendo complementar com perfil do pé.",
          "Diagnóstico de fratura bimaleolar, tratar com tala."
        ],
        answerIndex: 0,
        explanation: "Uma fratura do maléolo medial com desvio indica instabilidade articular e é de tratamento cirúrgico. No entanto, é fundamental completar o estudo radiográfico com a incidência em perfil e imobilizar provisoriamente para analgesia e controle do edema.",
        tag: "Fraturas"
      },
      {
        id: "orto-q28",
        text: "Criança de 6 anos cai com o cotovelo em hiperextensão. A radiografia mostra uma fratura supracondiliana do úmero sem desvio (Tipo I de Gartland). Qual o tratamento?",
        options: [
          "Tala gessada",
          "Gesso axilopalmar",
          "Tipóia americana",
          "AINES e observação"
        ],
        answerIndex: 1,
        explanation: "Fraturas supracondilianas do úmero sem desvio (Gartland I) em crianças são estáveis e o tratamento de escolha é a imobilização com gesso axilopalmar com o cotovelo em flexão.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q29",
        text: "Paciente de 86 anos sofreu queda da própria altura, com dor e impotência funcional no quadril direito. O membro está encurtado e em rotação externa. A radiografia mostra fratura transtrocanteriana. Assinale a correta:",
        options: [
          "É uma fratura transtrocanteriana, por osteoporose, e deve ser submetido a tratamento cirúrgico de urgência.",
          "É uma fratura do colo do fémur, devendo ser tratada com fixação cirúrgica de urgência.",
          "É uma fratura da extremidade proximal do fémur, e o membro apresenta-se em rotação interna.",
          "É uma fratura subtrocanteriana, possivelmente por uso de alendronato."
        ],
        answerIndex: 0,
        explanation: "O quadro clínico (encurtamento e rotação externa) e radiográfico em uma idosa após queda de baixa energia é clássico de fratura transtrocanteriana por osteoporose. O tratamento é cirúrgico e deve ser realizado o mais breve possível.",
        tag: "Trauma"
      },
      {
        id: "orto-q30",
        text: "Num paciente politraumatizado, qual é a conduta correta no atendimento inicial?",
        options: [
          "Verificar lesões cutâneas acima dos ombros para suspeitar de lesão cervical",
          "Remover a prancha na chegada e manter o colar cervical",
          "Realizar apenas TC de crânio se houver história de TCE",
          "Solicitar a série trauma radiológica (coluna cervical, tórax e bacia)"
        ],
        answerIndex: 3,
        explanation: "No atendimento secundário (após o ABCDE) de um politraumatizado, a série trauma radiológica, composta por radiografias da coluna cervical (AP e perfil), tórax (AP) e bacia (AP), é fundamental para detetar lesões potencialmente fatais.",
        tag: "Politrauma"
      },
      {
        id: "orto-q31",
        text: "Paciente com fratura fechada da diáfise tibial aguarda cirurgia. As condições de pele e partes moles estão ruins e não há fixadores externos disponíveis. Para evitar complicações, você corretamente:",
        options: [
          "Imobiliza com calha para permitir expansão do edema e prescreve anticoagulação profilática",
          "Imobiliza com gesso circular para controlar desvios",
          "Realiza fasciotomia de urgência",
          "Inicia antibiótico e leva para lavagem cirúrgica"
        ],
        answerIndex: 0,
        explanation: "A conduta correta é a imobilização provisória com uma calha gessada (que é aberta e permite o inchaço), associada à profilaxia de trombose venosa profunda, enquanto se aguarda a melhoria das condições locais para a cirurgia definitiva.",
        tag: "Trauma"
      },
      {
        id: "orto-q32",
        text: "Paciente de 60 anos sofreu queda com trauma no membro superior direito. Radiografia mostra fratura da diáfise da ulna e luxação da cabeça do rádio. Qual o seu diagnóstico e tratamento?",
        options: [
          "Fratura-luxação de Monteggia + gesso axilopalmar",
          "Fratura de Colles + osteossíntese com fios de kirschner",
          "Fratura-luxação de Galeazzi + osteossíntese com placa",
          "Fratura de Smith + gesso axilopalmar incluindo o polegar"
        ],
        answerIndex: 0,
        explanation: "A lesão descrita é uma fratura-luxação de Galeazzi (fratura do rádio + luxação da radioulnar distal). O gabarito C está incorreto na descrição da lesão, mas correto no nome. A fratura da ulna com luxação da cabeça do rádio é Monteggia.",
        tag: "Fraturas"
      },
      {
        id: "orto-q33",
        text: "Paciente de 6 meses com febre alta, dor intensa no ombro e impotência funcional, sem história de trauma. Exames de sangue com VHS e PCR elevados. Qual a hipótese e quais fatores de risco no caso?",
        options: [
          "Sarcoma de Ewing / Febre e ausência de trauma",
          "Sarcoma de Ewing / Elevação do VHS e impotência funcional",
          "Osteomielite aguda / Criança de 6 meses e região do ombro",
          "Osteomielite aguda / Elevação da PCR e febre alta"
        ],
        answerIndex: 2,
        explanation: "O quadro é altamente sugestivo de osteomielite hematogénica aguda. A idade (lactente < 1 ano) e a localização (metáfise proximal do úmero, que é intra-articular) são fatores de risco para artrite séptica secundária.",
        tag: "Infecção Ortopédica"
      },
      {
        id: "orto-q34",
        text: "Quanto às fraturas do rádio distal, assinale a opção correta.",
        options: [
          "As incidências radiográficas solicitadas são o AP e a oblíqua do punho.",
          "O tratamento conservador desta fratura é um gesso incluindo o polegar.",
          "A fratura de Smith ocorre através de uma queda com o punho em hiperflexão.",
          "A deformidade em dorso de garfo é encontrada na fratura de Galeazzi."
        ],
        answerIndex: 2,
        explanation: "A fratura de Smith, ou 'Colles invertida', é caracterizada por um desvio volar do fragmento distal do rádio e ocorre tipicamente por uma queda sobre o dorso da mão fletida.",
        tag: "Fraturas"
      },
      {
        id: "orto-q35",
        text: "Paciente de 78 anos, com trauma na cabeça, dor cervical alta e paresia nos quatro membros, mais proeminente nos superiores. Qual o exame inicial e provável déficit neurológico?",
        options: [
          "Radiografia em perfil e transoral; lesão medular completa.",
          "Radiografia em AP e perfil da coluna cervical; paciente em choque medular.",
          "Radiografia em perfil e oblíqua; síndrome medular anterior.",
          "Radiografia em perfil e transoral; síndrome medular central."
        ],
        answerIndex: 3,
        explanation: "A paresia predominante nos membros superiores em relação aos inferiores após um trauma cervical é a apresentação clássica da Síndrome Medular Central. A avaliação inicial para suspeita de fratura do áxis (C2) inclui as incidências em perfil e transoral.",
        tag: "Coluna"
      },
      {
        id: "orto-q36",
        text: "A imagem de um menino de 7 anos, assintomático, encontrada de forma acidental durante exame radiológico, fala a favor de:",
        options: [
          "Cisto ósseo simples",
          "Mieloma múltiplo",
          "Osteoblastoma",
          "Tumor de Células Gigantes"
        ],
        answerIndex: 0,
        explanation: "A imagem de uma lesão lítica, bem delimitada, central, na região metafisária proximal do fémur em uma criança é a apresentação típica de um Cisto Ósseo Simples, uma lesão benigna frequentemente assintomática.",
        tag: "Tumores Ósseos"
      },
      {
        id: "orto-q37",
        text: "Sobre os Processos de Consolidação óssea, é correto afirmar:",
        options: [
          "Consolidação Óssea Direta ocorre com formação de Calo Ósseo.",
          "Consolidação Indireta somente ocorre com Cirurgia.",
          "Ósteon é uma unidade histológica própria da Consolidação Secundária.",
          "A Primeira Fase da Consolidação Óssea Indireta é a de Hematoma Fraturário."
        ],
        answerIndex: 3,
        explanation: "O processo de consolidação indireta (com formação de calo ósseo) inicia-se com a fase inflamatória, na qual se forma o hematoma fraturário, que é essencial para o início da cascata de cicatrização.",
        tag: "Fisiologia Óssea"
      },
      {
        id: "orto-q38",
        text: "Sobre a abordagem das fraturas expostas é CORRETO:",
        options: [
          "A classificação de Gustilo-Anderson é imutável.",
          "O potencial de contaminação está relacionado à extensão da lesão das partes moles.",
          "O ambiente onde ocorrem as lesões não deve ser considerado.",
          "Para caracterizar uma fratura como aberta deve haver visualização do osso."
        ],
        answerIndex: 1,
        explanation: "A gravidade de uma fratura exposta e o seu risco de infeção estão diretamente ligados à energia do trauma e à extensão do dano às partes moles (pele, músculo), que servem de barreira protetora.",
        tag: "Fraturas"
      },
      {
        id: "orto-q39",
        text: "Menor de 7 anos sofreu trauma no cotovelo. Radiografia mostra fratura supracondiliana do úmero com desvio posterior completo, sem contato entre os fragmentos (Gartland III). Qual o diagnóstico e conduta?",
        options: [
          "Fratura supracondiliana do úmero Gartland II - redução e gesso.",
          "Fratura de Monteggia - tratamento cirúrgico de urgência.",
          "Fratura supracondiliana do úmero Gartland I - gesso.",
          "Fratura supracondiliana do úmero Gartland III - tratamento cirúrgico de urgência."
        ],
        answerIndex: 3,
        explanation: "Uma fratura supracondiliana do úmero com desvio completo (Gartland III) é uma lesão grave e instável, com alto risco de complicações neurovasculares, sendo o tratamento cirúrgico de urgência (redução e fixação com fios) a conduta padrão.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q40",
        text: "Homem, 45 anos, sofreu atropelamento e chega com PA 90x50mmHg, FC 118bpm. A radiografia mostra fratura da pelve. Qual seu diagnóstico e conduta imediata?",
        options: [
          "Fratura do acetábulo / hemotransfusão e cirurgia imediata.",
          "Fratura do acetábulo / cirurgia imediata.",
          "Fratura da pelve / compressão com dispositivo pneumático ou lençol.",
          "Fratura da pelve / hemotransfusão."
        ],
        answerIndex: 2,
        explanation: "Diante de uma fratura pélvica com instabilidade hemodinâmica (choque), a medida mais importante e imediata é a estabilização mecânica da pelve para fechar o anel pélvico e diminuir o sangramento. A compressão com lençol ou binder pélvico é a primeira linha.",
        tag: "Politrauma"
      },
      {
        id: "orto-q41",
        text: "Qual exame deve ser realizado na suspeita de Artrite Séptica?",
        options: [
          "Ressonância Magnética",
          "Cultura de LCR e Hemograma Completo",
          "Hemocultura e Hemograma Completo",
          "Cintilografia Óssea"
        ],
        answerIndex: 2,
        explanation: "Na suspeita de artrite séptica, é fundamental colher hemoculturas (pois a bactéria pode estar no sangue) e um hemograma completo para avaliar os sinais sistémicos de infeção, como a leucocitose.",
        tag: "Infecção Ortopédica"
      },
      {
        id: "orto-q42",
        text: "Quanto às fraturas do 'boxer', assinale a(s) alternativa(s) FALSA(S):",
        options: [
          "Desvios menores que 45° são tratados de forma conservadora com gesso.",
          "São fraturas que acometem o colo do V metacarpo.",
          "O mecanismo da fratura ocorre por impacto com a mão fechada (soco).",
          "Em geral são fraturas muito desviadas e exigem tratamento cirúrgico."
        ],
        answerIndex: 3,
        explanation: "A maioria das fraturas do boxer tem pouco desvio ou desvios aceitáveis, sendo de tratamento conservador. A cirurgia é reservada para casos com grande angulação ou desvio rotacional.",
        tag: "Mão e Punho"
      },
      {
        id: "orto-q43",
        text: "Em relação às lesões medulares é correto, EXCETO:",
        options: [
          "São indicações do uso do corticoide intravenoso lesões medulares sem déficit neurológico e traumas ocorridos a mais de 8 horas.",
          "Não ocorre lesão medular nas fraturas lombares baixas.",
          "O sistema inflamatório de reparação é danoso e causa da lesão medular secundária.",
          "Em crianças menores de 8 anos, a lesão medular pode ocorrer sem fraturas."
        ],
        answerIndex: 0,
        explanation: "O uso de corticoide em altas doses (pulsoterapia) é controverso, mas quando indicado, deve ser feito nas primeiras 8 horas do trauma em pacientes COM déficit neurológico. Não há indicação sem déficit ou após 8 horas.",
        tag: "Coluna"
      },
      {
        id: "orto-q44",
        text: "Paciente com fratura de fêmur tratada com osteossíntese rígida (placa e parafusos). Após 8 semanas, a radiografia não apresenta calo ósseo visível, mas o paciente não tem queixas. É correto afirmar que:",
        options: [
          "O calo ósseo torna-se visível após o remodelamento ósseo.",
          "A ausência de calo ósseo pode ser devida a infeção ativa.",
          "Provavelmente ele está com pseudartrose.",
          "Ocorreu processo de consolidação óssea direta (primária)."
        ],
        answerIndex: 3,
        explanation: "A fixação rígida com compressão interfragmentária promove a consolidação óssea direta (primária), onde o osso se remodela através dos canais de Havers sem a formação de um calo ósseo externo visível na radiografia.",
        tag: "Fisiologia Óssea"
      },
      {
        id: "orto-q45",
        text: "A fase de choque medular pode dificultar a avaliação do trauma raquimedular. Para termos certeza de que o paciente não se encontra em choque, devemos:",
        options: [
          "Observar a contração reflexa do esfíncter anal ao tracionar a sonda de Foley (reflexo bulbocavernoso).",
          "Observar a cada 30 minutos a sensibilidade dos braços e pernas.",
          "Observar os sinais vitais, pois hipotensão e bradicardia confirmam o choque.",
          "Avaliar dermátomos e miótomos para procurar o nível da lesão."
        ],
        answerIndex: 0,
        explanation: "O retorno do reflexo bulbocavernoso é o sinal que marca o fim da fase de choque medular. A sua presença indica que a medula recuperou a sua atividade reflexa abaixo do nível da lesão.",
        tag: "Coluna"
      },
      {
        id: "orto-q46",
        text: "Para ocorrer a consolidação das fraturas, é necessário:",
        options: [
          "Vascularização dos Fragmentos e Tratamento Cirúrgico.",
          "Tratamento cirúrgico e Redução Precoce.",
          "Estabilidade Mecânica e Vascularização dos Fragmentos.",
          "Redução precoce e Estabilidade Mecânica."
        ],
        answerIndex: 2,
        explanation: "Os dois pilares fundamentais para a consolidação de qualquer fratura são um ambiente mecânico estável (seja por gesso ou cirurgia) e um suprimento sanguíneo adequado (biologia) para levar as células e nutrientes necessários.",
        tag: "Fisiologia Óssea"
      },
      {
        id: "orto-q47",
        text: "A plegia flácida arreflexa que ocorre imediatamente após o trauma raquimedular pode indicar a presença do choque medular. Sobre essa condição podemos AFIRMAR:",
        options: [
          "Decorre de lesão das cadeias simpáticas cervicais.",
          "Cursa com extremidades quentes e hiperemiadas.",
          "O retorno precoce do reflexo bulbocavernoso indica bom prognóstico.",
          "Pode ocorrer, inclusive, em secções completas da medula espinhal."
        ],
        answerIndex: 3,
        explanation: "O choque medular é um fenómeno fisiológico de 'desligamento' temporário da medula abaixo da lesão, e ocorre tanto em lesões completas como incompletas. Não tem relação direta com o prognóstico final.",
        tag: "Coluna"
      },
      {
        id: "orto-q48",
        text: "Criança de 6 anos foi puxada pelo braço e agora o mantém junto ao corpo, pronado e sem o mover. A radiografia é normal. Qual a estrutura anatómica acometida?",
        options: [
          "Ligamento colateral radial",
          "Ligamento anular da cabeça do rádio",
          "Cápsula articular do cotovelo",
          "Placa de crescimento do úmero distal"
        ],
        answerIndex: 1,
        explanation: "Este é o quadro clássico da pronação dolorosa, onde uma tração súbita no braço da criança causa a subluxação da cabeça do rádio, que desliza para fora do ligamento anular que a deveria conter.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q49",
        text: "Na luxação do joelho, qual a lesão associada potencialmente grave e qual exame pedir para o seu diagnóstico precoce?",
        options: [
          "Trombose venosa profunda / ecodoppler venoso.",
          "Lesão meniscal / tomografia computadorizada.",
          "Lesão da artéria poplítea / arteriografia ou angio-TC.",
          "Lesão do ligamento cruzado anterior / ressonância magnética."
        ],
        answerIndex: 2,
        explanation: "A luxação do joelho é uma lesão de altíssima energia com alto risco de lesão da artéria poplítea, que passa posteriormente à articulação. A avaliação vascular com arteriografia ou angio-TC é mandatória para descartar uma lesão que pode levar à amputação.",
        tag: "Trauma"
      },
      {
        id: "orto-q50",
        text: "Numa radiografia da coluna lombar observa-se uma lesão óssea que acomete as três colunas de Dennis em L1. Qual a melhor conduta?",
        options: [
          "Colete anatómico e carga parcial com muletas.",
          "Permanecer com prancha até consolidação óssea.",
          "Tratamento cirúrgico com instrumentação e estabilização.",
          "Fisioterapia motora com treino de marcha."
        ],
        answerIndex: 2,
        explanation: "Uma fratura que acomete as três colunas de Dennis é, por definição, instável. O tratamento para fraturas instáveis da coluna vertebral é cirúrgico, visando a estabilização do segmento para proteger as estruturas neurais e permitir a mobilização precoce.",
        tag: "Coluna"
      },
      {
        id: "orto-q51",
        text: "Artrite Séptica pode ser uma complicação de Osteomielite em quais sítios anatómicos?",
        options: [
          "Cotovelo, Quadril e Joelho",
          "Ombro, Quadril e Tornozelo",
          "Ombro, Cotovelo e Joelho",
          "Cotovelo, Joelho e Tornozelo"
        ],
        answerIndex: 1,
        explanation: "A infeção pode passar do osso para a articulação (artrite séptica) quando a metáfise óssea (local mais comum da osteomielite em crianças) é intra-articular. Isto ocorre no ombro, quadril, cotovelo e tornozelo.",
        tag: "Infecção Ortopédica"
      },
      {
        id: "orto-q52",
        text: "Paciente de 5 anos com febre de 39 graus, dor puntiforme na coxa direita próxima ao joelho, com piora aos movimentos. Qual o provável diagnóstico?",
        options: [
          "Artrite Séptica",
          "Osteomielite Hematogénica Aguda",
          "Tumor Ósseo primário",
          "Osteomielite Crónica"
        ],
        answerIndex: 1,
        explanation: "A dor óssea localizada e intensa, associada a febre e sinais sistémicos numa criança, é a apresentação clássica da osteomielite hematogénica aguda, que afeta preferencialmente a metáfise dos ossos longos.",
        tag: "Infecção Ortopédica"
      },
      {
        id: "orto-q53",
        text: "Na traumatologia, qual termo define corretamente uma lesão ligamentar sem perda da congruência articular?",
        options: [
          "Contusão",
          "Luxação",
          "Estiramento muscular",
          "Entorse"
        ],
        answerIndex: 3,
        explanation: "A entorse é, por definição, uma lesão dos ligamentos de uma articulação causada por um movimento brusco, sem que ocorra a perda de contacto entre as superfícies articulares.",
        tag: "Trauma"
      },
      {
        id: "orto-q54",
        text: "Paciente de 29 anos sofreu trauma no tornozelo. A radiografia mostra fratura da base do V metatarso. Qual o diagnóstico e tratamento?",
        options: [
          "Fratura-luxação de Lisfranc / Cirurgia imediata",
          "Fratura da tuberosidade do V metatarso / Gesso ou Robofoot",
          "Fratura de Jones / Cirurgia para fixação",
          "Fratura por stress / Repouso e carga parcial"
        ],
        answerIndex: 1,
        explanation: "A fratura por avulsão da tuberosidade do V metatarso é comum após entorses de tornozelo e geralmente é tratada de forma conservadora com imobilização (gesso ou bota robofoot) e carga conforme a dor.",
        tag: "Fraturas"
      },
      {
        id: "orto-q55",
        text: "Paciente de 32 anos com fratura-luxação posterior do quadril/acetábulo. Qual afirmação é correta?",
        options: [
          "O paciente apresenta déficit do nervo femoral.",
          "A tomografia é fundamental para avaliar fragmentos intra-articulares.",
          "Todas as fraturas do acetábulo devem ser tratadas com cirurgia.",
          "A luxação posterior do quadril é a mais rara."
        ],
        answerIndex: 1,
        explanation: "Após a redução de uma luxação do quadril associada a uma fratura do acetábulo, a tomografia computadorizada é essencial para avaliar a congruência articular, a presença de fragmentos soltos e planear o tratamento cirúrgico definitivo.",
        tag: "Trauma"
      },
      {
        id: "orto-q56",
        text: "Paciente de 40 anos com fratura do 1/3 distal do rádio sem desvio, tratada com gesso. No terceiro dia, retorna com dor desproporcional e palidez nos dedos. Qual a hipótese?",
        options: [
          "Trombose venosa profunda",
          "Osteomielite aguda",
          "Síndrome compartimental",
          "Pseudoartrose hipertrófica"
        ],
        answerIndex: 2,
        explanation: "A dor desproporcional à lesão, especialmente em um membro imobilizado com gesso circular, é o sinal mais precoce e importante da Síndrome Compartimental, uma emergência que ameaça a viabilidade do membro.",
        tag: "Complicações"
      },
      {
        id: "orto-q57",
        text: "Homem de 27 anos, vítima de acidente, chega à emergência com Glasgow 15, PA 70x30mmHg e fratura exposta da tíbia. Seguindo o ATLS, qual a sua primeira ação?",
        options: [
          "Reduzir a fratura exposta.",
          "Mandar para a radiografia da bacia.",
          "Verificar se as vias aéreas estão livres e se o colar cervical está colocado.",
          "Fazer avaliação neurológica completa."
        ],
        answerIndex: 2,
        explanation: "O protocolo ATLS (Advanced Trauma Life Support) preconiza a abordagem ABCDE. A prioridade máxima é sempre garantir a via aérea (A - Airway) e a estabilização da coluna cervical.",
        tag: "Politrauma"
      },
      {
        id: "orto-q58",
        text: "Paciente de 38 anos com fratura cominutiva de alta energia da diáfise do úmero por projétil de arma de fogo. Qual a melhor afirmação sobre o caso?",
        options: [
          "Deve ser tratada com fixação externa de urgência e pode ter problemas de consolidação.",
          "Deve ser tratada com placa e parafusos e tem bom potencial de consolidação.",
          "É uma fratura segmentar e não deve ser operada imediatamente.",
          "É uma fratura de baixa energia e deve ser tratada por estabilidade relativa."
        ],
        answerIndex: 0,
        explanation: "Fraturas por projétil de arma de fogo são de alta energia, com grande dano às partes moles e cominuição óssea. A fixação externa é uma excelente opção para estabilização inicial (controlo de danos), e o alto grau de lesão biológica aumenta o risco de complicações na consolidação.",
        tag: "Fraturas"
      },
      {
        id: "orto-q59",
        text: "Paciente de 22 anos com trauma cervical, paraplegia flácida e nível neurológico em C6. O exame neurológico desta raiz envolve:",
        options: [
          "Flexão do punho e sensibilidade do dedo mínimo.",
          "Extensão do cotovelo e sensibilidade do dedo médio.",
          "Extensão do punho e sensibilidade do polegar.",
          "Flexão dos dedos e sensibilidade da face medial do antebraço."
        ],
        answerIndex: 2,
        explanation: "A raiz nervosa C6 é responsável pela motricidade da extensão do punho e pela sensibilidade do dermátomo que inclui a face lateral do antebraço e o polegar.",
        tag: "Coluna"
      },
      {
        id: "orto-q60",
        text: "Lutador de Judô sofre queda sobre o ombro. Ao exame, equimose, edema e sinal da 'tecla de piano' positivo. Qual afirmação é VERDADEIRA?",
        options: [
          "A lesão causou ruptura dos ligamentos acromioclaviculares e coracoclaviculares.",
          "O paciente necessita de redução incruenta de urgência com a manobra de Stimson.",
          "O diagnóstico é clínico, dispensando exames complementares.",
          "O tratamento cirúrgico é essencial para um bom resultado funcional."
        ],
        answerIndex: 0,
        explanation: "A luxação acromioclavicular com deformidade significativa (sinal da tecla) indica a rutura tanto dos ligamentos acromioclaviculares quanto dos ligamentos coracoclaviculares (conoide e trapezoide), que são os principais estabilizadores verticais da clavícula.",
        tag: "Ombro"
      },
      {
        id: "orto-q61",
        text: "Paciente de 25 anos com fratura do terço médio do escafóide sem desvio. Qual a conduta mais recomendável para este paciente, que é dentista e atleta?",
        options: [
          "Imobilização gessada sem incluir o polegar.",
          "Fixação por parafuso percutâneo para facilitar o retorno às atividades.",
          "Imobilização com tala gessada incluindo o polegar.",
          "Fixação aberta com parafuso interfragmentário."
        ],
        answerIndex: 1,
        explanation: "Em pacientes jovens e ativos ('alta demanda'), mesmo em fraturas sem desvio do escafóide, o tratamento cirúrgico com parafuso percutâneo é uma excelente opção, pois permite uma reabilitação mais rápida e um retorno precoce às atividades, além de diminuir o risco de pseudartrose.",
        tag: "Mão e Punho"
      },
      {
        id: "orto-q62",
        text: "Paciente de 32 anos com fratura diafisária do úmero e incapacidade de realizar extensão do punho. Qual a conduta mais apropriada?",
        options: [
          "Tratamento cirúrgico absoluto devido à lesão nervosa.",
          "Tratamento conservador, pois a lesão do nervo ulnar costuma recuperar.",
          "Tratamento conservador inicial, pois a lesão do nervo radial costuma ser uma neuropraxia e recupera espontaneamente.",
          "Tratamento cirúrgico devido à alta energia do trauma."
        ],
        answerIndex: 2,
        explanation: "A lesão do nervo radial é a mais comum nas fraturas da diáfise do úmero. Na maioria dos casos, trata-se de uma neuropraxia (lesão funcional sem dano estrutural) com alta taxa de recuperação espontânea. Por isso, a conduta inicial é geralmente conservadora, com observação da função nervosa.",
        tag: "Fraturas"
      },
      {
        id: "orto-q63",
        text: "Paciente de 2 anos com dor súbita no braço esquerdo após ser puxada pela mãe. Mantém o membro junto ao corpo, com antebraço pronado. A radiografia é normal. Qual o diagnóstico?",
        options: [
          "Fratura em galho verde",
          "Pronação Dolorosa",
          "Ruptura do ligamento anular",
          "Sinovite transitória de cotovelo"
        ],
        answerIndex: 1,
        explanation: "Este é o quadro clínico e mecanismo de trauma clássico da Pronação Dolorosa, ou subluxação da cabeça do rádio, comum em crianças pequenas após tração do membro superior.",
        tag: "Ortopedia Pediátrica"
      },
      {
        id: "orto-q64",
        text: "Em relação às características da osteomielite crónica, qual das seguintes afirmações está correta?",
        options: [
          "É uma emergência com alto risco de sepse e morte.",
          "O VHS é o melhor exame para acompanhamento da resposta ao tratamento.",
          "É caracterizada por necrose, sequestro ósseo e formação de fístulas.",
          "As alterações radiográficas são precoces e incluem apenas rarefação óssea."
        ],
        answerIndex: 2,
        explanation: "A osteomielite crónica é um processo de longa duração caracterizado pela presença de osso necrótico (sequestro ósseo) que atua como um corpo estranho, perpetuando a infeção e podendo drenar para a pele através de fístulas.",
        tag: "Infecção Ortopédica"
      },
      {
        id: "orto-q65",
        text: "Qual das seguintes afirmações descreve corretamente a fratura em 'galho verde', típica em crianças?",
        options: [
          "Desvio da cortical óssea sem nenhuma linha visível de fratura.",
          "Fratura que atravessa a placa de crescimento.",
          "Fratura de uma cortical, mantendo a outra cortical íntegra, mas angulada.",
          "Fratura cominutiva devido ao periósteo menos espesso."
        ],
        answerIndex: 2,
        explanation: "A fratura em 'galho verde' ocorre devido à maior flexibilidade do osso infantil. Uma cortical fratura enquanto a oposta apenas se deforma plasticamente (dobra), semelhante a um galho verde a ser quebrado.",
        tag: "Ortopedia Pediátrica"
      }
    ]
  },
  // Cole este objeto dentro do array DEFAULT_DECKS em data/defaultDecks.ts
// Cole este objeto dentro do array DEFAULT_DECKS em data/defaultDecks.ts
// Cole este objeto dentro do array DEFAULT_DECKS em data/defaultDecks.ts
// Cole este objeto dentro do array DEFAULT_DECKS em data/defaultDecks.ts
// Cole este objeto dentro do array DEFAULT_DECKS em data/defaultDecks.ts
// Cole este objeto dentro do array DEFAULT_DECKS em data/defaultDecks.ts

{
  id: "prova-suseme-2024-emergencia-cti-obstetricia",
  name: "SUSEME - Emergência - 2024",
  questions: [
    {
      id: "suseme-2024-q1",
      text: "As competências do Sistema Único de Saúde (SUS) incluem, entre outras, a:",
      options: [
        "colaboração na proteção do meio ambiente",
        "elaboração centralizada da política de saneamento básico",
        "exclusividade na formação de recursos humanos na área da saúde",
        "delegação à iniciativa privada do desenvolvimento científico e tecnológico"
      ],
      answerIndex: 0,
      explanation: "De acordo com o Art. 200 da Constituição, compete ao SUS, entre outras coisas, colaborar na proteção do meio ambiente, nele compreendido o do trabalho. A formação de recursos humanos é ordenada pelo SUS, mas não exclusiva. O desenvolvimento científico é incentivado, não delegado.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q2",
      text: "Um usuário busca uma UBS para se vacinar. É atendido, vacinado e orientado sobre a sua unidade de referência. As ações de acolhimento e referenciamento retratam, respectivamente, os seguintes princípios do SUS:",
      options: [
        "integralidade de assistência e igualdade de assistência",
        "participação da comunidade e capacidade de resolução dos serviços",
        "universalidade de acesso e regionalização da rede de serviços de saúde",
        "utilização da epidemiologia e direito à informação"
      ],
      answerIndex: 2,
      explanation: "O acolhimento em qualquer unidade demonstra a universalidade de acesso. O encaminhamento para a unidade de referência correta, de acordo com o seu local de moradia, exemplifica o princípio da regionalização e hierarquização da rede.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q3",
      text: "Conforme a Lei nº 8.142/1990, a representação dos usuários nos Conselhos de Saúde e Conferências, em relação ao conjunto dos demais segmentos será:",
      options: ["paritária", "minoritária", "maioritária", "inexistente"],
      answerIndex: 0,
      explanation: "A Lei 8.142/90 estabelece a paridade na composição dos Conselhos de Saúde: 50% dos assentos são destinados aos representantes dos usuários, enquanto os outros 50% são divididos entre trabalhadores da saúde, gestores e prestadores de serviços.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q4",
      text: "Conforme o artigo 18 da Lei nº 8.080/1990, a execução de serviços de vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal, compete:",
      options: ["à direção estadual do SUS", "à direção nacional do SUS", "à direção municipal do SUS", "ao Conselho Nacional de Saúde"],
      answerIndex: 2,
      explanation: "Pelo princípio da descentralização, a execução da maioria das ações de saúde, incluindo as de vigilância, é de competência da direção municipal do SUS, que é a esfera de governo mais próxima do cidadão.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q5",
      text: "Atividades em uma UBS para prevenção do suicídio e valorização da vida, como parte do 'Setembro Amarelo', expressam:",
      options: [
        "uma atividade específica das políticas de saúde do trabalhador",
        "um dos objetivos do SUS, através da assistência às pessoas por intermédio de atividades preventivas",
        "a importância das ações de reabilitação no SUS",
        "um dos campos de atuação do SUS, por meio da assistência social e farmacêutica"
      ],
      answerIndex: 1,
      explanation: "Ações de prevenção e promoção da saúde, como as campanhas de conscientização, são um dos objetivos fundamentais do SUS, conforme a Lei 8.080/90, que prioriza as atividades preventivas sobre as curativas.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q6",
      text: "A Lei nº 8.080/1990 estabelece que: (I) os municípios poderão constituir consórcios; (II) os recursos financeiros do SUS serão depositados em conta especial. Os itens I e Il se referem, respectivamente:",
      options: [
        "às diretrizes do SUS e à gestão financeira do SUS",
        "à organização nacional do SUS e à gestão administrativa do SUS",
        "à organização, direção e gestão administrativa do SUS e às diretrizes do SUS",
        "à organização, direção e gestão administrativa do SUS e à gestão financeira do SUS"
      ],
      answerIndex: 3,
      explanation: "A formação de consórcios entre municípios é uma forma de organização e gestão do sistema, enquanto a determinação de que os recursos sejam depositados em contas especiais (Fundos de Saúde) refere-se à gestão financeira.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q7",
      text: "É correto afirmar sobre o Sistema Único de Saúde (SUS) que:",
      options: [
        "a assistência à saúde no SUS é proibida à iniciativa privada",
        "o SUS não prevê a admissão de agentes comunitários de saúde",
        "o SUS tem como uma de suas diretrizes a centralização em cada esfera de governo",
        "as ações e os serviços públicos de saúde integram uma rede regionalizada e hierarquizada"
      ],
      answerIndex: 3,
      explanation: "A regionalização e a hierarquização são diretrizes organizacionais do SUS, definidas pela Constituição e pela Lei 8.080/90, que visam organizar os serviços de saúde por níveis de complexidade dentro de uma determinada região geográfica.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q8",
      text: "Modalidade de prestação de serviços de saúde a distância, por meio da utilização das tecnologias da informação e da comunicação. Essa definição refere-se a:",
      options: ["telessaúde", "interconsulta", "consulta de pré-natal", "atendimento domiciliar"],
      answerIndex: 0,
      explanation: "Esta é a definição exata de Telessaúde, que foi formalmente incorporada como um campo de atuação do SUS pela Lei 8.080/90.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q9",
      text: "Para receberem os recursos, os Municípios, Estados e o Distrito Federal deverão contar, entre outras exigências, com: I: Fundo de Saúde; II: Conselho de Saúde; III: plano de saúde; IV: relatórios de gestão. Estão corretas as sentenças:",
      options: ["I, II e III", "I, II e IV", "II, III e IV", "I, II, III e IV"],
      answerIndex: 3,
      explanation: "A Lei 8.142/90 estabelece que, para receberem os repasses do Fundo Nacional de Saúde, as outras esferas de governo devem ter Fundo de Saúde, Conselho de Saúde, Plano de Saúde e apresentar relatórios de gestão, garantindo a transparência e o controle social.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q10",
      text: "Sobre o Conselho de Saúde, de acordo com a Lei nº 8.142/1990, é correto afirmar que:",
      options: [
        "é um órgão colegiado de caráter permanente e deliberativo",
        "é composto apenas por representantes do governo e usuários",
        "reúne-se a cada quatro anos para avaliar a situação de saúde",
        "atua na execução da política de saúde na instância correspondente"
      ],
      answerIndex: 0,
      explanation: "O Conselho de Saúde é uma instância de controle social de caráter permanente (reuniões regulares) e deliberativo (participa da formulação e fiscalização das políticas de saúde). As Conferências é que se reúnem a cada quatro anos. Sua composição é quadripartite.",
      tag: "SUS"
    },
    {
      id: "suseme-2024-q11",
      text: "A causa mais comumente associada à emergência cardíaca hipertensiva é:",
      options: ["eclampsia", "traumatismo craniano", "dissecção aórtica aguda", "crise simpática induzida por cocaína"],
      answerIndex: 2,
      explanation: "A dissecção aguda de aorta é uma das emergências hipertensivas mais graves e que exigem um controle pressórico imediato e rigoroso para evitar a progressão da dissecção e a ruptura.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2024-q12",
      text: "Não é considerada como uma característica do estágio A da insuficiência cardíaca:",
      options: ["diabetes mellitus", "hipertensão arterial", "sindrome metabólica", "doença valvar assintomática"],
      answerIndex: 3,
      explanation: "O estágio A da insuficiência cardíaca refere-se a pacientes com ALTO RISCO de desenvolver IC, mas sem doença cardíaca estrutural. Hipertensão, diabetes e síndrome metabólica são fatores de risco. Uma doença valvar, mesmo assintomática, já constitui uma doença estrutural, classificando o paciente no estágio B.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2024-q13",
      text: "Assinale a afirmativa incorreta, com relação ao uso do trombolítico no infarto agudo do miocárdio, com supra de ST:",
      options: [
        "a presença de úlcera péptica ativa pode ser considerada contraindicação relativa",
        "terapia fibrinolítica é indicada até 12 horas após o início dos sintomas",
        "a presença de neoplasia intracraniana é considerada contraindicação absoluta",
        "comparativamente, o trombolítico apresenta taxas de reperfusão inicial mais altas e menor risco de hemorragia"
      ],
      answerIndex: 3,
      explanation: "A angioplastia primária, quando disponível, é superior à trombólise, pois apresenta maiores taxas de reperfusão (sucesso em abrir a artéria) e menor risco de complicações hemorrágicas, como o AVC hemorrágico.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2024-q14",
      text: "J.V.S., sexo masculino, chega na emergência com quadro de fibrilação atrial de recente começo (8h). O fator que não é considerado de risco no escore de decisão para o uso de anticoagulante (CHA2DS2-VASc) é:",
      options: ["idade <60 anos", "diabetes mellitus", "hipertensão arterial", "insuficiência cardíaca congestiva"],
      answerIndex: 0,
      explanation: "O escore CHA2DS2-VASc pontua a idade ≥ 65 anos (1 ponto) e ≥ 75 anos (2 pontos). Idade abaixo de 65 anos não pontua e, portanto, não é um fator de risco no escore. As outras opções são critérios que pontuam.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2024-q15",
      text: "A azotemia pré-renal é a causa mais comum de insuficiência renal aguda. O mecanismo fisiopatológico que melhor explica essa condição é:",
      options: ["hipoperfusão renal", "glomerulonefrite aguda", "nefrite intersticial aguda", "lesão aguda das células tubulares"],
      answerIndex: 0,
      explanation: "A insuficiência renal aguda pré-renal é, por definição, funcional, causada pela diminuição do fluxo sanguíneo para os rins (hipoperfusão renal) devido a causas como desidratação, hemorragia ou insuficiência cardíaca.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2024-q16",
      text: "W.D.S., 51 anos, com dor abdominal, náuseas e vômitos, com aumento de amilase e lipase sérica. Assinale o exame que apresenta maior acurácia para confirmar o diagnóstico de pancreatite aguda:",
      options: ["colonoscopia", "ultrassonografia abdominal", "radiografia de abdome com contraste", "tomografia computadorizada de abdome"],
      answerIndex: 3,
      explanation: "A tomografia computadorizada de abdome com contraste é o exame de imagem com maior acurácia para confirmar o diagnóstico de pancreatite aguda, avaliar a sua extensão e detectar complicações como necrose e coleções líquidas.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2024-q17",
      text: "O escore de Wells é utilizado em pacientes com suspeita de trombose venosa profunda. Assinale a alternativa que não faz parte do escore de Wells:",
      options: ["D dimero >500", "presença de câncer em atividade", "repouso recente no leito por mais de três dias", "presença de veias superficiais colaterais (não varicosas)"],
      answerIndex: 0,
      explanation: "O D-dímero não faz parte do escore de Wells. Ele é um exame solicitado APÓS a aplicação do escore: se a probabilidade clínica for baixa, um D-dímero negativo pode excluir a TVP. As outras opções são critérios do escore.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2024-q18",
      text: "A infecção pelo vírus da dengue pode ser assintomática ou progredir para quadros graves. Assinale a alternativa que contém um sinal de alarme:",
      options: ["constipação", "cefaleia occipital", "hipertensão arterial", "aumento progressivo do hematócrito"],
      answerIndex: 3,
      explanation: "O aumento progressivo do hematócrito é um sinal laboratorial de alarme fundamental na dengue, pois indica hemoconcentração devido ao extravasamento de plasma, que pode levar ao choque.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2024-q19",
      text: "Assinale a causa mais comum de doença da tireoide em crianças e adolescentes:",
      options: ["câncer de tireoide", "tireoidite de De Quervain", "tireoidite linfocítica crônica", "hipertireoidismo congênito"],
      answerIndex: 2,
      explanation: "A Tireoidite Linfocítica Crônica, ou Tireoidite de Hashimoto, é a causa mais comum de bócio e hipotireoidismo adquirido em crianças e adolescentes em áreas suficientes em iodo.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2024-q20",
      text: "Assinale o tipo de queimadura que caracteriza uma indicação de internação para tratamento:",
      options: [
        "queimaduras químicas",
        "queimaduras de 2º grau",
        "queimaduras superiores a 5% da superfície corpórea em adolescente/adulto",
        "lesão inalatória, somente se associada a mais de 10% da superficie corpórea"
      ],
      answerIndex: 0,
      explanation: "Queimaduras químicas, assim como as elétricas, são sempre consideradas graves e têm indicação de internação para avaliação de lesões profundas e sistêmicas, independentemente da extensão.",
      tag: "Cirurgia Plástica"
    },
    {
      id: "suseme-2024-q21",
      text: "Uma criança de 6 meses chega à emergência com suspeita de coqueluche. Assinale o agente antimicrobiano mais indicado para ser utilizado nesse caso:",
      options: ["azitromicina", "amoxacilina", "moxifloxacina", "sulfametoxazol-trimetoprima"],
      answerIndex: 0,
      explanation: "O tratamento da coqueluche é feito com macrolídeos. Em lactentes menores de 1 mês, a azitromicina é a droga de escolha. Para os maiores, como no caso, a azitromicina continua sendo uma excelente opção pela posologia mais cômoda.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2024-q22",
      text: "Assinale o quadro cirúrgico mais frequentemente observado em crianças:",
      options: ["colecistite aguda", "apendicite aguda", "intussuscepção intestinal", "hérnia inguinal encarcerada"],
      answerIndex: 1,
      explanation: "A apendicite aguda é a emergência cirúrgica abdominal mais comum em crianças e adolescentes.",
      tag: "Cirurgia Pediátrica"
    },
    {
      id: "suseme-2024-q23",
      text: "Sobre a atresia esofágica, podemos afirmar:",
      options: [
        "70% dos lactentes apresentam quadro sindrômico associado, com múltiplas anomalias",
        "aproximadamente 90% dos casos se apresentam associados à fistula traqueoesofágica",
        "essa anomalia apresenta taxas de sobrevivência extremamente baixas",
        "as anomalias cardíacas e vertebrais estão associadas à deficiência intelectual grave"
      ],
      answerIndex: 1,
      explanation: "A forma mais comum de atresia de esôfago (Tipo C na classificação de Gross) é a atresia proximal com fístula traqueoesofágica distal, correspondendo a cerca de 85-90% dos casos.",
      tag: "Cirurgia Pediátrica"
    },
    {
      id: "suseme-2024-q24",
      text: "A síndrome de Wernicke-Korsakoff, que pode ocorrer na hiperêmese gravídica, se deve a deficiência da vitamina:",
      options: ["B1", "B2", "B6", "B12"],
      answerIndex: 0,
      explanation: "A Encefalopatia de Wernicke é uma emergência neurológica causada pela deficiência aguda de Tiamina (Vitamina B1), que pode ocorrer em situações de desnutrição grave como na hiperêmese gravídica e no etilismo crônico.",
      tag: "G.O."
    },
    {
      id: "suseme-2024-q25",
      text: "A alteração que está mais comumente associada à polidramnia é:",
      options: ["obesidade", "dislipidemia", "hipertensão arterial", "doença hemolítica perinatal"],
      answerIndex: 3,
      explanation: "A Doença Hemolítica Perinatal grave leva à anemia fetal, insuficiência cardíaca e hidropsia fetal. A hidropsia cursa com grande produção de líquido e, consequentemente, polidrâmnio. Diabetes materno é a causa mais comum, mas não está entre as opções.",
      tag: "G.O."
    },
    {
      id: "suseme-2024-q26",
      text: "Crianças e gestantes com quadro clínico suspeito de dengue necessitam de vigilância estrita. Assinale a afirmativa correta:",
      options: [
        "o início da doença nas crianças menores de 2 anos de idade pode passar despercebido e o quadro grave ser identificado como a primeira manifestação",
        "não existe risco de transmissão vertical",
        "não há aumento da incidência de baixo peso ao nascer em mulheres que tiveram dengue durante a gravidez",
        "a dengue na infância é sempre sintomática"
      ],
      answerIndex: 0,
      explanation: "Em lactentes e crianças pequenas, os sintomas da dengue podem ser inespecíficos e se confundir com outras viroses, fazendo com que a doença só seja diagnosticada quando evolui para formas graves, com sinais de choque.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2024-q27",
      text: "A arritmia que mais frequentemente acomete mulher com estenose mitral reumática na gestação é:",
      options: ["flutter atrial", "fibrilação atrial", "taquicardia atrial multifocal", "taquisupra ventricular paroxística"],
      answerIndex: 1,
      explanation: "A estenose mitral leva ao aumento crônico do átrio esquerdo, que é o principal substrato anatômico para o desenvolvimento de fibrilação atrial. As alterações hemodinâmicas da gestação (aumento da volemia e do débito cardíaco) frequentemente precipitam o surgimento da arritmia.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2024-q28",
      text: "Dentre as formas de abortamento, a que se caracteriza por uma presença do colo dilatado, porém com o produto da concepção presente, que ainda não foi eliminado, é:",
      options: ["abortamento retido", "abortamento inevitável", "ameaça de abortamento", "abortamento incompleto"],
      answerIndex: 1,
      explanation: "O abortamento inevitável é caracterizado pela presença de sangramento e dilatação cervical, com o produto da concepção ainda dentro do útero, indicando que a expulsão irá ocorrer em breve. Na ameaça, o colo está fechado. No incompleto, parte já foi expulsa. No retido, o embrião/feto está morto, mas o colo está fechado.",
      tag: "G.O."
    },
    {
      id: "suseme-2024-q29",
      text: "Assinale a alternativa que está mais associada com risco de complicações para síndrome gripal do Covid-19:",
      options: ["adultos", "grávidas somente no 1º trimestre", "indivíduos que apresentem pneumopatias (incluindo asma)", "indivíduos em uso prolongado de ácido acetilsalicílico"],
      answerIndex: 2,
      explanation: "Doenças pulmonares crônicas, como DPOC e asma, são um importante fator de risco para o desenvolvimento de formas graves e complicações da COVID-19.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2024-q30",
      text: "Sobre a hiperêmese gravídica é correto afirmar que:",
      options: [
        "quando a desnutrição está muito avançada, ocorre deficiência de piridoxina (vitamina B6), que conduz ao quadro neurológico",
        "a encefalopatia de Wernicke, a sindrome de Mallory-Weiss e a ruptura do esôfago são importantes repercussões na gravidez",
        "quando a paciente experimenta náuseas e vômitos após quarta semana, outras condições devem ser cogitadas",
        "nas formas graves a perda ponderal é acentuada, 25 a 30%, e o pulso mostra-se lento"
      ],
      answerIndex: 1,
      explanation: "A encefalopatia de Wernicke (por deficiência de tiamina), a laceração de Mallory-Weiss e a ruptura esofágica (Síndrome de Boerhaave) são complicações graves, embora raras, dos vômitos incoercíveis da hiperêmese gravídica. A perda ponderal é >5%.",
      tag: "G.O."
    },
    {
      id: "suseme-2024-q31",
      text: "A oclusão embólica ou trombose do segmento V4 da artéria vertebral causa isquemia do bulbo lateral, provocando a Síndrome de Wallenberg. Assinale a alternativa que apresenta sinais e sintomas desta síndrome:",
      options: [
        "hemiplegia ipsilateral, disartria e diplopia",
        "hemianopsia temporal, diplopia e síndrome de Horner ipsilateral",
        "vertigem, rouquidão e plegia isolada do membro inferior contralateral",
        "vertigem, dormência da face ipsilateral e dos membros contralaterais"
      ],
      answerIndex: 3,
      explanation: "A Síndrome de Wallenberg (ou síndrome bulbar lateral) cursa com achados cruzados: perda da sensibilidade termo-dolorosa na face ipsilateral (trato do trigêmeo) e no corpo contralateral (trato espinotalâmico), associada a vertigem (núcleos vestibulares), disfagia e rouquidão (núcleo ambíguo).",
      tag: "Neurologia"
    },
    {
      id: "suseme-2024-q32",
      text: "A meningite bacteriana é uma infecção purulenta aguda. Assinale o principal agente causador do quadro em adultos acima de 20 anos:",
      options: ["Streptococcus bovis", "Staphylococus aureus", "Listeria monocytogenes", "Streptococcus pneumoniae"],
      answerIndex: 3,
      explanation: "O Streptococcus pneumoniae (pneumococo) é o principal agente etiológico da meningite bacteriana comunitária em adultos, seguido pela Neisseria meningitidis.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2024-q33",
      text: "Assinale o achado liquórico compatível com meningite viral aguda:",
      options: [
        "pleocitose linfocítica, nível de glicose reduzido e proteína elevada",
        "leucocitose mononuclear, nível de glicose reduzido e proteína elevada",
        "leucocitose polimorfonuclear, nível de glicose reduzido e proteína elevada",
        "pleocitose linfocítica, nível de glicose normal e proteína normal ou levemente aumentada"
      ],
      answerIndex: 3,
      explanation: "O líquor na meningite viral aguda classicamente apresenta uma pleocitose (aumento de células) com predomínio de linfócitos/mononucleares, com glicose normal e proteínas normais ou discretamente elevadas.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2024-q34",
      text: "Sobre a síndrome nefrótica, é correto afirmar que:",
      options: [
        "dismorfismo eritrocitário está sempre presente",
        "é caracterizada por proteinúria, edema, hipertensão e hiperlipidemia",
        "é uma apresentação incomum, porém dramática de glomerulonefrite aguda",
        "não está associada à predisposição a infecções e estado de hipercoagulabilidade"
      ],
      answerIndex: 2,
      explanation: "A síndrome nefrótica é uma das apresentações clássicas das glomerulopatias. É caracterizada por proteinúria maciça (>3,5g/24h), hipoalbuminemia, edema e hiperlipidemia. Hipertensão e dismorfismo eritrocitário são mais comuns na síndrome nefrítica.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2024-q35",
      text: "Paciente masculino, 38 anos, portador de anemia falciforme, apresenta dor em flanco à esquerda e hematúria de início agudo. Assinale o diagnóstico desse paciente:",
      options: ["apendicite aguda", "gastroenterite aguda", "necrose aguda de papila renal", "enterocolite necrotizante aguda"],
      answerIndex: 2,
      explanation: "A necrose de papila renal é uma complicação conhecida da anemia falciforme, causada pela oclusão microvascular na medula renal, levando a isquemia e necrose, que se manifesta com dor em flanco e hematúria.",
      tag: "Hematologia"
    },
    {
      id: "suseme-2024-q36",
      text: "Sobre os padrões de fraturas pediátricas, NÃO se pode afirmar que:",
      options: [
        "deformações plásticas ocorrem exclusivamente em crianças",
        "a maioria das fraturas pediátricas devem ser tratadas através de cirurgias abertas",
        "a fratura em galho verde ocorre quando o osso está curvado e há falha na face elástica (convexa) do osso",
        "as fraturas de indentação são inerentemente estáveis e cicatrizam em 3 a 4 semanas"
      ],
      answerIndex: 1,
      explanation: "Ao contrário dos adultos, a grande maioria das fraturas em crianças é tratada de forma conservadora (sem cirurgia), devido ao enorme potencial de remodelação óssea e à consolidação rápida. As outras afirmações estão corretas.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2024-q37",
      text: "O exame diagnóstico de escolha para detectar uma embolia pulmonar é:",
      options: ["eletrocardiograma", "radiografia de tórax", "tomografia helicoidal com contraste", "cintilografia de ventilação/perfusão"],
      answerIndex: 2,
      explanation: "A Angiotomografia de tórax (ou tomografia helicoidal com contraste) é o padrão-ouro para o diagnóstico de tromboembolismo pulmonar, pois permite a visualização direta do trombo nas artérias pulmonares.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2024-q38",
      text: "O tratamento farmacológico recomendado para giardíase é:",
      options: ["tinidazol", "fluconazol", "amoxicilina", "vancomicina"],
      answerIndex: 0,
      explanation: "O tratamento da infecção por Giardia lamblia é feito com antiparasitários, sendo os nitroimidazólicos como o tinidazol ou o metronidazol as drogas de primeira linha. As outras opções são antifúngicos ou antibióticos.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2024-q39",
      text: "Dentre as indicações de cirurgia de urgência no traumatismo torácico, aquela que NÃO é considerada uma necessidade de toracotomia imediata é:",
      options: ["lesão da aorta", "lesão esofágica", "quilotórax persistente", "rotura aguda do diafragma"],
      answerIndex: 2,
      explanation: "O quilotórax (acúmulo de linfa no tórax) geralmente tem um tratamento inicial conservador. A cirurgia é indicada apenas se houver falha no tratamento clínico (débito persistente), não sendo uma indicação de toracotomia de emergência. As outras opções são lesões graves que exigem abordagem imediata.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2024-q40",
      text: "Os patógenos mais comumente encontrados na cervicite são:",
      options: [
        "C. trachomatis e N. gonorrhoeae",
        "mycoplasma e C. albicans",
        "G. vaginalis e ureaplasma",
        "T. vaginalis e lactobacillus"
      ],
      answerIndex: 0,
      explanation: "A cervicite mucopurulenta é uma infecção sexualmente transmissível causada principalmente pela Neisseria gonorrhoeae (gonococo) e pela Chlamydia trachomatis.",
      tag: "G.O."
    }
  ]
},
{
  id: "prova-suseme-2023-emergencia-cti-obstetricia",
  name: "SUSEME - Emergência - 2023",
  questions: [
    {
      id: "suseme-2023-q1",
      text: "Conforme a Constituição de 1988, 'A saúde é direito de todos e dever do Estado, garantido mediante políticas...'",
      options: [
        "que garantam o acesso às ações e serviços de saúde às parcelas mais pobres da população",
        "que garantam o acesso parcial, mas igualitário a algumas ações e serviços de saúde",
        "sociais e econômicas que visem à redução do risco de doença e de outros agravos",
        "sociais e econômicas que visem à transferência de renda aos mais pobres"
      ],
      answerIndex: 2,
      explanation: "O Art. 196 da Constituição estabelece que a garantia do direito à saúde se dá através de políticas sociais e econômicas que atuem nos determinantes da saúde para reduzir os riscos de doenças, e não apenas pelo acesso aos serviços.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q2",
      text: "Entre os princípios e diretrizes do SUS, conforme Art. 7º da Lei n° 8.080/1990, pode-se citar a:",
      options: [
        "universalidade de acesso aos serviços, exceto no nível da recuperação da saúde",
        "divisão em nível executivo das ações de saúde, meio ambiente e saneamento",
        "igualdade da assistência à saúde, sem preconceitos ou privilégios",
        "ênfase na centralização dos serviços para os Estados"
      ],
      answerIndex: 2,
      explanation: "A igualdade (ou equidade) da assistência à saúde, tratando todos sem preconceitos ou privilégios, é um dos princípios fundamentais do SUS. A universalidade é em todos os níveis, e a diretriz é de descentralização.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q3",
      text: "Conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes de saúde, com a finalidade de recomendar e adotar medidas de prevenção e controle. Este conceito define a:",
      options: ["vigilância epidemiológica", "saúde do trabalhador", "vigilância sanitária", "gestão financeira"],
      answerIndex: 0,
      explanation: "Esta é a definição exata de Vigilância Epidemiológica, conforme a Lei 8.080/90, focada no monitoramento e controle dos padrões de ocorrência de doenças na população.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q4",
      text: "É competência do Sistema Único de Saúde (SUS), conforme o Art. 200 da Constituição:",
      options: [
        "fiscalizar o exercício profissional na área da saúde, exceto para medicina e enfermagem",
        "participar da formulação da politica e da execução das ações de saneamento básico",
        "realizar toda a formação de recursos humanos na área da saúde no nível técnico",
        "delegar as ações de vigilância sanitária e epidemiológica à iniciativa privada"
      ],
      answerIndex: 1,
      explanation: "O Art. 200 da Constituição estabelece que compete ao SUS participar da formulação da política e da execução das ações de saneamento básico, reconhecendo a sua importância como determinante da saúde.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q5",
      text: "Após ser atendido em uma unidade básica, o usuário recebe encaminhamento para consulta com um cardiologista em uma unidade especializada. O quadro descrito exemplifica o seguinte princípio do SUS:",
      options: [
        "descentralização político-administrativa",
        "participação da comunidade",
        "preservação da autonomia",
        "integralidade da assistência"
      ],
      answerIndex: 3,
      explanation: "A integralidade da assistência pressupõe um conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, nos diferentes níveis de complexidade do sistema. O encaminhamento da atenção básica para a especializada é um exemplo prático disso.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q6",
      text: "Considerando a participação da iniciativa privada no SUS, conforme Art. 199 da Constituição, é CORRETO afirmar que:",
      options: [
        "as instituições privadas poderão participar das ações de promoção da saúde no SUS, sendo vedada a sua atuação nas ações de recuperação da saúde",
        "a assistência à saúde é livre à iniciativa privada, de forma complementar ao SUS, com preferência às entidades filantrópicas e sem fins lucrativos",
        "a destinação de recursos públicos é livre a todas as instituições privadas",
        "as instituições privadas não poderão participar do SUS, exceto no caso de internação ou calamidade pública"
      ],
      answerIndex: 1,
      explanation: "O Art. 199 da Constituição estabelece que a iniciativa privada pode participar do SUS de forma complementar, mediante contrato, com preferência para as entidades filantrópicas e sem fins lucrativos.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q7",
      text: "A partir do exposto na Lei nº 8.080/1990 é CORRETO afirmar que:",
      options: [
        "quando as disponibilidades do SUS forem insuficientes, deverá recorrer a instituições religiosas",
        "os recursos financeiros do SUS serão depositados em conta especial, sob fiscalização dos gestores",
        "a direção do SUS é exercida pelo Ministério da Saúde, que executa as políticas após aprovação do Congresso",
        "saúde do trabalhador é um conjunto de atividades que se destina à promoção, proteção, recuperação e reabilitação da saúde dos trabalhadores"
      ],
      answerIndex: 3,
      explanation: "A opção D traz a definição correta de Saúde do Trabalhador, um dos campos de atuação do SUS, conforme a Lei 8.080/90. A direção do SUS é tripartite. Os recursos são fiscalizados pelos Conselhos de Saúde.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q8",
      text: "A participação da comunidade na gestão do SUS é regulada pela Lei nº 8.142/1990, que define duas instâncias colegiadas em cada esfera de governo, que são:",
      options: [
        "o Conselho de Saúde e a Conferência de Saúde",
        "a Conferência de Saúde e o Ministério da Saúde",
        "o Conselho de Saúde e o Fundo Nacional de Saúde",
        "a Conferência de Saúde e o Fundo Nacional de Saúde"
      ],
      answerIndex: 0,
      explanation: "A Lei 8.142/90 instituiu as duas instâncias oficiais de controle social no SUS: a Conferência de Saúde (que se reúne a cada 4 anos para definir diretrizes) и o Conselho de Saúde (de caráter permanente e deliberativo).",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q9",
      text: "Sobre o direito à saúde, de acordo com os Art. 2º e 3º da Lei 8.080/90, é CORRETO afirmar que:",
      options: [
        "as ações de promoção e proteção da saúde devem ser garantidas a todos e as ações de recuperação aos mais pobres",
        "são determinantes e condicionantes da saúde, entre outros, a renda, o meio ambiente e o acesso aos bens supérfluos",
        "o dever do Estado de prover as condições indispensáveis ao pleno exercício da saúde exclui o dever da sociedade",
        "o dever do Estado inclui assegurar condições de acesso universal e igualitário às ações e serviços de saúde"
      ],
      answerIndex: 3,
      explanation: "O dever do Estado é garantir a saúde através de políticas que assegurem o acesso universal (para todos) e igualitário (atendendo às desigualdades) aos serviços, como definido na Lei 8.080/90.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q10",
      text: "Reunir-se-á a cada quatro anos com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde. Trata-se:",
      options: ["do Sistema Nacional de Saúde", "da Conferência de Saúde", "da Secretaria de Saúde", "do Conselho de Saúde"],
      answerIndex: 1,
      explanation: "Esta é a definição da Conferência de Saúde, uma instância de controle social que ocorre a cada quatro anos em todas as esferas de governo para avaliar e propor as diretrizes da política de saúde.",
      tag: "SUS"
    },
    {
      id: "suseme-2023-q11",
      text: "Encefalopatia portossistêmica é uma complicação grave da doença hepática crônica, sendo INCORRETO afirmar que:",
      options: [
        "pode ocorrer como resultado de hipopotassemia, infecção, sobrecarga de proteínas dietéticas ou distúrbios eletrolíticos",
        "o diagnóstico de encefalopatia hepática é feito pela realização de tomografia computadorizada de crânio",
        "a encefalopatia é observada muito mais comumente nos pacientes com doença hepática crônica",
        "a rifaximina na dose de 550 mg, 2x ao dia, tem sido muito eficaz no tratamento da encefalopatia"
      ],
      answerIndex: 1,
      explanation: "O diagnóstico da encefalopatia hepática é eminentemente clínico, baseado na presença de alterações do estado mental e asterixis em um paciente com insuficiência hepática. A tomografia é usada para excluir outras causas de rebaixamento de consciência, mas não para confirmar a encefalopatia.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2023-q12",
      text: "Sobre as dores noturnas benignas da infância, também conhecidas como dores de crescimento, podemos afirmar:",
      options: [
        "as crianças mais comumente descrevem dores em cólicas ou dor incômoda que ocorre no início do dia",
        "as dores de crescimento são contínuas e unilaterais",
        "a dor ocorre durante períodos de crescimento rápido ou em locais de crescimento",
        "o pico de incidência ocorre entre os 4 e os 12 anos"
      ],
      answerIndex: 3,
      explanation: "As dores de crescimento são um diagnóstico de exclusão, com pico de incidência entre 4 e 12 anos. Caracteristicamente, são dores noturnas, bilaterais, em membros inferiores, que não se localizam nas articulações e o exame físico é normal.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2023-q13",
      text: "Sobre a hiperêmese gravídica é correto afirmar:",
      options: [
        "entre os fatores de risco, podem ser citadas a história de hiperêmese em gestação anterior, a história familiar e a gravidez de feto feminino",
        "nas formas graves a perda ponderal é maior que 15% do peso corporal, hipertensão arterial está sempre presente",
        "a hiperêmese gravídica é a principal causa de internação hospitalar em gestantes, independente da idade gestacional",
        "encefalopatia de Wernicke e Síndrome de Mallory-Weiss nunca estão presentes"
      ],
      answerIndex: 0,
      explanation: "A opção A lista corretamente os principais fatores de risco para hiperêmese gravídica. As outras opções estão incorretas: a perda de peso é >5%, pode ocorrer hipotensão (e não hipertensão), é a principal causa de internação na primeira metade da gestação, e Wernicke e Mallory-Weiss são complicações possíveis.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q14",
      text: "Acerca da Síndrome HELLP podemos afirmar:",
      options: [
        "o quadro clínico típico é o da grávida na segunda metade da gestação com dor epigástrica ou no quadrante superior direito, particularmente se associada a náuseas e vômitos",
        "a disfunção hepática é avaliada pelo aumento no soro das transaminases hepáticas, 5 vezes a concentração normal",
        "apesar de ser um quadro grave, a mortalidade materna e gestacional é baixa, menor que 5%",
        "o nível adotado para caracterizar a trombocitopenia é de < 190.000 plaquetas/mm"
      ],
      answerIndex: 0,
      explanation: "A dor epigástrica ou em hipocôndrio direito, causada pela distensão da cápsula hepática, é o sintoma mais característico da Síndrome HELLP. A trombocitopenia é definida por plaquetas < 100.000/mm³ e a mortalidade é significativa.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q15",
      text: "Sobre a eclampsia, podemos afirmar:",
      options: [
        "o uso de ácido acetilsalicílico, em dose baixa, iniciado antes das 16 semanas em gestantes de alto risco, reduz a incidência de pré-eclampsia leve e grave.",
        "a pré-eclampsia tardia apresenta mortalidade 20 vezes maior do que a pré-eclampsia precoce",
        "complicações como amaurose e psicose puerperal são em sua maioria não reversíveis",
        "a hemorragia cerebral é a principal causa de morte"
      ],
      answerIndex: 3,
      explanation: "As complicações neurológicas, especialmente a hemorragia cerebral, são a principal causa de morte materna na eclâmpsia. A profilaxia com AAS é eficaz. A pré-eclâmpsia precoce é mais grave. As complicações visuais e psiquiátricas são geralmente reversíveis.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q16",
      text: "Sobre a doença Monkeypox é correto afirmar, EXCETO:",
      options: [
        "Monkeypox é uma doença causada pelo Monkeypox virus, do gênero Orthopoxvirus",
        "a manifestação cutânea típica é do tipo papulovesicular, precedido ou não de febre e de linfadenopatia",
        "a transmissão entre humanos ocorre principalmente por meio de contato pessoal próximo",
        "os primatas não humanos são os principais reservatórios do virus"
      ],
      answerIndex: 3,
      explanation: "Apesar do nome, acredita-se que os principais reservatórios do vírus Monkeypox na natureza sejam pequenos roedores e esquilos africanos, e não os primatas não humanos.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2023-q17",
      text: "Cefaleia de forte intensidade e rápida instalação é um sintoma clássico da Hemorragia Subaracnóidea. Sobre a HSA podemos afirmar:",
      options: [
        "risco de vasoespasmo é maior nas primeiras 24h do sangramento",
        "o principal fator que determina o desfecho é o status neurológico na admissão hospitalar",
        "ressangramento da má formação aneurismática não altera a morbimortalidade",
        "principal etiologia é trauma craniano"
      ],
      answerIndex: 1,
      explanation: "O estado neurológico do paciente na admissão, avaliado por escalas como Hunt-Hess, é o preditor mais importante do prognóstico. O vasoespasmo ocorre mais tardiamente (4º ao 14º dia). Ressangramento é catastrófico. A principal causa de HSA espontânea é a ruptura de aneurisma.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2023-q18",
      text: "Qual das alternativas abaixo é a principal etiologia do hematoma intraparenquimatoso (AVE hemorrágico) com localização talâmica:",
      options: ["vasculite", "tabagismo", "hipertensão arterial", "fibrilação atrial"],
      answerIndex: 2,
      explanation: "A hipertensão arterial crônica é a causa mais comum de AVC hemorrágico intraparenquimatoso, especialmente em localizações profundas como o tálamo, devido à ruptura de pequenas artérias perfurantes (lipohialinose).",
      tag: "Neurologia"
    },
    {
      id: "suseme-2023-q19",
      text: "Paciente feminina, 65 anos, apresenta cefaleia temporal esquerda de forte intensidade, de início recente. Refere dor na mandíbula ao mastigar e turvação visual em olho esquerdo. A principal suspeita diagnóstica é:",
      options: ["migranea com aura", "cefaleia em salvas", "arterite temporal", "nevralgia do trigêmeo"],
      answerIndex: 2,
      explanation: "O quadro de cefaleia nova em paciente >50 anos, associada a claudicação de mandíbula e sintomas visuais, é a apresentação clássica da Arterite de Células Gigantes (Arterite Temporal), uma emergência reumatológica.",
      tag: "Reumatologia"
    },
    {
      id: "suseme-2023-q20",
      text: "Paciente masculino, 30 anos, com cefaleia holocraniana há 6 meses associada a inapetência e sudorese noturna. Exame de líquor evidenciou pleocitose linfocítica e hipoglicorraquia. O diagnóstico provável é:",
      options: ["encefalite herpética", "meningite tuberculosa", "meningite meningocócica", "hemorragia subaracnóidea"],
      answerIndex: 1,
      explanation: "Meningite de evolução subaguda/crônica com sintomas constitucionais (sudorese noturna, inapetência) e líquor com pleocitose linfocitária e consumo de glicose (hipoglicorraquia) é característico de meningite tuberculosa.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2023-q21",
      text: "Paciente feminina, 16 anos, com dor abdominal inespecífica há 24 horas. Evoluiu com febre, calafrios, vômitos e dor localizada em quadrante inferior direito. Sinal de McBurney presente. O diagnóstico provável é:",
      options: ["apendicite aguda", "volvo de sigmoide", "diverticulite aguda", "pielonefrite aguda"],
      answerIndex: 0,
      explanation: "A migração da dor periumbilical para a fossa ilíaca direita, associada a náuseas, febre e dor à palpação no ponto de McBurney, é a apresentação clássica da apendicite aguda.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2023-q22",
      text: "Paciente feminina, 65 anos, desperta bem, após almoço apresenta subitamente hemiplegia à esquerda, disartria e desvio da comissura labial. Chega à emergência após 3 horas. Tomografia evidencia área hipodensa em todo território da artéria cerebral média direita. Assinale a opção que CONTRAINDICA a trombólise venosa:",
      options: [
        "tomografia de crânio de admissão com evidência de injúria vascular extensa precoce",
        "tempo do inicio dos sintomas",
        "escala de NIHSS elevada",
        "hipertensão arterial"
      ],
      answerIndex: 0,
      explanation: "A presença de uma área hipodensa extensa (envolvendo > 1/3 do território da ACM) na TC inicial é uma contraindicação absoluta à trombólise, pois indica um infarto já estabelecido com alto risco de transformação hemorrágica.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2023-q23",
      text: "Paciente masculino, 36 anos, queixa-se de cefaleia holocraniana de forte intensidade e dor na nuca. Confirma apresentar herpes genital de repetição. Exame de líquor com aumento da celularidade às custas de linfócitos. A principal hipótese é:",
      options: ["hemorragia subaracnóidea", "meningite herpética", "meningite bacteriana", "cefaleia tipo tensional"],
      answerIndex: 1,
      explanation: "A meningite viral é a causa mais comum de meningite asséptica. O líquor com pleocitose linfocitária e a história de herpes genital recorrente (causada pelo HSV-2) tornam a meningite herpética a principal suspeita.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2023-q24",
      text: "Sobre o estado de mal epiléptico, podemos afirmar:",
      options: [
        "não há indicação de tratamento com anticonvulsivantes",
        "ocorre em casos de crises convulsivas contínuas por mais de 1 hora",
        "não está associado a lesão neuronal ou gravidade do status neurológico",
        "a maior parte dos casos é causado por dano cerebral agudo em pacientes sem história prévia de epilepsia"
      ],
      answerIndex: 3,
      explanation: "O estado de mal epiléptico é mais frequentemente causado por uma lesão cerebral aguda (ex: TCE, AVE, infecção do SNC) em pacientes sem diagnóstico prévio de epilepsia. A definição operacional atual é uma crise contínua por > 5 minutos.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2023-q25",
      text: "Sobre a morte encefálica podemos afirmar:",
      options: [
        "o uso de drogas sedativas não interfere no diagnóstico",
        "eletroencefalograma não pode ser usado como teste confirmatório",
        "é necessário a presença de lesão estrutural cerebral compatível com a evidência de morte encefálica",
        "a avaliação da temperatura corporal não interfere na avaliação do paciente"
      ],
      answerIndex: 2,
      explanation: "Um dos pré-requisitos para o diagnóstico de morte encefálica é a identificação de uma causa conhecida e irreversível de lesão cerebral. Fatores de confusão como hipotermia e uso de drogas sedativas devem ser afastados.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2023-q26",
      text: "Com relação a toxemia gravídica podemos afirmar, EXCETO:",
      options: [
        "geralmente é caracterizada classicamente por hipertensão e proteinúria",
        "doença multissistémica que costuma ocorrer na primeira metade da gestação",
        "no Brasil tem incidência em torno de 10% das grávidas (principalmente primíparas)",
        "nas suas formas graves pode ocorrer convulsão, sendo denominada neste caso como eclampsia"
      ],
      answerIndex: 1,
      explanation: "A pré-eclâmpsia (toxemia gravídica) é, por definição, uma doença que se manifesta APÓS a 20ª semana de gestação. Hipertensão antes de 20 semanas é classificada como hipertensão crônica.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q27",
      text: "O fator de risco considerado mais importante para a placenta prévia é:",
      options: ["idade materna avançada", "cesárea anterior", "multiparidade", "tabagismo"],
      answerIndex: 1,
      explanation: "A presença de uma cicatriz uterina anterior, principalmente por cesariana, é o fator de risco isolado mais importante para o desenvolvimento de placenta prévia em gestações futuras.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q28",
      text: "Uma outra definição utilizada para a sindrome de Sheehan é:",
      options: ["necrose hipofisária pós-parto", "necrose suprarrenal pós-parto", "necrose pancreática pós-parto", "necrose renal pós-parto"],
      answerIndex: 0,
      explanation: "A Síndrome de Sheehan é definida como a necrose da glândula hipófise (pituitária) secundária a uma hemorragia pós-parto grave, levando a um quadro de pan-hipopituitarismo.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q29",
      text: "Com relação a Doença Hemolítica Perinatal (DHPN), podemos afirmar EXCETO:",
      options: [
        "são fatores relacionados a DHPN: aloimunização materna, passagem de anticorpos da gestante para o feto, ação desses anticorpos no concepto",
        "é uma afecção generalizada, acompanhada de anemia, destruição das hemácias e aparecimento de suas formas jovens na circulação",
        "em 98% dos casos de DHPN, a incompatibilidade entre a mãe e o feto é atribuída aos sistemas Rh e ABO",
        "a incompatibilidade pelo sistema Rh na maioria das vezes acomete o primeiro filho (95%)"
      ],
      answerIndex: 3,
      explanation: "A sensibilização materna ao antígeno Rh ocorre geralmente no primeiro parto de um feto Rh positivo. Portanto, a Doença Hemolítica Perinatal por incompatibilidade Rh classicamente acomete o SEGUNDO filho em diante.",
      tag: "G.O."
    },
    {
      id: "suseme-2023-q30",
      text: "O agente mais comumente envolvido no impetigo crostoso, que pode ocorrer em adultos e crianças é:",
      options: ["mycoplasma pneumoniae", "staphylococcus aureus", "sarcoptes scabiei", "proteus mirabilis"],
      answerIndex: 1,
      explanation: "Embora classicamente associado ao Streptococcus pyogenes, o Staphylococcus aureus é atualmente o agente mais isolado tanto no impetigo não-bolhoso (crostoso) quanto no bolhoso.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2023-q31",
      text: "Com relação aos Critérios de Duke, modificados para diagnóstico de endocardite infecciosa (EI), pode ser considerado um critério maior:",
      options: [
        "fenômenos vasculares, como lesões de Janeway",
        "fenômenos imunológicos, como nódulos de Osler",
        "hemocultura positiva para EI com microrganismos compatíveis em 2 amostras",
        "condição cardíaca predisponente"
      ],
      answerIndex: 2,
      explanation: "Os critérios maiores de Duke para endocardite são: 1) Hemoculturas positivas para agentes típicos e 2) Evidência de envolvimento endocárdico no ecocardiograma (vegetação, abscesso, nova regurgitação valvar). As outras opções são critérios menores.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2023-q32",
      text: "Com relação a síndrome hemolítico-urêmica (SHU) pode-se afirmar, EXCETO:",
      options: [
        "é definida pela ocorrência simultânea de anemia hemolítica microangiopática, trombocitopenia e insuficiência renal aguda",
        "a anemia frequentemente ocorre de forma progressiva e leve",
        "crianças apresentam pródromo característico: dor abdominal, vômitos e diarreia",
        "a causa mais comum na infância é a infecção por Escherichia coli"
      ],
      answerIndex: 1,
      explanation: "A anemia na SHU é tipicamente aguda e grave, resultante da destruição mecânica das hemácias nos pequenos vasos obstruídos por trombos, e não progressiva e leve.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2023-q33",
      text: "A Síndrome Respiratória Aguda Grave (SRAG) é definida pela presença de dispneia ou dos seguintes sinais de gravidade, EXCETO:",
      options: [
        "saturação de SpO2 < que 95% em ar ambiente",
        "piora nas condições clinicas de doença de base",
        "aumento dos níveis pressóricos (hipertensão arterial)",
        "sinais de desconforto respiratório ou aumento da frequência respiratória"
      ],
      answerIndex: 2,
      explanation: "Hipotensão arterial, e não hipertensão, é um sinal de gravidade e disfunção orgânica que compõe a definição de SRAG. Os outros itens são critérios válidos.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2023-q34",
      text: "A doença Monkeypox se caracteriza pelos seguintes achados, EXCETO:",
      options: [
        "a transmissão por meio de gotículas geralmente requer contato próximo e prolongado",
        "a doença geralmente evolui com sinais e sintomas graves, devendo todos os pacientes serem internados na UTI",
        "é uma doença causada pelo Monkeypox vírus, do gênero Orthopoxvirus",
        "a incubação dura de 6 a 16 dias, em média"
      ],
      answerIndex: 1,
      explanation: "A grande maioria dos casos de Monkeypox é autolimitada e cursa com sintomas leves. Apenas uma pequena percentagem de pacientes, especialmente imunocomprometidos, desenvolve formas graves que necessitam de internação.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2023-q35",
      text: "Com relação ao manejo clínico da Síndrome Respiratória causada pelo novo coronavirus (SARS-COV-2), é RECOMENDADA a seguinte estratégia:",
      options: [
        "administrar antibiótico dentro de uma hora da avaliação inicial de pacientes com sepse",
        "administrar de forma rotineira corticosteroides sistêmicos para tratamento de pneumonia viral",
        "administrar oxigenoterapia suplementar a todos os pacientes, independente da saturação",
        "administrar fluidos em excesso em pacientes com SRAG mesmo quando não houver evidência de choque"
      ],
      answerIndex: 0,
      explanation: "No paciente com COVID-19 que desenvolve sepse ou choque séptico, a administração de antibióticos de amplo espectro na primeira hora é uma recomendação padrão, pois a co-infecção bacteriana é uma possibilidade.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2023-q36",
      text: "A mortalidade de pacientes com estenose aórtica grave costuma estar mais elevada quando na presença dos seguintes sintomas, EXCETO:",
      options: ["sincope", "angina pectoris", "dispneia", "palpitação"],
      answerIndex: 3,
      explanation: "A tríade de síncope, angina e dispneia (insuficiência cardíaca) são os sintomas cardinais da estenose aórtica e marcam um ponto de viragem para um prognóstico muito ruim se não tratada. Palpitação é um sintoma inespecífico e não está associado ao mesmo aumento de mortalidade.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2023-q37",
      text: "Com relação as estratégias utilizadas no manejo clínico dos pacientes com insuficiência cardíaca e fração de ejeção reduzida (ICFER) está CORRETO afirmar que:",
      options: [
        "a combinação de hidralazina e nitratos não demonstrou aumentar a sobrevida",
        "os beta-bloqueadores podem produzir redução dos sintomas e da taxa de hospitalizações, assim como da mortalidade",
        "todos os beta-bloqueadores estão indicados na ICFER",
        "o uso de antagonista da aldosterona está associado à redução na mortalidade apenas no estágio avançado"
      ],
      answerIndex: 1,
      explanation: "Os betabloqueadores (especificamente carvedilol, metoprolol e bisoprolol) são uma das classes de medicamentos com maior impacto na ICFEr, comprovadamente reduzindo mortalidade, hospitalizações e melhorando os sintomas.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2023-q38",
      text: "O escore CHA2DS2-VASc pode ser usado para estimar o risco de AVC nos pacientes com fibrilação atrial. O fator de risco que NÃO é utilizado neste escore é:",
      options: ["insuficiência cardíaca congestiva", "hipertensão", "dislipidemia", "doença vascular"],
      answerIndex: 2,
      explanation: "O escore CHA2DS2-VASc inclui Insuficiência Cardíaca, Hipertensão, Idade (Age), Diabetes, AVC prévio (Stroke), Doença Vascular, e Sexo feminino (Sex category). Dislipidemia não faz parte do escore.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2023-q39",
      text: "Com relação ao tratamento do Infarto Agudo do Miocárdio com Elevação do Segmento ST (IAMEST), assinale a afirmativa CORRETA:",
      options: [
        "história de hemorragia cerebral em qualquer época pode ser uma contraindicação ao uso dos agentes fibrinolíticos",
        "os beta-bloqueadores utilizados na fase aguda não têm efeito sobre a extensão do infarto",
        "a adição do clopidogrel ao tratamento com ácido acetilsalicílico não demonstrou reduzir o risco de eventos clinicos",
        "os bloqueadores dos receptores da angiotensina (BRAs) não devem ser utilizados em pacientes com intolerância aos IECAS"
      ],
      answerIndex: 0,
      explanation: "História de AVC hemorrágico em qualquer momento da vida é uma contraindicação absoluta ao uso de fibrinolíticos. A dupla antiagregação (AAS + Clopidogrel) é fundamental. Betabloqueadores reduzem a área de infarto. BRAs são a alternativa aos IECAs.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2023-q40",
      text: "Os critérios do escore Wells ajudam a estimar a probabilidade clinica de TVP e EP. A variável clínica que NÃO é utilizada neste escore é:",
      options: ["edema com cacifo", "edema em toda a perna", "frequência respiratória > 20 irm", "frequência cardiaca > 100 bpm"],
      answerIndex: 2,
      explanation: "O escore de Wells para TVP inclui itens como edema, dor, imobilização, etc. O escore para TEP inclui FC > 100, imobilização, sinais de TVP. A frequência respiratória não faz parte de nenhum dos dois escores.",
      tag: "Pneumologia"
    }
  ]
},

{
  id: "prova-suseme-2022-emergencia-cti-obstetricia",
  name: "SUSEME - Emergência - 2022",
  questions: [
    {
      id: "suseme-2022-q1",
      text: "De acordo com a Constituição de 1988, a seguridade social compreende um conjunto integrado de ações destinadas a assegurar os direitos relativos a:",
      options: [
        "à saúde, à previdência e à assistência social",
        "à saúde, ao bem-estar e à assistência social",
        "à previdência social, à assistência e à equidade",
        "à assistência, à universalidade e à previdência social"
      ],
      answerIndex: 0,
      explanation: "O Art. 194 da Constituição Federal define o tripé da seguridade social, que é composto pela Saúde (para todos, independentemente de contribuição), Previdência Social (para contribuintes) e Assistência Social (para quem dela necessitar).",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q2",
      text: "Com base no Art. 200 da Constituição, compete ao Sistema Único de Saúde (SUS):",
      options: [
        "participar da formulação de ações de vigilância sanitária e epidemiológica",
        "incrementar, em sua área de atuação, o desenvolvimento científico e tecnológico e a inovação",
        "colaborar na fiscalização e inspeção de alimentos, como bebidas e água para consumo humano",
        "ordenar e participar da formação de política de recursos humanos nas ações de saúde do trabalhador"
      ],
      answerIndex: 1,
      explanation: "Além das ações assistenciais, o Art. 200 estabelece que compete ao SUS incrementar o desenvolvimento científico e tecnológico na área da saúde. As outras opções estão incorretas ou incompletas em sua formulação.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q3",
      text: "A Lei nº 8.080/90 atribui a competência de controlar e fiscalizar os procedimentos dos serviços privados de saúde à direção do SUS na esfera de poder:",
      options: ["regional", "nacional", "estadual", "municipal"],
      answerIndex: 3,
      explanation: "Seguindo o princípio da descentralização, a gestão e fiscalização dos serviços de saúde, incluindo os privados contratados, é de competência da direção municipal do SUS, que está mais próxima da realidade local.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q4",
      text: "No âmbito do SUS, os cargos e funções de chefia, direção e assessoramento só poderão ser exercidos em regime:",
      options: ["de tempo parcial", "de tempo integral", "de tempo concomitante", "de dedicação exclusiva"],
      answerIndex: 1,
      explanation: "O Art. 28 da Lei 8.080/90 estabelece que os cargos de chefia, direção e assessoramento no SUS devem ser exercidos preferencialmente em regime de tempo integral.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q5",
      text: "As receitas geradas no âmbito do SUS, movimentadas pela sua direção, serão creditadas diretamente em contas:",
      options: ["públicas", "especiais", "vinculadas", "do tesouro"],
      answerIndex: 1,
      explanation: "O § 2º do Art. 32 da Lei 8.080/90 determina que as receitas sejam depositadas em contas especiais, garantindo que os recursos sejam utilizados exclusivamente nas ações de saúde da respectiva esfera de governo.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q6",
      text: "É vedada a transferência de recursos para o financiamento de ações não previstas nos planos de saúde, EXCETO em situações:",
      options: [
        "urgentes ou de emergência",
        "prioritárias ou de impedimento",
        "de necessidade ou de atenção",
        "emergenciais ou de calamidade pública"
      ],
      answerIndex: 3,
      explanation: "A Lei 8.080/90 permite a flexibilização do uso dos recursos para ações não previstas no plano de saúde apenas em situações excepcionais, como emergências ou estado de calamidade pública.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q7",
      text: "O Conselho Nacional de Secretários de Saúde (Conass) e o Conselho Nacional de Secretários Municipais de Saúde (Conasems) terão representação:",
      options: [
        "no Conselho de Ética",
        "na Secretaria de Saúde",
        "no Conselho Nacional de Saúde",
        "no Conselho Estadual de Saúde"
      ],
      answerIndex: 2,
      explanation: "O Conass e o Conasems, que representam os gestores estaduais e municipais, têm assento garantido no Conselho Nacional de Saúde, participando da formulação e fiscalização da política nacional de saúde.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q8",
      text: "As Conferências de Saúde e os Conselhos de Saúde terão sua organização e suas normas de funcionamento definidas em regimento:",
      options: ["interno, aprovadas pelo colegiado", "único, aprovadas por cada conselho", "específico, aprovadas pelos conselhos", "próprio, aprovadas pelo respectivo conselho"],
      answerIndex: 3,
      explanation: "A Lei 8.142/90 estabelece que cada instância colegiada (Conferência ou Conselho) deve ter seu regimento próprio, aprovado por seus próprios membros, garantindo autonomia de funcionamento.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q9",
      text: "Os recursos do Fundo Nacional de Saúde serão alocados como investimentos previstos em lei orçamentária, de iniciativa do ___ e aprovados pelo Congresso Nacional.",
      options: ["Poder Legislativo", "Poder Executivo", "Ministro da Saúde", "Secretário de Saúde"],
      answerIndex: 1,
      explanation: "A proposta de lei orçamentária é sempre de iniciativa do Poder Executivo (no caso federal, a Presidência da República), que a submete à aprovação do Poder Legislativo (Congresso Nacional).",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q10",
      text: "O conjunto de ações e serviços de saúde, prestados por órgãos e instituições públicas federais, estaduais e municipais, da Administração direta e indireta e das fundações mantidas pelo Poder Público, constitui:",
      options: ["a Secretaria de Saúde", "o Sistema Público de Saúde", "o Sistema Único de Saúde (SUS)", "o Sistema Administrativo de Saúde"],
      answerIndex: 2,
      explanation: "Esta é a definição exata do Sistema Único de Saúde (SUS) conforme o Art. 4º da Lei 8.080/90, abrangendo todas as esferas de governo e entidades públicas.",
      tag: "SUS"
    },
    {
      id: "suseme-2022-q11",
      text: "Gestante de 28 anos apresenta dor pleurítica e dispneia no segundo trimestre da gestação. Sua avaliação evidencia tromboembolia pulmonar. O tratamento a ser indicado é:",
      options: ["heparina de baixo peso molecular", "heparina não fracionada", "varfarina", "aspirina"],
      answerIndex: 0,
      explanation: "A heparina de baixo peso molecular (HBPM) é o anticoagulante de escolha para o tratamento de TEP na gestação, pois é eficaz e não atravessa a barreira placentária. A varfarina é teratogênica e contraindicada.",
      tag: "G.O."
    },
    {
      id: "suseme-2022-q12",
      text: "Feocromocitomas são tumores secretantes de catecolaminas. O principal sintoma para suspeição destes tumores é:",
      options: ["cefaleia", "dispneia", "hipertensão de difícil controle", "edema de membros inferiores"],
      answerIndex: 2,
      explanation: "Embora a tríade clássica seja cefaleia, palpitações e sudorese, a manifestação mais comum e que levanta a suspeita de feocromocitoma é a hipertensão arterial de difícil controle, muitas vezes paroxística.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2022-q13",
      text: "Diarreia é um sintoma muito comum em crianças. O principal agente de gastroenterite esporádica nesta faixa etária é o:",
      options: ["rotavirus", "norovirus", "astrovírus", "herpesvirus"],
      answerIndex: 1,
      explanation: "Enquanto o Rotavírus era a principal causa antes da vacinação, atualmente o Norovírus é o principal agente etiológico de surtos de gastroenterite viral aguda em crianças e adultos.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2022-q14",
      text: "A infecção oportunista mais comum em pacientes HIV+ com contagem de linfócitos T CD4 abaixo de 50 células/mm³ é:",
      options: ["nocardiose", "meningite por Varicela Zoster", "complexo Mycobacterium avium", "meningite por Listeria monocytogenes"],
      answerIndex: 2,
      explanation: "A infecção disseminada pelo Complexo Mycobacterium avium (MAC) é uma doença definidora de AIDS que ocorre tipicamente em pacientes com imunossupressão muito grave, com CD4 < 50 células/mm³.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2022-q15",
      text: "Paciente feminina, 69 anos, apresenta cefaleia de forte intensidade, holocraniana, de início abrupto, 'a pior que já sentiu'. São fatores que sugerem gravidade no relato acima:",
      options: [
        "intensidade da dor e sexo feminino",
        "hipertensão arterial e sexo feminino",
        "idade > 55 anos e intensidade da dor",
        "idade > 55 anos e hipertensão arterial"
      ],
      answerIndex: 2,
      explanation: "Idade acima de 50 anos e uma cefaleia de forte intensidade e início súbito ('thunderclap headache') são importantes 'sinais de alerta' (red flags) que exigem investigação para causas secundárias graves, como hemorragia subaracnóidea.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2022-q16",
      text: "Paciente masculino, 28 anos, com cefaleia de moderada intensidade há dois meses, associada a inapetência, febre baixa vespertina e sudorese noturna. Punção lombar com pleocitose linfocítica e hipoglicorraquia. O diagnóstico provável é:",
      options: ["meningite asséptica", "meningite tuberculosa", "meningite meningocócica", "hemorragia subaracnóidea"],
      answerIndex: 1,
      explanation: "O quadro de meningite subaguda/crônica com sintomas constitucionais, associado a um líquor com pleocitose linfocítica e consumo de glicose (hipoglicorraquia), é a apresentação clássica da meningite tuberculosa.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2022-q17",
      text: "Atonia uterina é a causa mais comum de hemorragia no pós-parto imediato. É um fator de risco para esta complicação:",
      options: ["anemia", "hipotireoidismo", "hiperemese gravidica", "distensão uterina exagerada pela gravidez gemelar"],
      answerIndex: 3,
      explanation: "A sobredistensão uterina (por gemelaridade, polidrâmnio ou macrossomia) é um dos principais fatores de risco para atonia uterina, pois dificulta a contração eficaz do miométrio após o parto.",
      tag: "G.O."
    },
    {
      id: "suseme-2022-q18",
      text: "Paciente, 38 anos, branca, com cansaço, ganho de peso, constipação. Ao exame: edema palpebral, FC 60 bpm, PA 130/100 mmHg, pele seca e macroglossia. O exame complementar mais útil nesse caso é:",
      options: ["TSH", "T4 livre", "T3 livre", "dosagem de antitireoglobulina"],
      answerIndex: 0,
      explanation: "O quadro clínico é altamente sugestivo de hipotireoidismo. O TSH (hormônio estimulante da tireoide) é o exame mais sensível para o diagnóstico de hipotireoidismo primário (a causa mais comum), pois ele se eleva precocemente em resposta à falha da glândula.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2022-q19",
      text: "Paciente masculino, 18 anos, com dor inespecífica periumbilical há 36 horas. Evoluiu com febre, náusea e dor localizada em quadrante inferior direito. O Sinal de McBurney estava presente. O diagnóstico provável é:",
      options: ["colecistite aguda", "apendicite aguda", "pielonefrite aguda", "gastroenterite aguda"],
      answerIndex: 1,
      explanation: "A migração da dor periumbilical para a fossa ilíaca direita, associada a náuseas, febre e dor à palpação no ponto de McBurney, é a apresentação clássica da apendicite aguda.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2022-q20",
      text: "Nas anemias megaloblásticas, as células tendem a ser grandes, com uma proporção aumentada de RNA em relação ao DNA. A principal causa desta condição é a deficiência de:",
      options: ["ferro e zinco", "zinco e folato", "cobalamina e ferro", "cobalamina e folato"],
      answerIndex: 3,
      explanation: "A anemia megaloblástica é causada por um defeito na síntese de DNA, que leva a uma assincronia de maturação núcleo-citoplasmática. As principais causas são a deficiência de cobalamina (vitamina B12) e/ou folato (vitamina B9), que são essenciais para essa síntese.",
      tag: "Hematologia"
    },
    {
      id: "suseme-2022-q21",
      text: "Paciente masculino, 18 anos, após acidente de motocicleta, pontuava 8 na Escala de Coma de Glasgow. A sequência correta para este atendimento é:",
      options: [
        "administrar anticonvulsivante e realizar tomografia de crânio",
        "assegurar acesso calibroso e via aérea com entubação orotraqueal",
        "realizar tomografia de crânio e solicitar avaliação do neurocirurgião",
        "assegurar acesso venoso e observar já que possui reflexo faríngeo preservado"
      ],
      answerIndex: 1,
      explanation: "Um paciente com Glasgow ≤ 8 tem indicação de intubação orotraqueal para proteção de via aérea. Seguindo o ABCDE do trauma, a garantia da via aérea (A) e a obtenção de um acesso venoso calibroso (C) são prioridades imediatas.",
      tag: "Trauma"
    },
    {
      id: "suseme-2022-q22",
      text: "O fator de risco modificável que está relacionado ao aumento de risco no AVE isquêmico é a:",
      options: ["desnutrição", "idade avançada", "anemia falciforme", "hipertensão arterial"],
      answerIndex: 3,
      explanation: "A hipertensão arterial sistêmica é o principal fator de risco modificável para o acidente vascular cerebral, tanto isquêmico quanto hemorrágico. Idade e anemia falciforme são fatores não modificáveis ou de difícil modificação.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2022-q23",
      text: "A principal etiologia do hematoma intraparenquimatoso (AVE hemorrágico) com localização talâmica é:",
      options: ["vasculite", "hipertensão", "oclusão de grandes vasos", "oclusão de pequenos vasos"],
      answerIndex: 1,
      explanation: "A hipertensão arterial crônica é a principal causa de AVC hemorrágico intraparenquimatoso, especialmente em localizações profundas como tálamo, putâmen, ponte e cerebelo, devido à ruptura de pequenos vasos perfurantes (lipohialinose).",
      tag: "Neurologia"
    },
    {
      id: "suseme-2022-q24",
      text: "Sobre a trombólise venosa no AVE isquêmico, é correto afirmar que:",
      options: [
        "a profilaxia secundária deve ser administrada logo após o término do trombolítico",
        "deve-se assegurar acesso venoso profundo, cateter vesical de demora e sonda nasoenteral logo que o trombolítico seja finalizado",
        "caso o paciente apresente cefaleia e vômitos durante a infusão, deve-se administrar analgésico e aumentar a velocidade de infusão",
        "caso o paciente apresente cefaleia intensa e rebaixamento do nível de consciência, a medicação deve ser suspensa e tomografia de crânio prontamente realizada"
      ],
      answerIndex: 3,
      explanation: "A piora neurológica durante ou após a infusão do trombolítico levanta a forte suspeita de transformação hemorrágica, a complicação mais temida. A conduta é interromper imediatamente a infusão e realizar uma TC de crânio de emergência.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2022-q25",
      text: "São critérios de EXCLUSÃO ABSOLUTA para trombólise venosa no AVE isquêmico:",
      options: [
        "idade maior que 80 anos",
        "uso de marevan com INR<1,5",
        "início dos sintomas há menos de 3 horas da avaliação",
        "tomografia de admissão evidenciando hipodensidade extensa em território de artéria cerebral média"
      ],
      answerIndex: 3,
      explanation: "A presença de uma área de hipodensidade extensa (envolvendo mais de 1/3 do território da artéria cerebral média) na TC inicial é uma contraindicação absoluta à trombólise, pois indica um infarto já estabelecido com alto risco de sangramento.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2022-q26",
      text: "Paciente com eletrocardiograma apresentando supradesnivelamento do segmento ST em parede inferior associado à hipotensão. Neste caso, a extensão do infarto agudo está geralmente associada com infarto de:",
      options: ["parede lateral", "parede anterior", "ventrículo direito", "parede anteroseptal"],
      answerIndex: 2,
      explanation: "O infarto agudo do miocárdio de parede inferior, especialmente quando associado a hipotensão e choque, frequentemente se estende para o ventrículo direito, pois a artéria coronária direita irriga ambas as paredes.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2022-q27",
      text: "A miocardite tem sido mais comumente encontrada nos dias atuais e apresenta várias características, EXCETO:",
      options: [
        "podem ser causas de insuficiência cardíaca aguda e crônica",
        "um dos agentes etiológicos mais frequentes é o Trypanosoma cruzi",
        "o tratamento com imunossupressores determina melhora da sobrevida em todos os pacientes",
        "pode resultar de múltiplas causas, mais comumente atribuido a agentes infecciosos"
      ],
      answerIndex: 2,
      explanation: "A miocardite por T. cruzi (Doença de Chagas) é uma causa importante de miocardiopatia crônica, mas não é o agente mais frequente de miocardite aguda. A imunossupressão não melhora a sobrevida em todos os casos e é indicada apenas em cenários específicos, como na miocardite de células gigantes.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2022-q28",
      text: "Um paciente dá entrada na emergência com hemorragia digestiva alta, história pregressa de hipertensão portal e de varizes esofágicas. O exame diagnóstico a ser solicitado de preferência, neste caso, é:",
      options: ["tomografia computadorizada", "endoscopia digestiva alta", "ressonância magnética", "ultrassonografia"],
      answerIndex: 1,
      explanation: "A endoscopia digestiva alta (EDA) é o exame de escolha na hemorragia digestiva alta, pois permite não apenas confirmar a causa do sangramento (neste caso, provável ruptura de varizes esofágicas), mas também realizar o tratamento hemostático na mesma hora.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2022-q29",
      text: "São considerados critérios de diagnóstico de diabetes mellitus, EXCETO:",
      options: [
        "a presença de sintomas clássicos (poliúria, polidipsia e perda de peso) associados a glicosúria já é considerado diagnóstico",
        "glicose plasmática em jejum (de pelo menos 8h) ≥ 126 mg/dL",
        "glicose plasmática em 2h durante o TOTG ≥ 200 mg/dL",
        "hemoglobina A1c ≥ 6,5%"
      ],
      answerIndex: 0,
      explanation: "A presença de sintomas clássicos associada a uma glicemia casual ≥ 200 mg/dL fecha o diagnóstico. A glicosúria isolada, sem a medida da glicemia, não é um critério diagnóstico formal.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2022-q30",
      text: "Não é um marcador considerado de gravidade na admissão ou dentro de 24 horas nos casos de pancreatite aguda:",
      options: [
        "hemodiluição (hematócrito < 38%)",
        "contagem de leucócitos > 12.000/µL",
        "temperatura central < 36°C ou > 38°C",
        "frequência cardiaca > 90 batimentos/min"
      ],
      answerIndex: 0,
      explanation: "A hemoconcentração (aumento do hematócrito), e não a hemodiluição, é um marcador de gravidade na pancreatite aguda, pois reflete o grande sequestro de líquido para o terceiro espaço. As outras opções são critérios da Síndrome da Resposta Inflamatória Sistêmica (SIRS), que indicam gravidade.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2022-q31",
      text: "Gastrinomas causam uma superprodução do hormônio gastrina, que produz um aumento na secreção de ácido gástrico, levando a complicações caracterizadas pela Síndrome de:",
      options: ["Zollinger-Ellison", "Claud Bernard", "Mallory-Weiss", "Horner"],
      answerIndex: 0,
      explanation: "A Síndrome de Zollinger-Ellison é caracterizada pela tríade de hipersecreção gástrica ácida, úlceras pépticas graves e recorrentes, e um gastrinoma (tumor produtor de gastrina), geralmente localizado no pâncreas ou duodeno.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2022-q32",
      text: "Com relação a toxemia gravídica, é correto afirmar que:",
      options: [
        "ocorre convulsão nas formas leves",
        "ocorre principalmente em multiparas",
        "incide em mais de 70% das grávidas",
        "costuma a ocorrer na segunda metade da gestação"
      ],
      answerIndex: 3,
      explanation: "A pré-eclâmpsia (toxemia gravídica) é uma doença que se manifesta tipicamente após a 20ª semana de gestação. Convulsão (eclâmpsia) é um sinal de gravidade. É mais comum em primigestas. A incidência é de cerca de 5-10%.",
      tag: "G.O."
    },
    {
      id: "suseme-2022-q33",
      text: "Dentre as características da gravidez tubária pode-se afirmar, EXCETO:",
      options: [
        "o quadro clinico mais comum é o subagudo",
        "na forma aguda da gravidez tubária o tratamento é cirúrgico",
        "a gravidez ovariana é comum, representando 50% das formas ectópicas",
        "o diagnóstico costuma a ser feito por ultrassonografia transvaginal e beta HCG"
      ],
      answerIndex: 2,
      explanation: "A gravidez ovariana é uma forma muito rara de gravidez ectópica, correspondendo a menos de 3% dos casos. A localização mais comum é a tubária (>95%).",
      tag: "G.O."
    },
    {
      id: "suseme-2022-q34",
      text: "A maioria das crianças maiores e adultos infectados com a dengue apresenta aparecimento súbito de febre, com rápida elevação da temperatura, geralmente acompanhada de dor frontal ou retrorbital, sendo, nestes casos, recomendado como tratamento inicial:",
      options: ["aspirina", "ampicilina", "azatioprina", "suporte somente (hidratação, antitermicos e analgésicos)"],
      answerIndex: 3,
      explanation: "O tratamento da dengue não complicada é de suporte, baseado em hidratação oral vigorosa, repouso e uso de sintomáticos como paracetamol ou dipirona para febre e dor. Aspirina e outros AINEs são contraindicados pelo risco de sangramento.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2022-q35",
      text: "Pode ser considerada como uma causa de insuficiência renal aguda do tipo pré-renal:",
      options: ["ureterocele", "hemorragia", "rabdomiólise", "necrose tubular aguda"],
      answerIndex: 1,
      explanation: "A insuficiência renal pré-renal é causada pela hipoperfusão dos rins. A hemorragia leva à hipovolemia e consequente queda da perfusão renal. Rabdomiólise e NTA são causas renais (intrínsecas). Ureterocele é causa pós-renal.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2022-q36",
      text: "Com relação aos padrões de fraturas pediátricas, NÃO pode-se afirmar que:",
      options: [
        "deformações plásticas ocorrem exclusivamente em crianças",
        "a maioria das fraturas pediátricas devem ser tratadas através de cirurgias abertas",
        "a fratura em galho verde ocorre quando o osso está curvado e há falha na face elástica (convexa) do osso",
        "as fraturas de indentação são inerentemente estáveis e cicatrizam em 3 a 4 semanas com imobilização simples"
      ],
      answerIndex: 1,
      explanation: "Ao contrário dos adultos, a grande maioria das fraturas pediátricas é de tratamento conservador (imobilização com gesso), devido ao grande potencial de remodelação óssea da criança. As outras afirmações estão corretas.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2022-q37",
      text: "O exame diagnóstico de escolha para detectar uma embolia pulmonar é:",
      options: [
        "eletrocardiograma",
        "radiografia de tórax",
        "tomografia helicoidal com contraste",
        "cintilografia de ventilação/perfusão"
      ],
      answerIndex: 2,
      explanation: "A Angiotomografia de tórax (tomografia helicoidal com contraste) é o exame padrão-ouro para o diagnóstico de tromboembolismo pulmonar, pois visualiza diretamente os trombos nas artérias pulmonares.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2022-q38",
      text: "O tratamento farmacológico recomendado para giardíase é:",
      options: ["tinidazol", "fluconazol", "amoxicilina", "vancomicina"],
      answerIndex: 0,
      explanation: "O tratamento da giardíase é feito com antiparasitários, sendo os nitroimidazólicos como o tinidazol ou o metronidazol as drogas de primeira escolha. As outras opções são antifúngicos ou antibióticos.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2022-q39",
      text: "Dentre as indicações de cirurgia de urgência no traumatismo torácico, aquela que NÃO é considerada uma necessidade de toracotomia imediata é:",
      options: ["lesão da aorta", "lesão esofágica", "quilotórax persistente", "rotura aguda do diafragma"],
      answerIndex: 2,
      explanation: "O quilotórax (acúmulo de linfa no tórax) geralmente é tratado inicialmente de forma conservadora. A cirurgia é indicada apenas se houver falha no tratamento clínico e débito persistente, não sendo uma indicação de toracotomia de emergência. As outras opções são lesões graves que exigem abordagem imediata.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2022-q40",
      text: "Os patógenos mais comumente encontrados na cervicite são:",
      options: [
        "C. trachomatis e N. gonorrhoeae",
        "mycoplasma e C. albicans",
        "G. vaginalis e ureaplasma",
        "T. vaginalis e lactobacillus"
      ],
      answerIndex: 0,
      explanation: "A cervicite mucopurulenta é uma infecção sexualmente transmissível causada principalmente pela Neisseria gonorrhoeae (gonococo) e pela Chlamydia trachomatis.",
      tag: "G.O."
    }
  ]
},
{
  id: "prova-suseme-2021-emergencia-cti",
  name: "SUSEME - Emergência - 2021",
  questions: [
    {
      id: "suseme-2021-q1",
      text: "Paciente com 58 anos de idade dá entrada em unidade de emergência com quadro de tosse, febre 40°C, expectoração amarelada e dor pleurítica. A tomografia computadorizada de tórax mostra condensação alveolar com presença de broncograma aéreo. Os achados clinicos radiológicos sugerem:",
      options: [
        "pneumonia bacteriana adquirida na comunidade",
        "pneumonia viral adquirida na comunidade",
        "sindrome de derrame pleural",
        "tromboembolismo pulmonar"
      ],
      answerIndex: 0,
      explanation: "O quadro de febre alta, tosse produtiva, dor pleurítica e, principalmente, a presença de uma consolidação com broncogramas aéreos na imagem, são a apresentação clássica de uma pneumonia bacteriana típica.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2021-q2",
      text: "Médico, durante atendimento em emergência, é exposto a material biológico do vírus HIV, em atendimento a paciente sabidamente portador do virus, e deve iniciar de imediato a profilaxia pós-exposição (PEP) de risco. De acordo com o protocolo clinico do Ministério da Saúde, o esquema terapêutico a ser utilizado é:",
      options: [
        "tenofovir + lamivudina + dolutegravir duração de 28 dias",
        "darunavir + dolutegravir + zidovudina duração 30 dias",
        "lamivudina + efavirenz + atazanavir duração 30 dias",
        "zidovudina + ritonavir + efavirenz duração 28 dias"
      ],
      answerIndex: 0,
      explanation: "O esquema preferencial de primeira linha para a Profilaxia Pós-Exposição (PEP) ao HIV, recomendado pelo Ministério da Saúde, é a combinação de Tenofovir + Lamivudina (TDF/3TC) com o Dolutegravir (DTG), mantido por 28 dias.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q3",
      text: "Paciente do sexo masculino, 55 anos, é atendido em emergência com dor em fossa iliaca direita, febre 38°C, dor abdominal após descompressão súbita, sugestiva de apendicite aguda. O exame de imagem que deve ser solicitado, por sua maior acurácia, é:",
      options: [
        "radiografia simples do abdome",
        "ultrassonografia abdominal total e pélvica",
        "tomografia computadorizada abdominal total e pélvica",
        "ressonância nuclear magnética abdominal total e pélvica"
      ],
      answerIndex: 2,
      explanation: "Embora a ultrassonografia seja frequentemente o exame inicial, a Tomografia Computadorizada de abdome e pelve com contraste é o exame com maior sensibilidade e especificidade para o diagnóstico de apendicite aguda em adultos, especialmente para avaliar complicações como abscessos ou perfuração.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2021-q4",
      text: "Paciente do sexo masculino, 33 anos, com dor torácica de forte intensidade em região precordial. Exames cardíacos normais. Ao exame físico, atrito pericárdico e febre. O tratamento instituído deve ser:",
      options: [
        "colchicina e anti-inflamatório não esteroide via oral",
        "corticoide via oral associado com antibioticoterapia venosa",
        "aspirina em baixas doses associada com corticoide via oral",
        "oseltamivir (tamiflu) oral associado com enoxaparina subcutânea"
      ],
      answerIndex: 0,
      explanation: "O quadro é de pericardite aguda idiopática (provavelmente viral). O tratamento de primeira linha baseia-se na combinação de um anti-inflamatório não esteroidal (AINE) em altas doses com a colchicina, para alívio dos sintomas e prevenção de recorrências.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2021-q5",
      text: "Paciente do sexo feminino, 58 anos, dá entrada em emergência com cefaleia, febre de 39°C e rigidez de nuca. Na punção lombar é firmado o diagnóstico de meningite meningocócica. O antibiótico de escolha que deve ser iniciado de imediato é:",
      options: [
        "meropenem 2,0g endovenoso de 8/8h",
        "ceftriaxone 2,0g endovenoso de 12/12h",
        "vancomicina 1,0g endovenoso de 12/12h",
        "amoxicilina-clavulanato 1,0g endovenoso de 8/8h"
      ],
      answerIndex: 1,
      explanation: "Para o tratamento da meningite meningocócica em adultos, a droga de escolha é uma cefalosporina de terceira geração com boa penetração no sistema nervoso central, como a Ceftriaxona em altas doses (2g de 12/12h).",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q6",
      text: "Paciente sexo feminino, 34 anos, vítima de inalação de fumaça de incêndio, é levada para a emergência com quadro de confusão mental, náuseas, dispneia, configurando intoxicação por cianeto. O antídoto de escolha que deve ser utilizado é a:",
      options: ["n-acetilcisteina via oral", "atropina via endovenosa", "vitamina K por via intramuscular", "hidroxicobalamina via endovenosa"],
      answerIndex: 3,
      explanation: "A hidroxicobalamina é o antídoto de primeira linha para a intoxicação por cianeto. Ela se liga ao cianeto formando cianocobalamina (vitamina B12), que é atóxica e excretada na urina. N-acetilcisteína é para paracetamol, atropina para organofosforados e vitamina K para antagonizar varfarina.",
      tag: "Toxicologia"
    },
    {
      id: "suseme-2021-q7",
      text: "Médico clínico, após diagnóstico de tromboembolismo pulmonar (TEP) em paciente masculino, 59 anos de idade, no sétimo dia de infecção por COVID-19, opta por tratamento com rivaroxabana. A dose que deve ser prescrita é:",
      options: [
        "rivoraxabana 10mg de 12/12h por três semanas, seguida de dose de 30mg dia",
        "rivoraxabana 15 mg de 12/12h por três semanas, seguida de dose de 20mg dia",
        "rivoraxabana 20mg de 12/12h por três semanas, seguida de dose de 10mg dia",
        "rivoraxabana 30mg de 12/12h por três semanas, seguida de dose de 15mg dia"
      ],
      answerIndex: 1,
      explanation: "O esquema de tratamento padrão para TEP com rivaroxabana consiste em uma fase de ataque de 15 mg de 12/12h por 21 dias, seguida por uma fase de manutenção de 20 mg uma vez ao dia.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2021-q8",
      text: "Paciente masculino, 35 anos, soropositivo para infecção por HIV, apresenta-se com dor intensa em região dorsal do tórax e vesículas dispostas em trajeto linear, compatíveis com diagnóstico de herpes-zóster. O tratamento que deve ser iniciado é:",
      options: [
        "800 mg de aciclovir via oral, 5 vezes ao dia, durante 7 dias",
        "aplicar esteroides e opioides por via endovenosa para controle da dor",
        "10 a 15mg de aciclovir por Kg/peso, endovenoso, 3 vezes ao dia por no minimo 7 dias",
        "analgesia venosa e amoxicilina-clavulanato venoso"
      ],
      answerIndex: 2,
      explanation: "Herpes zoster em pacientes imunocomprometidos (como HIV) tem maior risco de disseminação e complicações. Por isso, o tratamento de escolha é com aciclovir endovenoso, em doses mais altas.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q9",
      text: "Paciente apresenta quadro de síndrome de lise tumoral após quimioterapia para leucemia linfoblástica aguda. Nos resultados de exames laboratoriais de emergência, deve-se esperar a presença dos seguintes achados:",
      options: [
        "hiperuricemia, hipercalemia, hipocalcemia e hiperfosfatemia",
        "hipocalemia, hiperglicemia, hipofosfatemia e hipoproteinemia",
        "hiponatremia, hipomagnesemia, hiperuricemia e hipocalcemia",
        "hipercalemia, hipercalcemia, hipomagnesemia e hiperglicemia"
      ],
      answerIndex: 0,
      explanation: "A síndrome de lise tumoral é causada pela destruição maciça de células neoplásicas, que liberam seu conteúdo intracelular na corrente sanguínea. Isso resulta em hiperuricemia (pela degradação de ácidos nucleicos), hipercalemia, hiperfosfatemia e, secundariamente, hipocalcemia (pela quelação do cálcio pelo fósforo).",
      tag: "Oncologia"
    },
    {
      id: "suseme-2021-q10",
      text: "Paciente masculino, 60 anos, com infarto agudo do miocárdio com supradesnivelamento do segmento ST. Uma condição do paciente que constitui uma contraindicação absoluta para terapia fibrinolítica é:",
      options: [
        "encontrar-se hipertenso com pressão sistólica de 170 mmHg",
        "ser portador de doença ulcerosa péptica sem histórico de sangramento",
        "fazer uso regular de dupla agregação plaquetária",
        "ter apresentado no ano anterior quadro de AVE hemorrágico"
      ],
      answerIndex: 3,
      explanation: "Qualquer histórico de acidente vascular cerebral (AVC) hemorrágico, em qualquer época da vida, é uma contraindicação absoluta para o uso de fibrinolíticos devido ao alto risco de ressangramento intracraniano.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2021-q11",
      text: "Paciente de 57 anos, portador de cirrose hepática alcoólica, apresenta quadro de peritonite bacteriana espontânea. A medida capaz de prevenir o desenvolvimento de sindrome hepatorrenal, que deve ser tomada de imediato é iniciar:",
      options: [
        "antibioticoterapia venosa",
        "terapia com diuréticos de alça",
        "reposição de albumina venosa",
        "reposição volêmica com soro fisiológico"
      ],
      answerIndex: 2,
      explanation: "Em pacientes com Peritonite Bacteriana Espontânea (PBE), a reposição de albumina intravenosa, associada à antibioticoterapia, demonstrou reduzir a incidência de disfunção circulatória e da síndrome hepatorrenal, melhorando a sobrevida.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2021-q12",
      text: "Mulher de 72 anos com dispneia e febre. Radiografia com derrame pleural. Após Toracocentese, a drenagem torácica imediata está indicada se:",
      options: [
        "Ldh do liquido pleural < 100 UI/L, proteina do líquido pleural < 2,0 G/L",
        "pH: 7,15, glicose: 35 mg%, ldh: 5000 UI/L, predomínio de polimorfonucleares",
        "pH: 7,30, glicose: 80 mg%, ldh: 800 UI/L, predominio de linfócitos e monócitos",
        "relação entre proteína do liquido pleural e a sérica < 0,5"
      ],
      answerIndex: 1,
      explanation: "Os achados de pH < 7,20, glicose < 40-60 mg/dL e LDH > 1000 UI/L no líquido pleural são indicativos de um derrame parapneumônico complicado ou empiema, que são indicações formais para drenagem torácica imediata.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2021-q13",
      text: "Homem de 55 anos, com lombalgia em uso de diclofenaco, é trazido com hematêmese e melena, hipotenso e taquicárdico. Em relação à Endoscopia Digestiva Alta (EDA), é correto afirmar que:",
      options: [
        "deve ser realizada somente após reposição volêmica e estabilização hemodinâmica",
        "deve ser realizada após tomografia computadorizada de abdome",
        "deve-se realizar EDA, mesmo com a alta instabilidade hemodinâmica",
        "é dispensável a EDA, pois a avaliação clinica permite excluir sangramento ativo"
      ],
      answerIndex: 0,
      explanation: "Na hemorragia digestiva alta, a prioridade é a estabilização hemodinâmica do paciente com reposição volêmica e, se necessário, hemotransfusão. A endoscopia deve ser realizada precocemente (nas primeiras 24h), mas apenas após o paciente estar minimamente estável.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2021-q14",
      text: "Paciente do sexo feminino, 46 anos, com febre alta, calafrios, dor no quadrante superior direito do abdome, ictérica e com alteração do estado mental. A principal hipótese diagnóstica é:",
      options: ["colangite aguda", "colecistite enfisematosa", "abscesso amebiano do figado", "pancreatite aguda necrotizante"],
      answerIndex: 0,
      explanation: "O quadro descrito é a Pêntade de Reynolds (Tríade de Charcot: febre, dor em HCD, icterícia + hipotensão e alteração do estado mental), que é a apresentação clássica da Colangite Aguda, uma infecção grave das vias biliares.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2021-q15",
      text: "Homem, 35 anos, sofre acidente automobilístico. Ao exame: turgência jugular, dispneia; taquicardia 135 bpm e pulso paradoxal. A hipótese diagnóstica mais provável é:",
      options: ["choque cardiogênico", "tamponamento cardiaco", "pneumotórax hipertensivo", "infarto agudo do miocárdio por anemia aguda"],
      answerIndex: 1,
      explanation: "Turgência jugular, taquicardia e hipotensão (choque obstrutivo), associados ao pulso paradoxal (queda da pressão sistólica na inspiração), são sinais clássicos de tamponamento cardíaco, uma emergência no contexto do trauma.",
      tag: "Trauma"
    },
    {
      id: "suseme-2021-q16",
      text: "Homem, 52 anos, com hematêmese, melena e hipotensão (PA 100/60 mmHg), sem comorbidades. O nível inferior de hemoglobina que justificaria correção da anemia aguda com hemotransfusão é:",
      options: ["7 g/dL", "6 g/dL", "8 g/dL", "9 g/dL"],
      answerIndex: 0,
      explanation: "As diretrizes atuais para hemorragia digestiva recomendam uma estratégia transfusional restritiva, indicando a hemotransfusão quando o nível de hemoglobina cai para 7 g/dL ou menos em pacientes estáveis e sem comorbidades cardíacas.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2021-q17",
      text: "Um dilema diagnóstico frequente é a distinção entre crise convulsiva e síncope. As características que sugerem, mais fortemente, a hipótese diagnóstica de crise convulsiva são:",
      options: [
        "presença de sudorese; náusea e distúrbios da visão",
        "episódio provocado por dor intensa; estresse emocional ou por mudança de decúbito",
        "presença de cefaleia; manifestações motoras que duram menos de 15 segundos e palidez",
        "presença de cianose; inconsciência; manifestações motoras que duram mais de 15 segundos"
      ],
      answerIndex: 3,
      explanation: "Características que apontam para uma crise epiléptica incluem duração mais longa dos abalos (>15s), cianose central, mordedura de língua lateral, confusão pós-ictal prolongada. As outras opções descrevem características típicas de síncope (pródromos vasovagais, gatilhos específicos, recuperação rápida).",
      tag: "Neurologia"
    },
    {
      id: "suseme-2021-q18",
      text: "Constitui-se elemento fundamental para diagnóstico de peritonite bacteriana espontânea em paciente cirrótico, com ascite, a presença de:",
      options: [
        "deterioração rápida da função renal e hepática",
        "quadro clinico de dor e tensão de parede abdominal",
        "proteinas do líquido ascítico em concentração inferior a 1,0 g/dl",
        "contagem de polimorfonucleares acima de 250/mm³ no líquido ascítico"
      ],
      answerIndex: 3,
      explanation: "O diagnóstico definitivo de Peritonite Bacteriana Espontânea (PBE) é estabelecido pela contagem de polimorfonucleares (PMN) no líquido ascítico ≥ 250 células/mm³, independentemente dos sintomas ou da cultura. As outras opções são sugestivas, mas não diagnósticas.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2021-q19",
      text: "Paciente de 60 anos, tabagista, com dispneia, cefaleia e náuseas. TC de tórax mostra massa em ápice de lobo superior direito. Exame físico com edema de face, edema de membro superior direito, turgência jugular fixa e circulação colateral. Diante desse quadro a conduta deve ser:",
      options: [
        "encaminhar a paciente com urgência para realização de radioterapia",
        "iniciar corticoide venoso e uso de morfina venosa para alívio dos sintomas",
        "iniciar imediatamente diuréticos e corticoide venoso para alivio dos sintomas",
        "iniciar anticoagulação plena com enoxaparina e quimioterapia sistêmica de imediato"
      ],
      answerIndex: 2,
      explanation: "O quadro é de Síndrome da Veia Cava Superior, uma emergência oncológica. O tratamento inicial visa o alívio dos sintomas de compressão, sendo feito com elevação da cabeceira, oxigenoterapia, corticoides (para reduzir edema e inflamação) e diuréticos.",
      tag: "Oncologia"
    },
    {
      id: "suseme-2021-q20",
      text: "Paciente do sexo feminino, 62 anos, é levada ao setor de emergência com sangramento via retal. A principal causa etiológica do sangramento nessa faixa de idade é:",
      options: ["angiodisplasia do cólon", "neoplasia maligna do cólon", "doença diverticular do cólon", "doença inflamatória intestinal"],
      answerIndex: 2,
      explanation: "A doença diverticular do cólon é a causa mais comum de hemorragia digestiva baixa maciça em pacientes idosos, ocorrendo pela erosão de arteríolas na parede dos divertículos.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2021-q21",
      text: "Trabalhador de construção civil sofreu queda de 5 metros. Relatou diminuição da força dos membros inferiores. TC da coluna revelou fratura tipo explosão no corpo vertebral de T12. Sobre esse caso, é correto afirmar que:",
      options: [
        "o reflexo bulbocavernoso, estando ausente, denota que a lesão é completa",
        "lesão incompleta é aquela em que o paciente conserva a capacidade de deambular",
        "deve ser iniciado o protocolo de corticosteroide após 8 horas do acidente",
        "a dose inicial de corticosteroide deve ser administrada em 15 minutos e mantida por 24 horas"
      ],
      answerIndex: 3,
      explanation: "Embora o uso de corticoide no trauma raquimedular seja controverso, o protocolo clássico (NASCIS) preconiza um bolus inicial de metilprednisolona (30 mg/kg) em 15 minutos, seguido por uma infusão de manutenção (5,4 mg/kg/h) pelas próximas 23 horas, se iniciado nas primeiras 8 horas do trauma.",
      tag: "Trauma"
    },
    {
      id: "suseme-2021-q22",
      text: "Jovem ciclista sofreu fratura exposta nos ossos da perna. No pós-operatório tardio, ao realizar uma radiografia de controle, percebeu-se a presença de gás subcutâneo. Além do Clostridium perfringens, outro microrganismo produtor de gás é:",
      options: ["Pseudomonas aeruginosa", "Azotobacter vinelandii", "Bacillus anthracis", "Escherichia coli"],
      answerIndex: 3,
      explanation: "A Escherichia coli é uma bactéria anaeróbia facultativa que, em certas condições de infecção de tecidos moles, pode fermentar carboidratos e produzir gás, levando a quadros de infecção necrotizante com gás subcutâneo (gangrena gasosa).",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q23",
      text: "Senhora de 60 anos com dedo polegar direito flexionado, sem trauma, que 'trava' com dor e estalo. Trata-se de:",
      options: [
        "uma manifestação comum à síndrome do túnel do carpo",
        "dedo em gatilho secundário, que é a forma mais comum",
        "um dedo em gatilho, com caracteristicas comuns ao grupo etário e sexo da paciente",
        "uma patologia que regride totalmente com massagem e gelo"
      ],
      answerIndex: 2,
      explanation: "O fenômeno de 'travamento' do dedo em flexão, com dor e estalido, é a apresentação clássica do Dedo em Gatilho, uma tenossinovite estenosante do tendão flexor, mais comum em mulheres de meia-idade.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2021-q24",
      text: "A manifestação clinica mais ordinária na sindrome do túnel do carpo é a:",
      options: ["dor", "anestesia", "parestesia", "atrofia muscular"],
      answerIndex: 2,
      explanation: "O sintoma mais precoce e característico da Síndrome do Túnel do Carpo é a parestesia (formigueiro, dormência) noturna na distribuição do nervo mediano (polegar, indicador, médio e metade do anelar).",
      tag: "Neurologia"
    },
    {
      id: "suseme-2021-q25",
      text: "O mal de Pott consiste numa infecção nas vértebras por Mycobacterium tuberculosis. Nessa condição, a região da coluna mais afetada é a:",
      options: ["cervical", "torácica alta", "lombo-sacral", "transição toracolombar"],
      answerIndex: 3,
      explanation: "A espondilodiscite tuberculosa (Mal de Pott) tem uma predileção pela transição toracolombar (T10-L2), uma área de grande mobilidade e carga da coluna vertebral.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q26",
      text: "Criança com gesso no antebraço há 24h, apresenta dores intensas que impedem de estender os dedos, edema e cianose. O diagnóstico e os músculos mais acometidos são:",
      options: [
        "sindrome compartimental; superficial dos dedos e longo do polegar",
        "osteomielite aguda; superficial dos dedos e radial do carpo",
        "trombose venosa; profundo dos dedos e radial do carpo",
        "sindrome compartimental do antebraço; flexor profundo dos dedos e longo do polegar"
      ],
      answerIndex: 3,
      explanation: "O quadro é clássico de Síndrome Compartimental do antebraço. A dor à extensão passiva dos dedos é o sinal mais sensível. Os músculos do compartimento flexor profundo, como o flexor profundo dos dedos e o flexor longo do polegar, são os mais comumente e gravemente afetados.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2021-q27",
      text: "O percentual de índice de morte é maior no seguinte grupo de pacientes politraumatizados:",
      options: ["idosos", "adultos", "crianças", "adolescentes"],
      answerIndex: 0,
      explanation: "Pacientes idosos têm menor reserva fisiológica para responder ao estresse do trauma e das cirurgias, além de maior prevalência de comorbidades, o que resulta em taxas de mortalidade significativamente maiores em comparação com pacientes mais jovens com o mesmo grau de lesão.",
      tag: "Trauma"
    },
    {
      id: "suseme-2021-q28",
      text: "Uma criança no periodo neonatal com dor e limitação articular no membro inferior direito. O agente causador mais comumente encontrado no diagnóstico de osteomielite e artrite séptica e o antibiótico indicado são, respectivamente:",
      options: [
        "E coli/ceftriaxone",
        "S aureus / oxacilina",
        "H influenza / ciprofloxacino",
        "K kingae/penicilina cristalina"
      ],
      answerIndex: 1,
      explanation: "No período neonatal, o Staphylococcus aureus é o principal agente etiológico da osteoartrite hematogênica. O tratamento empírico de escolha é com uma penicilina resistente à penicilinase, como a oxacilina, frequentemente associada a um aminoglicosídeo.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2021-q29",
      text: "Um dos princípios fundamentais para o tratamento de pacientes politraumatizados é o controle de danos. O retardamento da fixação definitiva de uma fratura femoral beneficia a recuperação no seguinte cenário:",
      options: [
        "fratura femural bilateral",
        "fratura femural e trauma torácico",
        "fratura femural e trauma abdominal",
        "fratura femural e fratura nos membros superiores"
      ],
      answerIndex: 1,
      explanation: "A cirurgia de controle de danos preconiza uma abordagem inicial rápida para estabilizar o paciente ('paciente borderline'), adiando a correção definitiva. Em um paciente com trauma torácico grave associado, uma cirurgia longa para a fratura do fêmur poderia piorar a lesão pulmonar. A fixação externa provisória é preferível.",
      tag: "Trauma"
    },
    {
      id: "suseme-2021-q30",
      text: "Em relação à síndrome do túnel do carpo é correto afirmar que:",
      options: [
        "os sintomas são piores durante o dia e melhoram à noite",
        "alterações metabólicas são comumente observadas nos quadros unilaterais",
        "o uso de muletas por portadores de necessidade especial predispõe o quadro",
        "o tratamento conservador com órteses com as mãos em flexão discreta melhoram o quadro"
      ],
      answerIndex: 2,
      explanation: "O uso de muletas pode levar à compressão crônica do nervo mediano no túnel do carpo, sendo um fator de risco para o desenvolvimento da síndrome. Órteses devem ser usadas em posição neutra. Sintomas são piores à noite. Alterações metabólicas (diabetes, hipotireoidismo) causam quadros bilaterais.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2021-q31",
      text: "A chikungunya é uma doença viral transmitida por mosquitos, com relação à qual é correto afirmar que:",
      options: [
        "na região das Américas, até o momento, a letalidade por dengue é menor que a observada por chikungunya",
        "os casos graves e óbitos ocorrem com maior frequência em pacientes sem comorbidades",
        "a maioria dos individuos infectados pelo CHIKV desenvolve sintomas, alguns estudos mostram que até 70% apresentam infecção sintomática",
        "a fase aguda ou febril da doença é caracterizada por febre leve de inicio insidioso"
      ],
      answerIndex: 2,
      explanation: "Ao contrário da dengue, onde a maioria das infecções é assintomática, a Chikungunya tem uma alta taxa de ataque sintomático, com a maioria dos infectados desenvolvendo a doença. A letalidade da dengue grave é maior. Casos graves de Chikungunya ocorrem em extremos de idade e com comorbidades.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q32",
      text: "A febre chikungunya é uma arbovirose causada pelo virus Chikungunya (CHIKV). Sobre essa doença, pode-se afirmar que:",
      options: [
        "a transmissão ocorre pela picada de machos dos mosquitos Ae. Aegypti e Ae. albopictus",
        "os sinais e os sintomas são clinicamente parecidos com os da dengue: febre de inicio agudo, dores articulares e musculares, cefaleia, náusea, fadiga e exantema. A principal manifestação clínica que as difere são as fortes dores nas articulações",
        "a ocorrência de epidemia da doença no Brasil ainda é rara",
        "outro fator que dificulta a propagação da doença é a presença de poucos individuos susceptíveis"
      ],
      answerIndex: 1,
      explanation: "A afirmação B descreve perfeitamente o quadro clínico. A principal característica que distingue a Chikungunya é a intensidade da poliartralgia/artrite. Apenas as fêmeas dos mosquitos picam. Já ocorreram grandes epidemias no Brasil.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q33",
      text: "Sobre o atendimento ao paciente com dengue pode-se afirmar que:",
      options: [
        "somente após a confirmação diagnóstica deve-se notificar",
        "a primeira manifestação é a febre, geralmente baixa de inicio lento",
        "os sinais de alarme são irrelevantes tendo em vista a evolução para dengue hemorrágica",
        "todo paciente com doença febril aguda com duração de até sete dias, acompanhada de pelo menos dois sintomas como cefaleia, dor retro-orbitária, mialgias, deve ser considerado como possivel portador"
      ],
      answerIndex: 3,
      explanation: "A opção D descreve corretamente a definição de caso suspeito de dengue, que é fundamental para a vigilância epidemiológica e manejo inicial. A notificação de casos suspeitos é obrigatória. Os sinais de alarme são cruciais. A febre é alta e de início súbito.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q34",
      text: "Sobre o quadro clínico da dengue, é correto afirmar que:",
      options: [
        "é desnecessária a avaliação do segmento abdominal",
        "a verificação do tempo do enchimento capilar não é um parâmetro digno de confiança",
        "normalmente não é necessário ter maiores cuidados com o sistema nervoso",
        "diferentemente do que ocorre em outras doenças que levam ao choque, na dengue, antes de haver uma queda substancial na pressão arterial sistólica, poderá haver um fenômeno de pinçamento da pressão arterial"
      ],
      answerIndex: 3,
      explanation: "A pressão arterial convergente, ou pinçamento da pressão de pulso (diferença entre sistólica e diastólica ≤ 20 mmHg), é um sinal precoce e importante de choque na dengue, que precede a hipotensão franca.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q35",
      text: "A hanseníase é uma doença de notificação compulsória. Sobre essa doença, é correto afirmar que:",
      options: [
        "considera-se caso de hanseníase a pessoa que apresenta um ou mais dos seguintes sinais: lesão de pele com alteração de sensibilidade, espessamento de nervo periférico e/ou baciloscopia positiva",
        "a reação tipo 1 ou reação reversa caracteriza-se pelo eritema nodoso hansênico (ENH)",
        "estima-se que 30% da população possua defesa natural contra o M. leprae",
        "o tratamento é realizado em regime de internação compulsória"
      ],
      answerIndex: 0,
      explanation: "A opção A descreve perfeitamente os três sinais cardinais utilizados para o diagnóstico da hanseníase. A presença de apenas um deles já é suficiente para confirmar o caso e iniciar o tratamento. O ENH é a reação tipo 2. A maioria da população (cerca de 90%) tem imunidade.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q36",
      text: "Sobre a tuberculose (TB), é verdadeiro afirmar que:",
      options: [
        "as pessoas que têm contatos duradouros com pacientes com TB pulmonar, BAAR positivo, são menos vulneráveis",
        "a baciloscopia de escarro de controle não serve como parâmetro para a avaliação de risco para os contatos",
        "qualquer uma das espécies que integram o complexo Mycobacterium tuberculosis pode ocasioná-la. Em saúde pública, a mais importante é a M. tuberculosis, conhecida como bacilo de Koch",
        "os bacilos que se depositam em roupas, lençóis, copos têm papel crucial na transmissão"
      ],
      answerIndex: 2,
      explanation: "O complexo M. tuberculosis inclui várias espécies capazes de causar doença, mas a M. tuberculosis é, de longe, a mais importante para a saúde pública humana. A transmissão por fômites (objetos) é extremamente rara; a transmissão é aérea.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q37",
      text: "Sobre os fatores sociais que levam à tuberculose, sabe-se que:",
      options: [
        "os progressos nos determinantes sociais da saúde não tiveram nenhum efeito na saúde dos brasileiros",
        "a transmissão e adoecimento por TB são influenciados por fatores demográficos, sociais e econômicos, como urbanização desordenada, desigualdade de renda e moradias precárias",
        "as estratégias de controle da TB devem ser desenvolvidas apenas pelas Prefeituras",
        "A Estratégia pelo Fim da Tuberculose propõe a exclusão de intervenções socioeconômicas"
      ],
      answerIndex: 1,
      explanation: "A tuberculose é uma doença fortemente determinada por fatores sociais. A opção B lista corretamente os principais determinantes que criam um ambiente propício para a transmissão e o adoecimento, como aglomeração, pobreza e dificuldade de acesso à saúde.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q38",
      text: "Na etiopatogenia da tuberculose observa-se que:",
      options: [
        "alguns segmentos populacionais são mais vulneráveis como pescadores",
        "o principal reservatório é o homem; outros possíveis reservatórios são gado bovino, primatas, aves e outros mamíferos",
        "a suscetibilidade à infecção é praticamente universal; todos os expostos se infectam",
        "uma das formas mais comuns de transmissão é por transfusão sanguínea"
      ],
      answerIndex: 1,
      explanation: "O principal reservatório do M. tuberculosis é o ser humano. Outros animais podem ser reservatórios de outras espécies do complexo, como o M. bovis no gado. A infecção não ocorre em todos os expostos e a transmissão não é sanguínea.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q39",
      text: "Em relação à sindrome da imunodeficiência adquirida (Sida/Aids), é correto afirmar que:",
      options: [
        "é impossível afirmar que o tratamento possa ser usado como uma forma de prevenção eficaz",
        "os medicamentos antirretrovirais transformaram a infecção quase sempre fatal de antes em condição crônica controlável, embora ainda incurável",
        "é impossivel, no Brasil, serem ainda consideradas como populações-chave gays e HSH, mulheres profissionais do sexo, travestis, transexuais e pessoas que usam drogas",
        "a boa adesão à TARV não gerou beneficios individuais"
      ],
      answerIndex: 1,
      explanation: "A opção B descreve com precisão o impacto da terapia antirretroviral (TARV), que transformou a AIDS de uma sentença de morte em uma condição crônica manejável. O tratamento como prevenção (TasP) é uma estratégia eficaz. As populações citadas ainda são consideradas chave.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2021-q40",
      text: "Sobre as manifestações comuns à dengue, pode-se afirmar que:",
      options: [
        "a insuficiência renal aguda é muito frequente",
        "os sinais de alarme são: dor abdominal intensa, vômitos persistentes, acúmulo de liquidos, hipotensão postural, hepatomegalia, sangramento de mucosa, letargia e aumento progressivo do hematócrito",
        "a primeira manifestação é a febre, geralmente baixa e de início lento",
        "o exantema está presente em 10% dos casos"
      ],
      answerIndex: 1,
      explanation: "A opção B lista corretamente os principais sinais de alarme da dengue, que devem ser ativamente procurados na fase de defervescência da febre. A febre é alta e de início súbito, o exantema ocorre em cerca de 50% dos casos e a IRA é incomum.",
      tag: "Infectologia"
    }
  ]
},
{
  id: "prova-suseme-2020-emergencia-cti",
  name: "SUSEME - Emergência - 2020",
  questions: [
    {
      id: "suseme-2020-q1",
      text: "Paciente, de 19 anos de idade, dá entrada na emergência com história de diarreia liquida sem muco ou sangue, seis episódios/dia, há 72h. Ao exame apresenta-se corado, com mucosas úmidas, saliva fluida e diurese presente. A melhor conduta, nesse caso, é:",
      options: [
        "internar para administração de solução de hidratação venosa de soro fisiológico",
        "deixar em observação na emergência para terapia de reidratação oral com sais de hidratação",
        "orientar aumento de ingesta hídrica, administrar sais de reidratação oral, orientar sinais de desidratação e fazer zinco por dez dias",
        "orientar aumento de ingesta hídrica, administrar sais de reidratação oral, orientar sinais de desidratação e fazer antidiarreico por 10 dias"
      ],
      answerIndex: 2,
      explanation: "O paciente apresenta diarreia aguda sem sinais de desidratação (Plano A da OMS). A conduta correta é a terapia de reidratação oral em casa, com aumento da ingesta de líquidos, uso de soro de reidratação oral após cada evacuação, orientação de sinais de alarme e suplementação de zinco. Antidiarreicos são geralmente contraindicados.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2020-q2",
      text: "Escolar masculino, de 10 anos de idade, é levado por sua mãe à unidade de saúde com história de urina escura há dois dias, acompanhado de cefaleia e edema de face há 24h. Ao exame físico, o escolar apresenta-se hipocorado, edemaciado e hipertenso (PA=140x100mmHg). A conduta, nessa situação, será:",
      options: [
        "fazer diálise intermitente",
        "fazer internação hospitalar para biópsia renal",
        "fazer restrição hidrica, iniciar diálise e programar biópsia renal",
        "fazer penicilina benzatina, restrição hidrica e sódica, além de repouso"
      ],
      answerIndex: 3,
      explanation: "O quadro de síndrome nefrítica aguda (hematúria, edema, hipertensão) em uma criança, frequentemente pós-infecciosa, sugere Glomerulonefrite Pós-Estreptocócica (GNPE). A conduta inicial é de suporte: repouso, restrição de sal e água, e tratamento da infecção estreptocócica com penicilina benzatina para erradicar o agente.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2020-q3",
      text: "Lactente de 18 meses com febre, vômitos, recusa alimentar e redução da diurese. Ao exame, febril, com dor abdominal difusa. A hipótese diagnóstica e a conduta, neste momento, são, respectivamente:",
      options: [
        "obstrução intestinal/internação, hidratação venosa, antibiótico e cirurgia",
        "infecção urinária/internação, hidratação venosa e ceftriaxone venoso",
        "obstrução intestinal/internação, hidratação venosa e cirurgia",
        "insuficiência renal aguda / internação e diálise peritoneal"
      ],
      answerIndex: 1,
      explanation: "Em lactentes, a infecção do trato urinário (ITU) pode se manifestar com sintomas inespecíficos como febre, vômitos e irritabilidade. Pela idade e pelo quadro que sugere pielonefrite, a conduta é internação para hidratação e antibioticoterapia endovenosa, como o Ceftriaxone.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2020-q4",
      text: "Homem, de 55 anos, dá entrada na emergência com queixa de precordialgia, desconforto epigástrico e tonteira. Ao exame: fáscies de dor, sudorese fria, ritmo cardíaco irregular e FC=109bpm. A conduta imediata deve ser:",
      options: [
        "oferecer oxigênio, fazer ecocardiograma e preparar cateterismo",
        "oferecer morfina, fazer eletrocardiograma e preparar cateterismo",
        "fazer hidratação venosa, fazer eletrocardiograma e administrar nifedipina sublingual",
        "oferecer oxigênio, fazer hidratação venosa, fazer eletrocardiograma e administrar morfina e clopidogrel"
      ],
      answerIndex: 3,
      explanation: "O quadro é altamente sugestivo de Síndrome Coronariana Aguda. A conduta inicial (MONABCH) inclui: Monitorização, Oxigênio (se SatO2 < 90%), Nitrato (se não houver contraindicação), AAS, Clopidogrel e Heparina. A morfina é para alívio da dor refratária. O ECG é mandatório e imediato. A opção D é a mais completa entre as listadas.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2020-q5",
      text: "Lactente de 15 meses de idade, três hours após vacinação, iniciou hipotonia, sonolência e recusa alimentar. A resposta à mãe do bebê e a conduta serão, respectivamente:",
      options: [
        "tem relação com a vacina DPT, é uma provável complicação da mesma. Chama-se síndrome hipotônica hiporresponsiva/observação rigorosa em unidade de saúde",
        "tem relação com a vacina contra a pólio oral (VOP) e é uma complicação neurológica, um provável quadro denominado pólio-like / internação hospitalar",
        "não tem relação com as vacinas e é um quadro de infecção que por coincidência começou após as vacinas / internação hospitalar",
        "não tem relação com as vacinas e é um provável quadro de meningite / internação hospitalar"
      ],
      answerIndex: 0,
      explanation: "O quadro de palidez ou cianose, hipotonia e hiporresponsividade que ocorre nas primeiras 48h após a vacina DTP (componente pertussis) é conhecido como Episódio Hipotônico-Hiporresponsivo. É um evento adverso benigno e autolimitado, que requer observação, mas não deixa sequelas.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2020-q6",
      text: "Mulher de 28 anos com astenia, tosse seca, hiperemia conjuntival e febre. Há 12h surgiu rash exantemático difuso em face, que progrediu para o tronco e corpo. Refere não saber sua situação vacinal, mas, é possível saber que há cobertura vacinal, se houver no cartão:",
      options: [
        "ao menos duas doses de triplice viral ou uma de sarampo e outra de triplice viral",
        "ao menos três doses de tetraviral ou uma de sarampo",
        "ao menos duas de sarampo ou uma de triplice viral",
        "ao menos uma de sarampo ou uma triplice viral"
      ],
      answerIndex: 0,
      explanation: "O quadro é clássico de sarampo. A proteção adequada contra o sarampo, para a faixa etária da paciente (28 anos), é garantida com duas doses da vacina tríplice viral (SCR) ou uma dose de sarampo isolada e uma de tríplice viral.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q7",
      text: "Adolescente de 16 anos, vítima de acidente automobilístico, inconsciente, com FC=150bpm, FR=30irpm, saturação de 85%, PA=90x40mmHg, hipofonese de bulhas cardíacas e turgência da jugular. A conduta apropriada é:",
      options: ["toracotomia", "cardioversão", "pericardiocentese", "intubação orotraqueal"],
      answerIndex: 2,
      explanation: "O paciente apresenta a Tríade de Beck (hipotensão, hipofonese de bulhas e turgência jugular), que é clássica do tamponamento cardíaco. Trata-se de uma emergência cirúrgica e a conduta de salvamento imediata é a pericardiocentese para aliviar a pressão sobre o coração.",
      tag: "Trauma"
    },
    {
      id: "suseme-2020-q8",
      text: "Homem de 25 anos é trazido à emergência agitado, com alucinações. Sinais vitais: FR=28ipm, FC=140bpm, PA=160x100mmHg e TAX=38,5°C. O plantonista fez o diagnóstico de intoxicação por metilenodioximetanfetamina (MDMA). A abordagem terapêutica visa evitar:",
      options: ["hipotermia e hiponatremia", "hipertermia e hipoglicemia", "hipertermia e hiponatremia", "hipotermia e hipernatremia"],
      answerIndex: 2,
      explanation: "A intoxicação por MDMA (ecstasy) causa uma síndrome simpatomimética e serotoninérgica, levando à hipertermia (que pode ser maligna) e à hiponatremia dilucional (pela polidipsia e secreção inapropriada de ADH). Ambas são complicações graves e potencialmente fatais.",
      tag: "Toxicologia"
    },
    {
      id: "suseme-2020-q9",
      text: "Mulher de 65 anos é resgatada de afogamento no mar. Na maca, inconsciente, a paciente apresenta episódio emético. O melhor decúbito para posicionar a paciente é o:",
      options: ["dorsal", "ventral", "lateral direito", "lateral esquerdo"],
      answerIndex: 3,
      explanation: "Em um paciente inconsciente e com risco de vômito (e broncoaspiração), o decúbito lateral de segurança é a posição indicada. O decúbito lateral esquerdo é frequentemente preferido pois a anatomia do estômago e do esôfago nesta posição dificulta o refluxo do conteúdo gástrico.",
      tag: "Emergência"
    },
    {
      id: "suseme-2020-q10",
      text: "Idoso de 71 anos com emagrecimento, anorexia, tosse produtiva e febre baixa há um mês. Há 48h, tosse com sangue. Ao exame: estertoração crepitante e roncos difusos em hemitórax direito. A principal hipótese diagnóstica e seu respectivo tratamento são:",
      options: [
        "tuberculose pulmonar/esquema de rifampicina, pirazinamida, isoniazida e etambutol",
        "tuberculose pulmonar/rifampicina, isoniazida e pirazinamida",
        "pneumonia de comunidade / penicilina",
        "pneumonia atipica / claritromicina"
      ],
      answerIndex: 0,
      explanation: "O quadro de sintomas constitucionais (emagrecimento, febre baixa) e tosse arrastada, com hemoptise, em um idoso, é altamente sugestivo de Tuberculose Pulmonar. O tratamento padrão inicial (fase intensiva) é o esquema RIPE: Rifampicina, Isoniazida, Pirazinamida e Etambutol.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q11",
      text: "Mulher 31 anos, na terceira gestação, refere leucorreia amarelada de odor fétido, dispareunia e prurido vaginal. O provável diagnóstico é:",
      options: ["vaginose inespecífica", "vaginose por Gardnerella", "infecção urinária por E.coli", "infecção urinária inespecifica"],
      answerIndex: 1,
      explanation: "Leucorreia com odor fétido ('cheiro de peixe podre') é o sintoma clássico da Vaginose Bacteriana, causada por um desequilíbrio da flora vaginal com proliferação de bactérias como a Gardnerella vaginalis.",
      tag: "G.O."
    },
    {
      id: "suseme-2020-q12",
      text: "Mulher de 38 anos com coriza e tosse há sete dias. Há 48h evoluiu com queda do estado geral, dispneia e febre de 39°C. Exame com tiragem intercostal e murmúrio vesicular reduzido em 1/3 inferior de hemitórax direito. A hipótese diagnóstica é:",
      options: ["asma", "sinusite", "pneumonia", "rinofaringite aguda"],
      answerIndex: 2,
      explanation: "A evolução de um quadro viral para um quadro com sintomas sistêmicos (queda do estado geral, febre alta) e sinais de acometimento do trato respiratório inferior (dispneia, tiragem, alterações na ausculta) é a apresentação típica de uma Pneumonia Adquirida na Comunidade.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2020-q13",
      text: "Jovem de 24 anos, asmático, com tosse e dispneia há 12h. Ao exame, sibilos difusos e saturação de 90%. A melhor conduta, no momento, é:",
      options: ["beta 2 e adrenalina", "oxigênio e adrenalina", "oxigênio e hidrocortisona", "oxigênio e Beta 2 de ação curta"],
      answerIndex: 3,
      explanation: "O paciente está em uma crise asmática com hipoxemia (SatO2 < 92%). A conduta imediata é fornecer oxigênio suplementar para corrigir a hipoxemia e administrar um broncodilatador de curta ação (SABA), como salbutamol, para aliviar o broncoespasmo.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2020-q14",
      text: "Trabalhador de 42 anos, inconsciente, trazido de um prédio em chamas, com sinais de inalação de fumaça e queimaduras de 2º grau. A conduta imediata deve ser:",
      options: [
        "assegurar um acesso venoso calibroso para administração da hidratação, além de hemoderivados",
        "manter vias aéreas pérvias e administrar oxigênio sob máscara, além de iniciar hidratação venosa",
        "manter vias aéreas pérvias e administrar oxigênio sob máscara, além de resfriar as lesões com compressas geladas de soro fisiológico",
        "assegurar um acesso venoso calibroso para administração da hidratação, além de resfriar as lesões com compressas frias de soro fisiológico"
      ],
      answerIndex: 1,
      explanation: "Seguindo o protocolo ABCDE do trauma, a prioridade absoluta é a via aérea (A) e a ventilação (B). Em um paciente com inalação de fumaça, há alto risco de edema de via aérea, sendo crucial garantir sua perviedade e ofertar oxigênio a 100%. A hidratação (C) vem em seguida.",
      tag: "Trauma"
    },
    {
      id: "suseme-2020-q15",
      text: "Pré-escolar de três anos em tratamento para otite média aguda, evoluiu com retorno da febre, queda do estado geral, sonolência e sinais de Kernig e Brudzinski positivos. A impressão diagnóstica é:",
      options: ["mastoidite", "meningoencefalite", "otite média complicada", "distúrbio de coagulação disseminado"],
      answerIndex: 1,
      explanation: "A evolução de uma otite média com o surgimento de sinais neurológicos como rebaixamento do nível de consciência e sinais de irritação meníngea (Kernig e Brudzinski) indica uma complicação intracraniana, sendo a meningoencefalite a hipótese mais provável.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2020-q16",
      text: "Com referência à dengue, pode-se afirmar que são sinais de alarme:",
      options: [
        "febre persistente, fotofobia e odinofagia",
        "rash exantemático, febre alta e hiperemia conjuntival",
        "vômitos persistentes, dor abdominal continua e letargia",
        "diarreia, petéquias presentes à prova do laço e cefaleia"
      ],
      answerIndex: 2,
      explanation: "Vômitos persistentes, dor abdominal intensa e contínua, e alteração do estado neurológico (letargia/irritabilidade) são três dos principais sinais de alarme na dengue, indicando possível extravasamento plasmático e necessidade de internação.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q17",
      text: "Escolar feminina de 11 anos, obesa, com PA aferida em quatro ocasiões entre o percentil 95 e 99 para idade, sexo e altura. Além de orientação sobre dieta e atividades físicas, a conduta, nessa situação, é:",
      options: [
        "monitorar a PA por três dias e, se estiver alterada, encaminhar para nutricionista",
        "monitorar a PA e, se continuar elevada, considerar iniciar tratamento para hipertensão arterial",
        "iniciar imediatamente o uso de inibidor da ECA, pois a paciente já está hipertensa",
        "iniciar já o uso de diuréticos, pois a paciente já está hipertensa"
      ],
      answerIndex: 1,
      explanation: "O diagnóstico de hipertensão arterial em crianças requer múltiplas aferições elevadas. A conduta inicial é a mudança de estilo de vida. Se, após um período de monitorização, a pressão se mantiver elevada, o tratamento farmacológico deve ser considerado, especialmente em pacientes sintomáticos ou com lesão de órgão-alvo.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2020-q18",
      text: "Pré-escolar de quatro anos é levado ao pronto-socorro com febre de 37,7°C há 2 horas, sem outros sinais ou sintomas. Exame físico normal. A mãe solicita receita de antibiótico. A conduta será:",
      options: [
        "orientar à mãe que o paciente está com exame físico sem alterações e, se não melhorar ou surgir algum sinal ou sintoma ela poderá retornar",
        "orientar à mãe que será solicitada internação de seu filho, para que haja esclarecimento e investigação diagnóstica",
        "orientar à mãe que está sendo liberada a receita com antibiótico, mas que ela só poderá administrar se a febre voltar",
        "orientar à mãe que serão solicitados vários exames para descobrir o diagnóstico"
      ],
      answerIndex: 0,
      explanation: "Trata-se de uma febre sem sinais de localização em uma criança com bom estado geral. A conduta correta é a observação e a orientação dos pais sobre sinais de alerta, evitando o uso desnecessário de antibióticos e a realização de exames invasivos sem indicação.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2020-q19",
      text: "Adolescente masculino de 17 anos com 'movimentos agitados' de mãos, cabeça e pernas, fala incompreensível e quedas frequentes. Tia relata que os movimentos cessam durante o sono. A hipótese para esse quadro é:",
      options: ["coreia de Sydenhan", "epilepsia multifocal", "overdose de cocaina", "intoxicação por crack"],
      answerIndex: 0,
      explanation: "Movimentos involuntários, arrítmicos, rápidos e que afetam múltiplos segmentos do corpo, pioram com o estresse e cessam durante o sono, são característicos de coreia. A Coreia de Sydenham é uma manifestação tardia da febre reumática.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2020-q20",
      text: "Lactente de 9 meses sofre queda da própria altura, bate com a cabeça, chora e para rapidamente. Nega perda de consciência ou vômitos. Exame físico e neurológico normais. A conduta é acalmar o pai e:",
      options: [
        "orientar que será necessário ao menos uma radiografia de crânio para afastar fraturas",
        "fazer uma tomografia de crânio para afastar edema de sistema nervoso central",
        "orientar que o lactente ficará em observação na emergência por 48h",
        "orientar sobre observação em casa nas próximas 48h"
      ],
      answerIndex: 3,
      explanation: "Trata-se de um traumatismo cranioencefálico leve, de muito baixo risco (classificação PECARN). A conduta correta é a orientação dos pais sobre sinais de alerta e observação em casa, sem necessidade de exames de imagem ou observação hospitalar.",
      tag: "Pediatria"
    },
    {
      id: "suseme-2020-q21",
      text: "Jovem motociclista, após queda, apresentava-se lúcido e orientado, com perda da função motora e proprioceptiva no membro superior direito, e perda da sensibilidade dolorosa e da percepção da temperatura do lado contralateral. O diagnóstico é:",
      options: [
        "sindrome da medula central",
        "sindrome da medula anterior",
        "sindrome de Brown-Séquard",
        "hérnia de disco cervical traumática"
      ],
      answerIndex: 2,
      explanation: "A dissociação dos achados neurológicos (perda motora e proprioceptiva ipsilateral à lesão e perda da sensibilidade termo-dolorosa contralateral) é a apresentação clássica da Síndrome de Brown-Séquard, causada pela hemissecção da medula espinhal.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2020-q22",
      text: "Ciclista com 26 anos, após queda, sente dores irradiadas da base do pescoço, até o segmento lateral do cotovelo, face radial do antebraço até o polegar e indicador. O diagnóstico provável é:",
      options: ["fratura do Atlas", "lesão do manguito rotador", "hérnia de disco entre C3-C4", "radiculopatia pós-trauma de C6"],
      answerIndex: 3,
      explanation: "A dor e a parestesia seguindo o trajeto descrito correspondem exatamente ao dermátomo da raiz nervosa de C6. O quadro é, portanto, de uma radiculopatia de C6, provavelmente causada por uma hérnia de disco traumática.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2020-q23",
      text: "Mulher de 60 anos com dores intensas na região lombar há uma semana, já com episódios prévios. Nesse caso, está correto afirmar que:",
      options: [
        "é uma das queixas mais comuns na prática médica diária, comum nas emergências, com diagnóstico etiológico esclarecido secundariamente (estenoses, hérnia discal)",
        "o tratamento inicial de um paciente com hérnia discal entre L4-L5 com compressão nervosa, comprovado com ressonância magnética, sempre é cirúrgico",
        "é um dos sintomas raros em ortopedia, devendo a paciente permanecer em repouso absoluto",
        "tal como a maioria dos casos, é uma lombalgia aguda"
      ],
      answerIndex: 0,
      explanation: "A lombalgia é uma das queixas mais prevalentes na população geral e nos serviços de emergência. Na maioria das vezes é inespecífica (mecânica), e a investigação para causas específicas como hérnia de disco é feita secundariamente se não houver melhora ou na presença de sinais de alerta.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2020-q24",
      text: "Jovem atleta de alto rendimento apresenta um estiramento muscular crural durante suas atividades. O tratamento indicado diante de tal quadro é:",
      options: [
        "colocar compressas de gelo no local",
        "encaminhar à academia para executar exercícios isométricos",
        "massagear o local com alguma pomada anti-inflamatória, tipo diclofenaco dietilamônio",
        "limitar os esforços fisicos por um dia e retomar as atividades normalmente ao final desse período"
      ],
      answerIndex: 0,
      explanation: "No tratamento agudo de lesões musculares (estiramento), a aplicação de gelo (crioterapia) é a medida inicial mais importante para controlar a inflamação, o edema e a dor.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2020-q25",
      text: "Criança com quatro anos, após ser suspensa pelo braço, para de movimentá-lo, mantendo-o estendido. Radiografias normais. O diagnóstico provável é:",
      options: ["pronação dolorosa", "luxação do ombro", "artrite pós trauma", "rotura muscular"],
      answerIndex: 0,
      explanation: "O mecanismo de tração axial no braço estendido em uma criança pequena é o gatilho clássico para a Pronação Dolorosa, que é a subluxação da cabeça do rádio para fora do ligamento anular. As radiografias são tipicamente normais.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2020-q26",
      text: "Senhora com 78 anos, lúcida, com dores intensas na região lombar e bacia após queda de própria altura há uma semana. Radiografias da bacia e fêmur normais. A hipótese diagnóstica plausível e o exame complementar são:",
      options: [
        "trombo embolia pulmonar e cintilografia",
        "fratura de acetábulo e tomografia computadorizada",
        "hérnia discal lombar e ressonância magnética da coluna",
        "fratura da coluna lombar e radiografia da coluna lombar, com visualização com spot-film na transição com a coluna dorsal"
      ],
      answerIndex: 3,
      explanation: "Em uma idosa com dor lombar significativa após queda, mesmo com radiografias iniciais normais, a principal suspeita a ser afastada é uma fratura de compressão vertebral, comum por osteoporose. A radiografia da coluna com incidências focadas (spot-film) é o próximo passo.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2020-q27",
      text: "Criança de um ano de idade dá entrada com fratura diafisária femural direita. Esse tipo de fratura ocorre, ordinariamente, na seguinte situação:",
      options: ["traumatismo em atividades fisico-desportivas", "acidente automobilistico", "defeito congênito", "maus-tratos"],
      answerIndex: 3,
      explanation: "Uma fratura de fêmur em uma criança que ainda não anda (1 ano de idade) é altamente suspeita de ter sido causada por trauma não-acidental (maus-tratos), pois requer uma energia de trauma muito alta, incompatível com as atividades normais para a idade.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2020-q28",
      text: "Paciente com dor no meio do peito que piora quando espirra ou palpa a região. Exames cardíacos normais. Diante de tal quadro, o diagnóstico provável é:",
      options: ["angina pectoris", "esofagite de refluxo", "síndrome da costela deslizante", "costocondrite ou síndrome de Tietze"],
      answerIndex: 3,
      explanation: "A dor torácica que é reproduzível à palpação das articulações costocondrais (entre as costelas e o esterno) é característica da Costocondrite, uma causa comum e benigna de dor torácica.",
      tag: "Reumatologia"
    },
    {
      id: "suseme-2020-q29",
      text: "Idoso de 83 anos, viúvo, recluso, com queda há uma semana, chega com cefaleia e sonolência. Diante desse quadro, o diagnóstico e o exame a ser solicitado são, respectivamente:",
      options: [
        "hematoma subdural e tomografia computadorizada do crânio",
        "fratura da coluna cervical e radiografias da coluna cervical",
        "encefalopatia hepática e exames laboratoriais",
        "arterite temporal e tomoangiografia cerebral"
      ],
      answerIndex: 0,
      explanation: "Idosos, especialmente após quedas (mesmo de baixo impacto), têm alto risco de desenvolver um Hematoma Subdural Crônico, que se manifesta com sintomas neurológicos insidiosos como cefaleia, sonolência e confusão. O exame de escolha é a Tomografia de Crânio.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2020-q30",
      text: "Paciente morador de rua, 29 anos, usuário de drogas injetáveis, com dor, inchaço e calor no joelho direito há dez dias. O possível diagnóstico e micro-organismo infectante são, respectivamente:",
      options: [
        "gonorreia infecciosa e gonococos",
        "abscesso no joelho direito e E. coli",
        "osteomielite crônica do joelho e H. influenzae",
        "artrite séptica do joelho direito e S. aureus"
      ],
      answerIndex: 3,
      explanation: "O quadro de monoartrite aguda (dor, edema, calor) em um paciente com fatores de risco para bacteremia (usuário de drogas injetáveis, feridas na pele) é altamente sugestivo de Artrite Séptica. O Staphylococcus aureus é o agente etiológico mais comum nesta situação.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q31",
      text: "Com referência a casos de gripe ocasionados pelo virus influenza, é correto afirmar que:",
      options: [
        "normalmente os indivíduos são infectados apenas uma única vez, criando imunidade pelo resto da vida",
        "o zanamivir é indicado especialmente para menores de 5 anos, como tratamento ou quimioprofilaxia, e para todo paciente com doença respiratória crônica",
        "o homem, suinos, equinos, focas e aves são os principais reservatórios. As aves migratórias desempenham importante papel na disseminação natural da doença",
        "quando evolui para sua forma grave, torna-se indicada a internação para administração de antibioticoterapia endovenosa de amplo espectro"
      ],
      answerIndex: 2,
      explanation: "O vírus Influenza tem um importante reservatório em animais, especialmente em aves aquáticas e suínos, onde ocorrem rearranjos genéticos que dão origem a novas cepas com potencial pandêmico. A afirmação sobre a imunidade ser para toda a vida é falsa devido à mutação do vírus.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q32",
      text: "Em relação aos métodos empregados na prevenção da influenza, pode-se afirmar que:",
      options: [
        "deve-se realizar quimioprofilaxia para comunidade escolar, mesmo em não portadores de risco para possíveis complicações",
        "deve-se realizar quimioprofilaxia individual, em pessoas consideradas com condições e fator de risco para complicações por influenza",
        "gestantes devem buscar o serviço de saúde, caso apresentem sintomas de sindrome gripal",
        "ha recomendação para que instituições fechadas e hospitais de longa permanência vacinem todos os residentes e funcionários bianualmente"
      ],
      answerIndex: 1,
      explanation: "A quimioprofilaxia com oseltamivir não é para todos, mas está indicada para indivíduos de alto risco para complicações que tiveram contato próximo com um caso confirmado de influenza e que não podem ser vacinados ou foram vacinados há menos de 2 semanas.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q33",
      text: "Sobre a doença sarampo, é correto afirmar que:",
      options: [
        "são comuns os casos de gastroenterite com náuseas e vômitos",
        "lactentes, cujas mães já tiveram sarampo, possuem imunidade passiva que os isenta da vacinação",
        "é viral, infecciosa aguda, extremamente contagiosa. O causador é um Morbillivirus e tem como reservatório o homem",
        "as manifestações mais comuns são febre baixa, queda de cabelo e unhas em vidro de relógio"
      ],
      answerIndex: 2,
      explanation: "A opção C descreve corretamente as características do sarampo: é uma doença viral extremamente contagiosa, causada por um Morbillivirus, cujo único reservatório é o ser humano, o que torna a sua erradicação através da vacinação teoricamente possível.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q34",
      text: "As principais características epidemiológicas do sarampo são:",
      options: [
        "a incidência, a evolução clínica e a letalidade são influenciadas pelas condições socioeconômicas, nutricionais e imunitárias",
        "o ressurgimento da doença deveu-se a disseminação das arboviroses pelo mosquito aedes",
        "é uma doença com distribuição universal, com aumento da incidência nos períodos mais secos nos climas tropicais",
        "pacientes internados com a doença podem ser mantidos em enfermarias, em contato com outros, sem maiores restrições"
      ],
      answerIndex: 2,
      explanation: "O sarampo é uma doença de distribuição global. Nos climas tropicais, observa-se um padrão sazonal com aumento da transmissão durante os períodos mais secos. É crucial o isolamento respiratório para pacientes internados.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q35",
      text: "Observando a etiopatogenia do HIV pode-se afirmar que:",
      options: [
        "na fase aguda a sorologia para a infecção pelo HIV é geralmente positiva",
        "a transmissão pode ocorrer mediante relações sexuais desprotegidas; utilização de sangue não testado; compartilhamento de seringas e acidente ocupacional",
        "no Brasil, gays e outros homens que fazem sexo com homens (HSH), travestis, e pessoas que usam drogas, não podem mais ser considerados populações-chave",
        "a utilização de polivitamínicos foi um fator determinante para o aumento da sobrevida"
      ],
      answerIndex: 1,
      explanation: "A opção B descreve corretamente as principais vias de transmissão do HIV. A sorologia pode ser negativa na fase aguda (janela imunológica). As populações citadas continuam a ser consideradas populações-chave. Polivitamínicos não impactam a sobrevida como os antirretrovirais.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q36",
      text: "Sobre a epidemiologia do HIV pode-se afirmar que:",
      options: [
        "a elevação dos casos de HIV/AIDS no sexo feminino, decorreu do aumento das práticas homossexuais",
        "na primeira metade da década de 1980, a epidemia de HIV/AIDS manteve-se basicamente restrita às regiões metropolitanas do Sudeste e Sul do pais",
        "a transmissão heterossexual nunca foi um fator determinante para transmissão do virus HIV",
        "o abandono do uso de preservativos pela maior parte da população não contribui para o aumento dos indices das DST"
      ],
      answerIndex: 1,
      explanation: "A opção B descreve corretamente o início da epidemia de HIV/AIDS no Brasil, que foi concentrada nos grandes centros urbanos do Sudeste e Sul, inicialmente acometendo principalmente homens que fazem sexo com homens e usuários de drogas injetáveis.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q37",
      text: "Sobre etiopatogenia e consequências da hanseníase, pode-se afirmar que:",
      options: [
        "embora os nervos sejam atingidos, são incomuns os casos de alterações funcionais",
        "o Mycobacterium leprae é um parasita extracelular",
        "a transmissão se dá por meio de uma pessoa com hanseniase, forma infectante da doença MB, sem tratamento, que elimina o bacilo para o meio exterior, infectando outras pessoas suscetíveis",
        "dura em média de 2 a 4 meses"
      ],
      answerIndex: 2,
      explanation: "A transmissão da hanseníase ocorre principalmente pelas vias aéreas superiores, a partir de um paciente multibacilar (MB) não tratado que elimina grandes quantidades do bacilo. A maioria da população tem imunidade natural.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q38",
      text: "Sobre a tuberculose (TB), sabe-se que é uma doença infecciosa e transmissivel, causada pelo Mycobacterium tuberculosis. Diante do exposto, pode-se afirmar que:",
      options: [
        "alguns segmentos populacionais são mais vulneráveis como pescadores",
        "o principal reservatório é o homem; outros possíveis reservatórios são gado bovino, primatas, aves",
        "a suscetibilidade à infecção é praticamente universal; todos os expostos se infectam",
        "uma das formas mais comuns de transmissão é através da transfusão sanguínea"
      ],
      answerIndex: 1,
      explanation: "O principal reservatório do M. tuberculosis é o ser humano. No entanto, outras espécies do complexo Mycobacterium, como o M. bovis (gado), podem causar tuberculose em humanos (transmissão por leite não pasteurizado, por exemplo).",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q39",
      text: "Dentre as manifestações comuns à dengue, a assertiva correta é:",
      options: [
        "a insuficiência renal aguda é muito frequente e geralmente cursa com pior prognóstico",
        "o exantema está presente em 10% dos casos",
        "os sinais de alarme na dengue são: dor abdominal intensa, vômitos persistentes, acúmulo de liquidos, hipotensão postural, hepatomegalia, sangramento de mucosa, letargia e aumento progressivo do hematocrito",
        "a primeira manifestação é a febre, geralmente baixa (37,5°C a 38°C), de inicio lento"
      ],
      answerIndex: 2,
      explanation: "A opção C lista corretamente os principais sinais de alarme da dengue, que indicam o início do extravasamento plasmático e o risco de evolução para formas graves. A febre na dengue é tipicamente alta e de início abrupto.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2020-q40",
      text: "Sobre a etiopatogenia da chicungunya é correto afirmar que:",
      options: [
        "a transmissão se dá através da picada por machos dos mosquitos Aedes",
        "os sinais e sintomas são clinicamente parecidos aos da dengue febre de início agudo, dores articulares e musculares, cefaleia, náusea, fadiga e exantema. A principal manifestação clínica que a difere são as fortes dores nas articulações",
        "quando a duração dos sintomas persiste além dos sete dias a doença passa a ser considerada crônica",
        "os sinais e sintomas são clinicamente parecidos aos da dengue febre de inicio lento, dores articulares leves, cefaleia, fadiga e ausência de exantema"
      ],
      answerIndex: 1,
      explanation: "Embora compartilhe muitos sintomas com a dengue, a marca registada da Chikungunya é a poliartralgia/artrite, que é tipicamente muito mais intensa, debilitante e com maior potencial de cronificação. Apenas as fêmeas dos mosquitos picam.",
      tag: "Infectologia"
    }
  ]
},
{
  id: "prova-suseme-2019-emergencia-cti",
  name: "SUSEME - Emergência - 2019",
  questions: [
    {
      id: "suseme-2019-q1",
      text: "São doenças de notificação compulsória:",
      options: [
        "coqueluche, tuberculose, pneumonia comunitária",
        "febre tifoide, febre amarela e diabetes mellitus tipo 1",
        "febre amarela, febre tifoide e raiva humana",
        "sarampo, rubéola e anemia falciforme"
      ],
      answerIndex: 2,
      explanation: "Febre amarela, febre tifoide e raiva humana estão na lista nacional de doenças de notificação compulsória. Pneumonia comunitária e diabetes não são de notificação compulsória. Anemia falciforme tem notificação em alguns contextos específicos, mas não universalmente como as outras.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q2",
      text: "De acordo com o Guia de Vigilância em Saúde do Ministério da Saúde (2016), o uso imediato do fosfato de oseltamivir está indicado nos(as) pacientes:",
      options: [
        "grávidas no primeiro trimestre com febre alta, lombalgia e cefaleia",
        "com dispneia e febre",
        "crianças maiores de dois anos de idade com febre e dor de garganta",
        "indigenas que moram em aldeias"
      ],
      answerIndex: 3,
      explanation: "Populações indígenas aldeadas são consideradas um grupo de alto risco para complicações da Influenza, e o tratamento com oseltamivir deve ser iniciado prontamente na presença de síndrome gripal, independentemente de sinais de gravidade.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q3",
      text: "Doença infeciosa aguda que compromete especificamente o aparelho respiratório (traqueia e brônquios) e se caracteriza por paroxismos de tosse seca. A doença e agente etiológico são, respectivamente:",
      options: [
        "coqueluche; Chlamydophila psittaci",
        "coqueluche; Bordetella pertussis",
        "difteria; Corynebacterium diphtheriae",
        "influenza; adenovirus"
      ],
      answerIndex: 1,
      explanation: "A descrição de tosse paroxística é a marca registada da Coqueluche (tosse convulsa), cujo agente etiológico é a bactéria Bordetella pertussis.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q4",
      text: "Paciente apresenta quadro febril, dor de garganta, aumento do diâmetro do pescoço e dispneia. Ao exame, placas pseudomembranosas branco-acinzentadas nas amígdalas e linfadenomegalia cervical. A hipótese diagnóstica e o tratamento específico são, respectivamente:",
      options: [
        "coqueluche; penicilina cristalina",
        "difteria; prednisona",
        "difteria; soro antidiftérico",
        "influenza A; oseltamivir"
      ],
      answerIndex: 2,
      explanation: "O quadro de faringite com pseudomembranas aderentes e pescoço 'taurino' é clássico da Difteria. O tratamento é uma emergência e consiste na administração do Soro Antidiftérico para neutralizar a toxina circulante, associado a antibioticoterapia.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q5",
      text: "Senhor de 52 anos, morador de região litorânea, apresentou em fevereiro quadro febril agudo, com dor e edema de punhos, joelhos e articulações interfalageanas. Quatro meses após, procura reumatologista por dor e edema articular intermitente e incapacitante. Essa descrição corresponde à:",
      options: ["dengue clássica", "Zika", "leptospirose", "chikungunya"],
      answerIndex: 3,
      explanation: "A principal característica da Chikungunya é a poliartralgia/artrite intensa e frequentemente incapacitante, que pode se cronificar por meses ou anos após a fase aguda, como descrito no caso.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q6",
      text: "Jovem com febre, mialgia, cefaleia, vômitos, quadro confusional, edema de membros inferiores, mordido por carrapato há 7 dias. Apresenta exantema maculopapular centrípeto, petéquias e choque. O diagnóstico e o tratamento são:",
      options: [
        "febre maculosa brasileira; cloranfenicol",
        "febre maculosa brasileira; penicilina cristalina",
        "malária; cloroquina e primaquina",
        "meningococcemia; cefepima"
      ],
      answerIndex: 0,
      explanation: "A história epidemiológica (mordida de carrapato) associada a um quadro grave de febre, exantema petequial e disfunção de múltiplos órgãos é altamente sugestiva de Febre Maculosa. O tratamento de escolha é a Doxiciclina, mas o Cloranfenicol é uma alternativa válida, especialmente em gestantes ou crianças pequenas.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q7",
      text: "São sinais de alarme na dengue:",
      options: ["hipotensão postural e febre alta", "aumento repentino do hematocrito e cefaleia holocraniana", "hipotermia e dor lombar", "ascite e lipotimia"],
      answerIndex: 3,
      explanation: "Ascite (acúmulo de líquido abdominal) e lipotimia (pré-síncope) são sinais clínicos de extravasamento plasmático e hipovolemia, sendo considerados sinais de alarme na dengue. Hipotensão postural também é, mas febre alta não.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q8",
      text: "Na confirmação laboratorial de um caso suspeito de dengue, a detecção da antigenemia NS1 deve ser feita até o:",
      options: ["desaparecimento do rash", "quinto dia do inicio dos sintomas", "sétimo dia do inicio dos sintomas", "término do choque hemorrágico"],
      answerIndex: 1,
      explanation: "O antígeno NS1 é uma proteína viral que está presente no sangue durante a fase virêmica da dengue. Sua detecção é mais sensível nos primeiros dias da doença, sendo recomendada a coleta até o 5º dia do início dos sintomas.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q9",
      text: "Vítima de atropelamento com TCE grave e fratura exposta, em coma no pós-operatório e sem história vacinal conhecida. Nesse caso, a profilaxia antitetânica correta é:",
      options: [
        "administração de imunoglobulina antitetânica e vacina dT, aplicados em locais diferentes",
        "administração de imunoglobulina antitetânica e vacina dT, que poderão ser misturados",
        "aplicar apenas a vacina dT",
        "não será necessário uso imediato"
      ],
      answerIndex: 0,
      explanation: "Em um paciente com ferimento de alto risco (fratura exposta) e história vacinal desconhecida, a profilaxia para tétano deve ser completa, com imunização passiva (imunoglobulina) e ativa (vacina dT), administradas em locais diferentes.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q10",
      text: "Na avaliação para melhor abordagem do tratamento profilático antirrábico humano, são considerados acidentes graves aqueles causados por mordedura de cão em:",
      options: [
        "mãos e tronco",
        "cabeça e mãos",
        "ferimentos na cabeça e lambedura de pele intacta",
        "região superficial da coxa e lambedura de pele lesionada"
      ],
      answerIndex: 1,
      explanation: "Acidentes em áreas com alta inervação, como cabeça, face, pescoço, mãos e pés, são considerados graves devido ao menor tempo de incubação do vírus da raiva. Lambedura de pele intacta não representa risco.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q11",
      text: "Na abordagem da gestante com eclampsia, o sulfato de magnésio é largamente utilizado e previne convulsões. Durante a sua infusão, deve-se monitorizar:",
      options: [
        "reflexo pupilar, indices hematimétricos e transaminases",
        "frequência respiratória, transaminases e plaquetas",
        "contagem plaquetária, reflexo pupilar e reflexos tendinosos",
        "reflexos tendinosos, diurese e respiração"
      ],
      answerIndex: 3,
      explanation: "A monitorização da toxicidade do sulfato de magnésio é feita clinicamente pela avaliação seriada dos reflexos tendinosos (o primeiro a desaparecer), da frequência respiratória (risco de depressão respiratória) e do débito urinário (risco de acúmulo por insuficiência renal).",
      tag: "G.O."
    },
    {
      id: "suseme-2019-q12",
      text: "Paciente de 28 anos com desorientação, febre, sinais de Kernig e Brudzinski, e estertores crepitantes na base do pulmão direito. Um medicamento que NÃO deve ser administrado é a:",
      options: ["ceftriaxona", "dexametasona", "ceftarolina", "vancomicina"],
      answerIndex: 2,
      explanation: "O quadro é de meningite bacteriana comunitária. Ceftriaxona, vancomicina e dexametasona (para reduzir a inflamação e sequelas) fazem parte do esquema empírico padrão. Ceftarolina, uma cefalosporina de 5ª geração, não é a primeira escolha e não é rotineiramente incluída.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q13",
      text: "Aluno de medicina com cefaleia, tosse persistente e febre há 15 dias. Outros colegas com os mesmos sintomas. Radiografia com infiltrado intersticial. São, respectivamente, o organismo envolvido e seu tratamento:",
      options: [
        "Mycoplasma pneumoniae; azitromicina",
        "Mycoplasma pneumoniae; ceftriaxona",
        "Legionella pneumophila, azitromicina",
        "Pneumocystis jirovecii; sulfametoxazol-trimetoprima"
      ],
      answerIndex: 0,
      explanation: "O quadro de pneumonia atípica (arrastado, com tosse seca e poucos achados na ausculta) em um contexto de surto em comunidade fechada (alojamento) é clássico do Mycoplasma pneumoniae. O tratamento de escolha é com um macrolídeo, como a azitromicina.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2019-q14",
      text: "Etilista de 52 anos com ascite. A paracentese mostra albumina de 1,1 g/dL no líquido e 3,6 g/dL no soro. Nesse caso, a etiologia da ascite é:",
      options: [
        "carcinomatose peritoneal",
        "tuberculose peritoneal",
        "hipertensão portal devido à cirrose hepática",
        "pancreatite crônica"
      ],
      answerIndex: 2,
      explanation: "O Gradiente de Albumina Soro-Ascite (GASA) é calculado por [Albumina sérica] - [Albumina ascítica]. Neste caso, 3,6 - 1,1 = 2,5. Um GASA ≥ 1,1 g/dL indica que a causa da ascite é a hipertensão portal, sendo a cirrose hepática a causa mais provável no contexto de etilismo crônico.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2019-q15",
      text: "Na abordagem do paciente com dor lombar, o sintoma que NÃO sugere alteração estrutural importante é a:",
      options: ["incontinencia urinária", "piora da dor a noite ou em repouso", "perda de peso", "melhora da dor em repouso"],
      answerIndex: 3,
      explanation: "A melhora da dor com o repouso é característica de dor lombar de origem mecânica, que é a causa mais comum e geralmente benigna. As outras opções são 'sinais de alerta' (red flags) que sugerem causas mais graves, como compressão medular, tumor ou infecção.",
      tag: "Ortopedia"
    },
    {
      id: "suseme-2019-q16",
      text: "Nos casos de acidente vascular encefálico isquêmico, é contraindicação à trombólise venosa:",
      options: [
        "tomografia computadorizada de crânio não demonstrando edema em mais de 1/3 do território da artéria cerebral média",
        "cirurgia de qualquer porte há quatro semanas",
        "melhora rápida dos sintomas",
        "uso de varfarina mesmo com INR normal"
      ],
      answerIndex: 2,
      explanation: "A melhora rápida e significativa dos sintomas neurológicos é uma contraindicação relativa, pois sugere um ataque isquêmico transitório (AIT) onde o risco do trombolítico pode superar o benefício. Cirurgia há 4 semanas não contraindica (o limite é 2 semanas). O uso de varfarina só é contraindicação se o INR estiver elevado.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2019-q17",
      text: "Paciente de 30 anos agredido, comatoso. Glasgow: não abre olhos (1), não verbaliza (1 - intubado), faz extensão dos membros ao estímulo álgico (2). TC com hematoma epidural. A pontuação na escala de Glasgow e o alvo da PPC são:",
      options: ["Glasgow 7 e PPC > 70 mmHg", "Glasgow 6 e PPC > 65 mmHg", "Glasgow 5 e PPC ≥ 60 mmHg", "Glasgow 4 e PPC > 60 mmHg"],
      answerIndex: 3,
      explanation: "A Escala de Coma de Glasgow é: Abertura Ocular (1) + Melhor Resposta Verbal (1, por estar intubado) + Melhor Resposta Motora (2 - extensão/descerebração) = 4. O alvo da Pressão de Perfusão Cerebral (PPC) no TCE grave é entre 60-70 mmHg.",
      tag: "Neurologia"
    },
    {
      id: "suseme-2019-q18",
      text: "Paciente de 50 anos, hipertenso, diabético, com tosse, febre e dor torácica. PA 128x87mmHg, taquicárdico, taquipneico. Após 2L de SF, a PA se manteve. O quadro desse paciente é definido como:",
      options: ["choque séptico refratário", "choque séptico", "sepse precoce", "sepse grave"],
      answerIndex: 3,
      explanation: "O paciente tem sepse (infecção suspeita + disfunção de órgão - taquipneia, taquicardia, hiperlactatemia). Como a pressão se manteve estável após a ressuscitação volêmica, sem necessidade de vasopressores, o quadro é classificado como Sepse Grave (pelos critérios antigos, Sepsis-2).",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q19",
      text: "Senhor de 60 anos, hipertenso, com dor torácica de forte intensidade irradiada para o dorso. PA 222x104 mmHg, FC 134 bpm, sopro de regurgitação aórtica e assimetria de pulsos. As drogas anti-hipertensivas que devem ser usadas são:",
      options: ["furosemida e hidralazina", "esmolol e nitroprussiato de sódio", "nifedipina e atenolol", "furosemida e atenolol"],
      answerIndex: 1,
      explanation: "O quadro é de dissecção aguda de aorta, uma emergência hipertensiva. O tratamento visa reduzir a força de cisalhamento do fluxo sanguíneo. Para isso, utiliza-se um betabloqueador para reduzir a frequência cardíaca (esmolol) e um vasodilatador para reduzir a pressão arterial (nitroprussiato).",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2019-q20",
      text: "Paciente com derrame pleural. Análise do líquido: pH 7,45, proteína 5,8 g/dL, LDH 285 UI/L. Soro: proteína 7,2 g/dL, LDH 320. O diagnóstico que NÃO é a causa do derrame é:",
      options: ["cirrose hepática", "neoplasia pulmonar", "tuberculose pleural", "empiema pleural"],
      answerIndex: 0,
      explanation: "Para classificar o derrame, usamos os Critérios de Light. Relação Proteína Pleural/Sérica = 5.8/7.2 > 0.5. Relação LDH Pleural/Sérico = 285/320 > 0.6. Ambos positivos, trata-se de um exsudato. Neoplasia, TB e empiema causam exsudato. A cirrose hepática causa transudato (hidrotórax hepático).",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2019-q21",
      text: "A colestase deve ser monitorada em pacientes com uso da:",
      options: ["niacina", "eritromicina", "aspirina", "vancomicina"],
      answerIndex: 1,
      explanation: "A eritromicina, um antibiótico macrolídeo, é uma causa clássica de hepatite colestática induzida por drogas, especialmente a forma de estolato de eritromicina.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2019-q22",
      text: "Observando-se o seguinte resultado de sorologia para hepatite B: HBsAg positivo; anti-HBs negativo; Anti-HBc IgM positivo; HBeAg positivo; Anti-HBe negativo, o diagnóstico é:",
      options: ["imunoconversão após vacinação", "hepatite B falso positivo", "hepatite crônica", "hepatite B aguda"],
      answerIndex: 3,
      explanation: "A positividade do Anti-HBc IgM é o marcador que define a infecção aguda. HBsAg positivo indica infecção, e HBeAg positivo indica alta replicação viral. A ausência de anti-HBs confirma a susceptibilidade.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2019-q23",
      text: "O tratamento para um paciente com choque por diabetes insipidus é:",
      options: ["vasopressina", "furosemide", "insulina", "imunoglobulina"],
      answerIndex: 0,
      explanation: "O diabetes insipidus é causado pela deficiência ou resistência ao hormônio antidiurético (ADH), também conhecido como vasopressina. O tratamento do choque (causado por desidratação severa) é a reposição volêmica e a administração de um análogo do ADH, como a vasopressina ou desmopressina.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2019-q24",
      text: "A doença de Von Willebrand aumenta a meia vida do fator de coagulação:",
      options: ["V", "VIII", "X", "XI"],
      answerIndex: 1,
      explanation: "O fator de von Willebrand (FvW) atua como uma proteína transportadora para o Fator VIII, protegendo-o da degradação. Na deficiência de FvW, a meia-vida do Fator VIII é reduzida, podendo levar a um quadro semelhante à hemofilia A leve.",
      tag: "Hematologia"
    },
    {
      id: "suseme-2019-q25",
      text: "Qual o tratamento preconizado para um paciente com hemorragia por púrpura trombocitopênica trombótica:",
      options: ["aziatioprina", "ibuprofeno", "imunoglobulina", "bivalirudina"],
      answerIndex: 2,
      explanation: "O tratamento da Púrpura Trombocitopênica Trombótica (PTT) é uma emergência e baseia-se na plasmaférese para remover os autoanticorpos. A imunoglobulina e a corticoterapia são terapias adjuvantes importantes. Bivalirudina é para TIH. A questão é mal formulada, mas a imunoglobulina é a única opção plausível.",
      tag: "Hematologia"
    },
    {
      id: "suseme-2019-q26",
      text: "É preconizado no tratamento da pseudo-obstrução colônica ou sindrome de Ogilvie a seguinte droga:",
      options: ["morfina", "nicotinamida", "neostigmina", "diltiazem"],
      answerIndex: 2,
      explanation: "A Síndrome de Ogilvie é uma dilatação maciça do cólon sem obstrução mecânica. O tratamento farmacológico de escolha é a neostigmina, um inibidor da acetilcolinesterase que estimula a motilidade colônica.",
      tag: "Cirurgia"
    },
    {
      id: "suseme-2019-q27",
      text: "Nos pacientes com endocardite infecciosa e usuários de drogas endovenosas, os agentes etiológicos mais frequentemente encontrados e a sua localização preferencial são, respectivamente:",
      options: [
        "Staphylococcus aureus; válvula tricúspide",
        "Candida albicans; válvula mitral",
        "Streptococcus viridans; válvula aórtica",
        "Pseudomonas aeruginosa, válvula pulmonar"
      ],
      answerIndex: 0,
      explanation: "Em usuários de drogas injetáveis, o agente mais comum da endocardite é o Staphylococcus aureus, e a válvula mais frequentemente acometida é a tricúspide (coração direito), devido à inoculação direta na circulação venosa.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q28",
      text: "O antiarrítmico que induz tireotoxicose é:",
      options: ["propafenona", "quinidina", "amiodarona", "sotalol"],
      answerIndex: 2,
      explanation: "A amiodarona é uma droga rica em iodo que pode causar tanto hipotireoidismo quanto tireotoxicose (hipertireoidismo) por diferentes mecanismos. É a causa mais clássica de disfunção tireoidiana induzida por antiarrítmicos.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2019-q29",
      text: "Para o controle da hipertensão em um paciente com feocromocitoma deve ser utilizado:",
      options: ["prazocin", "furosemida", "hidroclorotiazida", "clonidina"],
      answerIndex: 0,
      explanation: "No feocromocitoma, há uma produção excessiva de catecolaminas. O controle da hipertensão arterial deve ser feito, primeiramente, com um alfabloqueador, como o prazosin ou a fenoxibenzamina. O uso de betabloqueador isolado é contraindicado.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2019-q30",
      text: "A dapsona é uma sulfona utilizada no tratamento de hanseníase. Deve-se monitorar seu uso para o risco de meta-hemoglobinemia, cujo o tratamento é:",
      options: ["tiamina", "colestiramina", "acetilcisteina", "azul de metileno"],
      answerIndex: 3,
      explanation: "A meta-hemoglobinemia é uma complicação rara, mas grave, de drogas como a dapsona. O antídoto específico que acelera a redução da meta-hemoglobina de volta à hemoglobina funcional é o azul de metileno.",
      tag: "Toxicologia"
    },
    {
      id: "suseme-2019-q31",
      text: "A principal causa de pancreatite aguda é:",
      options: ["alcoólica", "biliar", "idiopática", "hipertrigliceridemia"],
      answerIndex: 1,
      explanation: "No Brasil e na maior parte do mundo, a principal causa de pancreatite aguda é a litíase biliar, onde um cálculo migra e obstrui o ducto pancreático. A segunda causa mais comum é a ingesta alcoólica.",
      tag: "Gastroenterologia"
    },
    {
      id: "suseme-2019-q32",
      text: "Utiliza-se para o diagnóstico diferencial de doença restritiva ou obstrutiva pulmonar a espirometria. A doença obstrutiva diferencia-se por:",
      options: [
        "volume residual reduzido e aumento da capacidade vital",
        "aumento da capacidade vital; redução do volume residual e aumento do volume expiratório forçado no 1's",
        "volume residual aumentado e aumento da capacidade vital forçada",
        "redução da capacidade vital; aumento do volume residual e redução do volume expiratório forçado no 1's"
      ],
      answerIndex: 3,
      explanation: "A doença obstrutiva (ex: DPOC, asma) é caracterizada pela dificuldade em expirar o ar. Na espirometria, isso se traduz em uma redução do VEF1 e da relação VEF1/CVF. Cronicamente, leva ao aprisionamento aéreo, com aumento do Volume Residual (VR) e redução da Capacidade Vital (CV).",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2019-q33",
      text: "Para o tratamento da crise de asma é preconizado:",
      options: [
        "agonista beta-adrenérgica e corticosteroide",
        "beta-bloqueador e anticolinérgico",
        "agonista alfa-adrenérgico e inibidor fosfodiesterase",
        "beta-bloqueador e acetilcisteina"
      ],
      answerIndex: 0,
      explanation: "Os dois pilares do tratamento da crise asmática são: 1) um broncodilatador de ação rápida para reverter o broncoespasmo (agonista beta-adrenérgico, como salbutamol) e 2) um corticoide sistêmico para tratar a inflamação subjacente.",
      tag: "Pneumologia"
    },
    {
      id: "suseme-2019-q34",
      text: "A estratégia mais benéfica na prevenção de nefropatia relacionada ao contraste iodado é:",
      options: [
        "utilização de diurético antes do procedimento",
        "hidratação vigorosa antes do procedimento",
        "administração de N-acetilcisteína após o procedimento",
        "administração de solução bicarbonatada após procedimento"
      ],
      answerIndex: 1,
      explanation: "A medida isolada mais eficaz para prevenir a nefropatia induzida por contraste em pacientes de risco é a expansão volêmica com soro fisiológico isotônico, iniciada antes e mantida após o procedimento.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2019-q35",
      text: "Para a correção da hipercalemia aguda utiliza-se:",
      options: ["insulina venosa", "reposição de magnésio", "antagonista de cálcio", "reposição de fósforo"],
      answerIndex: 0,
      explanation: "A administração de insulina intravenosa (junto com glicose para evitar hipoglicemia) é uma das medidas mais eficazes e rápidas para reduzir os níveis séricos de potássio, pois promove o deslocamento do potássio do meio extracelular para o intracelular.",
      tag: "Nefrologia"
    },
    {
      id: "suseme-2019-q36",
      text: "Jovem com confusão mental, náuseas, vômitos, taquipneia e dor abdominal. Exames: glicemia 585, sódio 125, creatinina 1.8, leucocitose, amilase elevada, pH arterial 7.1. O diagnóstico mais provável é:",
      options: ["uremia", "pancreatite", "sepse abdominal", "cetoacidose diabética"],
      answerIndex: 3,
      explanation: "A tríade de hiperglicemia acentuada (>250), acidose metabólica (pH < 7.3) e presença de cetonas (inferida pelo quadro clínico e acidose) fecha o diagnóstico de Cetoacidose Diabética (CAD). A dor abdominal e a leucocitose são manifestações comuns da CAD.",
      tag: "Endocrinologia"
    },
    {
      id: "suseme-2019-q37",
      text: "O antibiótico preconizado para bactérias Gram-negativas como Pseudomonas aeruginosa é a:",
      options: ["ceftazidima", "oxacilina", "clindamicina", "vancomicina"],
      answerIndex: 0,
      explanation: "A Ceftazidima é uma cefalosporina de terceira geração com excelente cobertura antipseudomonas. As outras opções não têm atividade contra Pseudomonas aeruginosa.",
      tag: "Infectologia"
    },
    {
      id: "suseme-2019-q38",
      text: "A adenosina é um antiarrítmico utilizado na seguinte arritmia:",
      options: [
        "taquicardia ventricular",
        "taquicardia supraventricular",
        "bradicardia sinusal",
        "bloqueio atrioventricular"
      ],
      answerIndex: 1,
      explanation: "A adenosina é uma droga de ação ultrarrápida que bloqueia o nó atrioventricular, sendo o tratamento de escolha para reverter a Taquicardia Supraventricular por Reentrada Nodal.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2019-q39",
      text: "Manchas de Janeway são pequenas hemorragias palmar e plantar encontradas na seguinte doença:",
      options: ["sifilis", "endocardite bacteriana aguda", "murcomicose", "sarcoma de Kaposi"],
      answerIndex: 1,
      explanation: "As manchas de Janeway são lesões hemorrágicas, indolores, localizadas nas palmas das mãos e plantas dos pés, e são um dos sinais periféricos clássicos da endocardite infecciosa, causadas por microembolias sépticas.",
      tag: "Cardiologia"
    },
    {
      id: "suseme-2019-q40",
      text: "É sinal de tamponamento cardíaco no exame fisico:",
      options: [
        "pulso paradoxal",
        "pressão jugular reduzida",
        "aumento da amplitude do QRS no eletrocardiograma",
        "eletrocardiograma sem alteração"
      ],
      answerIndex: 0,
      explanation: "O pulso paradoxal, uma queda acentuada (>10 mmHg) da pressão arterial sistólica durante a inspiração, é um dos sinais mais específicos do tamponamento cardíaco. A pressão jugular estaria elevada, e o ECG tipicamente mostra baixa voltagem e alternância elétrica.",
      tag: "Cardiologia"
    }
  ]
},
{
  id: "prova-suseme-2018-emergencia",
  name: "SUSEME - Emergência - 2018 ",
  questions: [
    {
      id: "suseme-2018-q1",
      text: "Paciente de 58 anos de idade chega à emergência com cefaleia súbita, acompanhada de confusão mental e hemiplegia direita. A tomografia computadorizada de crânio revela hemorragia subaracnóidea com classificação Fisher IV. Sobre essa situação clínica, é correto afirmar que:",
      options: [
        "o uso de bloqueador de canal de cálcio modifica a evolução do vasoespasmo arteriográfico",
        "a ruptura de aneurisma cerebral pode ser descartada com o exame de fundo de olho",
        "pela classificação de Hunt e Hess, esse paciente teria um bom prognóstico",
        "o ressangramento e a hidrocefalia são complicações cerebrais precoces"
      ],
      answerIndex: 3,
      explanation: "O ressangramento (principalmente nas primeiras 24h) e a hidrocefalia aguda (por obstrução do fluxo liquórico pelo sangue) são as complicações precoces mais temidas da hemorragia subaracnóidea. A nimodipina (bloqueador de canal de cálcio) é usada para prevenir o vasoespasmo, mas não modifica o achado arteriográfico. O fundo de olho não descarta aneurisma. Hunt-Hess avalia a clínica, e um paciente com confusão e hemiplegia teria um prognóstico ruim (grau IV).",
      tag: "Neurologia - AVE"
    },
    {
      id: "suseme-2018-q2",
      text: "Paciente com febre e sepse grave, devido a cateter venoso central com sítio de inserção infectado. Considerando esse quadro, a conduta apropriada é:",
      options: [
        "coletar culturas, retirar o cateter e iniciar antibiótico",
        "coletar hemoculturas, retirar o cateter e não iniciar antibiótico",
        "coletar swab da secreção do sitio de inserção e retirar o cateter",
        "manter o cateter, coletar culturas e iniciar antibiótico após essa coleta"
      ],
      answerIndex: 0,
      explanation: "Diante de uma infecção de corrente sanguínea relacionada a cateter com sinais de sepse, a conduta mandatória é a remoção imediata do dispositivo (fonte da infecção), a coleta de hemoculturas (do cateter e periféricas) e o início imediato de antibioticoterapia empírica.",
      tag: "Infectologia - Sepse"
    },
    {
      id: "suseme-2018-q3",
      text: "Sobre a insuficiência renal secundária à rabdomiólise, é correto afirmar que:",
      options: [
        "deve-se tentar manter débito urinário maior que 150 mL/h",
        "os diuréticos osmóticos devem ser utilizados para diminuir o risco de insuficiência renal",
        "cerca de 90% dos pacientes com rabdomiólise não traumática apresentam dor intensa à compressão muscular",
        "a reposição volêmica inicial deve ser feita com 30 mL/kg de peso, durante 30 minutos e, idealmente, com solução hipertônica (solução salina a 3%)"
      ],
      answerIndex: 0,
      explanation: "O pilar do tratamento da rabdomiólise é a hidratação venosa agressiva para forçar a diurese e prevenir a deposição de mioglobina nos túbulos renais. O alvo é um débito urinário alto, classicamente entre 150-300 mL/h. Diuréticos não são a primeira linha. A dor muscular pode estar ausente. A reposição é com solução isotônica (soro fisiológico).",
      tag: "Nefrologia - IRA"
    },
    {
      id: "suseme-2018-q4",
      text: "Podem ser indicações de terapia de substituição renal:",
      options: [
        "hipervolemia, acidose e hipernatremia",
        "encefalopatia urêmica, acidose e intoxicação por acetaminofeno",
        "hiperfosfatemia, arritmias pela uremia e acidose metabólica refratária",
        "encefalopatia urêmica, acidose metabólica refratária e intoxicação por betabloqueador"
      ],
      answerIndex: 3,
      explanation: "As indicações clássicas de diálise de urgência são resumidas pelo mnemônico AEIOU: Acidose (refratária), Eletrólitos (hipercalemia refratária), Intoxicações (por substâncias dialisáveis como salicilatos, lítio, metanol - não betabloqueador ou acetaminofeno), Overload (hipervolemia refratária) e Uremia (encefalopatia, pericardite). A opção D contém duas indicações corretas.",
      tag: "Nefrologia - Diálise"
    },
    {
      id: "suseme-2018-q5",
      text: "Paciente com edema pulmonar cardiogênico por emergência hipertensiva e um ecocardiograma recente, com função sistólica normal e disfunção diastólica leve. A medida inicial mais adequada é:",
      options: ["morfina", "furosemida", "dobutamina", "nitroprussiato"],
      answerIndex: 3,
      explanation: "Numa emergência hipertensiva com edema agudo de pulmão, a prioridade é reduzir a pós-carga para aliviar o trabalho do ventrículo esquerdo. O nitroprussiato é um vasodilatador arterial e venoso potente e de ação rápida, sendo a droga de escolha. Furosemida é importante, mas a vasodilatação é a medida principal. Dobutamina é para choque cardiogênico. Morfina é adjuvante.",
      tag: "Cardiologia - Hipertensão"
    },
    {
      id: "suseme-2018-q6",
      text: "Paciente pré-escolar apresentando prurido em todo o couro cabeludo há 15 dias. Ao exame físico, nota-se a presença de lêndeas e piolhos. A melhor conduta terapêutica é:",
      options: [
        "condenar o uso do vinagre, devido à resistência dos piolhos",
        "explicar que escovas de cabelo não são causas de reinfestação após o tratamento",
        "informar que as lêndeas viáveis são eliminadas com o uso de ivermectina oral",
        "indicar a utilização de permetrina a 1 ou 5% pela ação ovicida e parasiticida"
      ],
      answerIndex: 3,
      explanation: "O tratamento de primeira linha para pediculose do couro cabeludo é a permetrina tópica a 1%, que tem ação tanto contra o piolho adulto (parasiticida) quanto contra os ovos (ovicida). Ivermectina oral não elimina lêndeas. Fômites como escovas são importantes na reinfestação.",
      tag: "Pediatria - Dermatologia"
    },
    {
      id: "suseme-2018-q7",
      text: "O quadro que melhor define cetoacidose diabética é:",
      options: [
        "glicemia: 126 mg/dL; pH: 6,9; bicarbonato: 19 mg/dL; cetonúria: 2+/4+",
        "glicemia: 90 mg/dL; pH: 7,27; bicarbonato: 31 mg/dL; cetonúria: 1+/4+",
        "glicemia: 330 mg/dL; pH: 7,13; bicarbonato: 8 mg/dL; cetonúria: 3+/4+",
        "glicemia: 650 mg/dL; pH: 7,32; bicarbonato: 21 mg/dL; cetonúria: 4+/4+"
      ],
      answerIndex: 2,
      explanation: "Os critérios diagnósticos para Cetoacidose Diabética (CAD) são: 1) Hiperglicemia (>250 mg/dL), 2) Acidose metabólica (pH < 7,3 e/ou Bicarbonato < 18 mEq/L) e 3) Cetonemia ou cetonúria. A opção C é a única que preenche todos os critérios.",
      tag: "Endocrinologia - Diabetes"
    },
    {
      id: "suseme-2018-q8",
      text: "Paciente de 65 anos de idade, portador de Diabetes mellitus, apresenta-se com quadro de febre alta, mialgia, dor retro-orbitária, dor abdominal e vômitos. Considerou-se tratar de dengue. A classificação desse quadro e a conduta, nesse momento, devem ser de:",
      options: [
        "dengue grave, sem alteração de parâmetros perfusionais",
        "dengue provável, com internação em unidade de terapia intensiva para monitorização",
        "dengue provável, com sinais de alerta; internação hospitalar com reposição volêmica inicial de 10 a 20 mL/kg",
        "dengue grave, com alteração de parâmetros perfusionais; internação em unidade de terapia intensiva com reposição volêmica de 20 mL/kg em 20 minutos"
      ],
      answerIndex: 2,
      explanation: "O paciente apresenta dor abdominal e vômitos, que são sinais de alerta para dengue (Grupo C). A conduta para dengue com sinais de alerta é a internação hospitalar com hidratação venosa imediata.",
      tag: "Infectologia - Dengue"
    },
    {
      id: "suseme-2018-q9",
      text: "Um paciente é admitido na emergência com insuficiência hepática aguda. São achados que confirmam o diagnóstico:",
      options: [
        "ictericia e encefalopatia",
        "encefalopatia e hemiplegia",
        "ictericia e prolongamento do tempo de protrombina",
        "encefalopatia e prolongamento do tempo de protrombina"
      ],
      answerIndex: 3,
      explanation: "A insuficiência hepática aguda é definida pelo desenvolvimento de encefalopatia hepática e coagulopatia (alargamento do tempo de protrombina / INR ≥ 1,5) em um paciente sem doença hepática crônica prévia. Icterícia é comum, mas não definidora.",
      tag: "Gastroenterologia - Hepatologia"
    },
    {
      id: "suseme-2018-q10",
      text: "Em relação ao derrame e ao tamponamento pericárdicos, é correto afirmar que:",
      options: [
        "a pressão pericárdica, quando normal, não interfere na pressão transmural ventricular",
        "o desempenho de ambos os ventrículos é prejudicado simultaneamente no tamponamento pericárdico",
        "nos casos de tamponamento de rápida instalação, como no hemopericárdico, a distensão jugular é sempre aparente",
        "insuficiência cardíaca grave pode resultar em derrame pericárdico transudativo, como consequência de pressões de enchimento ventricular demasiadamente elevadas ou drenagem pericárdica obstruída"
      ],
      answerIndex: 3,
      explanation: "O aumento crônico das pressões de enchimento cardíaco na insuficiência cardíaca grave pode levar a um desequilíbrio hidrostático e ao acúmulo de líquido transudativo no espaço pericárdico. As outras afirmações são incorretas: a pressão pericárdica normal é próxima de zero, mas interfere; no tamponamento, o ventrículo direito é afetado primeiro; a distensão jugular pode estar ausente em hipovolemia.",
      tag: "Cardiologia - Pericárdio"
    },
    {
      id: "suseme-2018-q11",
      text: "Ao receber um paciente não intubado apresentando doença obstrutiva agudizada (DPOC agudizada) na emergência, os sinais que devem ser imediatamente pesquisados na admissão, definindo a decisão de intubação são:",
      options: [
        "dificuldade de falar, dor ao respirar (escala de Borg), batimento de asa do nariz, diaforese e hipotermia",
        "nível de consciência, história recente de contato com fungos e alérgenos, história de viagens ao exterior recentes, história vacinal contra pneumococo e influenza, oximetria de pulso e condição hemodinâmica",
        "dificuldade de falar, uso de musculatura acessória, frequência respiratória, fluxo inspiratório (respiração curta), hipóxia (oximetria), nivel de consciência e condição hemodinâmica",
        "se é a primeira vez que tem uma crise grave, dificuldade para completar frases curtas, se a secreção mudou de aspecto, se já foi intubado devido a esse problema, se é diabético, se faz uso de corticoide prévio e se apresenta antecedentes para contrair o virus HIV"
      ],
      answerIndex: 2,
      explanation: "A decisão de intubar um paciente com DPOC agudizado baseia-se em sinais de insuficiência respiratória iminente, que incluem: rebaixamento do nível de consciência, instabilidade hemodinâmica, hipoxemia grave e sinais de exaustão da musculatura respiratória (uso de musculatura acessória, respiração paradoxal, incapacidade de falar).",
      tag: "Pneumologia - DPOC"
    },
    {
      id: "suseme-2018-q12",
      text: "No traumatismo de crânio, deve-se avaliar preferencialmente:",
      options: [
        "sensibilidade, resposta motora e pupilas",
        "sensibilidade, pupilas e condição ventilatória",
        "resposta motora, pupila e condição ventilatória",
        "resposta motora, resposta verbal e abertura ocular"
      ],
      answerIndex: 3,
      explanation: "A avaliação neurológica padronizada no trauma é a Escala de Coma de Glasgow, que avalia três parâmetros: abertura ocular, melhor resposta verbal e melhor resposta motora.",
      tag: "Neurologia - TCE"
    },
    {
      id: "suseme-2018-q13",
      text: "Paciente dá entrada na emergência com quadro de mal asmático necessitando do uso de corticoide. Deve-se fazer profilaxia da seguinte parasitose:",
      options: ["Giardia lamblia", "Ascaris lumbricoides", "Schistosoma mansoni", "Strongyloides stercoralis"],
      answerIndex: 3,
      explanation: "O uso de corticoides sistêmicos pode desencadear a hiperinfecção por Strongyloides stercoralis, um quadro potencialmente fatal. Por isso, em pacientes com risco epidemiológico, a profilaxia (ou tratamento empírico) com ivermectina é recomendada.",
      tag: "Infectologia - Parasitoses"
    },
    {
      id: "suseme-2018-q14",
      text: "O efeito de massa é mais frequente no seguinte traumatismo craniano:",
      options: ["hematoma extradural", "hematoma intracerebral", "hematoma subdural agudo", "hemorragia subaracnóidea"],
      answerIndex: 2,
      explanation: "O hematoma subdural agudo, comum em idosos e causado pela ruptura de veias ponte, tende a se espalhar pela superfície cerebral e costuma ser maior e causar mais efeito de massa e desvio de linha média do que os outros tipos de sangramento.",
      tag: "Neurologia - TCE"
    },
    {
      id: "suseme-2018-q15",
      text: "Paciente em coma, apresentando crise convulsiva generalizada. A conduta inicial é:",
      options: ["diazepan", "fenobarbital", "dexametasona", "clorpromazina"],
      answerIndex: 0,
      explanation: "O tratamento de primeira linha para cessar uma crise convulsiva em andamento é a administração de um benzodiazepínico de ação rápida, como diazepam ou midazolam.",
      tag: "Neurologia - Epilepsia"
    },
    {
      id: "suseme-2018-q16",
      text: "Paciente portador de sinais flogísticos em joelho esquerdo associados à linfangite inguinal. O antibiótico venoso de uso preferencial nesse caso é:",
      options: ["penicilina G cristalina", "metronidazol", "clindamicina", "cefalotina"],
      answerIndex: 0,
      explanation: "O quadro é de erisipela, uma infecção de pele causada principalmente pelo Streptococcus pyogenes. O agente de primeira escolha para o tratamento é a penicilina. Cefalotina seria uma alternativa.",
      tag: "Infectologia - Pele"
    },
    {
      id: "suseme-2018-q17",
      text: "A seguinte droga está relacionada ao hipotireoidismo:",
      options: ["quinidina", "propafenona", "amiodarona", "propranolol"],
      answerIndex: 2,
      explanation: "A amiodarona é rica em iodo e pode tanto induzir hipotireoidismo (pelo efeito de Wolff-Chaikoff) quanto tireotoxicose. É uma causa clássica de disfunção tireoidiana induzida por drogas.",
      tag: "Endocrinologia - Tireoide"
    },
    {
      id: "suseme-2018-q18",
      text: "No pneumotórax hipertensivo, a conduta mais correta é:",
      options: ["toracocentese", "tomografia de tórax", "radiografia de tórax", "intubação orotraqueal e ventilação"],
      answerIndex: 0,
      explanation: "O pneumotórax hipertensivo é uma emergência com risco de vida iminente. O diagnóstico é clínico e o tratamento é imediato com descompressão torácica por agulha (toracocentese) no 2º espaço intercostal, linha hemiclavicular, sem aguardar exames de imagem.",
      tag: "Pneumologia - Trauma"
    },
    {
      id: "suseme-2018-q19",
      text: "Os sintomas mais encontrados em intoxicação aguda por cocaína são:",
      options: ["hipotermia e nistagmo", "nistagmo e arritmia cardíaca", "hipertermia e arritmia cardíaca", "hipotermia e hipertensão arterial"],
      answerIndex: 2,
      explanation: "A cocaína causa uma síndrome simpatomimética maciça, levando a agitação, hipertensão, taquicardia (arritmias), midríase e, caracteristicamente, hipertermia, que pode ser grave e fatal.",
      tag: "Toxicologia - Intoxicações"
    },
    {
      id: "suseme-2018-q20",
      text: "Em paciente diabético e etilista com pneumonia, o germe que primariamente deve ser considerado é:",
      options: ["Klebsiella pneumoniae", "Staphylococcus aureus", "Haemophilus influenzae", "Streptococcus pneumoniae"],
      answerIndex: 0,
      explanation: "A Klebsiella pneumoniae é classicamente associada a pneumonias em pacientes etilistas crônicos e diabéticos, podendo causar quadros graves com necrose e formação de abscessos (pneumonia do lobo pesado).",
      tag: "Pneumologia - Pneumonia"
    },
    {
      id: "suseme-2018-q21",
      text: "A causa mais comum de embolia cerebral é:",
      options: ["fibrilação atrial", "cardiopatia reumática", "prótese valvar cardiaca", "cardiomiopatia dilatada"],
      answerIndex: 0,
      explanation: "A fibrilação atrial é a arritmia sustentada mais comum e a principal causa de AVC cardioembólico, devido à formação de trombos no átrio esquerdo que podem migrar para a circulação cerebral.",
      tag: "Cardiologia - Arritmias"
    },
    {
      id: "suseme-2018-q22",
      text: "Acidose metabólica está associada, na maioria das vezes:",
      options: ["à hipercalemia", "à hipernatremia", "ao aumento do BE", "ao aumento de pCO2"],
      answerIndex: 0,
      explanation: "Na acidose metabólica, o excesso de íons H+ no sangue entra nas células em troca de íons de potássio, que saem para o sangue, resultando em hipercalemia. Aumento de pCO2 causa acidose respiratória.",
      tag: "Nefrologia - Distúrbios Ácido-Base"
    },
    {
      id: "suseme-2018-q23",
      text: "Paciente de 60 anos de idade internado com pneumonia bacteriana. O sinal clínico abaixo mais indicativo de gravidade do quadro é:",
      options: ["temperatura axilar > 39°C", "frequência cardiaca > 100 bpm", "frequência respiratória > 30 irpm", "pressão arterial < 100x60 mmHg"],
      answerIndex: 2,
      explanation: "No escore de gravidade CURB-65 para pneumonia, uma frequência respiratória ≥ 30 irpm é um dos critérios que pontua e indica maior gravidade e necessidade de internação. Os outros sinais também podem estar presentes, mas a taquipneia é um marcador prognóstico forte.",
      tag: "Pneumologia - Pneumonia"
    },
    {
      id: "suseme-2018-q24",
      text: "Uma droga que NÃO determina necrose tubular aguda é:",
      options: ["anfotericina B", "alfametildopa", "aminoglicosideo", "contraste iodado"],
      answerIndex: 1,
      explanation: "Aminoglicosídeos, anfotericina B e contraste iodado são causas clássicas de nefrotoxicidade por necrose tubular aguda (NTA). A alfametildopa está mais associada a nefrite intersticial aguda, um mecanismo diferente de lesão renal.",
      tag: "Nefrologia - IRA"
    },
    {
      id: "suseme-2018-q25",
      text: "A disfunção que mais comumente é responsável pela insuficiência cardiaca congestiva (ICC) é a:",
      options: [
        "do ventriculo direito",
        "sistólica de ventriculo esquerdo",
        "diastólica de ventrículo esquerdo",
        "sistodiastólica de ventriculo esquerdo"
      ],
      answerIndex: 1,
      explanation: "A insuficiência cardíaca com fração de ejeção reduzida (ICFEr), ou disfunção sistólica do ventrículo esquerdo, é a forma mais classicamente estudada e uma das mais prevalentes de ICC, causada por doenças como infarto do miocárdio e miocardiopatia dilatada.",
      tag: "Cardiologia - ICC"
    },
    {
      id: "suseme-2018-q26",
      text: "Um paciente após episódio de hipovolemia apresentou, na avaliação laboratorial, ureia=138 mg/dL, creatinina=3,2 mg/dL. O clínico administrou furosemida e a diurese na hora seguinte foi de 60 mL. A melhor conduta é:",
      options: [
        "indicar tratamento dialitico",
        "diminuir a hidratação do paciente",
        "aumentar a hidratação do paciente",
        "manter sempre o uso de diurético"
      ],
      answerIndex: 2,
      explanation: "O paciente apresenta uma insuficiência renal aguda (IRA) com relação ureia/creatinina > 40, sugerindo um componente pré-renal por hipovolemia. A resposta inadequada ao diurético indica que o paciente ainda está depletado de volume. A conduta correta é otimizar a hidratação.",
      tag: "Nefrologia - IRA"
    },
    {
      id: "suseme-2018-q27",
      text: "Paciente diabética em puerpério imediato, apresenta dor súbita em hipocôndrio direito, vômitos e diminuição do peristaltismo. USG abdominal mostra vesicula biliar distendida de paredes espessadas, sem cálculos. A hipótese diagnóstica e a conduta apropriada nesse caso são:",
      options: [
        "colecistite aguda com tratamento em regime de internação hospitalar",
        "gastroenterite aguda com tratamento em regime ambulatorial",
        "cólica biliar com tratamento em regime de internação hospitalar",
        "doença péptica duodenal com tratamento em regime de internação hospitalar"
      ],
      answerIndex: 0,
      explanation: "O quadro clínico e ultrassonográfico (vesícula distendida, paredes espessadas) é de colecistite aguda. A ausência de cálculos caracteriza a colecistite alitiásica, uma forma mais grave, comum em pacientes críticos, diabéticos e puérperas. O tratamento é internação, antibioticoterapia e colecistectomia.",
      tag: "Cirurgia - Vias Biliares"
    },
    {
      id: "suseme-2018-q28",
      text: "Paciente masculino com 35 anos de idade apresenta quadro agudo caracterizado por febre com calafrio, mialgia intensa e cefaleia. Ao exame fisico, destacam-se febre e intensa dor à palpação de panturrilhas. Há história epidemiológica de limpeza de esgoto domiciliar há cerca de 10 dias. A principal hipótese diagnóstica é:",
      options: ["dengue", "leptospirose", "febre amarela", "endocardite"],
      answerIndex: 1,
      explanation: "A história epidemiológica de contato com esgoto/água de enchente associada ao quadro de febre e mialgia intensa, especialmente com dor em panturrilhas, é altamente sugestiva de leptospirose.",
      tag: "Infectologia - Leptospirose"
    },
    {
      id: "suseme-2018-q29",
      text: "Paciente de 36 anos de idade chega à emergência alegando dor insuportável. Queixa-se de dorsalgia há mais ou menos 6 meses. A radiografia da coluna torácica revela colapso parcial de T5 e T6 e erosão de disco intervertebral. O diagnóstico mais provável é:",
      options: ["osteoporose", "tuberculose", "osteosarcoma", "metástase de carcinoma brônquico"],
      answerIndex: 1,
      explanation: "O acometimento de corpos vertebrais adjacentes com destruição do disco intervertebral é a apresentação radiológica clássica da espondilodiscite tuberculosa, também conhecida como Mal de Pott. Metástases e osteoporose geralmente poupam o disco.",
      tag: "Infectologia - Tuberculose"
    },
    {
      id: "suseme-2018-q30",
      text: "São elementos essenciais de evidência clínica de morte encefálica:",
      options: [
        "sinal de Babinski, coma e bradicardia",
        "hipotermia, taquicardia e apneia total",
        "hipotensão arterial, arritmia respiratória e bradicardia",
        "arreflexia total, apneia total e pupilas não fotorreagentes"
      ],
      answerIndex: 3,
      explanation: "Os pilares do diagnóstico clínico de morte encefálica são: 1) Coma aperceptivo arreativo; 2) Ausência de reflexos de tronco (incluindo pupilas fixas e não fotorreagentes); e 3) Apneia persistente, confirmada pelo teste da apneia.",
      tag: "Neurologia - Morte Encefálica"
    },
    {
      id: "suseme-2018-q31",
      text: "Paciente feminino, 30 anos de idade, com história de alcoolismo, apresenta quadro de neuropatia, fraqueza, perda muscular, edema e oftalmoplegia. O diagnóstico mais provável é deficit de:",
      options: ["niacina", "tiamina", "vitamina C", "vitamina B12"],
      answerIndex: 1,
      explanation: "O etilismo crônico leva à deficiência de tiamina (Vitamina B1). A oftalmoplegia é parte da tríade da Encefalopatia de Wernicke. A neuropatia e fraqueza são manifestações do Beribéri. A combinação dos quadros aponta fortemente para a deficiência de tiamina.",
      tag: "Nutrologia - Vitaminas"
    },
    {
      id: "suseme-2018-q32",
      text: "Paciente, 73 anos de idade, com história de tosse com secreção, dor torácica e febre há 1 semana. Ao exame fisico: regular estado geral, taquipneia; murmúrio vesicular diminuido em 1/3 inferior de hemitórax direito e macicez à percussão. A radiografia de tórax mostra opacidade em 1/3 inferior de hemitórax direito. O provável diagnóstico é:",
      options: [
        "pneumonia com derrame pleural",
        "enfisema pulmonar",
        "neoplasia pulmonar",
        "tuberculose"
      ],
      answerIndex: 0,
      explanation: "A combinação de achados de consolidação (sugestivos de pneumonia) com macicez à percussão e murmúrio vesicular diminuído na base pulmonar é a apresentação clássica de uma pneumonia que evoluiu com derrame pleural parapneumônico.",
      tag: "Pneumologia - Derrame Pleural"
    },
    {
      id: "suseme-2018-q33",
      text: "O medicamento de escolha como tratamento de manutenção da constipação intestinal em uma criança com 4 anos de idade é:",
      options: ["lactulose", "enema fosfatado", "leite de magnésia", "polietilenoglicol (PEG) 3350 ou 4000"],
      answerIndex: 3,
      explanation: "O Polietilenoglicol (PEG) sem eletrólitos é considerado o laxante osmótico de primeira linha para o tratamento de manutenção da constipação funcional em crianças, devido à sua eficácia e melhor tolerabilidade (menos flatulência e cólicas) em comparação com a lactulose.",
      tag: "Pediatria - Gastroenterologia"
    },
    {
      id: "suseme-2018-q34",
      text: "Para uma criança de 5 anos de idade com crise aguda de asma, no serviço de emergência, o medicamento indicado na primeira linha de tratamento é:",
      options: [
        "sulfato de magnésio",
        "corticosteroide via inalatória",
        "cromoglicato dissódico via inalatória",
        "beta-2 agonista de curta duração via inalatória"
      ],
      answerIndex: 3,
      explanation: "O tratamento inicial e mais importante da crise aguda de asma é o alívio rápido do broncoespasmo, obtido com a inalação de um beta-2 agonista de curta duração (SABA), como o salbutamol. Corticoides sistêmicos são usados em conjunto, mas o SABA é a primeira linha.",
      tag: "Pediatria - Pneumologia"
    },
    {
      id: "suseme-2018-q35",
      text: "As causas mais comuns de anafilaxia no Brasil entre crianças e adolescentes são:",
      options: [
        "vacinas, picadas de insetos e medicamentos",
        "corantes, picadas de insetos e medicamentos",
        "alimentos, picadas de insetos e medicamentos",
        "conservantes, picadas de insetos e medicamentos"
      ],
      answerIndex: 2,
      explanation: "A tríade de alimentos (leite, ovo, amendoim, frutos do mar), picadas de insetos (principalmente himenópteros como abelhas e formigas) e medicamentos (principalmente antibióticos e AINEs) responde pela grande maioria dos casos de anafilaxia em todas as faixas etárias.",
      tag: "Pediatria - Alergia"
    },
    {
      id: "suseme-2018-q36",
      text: "Jovem com 20 anos de idade chega ao pronto-socorro, com história de fadiga e tolerância reduzida aos esforços, dor óssea, dor torácica e febricula. Ao exame, apresenta: mucosas hipocoradas, discreta ictericia e pele de cor acinzentada. O diagnóstico mais provável é:",
      options: [
        "anemia falciforme",
        "leucemia linfoide aguda",
        "leucemia mieloide crônica",
        "anemia hipoproliferativa da insuficiência renal"
      ],
      answerIndex: 0,
      explanation: "A combinação de anemia crônica (fadiga, palidez), icterícia (pela hemólise) e crises álgicas (dor óssea, dor torácica) em um jovem é a apresentação clássica da Anemia Falciforme. A cor acinzentada pode estar relacionada à cronicidade da doença.",
      tag: "Hematologia - Anemias"
    },
    {
      id: "suseme-2018-q37",
      text: "Escolar apresenta quadro febril exantemático sugestivo de dengue com 4 dias de evolução. As alterações no exame fisico e no hemograma que podem indicar o agravamento do caso são:",
      options: [
        "taquicardia, dispneia, plaquetopenia e anemia",
        "sonolência, bradicardia, sangramento e plaquetose",
        "irritabilidade, sangramento, velocidade de hemossedimentação elevada e plaquetose",
        "hepatomegalia dolorosa, hipotensão postural, elevação do hematócrito e plaquetopenia"
      ],
      answerIndex: 3,
      explanation: "Estes são todos sinais de alarme e de gravidade na dengue, indicando extravasamento plasmático: hepatomegalia dolorosa, hipotensão postural (indicando hipovolemia), elevação do hematócrito (hemoconcentração) e plaquetopenia.",
      tag: "Infectologia - Dengue"
    },
    {
      id: "suseme-2018-q38",
      text: "Menina de 10 anos com febre, hepatoesplenomegalia, adenomegalia cervical, faringoamigdalite e surgimento de um exantema maculopapular após o uso de amoxacilina. Estado geral preservado. O diagnóstico clínico mais provável é:",
      options: ["rubéola", "escarlatina", "exantema súbito", "mononucleose infecciosa"],
      answerIndex: 3,
      explanation: "A tríade de febre, faringite e linfonodomegalia (principalmente cervical posterior) em adolescente ou pré-adolescente é altamente sugestiva de Mononucleose Infecciosa. O surgimento de um rash após o uso de amoxicilina é um achado clássico e quase patognomônico.",
      tag: "Infectologia - Mononucleose"
    },
    {
      id: "suseme-2018-q39",
      text: "Na escarlatina, as manifestações clínicas mais evidentes são:",
      options: [
        "adenomegalia regional e amigdalite",
        "boca vermelha, febre alta e dor nas articulações",
        "rash cutâneo pruriginoso, coriza hialina e dor de garganta",
        "febre elevada, faringite, palidez peribucal, lingua em morango branca no início do quadro, eritema difuso começando no pescoço e parte superior do tronco"
      ],
      answerIndex: 3,
      explanation: "A opção D descreve com perfeição a sequência clássica de sinais e sintomas da Escarlatina, incluindo a faringite, febre, a língua em morango (inicialmente branca, depois vermelha), a palidez perioral (Sinal de Filatov) e o exantema característico.",
      tag: "Infectologia - Escarlatina"
    },
    {
      id: "suseme-2018-q40",
      text: "Em relação ao tratamento recomendado pela Organização Mundial de Saúde (OMS) para a diarreia aguda em crianças, é correto afirmar que:",
      options: [
        "deve-se suspender temporariamente o aleitamento materno no início do quadro diarreico",
        "o aumento da cobertura vacinal contra o sarampo não reduziu a gravidade das doenças diarreicas",
        "terapia de reidratação oral, administração de zinco e dieta adequada à idade são as opções terapêuticas mais eficazes",
        "os antibióticos administrados por via oral são contraindicados em todos os casos de doença diarreica"
      ],
      answerIndex: 2,
      explanation: "Os três pilares do tratamento da diarreia aguda, segundo a OMS, são: 1) Terapia de Reidratação Oral para prevenir e tratar a desidratação; 2) Suplementação com Zinco para reduzir a duração e gravidade do episódio; 3) Manutenção da alimentação adequada para a idade, sem suspender o aleitamento materno.",
      tag: "Pediatria - Gastroenterologia"
    }
  ]
},
  {
    id: "preset-oftalmologia-1",
    name: "  Estácio - M7 - PR1 - oftalmologia",
    questions: [
      {
        id: "oftalmo-q1-2",
        text: "Paciente de 22 anos, sexo feminino, refere baixa de acuidade visual súbita no olho esquerdo (OE) há 3 dias. Associado refere moscas volantes. Exame: AV 20/80 no OE, fundo de olho com papilite, foco inflamatório macular, vasculite e exsudação vítrea. Caso não fosse possível ver o fundo de olho, que exame poderia ser realizado?",
        options: [
          "Gonioscopia",
          "Angiografia fluoresceínica",
          "Ultrassonografia ocular",
          "Tomografia de coerência óptica"
        ],
        answerIndex: 2,
        explanation: "A ultrassonografia ocular é o exame de escolha para avaliar as estruturas do fundo de olho quando há opacidade de meios que impede a visualização direta.",
        tag: "Uveíte"
      },
      {
        id: "oftalmo-q1-3",
        text: "Paciente de 22 anos, sexo feminino, com diagnóstico provável de toxoplasmose ocular. Caso a paciente estivesse grávida, qual a melhor opção terapêutica específica?",
        options: [
          "Pirimetamina e sulfadiazina",
          "Espiramicina",
          "Clindamicina",
          "Ácido fólico"
        ],
        answerIndex: 1,
        explanation: "Em gestantes com toxoplasmose ocular, a Espiramicina é a medicação de escolha para o tratamento, visando proteger o feto.",
        tag: "Uveíte"
      },
      {
        id: "oftalmo-q2-3",
        text: "Paciente de 64 anos com baixa de visão nos dois olhos (20/60) que não melhora com correção. Qual afirmativa sobre o exame do reflexo vermelho é correta?",
        options: [
          "É um exame que só pode ser realizado com a pupila dilatada",
          "Pode estar alterado em casos de catarata congênita",
          "É um procedimento exclusivo do médico oftalmologista",
          "Não se altera em pacientes com altas ametropias"
        ],
        answerIndex: 1,
        explanation: "O reflexo vermelho, ou 'teste do olhinho', pode estar ausente ou alterado em diversas condições que causam opacidade no eixo visual, sendo a catarata congênita uma das principais causas a serem investigadas.",
        tag: "Semiologia"
      },
      {
        id: "oftalmo-q2-4",
        text: "Paciente de 64 anos com achados de microaneurismas, hemorragias e exsudatos duros na mácula. O que se entende por 'estrela macular' na retinopatia hipertensiva?",
        options: [
          "Acúmulo de exsudatos duros em forma de estrela ao redor da mácula",
          "Acúmulo de exsudatos algodonosos em forma de estrela ao redor da mácula",
          "Acúmulo de sangue em forma de estrela ao redor da mácula",
          "Acúmulo de neovasos em forma de estrela ao redor da mácula"
        ],
        answerIndex: 0,
        explanation: "A estrela macular, um sinal de retinopatia hipertensiva grave, é definida pelo acúmulo de exsudatos duros (lipídicos) que se depositam seguindo a orientação das fibras nervosas ao redor da mácula.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q31",
        text: "Paciente 65 anos, três meses após um AVE, apresenta no campo visual perda da metade direita da visão em ambos os olhos. Qual o provável local da lesão na via óptica?",
        options: [
          "Quiasma óptico",
          "Radiações ópticas à esquerda",
          "Trato óptico à direita",
          "Córtex occipital à esquerda"
        ],
        answerIndex: 3,
        explanation: "A perda do campo visual temporal de um olho e nasal do outro (hemianopsia homônima direita) indica uma lesão contralateral retroquiasmática. A perda completa de um hemicampo sugere lesão no córtex occipital.",
        tag: "Neuro-oftalmologia"
      },
      {
        id: "oftalmo-q32",
        text: "Que exame ocular deve ser solicitado ou feito para um recém-nascido prematuro em UTI, pelo médico da UTI neonatal?",
        options: [
          "Teste do olhinho",
          "Exame externo com lanterna",
          "Teste do reflexo corneano",
          "Exame de fundoscopia com oftalmologista"
        ],
        answerIndex: 3,
        explanation: "Em recém-nascidos de risco, especialmente prematuros, o exame de fundoscopia por um oftalmologista é mandatório para rastreio da retinopatia da prematuridade.",
        tag: "Oftalmopediatria"
      },
      {
        id: "oftalmo-q43",
        text: "Quais das medidas de acuidade visual abaixo indica a pior visão?",
        options: ["20/200 (ou 0,1)", "10/100", "5/50", "0,05"],
        answerIndex: 3,
        explanation: "As acuidades 20/200, 10/100 e 5/50 são todas equivalentes a 0,1 na notação decimal. A acuidade visual de 0,05 representa uma visão pior que todas as outras opções.",
        tag: "Semiologia"
      },
      {
        id: "oftalmo-q49",
        text: "Dentre os fatores de risco para a retinopatia diabética, qual está mais relacionado a presença de exsudatos duros no exame de fundoscopia:",
        options: [
          "Tabagismo",
          "Hipertensão arterial sistêmica",
          "Dislipidemia",
          "Nefropatia diabética"
        ],
        answerIndex: 2,
        explanation: "A dislipidemia está diretamente relacionada à formação de exsudatos duros (depósitos lipídicos) na retina de pacientes com retinopatia diabética.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q51",
        text: "Em relação ao astigmatismo, qual afirmativa é verdadeira?",
        options: [
          "A distância dos focos causa mais turvação no astigmatismo hipermetrópico composto.",
          "O valor do cilindro é determinado pela distância entre os focos.",
          "Uma lente cilíndrica brasileira tem sempre duas curvaturas côncavas.",
          "A superfície da córnea que causa o astigmatismo pode ser esférica."
        ],
        answerIndex: 1,
        explanation: "O valor do cilindro na prescrição óptica corresponde à diferença de poder refrativo entre os dois meridianos principais, que é o que determina a distância entre os dois focos.",
        tag: "Refração"
      },
      {
        id: "oftalmo-q58",
        text: "Qual das alterações vasculares estruturais abaixo ocorre na retinopatia hipertensiva:",
        options: [
          "Modificação vascular ocorre principalmente nos capilares",
          "Espessamento da membrana basal",
          "Hipertrofia da túnica média arteriolar",
          "Aumento da agregação plaquetária"
        ],
        answerIndex: 2,
        explanation: "A hipertensão arterial crônica leva a uma resposta de hipertrofia da camada média (muscular) das arteríolas como forma de conter o aumento da pressão, o que leva ao seu estreitamento.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q62",
        text: "No exame de fundoscopia qual recurso do aparelho de oftalmoscopia direta poderíamos fazer para melhorar a análise vascular da retina:",
        options: [
          "Luz vermelha",
          "Luz verde",
          "Luz azul",
          "Luz amarela"
        ],
        answerIndex: 1,
        explanation: "A luz verde (aneritra) aumenta o contraste dos vasos sanguíneos retinianos em relação ao fundo da retina, facilitando sua análise.",
        tag: "Semiologia"
      },
      {
        id: "oftalmo-q63",
        text: "Dentre as alterações fundoscópicas relacionadas abaixo quais têm maior correlação com pacientes dislipidêmicos e com placa de ateroma em artéria carótida interna respectivamente:",
        options: [
          "Cruzamentos arteriovenosos e trombose venosa retiniana",
          "Exsudatos algodonosos e hemorragias em chama de vela",
          "Exsudatos duros e êmbolos arteriais retinianos",
          "Hemorragias vítreas e neovasos"
        ],
        answerIndex: 2,
        explanation: "Exsudatos duros são depósitos lipídicos (relacionados à dislipidemia) e êmbolos arteriais retinianos frequentemente se originam de placas de ateroma na carótida.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q64",
        text: "Dentre as opções abaixo num paciente com retinopatia diabética proliferativa, qual possível complicação direta dos neovasos:",
        options: [
          "Hifema",
          "Descolamento de retina",
          "Hemorragia vítrea",
          "Edema macular"
        ],
        answerIndex: 2,
        explanation: "Neovasos são frágeis e propensos a sangramento, sendo a hemorragia vítrea uma das complicações mais comuns e diretas da retinopatia diabética proliferativa.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q65-4",
        text: "Entende-se por discoria:",
        options: [
          "Pupila com formato irregular",
          "Mudança na cor da pupila",
          "Pupilas com tamanhos diferentes",
          "Pupilas com tamanhos iguais"
        ],
        answerIndex: 0,
        explanation: "Discoria é o termo médico utilizado para descrever uma pupila com formato irregular, que não é circular.",
        tag: "Semiologia"
      },
      {
        id: "oftalmo-q68",
        text: "Paciente com hiperemia conjuntival, lacrimejamento e sensação de irritação ocular, deve fazer inicialmente:",
        options: [
          "Lavar e fazer compressas com soro fisiológico",
          "Prescrever colírio corticoide urgente devido à inflamação",
          "Prescrever colírio corticoide associado a antibiótico",
          "Lavar e fazer compressas com água morna copiosamente"
        ],
        answerIndex: 0,
        explanation: "A conduta inicial mais segura para um olho vermelho inespecífico, antes de um diagnóstico definitivo, é a lavagem e compressas com soro fisiológico, que não oferecem risco ao paciente.",
        tag: "Doenças Externas"
      },
      {
        id: "oftalmo-q71",
        text: "Qual das alterações clínicas abaixo presentes no paciente diabético está comumente associada a gênese do glaucoma neovascular:",
        options: [
          "Edema macular",
          "Hemorragia vítrea",
          "Neovasos de íris",
          "Edema de disco óptico"
        ],
        answerIndex: 2,
        explanation: "O glaucoma neovascular é causado pelo crescimento de neovasos na íris e no ângulo da câmara anterior, que obstruem a drenagem do humor aquoso, elevando drasticamente a pressão ocular.",
        tag: "Glaucoma"
      },
      {
        id: "oftalmo-q72",
        text: "Sobre os neovasos na retinopatia diabética, marque a alternativa FALSA:",
        options: [
          "Quando presentes indicam um risco de perda grave da visão",
          "São responsáveis pela classificam da retinopatia diabética na forma não proliferativa",
          "Tem associação com a presença de áreas de isquemia retiniana",
          "O Fator de crescimento vascular derivado do endotélio (VEGF) é a principal proteína envolvida no seu aparecimento"
        ],
        answerIndex: 1,
        explanation: "A presença de neovasos é justamente o que define a forma proliferativa da retinopatia diabética, que é a forma mais grave da doença.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q73",
        text: "No exame de fundoscopia qual dos recursos presentes no oftalmoscópio direto permite melhor análise do disco óptico e das arcadas vasculares:",
        options: [
          "Luz aneritra",
          "Luz em fenda",
          "Luz azul de cobalto",
          "Luz Vermelha"
        ],
        answerIndex: 1,
        explanation: "A luz em fenda permite avaliar relevos e depressões, sendo útil para analisar a escavação do disco óptico.",
        tag: "Semiologia"
      },
      {
        id: "oftalmo-q74",
        text: "Marque a alternativa correta sobre a fundoscopia realizada com o oftalmoscópio direto:",
        options: [
          "A luz aneritra ajuda a definir se o reflexo vermelho está alterado",
          "Possui uma excelente visão com estereopsia",
          "Tem o maior campo de visão quando comparado a oftalmoscopia indireta",
          "Tem sua iluminação com menor versatilidade e recursos que a biomicroscopia de fundo"
        ],
        answerIndex: 3,
        explanation: "A biomicroscopia de fundo (realizada na lâmpada de fenda com lentes especiais) oferece uma iluminação muito mais versátil e uma visão estereoscópica superior à da oftalmoscopia direta.",
        tag: "Semiologia"
      },
      {
        id: "oftalmo-q75",
        text: "Qual das opções abaixo tem mais correlação com a retinopatia hipertensiva:",
        options: [
          "Hemorragia em chama de vela",
          "Hemorragias conjuntivais",
          "Hemorragias vítreas",
          "Hitema"
        ],
        answerIndex: 0,
        explanation: "As hemorragias em chama de vela, localizadas na camada de fibras nervosas da retina, são um achado característico da retinopatia hipertensiva.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q76",
        text: "Dentre as alterações fundoscópicas descritas abaixo, qual tem associação com a maior incidência de mortalidade, e precisa de pesquisa de investigação sistêmica com ecocardiograma transtorácico e ecodoppler de carotidas:",
        options: [
          "Hemorragias retinianos",
          "Exsudatos duros",
          "Êmbolos arteriais",
          "Cruzamentos arteriovenosos patológicos"
        ],
        answerIndex: 2,
        explanation: "A presença de êmbolos nas artérias da retina (como as Placas de Hollenhorst) indica um alto risco de eventos embólicos sistêmicos (como AVC), sendo mandatória a investigação da fonte, principalmente coração e carótidas.",
        tag: "Retinopatia"
      },
      {
        id: "oftalmo-q80-4",
        text: "Paciente de 30 anos sofreu acidente com água sanitária no olho direito, e sua visão caiu de 20/20 (normal) para 20/200 com correção. Qual a acuidade visual de olho direito que pode-se dizer que o paciente perdeu em função do acidente?",
        options: ["90%", "80%", "10%", "20%"],
        answerIndex: 0,
        explanation: "Considerando 20/20 como 100% de visão (eficiência de 1.0) e 20/200 como 20% de visão (eficiência de 0.1), a perda foi de 80%.",
        tag: "Trauma"
      },
      {
        id: "oftalmo-q81",
        text: "Qual das opções abaixo é a mais característica das uveítes posteriores:",
        options: [
          "Flare",
          "Vitreíte",
          "Sinéquias posteriores",
          "Hipópio"
        ],
        answerIndex: 1,
        explanation: "Vitreíte, que é a inflamação do vítreo com presença de células inflamatórias, é o sinal mais característico das uveítes posteriores. Flare, sinéquias e hipópio são sinais de uveíte anterior.",
        tag: "Uveíte"
      },
      {
        id: "oftalmo-q82-3a",
        text: "Dentre os fatores de risco abaixo, qual o mais importante no aparecimento e progressão do glaucoma primário de ângulo aberto?",
        options: [
          "Pressão intra-ocular elevada",
          "Idade avançada",
          "Tabagismo",
          "Exposição ao ultravioleta"
        ],
        answerIndex: 0,
        explanation: "A pressão intra-ocular elevada é o principal e mais importante fator de risco para o desenvolvimento e progressão do glaucoma primário de ângulo aberto.",
        tag: "Glaucoma"
      },
      {
        id: "oftalmo-q82-3b",
        text: "Qual das alternativas abaixo pode ser uma causa de leucocoria?",
        options: [
          "Conjuntivite neonatal",
          "Retinopatia da prematuridade",
          "Esotropia congênita",
          "Ptose palpebral"
        ],
        answerIndex: 1,
        explanation: "A retinopatia da prematuridade, em seus estágios mais avançados, pode levar a um descolamento de retina e à formação de uma membrana fibrótica atrás do cristalino, causando leucocoria (reflexo branco na pupila).",
        tag: "Oftalmopediatria"
      },
      {
        id: "oftalmo-q82-4",
        text: "Sobre a ambliopia, marque a alternativa falsa:",
        options: [
          "Trata-se de uma doença que afeta tanto o olho quanto o sistema nervoso central",
          "O desenvolvimento da visão se estende-se até os dez anos, mas aos cinco a visão atinge 20/20",
          "Na ambliopia por privação, não há estímulo visual podendo ser causado por uma catarata congênita",
          "O tratamento ideal deve ser direcionado para a causa da ambliopia com estímulo visual, podendo ser realizado com tanto na criança como no adulto"
        ],
        answerIndex: 3,
        explanation: "O tratamento da ambliopia tem maior eficácia durante o período de plasticidade neural, geralmente até os 7-10 anos de idade. No adulto, a capacidade de reverter a ambliopia é muito limitada ou nula.",
        tag: "Oftalmopediatria"
      },
      {
        id: "oftalmo-q82-5",
        text: "Quanto ao Glaucoma Agudo, conhecido como Glaucoma da emergência, marque a alternativa correta:",
        options: [
          "O paciente com glaucoma agudo não pode ter como manifestação clínica o olho vermelho",
          "Não é recomendado o exame de tonometria bidigital",
          "A tonometria de aplanação e o campo visual são essenciais para o diagnóstico rápido",
          "O tratamento eficaz requer estabilização da pressão intraocular medicamentosa e cirurgia"
        ],
        answerIndex: 3,
        explanation: "O tratamento do glaucoma agudo de ângulo fechado envolve a redução imediata da pressão intraocular com medicamentos (tópicos e sistêmicos), seguida por um procedimento a laser (iridotomia) ou cirúrgico para resolver a causa anatômica e prevenir novas crises.",
        tag: "Glaucoma"
      },
      {
        id: "oftalmo-q82-6",
        text: "Qual a primeira conduta em um acidente ocular por produto químico?",
        options: [
          "Lavagem",
          "Neutralizar com outro produto",
          "Usar antibiótico de largo espectro",
          "Usar antibiótico associado ao corticoide"
        ],
        answerIndex: 0,
        explanation: "A medida mais crucial e imediata em uma queimadura química ocular é a lavagem abundante e imediata do olho com soro fisiológico ou água limpa para diluir e remover o agente agressor.",
        tag: "Trauma"
      }
    ]
  },
  {
    id: "preset-pediatria-1",
    name: "  Estácio - M7 - PR1 - Pediatria",
    questions: [
      {
        id: "peds-q1",
        text: "Lactente do sexo masculino com 1 mês e 20 dias de vida apresenta febre, irritabilidade e vômitos. A hipótese diagnóstica é infecção do trato urinário. Exame de sedimento urinário por punção supra púbica revelou piócitos incontáveis e cilindros leucocitários. Hemograma demonstrou leucocitose e desvio para a esquerda. Qual a conduta mais correta?",
        options: [
          "Prescrever antibiótico oral enquanto é aguardada a urinocultura",
          "Internar para o uso de antibiótico parenteral com monitoramento da curva térmica",
          "Internar para antibioticoterapia oral com monitoramento da curva térmica",
          "Aguardar o resultado da urinocultura para confirmação diagnóstica e terapêutica"
        ],
        answerIndex: 1,
        explanation: "Em lactentes com menos de 2-3 meses com suspeita de ITU (Pielonefrite), a internação para antibioticoterapia parenteral é mandatória devido ao risco de sepse e à necessidade de garantir níveis séricos adequados do medicamento.",
        tag: "Pediatria"
      },
      {
        id: "peds-q2",
        text: "Paulo de 14 anos, está preocupado porque não está crescendo igual aos seus amigos. Ao exame apresenta peso e altura no gráfico entre +1 e +2; Tanner P1G1. O achado físico que configura puberdade atrasada é a ausência de:",
        options: [
          "Pelo pubianos aos 11 anos",
          "Pelos pubianos aos 12 anos",
          "Aumento testicular aos 13 anos",
          "Aumento testicular aos 14 anos"
        ],
        answerIndex: 3,
        explanation: "A puberdade atrasada no sexo masculino é definida pela ausência de aumento do volume testicular (primeiro sinal da puberdade) aos 14 anos de idade.",
        tag: "Pediatria"
      },
      {
        id: "peds-q3",
        text: "Criança de 5 anos chega à emergência gemente, taquipneico e com tiragem subcostal. Mãe refere febre, tosse e coriza há 72 horas. Oximetria revela SpO2 de 91% em ar ambiente. O diagnóstico provável e a conduta adequada são:",
        options: [
          "Síndrome gripal / prescrição de sintomáticos e retorno em 24 horas.",
          "Síndrome respiratória aguda grave / internação imediata em unidade de terapia intensiva pediátrica.",
          "Pneumonia adquirida na comunidade / antibioticoterapia oral e retorno em 48 horas.",
          "Asma não controlada / internação em enfermaria e prescrição de corticoide."
        ],
        answerIndex: 1,
        explanation: "A presença de sinais de gravidade como tiragem subcostal e hipoxemia (SpO2 < 92%) em uma criança com quadro respiratório agudo classifica o caso como Síndrome Respiratória Aguda Grave (SRAG), indicando necessidade de internação em UTI.",
        tag: "Pediatria"
      },
      {
        id: "peds-q4",
        text: "Associe as manifestações clínicas às suas respectivas doenças exantemáticas: 1. Febre alta que desaparece e surge exantema. 2. Linfonodomegalia cervical + febre baixa + rash. 3. Febre alta + eritema puntiforme + descamação. 4. Rash morbiliforme + tosse com coriza. 5. Exantema em face + aplasia de medula.",
        options: [
          "4-Sarampo, 3-Escarlatina, 1-Exantema Súbito, 5-Eritema Infeccioso, 2-Rubéola",
          "2-Sarampo, 1-Escarlatina, 5-Exantema Súbito, 3-Eritema Infeccioso, 4-Rubéola",
          "3-Sarampo, 5-Escarlatina, 4-Exantema Súbito, 1-Eritema Infeccioso, 2-Rubéola",
          "1-Sarampo, 2-Escarlatina, 4-Exantema Súbito, 3-Eritema Infeccioso, 5-Rubéola"
        ],
        answerIndex: 0,
        explanation: "A associação correta é: 4-Sarampo (pródromos catarrais), 3-Escarlatina (pele em lixa e descamação), 1-Exantema Súbito (febre cessa com o rash), 5-Eritema Infeccioso (face esbofeteada), 2-Rubéola (linfonodos retroauriculares).",
        tag: "Doenças Exantemáticas"
      },
      {
        id: "peds-q5",
        text: "Pré-escolar, 3 anos, com febre e tosse há 3 dias. Bom estado geral, afebril no momento, FR: 50 irpm, SatO2: 96%. AR: MV com discreta diminuição na base do HTE. A hipótese diagnóstica e conduta terapêutica adequada são:",
        options: [
          "Coqueluche / azitromicina IV / internação hospitalar",
          "Pneumonia atípica / azitromicina VO / tratamento ambulatorial",
          "Pneumonia bacteriana / amoxicilina VO / tratamento ambulatorial",
          "Pneumonia bacteriana / penicilina Cristalina IV / internação hospitalar"
        ],
        answerIndex: 2,
        explanation: "Criança entre 1-5 anos com taquipneia (FR > 40 irpm para a idade) e sem sinais de gravidade tem diagnóstico de Pneumonia. O tratamento de primeira linha para pneumonia adquirida na comunidade (PAC) não complicada nesta faixa etária é amoxicilina oral.",
        tag: "Pediatria"
      },
      {
        id: "peds-q6",
        text: "Bebê de 7 meses com tosse há 4 dias, \"cansadinho\", parou de mamar e teve febre. Ao exame: irritado, com esforço respiratório (tiragem subcostal), febre de 39,2°C e FR de 64 irpm. De acordo com o caso clínico, Jean apresenta:",
        options: [
          "Asma e deve iniciar corticoide e b2-agonista.",
          "Pneumonia e deve-se prescrever Amoxicilina em casa.",
          "Pneumonia grave e deve-se dar a primeira dose de antibiótico e encaminhar para atendimento hospitalar.",
          "Bronquiolite, e deve ser orientado lavagem nasal."
        ],
        answerIndex: 2,
        explanation: "Lactente com pneumonia (taquipneia, FR>50) e sinais de gravidade (tiragem subcostal e recusa alimentar) é classificado como Pneumonia Grave, exigindo antibioticoterapia imediata e encaminhamento para internação hospitalar.",
        tag: "Pediatria"
      },
      {
        id: "peds-q7",
        text: "Lactente de 2 meses com febre e vômitos há 24h, suspeita de ITU. Quais afirmativas são verdadeiras? 1. Icterícia prolongada e ausência de ganho ponderal corroboram a suspeita. 2. A presença de leucocitúria no EAS descarta a necessidade de urocultura. 3. O exame de imagem adequado é a tomografia. 4. O tratamento deverá ser realizado por via endovenosa.",
        options: ["1, 2, 3", "3, 4", "2, 3, 4", "1, 4"],
        answerIndex: 3,
        explanation: "1-Verdadeiro: Em lactentes, ITU pode se manifestar com sintomas inespecíficos como icterícia e baixo ganho de peso. 4-Verdadeiro: Em menores de 2-3 meses, o tratamento da ITU é sempre endovenoso e em regime de internação. 2 e 3 são falsos.",
        tag: "Pediatria"
      },
      {
        id: "peds-q8",
        text: "Menino de 3 anos com febre, dor à micção e três episódios prévios semelhantes. Assinale a afirmativa correta em relação a esse caso.",
        options: [
          "Se o EAS revelar leucocitúria e nitrito positivo não há necessidade de cultura de urina.",
          "Deverá ser solicitado uma ultrassonografia de vias urinárias.",
          "Se o EAS revelar hematúria e proteinúria está confirmado o diagnóstico.",
          "Deverá ser solicitado de imediato uma uretrocistografia miccional."
        ],
        answerIndex: 1,
        explanation: "Diante de um quadro de ITU de repetição em uma criança, a investigação de anormalidades anatômicas do trato urinário é mandatória. O exame de imagem inicial de escolha é a ultrassonografia de rins e vias urinárias.",
        tag: "Pediatria"
      },
      {
        id: "peds-q9",
        text: "Menina de 4 anos com febre há 2 dias, vômitos, dor abdominal e disúria, com outros dois episódios no último ano. Estado geral comprometido e dor à palpação na região supra púbica e no ângulo costofrênico direito. Além da urinocultura, está indicado:",
        options: [
          "Tratamento ambulatorial com nitrofurantoína",
          "Tratamento ambulatorial com cefuroxima oral",
          "Internação e início de tratamento com ampicilina endovenosa",
          "Internação e início de tratamento com cefuroxima endovenosa"
        ],
        answerIndex: 3,
        explanation: "Criança com sinais de pielonefrite (febre, dor no flanco) e comorbidades/sinais de gravidade (estado geral comprometido, vômitos) tem indicação de internação e antibioticoterapia endovenosa. Cefuroxima é uma opção de cefalosporina de segunda geração.",
        tag: "Pediatria"
      },
      {
        id: "peds-q10",
        text: "Um bebê nasceu com 38 semanas de gestação pesando 1800g, fruto de uma gestação com hipertensão arterial grave. Assinale a resposta adequada quanto a classificação e a alteração metabólica esperada:",
        options: [
          "A termo, adequado para idade gestacional com risco de hiperbilirrubinemia.",
          "Pré-termo tardio, grande para idade gestacional com risco de hipoglicemia.",
          "A termo, pequeno para idade gestacional com risco de hipoglicemia.",
          "Pré-termo pequeno para idade gestacional com risco de hiperbilirrubinemia."
        ],
        answerIndex: 2,
        explanation: "Um bebê com 38 semanas é considerado \"A termo\". Com 1800g, ele está abaixo do percentil 10 para a idade gestacional, sendo classificado como Pequeno para a Idade Gestacional (PIG). RNs PIG têm baixo estoque de glicogênio e estão em alto risco de hipoglicemia.",
        tag: "Pediatria"
      },
      {
        id: "peds-q11",
        text: "Escolar de 10 anos, asmático, em crise há 24 horas. Refere cansaço, despertares noturnos e necessidade de broncodilatadores. Ao exame: dispneia moderada, retrações subcostais, sibilos difusos, saturação de 96%. Trata-se de um provável caso de exacerbação:",
        options: [
          "Grave em um asmático controlado",
          "Leve em um asmático não controlado",
          "Moderada em um asmático não controlado",
          "Moderada em um asmático grave"
        ],
        answerIndex: 2,
        explanation: "A presença de retrações subcostais e a dispneia classificam a crise como moderada. Os sintomas de base (despertares noturnos, uso frequente de resgate) indicam que a asma não está controlada.",
        tag: "Pediatria"
      },
      {
        id: "peds-q12",
        text: "Adolescente de 12 anos com febre há 3 dias, tosse e dor abdominal. Ao exame: febre, taquicardia, taquipnéia, frêmito tóraco-vocal e murmúrio vesicular diminuído no 1/3 inferior do hemitórax direito. O agente etiológico mais provável é o:",
        options: [
          "Haemophilus influenzae",
          "Mycoplasma pneumoniae",
          "Staphylococcus aureus",
          "Streptococcus pneumoniae"
        ],
        answerIndex: 3,
        explanation: "O quadro clínico de pneumonia lobar (sinais localizados em um terço do tórax) em uma criança previamente hígida tem como principal agente etiológico o Streptococcus pneumoniae (pneumococo).",
        tag: "Pediatria"
      },
      {
        id: "peds-q13",
        text: "Dentre os parâmetros abaixo, um representa a necessidade de investigação quanto a baixa estatura:",
        options: [
          "Meninos com início de sinais pubertários aos 10 anos",
          "Escore Z estatural entre -3 e <-2 e velocidade do crescimento (VC) < 4,5 cm/ano",
          "Meninas com início de sinais pubertários aos 12 anos",
          "Escore Z estatural entre -2 e 1 e velocidade de crescimento (VC) entre 9 e 10 cm/ano"
        ],
        answerIndex: 1,
        explanation: "Uma velocidade de crescimento baixa (< p25 ou < 4,5 cm/ano após os 4 anos) associada a uma estatura já significativamente baixa (escore Z < -2) são indicações claras para investigação de baixa estatura patológica.",
        tag: "Pediatria"
      },
      {
        id: "peds-q14",
        text: "Em relação ao desenvolvimento puberal feminino é correto afirmar:",
        options: [
          "A pubarca costuma ser o primeiro sinal de puberdade",
          "Iniciada a fase puberal, o estirão do crescimento ocorre após a menarca",
          "A telarca é o primeiro sinal de puberdade",
          "É normal o surgimento do primeiro sinal de maturação sexual antes dos 8 anos"
        ],
        answerIndex: 2,
        explanation: "A telarca, o desenvolvimento do broto mamário, é o primeiro sinal físico da puberdade na grande maioria das meninas.",
        tag: "Pediatria"
      },
      {
        id: "peds-q15",
        text: "Em relação ao desenvolvimento puberal masculino é correto afirmar:",
        options: [
          "A semenarca ocorre no estágio 2 de Tanner",
          "O pico da velocidade do crescimento (PVC) ocorre no estágio 4 de Tanner",
          "O estirão do crescimento ocorre no estágio 2 de Tanner",
          "O aumento do pênis costuma ser o primeiro sinal de puberdade"
        ],
        answerIndex: 1,
        explanation: "No sexo masculino, o pico da velocidade de crescimento (o \"estirão\") é um evento mais tardio na puberdade, ocorrendo geralmente no estágio G4/P4 de Tanner.",
        tag: "Pediatria"
      },
      {
        id: "peds-q16",
        text: "Qual das afirmativas abaixo é correta?",
        options: [
          "É na primeira semana de vida, em especial no primeiro dia de vida, que se concentram as mortes infantis",
          "Só com a redução da pobreza é que teremos uma diminuição da mortalidade infantil",
          "As taxas de mortalidade infantil não têm sofrido alterações nos últimos anos",
          "Não faz parte da Rede Cegonha os cuidados com a gravidez"
        ],
        answerIndex: 0,
        explanation: "O período neonatal, especialmente a primeira semana de vida (período neonatal precoce), é o de maior risco e onde se concentram a maioria das mortes infantis, relacionadas a causas perinatais.",
        tag: "Pediatria"
      },
      {
        id: "peds-q17",
        text: "O exame físico geral do RN é de suma importância na sua avaliação clínica. Qual dos sinais abaixo pode ser indicativo de anormalidade?",
        options: [
          "Postura simétrica e fletida",
          "Fenômeno de Arlequim",
          "Vernix caseoso em todo o corpo de um RN com 36 semanas",
          "Gemidos expiratórios"
        ],
        answerIndex: 3,
        explanation: "Gemidos expiratórios em um recém-nascido são um sinal de alerta para desconforto respiratório. É uma tentativa de manter a pressão expiratória final positiva e evitar o colapso alveolar.",
        tag: "Pediatria"
      },
      {
        id: "peds-q18",
        text: "Com relação ao exame do crânio é correto afirmar:",
        options: [
          "O cefalohematoma necessita ser drenado ao ser detectado",
          "A bossa serossanguinolenta não respeita o limite dos ossos do crânio",
          "O cavalgamento dos ossos do crânio em um RN de parto vaginal é um sinal de anormalidade",
          "Tanto a fontanela bregmática quanto a lambdóide são amplas ao nascimento"
        ],
        answerIndex: 1,
        explanation: "A bossa serossanguinolenta é um edema do tecido subcutâneo do couro cabeludo. Por ser superficial ao periósteo, ela ultrapassa as linhas de sutura dos ossos cranianos.",
        tag: "Pediatria"
      },
      {
        id: "peds-q19",
        text: "Com relação ao exame da pele do RN podemos afirmar que:",
        options: [
          "O eritema tóxico está associado a uma infecção viral",
          "As máculas vasculares na nuca e pálpebras estão associadas a lesão neurológica",
          "O lanugo é abundante em RN pós termo",
          "Os hemangiomas quando localizados em segmento cefálico e face podem estar relacionados a convulsões"
        ],
        answerIndex: 3,
        explanation: "Grandes hemangiomas na face, especialmente seguindo a distribuição do nervo trigêmeo, podem estar associados a malformações do sistema nervoso central e oculares, como na Síndrome de Sturge-Weber, que pode cursar com convulsões.",
        tag: "Pediatria"
      },
      {
        id: "peds-q20",
        text: "Em relação ao boletim de Apgar, é correto afirmar que:",
        options: [
          "Define as condutas de reanimação neonatal",
          "A frequência respiratória pontua no boletim de apgar",
          "O Apgar do primeiro minuto conduz a reanimação neonatal",
          "O Apgar menor que sete no quinto minuto revela algum grau de asfixia"
        ],
        answerIndex: 3,
        explanation: "O escore de Apgar do 5º minuto é um importante indicador do prognóstico neurológico. Um valor < 7 neste momento está associado a um maior risco de asfixia perinatal e suas sequelas.",
        tag: "Pediatria"
      },
      {
        id: "peds-q21",
        text: "De acordo com a Caderneta de Saúde da Criança (Ministério da Saúde - 2017), a partir do 6º mês de vida, devemos fazer a suplementação de:",
        options: ["Cálcio", "Vitamina C", "Ferro", "Complexo B"],
        answerIndex: 2,
        explanation: "A suplementação profilática com ferro é recomendada para todas as crianças a partir dos 6 meses de idade (ou 3 meses para prematuros e baixo peso) para prevenir a anemia ferropriva.",
        tag: "Pediatria"
      },
      {
        id: "peds-q22",
        text: "As neoplasias são consideradas a primeira causa de óbito por doença na faixa etária de 1 a 19 anos. São considerados fatores de risco para neoplasias:",
        options: [
          "Autismo, galactossemia e hepatite B prévia",
          "Síndrome Apert, hidronefrose e ser portador de diabetes mellitus tipo 1",
          "Trissomia do 21, neurofibromatose tipo 1 e mononucleose prévia",
          "Síndrome Crouzon, coartação da aorta e ser portador do vírus HIV"
        ],
        answerIndex: 2,
        explanation: "A Trissomia do 21 (Síndrome de Down) aumenta significativamente o risco de leucemias. A Neurofibromatose tipo 1 predispõe a tumores do sistema nervoso. A infecção pelo vírus Epstein-Barr (mononucleose) está associada a linfomas.",
        tag: "Pediatria"
      },
      {
        id: "peds-q23",
        text: "Lucas, 6 meses de idade, vai à consulta de rotina. Baseado nos dados da caderneta da criança (MS/2017), uma criança de 6 meses de idade é capaz de:",
        options: [
          "Sorrir socialmente, emitir sons vocálicos e rolar na cama",
          "Manter-se de pé com apoio, segurar objetos e sentar com apoio",
          "Engatinhar, emitir sons vocálicos e imitar movimentos",
          "Apontar o que deseja, ajudar a se vestir e fazer pinça"
        ],
        answerIndex: 0,
        explanation: "Aos 6 meses, os marcos esperados incluem rolar, sentar com apoio, transferir objetos de uma mão para outra, emitir sons (balbucio) e o sorriso social. A alternativa A contém marcos compatíveis com a idade.",
        tag: "Pediatria"
      },
      {
        id: "peds-q24",
        text: "Em relação ao calendário vacinal do adolescente, assinale a alternativa correta:",
        options: [
          "Se o adolescente nunca recebeu vacina hepatite B, ele deve receber o esquema com 2 doses",
          "A vacina HPV é aplicada em um esquema de 2 doses",
          "Se o esquema contra difteria e tétano estiver incompleto, completar com intervalo de 10 anos",
          "A vacina da febre amarela deve ser aplicada a cada 15 anos"
        ],
        answerIndex: 1,
        explanation: "A vacina contra o HPV é recomendada para meninas de 9 a 14 anos e meninos de 11 a 14 anos, em um esquema de duas doses com intervalo de 6 meses.",
        tag: "Pediatria"
      },
      {
        id: "peds-q25",
        text: "Lactente de cinco meses, em aleitamento materno exclusivo, com peso e comprimento adequados. O exame físico revela que o bebê sustenta a cabeça, alcança objetos e fica sentado com apoio. A orientação adequada é:",
        options: [
          "Suplementar o aleitamento materno com fórmulas lácteas",
          "Solicitar cultura de urina",
          "Manter em aleitamento materno exclusivo",
          "Encaminhar a um programa de atenção à criança desnutrida"
        ],
        answerIndex: 2,
        explanation: "A criança apresenta crescimento e desenvolvimento neuropsicomotor adequados para a idade. A recomendação do Ministério da Saúde é manter o aleitamento materno exclusivo até os 6 meses de vida.",
        tag: "Pediatria"
      },
      {
        id: "peds-q26",
        text: "Qual o principal distúrbio metabólico associado ao crescimento intra-uterino restrito do RN?",
        options: ["Hipocalcemia", "Hiperglicemia", "Hipercalcemia", "Hipoglicemia"],
        answerIndex: 3,
        explanation: "Recém-nascidos com restrição de crescimento intrauterino (PIG - Pequenos para a Idade Gestacional) possuem reservas de glicogênio hepático diminuídas, o que os coloca em alto risco de desenvolver hipoglicemia no período neonatal.",
        tag: "Pediatria"
      },
      {
        id: "peds-q27",
        text: "Recém-nascido com 16 horas de vida apresenta icterícia até zona III de Kramer. RN O- e mãe A+. BT 9,3mg/dl e BD 3,2mg/dl. Qual a opção mais provável para o quadro?",
        options: [
          "Icterícia Fisiológica",
          "Hemólise por incompatibilidade do fator Rh",
          "Hepatite viral",
          "Icterícia do Leite Materno"
        ],
        answerIndex: 3,
        explanation: "O quadro descrito sugere hepatite viral, pois a icterícia iniciou precocemente (com apenas 16 horas de vida), a bilirrubina direta está elevada (3,2 mg/dl, indicando padrão colestático), e não há compatibilidade com icterícia fisiológica, que costuma surgir após 24 horas, nem com incompatibilidade Rh, já que a mãe é Rh positivo e o recém-nascido Rh negativo, além de não ser típico de icterícia do leite materno, que se manifesta apenas após os primeiros dias de vida.",
        tag: "Pediatria"
      },
      {
        id: "peds-q28",
        text: "RN com 5 dias, irritado, com pouco interesse pelo seio e ictérico até zona IV. Perda de peso >10%. Mãe refere dor ao amamentar e sem saída de leite à expressão. Qual afirmativa é correta?",
        options: [
          "A icterícia ocorreu exclusivamente por hemólise.",
          "O recém-nascido certamente encontra-se com uma baixa ingesta, fator que contribui para a piora da icterícia.",
          "O RN apresenta a fase aguda da encefalopatia bilirrubínica.",
          "As afirmativas A e C estão corretas."
        ],
        answerIndex: 1,
        explanation: "A perda de peso acentuada (>10%), a irritabilidade e a dificuldade de amamentação indicam uma baixa ingesta calórica. Isso leva a um aumento da circulação entero-hepática da bilirrubina, piorando a icterícia.",
        tag: "Pediatria"
      },
      {
        id: "peds-q29",
        text: "Sobre amamentação é correto afirmar que:",
        options: [
          "A amamentação deve ocorrer em intervalos regulares e pré-determinados.",
          "O leite anterior é mais rico em gordura.",
          "A pega inadequada pode levar a baixa ingesta, predispondo ao aumento de valores de bilirrubina.",
          "O excedente de leite materno deve ser desprezado."
        ],
        answerIndex: 2,
        explanation: "Uma pega incorreta dificulta a extração eficiente do leite pelo bebê, levando a uma baixa ingesta calórica e hídrica. Isso diminui o trânsito intestinal e aumenta a reabsorção de bilirrubina (circulação entero-hepática), sendo uma causa importante de icterícia neonatal.",
        tag: "Pediatria"
      },
      {
        id: "peds-q30",
        text: "Bebê de mãe com eclampsia nasceu de parto cesáreo com 36 semanas pesando 2000g. Podemos classificar o bebê como:",
        options: [
          "A termo e com peso adequado para a idade gestacional",
          "Pós-termo e grande para idade gestacional",
          "Pré-termo tardio e com peso adequado para idade gestacional",
          "Pré-termo tardio e pequeno para idade gestacional"
        ],
        answerIndex: 3,
        explanation: "Um bebê com 36 semanas é um \"Pré-termo tardio\" (34 a 36 6/7 semanas). Com 2000g, ele está abaixo do peso esperado para a idade gestacional, sendo classificado como Pequeno para a Idade Gestacional (PIG).",
        tag: "Pediatria"
      },
      {
        id: "peds-q31",
        text: "Com relação à maturação sexual no sexo masculino, o seguinte marco sinaliza o inicio dessa maturação:",
        options: ["Pubarca", "Aumento do pênis", "Aumento do testículo", "Semenarca"],
        answerIndex: 2,
        explanation: "O primeiro sinal físico que marca o início da puberdade em meninos é o aumento do volume testicular (≥ 4 mL).",
        tag: "Pediatria"
      },
      {
        id: "peds-q32",
        text: "Daniel, 5 anos, contato intradomiciliar de tuberculose pulmonar bacilífera, tem PPD de 12 mm e RX de tórax normal. A conduta adequada para Daniel é:",
        options: [
          "Tratamento com esquema RIP.",
          "Repetir PPD em 8 semanas.",
          "Tratar infecção latente por tuberculose (ILTB) com isoniazida ou rifampicina.",
          "Tratamento com esquema RIPE."
        ],
        answerIndex: 2,
        explanation: "Uma criança > 5 anos, contato de TB, com PPD ≥ 10mm (ou ≥5mm para <5 anos) e sem evidência de doença ativa (RX normal, assintomático), tem diagnóstico de Infecção Latente por Tuberculose (ILTB) e deve receber tratamento para prevenir o adoecimento.",
        tag: "Pediatria"
      },
      {
        id: "peds-q33",
        text: "Pilar, 18 meses, com alimentação baseada em leite materno por recusa de outros alimentos. Suspeita de anemia ferropriva. Qual opção contempla as alterações encontradas no exame de sangue?",
        options: [
          "Microcitose, ferro sérico baixo e normocromia",
          "Microcitose, ferritina baixa e ferro sérico baixo",
          "Microcitose, saturação de transferrina normal e hipocromia",
          "Microcitose, ferritina aumentada e hipocromia"
        ],
        answerIndex: 1,
        explanation: "Na anemia ferropriva, os estoques de ferro se esgotam primeiro, levando a uma ferritina baixa. Em seguida, o ferro sérico cai. Com a falta de ferro para a produção de hemoglobina, as hemácias se tornam pequenas (microcitose).",
        tag: "Pediatria"
      },
      {
        id: "peds-q34",
        text: "Em relação à presença de icterícia neonatal, é motivo para investigação: I. Quando inicia nas primeiras 24 horas de vida. II. Quando ocorre por elevação de bilirrubina direta. III. Quando dura mais do que uma semana no recém-nascido a termo. Está(ão) correta(s):",
        options: [
          "Apenas a afirmativa I",
          "Apenas a afirmativa II",
          "Apenas as afirmativas I e II",
          "Todas as afirmativas"
        ],
        answerIndex: 3,
        explanation: "Todos os itens são sinais de alerta para icterícia patológica: início precoce (<24h), presença de colestase (aumento de bilirrubina direta) e icterícia prolongada (além de 14 dias em RN a termo).",
        tag: "Pediatria"
      },
      {
        id: "peds-q35",
        text: "Suellen foi diagnosticada com Covid-19 (sintomas leves) e entrou em trabalho de parto. Com relação ao atendimento em sala de parto do RN, é correto afirmar que o:",
        options: [
          "Aleitamento materno está indicado com precauções respiratórias da mãe",
          "Bebê pode ser colocado sobre o abdome materno após a extração",
          "Clampeamento do cordão umbilical deverá ser feito imediatamente",
          "Bebê deve ser isolado de sua mãe até a negativação do teste de PCR"
        ],
        answerIndex: 0,
        explanation: "O aleitamento materno é recomendado e incentivado mesmo em mães com Covid-19, desde que sejam tomadas as devidas precauções, como o uso de máscara pela mãe e a higiene das mãos e mamas.",
        tag: "Pediatria"
      }
    ]
  },
    {
    id: "preset-hematologia-1",
    name: "  Estácio - M7 - PR1 - Hematologia",
    questions: [
      // Leucemia Aguda
      {
        id: "hemato-q1",
        text: "Paciente jovem chega a emergência por extremo cansaço associado a sangramentos disseminados, pálido e febril. Hemograma revela pancitopenia. Aspirado de medula revela leucemia aguda. Como primeira conduta devemos ter:",
        options: [
          "Iniciar antibióticos de amplo espectro para gram negativos de forma imediata",
          "Colher nova medula para imunofenotipagem e citogenética",
          "Realizar um PET tc para estadiar a enfermidade",
          "Colher hemoculturas e aguardar a conclusão para buscar o antibiótico mais correto"
        ],
        answerIndex: 0,
        explanation: "Em um paciente com leucemia aguda, febre e pancitopenia (neutropenia), o risco de sepse é altíssimo. A conduta prioritária é o início imediato de antibioticoterapia de amplo espectro (febre neutropênica), mesmo antes da confirmação do agente.",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q2",
        text: "Paciente de 15 anos, com diagnóstico de Leucemia aguda, apresenta pancitopenia, dores ósseas e sangramentos intensos. Entra em coagulação intravascular disseminada (CIVD), sangramento cerebral e óbito. Esta evolução se relaciona geralmente a:",
        options: ["LLA B", "LMA M5", "LMA M3", "LMA M2"],
        answerIndex: 2,
        explanation: "A Leucemia Promielocítica Aguda (LMA M3) é classicamente associada a um alto risco de Coagulação Intravascular Disseminada (CIVD) e sangramentos graves no momento do diagnóstico.",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q3",
        text: "Criança, 7 anos, com LLA-B, cariótipo complexo e t(4;11). Resposta irregular a corticoides e 8% de blastos no D33. Diante da avaliação de doença residual mínima, qual a melhor opção?",
        options: [
          "Alongar o tempo de tratamento com protocolos clássicos",
          "Utilizar protocolos de quimioterapia mais agressivos buscando a cura",
          "Programar transplante de medula alogênico assim que conseguir aproximar a doença de remissão",
          "Levar o protocolo ao seu fim e transplantar a seguir"
        ],
        answerIndex: 2,
        explanation: "A presença de múltiplos fatores de alto risco (citogenética desfavorável, resposta lenta ao tratamento) indica um prognóstico ruim. A melhor chance de cura é alcançar a remissão e consolidar o tratamento com um transplante de medula óssea alogênico.",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q4",
        text: "Mulher, 30 anos, com sangramento gengival, febre, dores ósseas e pancitopenia. Diagnóstico de LMA. Qual a mais provável, com grande possibilidade de CIVD?",
        options: ["Mieloblástica", "Monocítica", "Eritroleucemia", "Promielocítica"],
        answerIndex: 3,
        explanation: "Novamente, a associação de Leucemia Mieloide Aguda com alto risco de Coagulação Intravascular Disseminada (CIVD) aponta fortemente para a Leucemia Promielocítica (LMA M3).",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q5",
        text: "15 anos, feminino, com dores ósseas, cansaço e manchas roxas. Exame com poucos gânglios, leve esplenomegalia e crescimento irregular da gengiva. Imunofenotipagem revela leucemia aguda. Qual a mais provável?",
        options: ["LMA M5", "LLA T", "LMA M2", "LLA Pré B"],
        answerIndex: 0,
        explanation: "A infiltração gengival é um achado clássico das leucemias agudas com componente monocítico, como a Leucemia Mielomonocítica Aguda (M4) e, principalmente, a Leucemia Monocítica Aguda (M5).",
        tag: "Leucemia Aguda"
      },
      {
        id: "hemato-q6",
        text: "A LLA ocorre preferencialmente em crianças. Dos achados abaixo, qual tem maior relevância para um pior prognóstico?",
        options: [
          "Idade entre 2 e 6 anos",
          "Leucocitose e massas ganglionares",
          "Grandes alterações citogenéticas e em biologia molecular",
          "Sexo feminino"
        ],
        answerIndex: 2,
        explanation: "Fatores genéticos e moleculares, como a presença de translocações de alto risco (ex: t(9;22) - Cromossomo Philadelphia) ou cariótipo complexo, são os preditores mais fortes de um prognóstico desfavorável na Leucemia Linfoide Aguda (LLA).",
        tag: "Leucemia Aguda"
      },
      // Anemias Hipoproliferativas
      {
        id: "hemato-q7",
        text: "A anemia ferropriva é o distúrbio carencial mais prevalente no mundo. Pode-se observar nesse cenário todas as alternativas abaixo, EXCETO:",
        options: [
          "Tratamento com sulfato ferroso oral longe das refeições e manutenção após normalização da hemoglobina",
          "Ausência de ingestão de carne, fonte principal da forma heme",
          "Os valores laboratoriais baixos da tríade de ferro, ferritina e capacidade total de ligação ao ferro",
          "Disfagia por formação de membrana esofageana"
        ],
        answerIndex: 2,
        explanation: "Na anemia ferropriva, o ferro sérico e a ferritina estão baixos, mas a Capacidade Total de Ligação do Ferro (TIBC) está AUMENTADA, refletindo a avidez do corpo por ferro.",
        tag: "Anemias"
      },
      {
        id: "hemato-q8",
        text: "Mulher, 28 anos, com DM1, hiperfluxo menstrual, etilismo e vegetarianismo, com fadiga. Sobre a discriminação laboratorial das possíveis anemias, é INCORRETO inferir que:",
        options: [
          "O RDW é útil na diferenciação de anemia ferropriva e beta-talassemia",
          "Na anemia por doença autoimune (anti-fator intrínseco), o VCM teria comportamento oposto ao da menorragia",
          "O receptor solúvel da transferrina é útil para identificar ferropenia em doença crônica",
          "O CHCM é um índice hematimétrico útil para diferenciar uma esferocitose hereditária de uma anemia por carência de ferro"
        ],
        answerIndex: 3,
        explanation: "O CHCM (Concentração de Hemoglobina Corpuscular Média) é caracteristicamente AUMENTADO na esferocitose hereditária, enquanto na anemia ferropriva ele está normal ou baixo. Portanto, ele é sim útil para diferenciar as duas condições.",
        tag: "Anemias"
      },
      {
        id: "hemato-q9",
        text: "Mulher, 44 anos, com cansaço, dor epigástrica e parestesia nos pés. Usa IBP. Hemograma: Hb 8, VCM 118, plaquetas 124.000. Determine V ou F: (1) Deficiência de B12 é o diagnóstico mais provável. (2) Transfusão está indicada para resolver a parestesia. (3) Na hematoscopia, encontraremos muitos reticulócitos.",
        options: ["FVF", "VFF", "VVF", "VVV"],
        answerIndex: 1,
        explanation: "(V) Anemia macrocítica (VCM 118) com sintomas neurológicos (parestesia) e uso de IBP aponta para deficiência de B12. (F) A transfusão trata a anemia, mas a parestesia melhora com a reposição de B12. (F) A anemia é hipoproliferativa, logo, a contagem de reticulócitos será baixa.",
        tag: "Anemias"
      },
      {
        id: "hemato-q10",
        text: "Homem de 60 anos com cansaço, palidez e epigastralgia. Hemograma: Hb 7, VCM 65, Plaquetas 550.000. Assinale a alternativa ERRADA:",
        options: [
          "Pela característica da anemia, a hipótese mais provável é de anemia ferropriva",
          "Pela contagem elevada de plaquetas, é fundamental o aspirado de medula óssea para afastar leucemia aguda",
          "É fundamental detalhar a história para localizar possíveis causas de sangramento oculto",
          "A contagem de reticulócitos nesse paciente deve ser baixa ou normal"
        ],
        answerIndex: 1,
        explanation: "A trombocitose (aumento de plaquetas) é um achado reacional comum na anemia ferropriva grave e não indica necessariamente uma doença medular primária como leucemia. A prioridade é investigar a causa da perda de ferro (sangramento oculto).",
        tag: "Anemias"
      }
    ]
  },
  {
    id: "preset-dermatologia-1",
    name: "  Estácio - M7 - PR1 - Dermatologia",
    questions: [
      // Micoses Superficiais e Profundas
      {
        id: "derm-q1",
        text: "Mulher, 52 anos, obesa e diabética. Queixa de \"coceira em baixo das mamas\". Ao exame: Área eritematosa na região inframamária, pruriginosa, bilateral de aspecto úmido com maceração esbranquiçada e lesões satélites. Qual a principal hipótese diagnóstica?",
        options: ["Tinha cruris", "Pitiríase versicolor", "Candidíase", "Esporotricose inguinal"],
        answerIndex: 2,
        explanation: "A presença de eritema em área de dobra (região inframamária), com maceração e lesões satélites em uma paciente com fatores de risco (obesidade, diabetes) é a apresentação clássica de Candidíase Intertriginosa.",
        tag: "Micoses"
      },
      {
        id: "derm-q2",
        text: "Homem, 18 anos, com máculas hipocrômicas, arredondadas e confluentes no dorso superior e ombros, com descamação fina. I. O sinal de Zileri positivo auxilia no diagnóstico. II. As lesões podem ser hipocrômicas, hipercrômicas ou eritematosas. III. É causada por fungo saprófita e lipofílico. IV. Pode causar nódulos nos pelos. V. Quando acomete as unhas chama-se perleche. Quais estão corretas?",
        options: ["I, II e III", "I, IV e V", "III, IV e V", "II, III e IV"],
        answerIndex: 0, // O gabarito original é E, mas a afirmativa I também está correta. A melhor opção seria I, II e III. Reavaliando, a opção E (II, III, IV) está incorreta pois IV (piedra) não tem relação. A opção A (I, II, III) é a mais correta.
        explanation: "O quadro é de Pitiríase Versicolor. I, II e III estão corretas. O Sinal de Zileri (descamação ao estiramento da pele) é característico. As lesões podem variar de cor. O agente (Malassezia) é um fungo saprófita e lipofílico. IV e V descrevem outras micoses.",
        tag: "Micoses"
      },
      {
        id: "derm-q3",
        text: "Mulher, 47 anos, com nódulo ulcerado no dorso da mão direita que progrediu com outros nódulos eritematosos em trajeto ascendente pelo braço. Qual a alternativa correta sobre a principal hipótese?",
        options: [
          "A forma clínica descrita é a apresentação mais comum da doença",
          "O tratamento com cetoconazol creme é empregado com grande eficácia",
          "O agente etiológico é um saprófita com reservatório natural a pele humana",
          "O exame direto é o padrão ouro para a confirmação diagnóstica"
        ],
        answerIndex: 0,
        explanation: "O quadro descrito é a forma linfocutânea da Esporotricose, que é a apresentação mais comum da doença, caracterizada pela disseminação ao longo dos vasos linfáticos.",
        tag: "Micoses"
      },
      {
        id: "derm-q4",
        text: "Mulher, 45 anos, com 2 placas eritematodescamativas pruriginosas, de bordas circinadas bem delimitadas e mais ativas que o centro, localizadas no abdome. Qual a resposta correta?",
        options: [
          "A confirmação diagnóstica necessita da lâmpada de wood com fluorescência amarelo-ouro",
          "O exame micológico direto com hifas curtas e curvas e blastosporos confirma o diagnóstico",
          "A principal hipótese é piedra branca",
          "Os agentes etiológicos dessa dermatose podem ser divididos em antropofílicos, geofílicos e zoofílicos"
        ],
        answerIndex: 3,
        explanation: "O quadro é de Tinea corporis (uma dermatofitose). Os dermatófitos, agentes causadores, são classificados de acordo com seu reservatório principal em antropofílicos (humanos), geofílicos (solo) e zoofílicos (animais).",
        tag: "Micoses"
      },
      {
        id: "derm-q5",
        text: "Em relação à candidíase é correto afirmar, exceto:",
        options: [
          "Pode ser desencadeada pelo uso prévio de antibioticoterapia de largo espectro",
          "Responde bem ao uso de fluconazol sistêmico",
          "Manifesta-se principalmente nas áreas extensoras dos membros superiores",
          "Frequentemente pode comprometer a mucosa oral"
        ],
        answerIndex: 2,
        explanation: "A candidíase manifesta-se preferencialmente em áreas de dobras (intertriginosas) e mucosas, e não nas áreas extensoras dos membros.",
        tag: "Micoses"
      },
      {
        id: "derm-q6",
        text: "A dermatofitose no couro cabeludo se manifesta clinicamente com:",
        options: [
          "Placas de alopecia com pelos tonsurados na superfície",
          "Placa de alopecia cicatricial",
          "Bolhas no couro cabeludo",
          "Vesículas no couro cabeludo"
        ],
        answerIndex: 0,
        explanation: "A Tinea capitis (dermatofitose do couro cabeludo) classicamente se apresenta com áreas de alopecia (perda de cabelo) onde os pelos se encontram quebrados rente à superfície (tonsura).",
        tag: "Micoses"
      },
      // Piodermites
      {
        id: "derm-q7",
        text: "Criança de 7 anos com surgimento recente de crostas melicéricas ao redor da boca e narinas, sem febre. Várias crianças com quadro semelhante na escola. Qual a principal complicação?",
        options: [
          "Glomerulonefrite difusa aguda",
          "Lesões sólidas por espessamento cutâneo",
          "Disseminação por flebotomíneos",
          "Infecção necrotizante que necessita drenagem"
        ],
        answerIndex: 0,
        explanation: "O quadro é de Impetigo não-bolhoso (crostoso), geralmente causado pelo Streptococcus pyogenes. Cepas nefritogênicas dessa bactéria podem levar à glomerulonefrite pós-estreptocócica como complicação tardia.",
        tag: "Piodermites"
      },
      {
        id: "derm-q8",
        text: "Homem de 57 anos, diabético, com eritema vivo, bem delimitado e edema doloroso em membro inferior esquerdo, associado a febre e adenomegalia inguinal. Qual a hipótese?",
        options: [
          "Ectima, com curso benigno",
          "Eczema de estase, indicando corticoide",
          "Reação tipo 1, indicando talidomida",
          "Erisipela, sendo necessário buscar uma porta de entrada"
        ],
        answerIndex: 3,
        explanation: "A descrição de uma placa eritematosa, edemaciada, quente, dolorosa e bem delimitada em membro inferior, com sintomas sistêmicos (febre), é a apresentação clássica da Erisipela. É fundamental procurar e tratar a porta de entrada da bactéria (fissuras, micoses).",
        tag: "Piodermites"
      },
      // Hanseníase
      {
        id: "derm-q9",
        text: "Mulher de 45 anos com múltiplas lesões infiltradas, anulares com borda interna nítida e externa apagada (em queijo suíço) e diminuição da sudorese local. Qual a opção correta?",
        options: [
          "Deve ser solicitada baciloscopia para os contatos domiciliares sem lesões",
          "Acometimento de nervo radial pode causar mão caída e do nervo ulnar a garra cubital",
          "O tempo de incubação da doença dura em média de 2 semanas a 2 meses",
          "Não há correlação entre a clínica e a imunidade do paciente"
        ],
        answerIndex: 1,
        explanation: "O quadro é de Hanseníase Dimorfa. O acometimento de nervos periféricos é uma característica central da doença. A lesão do nervo radial causa 'mão caída' e a do nervo ulnar, 'mão em garra'.",
        tag: "Hanseníase"
      },
      // Eczemas e Dermatites
      {
        id: "derm-q10",
        text: "Criança de 8 anos com pele sensível, apresenta placas eritemato-descamativas escoriadas e liquenificadas em fossa cubital, poplítea e pescoço, associada a xerose. Tem asma e conjuntivite alérgica. Qual o diagnóstico mais provável?",
        options: [
          "Dermatite seborreica",
          "Dermatite atópica",
          "Farmacodermia",
          "Psoríase"
        ],
        answerIndex: 1,
        explanation: "A combinação de eczema crônico pruriginoso em áreas de dobras (fossas cubital e poplítea), pele seca (xerose) e história pessoal de outras atopias (asma, conjuntivite alérgica) fecha o diagnóstico de Dermatite Atópica.",
        tag: "Eczemas"
      },
      // Psoríase
      {
        id: "derm-q11",
        text: "Homem de 70 anos com lesões crônicas eritemato-descamativas em joelhos e cotovelos, iniciou betabloqueador e evoluiu com eritema e descamação em quase toda superfície corporal. É correto afirmar:",
        options: [
          "Cursa com quadro cutâneo extenso sem comprometimento sistêmico",
          "A infiltração das lesões é a característica predominante",
          "A interrupção aguda de corticoide sistêmico é a terapia de escolha",
          "Na maioria dos casos, ocorre em pacientes com diagnóstico prévio de outra forma da doença"
        ],
        answerIndex: 3,
        explanation: "O quadro é de Psoríase Eritrodérmica, uma forma grave e generalizada. Frequentemente é desencadeada em pacientes que já possuem psoríase em placas (vulgar) por fatores como o uso de certos medicamentos (betabloqueadores) ou a retirada abrupta de corticoides sistêmicos.",
        tag: "Psoríase"
      },
      // Câncer de Pele
      {
        id: "derm-q12",
        text: "Mulher de 22 anos com lesão hiperpigmentada assintomática na região plantar esquerda há 2 anos. Ao exame: mancha hipercrômica, heterogênea, com bordas irregulares, assimétrica, com 1 cm. Qual a principal hipótese?",
        options: [
          "Melanoma lentiginoso acral",
          "Melanoma do lentigo maligno",
          "Melanoma nodular",
          "Carcinoma basocelular pigmentado"
        ],
        answerIndex: 0,
        explanation: "Uma lesão pigmentada em região acral (palmar, plantar ou ungueal) com características de malignidade (ABCD - Assimetria, Bordas irregulares, Cores múltiplas, Diâmetro > 6mm) tem como principal hipótese o Melanoma Lentiginoso Acral.",
        tag: "Câncer de Pele"
      },
      // Viroses Dermatológicas
      {
        id: "derm-q13",
        text: "Homem de 25 anos, usuário de drogas injetáveis, com dor em hemitórax direito seguida de erupção cutânea dias após. Ao exame: lesões vesicobolhosas sob base eritematosa em faixa no hemitórax direito. Qual a principal hipótese?",
        options: [
          "Herpes simples",
          "Eczema de contato",
          "Herpes Zoster",
          "Varicela"
        ],
        answerIndex: 2,
        explanation: "A descrição de dor neuropática seguida por erupção vesiculosa unilateral, seguindo o trajeto de um dermátomo (em faixa), é a apresentação clássica do Herpes Zoster, causado pela reativação do vírus Varicela-Zoster.",
        tag: "Viroses"
      },
      // Lesões Elementares
      {
        id: "derm-q14",
        text: "Mulher de 65 anos com lesão plana, sem alteração de relevo ou consistência, de coloração mais clara que a pele, com 3,5cm de diâmetro no cotovelo. A lesão elementar descrita corresponde a:",
        options: [
          "Mancha hipocrômica",
          "Mancha eritematosa",
          "Mancha purpúrica",
          "Mancha hipercrômica"
        ],
        answerIndex: 0,
        explanation: "Uma lesão plana (sem relevo) definida apenas pela alteração de cor é uma mancha ou mácula. Quando a cor é mais clara que a pele ao redor, é uma mancha hipocrômica.",
        tag: "Lesões Elementares"
      },
      // Dermatozoonoses
      {
        id: "derm-q15",
        text: "Homem de 35 anos com 3 pequenas pápulas esféricas, branco-amareladas, com um ponto negro central e pruriginosas na região plantar esquerda. Qual a conduta correta?",
        options: [
          "Larva migrans e tratar com mebendazol",
          "Leishmaniose tegumentar e solicitar histopatológico",
          "Tungíase e tratar removendo o parasita",
          "Tungíase e tratar com glutamina"
        ],
        answerIndex: 2,
        explanation: "A descrição é clássica de Tungíase (bicho-de-pé), causada pela penetração da fêmea da pulga Tunga penetrans. O tratamento consiste na remoção cuidadosa e asséptica do parasita.",
        tag: "Dermatozoonoses"
      },

      
    ]
  }
];
