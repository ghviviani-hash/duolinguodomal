

export const DEFAULT_DECKS = [
  
  // NOVO DECK DE NEUROLOGIA
  
  {
    id: "preset-neurologia-1",
    name: "PR1 Neuro M7",
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
    id: "preset-otorrinolaringologia-1",
    name: "PR1 otorrino M7",
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
    name: "PR1 ORTOP M7",
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

  {
    id: "preset-oftalmologia-1",
    name: "PR1 oftalmo M7",
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
    name: "PR1 SCAD M7",
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
    name: "PR1 hemato M7",
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
    name: "PR1 dermato M7",
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
