import { Deck } from '@/types';

// ------------------------------------------------------------------
// PARA ORDENAR AS PASTAS, BASTA REORDENAR OS DECKS ABAIXO.
// A ordem das pastas será a mesma ordem em que aparecem aqui.
// Use o formato "Nome da Pasta - Nome do Baralho" no campo 'name'.
// ------------------------------------------------------------------

export const DEFAULT_DECKS: Deck[] = [

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
         }
    ]
  },
  {
        id: "preset-neurologia-1",
        name: "  Estácio - M7 - PR1 - Neurologia",
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
  },{
    id: "preset-m7-pr2-neuro",
    name: "Estácio - M7 - PR2 - Neurologia",
    questions: [
        {
            "id": "PR2-Neuro-Q2",
            "text": "Paciente feminino 65 anos com diagnóstico de hipotireoidismo, depressão e ansiedade comparece ao consultório com queixa de perda de consciência. Refere que episódios sempre ocorrem da mesma maneira: começa a ouvir uma música na sua cabeça por alguns segundos até que perda a consciência. Recupera-se lenta e gradualmente. Nos minutos que seguem apresenta dificuldade para raciocinar e leve dor de cabeça. Testemunhas referem que durante o evento tem abalos musculares. Qual o provável diagnóstico?",
            "options": [
                "Doença psiquiátrica - pseudocrise",
                "Demência por corpúsculos de Lewy",
                "Crise epiléptica focal para bilateral tônico-clônica",
                "Ataques isquêmicos transitórios"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro é clássico de uma crise epiléptica focal que evolui para tônico-clônica bilateral. A aura auditiva (ouvir música) indica o início focal, provavelmente no lobo temporal. A subsequente perda de consciência, abalos musculares e o período de confusão pós-ictal (recuperação lenta, dificuldade de raciocinar) confirmam a generalização. Pseudocrise (A) não costuma ter um padrão tão estereotipado nem período pós-ictal claro. Demência com corpos de Lewy (B) cursa com alucinações visuais e parkinsonismo. AIT (D) causaria déficits neurológicos (perda de força, fala), não fenômenos positivos como alucinações auditivas.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q3",
            "text": "Paciente masculino de 68 anos com múltiplas comorbidades e polifarmácia (incluindo anti-hipertensivos e levodopa) apresentou perda de consciência enquanto almoçava. Refere pródromos de mal-estar, palpitações e 'cabeça leve'. Familiares relatam que ficou pálido e frio, recuperando a consciência em segundos após ser deitado. Ocorreram breves abalos musculares durante o evento. Qual o provável diagnóstico?",
            "options": [
                "Crise epiléptica disautonômica",
                "Síncope",
                "Ataque isquêmico transitório",
                "Crise epiléptica focal para bilateral tônico-clônica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro é típico de síncope vasovagal/hipotensão ortostática, precipitada pelas comorbidades (disautonomia pela Atrofia de Múltiplos Sistemas) e medicações. Os pródromos (mal-estar, palpitações), a palidez e a recuperação extremamente rápida (<1 minuto) ao deitar são característicos. Abalos musculares (mioclonias da síncope) podem ocorrer por hipoperfusão cerebral e não definem uma crise epiléptica (A, D). AIT (C) não se manifesta com perda de consciência transitória desta forma.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q4",
            "text": "Na doença de corpo de Lewy, o quadro clínico inicia-se principalmente com:",
            "options": [
                "Alucinações e confabulação",
                "Perda de memória 2 anos após o parkinsonismo",
                "Parkinsonismo e alucinações visuais",
                "Alucinações auditivas e demência associada ao parkinsonismo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A tríade clássica da Demência com Corpos de Lewy (DCL) é composta por: 1) flutuação do estado cognitivo, 2) alucinações visuais bem formadas e 3) parkinsonismo. O quadro demencial e o parkinsonismo devem iniciar próximos (menos de 1 ano de diferença). Se a demência surge muito tempo após o parkinsonismo (B), o diagnóstico é de Demência da Doença de Parkinson. Alucinações auditivas (D) e confabulação (A) não são as características de abertura típicas da DCL.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q5",
            "text": "Paciente de 49 anos com Doença de Parkinson refere que, durante o sono, apresenta movimentação intensa, como se estivesse lutando, além de gritar, sem se lembrar do ocorrido no dia seguinte. Qual a melhor conduta?",
            "options": [
                "Solicitar RM de crânio e EEG para investigar epilepsia",
                "Suspender pramipexol por suspeita de efeito adverso",
                "Solicitar nível sérico de levetiracetam por suspeita de crise noturna",
                "Solicitar polissonografia por suspeita de distúrbio comportamental do sono REM"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro é altamente sugestivo de Distúrbio Comportamental do Sono REM (DCSREM), uma parassonia caracterizada pela perda da atonia muscular fisiológica do sono REM, fazendo com que o paciente 'atue' seus sonhos. É fortemente associado a sinucleinopatias, como a Doença de Parkinson. O exame padrão-ouro para o diagnóstico é a polissonografia. As outras opções são menos prováveis, pois o quadro não tem características de crise epiléptica (A, C) nem é um efeito adverso típico do pramipexol (B).",
            "tag": "distúrbios do sono"
        },
        {
            "id": "PR2-Neuro-Q8",
            "text": "Marcia, 26 anos, apresentou sua terceira crise convulsiva tônico-clônica generalizada no último ano, sem fator provocador. Nunca fez tratamento. Qual a conduta correta?",
            "options": [
                "Apenas observar, pois foram poucas crises em um ano.",
                "Solicitar investigação completa (RM, EEG, laboratório) e iniciar medicação antiepiléptica.",
                "Iniciar fenobarbital e solicitar apenas EEG.",
                "Aguardar uma quarta crise para iniciar a investigação."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O diagnóstico de epilepsia é firmado após duas ou mais crises não provocadas. A paciente já teve três, portanto, tem indicação de tratamento. A conduta correta envolve uma investigação etiológica completa para classificar a síndrome epiléptica e escolher a melhor droga, além de iniciar o tratamento para prevenir novas crises. As outras opções (A, C, D) são incorretas por subestimarem a condição ou indicarem uma investigação/tratamento inadequado.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q9",
            "text": "Jonas, 3 anos, em tratamento para faringotonsilite, apresentou crise tônico-clônica generalizada de 3 minutos durante febre de 39°C. Na emergência, já estava em seu estado habitual, sem sinais de alarme no exame físico. Qual a conduta correta?",
            "options": [
                "Realizar investigação completa com EEG, TC de crânio e punção lombar.",
                "Diagnosticar epilepsia e iniciar fenobarbital.",
                "Tranquilizar o pai, explicar que se trata de uma crise febril simples e orientar sobre como agir em caso de recorrência.",
                "Internar a criança para investigar meningite, pois sempre é uma possibilidade."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O cenário descreve perfeitamente uma crise febril simples: generalizada, com duração menor que 15 minutos, única no período de 24 horas, em uma criança na faixa etária típica (6 meses a 5 anos) e com recuperação completa. Nestes casos, a conduta é expectante e educativa, sem necessidade de exames complementares (A) ou tratamento contínuo (B). A investigação para meningite (D) só é indicada se houver sinais meníngeos ou se a criança não tiver se recuperado completamente.",
            "tag": "epilepsia"
        },
        {
            "id": "PR2-Neuro-Q12",
            "text": "Camila, 26 anos, grávida de 20 semanas, acaba de receber o diagnóstico de epilepsia após sua segunda crise tônico-clônica. Qual medicação deve ser evitada ao máximo para essa paciente?",
            "options": [
                "Carbamazepina",
                "Lamotrigina",
                "Levetiracetam",
                "Ácido valproico"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O Ácido Valproico (Valproato) é a droga antiepiléptica com o maior potencial teratogênico conhecido, associado a um risco significativo de malformações do tubo neural (espinha bífida) e a desfechos neurocognitivos adversos na criança. Portanto, deve ser evitado ao máximo durante a gestação. Lamotrigina (B) e Levetiracetam (C) são considerados os mais seguros na gravidez. Carbamazepina (A) também possui riscos, mas são menores que os do valproato.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q17",
            "text": "Sobre epilepsia, julgue as afirmativas como verdadeiras (V) ou falsas (F):\n( ) Crises convulsivas febris são consideradas epilepsia.\n( ) Crises convulsivas em vigência de doenças agudas (ex: meningite) não são consideradas epilepsia.\n( ) A crise epiléptica é um distúrbio recorrente, paroxístico e transitório.\n( ) A maioria das epilepsias é idiopática.",
            "options": [
                "F, V, V, V",
                "V, V, F, V",
                "F, F, F, F",
                "F, V, F, F"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A primeira afirmativa é falsa; crises febris são provocadas e não definem epilepsia. A segunda é verdadeira; crises sintomáticas agudas são uma reação a uma agressão cerebral e não epilepsia. A terceira é verdadeira, descrevendo a natureza da crise. A quarta é verdadeira; em muitos casos, não se encontra uma causa específica para a epilepsia.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q18",
            "text": "Dentre as classes de drogas abaixo, qual delas provoca mais comumente comprometimento cognitivo?",
            "options": [
                "Anticolinérgicos e benzodiazepínicos",
                "Anti-hipertensivos",
                "Antiagregantes plaquetários",
                "Anticoagulantes"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Anticolinérgicos e benzodiazepínicos são classicamente associados a efeitos adversos cognitivos, como confusão, amnésia e dificuldade de concentração, especialmente em idosos. As outras classes de medicamentos (B, C, D) não têm o comprometimento cognitivo como efeito adverso principal ou comum.",
            "tag": "farmacologia"
        },
        {
            "id": "PR2-Neuro-Q25",
            "text": "Mulher de 48 anos queixa-se de dificuldade de fechar a mão direita há 6 meses. Ao exame, apresenta fraqueza nos 4º e 5º dedos, hipoestesia na região hipotênar e 'mão em garra'. Qual o provável nervo acometido?",
            "options": [
                "Nervo Mediano",
                "Nervo Ulnar",
                "Nervo Radial",
                "Raízes C8-T1"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro clínico descrito (fraqueza e hipoestesia no 4º e 5º dedos, atrofia da região hipotênar e a deformidade de 'mão em garra') é patognomônico de uma lesão do nervo ulnar. A lesão do nervo mediano (A) causaria a Síndrome do Túnel do Carpo, com sintomas nos três primeiros dedos. A lesão do nervo radial (C) causaria 'mão caída'. Uma radiculopatia de C8-T1 (D) teria uma distribuição mais ampla dos déficits.",
            "tag": "neuropatia periférica"
        },
        {
            "id": "PR2-Neuro-Q35",
            "text": "Paciente epiléptico em tratamento com fenobarbital dá entrada na emergência com crises epilépticas seguidas e intermitentes, sem recuperação da consciência entre elas. O quadro é compatível com:",
            "options": [
                "Efeito colateral do fenobarbital",
                "“Sudden unexpected death in epilepsy” (SUDEP)",
                "“Status epilepticus” (Estado de mal epiléptico)",
                "Crise de ausência"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A definição de Status Epilepticus é uma crise com duração maior que 5 minutos ou duas ou more crises sem recuperação completa da consciência entre elas, que é exatamente o quadro descrito. Efeitos colaterais do fenobarbital (A) geralmente envolvem sedação. SUDEP (B) é a morte súbita, não um estado de crises contínuas. Crise de ausência (D) é um tipo de crise breve, sem os componentes motores contínuos descritos.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q36",
            "text": "Em pacientes com lesão do primeiro neurônio motor (síndrome piramidal), o sinal de Babinski é representado pela:",
            "options": [
                "Flexão dos pododáctilos sem movimento do hálux",
                "Flexão do hálux com ausência de movimento dos pododáctilos",
                "Abertura em leque dos pododáctilos sem movimento do hálux",
                "Extensão (dorsiflexão) do hálux com abertura em leque dos outros dedos"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O sinal de Babinski, um reflexo patológico indicativo de lesão no trato corticoespinhal (primeiro neurônio motor), é caracterizado pela extensão do hálux (dedão do pé) e, frequentemente, pela abertura em leque dos outros dedos em resposta a um estímulo na região plantar. As outras opções descrevem a resposta normal (flexão) ou respostas incompletas.",
            "tag": "semiologia"
        },
        {
            "id": "PR2-Neuro-Q37",
            "text": "Com relação às crises epilépticas é CORRETO afirmar:",
            "options": [
                "A investigação etiológica é secundária, o mais importante é tratar a crise.",
                "Toda crise convulsiva deve ser tratada com antiepilépticos de uso contínuo.",
                "Crises epilépticas subentrantes que duram mais de 5-10 minutos caracterizam o estado de mal epiléptico.",
                "A caracterização da síndrome epiléptica não ajuda na escolha do medicamento."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A definição moderna de estado de mal epiléptico (status epilepticus) considera uma crise contínua por mais de 5 minutos ou crises recorrentes sem recuperação da consciência. A investigação etiológica é fundamental (A). Nem toda crise convulsiva (ex: crise febril, crise sintomática aguda) requer tratamento contínuo (B). A correta caracterização da síndrome epiléptica é crucial para a escolha da droga mais eficaz e segura (D).",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q38",
            "text": "Sabemos que existem inúmeras etiologias e tipos de neuropatias periféricas. Em relação ao tema assinale a alternativa CORRETA:",
            "options": [
                "Nas mononeuropatias múltiplas ocorre o envolvimento distal e simétrico dos 4 membros.",
                "O sinal de Tinel e a manobra de Phalen são utilizados na avaliação do nervo ulnar.",
                "A Neuropatia Diabética pode cursar com disautonomia.",
                "Na neuropatia do mediano observamos a 'mão caída'."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A neuropatia diabética é uma das principais causas de disautonomia, manifestando-se com hipotensão postural, gastroparesia, etc. Mononeuropatias múltiplas (A) são assimétricas por definição. O sinal de Tinel e Phalen (B) testam o nervo mediano na síndrome do túnel do carpo. A 'mão caída' (D) é característica da lesão do nervo radial.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q39",
            "text": "Paciente de 44 anos chega à emergência com suspeita de Síndrome de Guillain Barré. Dentre os achados abaixo, qual é considerado como um sinal de alerta (red flag) para considerar um diagnóstico alternativo?",
            "options": [
                "Comprometimento de nervos cranianos",
                "História de infecção gastrointestinal 4 semanas antes",
                "Líquor com 42 de proteína e 2 células",
                "Progressão do quadro por 8 semanas"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Síndrome de Guillain-Barré (SGB) é uma polirradiculoneuropatia aguda, com a progressão dos sintomas ocorrendo tipicamente até 4 semanas. Uma progressão que continua por 8 semanas sugere uma forma crônica, como a Polirradiculoneuropatia Inflamatória Desmielinizante Crônica (PIDC), e não a forma aguda clássica. Os outros achados (A, B, C) são todos compatíveis com o diagnóstico de SGB.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q40",
            "text": "Qual é a principal causa de demência?",
            "options": [
                "Doença de Parkinson",
                "Doença de Huntington",
                "Doença de Alzheimer",
                "Demência vascular"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Doença de Alzheimer é a causa mais comum de demência em todo o mundo, respondendo por 60-80% dos casos. A demência vascular (D) é a segunda causa mais comum. A Doença de Parkinson (A) pode levar à demência, mas é menos frequente. A Doença de Huntington (B) é uma causa rara de demência.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q48",
            "text": "Mulher de 65 anos, previamente hígida, apresenta há 2 anos mudança de comportamento com acumulação de objetos, isolamento social, desinibição (urinou na sala com visitas) e hipersexualidade na fala. Testes cognitivos mostram comprometimento da função executiva com memória relativamente preservada. A etiologia mais provável é:",
            "options": [
                "Esquizofrenia de início tardio",
                "Demência frontotemporal",
                "Doença de Alzheimer",
                "Transtorno bipolar"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro clínico é altamente sugestivo da variante comportamental da Demência Frontotemporal (DFTvc). É caracterizada por alterações proeminentes de personalidade e comportamento (desinibição, apatia, comportamentos compulsivos) com relativa preservação da memória no início do quadro. Doença de Alzheimer (C) inicia tipicamente com amnésia. Esquizofrenia (A) e transtorno bipolar (E) são menos prováveis de iniciar nesta idade com este perfil.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q49",
            "text": "É uma das causas, potencialmente, reversíveis de demência:",
            "options": [
                "Doença de Alzheimer",
                "Carência de vitamina B12",
                "Demência frontotemporal",
                "Demência Vascular"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A deficiência de Vitamina B12 é uma causa clássica de declínio cognitivo e demência que pode ser, em muitos casos, revertida com a reposição da vitamina. As outras opções listadas (A, C, D) são causas de demências degenerativas ou vasculares, consideradas irreversíveis.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q51",
            "text": "Paciente de 50 anos, pedreiro, com lombalgia crônica que piorou e agora irradia para a coxa esquerda, associada a parestesia no pé esquerdo. Como podemos classificar o dano neurológico?",
            "options": [
                "Radiculopatia L5-S1",
                "Polineuropatia distal simétrica",
                "Plexopatia braquial",
                "Mononeuropatia múltipla"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A dor lombar que irradia para o membro inferior seguindo o trajeto de uma raiz nervosa (dor ciática) é a definição de uma radiculopatia. O território descrito (coxa posterior e pé) é compatível com o dermátomo das raízes L5 ou S1. Polineuropatia (B) seria simétrica, 'em bota'. Plexopatia braquial (C) afeta o membro superior. Mononeuropatia múltipla (D) seria o acometimento de múltiplos nervos periféricos de forma assimétrica.",
            "tag": "neuropatia periférica"
        },
        {
            "id": "PR2-Neuro-Q52",
            "text": "Mulher de 48 anos com fraqueza na mão direita (4º e 5º dedos) e, há 1 mês, começou a tropeçar por fraqueza na dorsiflexão do pé esquerdo. Ao exame: Marcha escarvante à esquerda; fraqueza e hipoestesia no território ulnar direito e no território do nervo fibular esquerdo. Qual padrão de neuropatia periférica apresentado?",
            "options": [
                "Polineuropatia distal",
                "Mononeuropatia múltipla",
                "Mononeuropatia do nervo ulnar isolada",
                "Radiculopatia de L5"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro descrito é o de acometimento de múltiplos nervos periféricos (nervo ulnar à direita e nervo fibular à esquerda) de forma assimétrica e sequencial. Esta é a definição clássica de mononeuropatia múltipla, frequentemente associada a vasculites. Polineuropatia (A) seria simétrica e distal. As opções C e D descrevem apenas parte do quadro.",
            "tag": "neuropatia periférica"
        },
        {
            "id": "PR2-Neuro-Q53",
            "text": "Paciente de 39 anos com Doença de Crohn refere fraqueza em membros inferiores há 2 semanas. Pensando no diagnóstico de Mielite Transversa, quais sinais semiológicos poderiam confirmar essa hipótese?",
            "options": [
                "Paresia dimidiada em face, braço e perna esquerda, com sinal de Babinski.",
                "Paresia, hipotonia, hiporreflexia e atrofia em membros inferiores.",
                "Paresia em membros inferiores e sinal da roda denteada.",
                "Paresia, espasticidade e hiperreflexia em membros inferiores e nível sensitivo."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A mielite transversa é uma lesão medular que causa uma síndrome do neurônio motor superior abaixo do nível da lesão. Isso se manifesta como paresia (fraqueza), espasticidade (aumento do tônus) e hiperreflexia. A presença de um 'nível sensitivo', onde a sensibilidade muda abruptamente, é um sinal cardinal de lesão medular. As outras opções descrevem lesões em outras partes do sistema nervoso (A: AVC; B: neurônio motor inferior; C: parkinsonismo).",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q55",
            "text": "Assinale a resposta correta sobre a fisiopatologia da doença de Alzheimer:",
            "options": [
                "Ocorrem depósitos de beta-amiloides e hipofosforilação da proteína tau.",
                "Ocorrem depósitos de alfa-sinucleína e beta-amiloide.",
                "Ocorrem depósitos de beta-amiloide e hiperfosforilação da proteína tau.",
                "Ocorrem depósitos de lipídeos, beta-amiloide e hipofosforilação da proteína tau."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Os dois marcos patológicos da Doença de Alzheimer são: 1) o depósito extracelular de placas do peptídeo beta-amiloide e 2) a formação de emaranhados neurofibrilares intracelulares, que são compostos pela proteína tau anormalmente hiperfosforilada. A hipofosforilação (A, D) não ocorre. A alfa-sinucleína (B) está associada a doenças como Parkinson e Demência com Corpos de Lewy.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q56",
            "text": "Na doença de corpo de Lewy, o quadro clínico inicia-se principalmente com:",
            "options": [
                "Alucinações e confabulação.",
                "Perda de memória 2 anos após o parkinsonismo.",
                "Parkinsonismo e alucinações visuais.",
                "Alucinações auditivas e demência."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Esta questão é uma repetição da questão 4. A tríade clássica da Demência com Corpos de Lewy (DCL) é composta por flutuação cognitiva, alucinações visuais e parkinsonismo, com início próximo entre os sintomas demenciais e motores.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q74",
            "text": "Homem de 29 anos, em tratamento para depressão, desenvolveu há 10 meses lentidão, tremor bilateral em mãos e alteração na fala, com piora progressiva. Ao exame: hipomimia facial, disartria, bradicinesia e rigidez simétricas, tremor de repouso bilateral. Exames laboratoriais com leve aumento de transaminases. Qual o diagnóstico mais provável?",
            "options": [
                "Parkinsonismo medicamentoso.",
                "Doença de Wilson.",
                "Paralisia Supranuclear Progressiva (sinal do beija-flor).",
                "Atrofia de Múltiplos Sistemas (hipotensão postural)."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro de parkinsonismo simétrico em um paciente jovem, associado a sintomas psiquiátricos (depressão) e alteração hepática (aumento de transaminases) é altamente sugestivo de Doença de Wilson, um distúrbio do metabolismo do cobre. O diagnóstico é confirmado pela dosagem de ceruloplasmina sérica, que costuma estar baixa. Parkinsonismo medicamentoso (A) é uma possibilidade, mas não explica a alteração hepática. As outras opções (C, D) são parkinsonismos atípicos que ocorrem em faixa etária mais avançada e com outras características.",
            "tag": "parkinsonismo"
        },
        {
            "id": "PR2-Neuro-Q85",
            "text": "Paciente V.Q.M., 67 anos, com hipotireoidismo, refere dormência nas duas mãos. Ao exame, os testes de Tinel e Phalen são positivos. Qual a principal hipótese diagnóstica e o respectivo nervo acometido?",
            "options": [
                "Síndrome do túnel do carpo - nervo radial",
                "Neuropatia do ulnar - nervo ulnar",
                "Neuropatia do fibular - nervo fibular",
                "Síndrome do túnel do carpo - nervo mediano"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Os sinais de Tinel (percussão do nervo) e Phalen (flexão do punho) positivos são manobras provocativas clássicas para a Síndrome do Túnel do Carpo, que é uma compressão do nervo mediano no punho. O hipotireoidismo é um fator de risco conhecido para esta condição. As outras opções envolvem nervos ou localizações incorretas.",
            "tag": "neuropatia periférica"
        },
        {
            "id": "PR2-Neuro-Q87",
            "text": "Paciente A.J. S., sexo masculino, 50 anos, pedreiro, queixa-se de piora da lombalgia, com dor que irradia para o lado da coxa esquerda e parestesia no pé esquerdo. Como podemos classificar o dano neurológico?",
            "options": [
                "Radiculopatia L5-S1",
                "Polineuropatia distal simétrica",
                "Plexopatia braquial",
                "Mononeuropatia múltipla"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Esta questão é uma repetição da questão 51. A dor lombar que irradia para o membro inferior seguindo o trajeto de uma raiz nervosa (dor ciática) é a definição de uma radiculopatia. O território descrito (coxa posterior e pé) é compatível com o dermátomo das raízes L5 ou S1.",
            "tag": "neuropatia periférica"
        },
        {
            "id": "PR2-Neuro-Q88",
            "text": "Paciente A.C.N., 48 anos, apresenta fraqueza na mão direita (4º e 5º dedos) e, há 1 mês, fraqueza na dorsiflexão do pé esquerdo. Ao exame: Marcha escarvante à esquerda; fraqueza e hipoestesia no território ulnar direito e no território do nervo fibular esquerdo. Qual padrão de neuropatia periférica apresentado?",
            "options": [
                "Polineuropatia distal",
                "Mononeuropatia múltipla",
                "Mononeuropatia do nervo ulnar",
                "Plexopatia braquial"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição da questão 52. O quadro descrito é o de acometimento de múltiplos nervos periféricos (nervo ulnar à direita e nervo fibular à esquerda) de forma assimétrica e sequencial. Esta é a definição clássica de mononeuropatia múltipla.",
            "tag": "neuropatia periférica"
        },
        {
            "id": "PR2-Neuro-Q92",
            "text": "Paciente masculino, 70 anos, com quedas frequentes há 1 ano e dificuldade de marcha e equilíbrio. Ao exame: diminuição da mímica facial, incapacidade de realizar movimentos oculares verticais, rigidez e hipocinesia simétricas e instabilidade postural. Sobre o provável diagnóstico, podemos afirmar:",
            "options": [
                "Podem ser encontrados sinais piramidais e cerebelares.",
                "Há excelente resposta ao tratamento com levodopa.",
                "O 'sinal da cruz de malta' (hot cross bun sign) pode ser visto na RM de crânio.",
                "O sinal do aplauso pode estar presente."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro de quedas precoces, paralisia do olhar vertical e parkinsonismo simétrico é altamente sugestivo de Paralisia Supranuclear Progressiva (PSP). O 'sinal do aplauso' (incapacidade de parar de aplaudir após ser instruído a bater palmas três vezes) é um sinal de disfunção frontal comum na PSP. Sinais piramidais/cerebelares (A) e o 'hot cross bun sign' (C) são mais característicos da Atrofia de Múltiplos Sistemas (AMS). A resposta à levodopa (B) na PSP é tipicamente pobre.",
            "tag": "parkinsonismo"
        },
        {
            "id": "PR2-Neuro-Q112",
            "text": "Paciente de 25 anos, HIV+, em uso de TARV, apresentou subitamente movimentos tônico-clônicos no membro superior direito que evoluíram para a hemiface direita, para o dimídio oposto e perda de consciência. A principal hipótese diagnóstica é:",
            "options": [
                "Efeito colateral ao TARV",
                "Lesão focal cerebral",
                "Encefalomielite do HIV",
                "Meningite criptocócica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O início súbito com uma crise focal que generaliza (marcha jacksoniana) aponta fortemente para uma lesão estrutural no cérebro (ex: abscesso, tumor, tuberculoma). Em um paciente com HIV, a principal suspeita seria uma neuroinfecção focal, como a neurotoxoplasmose. Efeitos colaterais de TARV (A) e encefalomielite do HIV (C) geralmente causam quadros mais difusos. Meningite (D) cursaria com cefaleia, febre e sinais meníngeos.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q113",
            "text": "Com relação às crises epilépticas é CORRETO afirmar:",
            "options": [
                "A investigação etiológica não é importante.",
                "Toda crise convulsiva deve ser tratada com antiepilépticos.",
                "Crises epilépticas com mais de 5 minutos de duração, subentrantes, caracterizam o status epilepticus.",
                "A caracterização da síndrome epiléptica não ajuda na conduta terapêutica."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Esta questão é uma repetição da questão 37, com a duração do status epilepticus atualizada para a definição moderna de 5 minutos. A investigação etiológica é fundamental (A). Nem toda crise convulsiva requer tratamento contínuo (B). A caracterização da síndrome epiléptica é crucial para a escolha da droga (D).",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q114",
            "text": "Em relação à epilepsia, é correto afirmar:",
            "options": [
                "Todos os pacientes com crises febris na infância evoluem para epilepsia.",
                "A epilepsia do lobo temporal pode apresentar automatismos oroalimentares e postura distônica.",
                "O risco de recidiva de crises após a retirada de uma droga anticonvulsivante não é considerado.",
                "Nas crises de ausência não há o complexo ponta-onda no EEG."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. As manifestações descritas (automatismos oroalimentares, como mastigação e estalar de lábios, e postura distônica de um membro) são características clássicas das crises focais com origem no lobo temporal. Apenas uma pequena porcentagem de crianças com crises febris desenvolve epilepsia (A). O risco de recidiva é um fator crucial na decisão de retirar a medicação (C). O complexo ponta-onda a 3Hz no EEG é o achado patognomônico da crise de ausência (D).",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q115",
            "text": "Julgue as assertivas abaixo sobre epilepsia como verdadeiras (V) ou falsas (F):\n( ) Crise convulsiva única, febril, não é considerada como epilepsia.\n( ) Crises convulsivas em vigência de meningite são consideradas epilepsia.\n( ) A crise epiléptica é um distúrbio que não cessa espontaneamente.\n( ) A maioria das epilepsias é considerada idiopática.",
            "options": [
                "V, F, F, V",
                "V, V, F, V",
                "F, F, V, F",
                "V, F, V, V"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A primeira é verdadeira (crise provocada não é epilepsia). A segunda é falsa (crise sintomática aguda não é epilepsia). A terceira é falsa (a maioria das crises cessa espontaneamente). A quarta é verdadeira (muitas não têm causa identificável).",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q116",
            "text": "Carmen, 62 anos, comparece à consulta pois está esquecendo fatos recentes, já se perdeu perto de casa e esqueceu compromissos importantes. Qual a conduta correta?",
            "options": [
                "Realizar avaliação cognitiva, solicitar exames (RM, laboratório completo) para excluir causas reversíveis antes de assumir Doença de Alzheimer.",
                "Realizar avaliação cognitiva, solicitar RM e EEG, pois o diagnóstico de Doença de Alzheimer é certo.",
                "Solicitar TC de crânio, pois a causa mais comum de esquecimento nessa faixa etária é AVC.",
                "Iniciar galantamina o quanto antes, pois o tratamento para Doença de Alzheimer não deve ser adiado."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Diante de um quadro de declínio cognitivo, a abordagem correta é realizar uma avaliação funcional (como o Mini-Exame do Estado Mental) e solicitar uma série de exames para descartar causas secundárias e potencialmente reversíveis de demência, como hipotireoidismo, deficiência de vitamina B12, neurossífilis, HIV, além de exames de neuroimagem. As outras opções são incorretas por assumirem um diagnóstico (B, D) ou uma etiologia (C) sem a devida investigação.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q117",
            "text": "Homem de 63 anos refere dificuldade para andar e manusear objetos com a mão esquerda, apresentando tremor de repouso 'em contar de moedas'. Refere também sonhos vívidos, constipação e alucinações visuais ('vê baratas'). A esposa confirma que o braço esquerdo não balança ao andar e que ele está esquecendo fatos recentes. Mini-Exame do Estado Mental: 15/30. Qual o diagnóstico mais provável?",
            "options": [
                "Mielopatia cervical",
                "Lesão do manguito rotador",
                "Doença de Parkinson associada à Doença de Alzheimer",
                "Demência por corpúsculos de Lewy"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O paciente apresenta a tríade clássica da Demência com Corpos de Lewy: parkinsonismo (tremor, bradicinesia), alucinações visuais bem formadas ('baratas') e flutuação/declínio cognitivo precoce. A presença de distúrbio comportamental do sono REM ('sonhos vívidos') também é muito sugestiva. Na Doença de Alzheimer (C), o declínio cognitivo precede em anos os sintomas motores.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q118",
            "text": "Mulher de 65 anos, que mora só, apresenta há 2 anos comportamento de acumulação, isolamento social, desinibição (urinou na sala) e fala hipersexualizada. Testes cognitivos mostram comprometimento da função executiva com memória relativamente preservada. A etiologia mais provável é:",
            "options": [
                "Esquizofrenia",
                "Demência frontotemporal",
                "Doença de Alzheimer",
                "Transtorno bipolar"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição da questão 48. O quadro clínico de alterações proeminentes de personalidade e comportamento (desinibição, apatia, comportamentos compulsivos) com relativa preservação da memória no início é altamente sugestivo da variante comportamental da Demência Frontotemporal (DFTvc).",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q119",
            "text": "Jaime, 68 anos, diabético tipo 1, apresenta piora da memória. A esposa relata que ele está mais depressivo desde que teve dois AVCs há 3 anos. Ao exame físico, apresenta hiperreflexia e sinal de Babinski à direita. Qual a etiologia mais provável da demência?",
            "options": [
                "Doença de Alzheimer",
                "Demência frontotemporal",
                "Demência vascular",
                "Demência por corpúsculos de Lewy"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A história de declínio cognitivo com uma relação temporal clara com a ocorrência de AVCs, associada a achados de déficits neurológicos focais no exame físico (hiperreflexia e Babinski à direita), define o diagnóstico de Demência Vascular. O diabetes é um fator de risco importante para AVC. As outras formas de demência não se encaixam tão bem no histórico e nos achados.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q120",
            "text": "Sobre a neuromielite óptica (NMO) e a esclerose múltipla (EM), é correto afirmar que:",
            "options": [
                "A RM pode ser semelhante, sendo o diagnóstico definido pelo anticorpo Anti-AQP4.",
                "Os surtos são os fenômenos iniciais na NMO, diferentemente da EM, que pode ter curso inicial progressivo.",
                "Bandas oligoclonais no líquor são mais comuns na NMO.",
                "A NMO é ligeiramente mais comum em homens."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A NMO se apresenta quase que exclusivamente na forma de surtos (neurite óptica, mielite), não existindo uma forma primariamente progressiva como na Esclerose Múltipla. A RM na NMO é frequentemente normal ou com lesões atípicas para EM, e o Anti-AQP4 é específico, mas não define sozinho o diagnóstico (A). Bandas oligoclonais são muito mais comuns na EM (C). Ambas as doenças são mais prevalentes em mulheres (D).",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q121",
            "text": "Estudante de 22 anos apresenta neurite óptica. RM de crânio evidencia múltiplas lesões hiperintensas em T2/FLAIR em localizações típicas de EM (periventriculares, justa-corticais, infratentoriais), sem captação de contraste. RM de medula normal. Para confirmação do diagnóstico de esclerose múltipla neste momento (Critérios de McDonald 2017), é necessário:",
            "options": [
                "Nada mais é necessário, os critérios já foram preenchidos.",
                "Exame de líquor (LCR) com presença de bandas oligoclonais.",
                "Um novo surto clínico para evidenciar disseminação no tempo.",
                "Evidência de lesão ao exame neurológico além da neurite."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A paciente tem um primeiro surto clínico (neurite óptica) e evidência de disseminação no espaço na RM. Para fechar o diagnóstico, falta o critério de disseminação no tempo. Como não há lesões captantes de contraste na RM (que indicariam atividade em tempos diferentes), a presença de bandas oligoclonais no líquor pode ser usada como um substituto para a disseminação no tempo, fechando o diagnóstico.",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q122",
            "text": "Estudante de 23 anos apresenta parestesia em membro inferior direito. RM de crânio evidencia múltiplas lesões em T2/FLAIR em topografias periventricular e infratentorial (apenas 2 das 4 áreas típicas). RM de medula normal. Não há captação de contraste. Para confirmação do diagnóstico de esclerose múltipla (McDonald, 2017), é necessário:",
            "options": [
                "Nada mais é necessário, pois há disseminação no tempo e espaço por RM.",
                "Exame de líquor com bandas oligoclonais, devido à ausência de lesões na medula.",
                "Exame de líquor com bandas oligoclonais para demonstrar disseminação no tempo.",
                "Um novo surto clínico ou nova lesão em RM de controle para evidenciar disseminação no tempo e espaço."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A paciente tem um evento clínico e disseminação no espaço (acomete 2 áreas). No entanto, como não há lesões captantes de contraste, não há evidência de disseminação no tempo. A presença de bandas oligoclonais no líquor poderia suprir a disseminação no tempo, mas como a paciente não preenche o critério de disseminação no espaço por RM (precisaria de mais uma área acometida), a única forma de fechar o diagnóstico é com um novo surto clínico ou o aparecimento de uma nova lesão em RM de controle.",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q123",
            "text": "Estudante de 23 anos apresenta parestesia em membro inferior direito. RM de crânio evidencia múltiplas lesões em topografias cortical, periventricular e infratentorial. Havia impregnação por gadolínio em duas das lesões descritas. Para confirmação do diagnóstico de esclerose múltipla (McDonald, 2017), é necessário:",
            "options": [
                "Exame de líquor com bandas oligoclonais.",
                "Apesar de apenas um evento clínico, a paciente preenche critérios de disseminação no tempo e espaço por RM.",
                "Um novo surto clínico para confirmar o diagnóstico.",
                "Nada mais é necessário, mas a biópsia cerebral confirmaria."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A paciente tem um primeiro evento clínico. A RM mostra lesões em 3 locais diferentes, satisfazendo o critério de disseminação no espaço. A presença de lesões que captam gadolínio (ativas) e outras que não captam (antigas) simultaneamente satisfaz o critério de disseminação no tempo. Portanto, com apenas um surto e uma RM, o diagnóstico de esclerose múltipla pode ser fechado. As outras opções são desnecessárias.",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q124",
            "text": "Carlos Eduardo, 58 anos, iniciou quadro de miofasciculações e incontinência urinária há 2 meses, com atrofia e redução de força no membro superior direito. Ao exame: atrofia, miofasciculações, hiperreflexia generalizada e sinais de Babinski e Hoffman positivos. Qual seria a conduta correta no momento?",
            "options": [
                "Solicitar ENMG, RM de coluna cervical e exames laboratoriais para excluir outras causas antes de dar o diagnóstico.",
                "Iniciar riluzol e confirmar o diagnóstico de ELA, aguardando os exames complementares.",
                "Solicitar apenas eletroneuromiografia, pois é o único exame necessário para o diagnóstico de ELA.",
                "Tranquilizar o paciente, pois se trata de síndrome de miofasciculação benigna."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O quadro clínico com sinais de neurônio motor superior (hiperreflexia, Babinski) e inferior (atrofia, miofasciculações) é altamente sugestivo de Esclerose Lateral Amiotrófica (ELA). No entanto, o diagnóstico de ELA é de exclusão. É mandatório realizar exames como a eletroneuromiografia (ENMG) para confirmar o acometimento difuso do neurônio motor inferior e uma RM de coluna cervical para descartar compressão medular (mielopatia cervical), que é um grande mimetizador da ELA. Iniciar tratamento (B) ou fechar diagnóstico (C) sem excluir outras causas seria imprudente. O quadro não é benigno (D).",
            "tag": "doenças do neurônio motor"
        },
        {
            "id": "PR2-Neuro-Q125",
            "text": "Sobre as formas clínicas da Esclerose Lateral Amiotrófica (ELA). Qual afirmativa é a ERRADA?",
            "options": [
                "A forma bulbar tem menor sobrevida.",
                "Sinais piramidais (lesão do 1º neurônio motor) podem ocorrer ao longo da evolução.",
                "A forma clássica (espinhal) é mais comum que a forma bulbar.",
                "Disfunção cognitiva ocorre na maioria dos pacientes."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta (a errada) é a D. Embora a ELA possa estar associada a um espectro de disfunção cognitiva, chegando até à Demência Frontotemporal em uma minoria dos casos, a disfunção cognitiva grave não ocorre na maioria dos pacientes. As outras afirmativas estão corretas: a forma bulbar (A) tem pior prognóstico; sinais piramidais (B) fazem parte da doença; e a forma espinhal (C) é a mais prevalente.",
            "tag": "doenças do neurônio motor"
        },
        {
            "id": "PR2-Neuro-Q126",
            "text": "O nome 'esclerose lateral amiotrófica' se deve ao fato de que ocorre:",
            "options": [
                "Degeneração do córtex sensitivo lateral à área motora.",
                "Degeneração da parte lateral da medula, acometendo o trato espinotalâmico.",
                "Degeneração do trato corticobulbar lateral, causando sintomas unilaterais.",
                "Degeneração da parte lateral da medula, acometendo o trato corticoespinal lateral, que ao estudo patológico apresenta aspecto esclerótico."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O nome da doença descreve seus achados patológicos: 'Amiotrófica' refere-se à atrofia muscular por degeneração do neurônio motor inferior. 'Esclerose Lateral' refere-se ao endurecimento (esclerose) da porção lateral da medula espinhal, onde se localiza o trato corticoespinal, devido à degeneração do neurônio motor superior. As outras opções descrevem tratos ou mecanismos incorretos.",
            "tag": "doenças do neurônio motor"
        },
        {
            "id": "PR2-Neuro-Q127",
            "text": "Assinale a assertiva correta sobre as doenças do neurônio motor:",
            "options": [
                "Na esclerose lateral amiotrófica há envolvimento sensitivo e motor.",
                "Na mielose funicular há envolvimento do segundo neurônio motor e do cordão posterior.",
                "Na esclerose lateral amiotrófica há envolvimento do primeiro e segundo neurônios motores.",
                "Na mielopatia tropical há envolvimento quase exclusivo do segundo neurônio motor."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Esclerose Lateral Amiotrófica (ELA) é definida pela combinação de achados de lesão do primeiro neurônio motor (ex: hiperreflexia, Babinski) e do segundo neurônio motor (ex: atrofia, fasciculações), com a sensibilidade classicamente preservada (A está incorreta). Mielose funicular (B) afeta o cordão posterior e o trato corticoespinal. Mielopatia tropical (E) afeta quase exclusivamente o primeiro neurônio motor.",
            "tag": "doenças do neurônio motor"
        },
        {
            "id": "PR2-Neuro-Q128",
            "text": "Sobre a neuromielite óptica (NMO) e a esclerose múltipla (EM), é correto afirmar que:",
            "options": [
                "O exame de RM de crânio pode ser semelhante entre as duas patologias.",
                "Bandas oligoclonais no líquor são sensivelmente mais comuns nos pacientes de esclerose múltipla.",
                "A NMO é ligeiramente mais comum em homens.",
                "Um exame de RM de crânio alterado exclui o diagnóstico de NMO."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A presença de bandas oligoclonais no líquor é um achado muito característico da Esclerose Múltipla (presente em >90% dos casos), enquanto é incomum na Neuromielite Óptica (<30%). A RM de crânio na NMO pode até ser normal ou mostrar lesões atípicas para EM (A, D). Ambas as doenças são mais comuns em mulheres (C).",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q129",
            "text": "Estudante de 25 anos com neurite óptica. Ao exame, além da alteração visual, apresenta sinal de Babinski à esquerda. RM de crânio evidencia múltiplas lesões em T2/FLAIR em localizações típicas, sem captação de contraste. Para confirmação do diagnóstico de esclerose múltipla (McDonald, 2017), é necessário:",
            "options": [
                "Nada mais é necessário, pois há evidência clínica de duas lesões.",
                "Disseminação no tempo, demonstrada por nova lesão em RM de controle ou bandas oligoclonais no líquor.",
                "Exame de líquor, devido à ausência de lesões na medula.",
                "Um novo surto clínico."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A paciente tem evidência clínica de duas lesões (neurite óptica e sinal de Babinski), o que satisfaz a disseminação no espaço. No entanto, ainda falta demonstrar a disseminação no tempo. Como a RM atual não mostra lesões com e sem contraste simultaneamente, a disseminação no tempo pode ser confirmada pelo aparecimento de uma nova lesão em uma RM futura ou pela presença de bandas oligoclonais no líquor.",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q130",
            "text": "Sobre a neuromielite óptica (NMO) e a esclerose múltipla (EM), é correto afirmar que:",
            "options": [
                "A RM de crânio é sempre normal na NMO.",
                "Os surtos são os fenômenos clínicos iniciais da NMO, enquanto a EM pode ter curso inicial progressivo.",
                "Bandas oligoclonais são mais comuns na NMO.",
                "A NMO é mais comum em homens."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição da questão 120. A NMO se apresenta quase exclusivamente na forma de surtos, não existindo uma forma primariamente progressiva como na Esclerose Múltipla. A RM de crânio pode ser alterada na NMO, mas com lesões atípicas (A). Bandas oligoclonais são raras na NMO (C). Ambas são mais comuns em mulheres (D).",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q131",
            "text": "Na doença desmielinizante tipo esclerose múltipla é correto afirmar, EXCETO:",
            "options": [
                "O diagnóstico é clínico com apoio dos exames complementares.",
                "Sempre ocorre a degeneração axonal no processo inflamatório agudo.",
                "Afeta a bainha de mielina da substância branca periventricular.",
                "A neurite óptica pode ser o sinal inicial da esclerose múltipla."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta (a exceção) é a B. Embora a degeneração axonal seja um componente importante da patologia da Esclerose Múltipla e contribua para a incapacidade permanente, ela não ocorre 'sempre' em todo processo inflamatório agudo. A desmielinização é o evento primário. As outras afirmativas estão corretas: o diagnóstico é clínico-radiológico (A), a localização periventricular é típica (C), e a neurite óptica é uma forma de apresentação comum (D).",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q132",
            "text": "Sobre a avaliação de neuropatias periféricas, assinale a correta combinação de afirmativas:\nI. A caracterização clínica (tipo de fibra, distribuição) é a principal ferramenta diagnóstica.\nII. As polineuropatias apresentam acometimento simétrico, distal com progressão ascendente.\nIII. Neuropatias de fibras finas cursam com perda de sensibilidade térmica e dolorosa.\nIV. Plexopatias são o comprometimento isolado de um único nervo.",
            "options": [
                "Apenas I, II e III estão corretas.",
                "Apenas II e IV estão corretas.",
                "Apenas IV está correta.",
                "Todas estão corretas."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A afirmativa I está correta, a clínica é soberana. A afirmativa II descreve corretamente o padrão clássico das polineuropatias ('em bota e luva'). A afirmativa III descreve corretamente os sintomas das neuropatias de fibras finas. A afirmativa IV está incorreta; a descrição se refere a uma mononeuropatia, enquanto plexopatias afetam um plexo nervoso (braquial ou lombossacral).",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q133",
            "text": "Sobre a Polineuropatia Inflamatória Desmielinizante Crônica (PIDC), assinale a assertiva correta:",
            "options": [
                "O tratamento pode ser feito com corticoide.",
                "O líquor cursa com aumento de polimorfonucleares.",
                "A lesão patológica pode ser somente axonal.",
                "É uma doença monofásica e autolimitada."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Diferentemente da forma aguda (Guillain-Barré), a PIDC responde bem a tratamentos imunossupressores de longo prazo, como corticoides, imunoglobulina e plasmaférese. O líquor (B) tipicamente mostra dissociação proteinocitológica, com aumento de proteínas, mas poucas ou nenhumas células. A lesão é primariamente desmielinizante (C). É uma doença crônica, com curso progressivo ou com surtos e remissões, não monofásica (D).",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q134",
            "text": "A polineuropatia diferencia-se da mononeuropatia múltipla pelo acometimento:",
            "options": [
                "De vários nervos periféricos, de forma simétrica.",
                "De vários nervos aleatoriamente e de forma assimétrica.",
                "Apenas de nervos sensitivos.",
                "Distal e assimétrico."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A principal característica que diferencia a polineuropatia da mononeuropatia múltipla é a simetria. A polineuropatia afeta os nervos de forma difusa e simétrica, tipicamente com um gradiente distal-proximal ('em bota e luva'). A mononeuropatia múltipla (B) é o acometimento de múltiplos nervos periféricos de forma assimétrica e sequencial.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q135",
            "text": "A principal causa de paralisia do nervo radial é:",
            "options": [
                "Neurinoma",
                "Hanseníase",
                "Síndrome do túnel do carpo",
                "Compressão"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A compressão do nervo radial no sulco espiral do úmero é a causa mais comum de sua paralisia, classicamente conhecida como 'paralisia do sábado à noite' (quando o indivíduo dorme com o braço pendurado sobre uma cadeira). As outras opções são causas menos comuns de neuropatia radial.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q136",
            "text": "Em relação à síndrome de Guillain-Barré, pode-se afirmar que:",
            "options": [
                "Há uma paralisia flácida ascendente rapidamente progressiva.",
                "A lesão afeta exclusivamente a função motora.",
                "A dissociação proteino-citológica encontrada no LCR afasta o diagnóstico.",
                "O tratamento precoce não interfere na evolução clínica da paralisia."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A Síndrome de Guillain-Barré (SGB) é classicamente uma paralisia flácida, arreflexa, com progressão ascendente (começa nos membros inferiores e sobe) e rápida (atinge o pico em até 4 semanas). Frequentemente há sintomas sensitivos e disautonomia (B está incorreta). A dissociação proteino-citológica (aumento de proteínas com celularidade normal) no líquor é o achado característico que apoia o diagnóstico (C está incorreta). O tratamento precoce com imunoglobulina ou plasmaférese é crucial para abreviar a doença e reduzir a morbidade (D está incorreta).",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q137",
            "text": "Paciente A.C.N., 48 anos, apresenta fraqueza na mão direita (4º e 5º dedos) e, há 1 mês, fraqueza na dorsiflexão do pé esquerdo. Ao exame: Marcha escarvante à esquerda; fraqueza e hipoestesia no território ulnar direito e no território do nervo fibular esquerdo. Qual padrão de neuropatia periférica apresentado?",
            "options": [
                "Polineuropatia distal",
                "Mononeuropatia múltipla",
                "Plexopatia braquial",
                "Radiculopatia de L5"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição das questões 52 e 88. O acometimento sequencial e assimétrico de múltiplos nervos periféricos (ulnar e fibular) define a mononeuropatia múltipla.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q138",
            "text": "Paciente C.L.S., 32 anos, grávida de 30 semanas, refere dormência nas duas mãos há 1 mês, com piora evolutiva, chegando a derrubar copos. Pensando no diagnóstico de Síndrome do Túnel do Carpo, quais achados no exame neurológico são compatíveis com esta hipótese?",
            "options": [
                "Hipoestesia no 5º quirodáctilo.",
                "Mão em garra ulnar.",
                "Sinal de Tinel e Sinal de Phalen positivo.",
                "Queda do punho."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O sinal de Tinel (percussão do punho) e o sinal de Phalen (flexão forçada do punho) são manobras provocativas que, quando positivas, são altamente sugestivas de Síndrome do Túnel do Carpo, uma compressão do nervo mediano. A gravidez é um fator de risco conhecido. Hipoestesia no 5º dedo (A) e mão em garra (B) são do nervo ulnar. Queda do punho (D) é do nervo radial.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q139",
            "text": "Paciente A.J. S., 50 anos, pedreiro, queixa-se de piora da lombalgia, com dor que irradia para o lado da coxa esquerda e parestesia no pé esquerdo. Como podemos classificar o dano neurológico?",
            "options": [
                "Radiculopatia L5-S1",
                "Polineuropatia distal simétrica",
                "Plexopatia braquial",
                "Mononeuropatia múltipla"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Esta questão é uma repetição das questões 51 e 87. A dor lombar com irradiação para o membro inferior no trajeto de uma raiz nervosa define a radiculopatia.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q148",
            "text": "Sobre a AURA EPILÉPTICA, está ERRADO afirmar que:",
            "options": [
                "A nova classificação não utiliza mais este termo, preferindo 'início focal consciente'.",
                "Ela já é o início da crise epiléptica.",
                "Sua ocorrência indica tratar-se de uma crise de início generalizado.",
                "Tem grande valor localizatório, indicando a área de início da crise."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta (a errada) é a C. A presença de uma aura, por definição, indica que a crise tem um início focal em uma área específica do cérebro. Uma crise de início generalizado começa em ambos os hemisférios simultaneamente e não possui aura. As outras afirmativas estão corretas: o termo 'aura' foi substituído (A), ela é a própria crise (B), e ajuda a localizar a origem da crise (D).",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q154",
            "text": "Stephany, 24 anos, estudante, apresentou quadro de fraqueza ascendente nas pernas, evoluindo para paraplegia e incontinência urinária em 3 dias. Relata faringotonsilite há 21 dias. Ao exame, arreflexia de aquileus e hiporreflexia patelar. Dada a principal hipótese, marque a alternativa adequada.",
            "options": [
                "Iniciar metilprednisolona após confirmação com líquor e ENMG.",
                "O diagnóstico é clínico; iniciar plasmaférese ou imunoglobulina o quanto antes.",
                "Solicitar FAN e fator reumatoide para investigar vasculite.",
                "Realizar TC de tórax e RM de neuroeixo para investigar síndrome paraneoplásica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro é altamente sugestivo de Síndrome de Guillain-Barré (paralisia flácida ascendente aguda após infecção). O diagnóstico é primariamente clínico e o tratamento (plasmaférese ou imunoglobulina) é uma urgência neurológica, não devendo ser atrasado para aguardar resultados de exames confirmatórios como líquor e ENMG, que podem ser normais no início. Corticoide (A) não é eficaz na SGB. As outras investigações (C, D) não são prioritárias.",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q162",
            "text": "Paciente de 75 anos apresenta há 8 anos comprometimento da memória, disfunção executiva, apraxia e agnosia, com exames de imagem e laboratoriais normais. O diagnóstico é de uma provável síndrome:",
            "options": [
                "Depressiva com sintomas cognitivos",
                "Demencial - provável Doença de Alzheimer",
                "Confusional aguda (delirium)",
                "De declínio cognitivo leve"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A descrição de um declínio cognitivo insidioso e progressivo ao longo de 8 anos, afetando múltiplos domínios (memória, função executiva, praxias, gnosias) e causando impacto funcional, com exames normais que excluem outras causas, é a definição clássica de uma síndrome demencial, sendo a Doença de Alzheimer a causa mais provável nesta faixa etária.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q163",
            "text": "Paciente masculino, 70 anos, parkinsoniano há 1 ano, apresenta declínio cognitivo associado a alucinações visuais. Exames de imagem e laboratório sem alterações. O provável diagnóstico é:",
            "options": [
                "Demência por corpúsculos de Lewy",
                "Doença de Alzheimer",
                "Demência na doença de Huntington",
                "Demência Vascular"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A regra de '1 ano' é usada para diferenciar Demência com Corpos de Lewy (DCL) da Demência da Doença de Parkinson (DDP). Se o declínio cognitivo (demência) começa antes ou até 1 ano após o início dos sintomas motores (parkinsonismo), o diagnóstico é DCL. Se a demência começa muitos anos após o parkinsonismo, é DDP. Neste caso, com início simultâneo, o diagnóstico mais provável é DCL.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q164",
            "text": "Criança de 5 anos com prejuízo do rendimento escolar. A mãe presencia rápidos episódios em que a criança fica parada com 'olhar perdido'. Exame neurológico normal. Eletroencefalograma apresentou alteração característica. O principal diagnóstico é:",
            "options": [
                "Transtorno de déficit de atenção e hiperatividade (TDAH)",
                "Crises de ausência",
                "Atraso de desenvolvimento",
                "Transtorno de conduta"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Os episódios de parada comportamental súbita com 'olhar perdido', com duração de poucos segundos e sem período pós-ictal, são a manifestação clássica da crise de ausência, um tipo de epilepsia generalizada comum na infância. O prejuízo escolar ocorre porque a criança perde fragmentos de informação durante as crises. O EEG com complexos ponta-onda a 3Hz confirma o diagnóstico.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q165",
            "text": "Marque falso (F) ou verdadeiro (V):\n( ) Crises convulsivas únicas como as crises febris são consideradas como epilepsia.\n( ) Crises convulsivas em vigência de doenças agudas não são consideradas epilepsia.\n( ) A crise epiléptica é um distúrbio recorrente, paroxístico e transitório das funções cerebrais.\n( ) Apesar do grande arsenal para investigação das crises epilépticas, a maioria delas é idiopática.",
            "options": [
                "F, V, V, V",
                "V, V, F, V",
                "F, F, F, F",
                "F, V, F, F"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Esta questão é uma repetição da questão 17, com uma pequena variação na terceira afirmativa, mas a lógica e as respostas são as mesmas. 1ª é Falsa. 2ª é Verdadeira. 3ª é Verdadeira. 4ª é Verdadeira.",
            "tag": "epilepsias"
        },
        {
            "id": "PR2-Neuro-Q166",
            "text": "Cite três causas de demência irreversível além da doença de Alzheimer.",
            "options": [
                "Demência Vascular, Demência Frontotemporal, Demência por Corpúsculos de Lewy.",
                "Hipotireoidismo, Deficiência de B12, Hidrocefalia de Pressão Normal.",
                "Depressão (pseudodemência), Encefalopatia Hepática, Neurolues.",
                "Demência por Corpúsculos de Lewy, Encefalite Herpética, Tumor cerebral."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Demência Vascular, Demência Frontotemporal e Demência com Corpúsculos de Lewy são, junto com Alzheimer, as principais causas de demência degenerativa e irreversível. As opções B e C listam majoritariamente causas de demência potencialmente reversíveis. A opção D mistura causas reversíveis e irreversíveis.",
            "tag": "demências"
        },
        {
            "id": "PR2-Neuro-Q177",
            "text": "Em relação à Esclerose Múltipla (EM), assinale a alternativa correta.",
            "options": [
                "Agentes virais não podem ser gatilho para a doença.",
                "É a doença inflamatória menos frequente do SNC em adultos jovens.",
                "Mesmo com o passar do tempo, os sintomas não causam incapacidade locomotora.",
                "O alvo da agressão imune é a bainha de mielina e os oligodendrócitos do SNC."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Esclerose Múltipla é uma doença autoimune na qual o sistema imunológico ataca a bainha de mielina (a 'capa' dos axônios) e as células que a produzem, os oligodendrócitos, no sistema nervoso central. Fatores ambientais como infecções virais (ex: EBV) são considerados gatilhos importantes (A está incorreta). É a doença inflamatória mais comum do SNC em adultos jovens (B está incorreta). A doença é progressiva e leva a incapacidade acumulada na maioria dos pacientes (C está incorreta).",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q179",
            "text": "Sendo a forma mais comum da Esclerose Múltipla a do tipo remitente-recorrente, qual o tratamento recomendado para os surtos com maior nível de evidência?",
            "options": [
                "Plasmaférese",
                "Pulsoterapia com corticoide",
                "Imunoglobulina humana",
                "Pulsoterapia com ciclofosfamida"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento de primeira linha para os surtos agudos de Esclerose Múltipla é a pulsoterapia com altas doses de corticosteroide endovenoso (geralmente metilprednisolona). O objetivo é acelerar a recuperação do surto, diminuindo a inflamação na barreira hematoencefálica. A plasmaférese (A) é uma opção de segunda linha para surtos graves que não respondem ao corticoide. Imunoglobulina (C) e ciclofosfamida (D) não são tratamentos padrão para surtos.",
            "tag": "doenças desmielinizantes"
        },
        {
            "id": "PR2-Neuro-Q182",
            "text": "Em relação às polineuropatias diabéticas, assinale a alternativa FALSA:",
            "options": [
                "Geralmente apresentam padrão desmielinizante na eletroneuromiografia.",
                "Podem cursar com sintomas disautonômicos.",
                "Costumam ter padrão 'em botas' e 'em luvas'.",
                "São a causa mais comum de polineuropatia no mundo."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta (a falsa) é a A. A forma mais comum de polineuropatia diabética, a polineuropatia sensitivo-motora distal simétrica, classicamente apresenta um padrão axonal ou misto (axonal e desmielinizante secundário) na eletroneuromiografia, e não puramente desmielinizante. As outras afirmativas estão corretas: pode causar disautonomia (B), tem o padrão clássico 'em botas e luvas' (C) e é a causa mais prevalente de polineuropatia (D).",
            "tag": "neuropatias periféricas"
        },
        {
            "id": "PR2-Neuro-Q186",
            "text": "Carmello Falabella, após TCE com perda de consciência, passou a apresentar distúrbios do pensamento, ouvindo vozes de comando, visualizando animais, afirmando categoricamente que sua situação financeira havia entrado em ruína e apresentando um comportamento repetitivo de jogo compulsivo. Na ordem apresentada, assinale a correta:",
            "options": [
                "Delírio, alucinação e transtorno obsessivo e compulsivo",
                "Alucinação, delírio e pensamento obsessivo",
                "Alucinação, configuração e TOC",
                "Alucinação, delírio e transtorno obsessivo e compulsivo"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. 'Ouvir vozes' e 'visualizar animais' são alterações da sensopercepção, ou seja, Alucinações (auditivas e visuais). A crença irremovível e falsa sobre a ruína financeira é uma alteração do juízo, ou seja, um Delírio. O comportamento de jogo repetitivo e irresistível é característico de um Transtorno Obsessivo e Compulsivo (TOC) ou um transtorno do controle de impulsos. A ordem corresponde à opção D.",
            "tag": "psiquiatria"
        }
    ]
},
{
    id: "preset-m7-pr2-derma",
    name: "Estácio - M7 - PR2 - Dermatologia",
    questions: [
        {
            "id": "PR2-Derma-Q10",
            "text": "Mulher, 52 anos, obesa e diabética, queixa-se de 'coceira embaixo das mamas'. Ao exame: Área eritematosa na região inframamária, bilateral, de aspecto úmido com maceração esbranquiçada e lesões eritematosas arredondadas satélites. Qual a principal hipótese diagnóstica?",
            "options": [
                "Tinea cruris",
                "Pitiríase versicolor",
                "Candidíase",
                "Dermatite de contato"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro clínico é clássico de Candidíase intertriginosa (intertrigo). A localização em área de dobra (inframamária), o aspecto úmido e macerado, e a presença de lesões eritematosas satélites (pápulas e pústulas periféricas) são muito característicos. Os fatores de risco da paciente (obesidade e diabetes) também corroboram o diagnóstico. Tinea cruris (A) acomete a região inguinal. Pitiríase versicolor (B) se manifesta como máculas. Dermatite de contato (D) não costuma ter lesões satélites.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q11",
            "text": "Homem de 18 anos apresenta múltiplas máculas hipocrômicas, arredondadas e confluentes no dorso superior e ombros, com descamação fina. Baseado na principal hipótese (Pitiríase Versicolor), julgue as afirmativas:\nI. O sinal de Zileri positivo auxilia no diagnóstico.\nII. As lesões podem ser hipocrômicas, hipercrômicas ou eritematosas.\nIII. É causada por um fungo saprófita e lipofílico.\nIV. Causa nódulos nos pelos axilares e pubianos.",
            "options": [
                "Apenas I, II e III estão corretas.",
                "Apenas I e IV estão corretas.",
                "Apenas III e IV estão corretas.",
                "Apenas II, III e IV estão corretas."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A afirmativa I está correta; o sinal de Zileri (descamação furfurácea ao estirar a pele) é característico. A afirmativa II está correta; a variação de cor dá o nome 'versicolor' à doença. A afirmativa III está correta; o agente é a Malassezia spp., um fungo lipofílico que faz parte da flora normal. A afirmativa IV está incorreta, pois descreve a Piedra Branca, uma infecção fúngica da haste do pelo.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q13",
            "text": "Mulher de 47 anos, relata surgimento de um nódulo eritematoso no dorso da mão direita que ulcerou, seguido do surgimento de outros nódulos eritematosos em trajeto ascendente pelo antebraço e braço. Baseado na principal hipótese diagnóstica (Esporotricose), assinale a alternativa correta:",
            "options": [
                "A forma clínica descrita (linfocutânea) é a apresentação mais comum da doença.",
                "O tratamento com antifúngico tópico é geralmente suficiente.",
                "O agente etiológico tem como reservatório natural a pele humana.",
                "O exame micológico direto do exsudato é o padrão-ouro para o diagnóstico."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O quadro descrito é a forma linfocutânea da Esporotricose, que é, de fato, a apresentação clínica mais comum. Caracteriza-se por uma lesão inicial no local da inoculação que ulcera (cancro esporotricótico) e a disseminação de nódulos ao longo do trajeto linfático. O tratamento deve ser sistêmico (com itraconazol, por exemplo), tornando a opção B incorreta. O agente (Sporothrix spp.) vive em matéria orgânica (solo, plantas), não na pele (C está incorreta). A cultura fúngica do material é o padrão-ouro para o diagnóstico, não o exame direto (D está incorreta).",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q14",
            "text": "Mulher de 45 anos, relata surgimento de lesão pruriginosa há 1 mês. Ao exame: placas eritematodescamativas confluentes, de bordas circinadas bem delimitadas no abdome, com centro mais claro (cura central). Qual a afirmativa correta sobre a principal hipótese (Tinea Corporis)?",
            "options": [
                "A lâmpada de Wood revela fluorescência amarelo-ouro.",
                "O exame micológico direto evidencia hifas curtas e blastosporos.",
                "A principal hipótese é Piedra Branca, que afeta pele e unhas.",
                "Os agentes etiológicos dessa dermatose podem ser antropofílicos, geofílicos e zoofílicos."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A lesão é característica de Tinea corporis, uma dermatofitose. Os fungos dermatófitos são classificados de acordo com seu hábitat natural em antropofílicos (homem), geofílicos (solo) e zoofílicos (animais). A fluorescência amarelo-ouro na lâmpada de Wood (A) é da Pitiríase Versicolor. O exame micológico descrito em (B) com 'hifas curtas e blastosporos' (spaghetti and meatballs) também é da Pitiríase Versicolor. Piedra branca (C) é uma infecção dos pelos.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q15",
            "text": "JC, 22 anos, sexo feminino, apresenta lesão hipercrômica, heterogênea, com bordas irregulares e assimétrica, de 1 cm, na região plantar esquerda, com 2 anos de evolução. Qual a principal hipótese diagnóstica?",
            "options": [
                "Melanoma lentiginoso acral",
                "Melanoma do lentigo maligno",
                "Melanoma nodular",
                "Carcinoma basocelular pigmentado"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Uma lesão pigmentada na região acral (palmar, plantar ou ungueal) com as características do ABCDE do melanoma (Assimetria, Bordas irregulares, Cores variadas, Diâmetro > 6mm, Evolução) deve sempre levantar a suspeita de Melanoma Lentiginoso Acral. O melanoma do lentigo maligno (B) ocorre em áreas de fotoexposição crônica em idosos. O melanoma nodular (C) se apresenta como um nódulo de crescimento rápido. O CBC pigmentado (D) é raro nesta localização.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q16",
            "text": "MSS, 70 anos, com psoríase crônica em placas (joelhos, cotovelos, couro cabeludo), iniciou uso de betabloqueadores e há 2 dias apresenta eritema e descamação em quase toda superfície corporal. Sobre este quadro (psoríase eritrodérmica), é correto afirmar:",
            "options": [
                "Cursa sem comprometimento sistêmico e tem bom prognóstico.",
                "A infiltração das lesões é a característica predominante.",
                "A interrupção aguda de corticoide sistêmico pode ser uma causa.",
                "O comprometimento ungueal está presente em mais de 80% dos casos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A psoríase eritrodérmica é uma forma grave e generalizada da doença. A suspensão abrupta de corticoides sistêmicos é uma das causas mais conhecidas para o seu desenvolvimento, assim como o uso de certas drogas (como betabloqueadores). É uma condição grave com importante comprometimento sistêmico (desequilíbrio hidroeletrolítico, perda de proteína, instabilidade hemodinâmica), portanto A está errada. A característica predominante é o eritema difuso, não a infiltração (B). O comprometimento ungueal (D) é comum na psoríase, mas não necessariamente em >80% dos casos de eritrodermia.",
            "tag": "farmacodermias"
        },
        {
            "id": "PR2-Derma-Q19",
            "text": "Em relação à candidíase é correto afirmar, EXCETO:",
            "options": [
                "Pode ser desencadeada pelo uso prévio de antibioticoterapia de largo espectro.",
                "Responde bem ao uso de fluconazol sistêmico.",
                "Manifesta-se principalmente nas áreas extensoras dos membros superiores.",
                "Frequentemente pode comprometer a mucosa oral."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta (a exceção) é a C. A candidíase manifesta-se preferencialmente em áreas de dobras e mucosas (áreas intertriginosas, oral, genital), onde há calor e umidade, e não em áreas extensoras. As outras afirmativas estão corretas: o uso de antibióticos (A) altera a flora e favorece a proliferação de Candida; o fluconazol (B) é um tratamento eficaz; e o acometimento da mucosa oral (D) é muito comum (sapinho).",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q20",
            "text": "A dermatofitose no couro cabeludo (Tinea Capitis) se manifesta clinicamente com:",
            "options": [
                "Placas de alopecia com pelos tonsurados (cortados) na superfície.",
                "Placa de alopecia cicatricial definitiva.",
                "Bolhas no couro cabeludo.",
                "Vesículas no couro cabeludo."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A Tinea Capitis é caracterizada por placas de alopecia (perda de cabelo) onde os pelos se quebram rente à superfície do couro cabeludo, dando o aspecto de 'pontos pretos' ou pelos tonsurados. Pode haver descamação e, em casos inflamatórios (Kerion Celsi), pústulas. A alopecia geralmente não é cicatricial (B), a menos que haja uma infecção secundária grave. Bolhas e vesículas (C, D) não são a apresentação típica.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q21",
            "text": "A dermatofitose nos pés (Tinea Pedis) pode se manifestar clinicamente de todas as formas, EXCETO:",
            "options": [
                "Descamação e fissura interdigital ('pé de atleta').",
                "Descamação plantar crônica ('em mocassim').",
                "Placas anulares com bordas ativas no dorso dos pés.",
                "Lesões nodulares nas regiões plantares."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta (a exceção) é a D. A Tinea Pedis não se manifesta com lesões nodulares. Suas formas clássicas são a interdigital (A), a hiperceratósica crônica ou 'em mocassim' (B), e a inflamatória ou vesico-bolhosa, que pode formar placas anulares (C). Lesões nodulares no pé devem levantar suspeitas de outras doenças, como micetoma ou cromomicose.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q22",
            "text": "Em relação à pitiríase versicolor é correto afirmar, EXCETO:",
            "options": [
                "Frequentemente apresenta o sinal de Zileri (descamação ao estiramento).",
                "As lesões cutâneas são vesiculosas.",
                "O calor e a umidade podem ser fatores desencadeantes.",
                "Pode ser desencadeada pelo uso de imunossupressores."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta (a exceção) é a B. As lesões da pitiríase versicolor são máculas (manchas) hipo ou hipercrômicas, com descamação fina (furfurácea), mas nunca vesiculosas. As outras afirmativas estão corretas: o sinal de Zileri (A) é característico; calor e umidade (C) favorecem a proliferação do fungo; e a imunossupressão (D) é um fator de risco.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q23",
            "text": "A tinea nigra se manifesta clinicamente por:",
            "options": [
                "Lesões bolhosas na região plantar.",
                "Manchas hipercrômicas (acastanhadas ou pretas) irregulares em região palmar.",
                "Lesões nodulares em região plantar.",
                "Lesões vesiculosas em região palmar."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Tinea Nigra é uma micose superficial rara causada pelo fungo Hortaea werneckii, que classicamente se apresenta como uma mácula (mancha) acastanhada ou preta, não descamativa e assintomática, localizada mais comumente na palma da mão, mimetizando um nevo ou melanoma. As outras opções descrevem lesões elementares que não correspondem a esta doença.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q24",
            "text": "Professora de 40 anos, com contato regular com cão, apresenta há uma semana placa anular pruriginosa com borda eritematovesiculosa em região abdominal. Usou Quadriderm com melhora parcial. Qual a impressão diagnóstica?",
            "options": [
                "Eczema de contato imunoalérgico",
                "Eczema de contato por irritante primário",
                "Tinea corporis",
                "Candidíase"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A lesão em placa anular, com borda ativa (mais eritematosa e vesiculosa) e tendência à cura central, é a apresentação clássica da Tinea corporis (dermatofitose). A história de contato com animal (fonte zoofílica) reforça a suspeita. A melhora parcial com Quadriderm (que contém corticoide) pode mascarar o quadro ('tinea incognita'). Eczemas (A, B) não costumam ter essa morfologia anular. Candidíase (D) prefere áreas de dobras.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q26",
            "text": "JK, 65 anos, com história de queimadura no membro superior esquerdo na infância, queixando-se de uma ferida que surgiu há um ano sobre a cicatriz. Ao exame, lesão úlcero-vegetante e infiltrada. Qual a principal hipótese diagnóstica?",
            "options": [
                "Carcinoma espinocelular (Úlcera de Marjolin)",
                "Carcinoma basocelular",
                "Doença de Bowen",
                "Melanoma"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O desenvolvimento de um carcinoma espinocelular (CEC) sobre uma cicatriz de queimadura antiga ou uma úlcera crônica é conhecido como Úlcera de Marjolin. A apresentação como uma lesão úlcero-vegetante e infiltrada é típica. O carcinoma basocelular (B) não costuma surgir em cicatrizes. Doença de Bowen (C) é um CEC in situ. Melanoma (E) é uma neoplasia melanocítica.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q27",
            "text": "MIJ, 35 anos, apresenta lesão úlcero-vegetante infiltrativa em sulco balanoprepucial e linfoadenomegalia pétrea inguinal direita, com 8 meses de evolução e diminuição do jato urinário. Qual a principal hipótese diagnóstica e seu agente etiológico?",
            "options": [
                "Carcinoma verrucoso - HPV 16, 18",
                "Condiloma acuminado - HPV 6, 11",
                "Carcinoma espinocelular - HPV 6, 11",
                "Carcinoma espinocelular - HPV 16, 18"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A lesão descrita (úlcero-vegetante, infiltrativa, de longa evolução) com metástase para linfonodo regional (pétreo) é característica de um Carcinoma Espinocelular (CEC) invasivo. Os subtipos de HPV de alto risco oncogênico, principalmente o 16 e o 18, são os principais agentes etiológicos do CEC genital. O condiloma (B) e o carcinoma verrucoso (A, D) são causados por subtipos de baixo risco (6 e 11) e não costumam ter um comportamento tão agressivo e metastático.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q30",
            "text": "Paciente de 48 anos, usuário de droga e morador de rua, apresenta vegetação friável no pênis acometendo toda a glande, com evolução de 2 anos, que começou com lesões verrucosas. Desenvolveu linfonodomegalia inguinal unilateral aderida. Qual a principal hipótese diagnóstica?",
            "options": [
                "Carcinoma Espinocelular",
                "Condiloma Acuminado Gigante (Buschke-Löwenstein)",
                "Cancro Mole",
                "Donovanose"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A longa evolução, o aspecto vegetante e friável, e principalmente a presença de linfonodomegalia aderida (sinal de metástase) apontam fortemente para uma neoplasia maligna invasiva, sendo o Carcinoma Espinocelular a principal hipótese. O Condiloma Gigante (B) pode ser localmente destrutivo, mas raramente metastatiza. Cancro mole (C) e Donovanose (D) são úlceras infecciosas de evolução mais aguda.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q31",
            "text": "Mulher de 60 anos, caucasiana, moradora de zona rural, apresentando placa descamativa no lábio inferior, com evolução de 1 ano. Qual a sua hipótese diagnóstica?",
            "options": [
                "Queilite Actínica",
                "Herpes Simples Labial",
                "Líquen Plano",
                "Candidíase Oral"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Uma lesão crônica, descamativa, em lábio inferior de uma pessoa com fototipo baixo e história de alta exposição solar crônica é a apresentação clássica da Queilite Actínica, uma lesão pré-maligna (carcinoma espinocelular in situ) induzida pelo sol. As outras opções teriam evolução e características clínicas diferentes.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q32",
            "text": "Mulher jovem com biópsia excisional confirmando um melanoma in situ. Qual deve ser a conduta?",
            "options": [
                "Apenas observação, pois a lesão foi totalmente removida.",
                "Ampliação cirúrgica com 0,5 a 1,0 cm de margem.",
                "Ampliação cirúrgica com 2,0 cm de margem.",
                "Pesquisa de linfonodo sentinela."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Para o melanoma in situ (confinado à epiderme, Breslow = 0), a recomendação dos consensos é realizar a ampliação das margens cirúrgicas para 0,5 a 1,0 cm, garantindo a remoção completa da lesão e prevenindo a recidiva local. Não há necessidade de margens maiores (C) nem de pesquisa de linfonodo sentinela (D), pois o risco de metástase é praticamente nulo.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q33",
            "text": "Jovem de 22 anos apresenta manchas e placas avermelhadas em tronco, palmas e plantas. Nega lesões genitais, mas refere uma lesão ulcerada indolor na língua há 3 semanas, que regrediu espontaneamente. Quais exames você solicitaria para confirmação diagnóstica?",
            "options": [
                "Hemograma e PCR.",
                "Sorologia para VDRL e FTA-abs.",
                "Biópsia de pele.",
                "Sorologia para HIV e Hepatites."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro é altamente sugestivo de sífilis secundária (roséola sifilítica), caracterizada por lesões cutâneas polimorfas, incluindo o acometimento palmo-plantar. A úlcera oral indolor que regrediu espontaneamente foi o cancro duro (sífilis primária). O diagnóstico é confirmado com testes sorológicos: um não treponêmico (VDRL) para triagem e seguimento, e um treponêmico (FTA-abs) para confirmação.",
            "tag": "DST"
        },
        {
            "id": "PR2-Derma-Q41",
            "text": "Paciente masculino, 30 anos, queixa de surgimento de lesões cutâneas após quadro de herpes simples. Observando a figura C (lesões eritematosas em alvo no pé), podemos dizer:",
            "options": [
                "Trata-se de eritema pigmentar fixo, que evolui com hipercromia.",
                "Trata-se de Eritema Multiforme, frequentemente desencadeado por infecções.",
                "O quadro é compatível com psoríase invertida.",
                "Trata-se de síndrome de hipersensibilidade a fármacos com acometimento restrito à pele."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. As lesões 'em alvo' (centro mais escuro, halo pálido e borda eritematosa) são a marca registrada do Eritema Multiforme. Esta é uma reação de hipersensibilidade que é mais comumente desencadeada por infecções, sendo o Herpes Simples a causa mais frequente. Eritema pigmentar fixo (A) deixa mancha escura residual. Psoríase (C) são placas. Síndrome de hipersensibilidade a fármacos (D) cursa com sintomas sistêmicos.",
            "tag": "farmacodermias"
        },
        {
            "id": "PR2-Derma-Q42",
            "text": "Homem de 35 anos queixa de lesões pruriginosas no pé. Ao exame: 3 pequenas pápulas esféricas, branco-amareladas, com um ponto negro central na região plantar esquerda. Assinale a opção correta de acordo com o caso:",
            "options": [
                "Larva migrans e tratar com mebendazol.",
                "Leishmaniose tegumentar e solicitar exame histopatológico.",
                "Tungíase e tratar removendo o parasita.",
                "Miíase e tratar com oclusão e expressão."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A descrição da lesão (pápula com ponto negro central) na região plantar é clássica da tungíase, a infestação pela pulga Tunga penetrans (bicho-de-pé). O ponto negro corresponde à porção posterior do abdome da pulga. O tratamento consiste na enucleação (remoção) cuidadosa do parasita. Larva migrans (A) causa trilhas serpiginosas. Leishmaniose (B) e miíase (D) têm apresentações diferentes.",
            "tag": "dermatozoonoses"
        },
        {
            "id": "PR2-Derma-Q43",
            "text": "Sobre as dermatozoonoses, considere as afirmações abaixo:\nI. Larva migrans cutânea tem como lesão característica uma trilha serpiginosa e pruriginosa.\nII. A escabiose é causada pelo Sarcoptes scabiei e o tratamento pode ser feito com ivermectina oral.\nIII. Pediculose da cabeça é assintomática e o tratamento de escolha é o corte de cabelo.\nIV. Na escabiose em crianças, o couro cabeludo e a região palmo-plantar podem ser acometidos.",
            "options": [
                "I e III apenas",
                "II e IV apenas",
                "I, II e IV apenas",
                "II, III e IV apenas"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A afirmativa I está parcialmente correta na descrição da lesão, mas incorreta ao dizer que a contaminação é entre humanos (é por fezes de cães e gatos) e que o tratamento é a extração (é com anti-helmínticos). A afirmativa II está correta. A afirmativa III está incorreta; a pediculose causa prurido intenso e o tratamento é com pediculicidas tópicos, não necessariamente corte de cabelo. A afirmativa IV está correta; o acometimento da cabeça e palmo-plantar é uma característica da escabiose em lactentes.",
            "tag": "dermatozoonoses"
        },
        {
            "id": "PR2-Derma-Q44.1",
            "text": "Criança de 10 anos com pápula de 0,6 cm esférica branco amarelada, pruriginosa com ponto preto central na região plantar direita. Qual a principal hipótese diagnóstica?",
            "options": [
                "Verruga plantar",
                "Calo",
                "Miíase furunculoide",
                "Tungíase (Bicho de pé)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Esta questão descreve o mesmo quadro da questão 42. A lesão papular com um ponto preto central na região plantar é a apresentação clássica da tungíase.",
            "tag": "dermatozoonoses"
        },
        {
            "id": "PR2-Derma-Q44.2",
            "text": "Criança de 10 anos com pápula de 0,6 cm esférica branco amarelada, pruriginosa com ponto preto central na região plantar direita. Cite um diagnóstico diferencial.",
            "options": [
                "Escabiose",
                "Larva migrans",
                "Miíase furunculoide",
                "Picada de carrapato"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A miíase furunculoide, causada pela larva da mosca Dermatobia hominis, também se apresenta como um nódulo ou pápula com um ponto central (orifício por onde a larva respira). Embora a localização plantar seja menos comum, é um importante diagnóstico diferencial para a tungíase.",
            "tag": "dermatozoonoses"
        },
        {
            "id": "PR2-Derma-Q45",
            "text": "Paciente de 62 anos com história prévia de psoríase em cotovelo, diabética, desenvolveu pneumonia bacteriana. Duas semanas após a alta, apresentou placas eritematosas e descamativas em 90% do corpo. Sobre a doença em questão (psoríase eritrodérmica), podemos afirmar:",
            "options": [
                "O acometimento articular descrito (artrite) é o mais frequente nessa doença.",
                "O quadro descrito é comum após o uso de antimicrobianos.",
                "A infecção bacteriana (pneumonia) pode ter sido o gatilho para a eritrodermia.",
                "O uso irregular de corticoide tópico desencadeou o quadro."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A psoríase eritrodérmica pode ser desencadeada por vários fatores, incluindo infecções sistêmicas (como a pneumonia bacteriana), suspensão de corticoides sistêmicos ou uso de certas drogas. A infecção é um gatilho bem conhecido. O acometimento articular (A) não é a forma mais frequente. O uso de antimicrobianos (B) não é uma causa clássica. O corticoide tópico (D) não causaria uma generalização tão grave.",
            "tag": "farmacodermias"
        },
        {
            "id": "PR2-Derma-Q57",
            "text": "DFR, 50 anos, diabética, queixa de prurido na região plantar direita há 4 meses. Ao exame: descamação plantar seguindo o bordo do pé direito e onicólise com hiperceratose subungueal na unha do hálux direito. Em relação a lesão plantar, assinale a opção correta:",
            "options": [
                "A principal hipótese é dermatite atópica.",
                "A principal hipótese é dermatofitose (Tinea Pedis).",
                "A principal hipótese é sífilis secundária.",
                "A principal hipótese é candidíase cutânea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro de descamação plantar crônica, unilateral, com acometimento ungueal associado (onicomicose) é altamente sugestivo de Tinea Pedis na sua forma hiperceratósica crônica ('em mocassim'). O agente etiológico, um dermatófito, pode ser antropofílico (transmitido entre humanos). As outras hipóteses não explicam a combinação de achados cutâneos e ungueais.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q58",
            "text": "O Sinal de Zileri e o Sinal da unhada consistem em métodos semióticos úteis para o diagnóstico de:",
            "options": [
                "Piedra Branca",
                "Kerion Celsi",
                "Candidíase Mucocutânea Crônica",
                "Pitiríase Versicolor"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Ambos os sinais se referem à manobra de evidenciar a descamação fina (furfurácea) característica da Pitiríase Versicolor. O Sinal de Zileri é o estiramento da pele, e o Sinal da Unhada é o leve raspado com a unha, ambos fazendo com que a descamação se torne aparente.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q59",
            "text": "Na infância, a localização mais comum das dermatofitoses é:",
            "options": [
                "Pé (Tinea pedis)",
                "Região inguinocrural (Tinea cruris)",
                "Mão (Tinea manuum)",
                "Couro cabeludo (Tinea capitis)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Tinea Capitis é a dermatofitose mais comum em crianças em idade escolar, sendo rara em adultos. As outras formas, como a Tinea pedis e cruris, são mais prevalentes após a puberdade.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q60",
            "text": "Paciente sofreu uma arranhadura de gato no dorso da mão esquerda. No local, surgiu um nódulo seguido de um cordão linfangítico centrípeto. Qual seria o exame complementar mais adequado para confirmação diagnóstica?",
            "options": [
                "Exame micológico direto do exsudato.",
                "Cultura em meio de Sabouraud a 25°C do exsudato.",
                "Exame histopatológico da biópsia do nódulo.",
                "Teste intradérmico com o antígeno purificado do fungo."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro clínico é clássico de Esporotricose linfocutânea. O padrão-ouro para o diagnóstico é o isolamento e identificação do Sporothrix spp. através da cultura do material (exsudato, aspirado, biópsia) em meio apropriado, como o Sabouraud. O exame direto (A) tem baixa sensibilidade. O histopatológico (C) pode ser sugestivo, mas não específico. O teste intradérmico (D) indica apenas contato prévio.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q62",
            "text": "Qual é o agente etiológico da pitiríase versicolor?",
            "options": [
                "Malassezia spp. (anteriormente Pityrosporum)",
                "Candida albicans",
                "Trichophyton rubrum",
                "Microsporum canis"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A Pitiríase Versicolor é causada por leveduras do gênero Malassezia, que são fungos lipofílicos comensais da pele humana. Candida albicans (B) causa candidíase. Trichophyton rubrum (C) e Microsporum canis (E) são dermatófitos, causadores de tineas.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q63",
            "text": "Qual o tratamento de escolha da Tinea Capitis?",
            "options": [
                "Shampoo de Cetoconazol isolado",
                "Griseofulvina oral",
                "Nistatina tópica",
                "Itraconazol tópico"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento da Tinea Capitis deve ser sempre sistêmico (via oral), pois os antifúngicos tópicos não penetram adequadamente na haste do pelo. A Griseofulvina é o tratamento de primeira escolha, especialmente para crianças. Terbinafina e Itraconazol são alternativas. Shampoos (A) podem ser usados como adjuvantes para diminuir a transmissibilidade, mas não curam a infecção.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q64",
            "text": "Na infância, a localização mais comum das dermatofitoses é:",
            "options": [
                "Pé",
                "Região inguinocrural",
                "Mão",
                "Couro cabeludo"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Esta questão é uma repetição da questão 59. A Tinea Capitis é a dermatofitose mais comum em crianças.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q65",
            "text": "O Sinal de Zileri e o Sinal da Unhada consistem de métodos semióticos úteis para o diagnóstico de:",
            "options": [
                "Piedra Branca",
                "Piedra Negra",
                "Kerion Celsi",
                "Pitiríase Versicolor"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Esta questão é uma repetição da questão 58. Ambos os sinais servem para evidenciar a descamação fina da Pitiríase Versicolor.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q66",
            "text": "Quais patologias são causadas por fungos que NÃO invadem a camada córnea da pele, conferindo ao hospedeiro comprometimento principalmente estético?",
            "options": [
                "Tinea nigra e Pitiríase versicolor",
                "Dermatofitose e Pitiríase versicolor",
                "Pitiríase versicolor e Candidíase",
                "Piedra negra e Dermatofitose"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Tinea Nigra e Pitiríase Versicolor são micoses superficiais que se limitam à parte mais externa do estrato córneo, sem invadi-lo ou elicitar uma resposta inflamatória significativa. Dermatofitoses (B, D) e Candidíase (C) são infecções que invadem o estrato córneo e podem causar inflamação.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q67",
            "text": "Paciente masculino 30 anos de idade apresentando máculas hipocrômicas no dorso com descamação furfurácea e sinal de zileri positivo. Qual o seu diagnóstico?",
            "options": [
                "Candidíase",
                "Dermatofitose",
                "Pitiríase versicolor",
                "Eritrasma"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A combinação de máculas hipocrômicas com descamação fina (furfurácea), evidenciada pelo sinal de Zileri, em área seborreica (dorso) é a apresentação clássica da Pitiríase Versicolor.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q80",
            "text": "JW, 81 anos, negra, foi encaminhada ao serviço de dermatologia com história de mancha assintomática em região plantar com 10 anos de evolução. Ao exame: mancha hipercrômica, assimétrica, bordas irregulares e coloração heterogênica, medindo 7x5 cm de diâmetro e com área nodular na superfície. Qual a melhor hipótese diagnóstica?",
            "options": [
                "Carcinoma basocelular pigmentado",
                "Melanoma extensivo superficial",
                "Carcinoma espinocelular",
                "Melanoma lentiginoso acral"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Uma lesão pigmentada em região acral (plantar), de longa evolução, com características de malignidade (grande, assimétrica, bordas e cores irregulares) e, principalmente, com o desenvolvimento de um componente nodular (indicando crescimento vertical e invasão), é altamente sugestiva de Melanoma Lentiginoso Acral. É o tipo mais comum de melanoma em afrodescendentes.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q81",
            "text": "Qual é a melhor conduta para a confirmação diagnóstica do caso clínico relatado na questão anterior (suspeita de melanoma acral grande e com nódulo)?",
            "options": [
                "Biópsia incisional da área mais representativa (nódulo).",
                "Ressonância magnética do pé direito.",
                "Raio X do pé direito.",
                "Dermatoscopia apenas."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A regra geral para uma lesão suspeita de melanoma é a biópsia excisional. No entanto, para lesões muito grandes ou em locais onde a excisão completa causaria grande morbidade (como a região plantar), a biópsia incisional da área mais espessa ou atípica (neste caso, o nódulo) é a conduta recomendada para confirmar o diagnóstico e medir a espessura de Breslow, que guiará o tratamento definitivo.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q86",
            "text": "Paciente masculino, pardo, 22 anos, queixa de lesões no dorso. Ao exame: múltiplas máculas hipocrômicas, arredondadas, confluentes na parte superior do tronco e ombros com descamação fina na superfície, melhor observadas ao realizar o estiramento da pele. Qual a principal hipótese diagnóstica?",
            "options": [
                "Pitiríase versicolor",
                "Dermatofitose do corpo",
                "Hanseníase indeterminada",
                "Psoríase gutata"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Esta é outra apresentação clássica de Pitiríase Versicolor. Máculas hipocrômicas em áreas seborreicas (tronco superior), com descamação fina que se torna evidente com o estiramento da pele (Sinal de Zileri), são patognomônicas. Hanseníase (C) cursaria com alteração de sensibilidade. Psoríase (D) são pápulas ou placas eritematosas. Dermatofitose (B) teria bordas mais ativas.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q89",
            "text": "FHC, 81 anos, fototipo 2, lavrador, procurou atendimento dermatológico queixando-se de lesão assintomática na face com 5 anos de evolução. Ao exame: mancha hipercrômica, assimétrica, heterogênea com 5,0 x 2,0 cm de diâmetro localizada na região frontal. Qual a principal hipótese diagnóstica?",
            "options": [
                "Carcinoma basocelular pigmentado",
                "Carcinoma espinocelular",
                "Melanoma nodular",
                "Melanoma do lentigo maligno"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Uma mancha pigmentada, de crescimento lento ao longo de anos, em área de alta exposição solar crônica em um paciente idoso e de pele clara é a apresentação típica do Melanoma do Lentigo Maligno. É a forma in situ, que se não tratada pode evoluir para um lentigo maligno melanoma (invasivo). As outras opções teriam evolução e morfologia diferentes.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q93.1",
            "text": "Paciente de 73 anos, com alta exposição solar, apresenta lesão em dorso nasal há 5 anos, de crescimento progressivo, que sangra ocasionalmente. Ao exame: lesão nodular de 3cm, com porção superior perolada com telangiectasias e porção inferior hipercromica. Qual a principal hipótese diagnóstica?",
            "options": [
                "Carcinoma basocelular terebrante",
                "Carcinoma basocelular nódulo-ulcerado",
                "Carcinoma espinocelular",
                "Carcinoma basocelular nodular pigmentado"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A descrição de uma lesão nodular com brilho perolado e telangiectasias na superfície é a marca do Carcinoma Basocelular (CBC) nodular. A presença de área hipercromica (enegrecida) define o subtipo pigmentado. As outras opções descrevem outros subtipos de CBC ou outro tipo de câncer.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q93.2",
            "text": "Para o caso anterior (CBC nodular pigmentado de 3cm em dorso nasal), qual a principal indicação terapêutica?",
            "options": [
                "Eletrocoagulação",
                "Cirurgia Micrográfica de Mohs",
                "Exérese com margem de segurança de 4mm",
                "Criocirurgia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Cirurgia Micrográfica de Mohs é o tratamento de escolha para tumores em áreas de alto risco de recidiva (como a zona H da face, que inclui o nariz), tumores grandes (>2cm na face), com bordas mal definidas ou subtipos histológicos agressivos. Ela permite a checagem completa das margens no intraoperatório, garantindo a maior taxa de cura com a máxima preservação de tecido sadio. As outras opções são menos indicadas para um tumor com essas características e localização.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q96.1",
            "text": "Paciente de 70 anos, diabético e com psoríase, apresenta lesão ulcerada no calcâneo direito de má evolução. Ao exame: úlcera de 7 cm, bordos irregulares, com pigmentação periférica variando entre castanho e negro, e áreas de regressão despigmentadas. Qual é a impressão diagnóstica?",
            "options": [
                "Melanoma nodular",
                "Melanoma extensivo superficial",
                "Melanoma do lentigo maligno",
                "Melanoma lentiginoso acral"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Assim como na questão 80, uma lesão ulcerada em região acral (calcâneo) com pigmentação irregular, variação de cores e áreas de regressão é altamente suspeita de Melanoma Lentiginoso Acral. A história de 'úlcera diabética' pode ter confundido e atrasado o diagnóstico.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q96.2",
            "text": "Para o caso anterior (suspeita de melanoma acral ulcerado de 7 cm), qual o procedimento para confirmação do diagnóstico?",
            "options": [
                "Biópsia incisional",
                "Pesquisa de nódulo sentinela",
                "Biópsia excisional ampla",
                "Biópsia excisional estreita"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Repetindo a lógica da questão 81, para uma lesão muito grande (7 cm) em uma área de difícil reconstrução como o calcâneo, a biópsia incisional da área mais representativa (a parte mais espessa da úlcera ou a área mais pigmentada) é a conduta correta para confirmar o diagnóstico e planejar o tratamento definitivo, que dependerá da espessura do tumor (Índice de Breslow).",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q97",
            "text": "Paciente de 43 anos, pedreiro, apresenta lesão úlcero-vegetante em sulco balanoprepucial e glande, com 6 meses de evolução. Presença de nódulo pétreo aderido em região inguinal direita. Qual a principal hipótese diagnóstica?",
            "options": [
                "Carcinoma epidermoide (espinocelular)",
                "Carcinoma verrucoso",
                "Cancro mole",
                "Cancro duro (sífilis)"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Uma lesão úlcero-vegetante crônica na genitália, associada a um linfonodo pétreo e aderido (característico de metástase), é altamente sugestiva de um Carcinoma Espinocelular (também chamado de Epidermoide) invasivo. Carcinoma verrucoso (B) é menos agressivo. Cancro mole (C) e cancro duro (D) são úlceras infecciosas agudas e não têm este aspecto ou evolução.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q99",
            "text": "MIJ, 35 anos, procurou atendimento com múltiplas lesões condilomatosas em sulco balanoprepucial há 2 meses. Qual a principal hipótese diagnóstica e seu agente etiológico?",
            "options": [
                "Carcinoma verrucoso - HPV 16, 18",
                "Condiloma acuminado - HPV 6, 11",
                "Carcinoma espinocelular - HPV 6, 11",
                "Condiloma acuminado - HPV 16, 18"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Lesões 'condilomatosas' (verrucosas, com aspecto de 'couve-flor') na região genital são a apresentação clássica do Condiloma Acuminado. Esta condição é causada predominantemente pelos subtipos de HPV de baixo risco oncogênico, sendo os mais comuns o 6 e o 11. Os subtipos de alto risco 16 e 18 (A, E) estão mais associados a lesões precursoras de câncer e ao CEC invasivo.",
            "tag": "DST"
        },
        {
            "id": "PR2-Derma-Q140",
            "text": "DFR., 50 anos, diabética, queixa de prurido na região plantar direita há 4 meses. Ao exame: descamação plantar seguindo o bordo do pé direito e onicólise com hiperceratose subungueal na unha do hálux direito. Em relação a lesão plantar assinale a opção correta:",
            "options": [
                "A principal hipótese é dermatite atópica.",
                "A principal hipótese é dermatofitose cujos agentes podem ser antropofílicos.",
                "A principal hipótese é sífilis secundária.",
                "A principal hipótese é candidíase cutânea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição da questão 57. O quadro de descamação plantar crônica, unilateral, com acometimento ungueal associado (onicomicose) é altamente sugestivo de Tinea Pedis na sua forma hiperceratósica crônica ('em mocassim').",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q141",
            "text": "MTM, 9 anos, apresenta lesão em couro cabeludo há 2 meses, como mostra a foto anexa (placa de alopecia com pelos tonsurados). O irmão de 7 anos apresenta quadro semelhante. Verifique se as afirmativas a seguir são verdadeiras (V) ou falsas (F) e assinale a sequência CORRETA.\n( ) Essa dermatose geralmente causa alopecia cicatricial.\n( ) O dano causado leva ao desprendimento do cabelo pela raiz.\n( ) Tem como possível agente etiológico o Microsporum canis.\n( ) O sinal de Zileri está presente na maioria dos casos.",
            "options": [
                "F, V, V, V",
                "F, F, V, F",
                "V, F, V, F",
                "F, F, F, V"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. 1ª é Falsa: a Tinea Capitis tipicamente causa alopecia não cicatricial. 2ª é Falsa: o cabelo não se desprende pela raiz, ele se quebra (tonsura). 3ª é Verdadeira: Microsporum canis é um agente zoofílico comum de Tinea Capitis. 4ª é Falsa: o sinal de Zileri é da Pitiríase Versicolor.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q142",
            "text": "Qual das seguintes situações NÃO é indicação de cirurgia micrográfica de Mohs?",
            "options": [
                "Carcinoma Basocelular primário em região peri-ocular.",
                "Carcinoma espinocelular recidivado em couro cabeludo.",
                "Carcinoma espinocelular de 1,5 cm no lábio inferior.",
                "Melanoma nodular no tronco."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Cirurgia de Mohs é uma técnica para tumores de pele não melanoma, com o objetivo de checar 100% das margens. Para o melanoma, o tratamento padrão é a excisão com margens predeterminadas baseadas na espessura do tumor (Índice de Breslow), e a avaliação das margens é feita por amostragem. As outras opções (A, B, C) são todas indicações clássicas para a Cirurgia de Mohs (tumores em áreas de risco, recidivados, em locais nobres).",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q143",
            "text": "Mulher de 25 anos, apresentou mácula amarronzada com centro enegrecido em perna direita, medindo 1.0 x 0.6 cm. Ao exame dermatoscópico a lesão apresentava-se irregular nos 4 eixos. Qual o provável diagnóstico e melhor conduta a ser adotada?",
            "options": [
                "Melanoma extensivo superficial, biópsia excisional.",
                "Melanoma lentigo maligno, biópsia incisional.",
                "Melanoma acral, biópsia incisional.",
                "Nevo displásico, observar por 6 meses."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O melanoma extensivo superficial é o tipo mais comum, e a descrição clínica e dermatoscópica é altamente suspeita. Diante da suspeita de melanoma, a conduta padrão é a biópsia excisional, com margens estreitas (1-2mm), para remover toda a lesão e permitir a análise histopatológica completa, incluindo a medição da espessura de Breslow. Biópsia incisional (B, C) é reservada para lesões grandes ou em locais difíceis. A observação (D) é inadequada para uma lesão tão suspeita.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q144",
            "text": "A úlcera de Marjolin é classicamente descrita como sendo:",
            "options": [
                "Carcinoma basocelular ulcerado na perna.",
                "Carcinoma espinocelular em cicatrizes e úlceras crônicas.",
                "Leishmaniose no nariz, destruindo o septo nasal.",
                "Melanoma nodular ulcerado na perna."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição da lógica da questão 26. A Úlcera de Marjolin é a malignização de uma ferida crônica (ex: úlcera de pressão, fístula de osteomielite) ou cicatriz (ex: queimadura), transformando-se em um Carcinoma Espinocelular.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q145",
            "text": "Qual a importância dos 'pontos pretos' de uma lesão verrucosa de cromomicose?",
            "options": [
                "Indicam gravidade da doença por proliferação acentuada dos fungos.",
                "Indicam resistência aos antifúngicos convencionais.",
                "Indicam o local mais adequado para colheita de material para o exame micológico.",
                "São típicos da Lobomicose, não da Cromomicose."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Os 'pontos pretos' nas lesões verrucosas da cromomicose correspondem a focos de eliminação transepidérmica dos corpos fúngicos (corpos muriformes ou fumagoides). Por serem locais de alta concentração do fungo, são os pontos ideais para a coleta de material (raspado) para o exame micológico direto, aumentando a chance de encontrar o agente.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q146",
            "text": "Qual é o procedimento terapêutico eficiente para verrugas virais, mas contra-indicado para a região plantar?",
            "options": [
                "Criocirurgia",
                "Eletrocoagulação",
                "Cauterização química com ácidos",
                "Excisão com sutura"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A excisão e sutura de verrugas plantares é contraindicada pois a cicatriz resultante em uma área de peso pode se tornar permanentemente dolorosa, sendo muitas vezes um problema maior que a própria verruga original. As outras opções (A, B, C) são métodos destrutivos comumente utilizados para tratar verrugas plantares.",
            "tag": "viroses"
        },
        {
            "id": "PR2-Derma-Q147",
            "text": "Paciente de 60 anos, apresenta há 1 ano lesão ulcerada, com bordas enduradas, friável e borda perolada em asa nasal direita. A biópsia demonstrou ninhos de células basaloides com paliçada periférica. Qual sua principal hipótese diagnóstica e a melhor conduta?",
            "options": [
                "Melanoma nodular, exérese com margem cirúrgica.",
                "Leishmaniose, iniciar terapia sistêmica.",
                "Carcinoma espinocelular, cirurgia micrográfica de Mohs.",
                "Carcinoma basocelular, cirurgia micrográfica de Mohs."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A descrição clínica (úlcera com borda perolada) e histopatológica (células basaloides com paliçada periférica) são patognomônicas do Carcinoma Basocelular (CBC). Por se localizar em uma área de alto risco (asa nasal), a Cirurgia Micrográfica de Mohs é a melhor opção terapêutica, pois garante a maior taxa de cura com máxima preservação de tecido.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q150",
            "text": "Sobre as farmacodermias, assinale a afirmativa correta:",
            "options": [
                "São doenças que acometem exclusivamente pele e/ou mucosas.",
                "Os tipos eruptivos mais frequentes são as reações graves como SSJ/NET e DRESS.",
                "No eritema pigmentar fixo, a exposição repetida à droga pode resultar no aparecimento de bolhas.",
                "A urticária é o tipo eruptivo mais frequente de farmacodermia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Eritema Pigmentar Fixo se caracteriza por uma ou poucas máculas que surgem sempre no mesmo local após a exposição a uma droga. Em reexposições, a lesão pode se tornar mais edemaciada e até mesmo formar uma bolha no centro. Muitas farmacodermias têm acometimento sistêmico (A está errada). O tipo mais frequente é o exantema morbiliforme (B e E estão erradas).",
            "tag": "farmacodermias"
        },
        {
            "id": "PR2-Derma-Q151",
            "text": "Escolar, 8 anos, apresenta há 30 dias 3 placas de alopecia, anulares, descamativas, com pêlos tonsurantes, pruriginosas. Mãe relata que outras 4 crianças na escola apresentam o mesmo quadro. De acordo com o caso, assinale a opção correta.",
            "options": [
                "Trata-se de um caso de Tinea Capitis e o tratamento deve ser sistêmico.",
                "Trata-se de um caso de alopecia areata e o tratamento deve ser com corticoterapia tópica.",
                "O diagnóstico padrão-ouro para Tinea Capitis é a biópsia de pele.",
                "O diagnóstico correto é dermatite seborreica e o tratamento é com xampus antifúngicos."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O quadro clínico de placas de alopecia com pelos quebrados ('pontos pretos' ou tonsurados) e a história epidemiológica (várias crianças na escola) são clássicos de Tinea Capitis, uma dermatofitose. O tratamento deve ser sempre sistêmico (via oral), pois os tópicos não são eficazes. Alopecia areata (B) não tem descamação nem pelos tonsurados. O padrão-ouro é a cultura fúngica, não a biópsia (C). Dermatite seborreica (D) não causa alopecia desta forma.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q153",
            "text": "CBM, 40 anos, fototipo II, com história de queimadura solar na infância, procurou atendimento por lesão na face com 2 anos de evolução e sangramento recente. Ao exame: Lesão papulosa com bordas peroladas, telangiectasias na superfície e ulceração central, com 2,0 cm de diâmetro em região malar direita. Qual é a principal hipótese clínica diagnóstica?",
            "options": [
                "Carcinoma basocelular terebrante",
                "Carcinoma espinocelular",
                "Carcinoma basocelular nódulo-ulcerado",
                "Melanoma do lentigo maligno"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A descrição de uma pápula ou nódulo com bordas peroladas, telangiectasias e uma ulceração central (úlcera roedora) é a apresentação clássica do Carcinoma Basocelular (CBC) do tipo nódulo-ulcerado. A história de exposição solar é o principal fator de risco.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q155",
            "text": "Sobre a hanseníase, é correto afirmar:",
            "options": [
                "Deve ser solicitada baciloscopia para os contatos domiciliares sem lesões.",
                "Acometimento do nervo radial pode causar mão caída e do nervo ulnar a garra cubital.",
                "O tempo de incubação da doença dura em média de 2 semanas a 2 meses.",
                "Não há correlação entre as formas clínicas e a imunidade do paciente."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A hanseníase é uma neuropatia periférica e o acometimento dos troncos nervosos leva a déficits motores característicos, como a 'mão caída' (nervo radial) e a 'garra ulnar' (nervo ulnar). A baciloscopia em contatos assintomáticos (A) não é rotina. O tempo de incubação (C) é longo, de anos. A correlação entre a forma clínica e a imunidade celular do paciente (D) é o pilar da classificação da doença (Polo Tuberculoide vs. Virchowiano).",
            "tag": "hanseníase"
        },
        {
            "id": "PR2-Derma-Q156",
            "text": "Em relação à candidíase é correto afirmar, EXCETO:",
            "options": [
                "Pode ser desencadeada por antibioticoterapia de largo espectro.",
                "Responde bem ao uso de fluconazol sistêmico.",
                "Manifesta-se principalmente nas áreas extensoras.",
                "Pode comprometer a mucosa oral."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta (a exceção) é a C. Esta questão é uma repetição da questão 19. A candidíase afeta preferencialmente áreas de dobras (intertriginosas) e mucosas, não áreas extensoras.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q157",
            "text": "A dermatofitose no couro cabeludo (Tinea Capitis) se manifesta clinicamente com:",
            "options": [
                "Placas de alopecia com pelos tonsurados na superfície.",
                "Placa de alopecia cicatricial.",
                "Bolhas no couro cabeludo.",
                "Vesículas no couro cabeludo."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Esta questão é uma repetição da questão 20. A Tinea Capitis classicamente se apresenta com placas de alopecia com pelos quebrados, tonsurados.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q158",
            "text": "A dermatofitose nos pés pode se manifestar clinicamente de todas as formas, EXCETO:",
            "options": [
                "Descamação e fissura interdigital.",
                "Descamação plantar crônica.",
                "Placas anulares no dorso dos pés.",
                "Lesões nodulares nas regiões plantares."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta (a exceção) é a D. Esta questão é uma repetição da questão 21. A Tinea Pedis não causa lesões nodulares.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q159",
            "text": "Em relação à pitiríase versicolor é correto afirmar, EXCETO:",
            "options": [
                "Frequentemente apresenta o sinal de Zileri.",
                "As lesões cutâneas são vesiculosas.",
                "O calor pode ser um fator desencadeante.",
                "Pode ser desencadeada por imunossupressores."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta (a exceção) é a B. Esta questão é uma repetição da questão 22. As lesões da pitiríase versicolor são maculares, não vesiculosas.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q160",
            "text": "A tinea nigra se manifesta clinicamente por:",
            "options": [
                "Lesões bolhosas na região plantar.",
                "Manchas hipercrômicas irregulares em região palmar.",
                "Lesões nodulares em região plantar.",
                "Lesões vesiculosas em região palmar."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Esta questão é uma repetição da questão 23. A Tinea Nigra classicamente se apresenta como uma mácula acastanhada ou preta na palma da mão.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q161",
            "text": "Professora de 40 anos, com contato regular com cão, apresenta há uma semana placa anular pruriginosa com borda eritematovesiculosa em região abdominal. Qual a impressão diagnóstica?",
            "options": [
                "Eczema de contato",
                "Psoríase",
                "Tinea corporis",
                "Candidíase"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Esta questão é uma repetição da questão 24. A lesão anular com borda ativa e a história de contato com animal são altamente sugestivas de Tinea Corporis.",
            "tag": "micoses"
        },
        {
            "id": "PR2-Derma-Q180",
            "text": "Diante de uma lesão de pele melanocítica assimétrica, de bordos irregulares, heterocrômica e com 1cm de diâmetro em região dorsal; assinale a alternativa que indica a conduta mais adequada:",
            "options": [
                "Observar a evolução por 6 meses.",
                "Realizar biópsia incisional.",
                "Realizar biópsia excisional até o tecido celular subcutâneo com margens exíguas.",
                "Realizar biópsia excisional com margens amplas de 2 cm."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Diante de uma lesão com alta suspeita clínica para melanoma (ABCDE positivo), a conduta padrão é a biópsia excisional. A biópsia deve ser profunda o suficiente para incluir todo o tumor (até o subcutâneo) e com margens laterais pequenas (1-3 mm), apenas o suficiente para remover a lesão visível. O objetivo é obter o diagnóstico e, principalmente, a espessura de Breslow, que guiará a ampliação de margens e o estadiamento posteriores. Margens amplas (D) só são feitas após a confirmação. Observar (A) ou fazer biópsia incisional (B) em uma lesão pequena e ressecável seria inadequado.",
            "tag": "câncer de pele"
        },
        {
            "id": "PR2-Derma-Q181",
            "text": "Mulher de 25 anos, apresentou mácula amarronzada com centro enegrecido em perna direita, medindo 1,0 x 0,6 cm. Dermatoscopia irregular. Qual provável diagnóstico e a melhor conduta?",
            "options": [
                "Melanoma extensivo superficial, biópsia excisional.",
                "Melanoma lentigo maligno, biópsia incisional.",
                "Melanoma acral, biópsia incisional.",
                "Nevo displásico, observar por 6 meses."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Esta questão é uma repetição da questão 143. A suspeita clínica e dermatoscópica de melanoma indica a realização de uma biópsia excisional para confirmação diagnóstica e estadiamento.",
            "tag": "câncer de pele"
        }
    ]
    
},

{
    id: "preset-m7-pr2-hemato",
    name: "Estácio - M7 - PR2 - Hematologia",
    questions: [
        {
            "id": "PR2-Hemato-Q1",
            "text": "Paciente portador de talassemia major, politransfundido, apresenta nos últimos meses dificuldade de obter sangue compatível. Fenotipagem eritrocitária mostra novo anticorpo anti-Duffy. Teste de Coombs direto é negativo. Assinale a alternativa verdadeira:",
            "options": [
                "O paciente apresenta reação hemolítica transfusional tardia com anticorpos pré-formados.",
                "O paciente apresenta autoimunização com produção de anticorpos contra seus próprios eritrócitos.",
                "O paciente apresenta aloimunização com produção de anticorpos contra antígenos de outros indivíduos.",
                "O paciente apresenta doença do enxerto contra o hospedeiro."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A aloimunização é a produção de anticorpos contra antígenos não próprios (aloantígenos), como os presentes nas hemácias de um doador. Pacientes politransfundidos, como os com talassemia major, têm alto risco de desenvolver aloanticorpos, o que explica a dificuldade de compatibilidade. O Coombs direto negativo descarta autoimunização (B). A reação hemolítica (A) é uma consequência, mas o processo primário é a aloimunização. A doença do enxerto contra hospedeiro (D) é mediada por linfócitos T, um mecanismo diferente.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q6",
            "text": "Sobre os linfomas Hodgkin e não Hodgkin, assinale a resposta correta.",
            "options": [
                "Febre, sudorese e emagrecimento (Sintomas B) estão sempre presentes no início da doença.",
                "Os linfomas de Hodgkin geralmente se apresentam de forma explosiva em estadiamento IV.",
                "Linfomas altamente agressivos podem evoluir ao óbito em poucas semanas se não tratados.",
                "Os linfomas indolentes têm maior chance de cura em estágios avançados que os agressivos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Linfomas de alto grau, como o Linfoma de Burkitt, são extremamente agressivos e de rápida proliferação, podendo ser fatais em semanas se não houver tratamento. Os sintomas B (A) são mais comuns no Linfoma de Hodgkin, mas não são universais no início. O Linfoma de Hodgkin (B) classicamente tem uma disseminação mais ordenada e contígua. Linfomas indolentes (D), apesar do curso arrastado, são mais difíceis de curar em estágios avançados do que os agressivos, que respondem melhor à quimioterapia.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q7",
            "text": "Jovem de 15 anos, afrodescendente, com febre e dor torácica. RX de tórax com infiltrado pulmonar. Hemograma: Hb 7,2, LDH 650, BI 2,8, reticulócitos 7%, Coombs direto negativo. Eletroforese de hemoglobina revela 95% de HbS. Hematoscopia com hemácias afoiçadas. Qual o diagnóstico?",
            "options": [
                "Beta talassemia major",
                "Anemia falciforme e crise hemolítica",
                "Anemia microangiopática",
                "Deficiência de G6PD e crise hemolítica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O paciente apresenta anemia (Hb 7,2), sinais de hemólise (LDH e BI aumentados, reticulocitose), e a eletroforese de hemoglobina com 95% de HbS confirma o diagnóstico de Anemia Falciforme (doença SS). A presença de hemácias afoiçadas é patognomônica. O quadro pulmonar agudo é compatível com Síndrome Torácica Aguda, uma complicação grave da doença. Beta talassemia (A) não teria HbS. Anemia microangiopática (C) teria mais esquizócitos. Deficiência de G6PD (D) é uma possibilidade, mas a eletroforese define o diagnóstico.",
            "tag": "anemia hiperproliferativa"
        },
        {
            "id": "PR2-Hemato-Q28",
            "text": "Jovem, 15 anos, com febre, diarreia e dor abdominal. Exames: Cr 5,8, Hb 7,2, LDH 650, BI 2,8, reticulócitos 7%, Coombs direto negativo, Eletroforese de Hb com 25% de HbS. Hematoscopia com esquizócitos. Qual o diagnóstico mais provável?",
            "options": [
                "Beta talassemia major",
                "Anemia falciforme e crise hemolítica",
                "Anemia microangiopática",
                "Anemia imuno-hemolítica por anticorpos frios"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A presença de esquizócitos (fragmentos de hemácias) na hematoscopia é o marcador da anemia hemolítica microangiopática. O quadro de insuficiência renal aguda (Cr 5,8), anemia e trombocitopenia (não informada, mas esperada) fecha a tríade da Síndrome Hemolítico-Urêmica (SHU), principal causa de anemia microangiopática nesta faixa etária, geralmente pós-infecciosa. Os 25% de HbS indicam traço falciforme, que não explica o quadro agudo.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q34",
            "text": "Homem de 76 anos, paraplégico, com sepse urinária, fraturas patológicas em T11 e lesões osteolíticas. A biópsia afastou carcinomas e linfomas. Considerando a hipótese de Mieloma Múltiplo, qual conjunto de achados seria o mais esperado?",
            "options": [
                "Cálcio elevado, creatinina elevada, anemia, pico monoclonal em beta, plasmócitos < 10% na medula",
                "Cálcio normal, pancitopenia, pico de hemoglobina C, plasmócitos < 10% na medula",
                "Proteína monoclonal no soro, creatinina normal, hemograma normal, plasmócitos 11% na medula",
                "Cálcio elevado, creatinina elevada, anemia, pico monoclonal IgG, plasmócitos > 10% na medula"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O Mieloma Múltiplo (MM) é definido pela presença de >10% de plasmócitos clonais na medula óssea ou plasmocitoma, associado a pelo menos um evento definidor (CRAB: Hipercalcemia, Insuficiência Renal, Anemia, Lesões Ósseas). A opção D é a única que contempla um cenário compatível com MM ativo e sintomático, incluindo o pico monoclonal (proteína M).",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q46",
            "text": "Homem de 27 anos com equimoses e petéquias espontâneas há 4 dias, após quadro respiratório. Hemograma: Leucócitos e hemácias normais, Plaquetas: 13.000/mm³, com presença de macroplaquetas. Qual o diagnóstico mais provável?",
            "options": [
                "Anemia de doença crônica",
                "Púrpura Trombocitopênica Imunológica (PTI)",
                "Anemia por deficiência de Vitamina B12",
                "Leucemia Aguda"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro de plaquetopenia isolada e acentuada (<20.000) com sangramento cutâneo (petéquias, equimoses), em um paciente jovem, com história de infecção viral recente e sem outras alterações no hemograma, é a apresentação clássica da Púrpura Trombocitopênica Imunológica (PTI) aguda.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q47",
            "text": "Paciente em uso de cumarínicos (antagonistas da Vitamina K) chega à emergência com hemorragia digestiva alta e INR de 9,5. Assinale a principal alternativa para reversão imediata do efeito anticoagulante:",
            "options": [
                "Repor plasma fresco congelado ou complexo protrombínico",
                "Administrar Vitamina K venosa em alta quantidade",
                "Administrar Sulfato de protamina",
                "Administrar Ácido tranexâmico venoso"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Em uma situação de sangramento grave por superdosagem de cumarínico, a reversão deve ser imediata. O plasma fresco congelado ou o concentrado de complexo protrombínico fornecem os fatores de coagulação dependentes de Vitamina K já prontos para agir. A Vitamina K (B) tem ação lenta (horas). Sulfato de protamina (C) reverte a heparina. Ácido tranexâmico (D) é um antifibrinolítico.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q50",
            "text": "A fibrinólise pode ser reduzida com o uso de drogas que inibem a conversão de plasminogênio em plasmina. Qual alternativa contempla tal opção?",
            "options": [
                "Aspirina",
                "Ácido tranexâmico",
                "Tromboxane A2",
                "DDAVP"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Ácido Tranexâmico é um agente antifibrinolítico. Ele atua bloqueando os sítios de ligação da lisina no plasminogênio, impedindo sua conversão em plasmina e, consequentemente, inibindo a degradação da fibrina.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q54",
            "text": "Assinale a opção correta sobre marcadores de hemólise:",
            "options": [
                "A hiperbilirrubinemia direta é um achado da doença de Gilbert",
                "A autoesplenectomia é um achado da doença falciforme (HbSS)",
                "O marcador mais sensível de hemólise é a haptoglobina",
                "PTI é um exemplo de anemia microangiopática"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A haptoglobina é uma proteína que se liga à hemoglobina livre no plasma. Durante a hemólise, a haptoglobina é consumida rapidamente, tornando sua queda o marcador laboratorial mais sensível para o processo hemolítico. A autoesplenectomia (B) é característica da doença falciforme homozigota (SS), não da SC. PTI (D) é uma plaquetopenia imune, não uma anemia microangiopática.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q61",
            "text": "Homem de 42 anos com crise aguda de gota e esplenomegalia. Hemograma: 54.000 leucócitos, Ht 39%, plaquetas 450.000. Suspeita de Leucemia Mieloide Crônica (LMC). Assinale a alternativa que contém os achados esperados na hematoscopia nesta enfermidade:",
            "options": [
                "Aumento exagerado de linfócitos maduros",
                "Leucocitose com hiato leucêmico (blastos e segmentados, sem intermediários)",
                "Presença de toda a linhagem mieloide em escalonamento maturativo",
                "Leucocitose com desvio à esquerda apenas até metamielócitos"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A LMC é caracterizada por uma proliferação de toda a série granulocítica. A hematoscopia tipicamente mostra leucocitose acentuada com a presença de todas as fases de maturação (mieloblastos, promielócitos, mielócitos, metamielócitos, bastões e segmentados), além de basofilia e eosinofilia. A gota ocorre pelo aumento do ácido úrico devido à alta proliferação celular.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q68",
            "text": "Homem de 29 anos refere abaulamento no pescoço há 2 meses, sem sintomas B. Ao exame, linfonodos cervicais e supraclaviculares direitos de 3-4 cm. A principal hipótese é Linfoma de Hodgkin. Se um PET-CT mostrar massa mediastinal de 14 cm, qual seria o estadiamento de Ann Arbor?",
            "options": [
                "Estadiamento IIAX",
                "Estadiamento IIBX",
                "Estadiamento IAX",
                "Estadiamento IIIX"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O acometimento de duas regiões linfonodais (cervical e supraclavicular) do mesmo lado do diafragma classifica o linfoma como Estadiamento II. A ausência de sintomas B é indicada pela letra 'A'. A presença de uma massa 'bulky' (grande, >10cm) no mediastino é indicada pela letra 'X'. Portanto, o estadiamento correto é IIAX.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q69",
            "text": "Mulher de 61 anos com dorsalgia intensa, anemia com roleaux eritrocitário e pico monoclonal de 6g. Iniciou bifosfonato e desenvolveu tumoração infecciosa na mandíbula. Qual a doença de base e o diagnóstico provável da complicação?",
            "options": [
                "Imunodeficiência adquirida / linfonodo infectado",
                "Anemia por deficiência de ácido fólico / neutropenia",
                "Síndrome de Kawasaki / linfonodo infectado",
                "Mieloma múltiplo / osteonecrose de mandíbula"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro de dor óssea, anemia com roleaux e pico monoclonal elevado define o diagnóstico de Mieloma Múltiplo. A osteonecrose de mandíbula é uma complicação bem conhecida do uso de bifosfonatos (como o Risedronato), medicamentos utilizados para tratar as lesões ósseas do mieloma.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q70",
            "text": "Mulher de 64 anos com artrite reumatoide, apresentou insuficiência renal aguda. Agora com astenia, palidez, dor lombar e lesões líticas em T12, S1 e S2. Hemograma com anemia normocítica. Qual exame e alteração esperada?",
            "options": [
                "Eletroforese de hemoglobina: aumento de hemoglobina A2",
                "Eletroforese de proteína: aumento de albumina",
                "Imunofixação de proteínas urinárias: predomínio de IgG e cadeia leve Kappa",
                "Hematoscopia de sangue periférico: presença de blastos monocitoides"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro de dor óssea com lesões líticas, anemia e insuficiência renal é altamente sugestivo de Mieloma Múltiplo. A doença é caracterizada pela produção de uma imunoglobulina monoclonal (Proteína M). A imunofixação é um exame mais sensível que a eletroforese para detectar e tipificar essa proteína no soro e/ou na urina (proteinúria de Bence-Jones). IgG Kappa é um tipo comum de proteína M.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q71",
            "text": "Quais dos achados abaixo melhor definem um quadro de Mieloma Múltiplo sistêmico ativo?",
            "options": [
                "Pico monoclonal >3g, plasmócitos na medula >10%, mas sem critérios CRAB",
                "Pico monoclonal <3g, plasmócitos na medula <10%, sem critérios CRAB",
                "Presença de evento definidor de mieloma (critério CRAB), como fratura patológica",
                "Pico monoclonal >3g, plasmócitos na medula >10%, com osteófitos em coluna"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O diagnóstico de Mieloma Múltiplo ativo/sintomático requer a presença de um evento definidor de mieloma, classicamente os critérios CRAB (Hipercalcemia, Insuficiência Renal, Anemia ou Lesões Ósseas - 'Bone lesions'). A presença de uma fratura vertebral patológica (lesão óssea) fecha o critério, independentemente dos outros valores.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q72",
            "text": "Qual das opções abaixo NÃO é utilizada como critério para decidir o tratamento do paciente com mieloma múltiplo?",
            "options": [
                "Idade",
                "Osteopenia",
                "Presença de DPOC",
                "Performance status (ECOG)"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A osteopenia difusa por si só não é um critério para iniciar o tratamento do Mieloma Múltiplo. Os critérios são baseados em lesões ósseas líticas ou fraturas patológicas. A idade (A), comorbidades como DPOC (C) e o status funcional do paciente (D) são cruciais para definir a elegibilidade para tratamentos mais intensivos como o transplante autólogo de medula óssea.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q73",
            "text": "No tratamento de mieloma múltiplo, a osteonecrose de mandíbula pode ser uma complicação importante. Qual a medicação relacionada a essa complicação?",
            "options": [
                "Cefepime",
                "Eritropoetina",
                "Denosumabe",
                "Ácido Zoledrônico"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Tanto os bifosfonatos (como o Ácido Zoledrônico) quanto o Denosumabe (C) são classes de medicamentos usados para tratar a doença óssea no mieloma múltiplo e estão associados ao risco de osteonecrose de mandíbula, especialmente após procedimentos dentários invasivos.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q75",
            "text": "Paciente portador de talassemia major, múltiplas transfusões, com dificuldade de compatibilidade sanguínea. Fenotipagem mostra novo anticorpo anti-Duffy e Coombs direto negativo. Assinale a alternativa verdadeira:",
            "options": [
                "Reação hemolítica transfusional tardia",
                "Autoimunização",
                "Aloimunização",
                "Doença do enxerto contra o hospedeiro"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A aloimunização é a produção de anticorpos contra antígenos não próprios, como os das hemácias de um doador. É uma complicação comum em pacientes politransfundidos. O Coombs direto negativo descarta autoimunização (B).",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q76",
            "text": "Assinale a opção correta sobre marcadores de hemólise:",
            "options": [
                "Hiperbilirrubinemia direta é um achado da doença de Gilbert.",
                "Autoesplenectomia é um achado da doença falciforme (HbSS).",
                "O marcador mais sensível de hemólise é a bilirrubina indireta.",
                "PTI é um exemplo de anemia microangiopática."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A autoesplenectomia (infartos esplênicos de repetição que levam à atrofia do baço) é uma característica da anemia falciforme homozigota (HbSS). O marcador mais sensível de hemólise (C) é a haptoglobina. PTI (D) não é anemia microangiopática.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q77",
            "text": "Criança falcêmica, 5 anos, procura emergência com dor abdominal, taquicardia, hipotensão, Hb 4 g/dL e volumosa esplenomegalia. O quadro descrito é compatível com que tipo de crise?",
            "options": [
                "Crise de sequestro esplênico",
                "Crise hemolítica",
                "Crise aplásica",
                "Crise vaso-oclusiva"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A crise de sequestro esplênico é uma emergência caracterizada pelo aprisionamento súbito de uma grande quantidade de sangue no baço, levando a uma queda abrupta da hemoglobina, esplenomegalia dolorosa e choque hipovolêmico. É mais comum em crianças pequenas com anemia falciforme.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q78",
            "text": "Mulher de 70 anos, assintomática, com pico monoclonal de 2,1 g/dL na eletroforese. Exames de imagem normais e medula óssea com 10% de plasmócitos. Qual o diagnóstico mais provável?",
            "options": [
                "Mieloma Múltiplo Assintomático (Smoldering)",
                "Gamopatia Monoclonal de Significado Indeterminado (GMSI)",
                "Mieloma múltiplo sintomático",
                "Macroglobulinemia de Waldenstrom"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O Mieloma Múltiplo Assintomático (Smoldering) é definido pela presença de proteína M sérica ≥ 3 g/dL OU plasmócitos clonais na medula óssea entre 10% e 60%, na ausência de eventos definidores de mieloma (CRAB) ou amiloidose.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q79",
            "text": "Em relação às anemias hemolíticas, podemos afirmar:",
            "options": [
                "A deficiência de G6PD é uma doença autossômica recessiva.",
                "A anemia falciforme no adulto se caracteriza por esplenomegalia.",
                "A hemólise na esferocitose hereditária é predominantemente extravascular.",
                "A anemia imuno-hemolítica por anticorpos quentes é mediada por IgM."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Na esferocitose hereditária, um defeito na membrana das hemácias as torna menos flexíveis. Essas hemácias anormais são reconhecidas e destruídas pelos macrófagos do baço, caracterizando uma hemólise extravascular.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q82",
            "text": "Mulher de 74 anos com Leucemia Linfoide Crônica (LLC) inicia quadro febril agudo com anemia intensa (Hct 16%). Laboratório com LDH elevado, haptoglobina diminuída e Coombs direto positivo. Assinale a assertiva correta:",
            "options": [
                "Anemia hemolítica autoimune",
                "Transformação para linfoma agressivo (Síndrome de Richter)",
                "Estadiamento 3 de Rai",
                "Anemia ferropriva por sangramento crônico"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A Anemia Hemolítica Autoimune (AHAI) é a complicação autoimune mais comum da LLC. O diagnóstico é confirmado pela presença de anemia, sinais de hemólise (LDH alto, haptoglobina baixa) e um teste de Coombs direto positivo.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q83",
            "text": "Na avaliação da hemostasia, quais exames avaliam, respectivamente, a via extrínseca, a via intrínseca, os freios fisiológicos e a fibrinólise?",
            "options": [
                "TAP, PTT, Proteína C/S e Antitrombina III, Ativador do plasminogênio",
                "PTT, TAP, Antitrombina III e Proteína C/S, Inibidor do plasminogênio",
                "Tempo de Sangramento, PTT, TAP, Proteína C reativa, Fator XII",
                "TAP, PTT, Fibrinogênio, Dímero-D"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O Tempo de Protrombina (TAP) avalia a via extrínseca. O Tempo de Tromboplastina Parcial Ativada (PTT) avalia a via intrínseca. Proteína C, S e Antitrombina III são os principais anticoagulantes naturais (freios). O sistema fibrinolítico é iniciado pelo ativador do plasminogênio.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q84",
            "text": "Jovem de 15 anos com febre, tosse e dor torácica. Apresenta turricefalia e hepatoesplenomegalia. Hemograma: Hb 7,2, LDH 650, BI 2,8, reticulócitos 7%, Coombs direto negativo. Hematoscopia com extrema microcitose, hipocromia e células em alvo. Qual o diagnóstico?",
            "options": [
                "Anemia falciforme e crise hemolítica",
                "Beta talassemia major",
                "Anemia microangiopática",
                "Deficiência de G6PD e crise hemolítica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O quadro de anemia hemolítica crônica grave desde a infância, com hepatoesplenomegalia, alterações ósseas (turricefalia por expansão da medula) e uma hematoscopia com microcitose e hipocromia acentuadas e células em alvo, é o quadro clássico da Beta Talassemia Major.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q90",
            "text": "Jovem, 15 anos, com febre e dor torácica. RX de tórax com infiltrado pulmonar. Exames: Hb 7,2, LDH 650, reticulócitos 7%, Coombs direto negativo, Eletroforese com 25% de HbS. Hematoscopia com esquizócitos. Qual o diagnóstico?",
            "options": [
                "Beta talassemia major",
                "Anemia falciforme (traço) com crise hemolítica",
                "Anemia microangiopática",
                "Deficiência de G6PD e crise hemolítica"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A presença de esquizócitos é o marcador de anemia microangiopática. Embora o paciente tenha traço falciforme (25% HbS), este achado não causa a hemólise ou o quadro agudo descrito. A combinação de anemia, hemólise e possível disfunção de múltiplos órgãos (pulmonar) em um contexto infeccioso aponta para uma microangiopatia trombótica, como SHU ou PTT.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q91",
            "text": "Jovem de 22 anos com febre de origem obscura. TC de tórax revela gânglios no mediastino. Biópsia revela Linfoma de Hodgkin. Após recaída precoce ao tratamento com ABVD, a imunofenotipagem revela CD20 positivo. O que isso significa?",
            "options": [
                "Deveriam ter completado os 6 ciclos para remissão.",
                "O diagnóstico provável é Linfoma de Hodgkin rico em linfócitos, e não o clássico.",
                "Trata-se de um Linfoma de Hodgkin agressivo, indicando transplante imediato.",
                "A célula de Reed-Sternberg confirma o diagnóstico apesar da imunohistoquímica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. As células de Reed-Sternberg do Linfoma de Hodgkin Clássico são tipicamente CD30+ e CD15+, mas CD20 negativas. A positividade para CD20 sugere o subtipo 'Linfoma de Hodgkin com predomínio linfocitário nodular', que tem um comportamento e tratamento distintos, ou, mais raramente, uma variante do tipo clássico rica em linfócitos.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q94",
            "text": "Na insuficiência hepática, o acompanhamento da coagulação é feito rotineiramente pelo TAP/INR e não pelo PTT, devido à queda mais rápida de qual fator?",
            "options": ["Fator V", "Fator VII", "Fator IX", "Fator II (Protrombina)"],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Fator VII tem a menor meia-vida entre todos os fatores de coagulação (cerca de 4-6 horas). Como ele participa exclusivamente da via extrínseca (avaliada pelo TAP/INR), este exame se altera mais precocemente na insuficiência hepática.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q95",
            "text": "RTPA e estreptoquinase são drogas usadas para induzir a fibrinólise. São similares a qual agente biológico?",
            "options": [
                "Plasmina",
                "Tromboxane A2",
                "Fator tecidual ativador de plasminogênio (t-PA)",
                "Ácido para-aminocaproico"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O RTPA (ativador de plasminogênio tecidual recombinante) e a estreptoquinase são agentes trombolíticos que atuam convertendo o plasminogênio inativo em plasmina ativa, mimetizando a ação do t-PA endógeno para dissolver os coágulos de fibrina.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q98",
            "text": "Homem de 21 anos, com febre e disúria, tratado com ciprofloxacino. Exames: Hb 6, LDH 780, BI 3, reticulócitos 10%, Coombs direto positivo. Eletroforese com 25% de HbS. Qual o diagnóstico?",
            "options": [
                "Beta talassemia major",
                "Anemia falciforme (traço) com crise hemolítica",
                "Anemia microangiopática",
                "Anemia imuno-hemolítica por anticorpos quentes"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O paciente apresenta uma anemia hemolítica aguda (Hb baixa, LDH alto, BI alta, reticulocitose). O Coombs direto positivo indica que a causa da hemólise é autoimune. A ciprofloxacina pode ser um gatilho para a AHAI. O traço falciforme (25% HbS) é um achado incidental.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q100",
            "text": "Jovem, 15 anos, com febre, diarreia e dor abdominal. Exames: Cr 5,8, Hb 7,2, LDH 650, reticulócitos 7%, Coombs direto negativo, Eletroforese com 25% de HbS. Hematoscopia com esquizócitos. Qual o diagnóstico?",
            "options": [
                "Beta talassemia major",
                "Anemia falciforme (traço) com crise hemolítica",
                "Anemia microangiopática (provável SHU)",
                "Deficiência de G6PD e crise hemolítica"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A tríade de anemia hemolítica microangiopática (com esquizócitos), plaquetopenia (não descrita, mas esperada) e insuficiência renal aguda (Cr 5,8), geralmente após um quadro infeccioso gastrointestinal, define a Síndrome Hemolítico-Urêmica (SHU).",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q101",
            "text": "Mulher, 70 anos, com linfonodomegalia e esplenomegalia. Hemograma: Leucócitos 230.000 (linfocitose), Hb 9,6, Plaquetas 84.000. Após tratamento, houve rápida lise tumoral. Quais alterações bioquímicas são esperadas?",
            "options": [
                "Hiperuricemia, hipercalemia e hipofosfatemia",
                "Hiperuricemia, hipercalcemia e hipofosfatemia",
                "Hiperuricemia, hipercalemia, hiperfosfatemia e hipocalcemia",
                "Hiponatremia, hiperuricemia e aumento da creatinina"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Síndrome de Lise Tumoral é caracterizada pela liberação maciça do conteúdo intracelular das células neoplásicas. Isso leva a hiperuricemia (pela quebra de ácidos nucleicos), hipercalemia e hiperfosfatemia (pela liberação de potássio e fosfato intracelulares). O excesso de fosfato se liga ao cálcio, causando hipocalcemia.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q102",
            "text": "Ao observar um caso de linfoma de Hodgkin, do tipo esclerose nodular, no microscópio observa-se:",
            "options": [
                "Apenas células de Reed-Sternberg clássicas em grande número.",
                "Predomínio das células de Reed-Sternberg da variante lacunar, e também células clássicas.",
                "Infiltrado inflamatório com predomínio de eosinófilos.",
                "Depósito de colágeno, liberado a partir das células estreladas."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O subtipo Esclerose Nodular do Linfoma de Hodgkin é caracterizado histologicamente pela presença de bandas de colágeno que delimitam nódulos e pela presença da variante lacunar da célula de Reed-Sternberg, além de algumas células clássicas.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q103",
            "text": "Existe a possibilidade de cura de linfomas não Hodgkin sem uso de quimioterapia em raras situações. Assinale a correta:",
            "options": [
                "Linfoma Difuso de Grandes Células B",
                "Linfoma Folicular",
                "Linfoma do Manto",
                "Linfoma de Zona Marginal tipo MALT gástrico associado a H. pylori"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O Linfoma de Zona Marginal tipo MALT (tecido linfoide associado à mucosa) gástrico está fortemente associado à infecção pela bactéria Helicobacter pylori. Em casos localizados, a erradicação da bactéria com antibióticos pode levar à regressão e cura do linfoma.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q104",
            "text": "A leucemia mieloide crônica (LMC) avançou intensamente do ponto de vista terapêutico. Estes progressos vieram de:",
            "options": [
                "Novos agentes quimioterápicos sobre a célula tronco CD34",
                "Imunoterapia específica sobre células alvo",
                "Terapia-alvo com inibidores da tirosina quinase (BCR-ABL)",
                "Uso de antivirais específicos geradores da mutação Cromossomo Filadélfia"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A revolução no tratamento da LMC veio com o desenvolvimento da terapia-alvo molecular, especificamente os inibidores da tirosina quinase (como o imatinibe), que bloqueiam a atividade da proteína de fusão anômala BCR-ABL, produto do Cromossomo Filadélfia, que é a causa da doença.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q105",
            "text": "Paciente de 66 anos com 34.000 leucócitos (84% linfócitos), sem gânglios ou esplenomegalia. Imunofenotipagem: CD5+ e CD23+. Trata-se de Leucemia Linfoide Crônica (LLC). Podemos afirmar:",
            "options": [
                "Neoplasia incurável, com evolução para linfoma agressivo em 90% dos casos.",
                "Evolução geralmente indolente sem necessidade de tratamento inicial na maioria dos casos.",
                "Se apresenta geralmente com gânglios e esplenomegalia.",
                "Uma leucometria em torno de 30.000 já necessita intervenção terapêutica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Leucemia Linfoide Crônica (LLC) é uma doença de curso indolente. A maioria dos pacientes é diagnosticada em estágios iniciais (Rai 0, como este paciente) e assintomáticos, não necessitando de tratamento imediato, apenas de acompanhamento ('watch and wait').",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q106",
            "text": "Leucemia linfoide crônica (LLC) hoje apresenta várias opções terapêuticas. Assinale a opção terapêutica inadequada:",
            "options": [
                "Rituximabe isolado",
                "Rituximabe mais Venetoclax",
                "Ibrutinibe",
                "Imatinibe"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O Imatinibe é um inibidor de tirosina quinase usado no tratamento da Leucemia Mieloide Crônica (LMC) e não tem eficácia na Leucemia Linfoide Crônica (LLC). As outras opções são terapias modernas e eficazes para a LLC.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q107",
            "text": "Mulher de 55 anos com dor lombar. Exames: Hb 12, VCM 98, plaquetas 160.000, creatinina e cálcio normais, 11% de plasmócitos na medula, 3g de pico monoclonal. RM de coluna normal. Qual o diagnóstico mais provável?",
            "options": [
                "Gamopatia monoclonal de significado indeterminado (GMSI)",
                "Mieloma múltiplo assintomático (Smoldering)",
                "Mieloma múltiplo sintomático",
                "Leucemia de células plasmáticas"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O paciente preenche os critérios para Mieloma Múltiplo Assintomático (Smoldering): proteína monoclonal sérica ≥ 3g/dL E/OU plasmócitos clonais na medula entre 10% e 60%, na ausência de eventos definidores de mieloma (critérios CRAB) ou amiloidose.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q108",
            "text": "Homem de 76 anos com ITU, paraplegia, fraturas patológicas em T11 e lesões líticas. Hemograma: Hb 7,6, VCM 108, plaquetas 101.000, presença de Roleaux. A alternativa correta é:",
            "options": [
                "Anemia de doença crônica",
                "Anemia ferropriva",
                "Anemia hemolítica por deficiência de G6PD",
                "Mieloma Múltiplo"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A combinação de idade avançada, dor óssea, fraturas patológicas, lesões líticas, anemia e a presença de 'roleaux' (empilhamento de hemácias) no sangue periférico é o quadro clássico de Mieloma Múltiplo.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q109",
            "text": "O diagnóstico diferencial de mieloma múltiplo envolve as seguintes doenças por apresentarem pico monoclonal na eletroforese de proteínas, com exceção de:",
            "options": [
                "Macroglobulinemia de Waldenström",
                "Plasmocitoma isolado",
                "POEMS",
                "Leucemia de células T do adulto"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Leucemia/Linfoma de Células T do Adulto, associada ao vírus HTLV-1, é uma neoplasia de linfócitos T e não cursa com a produção de pico monoclonal de imunoglobulinas, que é característico das neoplasias de plasmócitos (células B diferenciadas).",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q110",
            "text": "A coloração vermelho Congo é característica para o diagnóstico de qual doença?",
            "options": [
                "Amiloidose",
                "Mieloma múltiplo",
                "Deficiência de ferro",
                "Mielofibrose"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A coloração com Vermelho Congo, que mostra birrefringência verde-maçã sob luz polarizada, é o método histopatológico clássico e patognomônico para identificar os depósitos de proteína amiloide nos tecidos.",
            "tag": "doenças correlatas"
        },
        {
            "id": "PR2-Hemato-Q111.1",
            "text": "Adolescente de 16 anos com icterícia, esplenomegalia e cálculos biliares. Hemograma: Hb 10,6, CHCM 35, RDW 19,3, reticulócitos 5%, Coombs direto negativo. Qual o diagnóstico mais provável?",
            "options": [
                "Anemia Falciforme",
                "Deficiência de G6PD",
                "Talassemia Intermediária",
                "Esferocitose Hereditária"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro de anemia hemolítica crônica (reticulocitose, icterícia, esplenomegalia) com Coombs negativo, associado a um CHCM normal/alto e RDW elevado, além da complicação com cálculos biliares de bilirrubinato, é a apresentação clássica da Esferocitose Hereditária.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q111.2",
            "text": "Na paciente com suspeita de Esferocitose Hereditária da questão anterior, que exame seria necessário para a elucidação diagnóstica?",
            "options": [
                "Eletroforese de hemoglobinas",
                "Dosagem de G6PD",
                "Teste de fragilidade osmótica",
                "Biópsia de medula óssea"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O teste clássico para confirmar o diagnóstico de Esferocitose Hereditária é o teste de fragilidade osmótica. Os esferócitos, por terem menor área de superfície, são mais suscetíveis à lise em soluções hipotônicas.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q111.3",
            "text": "Na paciente com Esferocitose Hereditária, qual a provável composição dos cálculos biliares encontrados?",
            "options": [
                "Colesterol",
                "Mistos",
                "Bilirrubinato de cálcio",
                "Oxalato de cálcio"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A hemólise crônica leva a um aumento constante da bilirrubina indireta. O excesso de bilirrubina na bile precipita, formando cálculos pigmentares, compostos principalmente de bilirrubinato de cálcio.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q111.4",
            "text": "Qual seria o tratamento curativo para a Esferocitose Hereditária grave?",
            "options": [
                "Transfusões de sangue regulares",
                "Suplementação com ácido fólico",
                "Esplenectomia",
                "Transplante de medula óssea"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Como a destruição dos esferócitos ocorre predominantemente no baço, a esplenectomia (remoção cirúrgica do baço) é o tratamento curativo para a hemólise na esferocitose, indicada nos casos moderados a graves.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q167",
            "text": "Sobre o mieloma múltiplo (MM), seus sintomas e diagnósticos diferenciais, assinale V ou F: (1) Na GMSI, o pico monoclonal é acima de 3g. (2) A hipercalcemia é a principal causa de injúria renal aguda em pacientes com MM. (3) O MM é considerado ativo com pico monoclonal ≥ 3g e ≥ 10% de plasmócitos na medula.",
            "options": ["VFV", "FVF", "FFV", "FFF"],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. (F) Na GMSI, o pico é < 3g. (V) A hipercalcemia, juntamente com a nefropatia por cilindros de cadeia leve, é uma causa importante de insuficiência renal no MM. (F) Para ser considerado ativo, além desses achados, o paciente precisa ter um evento definidor de mieloma (CRAB).",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q168",
            "text": "Mulher de 50 anos com cansaço. Hemograma: Hb 7g/dL, VCM 106fL. A suspeita é de anemia hiperproliferativa (hemolítica). Qual achado laboratorial confirma isso?",
            "options": [
                "Reticulócitos aumentados, aumento de LDH e de haptoglobina",
                "Aumento de haptoglobina, aumento de bilirrubina indireta e reticulocitose",
                "Policromatofilia, queda de haptoglobina e aumento de LDH",
                "LDH aumentado, bilirrubina direta aumentada e queda de haptoglobina"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A anemia hemolítica é caracterizada pela destruição de hemácias, o que leva ao aumento de LDH (liberado das hemácias) e ao consumo de haptoglobina (que se liga à hemoglobina livre). A medula óssea responde aumentando a produção de reticulócitos, que aparecem como policromatofilia no esfregaço.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q169",
            "text": "Criança de 4 anos com anemia falciforme (HbSS) apresenta palidez importante, fadiga e queda de 4g/dL da hemoglobina basal. Reticulócitos estão baixos. Qual o diagnóstico mais provável?",
            "options": [
                "Crise de sequestro esplênico",
                "Crise hemolítica",
                "Crise aplásica",
                "Síndrome torácica aguda"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A crise aplásica na doença falciforme é caracterizada por uma parada súbita na produção de glóbulos vermelhos pela medula óssea, resultando em uma queda rápida da hemoglobina e reticulocitopenia. A causa mais comum é a infecção pelo Parvovírus B19.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q170",
            "text": "Paciente de 68 anos com dor lombar, fadiga, anemia (Hb 8,0), insuficiência renal (Cr 2,5) e hipercalcemia (Ca 12,5). Biópsia renal evidenciou cilindros eosinofílicos. O achado mais provável no sangue periférico é:",
            "options": [
                "Agregados lineares de células vermelhas (Roleaux)",
                "Reticulócitos aumentados",
                "Policromatofilia com microesferócitos",
                "Atipia linfocitária"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O quadro clínico é clássico de Mieloma Múltiplo. A alta concentração de imunoglobulinas monoclonais no plasma diminui a repulsão entre as hemácias, fazendo com que elas se empilhem, formando o fenômeno de Roleaux, um achado característico no esfregaço de sangue periférico.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q171",
            "text": "Adolescente com icterícia após infecção viral. Laboratório com hiperbilirrubinemia indireta, anemia, reticulocitose e esferócitos no sangue periférico. Qual o diagnóstico mais provável e o melhor exame para confirmar?",
            "options": [
                "Deficiência de G6PD e Hemograma completo",
                "Anemia megaloblástica e Dosagem de vitamina B12",
                "Mieloma múltiplo e aspirado de medula óssea",
                "Esferocitose hereditária e Teste de Fragilidade Osmótica"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro de hemólise crônica com esferócitos, muitas vezes descompensado por uma infecção viral, é típico da Esferocitose Hereditária. O Teste de Fragilidade Osmótica é o exame clássico para confirmar o diagnóstico.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q172",
            "text": "Assinale a opção correta sobre hemólise:",
            "options": [
                "Policromatofilia não é comum na grande parte das anemias hemolíticas",
                "A deficiência de G6PD pode gerar icterícia secundária ao aumento de bilirrubina direta",
                "O marcador mais sensível de hemólise é a haptoglobina",
                "São indicativos de hemólise: aumento de LDH, aumento de bilirrubina indireta e aumento de haptoglobina"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A haptoglobina liga-se à hemoglobina livre liberada durante a hemólise e é removida da circulação. Portanto, a sua queda (níveis baixos ou indetectáveis) é o marcador mais sensível de hemólise, especialmente a intravascular. A opção D está errada porque a haptoglobina diminui, não aumenta.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q174",
            "text": "Mulher jovem com trombocitopenia e insuficiência renal aguda. As hipóteses são Síndrome Hemolítico-Urêmica (SHU) e Púrpura Trombocitopênica Trombótica (PTT). O exame que auxilia na diferenciação e diagnóstico de PTT é:",
            "options": [
                "Níveis de atividade da ADAMTS13",
                "Dosagem de TAP/PTT",
                "Esfregaço do sangue periférico com esquizócitos",
                "Dosagem de fibrinogênio"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A Púrpura Trombocitopênica Trombótica (PTT) é causada por uma deficiência grave da enzima ADAMTS13. A dosagem da atividade desta enzima é o exame padrão-ouro para confirmar o diagnóstico de PTT e diferenciá-la de outras microangiopatias trombóticas, como a SHU.",
            "tag": "hemostasia"
        },
        {
            "id": "PR2-Hemato-Q175",
            "text": "Homem de 50 anos com dor lombar, anemia (Hb 9,2), insuficiência renal (Cr 2,5) e fraturas em L2 e L3. O diagnóstico mais provável e os exames prudentes para investigação são, respectivamente:",
            "options": [
                "Mieloma múltiplo; proteinúria de Bence-Jones e cintilografia óssea",
                "Anemia de doença crônica; perfil de ferro",
                "Anemia ferropriva; perfil de ferro e endoscopia",
                "Mieloma múltiplo; eletroforese de proteínas séricas e urinárias e avaliação da medula óssea"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro de dor óssea com fraturas patológicas, anemia e insuficiência renal em um homem de 50 anos é altamente sugestivo de Mieloma Múltiplo. A investigação diagnóstica fundamental inclui a eletroforese de proteínas (para detectar o pico monoclonal) e o mielograma/biópsia de medula óssea (para quantificar os plasmócitos).",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q176",
            "text": "Qual das seguintes correlações entre informações clínicas/laboratoriais e diagnóstico está correta?",
            "options": [
                "Mieloma múltiplo ativo: pico monoclonal 2,5g, 5% plasmócitos, cálcio normal",
                "Mieloma múltiplo assintomático: pico monoclonal 3,5g, ausência de lesões líticas, cálcio elevado",
                "GMSI: pico monoclonal 3g, 11% plasmócitos na medula, osteopenia",
                "Gamopatia monoclonal de significado indeterminado (GMSI): pico monoclonal 2,5g, 7% plasmócitos, sem lesões ósseas ou CRAB"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Gamopatia Monoclonal de Significado Indeterminado (GMSI) é definida pela presença de uma proteína monoclonal sérica < 3 g/dL, plasmócitos clonais na medula óssea < 10%, e ausência de qualquer sinal de mieloma ativo (sem critérios CRAB). A opção D se encaixa perfeitamente nesta definição.",
            "tag": "mieloma múltiplo"
        },
        {
            "id": "PR2-Hemato-Q178",
            "text": "Homem de 21 anos, negro, tratado com nitrofurantoína para disúria, evolui com astenia, dor abdominal e urina escura. Exame: icterícia, Hb 5,6 g/dL, 'bite cells' na hematoscopia. A hipótese diagnóstica mais provável é:",
            "options": [
                "Anemia falciforme",
                "Doença de Wilson",
                "Deficiência de Glicose-6-Fosfato Desidrogenase (G6PD)",
                "Púrpura trombocitopênica trombótica"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro de hemólise aguda intravascular (urina escura - hemoglobinúria) em um homem negro, desencadeada pelo uso de uma droga oxidante (nitrofurantoína), e a presença de 'bite cells' (hemácias com uma 'mordida') no esfregaço são características clássicas da crise hemolítica por deficiência de G6PD.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q183",
            "text": "Mulher de 30 anos com febre, dores ósseas, pancitopenia e sangramento gengival. Diagnóstico de Leucemia Mieloide Aguda. A evolução com Coagulação Intravascular Disseminada (CIVD) é mais provável em qual subtipo?",
            "options": [
                "Mieloblástica (M1/M2)",
                "Monocítica (M5)",
                "Eritroleucemia (M6)",
                "Promielocítica (M3)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Leucemia Promielocítica Aguda (LMA M3) é notoriamente associada a um alto risco de Coagulação Intravascular Disseminada (CIVD) no momento do diagnóstico, devido à liberação de grânulos pró-coagulantes pelos promielócitos malignos.",
            "tag": "leucemias agudas"
        },
        {
            "id": "PR2-Hemato-Q184.1",
            "text": "Paciente de 62 anos com vitiligo apresenta Hb 7,8, VCM 120, RDW 24, Leucócitos 4.200, Plaquetas 245.000, Reticulócitos 0,9%. Qual o diagnóstico provável?",
            "options": [
                "Anemia aplásica",
                "Anemia ferropriva",
                "Anemia perniciosa (deficiência de B12)",
                "Talassemia major"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro de anemia macrocítica (VCM 120) e hipoproliferativa (reticulócitos baixos), associado a uma doença autoimune (vitiligo), é altamente sugestivo de Anemia Perniciosa, a principal causa de deficiência de Vitamina B12 em adultos.",
            "tag": "anemias hipoproliferativas"
        },
        {
            "id": "PR2-Hemato-Q184.2",
            "text": "No caso do paciente da questão anterior, qual a causa mais provável da anemia?",
            "options": [
                "Deficiência de ferro",
                "Deficiência de folato",
                "Deficiência de vitamina B12 por mecanismo autoimune",
                "Hemólise crônica"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Anemia Perniciosa é uma doença autoimune na qual o corpo produz anticorpos contra as células parietais do estômago e/ou contra o fator intrínseco, levando à gastrite atrófica e à má absorção de vitamina B12.",
            "tag": "anemias hipoproliferativas"
        },
        {
            "id": "PR2-Hemato-Q184.3",
            "text": "Qual o mecanismo fisiopatológico da anemia no paciente da questão 184?",
            "options": [
                "Destruição de hemácias no baço por defeito de membrana",
                "Defeito na síntese de DNA levando à maturação ineficaz e destruição intramedular dos precursores",
                "Inibição da produção de eritropoetina pelos rins",
                "Produção de anticorpos que destroem as hemácias circulantes"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A deficiência de vitamina B12 (ou folato) prejudica a síntese de DNA. Isso causa uma assincronia na maturação entre o núcleo (imaturo) e o citoplasma (maduro) dos precursores eritroides (megaloblastos), levando à sua destruição dentro da própria medula óssea (eritropoese ineficaz).",
            "tag": "anemias hipoproliferativas"
        },
        {
            "id": "PR2-Hemato-Q184.4",
            "text": "Quais exames devem ser solicitados para confirmar o diagnóstico do paciente da questão 184?",
            "options": [
                "Dosagem de ferro e ferritina",
                "Eletroforese de hemoglobinas",
                "Teste de Coombs direto e indireto",
                "Dosagem de vitamina B12, ácido metilmalônico e anticorpos anti-fator intrínseco"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Para confirmar a deficiência de B12, solicita-se sua dosagem sérica. O ácido metilmalônico é um metabólito que se acumula na deficiência de B12 e é mais sensível. Os anticorpos anti-fator intrínseco são específicos para a Anemia Perniciosa.",
            "tag": "anemias hipoproliferativas"
        },
        {
            "id": "PR2-Hemato-Q184.5",
            "text": "Qual o tratamento a ser instituído e como deve ser feito para o paciente da questão 184?",
            "options": [
                "Reposição de ferro oral por 6 meses",
                "Reposição de ácido fólico oral contínuo",
                "Reposição de vitamina B12 intramuscular por toda a vida",
                "Transfusões de sangue mensais"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Como a causa da deficiência de B12 na anemia perniciosa é a má absorção, a reposição deve ser parenteral (intramuscular). O tratamento consiste em uma fase de ataque (semanal) seguida de uma fase de manutenção (mensal) por toda a vida.",
            "tag": "anemias hipoproliferativas"
        },
        {
            "id": "PR2-Hemato-Q185",
            "text": "Sobre os linfomas, marque a alternativa FALSA.",
            "options": [
                "A célula de Reed-Sternberg é característica do linfoma de Hodgkin.",
                "Febre, sudorese noturna e emagrecimento são considerados sintomas B.",
                "A biópsia excisional de linfonodo é o padrão-ouro para o diagnóstico.",
                "O hemograma de um paciente portador de linfoma está frequentemente alterado, com presença de células blásticas."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa falsa é a D. O linfoma é uma doença primariamente dos gânglios linfáticos. Embora possa infiltrar a medula óssea, o hemograma é frequentemente normal no momento do diagnóstico. A presença de blastos no sangue periférico é característica das leucemias, não dos linfomas.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q187",
            "text": "Homem de 42 anos com crise aguda de gota e esplenomegalia. Hemograma: 54.000 leucócitos, Ht 39%, plaquetas 450.000. Suspeita de Leucemia Mieloide Crônica. Qual achado é esperado no hemograma?",
            "options": [
                "Aumento de linfócitos maduros.",
                "Leucocitose com hiato leucêmico.",
                "Presença de toda a família mieloide em escalonamento maturativo.",
                "Eosinofilia e basofilia sem escalonamento."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A LMC é caracterizada pela proliferação de toda a série granulocítica. A hematoscopia tipicamente mostra leucocitose com a presença de todas as fases de maturação (mieloblastos a segmentados), além de basofilia e eosinofilia.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q188",
            "text": "A Leucemia Mieloide Crônica (LMC) avançou intensamente do ponto de vista terapêutico. Estes progressos vieram de:",
            "options": [
                "Novos agentes quimioterápicos.",
                "Imunoterapia específica.",
                "Terapia-alvo com inibidores da tirosina quinase.",
                "Uso de antivirais específicos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da LMC foi revolucionado pelos inibidores da tirosina quinase (como o imatinibe), que bloqueiam especificamente a proteína BCR-ABL, produto do Cromossomo Filadélfia e causa da doença.",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q189",
            "text": "Paciente de 66 anos com 34.000 leucócitos (84% linfócitos). Imunofenotipagem: CD5+ e CD23+. Diagnóstico de Leucemia Linfoide Crônica (LLC). Podemos afirmar:",
            "options": [
                "Evolui para linfoma agressivo em 90% dos casos.",
                "Geralmente tem evolução indolente e não requer tratamento inicial.",
                "Apresenta-se geralmente com grandes gânglios e esplenomegalia.",
                "Leucometria de 30.000 já necessita intervenção terapêutica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A LLC é uma doença de curso indolente. A maioria dos pacientes é diagnosticada em estágios iniciais e assintomáticos, não necessitando de tratamento imediato, apenas de acompanhamento ('watch and wait').",
            "tag": "leucemias crônicas"
        },
        {
            "id": "PR2-Hemato-Q190",
            "text": "Jovem de 22 anos com febre de origem indeterminada. TC de tórax mostra gânglios no mediastino. Biópsia: Linfoma de Hodgkin. Recaída precoce ao ABVD. Imunofenotipagem revela CD20 positivo. O que isso significa?",
            "options": [
                "Deveriam ter completado os 6 ciclos.",
                "Provavelmente é Linfoma de Hodgkin com predomínio linfocitário, não o clássico.",
                "É um Linfoma de Hodgkin agressivo, indicando transplante.",
                "A célula de Reed-Sternberg confirma o diagnóstico, ignorando a imunohistoquímica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. As células de Reed-Sternberg do Linfoma de Hodgkin Clássico são tipicamente CD20 negativas. A positividade para CD20 sugere o subtipo 'Linfoma de Hodgkin com predomínio linfocitário nodular', que tem um comportamento e tratamento distintos.",
            "tag": "linfomas"
        },
        {
            "id": "PR2-Hemato-Q191",
            "text": "Jovem de 15 anos, afrodescendente, com febre e dor torácica. RX com infiltrado pulmonar. Hemograma: Hb 7,2, LDH 650, BI 2,8, reticulócitos 7%, Coombs direto negativo. Eletroforese com 95% de HbS. Hematoscopia com hemácias afoiçadas. Qual o diagnóstico?",
            "options": [
                "Beta talassemia major",
                "Anemia falciforme e crise hemolítica/torácica",
                "Anemia microangiopática",
                "Deficiência de G6PD e crise hemolítica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A eletroforese com 95% de HbS confirma o diagnóstico de Anemia Falciforme homozigota (SS). O quadro pulmonar agudo é compatível com Síndrome Torácica Aguda, e os exames laboratoriais confirmam a hemólise crônica.",
            "tag": "anemias hemolíticas"
        },
        {
            "id": "PR2-Hemato-Q192",
            "text": "Qual correlação clínica/laboratorial para gamopatias monoclonais está correta?",
            "options": [
                "Mieloma Múltiplo Ativo: pico monoclonal 2,5g, 5% plasmócitos, cálcio normal.",
                "Mieloma Múltiplo Assintomático: pico monoclonal 3,5g, sem lesões líticas, cálcio elevado.",
                "GMSI: pico monoclonal 3g, 11% plasmócitos, osteopenia.",
                "GMSI: pico monoclonal 2,5g, 7% plasmócitos, sem lesões ósseas ou critérios CRAB."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Gamopatia Monoclonal de Significado Indeterminado (GMSI) é definida por: proteína M < 3 g/dL, plasmócitos na medula < 10%, e ausência de critérios CRAB. A opção D é a única que se encaixa perfeitamente nesta definição.",
            "tag": "mieloma múltiplo"
        }
    ]
  },{
    id: "preset-m7-pr2-SCAD",
    name: "Estácio - M7 - PR2 - Pediatria",
    questions: [
        {
            "id": "PR2-SCA-Q1",
            "text": "Ao prepararmos a assistência ao parto de qualquer bebê, a primeira medida a ser adotada pelo líder da equipe que receberá o recém-nascido é:",
            "options": [
                "Coleta da anamnese gestacional e avaliação de dados e exames do pré-natal.",
                "Testar o funcionamento do balão autoinflável e laringoscópio.",
                "Diluir medicações em todas as salas de parto.",
                "Manter a sala a 25ºC e ligar a unidade de calor radiante."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A primeira e mais crucial etapa da preparação para a reanimação neonatal é a anamnese materna e gestacional. Conhecer os fatores de risco (prematuridade, diabetes gestacional, etc.) permite antecipar os problemas e preparar os materiais e a equipe de forma adequada.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q2",
            "text": "Após o nascimento, o pediatra avalia um recém-nascido a termo, vigoroso e com choro forte. Neste caso, quando a ligadura do cordão umbilical deverá ser realizada?",
            "options": [
                "Imediatamente, levando o bebê para a unidade de calor para ser aspirado.",
                "Oportunamente, após 1 a 3 minutos, levando o bebê à mesa para ser aspirado.",
                "Imediatamente, mantendo o bebê no colo materno.",
                "Oportunamente (após 1-3 min), deixando o bebê no colo materno para priorizar o vínculo."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Para um recém-nascido a termo e vigoroso, que não necessita de reanimação, a recomendação atual é o clampeamento oportuno do cordão (entre 1 e 3 minutos), pois isso melhora os estoques de ferro do bebê. O clampeamento deve ser feito com o bebê no colo da mãe, priorizando o contato pele a pele e o vínculo.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q3",
            "text": "Em qual situação o clampeamento imediato do cordão umbilical está indicado?",
            "options": [
                "Em todos os partos prematuros.",
                "Quando a mãe tem diabetes gestacional.",
                "Quando o recém-nascido necessita de manobras de reanimação.",
                "Em todos os partos cesáreos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Se o recém-nascido não está bem ao nascer (não respira, hipotônico, etc.) e precisa de ventilação ou outras manobras de reanimação, o cordão umbilical deve ser clampeado imediatamente para que o bebê seja levado à mesa de reanimação e o suporte ventilatório seja iniciado o mais rápido possível.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q4",
            "text": "Quais são as 3 perguntas que devem ser feitas antes de todos os nascimentos para avaliar a necessidade de reanimação?",
            "options": [
                "A gestação é a termo? O líquido amniótico é claro? O bebê tem bom tônus?",
                "Qual a idade gestacional? O líquido amniótico está claro e sem mecônio? O bebê está respirando ou chorando?",
                "Qual a idade gestacional? Quantos bebês? Há algum fator de risco adicional?",
                "O pré-natal foi feito corretamente? A mãe tem alguma doença? O parto é normal ou cesárea?"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. As três perguntas de ouro da anamnese direcionada pré-parto são: 1) Qual a idade gestacional esperada? (para saber se é prematuro); 2) Quantos bebês? (para preparar material para múltiplos); 3) Há algum fator de risco adicional? (como diabetes, pré-eclâmpsia, etc.). A questão do mecônio é avaliada após o rompimento da bolsa.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q5",
            "text": "Qual a sequência correta dos passos iniciais da reanimação neonatal ('minuto de ouro')?",
            "options": [
                "Aquecer, posicionar, aspirar se necessário, secar e estimular.",
                "Estimular, aspirar, secar, aquecer e posicionar.",
                "Posicionar, aquecer, estimular, secar e aspirar.",
                "Secar, aquecer, aspirar, posicionar e estimular."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Os passos iniciais, que devem ser realizados rapidamente, seguem a sequência: prover calor (fonte de calor radiante), posicionar a cabeça em leve extensão, aspirar as vias aéreas (boca e depois narinas) APENAS se houver obstrução por secreções, secar o corpo e remover os campos úmidos, e estimular (fricção suave no dorso).",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q6",
            "text": "Após os passos iniciais, o recém-nascido a termo permanece em apneia. Qual a próxima conduta?",
            "options": [
                "Iniciar massagem cardíaca.",
                "Administrar adrenalina.",
                "Iniciar ventilação com pressão positiva (VPP) com balão e máscara.",
                "Estimular novamente por mais 30 segundos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Se, após os passos iniciais, o bebê não respira ou tem respiração irregular (gasping) e/ou FC < 100 bpm, a medida mais importante e eficaz é iniciar a ventilação com pressão positiva (VPP) para expandir os pulmões.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q7",
            "text": "Durante a VPP, o tórax do recém-nascido não se eleva. Qual o mnemónico utilizado para corrigir a técnica?",
            "options": [
                "SAMPA",
                "MR. SOPA",
                "ABCDE",
                "AVDI"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O mnemónico MR. SOPA guia os passos para corrigir a ventilação ineficaz: M - Máscara (reajustar), R - Reposicionar a cabeça; S - Sucção (aspirar vias aéreas), O - Open mouth (abrir a boca); P - Pressão (aumentar a pressão); A - Alternativa (via aérea avançada, como intubação).",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q8",
            "text": "Após 30 segundos de VPP eficaz, a frequência cardíaca do recém-nascido é de 50 bpm. Qual a próxima conduta?",
            "options": [
                "Continuar a VPP por mais 30 segundos.",
                "Administrar adrenalina.",
                "Iniciar massagem cardíaca coordenada com a ventilação.",
                "Considerar intubação orotraqueal."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Se a frequência cardíaca permanece abaixo de 60 bpm apesar de 30 segundos de VPP eficaz (com tórax expandindo), está indicada a imediata associação da massagem cardíaca, mantendo a ventilação coordenada.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q9",
            "text": "Qual a relação entre compressões torácicas e ventilações durante a reanimação neonatal?",
            "options": [
                "15 compressões para 2 ventilações.",
                "30 compressões para 2 ventilações.",
                "3 compressões para 1 ventilação.",
                "5 compressões para 1 ventilação."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A relação recomendada é de 3 compressões para 1 ventilação, buscando realizar um ciclo de 90 compressões e 30 ventilações por minuto (120 eventos/minuto).",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q10",
            "text": "A frequência cardíaca do recém-nascido persiste abaixo de 60 bpm após 60 segundos de massagem cardíaca e VPP eficazes. Qual a próxima conduta?",
            "options": [
                "Aumentar a frequência das compressões.",
                "Administrar adrenalina.",
                "Considerar expansão volêmica.",
                "Parar a reanimação."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Se a FC não sobe para 60 bpm ou mais após um ciclo de VPP + massagem cardíaca, está indicada a administração de adrenalina, preferencialmente por via intravenosa (cateter umbilical).",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q11.1",
            "text": "Recém-nascido de 32 semanas, bolsa rota há 20 horas e mãe com febre. O bebê nasce flácido, pálido e apneico. Qual a principal hipótese para a depressão neonatal?",
            "options": [
                "Prematuridade",
                "Malformação cardíaca",
                "Infecção neonatal precoce (sepse)",
                "Asfixia perinatal"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A combinação de prematuridade, bolsa rota prolongada (>18h) e febre materna são os principais fatores de risco para a sepse neonatal precoce, que pode se manifestar ao nascimento com um quadro de depressão respiratória e hipotonia, semelhante à asfixia.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q11.2",
            "text": "No caso do recém-nascido prematuro da questão anterior, qual cuidado adicional é fundamental nos passos iniciais da reanimação?",
            "options": [
                "Utilizar VPP com ar comprimido.",
                "Envolver o bebê em saco plástico transparente e colocar touca.",
                "Aspirar vigorosamente o estômago.",
                "Administrar surfactante imediatamente."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Recém-nascidos prematuros, especialmente os com menos de 34 semanas, perdem calor muito rapidamente. Para prevenir a hipotermia, eles devem ser colocados, ainda molhados, dentro de um saco plástico transparente, com a cabeça coberta por uma touca, antes de serem levados à fonte de calor.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q12",
            "text": "Qual das seguintes afirmações sobre a icterícia neonatal é VERDADEIRA?",
            "options": [
                "A icterícia que surge nas primeiras 24 horas de vida é sempre fisiológica.",
                "A icterícia fisiológica costuma atingir níveis que necessitam de fototerapia.",
                "A principal causa de icterícia patológica nas primeiras 24h é a incompatibilidade ABO/Rh.",
                "A icterícia do leite materno surge na primeira semana e causa perda de peso."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A icterícia que se manifesta precocemente (nas primeiras 24-36 horas) é sempre considerada patológica e deve ser investigada. A principal causa é a hemólise por incompatibilidade sanguínea materno-fetal (ABO ou Rh).",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q13",
            "text": "Qual o principal mecanismo de ação da fototerapia no tratamento da icterícia neonatal?",
            "options": [
                "Destruir as hemácias para diminuir a produção de bilirrubina.",
                "Estimular o fígado a conjugar a bilirrubina.",
                "Transformar a bilirrubina indireta (lipossolúvel) em isómeros hidrossolúveis que podem ser excretados sem conjugação.",
                "Aumentar a motilidade intestinal para eliminar a bilirrubina."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A luz da fototerapia (principalmente na faixa azul) é absorvida pela bilirrubina na pele, causando sua fotoisomerização. Isso transforma a molécula de bilirrubina indireta em isómeros (como a lumirrubina) que são solúveis em água e podem ser eliminados pela bile e urina sem necessidade de conjugação hepática.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q14",
            "text": "Qual a principal complicação da hiperbilirrubinemia indireta grave no recém-nascido?",
            "options": [
                "Insuficiência hepática",
                "Anemia hemolítica",
                "Encefalopatia bilirrubínica (Kernicterus)",
                "Insuficiência renal"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Níveis muito elevados de bilirrubina indireta não ligada à albumina podem atravessar a barreira hematoencefálica e impregnar os núcleos da base do cérebro, causando uma lesão neurológica grave e permanente conhecida como Kernicterus.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q15",
            "text": "Na avaliação do desenvolvimento de uma criança, o que se espera que ela faça aos 6 meses de idade no desenvolvimento motor grosso?",
            "options": [
                "Andar sem apoio.",
                "Sentar sem apoio.",
                "Rolar e ter bom controlo da cabeça.",
                "Engatinhar."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Aos 6 meses, o lactente já deve ter firmeza cervical completa, rolar nos dois sentidos (de prono para supino e vice-versa) e começar a se preparar para sentar, podendo sentar com apoio. Sentar sem apoio (B) é esperado por volta dos 7-8 meses.",
            "tag": "Desenvolvimento"
        },
        {
            "id": "PR2-SCA-Q16",
            "text": "Quando se espera o surgimento do sorriso social em um lactente?",
            "options": [
                "Ao nascer.",
                "Com 1 mês de vida.",
                "Com 2 a 3 meses de vida.",
                "Com 6 meses de vida."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O sorriso social, que é uma resposta intencional à face humana, é um marco importante do desenvolvimento social e afetivo que surge entre o segundo e o terceiro mês de vida.",
            "tag": "Desenvolvimento"
        },
        {
            "id": "PR2-SCA-Q17",
            "text": "O que é o movimento de pinça e quando ele se desenvolve?",
            "options": [
                "É a capacidade de agarrar objetos com a mão inteira, que surge aos 4 meses.",
                "É a capacidade de transferir objetos de uma mão para a outra, que surge aos 6 meses.",
                "É a capacidade de pegar pequenos objetos usando o polegar e o indicador, que se desenvolve por volta dos 9 a 10 meses.",
                "É a capacidade de rabiscar, que surge aos 18 meses."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O movimento de pinça fina (ou superior) é um marco do desenvolvimento motor fino que indica uma maior destreza e coordenação. Surge por volta dos 9-10 meses e permite à criança manipular pequenos objetos com precisão.",
            "tag": "Desenvolvimento"
        },
        {
            "id": "PR2-SCA-Q18",
            "text": "Qual das seguintes vacinas é administrada ao nascer?",
            "options": [
                "Pentavalente",
                "Tríplice viral",
                "BCG e Hepatite B",
                "Poliomielite oral (VOP)"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. De acordo com o Programa Nacional de Imunizações (PNI) do Brasil, as duas vacinas que devem ser administradas na maternidade, logo após o nascimento, são a BCG (dose única) e a primeira dose da vacina contra Hepatite B.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q19.1",
            "text": "Lactente de 2 meses apresenta tosse seca paroxística, que evolui com cianose e um guincho inspiratório. Qual a principal hipótese diagnóstica?",
            "options": [
                "Bronquiolite Viral Aguda",
                "Coqueluche (tosse convulsa)",
                "Asma do lactente",
                "Refluxo gastroesofágico"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A coqueluche, causada pela bactéria Bordetella pertussis, é caracterizada por uma fase catarral seguida de uma fase paroxística com crises de tosse intensa e incontrolável, que terminam com um guincho inspiratório característico. Em lactentes jovens, a apneia e a cianose são comuns.",
            "tag": "Doenças Infecciosas"
        },
        {
            "id": "PR2-SCA-Q19.2",
            "text": "Qual o tratamento de escolha para a coqueluche?",
            "options": [
                "Apenas sintomáticos.",
                "Corticoides inalatórios.",
                "Antibióticos macrolídeos (ex: Azitromicina).",
                "Antivirais."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da coqueluche é feito com macrolídeos (azitromicina ou claritromicina) para erradicar a bactéria da nasofaringe, diminuindo a transmissibilidade e, se iniciado na fase catarral, podendo encurtar a duração dos sintomas.",
            "tag": "Doenças Infecciosas"
        },
        {
            "id": "PR2-SCA-Q20.1",
            "text": "Lactente de 6 meses com febre, coriza, tosse e sibilância. Qual o diagnóstico mais provável nesta faixa etária?",
            "options": [
                "Pneumonia bacteriana",
                "Asma",
                "Bronquiolite Viral Aguda (BVA)",
                "Laringite"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A BVA é a principal causa de sibilância no primeiro episódio em lactentes com menos de 2 anos. É uma infecção viral (principalmente pelo Vírus Sincicial Respiratório - VSR) que causa inflamação e obstrução dos bronquíolos.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q20.2",
            "text": "Qual o principal agente etiológico da Bronquiolite Viral Aguda?",
            "options": [
                "Rinovírus",
                "Influenza",
                "Adenovírus",
                "Vírus Sincicial Respiratório (VSR)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O Vírus Sincicial Respiratório é responsável pela maioria dos casos de BVA, especialmente os mais graves que requerem hospitalização.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q21",
            "text": "Qual a principal causa de gastroenterite aguda (diarreia e vómitos) em crianças com menos de 5 anos?",
            "options": [
                "Salmonella",
                "Rotavírus",
                "Escherichia coli",
                "Giardia lamblia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Rotavírus é a principal causa de diarreia grave e desidratação em lactentes e crianças pequenas em todo o mundo. A vacinação reduziu drasticamente a sua incidência.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q22",
            "text": "Na avaliação de uma criança com diarreia aguda, qual o principal objetivo do exame físico?",
            "options": [
                "Determinar o agente etiológico.",
                "Avaliar o estado de hidratação.",
                "Verificar se há necessidade de antibiótico.",
                "Identificar a fonte da infecção."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A complicação mais comum e grave da gastroenterite é a desidratação. Portanto, o principal objetivo da avaliação clínica é classificar o estado de hidratação da criança (sem desidratação, desidratação leve/moderada, ou desidratação grave) para definir a conduta terapêutica.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q23",
            "text": "Qual o plano terapêutico para uma criança com diarreia e desidratação leve a moderada, que consegue beber?",
            "options": [
                "Plano A: Hidratação oral em casa com aumento da oferta de líquidos.",
                "Plano B: Terapia de reidratação oral (TRO) supervisionada na unidade de saúde.",
                "Plano C: Reidratação intravenosa rápida no hospital.",
                "Antieméticos e antidiarreicos."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Plano B do Ministério da Saúde é indicado para crianças com algum grau de desidratação. Consiste na administração supervisionada de soro de reidratação oral (50 a 100 mL/kg) em um período de 4 a 6 horas na unidade de saúde.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q24",
            "text": "Criança de 1 ano com febre alta há 5 dias, conjuntivite não purulenta, exantema polimorfo, alterações de boca (língua em framboesa, fissura labial) e edema de mãos e pés. Qual o diagnóstico?",
            "options": [
                "Escarlatina",
                "Sarampo",
                "Doença de Kawasaki",
                "Síndrome de Stevens-Johnson"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro descrito preenche os critérios clássicos para a Doença de Kawasaki, uma vasculite sistémica aguda da infância. O diagnóstico é clínico, baseado na presença de febre por pelo menos 5 dias mais 4 dos 5 critérios principais (conjuntivite, alterações orais, exantema, alterações de extremidades e linfonodomegalia cervical).",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q25",
            "text": "Qual a principal complicação da Doença de Kawasaki e por que o tratamento é urgente?",
            "options": [
                "Insuficiência renal.",
                "Meningite asséptica.",
                "Aneurismas de artérias coronárias.",
                "Artrite crônica."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A complicação mais temida da Doença de Kawasaki é a formação de aneurismas nas artérias coronárias, que pode levar a infarto do miocárdio e morte súbita. O tratamento com imunoglobulina intravenosa e aspirina, iniciado nos primeiros 10 dias de febre, reduz drasticamente o risco dessa complicação.",
            "tag": "Cardiologia"
        },
        {
            "id": "PR2-SCA-Q26",
            "text": "Qual das seguintes cardiopatias congênitas é cianótica?",
            "options": [
                "Comunicação Interventricular (CIV)",
                "Comunicação Interatrial (CIA)",
                "Persistência do Canal Arterial (PCA)",
                "Tetralogia de Fallot"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Tetralogia de Fallot é a cardiopatia congênita cianótica mais comum após o período neonatal. A sua fisiopatologia envolve uma obstrução na via de saída do ventrículo direito, que desvia o sangue não oxigenado para a circulação sistémica através de uma grande CIV, causando cianose.",
            "tag": "Cardiologia"
        },
        {
            "id": "PR2-SCA-Q27",
            "text": "Na Tetralogia de Fallot, o que é a 'crise de hipóxia' ou 'crise cianótica'?",
            "options": [
                "É um episódio de insuficiência cardíaca congestiva.",
                "É um espasmo da via de saída do ventrículo direito que piora a cianose, podendo levar a convulsões e óbito.",
                "É um episódio de febre reumática.",
                "É uma arritmia cardíaca."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A crise de hipóxia é uma emergência que ocorre em crianças com Tetralogia de Fallot. Um espasmo súbito do infundíbulo do ventrículo direito aumenta a obstrução ao fluxo pulmonar, desviando ainda mais sangue não oxigenado para a aorta, resultando em cianose intensa, taquipneia e irritabilidade.",
            "tag": "Cardiologia"
        },
        {
            "id": "PR2-SCA-Q28",
            "text": "Qual a posição que a mãe instintivamente coloca a criança durante uma crise de hipóxia na Tetralogia de Fallot?",
            "options": [
                "Deitada de costas.",
                "Posição genupeitoral (joelhos dobrados contra o peito).",
                "Sentada com as pernas esticadas.",
                "Deitada de lado."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A posição genupeitoral ou de cócoras (squatting) aumenta a resistência vascular sistémica, o que diminui o shunt direita-esquerda e aumenta o fluxo sanguíneo para os pulmões, melhorando a oxigenação e aliviando a crise.",
            "tag": "Cardiologia"
        },
        {
            "id": "PR2-SCA-Q29",
            "text": "Qual é a principal causa da Anemia Ferropriva na infância?",
            "options": [
                "Perda sanguínea crônica.",
                "Dieta inadequada, com baixo consumo de ferro e/ou consumo excessivo de leite de vaca.",
                "Doenças inflamatórias crônicas.",
                "Hemólise."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A anemia carencial mais comum na infância é a ferropriva. Ela ocorre principalmente devido a uma ingestão insuficiente de ferro (especialmente após os 6 meses, quando as reservas de ferro do nascimento se esgotam) e ao consumo excessivo de leite de vaca, que é pobre em ferro e pode causar micro-sangramentos intestinais.",
            "tag": "Hematologia"
        },
        {
            "id": "PR2-SCA-Q30",
            "text": "Lactente de 18 meses com palidez, irritabilidade e baixo ganho de peso. A mãe refere que ele toma 1 litro de leite de vaca por dia e recusa outros alimentos. Qual o achado esperado no hemograma?",
            "options": [
                "Anemia macrocítica (VCM > 100).",
                "Anemia normocítica e normocrômica.",
                "Anemia microcítica (VCM < 80) e hipocrômica (HCM baixo).",
                "Pancitopenia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A anemia ferropriva é classicamente uma anemia microcítica e hipocrômica. A deficiência de ferro prejudica a síntese da hemoglobina, resultando em hemácias menores e com menos cor.",
            "tag": "Hematologia"
        },
        {
            "id": "PR2-SCA-Q31",
            "text": "Qual o tratamento para a anemia ferropriva?",
            "options": [
                "Apenas orientação dietética.",
                "Transfusão de sangue.",
                "Suplementação com sulfato ferroso oral.",
                "Reposição de ácido fólico."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento consiste na reposição dos estoques de ferro com sais de ferro por via oral (ex: sulfato ferroso), mantido por vários meses, além da orientação dietética para aumentar a ingestão de alimentos ricos em ferro.",
            "tag": "Hematologia"
        },
        {
            "id": "PR2-SCA-Q32",
            "text": "Qual o primeiro parâmetro laboratorial que se altera após o início do tratamento com ferro na anemia ferropriva?",
            "options": [
                "Aumento da hemoglobina.",
                "Normalização do VCM.",
                "Aumento da ferritina.",
                "Pico de reticulócitos (crise reticulocitária)."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Com a oferta de ferro, a medula óssea aumenta drasticamente a produção de novas hemácias. Isso é evidenciado por um pico no número de reticulócitos (hemácias jovens) no sangue periférico, que ocorre entre o 7º e o 10º dia de tratamento.",
            "tag": "Hematologia"
        },
        {
            "id": "PR2-SCA-Q33",
            "text": "O que é a Doença Celíaca?",
            "options": [
                "É uma alergia ao leite de vaca.",
                "É uma intolerância à lactose.",
                "É uma doença autoimune desencadeada pela ingestão de glúten em indivíduos geneticamente predispostos, causando atrofia das vilosidades do intestino delgado.",
                "É uma doença inflamatória intestinal."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Doença Celíaca é uma enteropatia autoimune crônica. A ingestão de glúten (presente no trigo, cevada e centeio) leva a uma resposta imune que danifica a mucosa do intestino delgado, resultando em má absorção de nutrientes.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q34",
            "text": "Qual o padrão-ouro para o diagnóstico da Doença Celíaca?",
            "options": [
                "Apenas a dosagem de anticorpos (anti-transglutaminase IgA).",
                "Teste genético (HLA-DQ2/DQ8).",
                "Endoscopia digestiva alta com biópsia do duodeno.",
                "Teste de provocação com glúten."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Embora os marcadores sorológicos sejam importantes para a triagem, o diagnóstico definitivo da Doença Celíaca é confirmado pelo exame histopatológico de uma biópsia do duodeno, que mostra os achados característicos de atrofia vilositária, hiperplasia de criptas e aumento de linfócitos intraepiteliais.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q35.1",
            "text": "Criança de 7 anos com edema periorbitário, hipertensão arterial e urina 'cor de coca-cola' (hematúria), duas semanas após uma infecção de pele (impetigo). Qual o diagnóstico?",
            "options": [
                "Síndrome Nefrótica",
                "Infecção do Trato Urinário",
                "Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNDA)",
                "Refluxo vesicoureteral"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro descrito (síndrome nefrítica aguda) com edema, hipertensão e hematúria macroscópica, com história prévia de uma infecção de pele ou garganta por Streptococcus pyogenes, é a apresentação clássica da GNDA.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q35.2",
            "text": "Qual o achado laboratorial característico na GNDA Pós-Estreptocócica?",
            "options": [
                "Proteinúria maciça (> 50 mg/kg/dia).",
                "Hipoalbuminemia.",
                "Consumo do complemento sérico (C3 baixo).",
                "Elevação dos anticorpos anti-DNA."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A GNDA é uma doença mediada por imunocomplexos. A ativação da via clássica do sistema complemento por esses complexos leva ao consumo dos seus componentes, resultando em níveis séricos baixos de C3, que é um marcador importante da doença na fase aguda.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q36",
            "text": "O que caracteriza a Síndrome Nefrótica?",
            "options": [
                "Hipertensão, hematúria e oligúria.",
                "Proteinúria maciça, hipoalbuminemia, edema generalizado e hiperlipidemia.",
                "Febre, dor lombar e disúria.",
                "Leucocitúria, cilindros leucocitários e bacteriúria."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Síndrome Nefrótica é definida pela tétrade: proteinúria em faixa nefrótica (> 40-50 mg/kg/dia), hipoalbuminemia (< 2,5 g/dL), edema (anasarca) e hiperlipidemia/lipidúria. É a principal causa de edema generalizado na infância.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q37",
            "text": "Qual a causa mais comum de Síndrome Nefrótica em crianças?",
            "options": [
                "Glomeruloesclerose Segmentar e Focal (GESF)",
                "Nefropatia por IgA",
                "Doença de Lesões Mínimas",
                "Glomerulonefrite Membranoproliferativa"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Doença de Lesões Mínimas responde por cerca de 80-90% dos casos de síndrome nefrótica em crianças. Caracteriza-se por ser cortico-sensível na maioria dos casos e por não apresentar alterações significativas na microscopia óptica.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q38",
            "text": "Qual o tratamento de primeira linha para a Síndrome Nefrótica por Lesões Mínimas?",
            "options": [
                "Apenas restrição de sal.",
                "Diuréticos.",
                "Corticoterapia (prednisona) em altas doses.",
                "Imunossupressores como a ciclosporina."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A corticoterapia é o pilar do tratamento inicial. A maioria das crianças com Doença de Lesões Mínimas responde bem ao corticoide, com remissão completa da proteinúria.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q39",
            "text": "Criança de 4 anos com dor abdominal, púrpura palpável em membros inferiores e nádegas, artralgia e hematúria. Qual o diagnóstico?",
            "options": [
                "Púrpura Trombocitopênica Imunológica (PTI)",
                "Doença de Kawasaki",
                "Púrpura de Henoch-Schönlein (Vasculite por IgA)",
                "Lúpus Eritematoso Sistémico"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Púrpura de Henoch-Schönlein é a vasculite mais comum da infância. O diagnóstico é clínico, baseado na presença da púrpura palpável (principalmente em membros inferiores) associada a pelo menos um dos seguintes: dor abdominal, artrite/artralgia ou envolvimento renal (hematúria/proteinúria).",
            "tag": "Reumatologia"
        },
        {
            "id": "PR2-SCA-Q40",
            "text": "Qual a principal complicação a longo prazo da Púrpura de Henoch-Schönlein?",
            "options": [
                "Artrite deformante",
                "Doença cardíaca",
                "Invaginação intestinal",
                "Doença renal crônica (nefrite)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A nefrite por deposição de IgA nos glomérulos é a principal causa de morbidade a longo prazo na PHS, podendo evoluir para insuficiência renal crônica. Por isso, a análise de urina é mandatória no acompanhamento destes pacientes.",
            "tag": "Reumatologia"
        },
        {
            "id": "PR2-SCA-Q41",
            "text": "O que é a Doença da Membrana Hialina?",
            "options": [
                "É uma infecção pulmonar do recém-nascido.",
                "É uma malformação congénita do pulmão.",
                "É a Síndrome do Desconforto Respiratório do recém-nascido, causada pela deficiência de surfactante pulmonar em prematuros.",
                "É a aspiração de mecônio."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Doença da Membrana Hialina é a principal causa de desconforto respiratório em recém-nascidos prematuros. A deficiência de surfactante leva ao colapso alveolar, diminuição da complacência pulmonar e insuficiência respiratória.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q42",
            "text": "Qual a principal medida pré-natal para prevenir a Doença da Membrana Hialina em um parto prematuro iminente?",
            "options": [
                "Administração de antibióticos à mãe.",
                "Administração de corticoides antenatais (ex: betametasona) à mãe.",
                "Realizar o parto por cesariana.",
                "Uso de tocolíticos para inibir o trabalho de parto."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A administração de um ciclo de corticoides à gestante com risco de parto prematuro (entre 24 e 34 semanas) é a intervenção mais eficaz para acelerar a maturação pulmonar fetal e a produção de surfactante, reduzindo significativamente a incidência e a gravidade da Doença da Membrana Hialina.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q43.1",
            "text": "Recém-nascido com 41 semanas, líquido amniótico meconial espesso, nasce hipotônico e sem movimentos respiratórios. Qual a conduta imediata na sala de parto?",
            "options": [
                "Estimular vigorosamente.",
                "Levar ao berço aquecido e realizar laringoscopia direta para aspiração traqueal sob visualização.",
                "Iniciar VPP com balão e máscara.",
                "Realizar os passos iniciais e aguardar."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. De acordo com as diretrizes de reanimação, um recém-nascido com líquido meconial que nasce não vigoroso (hipotônico e/ou sem respiração) deve ser submetido à laringoscopia direta para aspiração do mecônio da traqueia antes de se iniciar a ventilação, para prevenir a Síndrome de Aspiração Meconial grave.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q43.2",
            "text": "Qual a complicação pulmonar mais temida na Síndrome de Aspiração Meconial?",
            "options": [
                "Atelectasia",
                "Pneumotórax",
                "Hipertensão Pulmonar Persistente do Recém-nascido (HPPRN)",
                "Pneumonia bacteriana secundária"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O mecônio aspirado causa obstrução das vias aéreas e uma pneumonite química intensa, que leva à vasoconstrição da artéria pulmonar e à manutenção de um padrão de circulação fetal (shunt direita-esquerda), resultando em hipoxemia grave e refratária.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q44",
            "text": "A suplementação de qual vitamina é recomendada para todos os recém-nascidos na primeira hora de vida para prevenir a Doença Hemorrágica do RN?",
            "options": [
                "Vitamina D",
                "Vitamina A",
                "Vitamina K",
                "Vitamina C"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Todos os recém-nascidos devem receber uma dose de Vitamina K intramuscular ao nascer para prevenir a Doença Hemorrágica do Recém-nascido, pois eles nascem com baixas reservas e a vitamina K é essencial para a produção dos fatores de coagulação II, VII, IX e X.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q45.1",
            "text": "Criança de 9 meses com febre, irritabilidade e recusa alimentar. O exame de urina mostra nitrito positivo e leucocitúria. Qual o diagnóstico?",
            "options": [
                "Gastroenterite",
                "Infecção do Trato Urinário (ITU)",
                "Otite Média Aguda",
                "Meningite"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Em lactentes, os sintomas de ITU são frequentemente inespecíficos, como febre sem foco aparente e irritabilidade. Um exame de urina com sinais de infecção (nitrito, leucocitúria) confirma o diagnóstico.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q45.2",
            "text": "Em uma criança de 9 meses com ITU febril, qual exame de imagem deve ser realizado para investigar anomalias do trato urinário?",
            "options": [
                "Apenas Raio-X simples de abdómen.",
                "Ultrassonografia de rins e vias urinárias.",
                "Uretrocistografia miccional.",
                "Tomografia Computadorizada."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A ultrassonografia é o exame inicial recomendado em toda criança com a primeira ITU febril para avaliar a anatomia renal e do trato urinário, procurando por malformações, hidronefrose ou abscessos.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q46",
            "text": "O que é o Refluxo Vesicoureteral (RVU)?",
            "options": [
                "É o retorno da urina da uretra para a bexiga.",
                "É a dilatação da pelve renal.",
                "É o fluxo retrógrado da urina da bexiga para o ureter e/ou para o rim.",
                "É a obstrução da junção ureteropélvica."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O RVU é uma anomalia na junção ureterovesical que permite que a urina volte da bexiga para os ureteres durante a micção. É um fator de risco importante para pielonefrite e cicatrizes renais.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q47",
            "text": "Qual o exame padrão-ouro para o diagnóstico e graduação do Refluxo Vesicoureteral?",
            "options": [
                "Ultrassonografia",
                "Cintilografia renal com DMSA",
                "Uretrocistografia Miccional (UCM)",
                "Ressonância Magnética"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A UCM é o exame de escolha para diagnosticar o RVU. Consiste em encher a bexiga com contraste através de uma sonda e realizar radiografias durante o enchimento e a micção para visualizar se o contraste reflui para os ureteres.",
            "tag": "Nefrologia"
        },
        {
            "id": "PR2-SCA-Q48.1",
            "text": "Criança de 2 anos com febre e exantema maculopapular que iniciou na face e progrediu de forma descendente, confluente. Apresenta tosse, coriza, conjuntivite e manchas de Koplik na mucosa oral. Qual o diagnóstico?",
            "options": [
                "Rubéola",
                "Escarlatina",
                "Sarampo",
                "Eritema Infeccioso"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro descrito é a apresentação clássica do Sarampo. A pródromo com febre alta, tosse, coriza e conjuntivite (o 'triplo catarro'), seguido pelo aparecimento das manchas de Koplik (patognomônicas) e, por fim, pelo exantema craniocaudal e confluente, fecha o diagnóstico clínico.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q48.2",
            "text": "Qual a principal medida para prevenir o sarampo?",
            "options": [
                "Higiene das mãos.",
                "Isolamento respiratório dos casos.",
                "Vacinação com a vacina tríplice viral (sarampo, caxumba e rubéola).",
                "Uso de antibióticos profiláticos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O sarampo é uma doença altamente contagiosa, mas prevenível pela imunização. A vacina tríplice viral (SCR) é segura e eficaz, sendo a principal estratégia de saúde pública para o controle da doença.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q49",
            "text": "O que é a mancha de Koplik?",
            "options": [
                "É o exantema do sarampo.",
                "São petéquias no palato.",
                "São pequenas manchas branco-azuladas na mucosa jugal, opostas aos molares, que são patognomônicas do sarampo.",
                "É a 'língua em framboesa' da escarlatina."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. As manchas de Koplik são um enantema (erupção em mucosa) patognomônico do sarampo. Aparecem no período prodrômico, antes do exantema cutâneo, e ajudam a firmar o diagnóstico precocemente.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q50",
            "text": "Criança com febre alta por 3 dias que cessa abruptamente, seguida pelo aparecimento de um exantema maculopapular róseo no tronco, que se espalha para o pescoço e membros. A criança está em bom estado geral. Qual o diagnóstico?",
            "options": [
                "Sarampo",
                "Rubéola",
                "Eritema Infeccioso",
                "Exantema Súbito (Roséola Infantum)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A história de febre alta que desaparece em crise, seguida pelo surgimento de um exantema com a criança em ótimo estado geral, é a marca registada do Exantema Súbito, causado principalmente pelo Herpesvírus humano tipo 6.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q51",
            "text": "Criança com exantema facial eritematoso intenso ('face esbofeteada'), seguido por um exantema rendilhado no tronco e membros. Qual o diagnóstico?",
            "options": [
                "Sarampo",
                "Rubéola",
                "Eritema Infeccioso (Parvovírus B19)",
                "Escarlatina"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Eritema Infeccioso, ou 'quinta doença', causado pelo Parvovírus B19, tem uma apresentação bifásica característica: primeiro, o eritema malar intenso (face esbofeteada) e, dias depois, o exantema reticulado ou rendilhado no corpo.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q52",
            "text": "A infecção pelo Parvovírus B19 em um paciente com anemia hemolítica crônica (ex: anemia falciforme) pode causar qual complicação hematológica?",
            "options": [
                "Crise hemolítica",
                "Crise aplásica",
                "Leucocitose",
                "Trombocitose"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Parvovírus B19 tem tropismo pelos precursores eritroides na medula óssea. Em pacientes que já têm uma sobrevida das hemácias diminuída, a parada temporária na produção de glóbulos vermelhos causada pelo vírus leva a uma queda abrupta e grave da hemoglobina, caracterizando a crise aplásica.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q53",
            "text": "Criança com faringite, febre, e um exantema micropapular áspero ('em lixa'), que predomina nas áreas de dobras (sinal de Pastia) e palidez perioral (sinal de Filatov). Qual o diagnóstico?",
            "options": [
                "Sarampo",
                "Doença de Kawasaki",
                "Escarlatina",
                "Rubéola"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Escarlatina é causada por uma cepa do Streptococcus pyogenes produtora de toxina eritrogénica. O exantema difuso, puntiforme e áspero ao toque, mais intenso nas dobras (sinal de Pastia) e a palidez ao redor da boca são os achados cutâneos característicos, associados à faringite e à 'língua em framboesa'.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q54",
            "text": "O que é a Doença Mão-Pé-Boca?",
            "options": [
                "É uma infecção bacteriana de pele.",
                "É uma doença viral (geralmente Coxsackie A16) caracterizada por febre e uma erupção vesicular na boca, mãos e pés.",
                "É uma forma de alergia alimentar.",
                "É uma doença reumática."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Doença Mão-Pé-Boca é uma infecção viral muito comum em crianças pequenas. Causa febre, lesões ulceradas dolorosas na boca (herpangina) e um exantema papulovesicular característico nas palmas das mãos e plantas dos pés.",
            "tag": "Doenças Exantemáticas"
        },
        {
            "id": "PR2-SCA-Q55.1",
            "text": "Qual o tratamento farmacológico para a Crise Aguda de Asma moderada na emergência?",
            "options": [
                "Apenas oxigénio.",
                "Salbutamol (beta-2 agonista de curta ação) inalatório em doses repetidas e corticoide sistémico.",
                "Apenas corticoide sistémico.",
                "Adrenalina subcutânea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O manejo da crise de asma moderada se baseia em duas frentes: alívio rápido do broncoespasmo com um beta-2 agonista de curta ação (SABA), como o salbutamol, e controle da inflamação da via aérea com um corticoide sistémico (oral ou venoso).",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q55.2",
            "text": "Qual medicamento é a base para o tratamento de controle (manutenção) da asma persistente?",
            "options": [
                "Salbutamol quando necessário.",
                "Montelucaste.",
                "Corticoide inalatório.",
                "Teofilina."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O corticoide inalatório (CI) é a medicação anti-inflamatória mais eficaz e a pedra angular do tratamento de controle da asma persistente em todas as idades, visando prevenir as crises e controlar os sintomas crônicos.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q56.1",
            "text": "Criança de 4 anos com história de dermatite atópica e episódios recorrentes de tosse e sibilância, principalmente à noite ou após exercícios. Qual o diagnóstico mais provável?",
            "options": [
                "Bronquiolite de repetição",
                "Fibrose Cística",
                "Asma",
                "Refluxo gastroesofágico"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A história de episódios recorrentes de sibilância, tosse (especialmente noturna) e dispneia, em uma criança com histórico pessoal ou familiar de atopia (como a dermatite atópica), é altamente sugestiva do diagnóstico de asma.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q56.2",
            "text": "Qual exame funcional pode auxiliar no diagnóstico e acompanhamento da asma em crianças maiores de 6 anos?",
            "options": [
                "Raio-X de tórax",
                "Teste de provocação com exercício",
                "Espirometria (prova de função pulmonar) com prova broncodilatadora",
                "Tomografia de tórax"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A espirometria é o exame que mede os volumes e fluxos de ar. Na asma, tipicamente mostra um distúrbio obstrutivo (relação VEF1/CVF reduzida) que melhora significativamente após a inalação de um broncodilatador, confirmando a reversibilidade da obstrução.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q57",
            "text": "Qual a principal causa de morte em crianças com fibrose cística?",
            "options": [
                "Insuficiência pancreática",
                "Doença hepática",
                "Doença pulmonar crônica (bronquiectasias e insuficiência respiratória)",
                "Desnutrição"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A fibrose cística é uma doença genética que afeta as glândulas exócrinas. O acometimento pulmonar é o mais grave e a principal causa de morbimortalidade, com produção de muco espesso, infecções de repetição, bronquiectasias e eventual falência respiratória.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q58",
            "text": "Qual o exame padrão-ouro para o diagnóstico da Fibrose Cística?",
            "options": [
                "Triagem neonatal (teste do pezinho)",
                "Raio-X de tórax",
                "Teste do suor (dosagem de cloretos no suor)",
                "Teste genético"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O defeito no gene CFTR na fibrose cística resulta em um transporte de cloreto defeituoso. O teste do suor, que mede a concentração de cloretos no suor (que estará elevada), é o padrão-ouro para confirmar o diagnóstico.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q59",
            "text": "O que é a Dermatite Atópica?",
            "options": [
                "É uma infecção de pele bacteriana.",
                "É uma doença inflamatória crônica e pruriginosa da pele, associada a uma disfunção da barreira cutânea e a um histórico pessoal ou familiar de atopia.",
                "É uma reação alérgica a alimentos.",
                "É uma infestação pelo ácaro Sarcoptes scabiei."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Dermatite Atópica é uma dermatose eczematosa, crônica e recidivante, caracterizada por pele seca (xerose), prurido intenso e lesões eczematosas com distribuição típica que varia com a idade (face e extensores em lactentes, dobras em crianças maiores).",
            "tag": "Dermatologia"
        },
        {
            "id": "PR2-SCA-Q60",
            "text": "Qual a base do tratamento da Dermatite Atópica?",
            "options": [
                "Antibióticos sistémicos.",
                "Apenas anti-histamínicos orais.",
                "Hidratação intensiva da pele com emolientes e uso de corticoides tópicos nas crises.",
                "Restrição alimentar rigorosa."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da dermatite atópica baseia-se em restaurar a barreira cutânea com o uso contínuo de hidratantes (emolientes) e controlar a inflamação durante as crises com corticoides tópicos ou outros anti-inflamatórios.",
            "tag": "Dermatologia"
        },
        {
            "id": "PR2-SCA-Q61",
            "text": "Qual a principal causa de convulsão febril na infância?",
            "options": [
                "Meningite",
                "Epilepsia",
                "Febre alta em uma criança geneticamente predisposta, sem infecção do SNC.",
                "Hipoglicemia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A convulsão febril é um evento benigno que ocorre em crianças neurologicamente normais entre 6 meses e 5 anos, associado à febre, na ausência de infecção intracraniana. Há uma forte predisposição genética.",
            "tag": "Neurologia"
        },
        {
            "id": "PR2-SCA-Q62",
            "text": "Qual a conduta para uma primeira crise convulsiva febril simples?",
            "options": [
                "Iniciar anticonvulsivante de uso contínuo.",
                "Realizar punção lombar e tomografia de crânio em todos os casos.",
                "Observação, controle da febre e orientação aos pais.",
                "Internação para investigação completa."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Na crise febril simples (generalizada, <15min, única em 24h), a conduta é expectante. O mais importante é controlar a febre para prevenir novas crises e orientar os pais sobre a benignidade do quadro e como agir em caso de recorrência. Não há indicação de medicação contínua ou investigação extensiva.",
            "tag": "Neurologia"
        },
        {
            "id": "PR2-SCA-Q63",
            "text": "O que é a Estenose Hipertrófica do Piloro?",
            "options": [
                "É uma má rotação intestinal.",
                "É uma obstrução da saída do estômago causada pela hipertrofia da musculatura do piloro, que se manifesta com vómitos não biliosos em jato em lactentes.",
                "É uma inflamação do estômago.",
                "É o refluxo do conteúdo gástrico para o esófago."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Estenose Hipertrófica do Piloro é uma causa importante de vómitos no lactente. Caracteriza-se por vómitos em jato, não biliosos, que pioram progressivamente, em um lactente faminto. Ao exame, pode-se palpar a 'oliva pilórica' no abdómen.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q64",
            "text": "Qual o tratamento para a Estenose Hipertrófica do Piloro?",
            "options": [
                "Apenas dieta espessada.",
                "Medicamentos procinéticos.",
                "Tratamento cirúrgico (piloromiotomia).",
                "Endoscopia com dilatação."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da estenose hipertrófica do piloro é cirúrgico e curativo. A piloromiotomia de Fredet-Ramstedt consiste na incisão da musculatura pilórica hipertrofiada, aliviando a obstrução.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q65",
            "text": "O que é a Invaginação Intestinal?",
            "options": [
                "É a torção do intestino sobre o seu próprio eixo (volvo).",
                "É a ausência de gânglios nervosos no intestino (Doença de Hirschsprung).",
                "É a telescopagem de um segmento do intestino para dentro de outro segmento adjacente.",
                "É a inflamação do apêndice."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A invaginação ou intussuscepção intestinal é a principal causa de obstrução intestinal em crianças entre 3 meses e 6 anos. A forma mais comum é a ileocólica.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q66",
            "text": "Qual a tríade clássica da Invaginação Intestinal?",
            "options": [
                "Febre, vómitos e diarreia.",
                "Dor abdominal em cólica, massa abdominal palpável (em forma de salsicha) e fezes em 'geleia de framboesa'.",
                "Icterícia, acolia fecal e hepatomegalia.",
                "Distensão abdominal, obstipação e vómitos biliosos."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A tríade clássica de sintomas da invaginação intestinal é composta por dor abdominal intermitente (cólica), uma massa palpável no abdómen e a evacuação de fezes com muco e sangue ('geleia de framboesa'), que é um sinal tardio de isquemia intestinal.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q67",
            "text": "Qual o tratamento não cirúrgico para a Invaginação Intestinal?",
            "options": [
                "Apenas observação.",
                "Uso de laxantes.",
                "Redução hidrostática (com soro ou ar) ou pneumática guiada por ultrassonografia ou radioscopia.",
                "Antibioticoterapia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Em pacientes estáveis e sem sinais de peritonite, a primeira linha de tratamento é a tentativa de redução não cirúrgica através de um enema (de ar ou de contraste baritado/solúvel), que cria uma pressão que 'desfaz' a invaginação.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q68.1",
            "text": "Qual a principal causa de meningite bacteriana em crianças após o período neonatal?",
            "options": [
                "Streptococcus agalactiae (Grupo B)",
                "Listeria monocytogenes",
                "Streptococcus pneumoniae e Neisseria meningitidis",
                "Haemophilus influenzae tipo b"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Após a introdução da vacina contra o Haemophilus (Hib), os principais agentes causadores de meningite bacteriana em crianças maiores de 2 meses são o Pneumococo e o Meningococo.",
            "tag": "Infectologia"
        },
        {
            "id": "PR2-SCA-Q68.2",
            "text": "Qual exame é o padrão-ouro para o diagnóstico da meningite bacteriana?",
            "options": [
                "Hemograma",
                "Tomografia de crânio",
                "Análise do líquido cefalorraquidiano (LCR) obtido por punção lombar.",
                "Hemocultura."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A análise do LCR é fundamental para o diagnóstico. Na meningite bacteriana, o LCR tipicamente mostra pleocitose (aumento de células) com predomínio de neutrófilos, hipoglicorraquia (glicose baixa) e hiperproteinorraquia (proteínas elevadas), além da possibilidade de identificar a bactéria na bacterioscopia (Gram) ou cultura.",
            "tag": "Infectologia"
        },
        {
            "id": "PR2-SCA-Q69",
            "text": "O que são os sinais de Kernig e Brudzinski?",
            "options": [
                "São sinais de insuficiência cardíaca.",
                "São sinais de irritação meníngea.",
                "São sinais de apendicite.",
                "São sinais de desidratação."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Os sinais de Kernig (dificuldade e dor para estender o joelho com o quadril fletido) e Brudzinski (flexão involuntária dos joelhos e quadris ao fletir o pescoço) são manobras semiológicas que indicam a presença de irritação das meninges, como ocorre na meningite.",
            "tag": "Infectologia"
        },
        {
            "id": "PR2-SCA-Q70",
            "text": "Qual o tratamento empírico de escolha para a meningite bacteriana em uma criança de 5 anos?",
            "options": [
                "Penicilina cristalina",
                "Ceftriaxona associada à Vancomicina",
                "Ampicilina e Gentamicina",
                "Aciclovir"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A antibioticoterapia deve ser iniciada imediatamente após a suspeita clínica. O esquema empírico deve cobrir os agentes mais prováveis (Pneumococo e Meningococo). A Ceftriaxona é a droga de escolha. A Vancomicina é associada para cobrir a possibilidade de pneumococo resistente à penicilina.",
            "tag": "Infectologia"
        },
        {
            "id": "PR2-SCA-Q71",
            "text": "Qual a principal medida para prevenir a meningite por Haemophilus influenzae tipo b, Pneumococo e Meningococo?",
            "options": [
                "Higiene das mãos",
                "Quimioprofilaxia para contatos",
                "Vacinação",
                "Isolamento dos doentes"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A imunização através das vacinas conjugadas contra Hib, pneumococo e meningococos, disponíveis no calendário vacinal infantil, é a estratégia mais eficaz para a prevenção primária da meningite bacteriana causada por estes agentes.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q72.1",
            "text": "Lactente de 1 mês, sexo masculino, com criptorquidia (testículo não descido) à direita. Qual a conduta?",
            "options": [
                "Cirurgia imediata (orquidopexia).",
                "Tratamento hormonal com HCG.",
                "Observação, pois a descida pode ocorrer espontaneamente nos primeiros meses.",
                "Remoção do testículo (orquiectomia)."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Muitos testículos não descidos ao nascimento, especialmente em prematuros, completam a sua descida para a bolsa escrotal nos primeiros 3 a 6 meses de vida. Portanto, a conduta inicial é a observação.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q72.2",
            "text": "Se o testículo do paciente da questão anterior não descer até os 6 meses, quando a cirurgia (orquidopexia) deve ser indicada?",
            "options": [
                "Apenas na puberdade.",
                "Idealmente entre 6 e 12 meses de idade.",
                "Apenas se houver dor.",
                "Pode-se esperar até os 5 anos."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A cirurgia para corrigir a criptorquidia (orquidopexia) é indicada se o testículo não descer espontaneamente. O ideal é realizá-la entre 6 e 12 meses de idade para otimizar o potencial de fertilidade e diminuir o risco de malignização.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q73",
            "text": "A criptorquidia é um fator de risco para qual condição na vida adulta?",
            "options": [
                "Hérnia inguinal",
                "Hidrocele",
                "Câncer de testículo e infertilidade",
                "Varicocele"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Mesmo após a correção cirúrgica, os testículos que foram criptorquídicos têm um risco aumentado de desenvolver tumores de células germinativas e de apresentar subfertilidade na vida adulta.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q74.1",
            "text": "Lactente de 4 meses com abaulamento na região inguinal direita, redutível e que aumenta com o choro. Qual o diagnóstico?",
            "options": [
                "Hérnia inguinal indireta",
                "Hidrocele comunicante",
                "Linfonodo inguinal",
                "Testículo ectópico"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A hérnia inguinal indireta é a mais comum em crianças e resulta da persistência do conduto peritoneovaginal, permitindo a passagem de conteúdo abdominal (geralmente intestino) para o canal inguinal. O abaulamento intermitente que piora com o aumento da pressão abdominal é característico.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q74.2",
            "text": "Qual a principal complicação da hérnia inguinal e por que o tratamento é cirúrgico?",
            "options": [
                "Torção testicular.",
                "Infertilidade.",
                "Encarceramento e estrangulamento do conteúdo herniado.",
                "Apenas desconforto estético."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A complicação mais temida é o encarceramento (quando o conteúdo herniado não pode ser reduzido de volta para o abdómen), que pode evoluir para estrangulamento (comprometimento do suprimento sanguíneo do intestino), uma emergência cirúrgica. Por este risco, o tratamento da hérnia inguinal é sempre a correção cirúrgica eletiva.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q75",
            "text": "Qual a diferença entre hidrocele comunicante e não comunicante?",
            "options": [
                "Não há diferença, são a mesma condição.",
                "A comunicante se resolve espontaneamente, a não comunicante não.",
                "Na comunicante, há persistência do conduto peritoneovaginal permitindo a passagem de fluido peritoneal; na não comunicante, o fluido é produzido localmente.",
                "A comunicante afeta apenas um testículo, a não comunicante afeta ambos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A hidrocele comunicante resulta da passagem de fluido peritoneal para a túnica vaginal através de um conduto peritoneovaginal patente, e seu volume tipicamente flutua ao longo do dia. Na não comunicante, o conduto está fechado e o fluido é produzido pela própria túnica.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q76",
            "text": "Qual a conduta para uma hidrocele comunicante em um lactente de 8 meses?",
            "options": [
                "Cirurgia imediata.",
                "Observação, pois a maioria se resolve espontaneamente até 1-2 anos de idade.",
                "Punção para esvaziar o líquido.",
                "Uso de suspensório escrotal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A maioria das hidroceles comunicantes em lactentes se resolve com o fechamento espontâneo do conduto peritoneovaginal. A conduta é a observação, e a cirurgia só é indicada se a hidrocele persistir após 1 ou 2 anos de idade ou se for muito volumosa e tensa.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q77",
            "text": "Adolescente de 14 anos acorda com dor súbita e intensa no testículo esquerdo, associada a náuseas. Ao exame, o testículo está elevado, horizontalizado e muito doloroso. Qual a principal hipótese?",
            "options": [
                "Orquite",
                "Hérnia inguinal encarcerada",
                "Torção do apêndice testicular",
                "Torção testicular"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A torção do cordão espermático (torção testicular) é uma emergência urológica. O quadro de dor escrotal aguda, súbita e intensa em um adolescente, com os achados de testículo elevado ('sinal de Prehn' negativo) e horizontalizado, é altamente sugestivo do diagnóstico.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q78",
            "text": "Qual a conduta imediata na suspeita de torção testicular?",
            "options": [
                "Realizar ultrassom com Doppler para confirmar e depois operar.",
                "Tentar a distorção manual e observar.",
                "Apenas analgesia e anti-inflamatórios.",
                "Exploração cirúrgica imediata."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Na torção testicular, 'tempo é testículo'. A conduta na alta suspeita clínica é a exploração cirúrgica imediata, sem a necessidade de exames de imagem que possam atrasar o tratamento. O objetivo é distorcer o testículo e fixá-lo (orquidopexia) o mais rápido possível para garantir sua viabilidade.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q79",
            "text": "O que é o sinal de Prehn?",
            "options": [
                "É a ausência do reflexo cremastérico.",
                "É a melhora da dor escrotal com a elevação do testículo, sugestiva de epididimite.",
                "É a piora da dor escrotal com a elevação do testículo, sugestiva de torção.",
                "É um ponto azulado visível na pele do escroto (blue dot sign)."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O sinal de Prehn é um achado semiológico: a elevação manual do testículo tende a aliviar a dor na epididimite (Prehn positivo), enquanto na torção testicular, a dor geralmente piora ou não se altera (Prehn negativo). A ausência do reflexo cremastérico (A) é um sinal mais sensível para torção.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q80.1",
            "text": "O que é a Doença de Hirschsprung?",
            "options": [
                "É uma má rotação intestinal.",
                "É a ausência congénita de células ganglionares nos plexos nervosos do intestino distal, causando uma obstrução funcional.",
                "É uma estenose do piloro.",
                "É uma inflamação do intestino."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Também conhecida como megacólon aganglionar congénito, a Doença de Hirschsprung é caracterizada pela ausência de neurónios inibitórios no plexo mioentérico, o que impede o relaxamento do segmento afetado e causa uma obstrução funcional.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q80.2",
            "text": "Qual o principal sintoma da Doença de Hirschsprung no período neonatal?",
            "options": [
                "Diarreia",
                "Vómitos biliosos",
                "Atraso na eliminação de mecónio (> 48 horas) e distensão abdominal.",
                "Icterícia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A falha em eliminar o mecónio nas primeiras 24-48 horas de vida é o sinal de alerta mais importante para a Doença de Hirschsprung, refletindo a obstrução intestinal distal.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q81",
            "text": "Qual o exame padrão-ouro para o diagnóstico da Doença de Hirschsprung?",
            "options": [
                "Enema opaco",
                "Manometria anorretal",
                "Biópsia retal mostrando a ausência de células ganglionares",
                "Radiografia simples de abdómen"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O diagnóstico definitivo da Doença de Hirschsprung é histopatológico, através de uma biópsia retal (por sucção ou cirúrgica) que demonstra a ausência de células ganglionares nos plexos submucoso e mioentérico.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q82",
            "text": "O que é a Fimose?",
            "options": [
                "É a inflamação da glande.",
                "É a incapacidade de expor a glande devido a um anel prepucial estreito.",
                "É quando o prepúcio, uma vez retraído, não consegue retornar à sua posição original, causando um garroteamento da glande.",
                "É a abertura da uretra na face ventral do pénis."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A fimose é a condição em que o prepúcio não pode ser totalmente retraído para trás da glande. É fisiológica na maioria dos lactentes e tende a se resolver espontaneamente. A opção C descreve a parafimose.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q83",
            "text": "O que é a Parafimose?",
            "options": [
                "É a incapacidade de retrair o prepúcio.",
                "É uma emergência urológica em que o prepúcio fica preso atrás da glande, causando edema e risco de necrose.",
                "É a inflamação do prepúcio.",
                "É uma curvatura peniana congénita."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A parafimose é uma condição aguda e dolorosa que requer redução manual ou cirúrgica imediata para evitar a isquemia e necrose da glande.",
            "tag": "Cirurgia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q84.1",
            "text": "O que é a Displasia do Desenvolvimento do Quadril (DDQ)?",
            "options": [
                "É uma infeção do quadril do recém-nascido.",
                "É um espectro de anormalidades no desenvolvimento do quadril, que vão da instabilidade e subluxação até a luxação completa da cabeça do fémur.",
                "É uma necrose avascular da cabeça do fémur.",
                "É uma inflamação transitória do quadril."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A DDQ abrange todas as formas de desenvolvimento anormal da articulação do quadril, resultando em um relacionamento inadequado entre a cabeça femoral e o acetábulo.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q84.2",
            "text": "Qual o exame de imagem de escolha para o diagnóstico da DDQ em um lactente de 2 meses?",
            "options": [
                "Radiografia da bacia",
                "Tomografia Computadorizada",
                "Ultrassonografia de quadris",
                "Ressonância Magnética"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Em crianças com menos de 4-6 meses, a cabeça do fémur ainda é predominantemente cartilaginosa e não é bem visível na radiografia. A ultrassonografia é o método de imagem de escolha nesta faixa etária, pois permite avaliar tanto as estruturas ósseas quanto as cartilaginosas e a estabilidade da articulação.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q85",
            "text": "Qual o tratamento para a DDQ diagnosticada em um lactente de 3 meses?",
            "options": [
                "Apenas observação.",
                "Cirurgia de redução aberta.",
                "Uso do suspensório de Pavlik.",
                "Imobilização com gesso."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O suspensório de Pavlik é o tratamento de escolha para a DDQ em lactentes até 6 meses. É uma órtese dinâmica que mantém os quadris em flexão e abdução, posição que favorece a redução concêntrica da cabeça femoral e o desenvolvimento normal do acetábulo.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q86.1",
            "text": "Qual a principal causa de diarreia crônica em crianças com fibrose cística?",
            "options": [
                "Intolerância à lactose.",
                "Doença celíaca associada.",
                "Insuficiência pancreática exócrina, levando à má absorção de gorduras (esteatorreia).",
                "Infecções intestinais de repetição."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A fibrose cística causa a obstrução dos ductos pancreáticos com muco espesso, levando à insuficiência pancreática exócrina em 85-90% dos pacientes. A falta de enzimas pancreáticas para digerir as gorduras resulta em esteatorreia (fezes gordurosas, volumosas e malcheirosas) e má absorção.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q86.2",
            "text": "Qual o tratamento para a insuficiência pancreática na fibrose cística?",
            "options": [
                "Dieta isenta de gorduras.",
                "Transplante de pâncreas.",
                "Reposição de enzimas pancreáticas por via oral a cada refeição.",
                "Uso de probióticos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento consiste na reposição oral de enzimas pancreáticas (lipase, protease, amilase) em cápsulas, que devem ser administradas junto com as refeições e lanches para permitir a digestão e absorção adequadas dos nutrientes.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q87",
            "text": "O que é o aleitamento materno exclusivo?",
            "options": [
                "Quando o bebê recebe apenas leite materno e água.",
                "Quando o bebê recebe leite materno e fórmula infantil.",
                "Quando o bebê recebe apenas leite materno, direto da mama ou ordenhado, sem outros líquidos ou sólidos, com exceção de medicamentos.",
                "Quando o bebê mama no peito, mas também usa chupeta."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A definição da OMS para aleitamento materno exclusivo é a oferta apenas de leite materno, sem a inclusão de água, chás ou qualquer outro alimento, sendo recomendado até o sexto mês de vida.",
            "tag": "Nutrição"
        },
        {
            "id": "PR2-SCA-Q88.1",
            "text": "Lactente de 4 meses em aleitamento materno exclusivo apresenta fezes com raias de sangue. A criança está em bom estado geral e ganhando peso. Qual a principal hipótese?",
            "options": [
                "Gastroenterite bacteriana",
                "Fissura anal",
                "Invaginação intestinal",
                "Proctocolite alérgica induzida por proteína alimentar (ex: leite de vaca)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A proctocolite alérgica é uma inflamação do reto e cólon causada pela passagem de proteínas alimentares da dieta da mãe (principalmente do leite de vaca) para o leite materno. Manifesta-se com sangue nas fezes em um lactente que, fora isso, parece saudável.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q88.2",
            "text": "Qual a conduta para a proctocolite alérgica em um bebê em aleitamento materno exclusivo?",
            "options": [
                "Suspender o aleitamento materno e iniciar fórmula de soja.",
                "Iniciar antibióticos para o bebê.",
                "Manter o aleitamento materno e orientar a mãe a fazer uma dieta de exclusão de proteínas do leite de vaca.",
                "Realizar colonoscopia de urgência."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A conduta é manter o aleitamento materno, que é o melhor alimento para o bebê, e orientar a mãe a excluir completamente o leite de vaca e seus derivados da sua própria dieta. A melhora dos sintomas do bebê confirma o diagnóstico.",
            "tag": "Gastroenterologia"
        },
        {
            "id": "PR2-SCA-Q89",
            "text": "A partir de que idade a introdução da alimentação complementar é recomendada?",
            "options": [
                "Aos 4 meses.",
                "Aos 6 meses.",
                "Quando os primeiros dentes nascem.",
                "Aos 12 meses."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Sociedade Brasileira de Pediatria e a OMS recomendam o aleitamento materno exclusivo até os 6 meses e a introdução da alimentação complementar a partir desta idade, mantendo o leite materno até os 2 anos ou mais.",
            "tag": "Nutrição"
        },
        {
            "id": "PR2-SCA-Q90",
            "text": "Na introdução alimentar, qual grupo de alimentos deve ser o primeiro a ser oferecido?",
            "options": [
                "Frutas",
                "Cereais",
                "Legumes e carnes",
                "Não há uma ordem rígida; deve-se oferecer alimentos de todos os grupos, amassados, desde o início."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. As recomendações atuais enfatizam que não há necessidade de seguir uma ordem rígida. A partir dos 6 meses, a criança deve receber uma alimentação variada, incluindo alimentos de todos os grupos (cereais, leguminosas, carnes, tubérculos, legumes, frutas), com a consistência adequada (papa/puré).",
            "tag": "Nutrição"
        },
        {
            "id": "PR2-SCA-Q91",
            "text": "O que é o sinal da 'tartaruga' durante o parto?",
            "options": [
                "É quando o bebê nasce muito lentamente.",
                "É um sinal de sofrimento fetal agudo.",
                "É quando a cabeça do bebê sai, mas retrai de volta contra o períneo, indicando uma distócia de ombro.",
                "É a apresentação pélvica do feto."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O sinal da tartaruga é um sinal clássico da distócia de ombro, uma emergência obstétrica em que, após a saída da cabeça, o ombro anterior do feto fica impactado atrás da sínfise púbica materna, impedindo a progressão do parto.",
            "tag": "Obstetrícia"
        },
        {
            "id": "PR2-SCA-Q92",
            "text": "A distócia de ombro é um fator de risco para qual lesão neurológica no recém-nascido?",
            "options": [
                "Paralisia cerebral",
                "Lesão do nervo facial",
                "Paralisia do plexo braquial (Paralisia de Erb-Duchenne)",
                "Lesão medular"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. As manobras realizadas para desimpactar o ombro durante a distócia podem causar o estiramento do plexo braquial, resultando em uma paralisia flácida do membro superior afetado.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q93",
            "text": "O que é o Apgar e o que ele avalia?",
            "options": [
                "É um teste de maturidade neurológica.",
                "É um índice que avalia a vitalidade do recém-nascido no primeiro e quinto minutos de vida, baseado em cinco parâmetros.",
                "É uma escala para avaliar a dor no recém-nascido.",
                "É um teste para diagnosticar asfixia."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O índice de Apgar é uma nota de 0 a 10 atribuída ao RN no 1º e 5º minutos, avaliando Frequência cardíaca, Esforço respiratório, Tônus muscular, Irritabilidade reflexa e Cor. Ele reflete a transição do ambiente intra para o extrauterino, mas não é usado para indicar o início da reanimação.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q94",
            "text": "O que é a mancha mongólica?",
            "options": [
                "É um hematoma causado pelo parto.",
                "É uma lesão pré-cancerosa.",
                "É uma mácula azul-acinzentada, benigna, geralmente na região lombossacra, comum em recém-nascidos de pele mais escura.",
                "É um sinal de doença genética."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A mancha mongólica (melanocitose dérmica congénita) é uma lesão pigmentar benigna, presente ao nascimento, que tende a desaparecer espontaneamente nos primeiros anos de vida.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q95",
            "text": "O que é o eritema tóxico do recém-nascido?",
            "options": [
                "É uma reação alérgica grave.",
                "É uma infecção de pele bacteriana.",
                "É uma erupção cutânea benigna e autolimitada, muito comum em recém-nascidos, caracterizada por pápulas e pústulas sobre uma base eritematosa.",
                "É uma queimadura química."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O eritema tóxico é a erupção pustular mais comum no período neonatal. Apesar do nome, não é tóxico nem infeccioso, e desaparece sem tratamento em poucos dias.",
            "tag": "Neonatologia"
        },
        {
            "id": "PR2-SCA-Q96",
            "text": "Qual a principal causa de morte em crianças de 1 a 4 anos no Brasil?",
            "options": [
                "Doenças infecciosas",
                "Câncer",
                "Causas externas (acidentes e violências)",
                "Malformações congénitas"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A partir do primeiro ano de vida, as causas externas, como afogamentos, acidentes de trânsito, quedas e queimaduras, tornam-se a principal causa de mortalidade na infância e adolescência, superando as causas naturais.",
            "tag": "Prevenção de Acidentes"
        },
        {
            "id": "PR2-SCA-Q97.1",
            "text": "Criança de 2 anos é trazida à emergência após episódio de engasgo súbito enquanto comia amendoim, seguido de tosse, dispneia e sibilância unilateral. Qual a principal hipótese?",
            "options": [
                "Crise de asma",
                "Pneumonia",
                "Aspiração de corpo estranho",
                "Laringite"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A história de um episódio súbito de engasgo e asfixia em uma criança pequena, seguido de sintomas respiratórios como tosse e sibilância, é altamente sugestiva de aspiração de corpo estranho para a via aérea.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q97.2",
            "text": "Qual o exame padrão-ouro para o diagnóstico e tratamento da aspiração de corpo estranho?",
            "options": [
                "Raio-X de tórax",
                "Tomografia de tórax",
                "Laringoscopia",
                "Broncoscopia rígida"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A broncoscopia rígida, realizada sob anestesia geral no centro cirúrgico, é o procedimento de escolha tanto para confirmar a presença do corpo estranho na via aérea quanto para a sua remoção segura.",
            "tag": "Pneumologia"
        },
        {
            "id": "PR2-SCA-Q98",
            "text": "O que é a manobra de Heimlich?",
            "options": [
                "É uma manobra para reanimação cardiopulmonar.",
                "É uma manobra para desobstrução de via aérea por corpo estranho em crianças maiores de 1 ano e adultos.",
                "É uma manobra para reduzir uma luxação de ombro.",
                "É uma manobra para avaliar a estabilidade do joelho."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A manobra de Heimlich consiste em compressões abdominais subdiafragmáticas para criar uma tosse artificial e expelir o corpo estranho que está a obstruir a via aérea.",
            "tag": "Primeiros Socorros"
        },
        {
            "id": "PR2-SCA-Q99",
            "text": "Qual a conduta para a desobstrução de via aérea em um lactente (< 1 ano) consciente?",
            "options": [
                "Manobra de Heimlich.",
                "Varredura digital às cegas.",
                "5 tapas nas costas seguidos de 5 compressões torácicas.",
                "Apenas estimular a tosse."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Em lactentes conscientes com obstrução grave, a manobra recomendada é a alternância de 5 tapas na região interescapular (com o bebê em decúbito ventral, apoiado no antebraço) seguidos de 5 compressões torácicas (semelhantes à da massagem cardíaca).",
            "tag": "Primeiros Socorros"
        },
        {
            "id": "PR2-SCA-Q100.1",
            "text": "Qual das seguintes afirmações sobre a vacina BCG é FALSA?",
            "options": [
                "É uma vacina de bactéria atenuada.",
                "Protege principalmente contra as formas graves de tuberculose (miliar e meníngea).",
                "É contraindicada em recém-nascidos com peso inferior a 2 kg.",
                "A ausência de cicatriz vacinal após a aplicação indica falha vacinal e a necessidade de revacinação."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa falsa (e, portanto, a correta) é a D. De acordo com as normas atuais do Ministério da Saúde, a ausência de cicatriz após a vacinação com BCG não é mais considerada indicação de revacinação, pois não significa necessariamente ausência de proteção.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q100.2",
            "text": "Qual a via de administração da vacina BCG?",
            "options": [
                "Intramuscular",
                "Subcutânea",
                "Intradérmica",
                "Oral"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A vacina BCG deve ser administrada por via intradérmica, na inserção inferior do músculo deltoide direito, para garantir a formação da pápula e a resposta imunológica adequada.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q101",
            "text": "A vacina contra o Rotavírus pode estar associada a um risco aumentado, embora muito pequeno, de qual evento adverso?",
            "options": [
                "Convulsão febril",
                "Reação alérgica grave (anafilaxia)",
                "Invaginação intestinal",
                "Encefalite"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Estudos de vigilância pós-comercialização demonstraram uma pequena associação temporal entre a vacinação contra o rotavírus e um risco ligeiramente aumentado de invaginação intestinal, especialmente após a primeira dose. Apesar disso, o benefício da vacina em prevenir a doença grave supera em muito este risco.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q102",
            "text": "A vacina DTPa (tríplice bacteriana acelular) é preferível à DTPw (células inteiras) em quais situações?",
            "options": [
                "Em todas as crianças, por ser mais barata.",
                "Em crianças que apresentaram eventos adversos graves à dose anterior de DTPw, como convulsão ou episódio hipotônico-hiporresponsivo.",
                "Apenas para o reforço dos 4 anos.",
                "A DTPw não é mais utilizada."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A vacina DTPa tem uma menor reatogenicidade (causa menos febre, dor local e choro) que a DTPw. Ela está disponível nos Centros de Referência para Imunobiológicos Especiais (CRIE) para crianças que tiveram reações graves à vacina de células inteiras.",
            "tag": "Imunizações"
        },
        {
            "id": "PR2-SCA-Q103",
            "text": "O que é a doença do soro?",
            "options": [
                "Uma reação alérgica imediata tipo I.",
                "Uma reação de hipersensibilidade tipo III, mediada por imunocomplexos, que ocorre dias após a exposição a uma proteína estranha.",
                "Uma reação autoimune.",
                "Uma reação cutânea a um medicamento."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A doença do soro é uma reação sistémica causada pela deposição de imunocomplexos (antígeno-anticorpo) nos vasos sanguíneos, articulações e rins. Clinicamente, manifesta-se com febre, urticária, artralgia e linfadenopatia, cerca de 1 a 3 semanas após a exposição ao agente causal (ex: soro heterólogo, alguns medicamentos).",
            "tag": "Imunologia"
        },
        {
            "id": "PR2-SCA-Q104",
            "text": "Qual o principal diagnóstico diferencial da artrite séptica do quadril em crianças?",
            "options": [
                "Doença de Legg-Calvé-Perthes",
                "Sinovite transitória do quadril",
                "Epifisiólise",
                "Artrite Idiopática Juvenil"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Sinovite Transitória do Quadril é a principal condição a ser diferenciada da artrite séptica, pois ambas cursam com dor, claudicação e limitação de movimento. A artrite séptica, no entanto, geralmente apresenta um quadro sistémico mais exuberante (febre mais alta, PCR e VHS mais elevados) e requer tratamento de urgência.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q105",
            "text": "Os critérios de Kocher são utilizados para:",
            "options": [
                "Diagnosticar a Doença de Kawasaki.",
                "Avaliar o risco de displasia do quadril.",
                "Diferenciar a artrite séptica da sinovite transitória do quadril.",
                "Classificar a gravidade da asma."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Os critérios de Kocher são um algoritmo preditivo baseado em quatro variáveis clínicas e laboratoriais (febre > 38,5°C, incapacidade de suportar peso, VHS > 40 mm/h e leucocitose > 12.000) para estimar a probabilidade de uma criança com quadril irritável ter artrite séptica.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q106",
            "text": "O que é a Doença de Osgood-Schlatter?",
            "options": [
                "É uma fratura da tíbia.",
                "É uma apofisite da tuberosidade anterior da tíbia, causada por tração repetitiva do tendão patelar durante a fase de crescimento.",
                "É uma necrose avascular do joelho.",
                "É uma lesão do menisco."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Doença de Osgood-Schlatter é uma causa comum de dor no joelho em adolescentes ativos. É uma osteocondrose de tração, onde o esforço repetitivo causa inflamação e microfraturas na inserção do tendão patelar na tuberosidade tibial, que ainda está em crescimento.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q107",
            "text": "Qual a principal causa de puberdade precoce central?",
            "options": [
                "Tumores do SNC",
                "Idiopática",
                "Hiperplasia adrenal congénita",
                "Tumores produtores de gonadotrofinas"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Puberdade Precoce Central (dependente de GnRH) é causada pela ativação prematura do eixo hipotálamo-hipófise-gonadal. Na grande maioria das meninas (cerca de 90% dos casos), nenhuma causa subjacente é encontrada, sendo classificada como idiopática.",
            "tag": "Endocrinologia"
        },
        {
            "id": "PR2-SCA-Q108",
            "text": "O que é o teste de estímulo com GnRH (ou análogo) e para que serve?",
            "options": [
                "Serve para diagnosticar o hipotireoidismo.",
                "Serve para diferenciar a puberdade precoce central da periférica.",
                "Serve para avaliar a reserva de hormona de crescimento.",
                "Serve para diagnosticar o diabetes."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. No teste, a administração de um análogo do GnRH estimula a hipófise. Na puberdade precoce central, onde o eixo está maduro, haverá uma resposta com pico de LH em níveis puberais. Na puberdade precoce periférica (independente de GnRH), o eixo está suprimido e não haverá resposta do LH.",
            "tag": "Endocrinologia"
        },
        {
            "id": "PR2-SCA-Q109",
            "text": "Qual o tratamento para a puberdade precoce central?",
            "options": [
                "Apenas observação.",
                "Cirurgia para remover a hipófise.",
                "Uso de análogos do GnRH de ação prolongada para bloquear o eixo hipotálamo-hipófise-gonadal.",
                "Uso de estrogénio ou testosterona."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento visa bloquear a progressão da puberdade e preservar o potencial de estatura final. Os análogos de GnRH de depósito (ex: leuprorrelina) causam uma dessensibilização da hipófise, suprimindo a produção de LH e FSH e, consequentemente, a produção de esteroides sexuais.",
            "tag": "Endocrinologia"
        },
        {
            "id": "PR2-SCA-Q110",
            "text": "Qual a principal causa de baixa estatura de origem endócrina na infância?",
            "options": [
                "Deficiência de hormona de crescimento (GH)",
                "Hipotireoidismo",
                "Síndrome de Cushing",
                "Puberdade precoce"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O hipotireoidismo congénito ou adquirido é uma causa importante de desaceleração do crescimento e baixa estatura em crianças. É fundamental descartá-lo em qualquer criança com baixa velocidade de crescimento, pois o tratamento com reposição hormonal reverte o quadro.",
            "tag": "Endocrinologia"
        },
        {
            "id": "PR2-SCA-Q111",
            "text": "O que é a idade óssea e para que serve?",
            "options": [
                "É a idade cronológica da criança.",
                "É uma estimativa da maturidade esquelética, avaliada por uma radiografia da mão e punho, que ajuda a prever o potencial de crescimento restante.",
                "É usada para diagnosticar fraturas.",
                "Mede a densidade mineral óssea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A idade óssea é uma medida do desenvolvimento biológico. Compará-la com a idade cronológica e a estatura da criança é fundamental na avaliação dos distúrbios de crescimento, pois uma idade óssea atrasada indica maior potencial de crescimento, enquanto uma idade óssea avançada indica o contrário.",
            "tag": "Endocrinologia"
        },
        {
            "id": "PR2-SCA-Q112.1",
            "text": "Qual a principal causa de morte por doença na adolescência?",
            "options": [
                "Causas externas (acidentes, violência, suicídio)",
                "Câncer",
                "Doenças infecciosas",
                "Doenças cardíacas"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. As causas externas são a principal causa de mortalidade em adolescentes e adultos jovens. A combinação de comportamentos de risco, impulsividade e desenvolvimento do cérebro contribui para esta estatística.",
            "tag": "Adolescência"
        },
        {
            "id": "PR2-SCA-Q112.2",
            "text": "O que é a escala de Tanner?",
            "options": [
                "Avalia o desenvolvimento neurológico.",
                "Avalia o risco de suicídio.",
                "É uma escala que classifica os estágios de maturação sexual (desenvolvimento de mamas, genitais e pelos pubianos) durante a puberdade.",
                "Mede o índice de massa corporal."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A escala de Tanner é uma ferramenta universalmente utilizada para estadiar o desenvolvimento puberal em 5 estágios, permitindo uma avaliação objetiva da progressão da puberdade.",
            "tag": "Adolescência"
        },
        {
            "id": "PR2-SCA-Q113.1",
            "text": "Qual o primeiro sinal de puberdade em meninas?",
            "options": [
                "Menarca (primeira menstruação)",
                "Surgimento de pelos pubianos (pubarca)",
                "Surgimento do broto mamário (telarca)",
                "Estirão de crescimento"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O aparecimento do broto mamário (telarca) é o primeiro sinal físico do início da puberdade na maioria das meninas.",
            "tag": "Adolescência"
        },
        {
            "id": "PR2-SCA-Q113.2",
            "text": "Qual o primeiro sinal de puberdade em meninos?",
            "options": [
                "Surgimento de pelos pubianos",
                "Aumento do volume testicular (≥ 4 mL)",
                "Mudança da voz",
                "Aumento do pênis"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O aumento do volume testicular, avaliado com o orquidómetro de Prader, é o primeiro sinal do início da puberdade em meninos.",
            "tag": "Adolescência"
        },
        {
            "id": "PR2-SCA-Q114",
            "text": "O que é a ginecomastia puberal?",
            "options": [
                "É um sinal de doença hepática.",
                "É o desenvolvimento de tecido mamário em meninos durante a puberdade, geralmente benigno e transitório.",
                "É um tumor da glândula adrenal.",
                "É o acúmulo de gordura na região peitoral (lipomastia)."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A ginecomastia puberal é muito comum, causada por um desequilíbrio temporário entre os níveis de estrogénio e androgénio. Geralmente regride espontaneamente em 1 a 2 anos.",
            "tag": "Adolescência"
        },
        {
            "id": "PR2-SCA-Q115",
            "text": "A escoliose idiopática do adolescente é mais comum em qual sexo e qual o tipo de curva mais frequente?",
            "options": [
                "Meninos; curva lombar esquerda.",
                "Meninas; curva torácica direita.",
                "Meninos; curva toracolombar.",
                "Meninas; curva cervical."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A escoliose idiopática do adolescente é significativamente mais comum em meninas, especialmente as curvas que progridem e necessitam de tratamento. O padrão de curva mais comum é a torácica com convexidade para a direita.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q116",
            "text": "O que é o teste de Adams?",
            "options": [
                "É um teste para avaliar a flexibilidade da coluna.",
                "É uma manobra de triagem para a escoliose, onde se observa a presença de uma gibosidade (assimetria do dorso) com o paciente fletido para a frente.",
                "É um teste para medir o comprimento dos membros inferiores.",
                "É um teste para avaliar a força muscular do tronco."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O teste de flexão do tronco para a frente (manobra de Adams) é o principal método de rastreio para a escoliose. A rotação dos corpos vertebrais, que acompanha a curvatura lateral, torna a caixa torácica assimétrica, criando uma proeminência (giba ou gibosidade) de um lado das costas.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q117.1",
            "text": "Criança de 10 anos com dor óssea, febre e perda de peso. Raio-X mostra lesão lítica, permeativa, com reação periosteal em 'casca de cebola' na diáfise do fémur. Qual o diagnóstico mais provável?",
            "options": [
                "Osteossarcoma",
                "Sarcoma de Ewing",
                "Cisto ósseo aneurismático",
                "Osteomielite crônica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Sarcoma de Ewing é um tumor ósseo maligno altamente agressivo que afeta crianças e adolescentes. A apresentação com dor, febre e sinais sistémicos, associada a uma lesão lítica na diáfise de ossos longos com a clássica reação periosteal lamelar ('casca de cebola'), é a imagem típica da doença.",
            "tag": "Oncologia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q117.2",
            "text": "Qual o tratamento para o Sarcoma de Ewing?",
            "options": [
                "Apenas cirurgia.",
                "Apenas radioterapia.",
                "Quimioterapia neoadjuvante, seguida de cirurgia e/ou radioterapia, e depois quimioterapia adjuvante.",
                "Observação."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento do Sarcoma de Ewing é multimodal. Envolve quimioterapia sistémica para tratar a doença sistémica (micro-metástases) e reduzir o tumor primário, seguida de controlo local com cirurgia de ressecção e/ou radioterapia.",
            "tag": "Oncologia Pediátrica"
        },
        {
            "id": "PR2-SCA-Q118",
            "text": "Qual o tumor ósseo maligno primário mais comum em crianças e adolescentes?",
            "options": [
                "Sarcoma de Ewing",
                "Condrossarcoma",
                "Osteossarcoma",
                "Mieloma Múltiplo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Osteossarcoma é o câncer ósseo primário mais frequente na faixa etária pediátrica, ocorrendo tipicamente na metáfise de ossos longos (especialmente ao redor do joelho) durante o estirão de crescimento da adolescência.",
            "tag": "Oncologia Pediátrica"
        }
    ]
},
  {
    id: "preset-m7-pr2-otorrino",
    name: "Estácio - M7 - PR2 - Otorrinolaringologia",
    questions: [
        {
            "id": "PR2-Otorrino-Q1",
            "text": "Abaulamento súbito, isolado de uma das glândulas salivares, principalmente da submandibular; desencadeado durante a alimentação, geralmente indolor, sem sinais flogísticos. À oroscopia, detectou-se pequena tumefação e a região de ducto de glândula submandibular. Essa descrição sugere:",
            "options": [
                "Cistos de glândulas salivares",
                "Síndrome de Sjogren",
                "Mucocele de glândula salivar menor",
                "Sialolitíase"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O quadro de abaulamento de glândula salivar que ocorre durante a alimentação (estímulo salivar) é o sintoma clássico da sialolitíase, que é a obstrução do ducto salivar por um cálculo. A dor, quando presente, é do tipo cólica. Cistos (A) e mucocele (C) não têm essa relação direta com a alimentação. Síndrome de Sjogren (B) causa xerostomia (boca seca), e não obstrução.",
            "tag": "Glândulas Salivares"
        },
        {
            "id": "PR2-Otorrino-Q2",
            "text": "Feminino, 50 anos, apresentando vertigem há 1 dia, acompanhada de náuseas, além da sensação de plenitude auricular e zumbidos. Relata que já teve outras episódios semelhantes anteriormente. Ao exame observa-se otoscopia normal. Qual a principal hipótese diagnóstica?",
            "options": [
                "VPPB",
                "Neurite vestibular",
                "Migrânea vestibular",
                "Doença de Ménière"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A tríade de vertigem episódica, zumbido e sensação de plenitude aural (ouvido cheio) é a apresentação clássica da Doença de Ménière. A VPPB (A) é uma vertigem posicional, sem os outros sintomas. A Neurite vestibular (B) é uma crise vertiginosa única e intensa, sem sintomas auditivos. A migrânea vestibular (C) está associada à cefaleia.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q3",
            "text": "No caso de suspeita de Doença de Ménière da questão anterior, qual a melhor maneira de confirmar a hipótese diagnóstica?",
            "options": [
                "Realizar manobra de Dix-Hallpike",
                "Realizar eletrococleografia",
                "Realizar Tomografia Computadorizada de mastoides",
                "Realizar Ressonância Magnética de encéfalo"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O diagnóstico da Doença de Ménière é clínico, mas a eletrococleografia é o exame que pode confirmá-lo ao detectar a hidropsia endolinfática (aumento da pressão dos fluidos da orelha interna), mostrando um aumento da relação entre o potencial de somação e o potencial de ação (PS/PA). A manobra de Dix-Hallpike (A) é para VPPB.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q4",
            "text": "Paciente de 8 anos, trazido pela mãe com história de respiração bucal, roncos noturnos e agitação durante o sono. A principal hipótese diagnóstica é:",
            "options": [
                "Rinite alérgica",
                "Hipertrofia adenoamigdaliana",
                "Desvio de septo nasal",
                "Laringomalácia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Em crianças, a principal causa de obstrução nasal crônica, respiração bucal e distúrbios respiratórios do sono (roncos, apneia) é a hipertrofia das tonsilas faríngeas (adenoide) e palatinas (amígdalas).",
            "tag": "Obstrução Nasal"
        },
        {
            "id": "PR2-Otorrino-Q5",
            "text": "Em um paciente com paralisia facial periférica, qual das seguintes afirmações está correta?",
            "options": [
                "A fronte é poupada, com movimentação normal da sobrancelha.",
                "O paciente consegue fechar o olho do lado afetado.",
                "Ocorre desvio da comissura labial para o lado são (não paralisado).",
                "O sulco nasolabial fica mais acentuado do lado paralisado."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Na paralisia facial periférica, toda a hemiface do lado afetado fica paralisada. A musculatura do lado são, sem a oposição da musculatura do lado doente, 'puxa' a boca, causando o desvio da comissura labial para o lado contralateral à lesão.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q6",
            "text": "Qual o principal agente etiológico da Otite Média Aguda (OMA)?",
            "options": [
                "Pseudomonas aeruginosa",
                "Staphylococcus aureus",
                "Streptococcus pneumoniae",
                "Moraxella catarrhalis"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Streptococcus pneumoniae (Pneumococo) é o principal agente bacteriano causador da Otite Média Aguda em todas as faixas etárias, seguido pelo Haemophilus influenzae não tipável.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q7",
            "text": "Criança de 3 anos com febre alta, odinofagia intensa, sialorreia e estridor inspiratório, que adota a 'posição de tripé'. Qual a principal hipótese diagnóstica?",
            "options": [
                "Laringite viral (crupe)",
                "Epiglotite aguda",
                "Abscesso periamigdaliano",
                "Laringomalácia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A epiglotite aguda é uma emergência infecciosa (geralmente por Haemophilus influenzae tipo b) que causa inflamação e edema da epiglote, levando a um quadro de obstrução respiratória alta grave. A aparência toxemiada, febre alta, sialorreia (não consegue engolir) e a posição de tripé para facilitar a respiração são características clássicas.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q8",
            "text": "Qual das seguintes é a complicação mais temida da otite média aguda?",
            "options": [
                "Perfuração timpânica",
                "Mastoidite aguda",
                "Perda auditiva condutiva temporária",
                "Labirintite"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A mastoidite aguda é a complicação mais comum e temida da OMA. Ocorre quando a infecção se dissemina da orelha média para as células aéreas da mastoide, podendo levar a complicações intracranianas graves, como abscesso cerebral e meningite.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q9",
            "text": "Qual a tríade de sintomas da Doença de Ménière?",
            "options": [
                "Vertigem, cefaleia e fotofobia.",
                "Zumbido, otalgia e febre.",
                "Vertigem, zumbido e perda auditiva flutuante.",
                "Otorreia, hipoacusia e paralisia facial."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A tríade clássica que define a Doença de Ménière é composta por episódios de vertigem rotatória, zumbido e perda auditiva neurossensorial flutuante, frequentemente acompanhada de sensação de plenitude aural.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q10",
            "text": "A manobra de Dix-Hallpike é utilizada para diagnosticar qual condição?",
            "options": [
                "Doença de Ménière",
                "Neurite Vestibular",
                "Vertigem Posicional Paroxística Benigna (VPPB)",
                "Migrânea Vestibular"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A manobra de Dix-Hallpike é o teste provocativo padrão-ouro para o diagnóstico da VPPB, principalmente do canal semicircular posterior. A manobra visa deslocar os otólitos dentro do canal e reproduzir a vertigem e o nistagmo característicos.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q11",
            "text": "O que são as linhas de Beau, observadas nas unhas?",
            "options": [
                "São manchas brancas que indicam deficiência de cálcio.",
                "São sulcos transversais que indicam uma interrupção temporária no crescimento da unha devido a uma doença sistêmica grave.",
                "São estrias longitudinais comuns com o envelhecimento.",
                "São pequenas depressões puntiformes associadas à psoríase."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. As linhas de Beau são depressões transversais que surgem na base da unha e avançam com o seu crescimento. Elas representam uma parada temporária na atividade da matriz ungueal, que pode ser causada por doenças sistêmicas agudas, febre alta, quimioterapia ou trauma.",
            "tag": "Semiologia"
        },
        {
            "id": "PR2-Otorrino-Q12",
            "text": "Qual o tratamento de primeira escolha para a Vertigem Posicional Paroxística Benigna (VPPB)?",
            "options": [
                "Medicamentos anti-vertiginosos (ex: betaistina).",
                "Manobra de reposicionamento canalicular (ex: Manobra de Epley).",
                "Cirurgia para remover os otólitos.",
                "Repouso absoluto e restrição de movimentos da cabeça."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento da VPPB é mecânico e não medicamentoso. Consiste em realizar manobras de reposicionamento, como a de Epley, que utilizam a gravidade para mover os otólitos deslocados do canal semicircular de volta para o utrículo, resolvendo os sintomas.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q13",
            "text": "Qual o principal objetivo da adenoamigdalectomia em crianças?",
            "options": [
                "Melhorar a audição.",
                "Prevenir infecções de garganta.",
                "Tratar a obstrução da via aérea superior e a apneia do sono.",
                "Corrigir a respiração bucal por estética."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A principal indicação para a cirurgia de adenoamigdalectomia em crianças é o tratamento dos distúrbios respiratórios do sono (roncos, pausas respiratórias, sono agitado) causados pela obstrução mecânica da via aérea pela hipertrofia dos tecidos.",
            "tag": "Cirurgia"
        },
        {
            "id": "PR2-Otorrino-Q14.1",
            "text": "Qual o tratamento para um abscesso periamigdaliano?",
            "options": [
                "Apenas antibioticoterapia oral.",
                "Gargarejos com anti-inflamatórios.",
                "Drenagem cirúrgica (punção ou incisão) associada à antibioticoterapia.",
                "Amigdalectomia de urgência."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento do abscesso periamigdaliano é mandatoriamente a drenagem do pus acumulado, seja por punção com agulha ou por incisão, associada a antibióticos para tratar a infecção. A amigdalectomia pode ser considerada, mas não é a primeira abordagem de urgência.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q14.2",
            "text": "Qual o principal sinal clínico do abscesso periamigdaliano?",
            "options": [
                "Tosse seca persistente.",
                "Abaulamento do pilar amigdaliano anterior com desvio da úvula para o lado contralateral.",
                "Presença de placas brancas em ambas as amígdalas.",
                "Dor que piora ao deitar."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O acúmulo de pus no espaço periamigdaliano causa um abaulamento visível do palato mole e do pilar anterior, empurrando a amígdala e a úvula para o lado oposto. O trismo (dificuldade de abrir a boca) e a voz 'abatatada' também são característicos.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q15",
            "text": "Qual a definição de Rinossinusite Crônica?",
            "options": [
                "Qualquer quadro de sinusite que dura mais de 4 semanas.",
                "Presença de 4 ou mais episódios de sinusite aguda por ano.",
                "Inflamação dos seios paranasais que persiste por 12 semanas ou mais.",
                "Sinusite que não melhora com o primeiro ciclo de antibiótico."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Rinossinusite Crônica é definida pela presença de sinais e sintomas de inflamação sinusal (obstrução nasal, rinorreia, dor facial, hiposmia) por um período contínuo de 12 semanas ou mais.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q16.1",
            "text": "Paciente de 10 anos com otalgia e febre há 3 dias. Otoscopia: membrana timpânica abaulada, hiperemiada e opaca. Qual o tratamento de escolha?",
            "options": [
                "Apenas observação por 48-72h.",
                "Analgésicos e anti-inflamatórios.",
                "Amoxicilina.",
                "Ciprofloxacino tópico."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A amoxicilina em dose alta é o antibiótico de primeira escolha para o tratamento da Otite Média Aguda (OMA) bacteriana não complicada em crianças, devido à sua eficácia contra o pneumococo.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q16.2",
            "text": "No caso de falha terapêutica da amoxicilina na OMA, qual a próxima escolha de antibiótico?",
            "options": [
                "Aumentar a dose de amoxicilina.",
                "Trocar para cefalexina.",
                "Adicionar um macrolídeo como a azitromicina.",
                "Trocar para amoxicilina com clavulanato."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A falha da amoxicilina geralmente ocorre por bactérias produtoras de beta-lactamase, como o H. influenzae e a M. catarrhalis. A adição do clavulanato (um inibidor de beta-lactamase) à amoxicilina amplia o espectro e supera essa resistência.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q17",
            "text": "Qual a principal causa de epistaxe (sangramento nasal) em crianças e adultos jovens?",
            "options": [
                "Hipertensão arterial.",
                "Tumor nasossinusal.",
                "Trauma digital (manipulação nasal) e ressecamento da mucosa na área de Kiesselbach.",
                "Uso de anticoagulantes."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A grande maioria das epistaxes anteriores origina-se no plexo de Kiesselbach, uma área ricamente vascularizada no septo nasal anterior. O trauma digital e o ressecamento da mucosa são os principais fatores que causam a ruptura desses vasos.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q18",
            "text": "Qual o procedimento de primeira linha para controlar uma epistaxe anterior ativa que não cede à compressão digital?",
            "options": [
                "Tampão nasal posterior.",
                "Embolização arterial.",
                "Cauterização química (com nitrato de prata) ou elétrica do ponto sangrante.",
                "Cirurgia para ligadura arterial."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Se o ponto de sangramento no plexo de Kiesselbach for visível, a cauterização (química ou elétrica) é um método rápido, eficaz e de primeira linha para estancar o sangramento.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q19",
            "text": "Em um paciente com história de longa data de obstrução nasal unilateral, rinorreia purulenta fétida e unilateral, qual diagnóstico deve ser considerado?",
            "options": [
                "Rinite alérgica.",
                "Corpo estranho nasal retido.",
                "Pólipo nasal.",
                "Sinusite fúngica alérgica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A presença de sintomas unilaterais, especialmente rinorreia purulenta e fétida, em uma criança ou mesmo em um adulto, é altamente sugestiva de um corpo estranho retido na cavidade nasal, que leva a uma reação inflamatória e infecciosa local.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q20",
            "text": "O que caracteriza a Otite Média Crônica Colesteatomatosa?",
            "options": [
                "É uma inflamação aguda da orelha média com efusão.",
                "É a presença de uma perfuração timpânica central seca.",
                "É a presença de pele (epitélio escamoso queratinizado) na orelha média, que tem comportamento destrutivo.",
                "É a fibrose da membrana timpânica (timpanoesclerose)."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O colesteatoma é um cisto de pele que cresce na orelha média. Apesar de benigno histologicamente, tem um comportamento agressivo, causando erosão óssea e destruição das estruturas adjacentes, podendo levar a complicações graves. A otorreia fétida é um sintoma comum.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q21.1",
            "text": "Qual o tratamento para a Otite Média Crônica Colesteatomatosa?",
            "options": [
                "Antibióticos orais por longo período.",
                "Gotas otológicas de antibiótico.",
                "Aparelho auditivo.",
                "Cirúrgico (timpanomastoidectomia) para remover todo o colesteatoma."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O tratamento do colesteatoma é sempre cirúrgico. O objetivo é a erradicação completa do tecido doente para prevenir a recorrência e as complicações, e, secundariamente, tentar reconstruir o mecanismo de audição.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q21.2",
            "text": "Na Otite Média Crônica Colesteatomatosa, qual o tipo mais comum de perda auditiva encontrada?",
            "options": [
                "Neurossensorial",
                "Condutiva ou Mista",
                "Central",
                "Funcional"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O colesteatoma destrói a cadeia ossicular (martelo, bigorna e estribo), que é responsável pela transmissão mecânica do som. Isso causa uma perda auditiva do tipo condutiva. Se houver lesão da cóclea por toxinas, a perda pode se tornar mista.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q22",
            "text": "Qual é a definição de surdez súbita?",
            "options": [
                "Qualquer perda auditiva que se instala em menos de 24 horas.",
                "Perda auditiva neurossensorial de pelo menos 30 dB em pelo menos 3 frequências consecutivas, que ocorre em até 72 horas.",
                "Perda auditiva condutiva após um trauma acústico.",
                "Zumbido intenso de início abrupto."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A surdez súbita é definida por esses critérios audiométricos específicos (perda neurossensorial de 30 dB ou mais, em 3 ou mais frequências contíguas, com instalação em até 3 dias). É considerada uma emergência médica.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q23",
            "text": "Qual o tratamento inicial para a surdez súbita idiopática?",
            "options": [
                "Observação e repouso.",
                "Aparelho auditivo de adaptação imediata.",
                "Corticoides sistêmicos em altas doses.",
                "Antibióticos e antivirais."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Embora a causa seja muitas vezes desconhecida, a terapia com corticoides sistêmicos (oral ou intravenoso) em altas doses é o tratamento de primeira linha para a surdez súbita idiopática, devendo ser iniciado o mais precocemente possível para aumentar as chances de recuperação auditiva.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q24.1",
            "text": "Paciente de 60 anos, tabagista e etilista, com rouquidão há mais de 3 meses e um linfonodo cervical endurecido. Qual a principal hipótese diagnóstica?",
            "options": [
                "Laringite crônica por refluxo.",
                "Nódulo vocal.",
                "Pólipo de prega vocal.",
                "Câncer de laringe."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Rouquidão persistente (disfonia) por mais de 2-3 semanas em um paciente com fatores de risco como tabagismo e etilismo é um sinal de alerta para câncer de laringe e exige investigação com laringoscopia. O linfonodo cervical suspeito reforça essa hipótese.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q24.2",
            "text": "Qual exame é mandatório para a investigação da rouquidão persistente no caso da questão anterior?",
            "options": [
                "Tomografia de pescoço.",
                "Ultrassonografia de tireoide.",
                "Laringoscopia (direta ou indireta).",
                "Raio-X de tórax."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A visualização direta das pregas vocais através da laringoscopia (seja com espelho, endoscópio flexível ou rígido) é o exame fundamental e obrigatório para avaliar a anatomia e a mobilidade da laringe e identificar a causa da disfonia.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q25",
            "text": "Qual o tipo histológico mais comum do câncer de laringe?",
            "options": [
                "Adenocarcinoma",
                "Linfoma",
                "Carcinoma de células escamosas (CEC)",
                "Sarcoma"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Mais de 90% dos tumores malignos da laringe são carcinomas de células escamosas (ou espinocelular), diretamente relacionados à exposição da mucosa ao tabaco e ao álcool.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q26",
            "text": "O que é o teste de Weber na avaliação audiológica?",
            "options": [
                "Compara a audição do paciente com a do examinador.",
                "Compara a via aérea com a via óssea no mesmo ouvido.",
                "Verifica para qual lado o som de um diapasão na linha média lateraliza.",
                "Mede a pressão da orelha média."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. No teste de Weber, o diapasão vibrando é colocado na linha média da cabeça do paciente. Em uma perda condutiva, o som lateraliza para o ouvido doente. Em uma perda neurossensorial, lateraliza para o ouvido são.",
            "tag": "Audiologia"
        },
        {
            "id": "PR2-Otorrino-Q27",
            "text": "O que é o teste de Rinne?",
            "options": [
                "Verifica a lateralização do som na linha média.",
                "Compara a condução do som pela via aérea com a condução pela via óssea.",
                "Avalia a presença de nistagmo posicional.",
                "Mede a complacência da membrana timpânica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O teste de Rinne compara o tempo que o paciente ouve o som do diapasão por via aérea (perto do meato acústico) e por via óssea (no mastoide). Um Rinne negativo (via óssea melhor que aérea) é indicativo de perda auditiva condutiva.",
            "tag": "Audiologia"
        },
        {
            "id": "PR2-Otorrino-Q28",
            "text": "A tríade de Samter (ou Doença Respiratória Exacerbada por AAS) é composta por:",
            "options": [
                "Asma, rinite e conjuntivite alérgica.",
                "Asma, polipose nasossinusal e sensibilidade a anti-inflamatórios não esteroides (AINEs).",
                "Sinusite crônica, bronquite e otite.",
                "Dermatite atópica, asma e obstrução nasal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Doença Respiratória Exacerbada por AINEs, ou Tríade de Samter, é uma condição inflamatória crônica caracterizada pela combinação de asma, polipose nasossinusal e reações de hipersensibilidade (broncoespasmo, congestão nasal) após o uso de aspirina ou outros AINEs.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q29",
            "text": "O que é o papiloma invertido nasal?",
            "options": [
                "Uma lesão benigna comum em crianças.",
                "Um tumor benigno com alto potencial de malignização para carcinoma de células escamosas.",
                "Uma infecção viral causada pelo HPV.",
                "Um tipo de pólipo inflamatório."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O papiloma invertido é um tumor benigno, mas localmente agressivo e com alta taxa de recorrência. Sua principal característica é o potencial de transformação maligna para carcinoma de células escamosas em cerca de 5-15% dos casos.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q30.1",
            "text": "Qual o tratamento para a rinite alérgica persistente moderada a grave?",
            "options": [
                "Apenas anti-histamínicos orais.",
                "Descongestionantes nasais de uso contínuo.",
                "Corticoides tópicos nasais.",
                "Antibióticos sistêmicos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Os corticoides tópicos nasais são os medicamentos mais eficazes (primeira linha) para o controle dos sintomas da rinite alérgica persistente, pois atuam em todos os componentes da inflamação alérgica (obstrução, coriza, espirros e prurido).",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q30.2",
            "text": "Quais são os principais achados na rinoscopia de um paciente com rinite alérgica?",
            "options": [
                "Mucosa nasal seca e crostosa.",
                "Perfuração do septo nasal.",
                "Pólipos nasais e secreção purulenta.",
                "Mucosa pálida/violácea, edemaciada e cornetos inferiores hipertrofiados."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Os achados clássicos da rinite alérgica na rinoscopia anterior são a palidez ou coloração violácea da mucosa nasal (devido à congestão venosa), edema (inchaço) e hipertrofia dos cornetos inferiores, com presença de secreção hialina (clara).",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q31",
            "text": "Qual a principal causa da Amigdalite Caseosa (ou tonsilite crônica caseosa)?",
            "options": [
                "Infecção viral aguda.",
                "Acúmulo de restos celulares e bactérias nas criptas amigdalianas.",
                "Refluxo laringofaríngeo.",
                "Reação alérgica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Os cáseos amigdalianos são pequenas massas amareladas e malcheirosas que se formam pelo acúmulo e compactação de restos de células descamadas, muco, restos alimentares e bactérias dentro das criptas (pequenas cavidades) das amígdalas.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q32",
            "text": "O que é o zumbido pulsátil?",
            "options": [
                "É um zumbido que piora com o silêncio.",
                "É um som contínuo em tom agudo.",
                "É um som rítmico, síncrono com os batimentos cardíacos.",
                "É um zumbido que só ocorre durante episódios de vertigem."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O zumbido pulsátil é aquele que o paciente percebe como um som rítmico, que 'pulsa' na mesma frequência dos batimentos cardíacos. Geralmente tem origem vascular e exige investigação para descartar condições como tumores glômicos ou fístulas arteriovenosas.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q33.1",
            "text": "Qual o achado otoscópico da Otite Média Secretora (ou com efusão)?",
            "options": [
                "Membrana timpânica abaulada e hiperemiada.",
                "Perfuração timpânica com otorreia purulenta.",
                "Nível hidroaéreo ou bolhas de ar visíveis através de uma membrana timpânica opaca e retraída.",
                "Membrana timpânica normal."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Otite Média Secretora é caracterizada pela presença de líquido seroso ou mucoide na orelha média, sem sinais de infecção aguda. Na otoscopia, isso se traduz em uma membrana timpânica opaca, muitas vezes retraída, através da qual se pode ver um nível líquido ou bolhas.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q33.2",
            "text": "Qual o tratamento de primeira linha para a Otite Média Secretora persistente em crianças, após falha do tratamento clínico?",
            "options": [
                "Adenoidectomia.",
                "Antibioticoterapia prolongada.",
                "Miringotomia com colocação de tubo de ventilação.",
                "Uso de corticoides nasais."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Quando a efusão na orelha média persiste por mais de 3 meses e causa perda auditiva, a conduta é a miringotomia (uma pequena incisão na membrana timpânica) com a inserção de um tubo de ventilação (carretel) para equalizar a pressão e permitir a drenagem do líquido.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q34",
            "text": "O que é o reflexo vestíbulo-ocular (RVO)?",
            "options": [
                "É a contração da pupila em resposta à luz.",
                "É o movimento dos olhos em direção a um som.",
                "É um reflexo que estabiliza o olhar durante os movimentos da cabeça, movendo os olhos na direção oposta.",
                "É o piscar dos olhos em resposta a um estímulo tátil na córnea."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O RVO é um reflexo fundamental para manter a visão nítida durante o movimento. Quando a cabeça se move em uma direção, os canais semicirculares detectam essa aceleração e enviam um sinal para que os olhos se movam na direção oposta, na mesma velocidade, mantendo a imagem estável na retina.",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q35.1",
            "text": "Em um paciente com paralisia facial periférica, o que o teste de Schirmer avalia?",
            "options": [
                "A função do músculo estapédio.",
                "A gustação nos dois terços anteriores da língua.",
                "A secreção salivar.",
                "A secreção lacrimal."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O teste de Schirmer mede a produção de lágrima. O nervo facial carrega as fibras parassimpáticas para a glândula lacrimal. Uma diminuição acentuada da lacrimação no lado paralisado indica uma lesão mais proximal do nervo, acima do gânglio geniculado.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q35.2",
            "text": "A ausência do reflexo estapediano em um paciente com paralisia facial indica uma lesão do nervo facial em que ponto?",
            "options": [
                "Distal à emergência do nervo para o músculo estapédio.",
                "Proximal à emergência do nervo para o músculo estapédio.",
                "No forame estilomastoideo.",
                "No meato acústico interno."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O nervo estapediano é um ramo do nervo facial que inerva o músculo estapédio. Se o reflexo estiver ausente, significa que a lesão do nervo facial ocorreu antes (proximal) da saída deste ramo.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q36",
            "text": "O que é disfonia espasmódica?",
            "options": [
                "É a rouquidão causada por nódulos vocais.",
                "É uma distonia focal da laringe que causa uma voz tensa, estrangulada ou soprosa.",
                "É a perda da voz por causas psicológicas (afonia de conversão).",
                "É a paralisia de uma prega vocal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A disfonia espasmódica é um distúrbio neurológico do movimento que afeta os músculos da laringe. Causa contrações involuntárias durante a fala, resultando em uma qualidade vocal de esforço, tensa e com quebras.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q37.1",
            "text": "Criança de 2 anos com estridor inspiratório bifásico, que piora com o choro e melhora em prono. Qual a principal hipótese?",
            "options": [
                "Laringite aguda",
                "Corpo estranho",
                "Laringomalácia",
                "Estenose subglótica"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A laringomalácia é a causa mais comum de estridor na infância. É causada pela imaturidade das cartilagens da laringe, que colapsam durante a inspiração. O estridor tipicamente piora com o esforço e melhora com o decúbito ventral.",
            "tag": "Laringologia Pediátrica"
        },
        {
            "id": "PR2-Otorrino-Q37.2",
            "text": "Qual o exame padrão-ouro para o diagnóstico de laringomalácia?",
            "options": [
                "Raio-X cervical",
                "Tomografia de pescoço",
                "Nasofibrolaringoscopia flexível com o paciente acordado",
                "Laringoscopia direta sob anestesia geral"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O diagnóstico da laringomalácia é feito pela visualização direta do colapso das estruturas supraglóticas durante a inspiração. Isso é melhor observado com uma nasofibrolaringoscopia flexível, realizada com a criança acordada e respirando espontaneamente.",
            "tag": "Laringologia Pediátrica"
        },
        {
            "id": "PR2-Otorrino-Q38.1",
            "text": "O que é o Mucocele de seio paranasal?",
            "options": [
                "É um tumor maligno dos seios da face.",
                "É uma coleção de pus dentro de um seio paranasal.",
                "É um cisto de retenção de muco que expande e remodela as paredes ósseas de um seio paranasal cronicamente obstruído.",
                "É uma infecção fúngica."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A mucocele se forma quando o óstio de drenagem de um seio paranasal é obstruído cronicamente. A secreção mucosa normal fica aprisionada, acumulando-se e expandindo lentamente o seio, o que pode causar erosão óssea e compressão de estruturas adjacentes.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q38.2",
            "text": "Qual o seio paranasal mais acometido pela mucocele?",
            "options": [
                "Maxilar",
                "Etmoidal",
                "Esfenoidal",
                "Frontal"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O seio frontal é o local mais comum para o desenvolvimento de mucoceles, seguido pelo seio etmoidal.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q39",
            "text": "O que é a Síndrome de Eagle?",
            "options": [
                "É a dor facial causada pela neuralgia do trigêmeo.",
                "É a dor de garganta, pescoço ou facial causada por um processo estiloide alongado ou pela calcificação do ligamento estilo-hioideo.",
                "É a inflamação da articulação temporomandibular.",
                "É um tipo de cefaleia tensional."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Síndrome de Eagle é uma condição rara em que o alongamento do processo estiloide ou a calcificação do ligamento estilo-hioideo pode comprimir ou irritar estruturas neurovasculares adjacentes no pescoço, causando dor, disfagia e sensação de corpo estranho na garganta.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q40",
            "text": "Qual a principal função da tuba auditiva (trompa de Eustáquio)?",
            "options": [
                "Produzir cerúmen.",
                "Amplificar o som.",
                "Equalizar a pressão da orelha média com a pressão do ambiente e permitir a drenagem de secreções.",
                "Converter a energia sonora em impulso elétrico."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A tuba auditiva conecta a orelha média à nasofaringe e tem três funções principais: ventilação e equalização da pressão, proteção contra secreções da nasofaringe e drenagem (clearance) de secreções da orelha média.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q41",
            "text": "A disfunção da tuba auditiva é o principal fator na fisiopatologia de qual doença?",
            "options": [
                "Surdez súbita",
                "Otite Média (Aguda e Secretora)",
                "Presbiacusia",
                "Zumbido"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A disfunção tubária leva a uma pressão negativa na orelha média, o que pode causar a retração da membrana timpânica e o acúmulo de líquido (efusão), criando o ambiente propício para a Otite Média Secretora e a Otite Média Aguda.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q42.1",
            "text": "O que é o Angiofibroma Nasofaríngeo Juvenil (ANJ)?",
            "options": [
                "É um tumor maligno comum em meninas.",
                "É um tumor vascular benigno, mas localmente agressivo, que ocorre quase exclusivamente em meninos adolescentes.",
                "É um tipo de pólipo nasal inflamatório.",
                "É uma malformação arteriovenosa."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O ANJ é um tumor benigno altamente vascularizado que se origina na nasofaringe de adolescentes do sexo masculino. Apesar de benigno, tem um comportamento agressivo, podendo invadir estruturas adjacentes como a base do crânio.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q42.2",
            "text": "Qual o sintoma de apresentação mais comum do Angiofibroma Nasofaríngeo Juvenil?",
            "options": [
                "Dor de cabeça",
                "Perda de olfato",
                "Epistaxe recorrente e unilateral e obstrução nasal",
                "Alterações visuais"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Devido à sua natureza altamente vascular e à sua localização na nasofaringe, os sintomas cardinais do ANJ são a obstrução nasal progressiva e a epistaxe (sangramento nasal) recorrente, profusa e unilateral em um adolescente do sexo masculino.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q43",
            "text": "O que é a Rinite Medicamentosa?",
            "options": [
                "É uma alergia a um medicamento oral.",
                "É a congestão nasal de rebote causada pelo uso excessivo e prolongado de descongestionantes nasais tópicos (vasoconstritores).",
                "É a inflamação nasal causada pelo uso de corticoides.",
                "É a coriza causada por medicamentos anti-hipertensivos."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O uso contínuo de descongestionantes tópicos (como oximetazolina, nafazolina) por mais de 3-5 dias leva a um fenômeno de taquifilaxia, onde o efeito do remédio diminui e a congestão nasal piora quando o efeito passa, criando um ciclo vicioso de uso.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q44",
            "text": "Qual a causa mais comum de perda auditiva em adultos e idosos?",
            "options": [
                "Otite média crônica",
                "Otosclerose",
                "Presbiacusia",
                "Trauma acústico"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A presbiacusia é a perda auditiva neurossensorial, bilateral e simétrica, que ocorre de forma progressiva com o envelhecimento. Afeta principalmente as frequências altas (agudas) e é a causa mais prevalente de deficiência auditiva em idosos.",
            "tag": "Audiologia"
        },
        {
            "id": "PR2-Otorrino-Q45.1",
            "text": "O que é a Otosclerose?",
            "options": [
                "É o envelhecimento natural do sistema auditivo.",
                "É uma doença da orelha externa que causa estenose do canal.",
                "É uma doença óssea da cápsula ótica que causa a fixação do estribo na janela oval, levando à perda auditiva condutiva.",
                "É um tumor do nervo auditivo."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Otosclerose é uma osteodistrofia focal da cápsula ótica, de caráter hereditário, que resulta na fixação do estribo. Isso impede a transmissão adequada das vibrações sonoras para a orelha interna, causando uma perda auditiva condutiva progressiva.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q45.2",
            "text": "Qual o tratamento cirúrgico para a Otosclerose?",
            "options": [
                "Timpanoplastia",
                "Miringotomia com tubo de ventilação",
                "Estapedectomia ou Estapedotomia",
                "Mastoidectomia"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento cirúrgico da otosclerose consiste na remoção do estribo fixo (estapedectomia) ou na criação de um pequeno orifício na sua platina (estapedotomia) e na interposição de uma prótese para restabelecer a condução do som.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q46",
            "text": "Criança de 5 anos com febre, odinofagia, e linfonodomegalia cervical. Oroscopia mostra amígdalas hiperemiadas com exsudato purulento. O teste rápido para Estreptococo é positivo. Qual o tratamento de escolha?",
            "options": [
                "Apenas anti-inflamatórios.",
                "Amoxicilina.",
                "Azitromicina.",
                "Observação."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A faringoamigdalite bacteriana causada pelo Streptococcus pyogenes (Estreptococo do Grupo A) deve ser tratada com antibióticos para prevenir complicações como a febre reumática. A penicilina (ou amoxicilina) é a droga de primeira escolha.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q47",
            "text": "O que são os critérios de Centor?",
            "options": [
                "São critérios para indicar a cirurgia de amígdalas.",
                "São critérios clínicos para predizer a probabilidade de faringite estreptocócica e guiar o tratamento.",
                "São critérios para classificar a gravidade da apneia do sono.",
                "São critérios para diagnosticar a Doença de Ménière."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Os critérios de Centor (ou McIsaac, na versão modificada) são um escore clínico que ajuda a estimar a probabilidade de uma faringite ser causada pelo Estreptococo do Grupo A. Os critérios incluem: febre, ausência de tosse, exsudato amigdaliano e linfonodos cervicais anteriores dolorosos.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q48.1",
            "text": "O que é a Paralisia de Bell?",
            "options": [
                "É a paralisia facial causada por um tumor cerebral.",
                "É a paralisia facial periférica idiopática.",
                "É a paralisia facial que ocorre após um AVC.",
                "É a paralisia facial associada a vesículas no ouvido."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Paralisia de Bell é o diagnóstico dado à paralisia facial periférica aguda quando todas as outras causas (infecciosas, traumáticas, tumorais) foram excluídas. Acredita-se que seja causada pela reativação do vírus herpes simples tipo 1.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q48.2",
            "text": "Qual o tratamento para a Paralisia de Bell?",
            "options": [
                "Apenas fisioterapia.",
                "Antibióticos.",
                "Antivirais isoladamente.",
                "Corticoides (prednisona) iniciados precocemente, podendo-se associar antivirais."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O tratamento padrão para a Paralisia de Bell, que visa acelerar a recuperação e diminuir a chance de sequelas, é o uso de corticoides sistêmicos (ex: prednisona) iniciados nos primeiros 3 dias. A associação com um antiviral (ex: aciclovir) é controversa, mas frequentemente utilizada.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q49",
            "text": "O que é o Refluxo Laringofaríngeo (RLF)?",
            "options": [
                "É a azia que sobe até a garganta.",
                "É o retorno do conteúdo gástrico até a laringe e faringe, causando sintomas como pigarro, tosse crônica, rouquidão e globus faríngeo.",
                "É uma infecção da laringe.",
                "É uma alergia alimentar."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O RLF é uma variante da doença do refluxo gastroesofágico em que o material refluído atinge o trato aerodigestivo superior. A mucosa da laringe é muito sensível ao ácido e à pepsina, resultando em sintomas atípicos, predominantemente laríngeos e faríngeos, muitas vezes sem a queixa clássica de azia.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q50",
            "text": "Qual das seguintes opções NÃO é uma função do nariz?",
            "options": [
                "Fonação",
                "Respiração",
                "Filtração, aquecimento e umidificação do ar",
                "Olfato"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A fonação (produção da voz) ocorre na laringe, com a vibração das pregas vocais. O nariz atua como uma caixa de ressonância, modificando o som (rinolalia), mas não o produz.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q51",
            "text": "O que é o anel linfático de Waldeyer?",
            "options": [
                "É um conjunto de linfonodos no pescoço.",
                "É o tecido linfoide localizado na entrada do trato aerodigestivo, composto pelas tonsilas palatinas, faríngea (adenoide) e linguais.",
                "É o sistema de drenagem linfática da laringe.",
                "É uma cadeia de linfonodos no mediastino."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O anel de Waldeyer é um anel de tecido linfoide que circunda a nasofaringe e a orofaringe, formando a primeira linha de defesa imunológica contra patógenos inalados e ingeridos.",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Otorrino-Q52",
            "text": "Qual é a causa mais comum de perda auditiva condutiva em adultos?",
            "options": [
                "Otosclerose",
                "Perfuração timpânica",
                "Otite Média Secretora",
                "Rolha de cerúmen"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A impactação de cerúmen no conduto auditivo externo é uma causa extremamente comum e facilmente reversível de perda auditiva condutiva em adultos.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q53",
            "text": "O que é a Síndrome da Apneia Obstrutiva do Sono (SAOS)?",
            "options": [
                "É a dificuldade de iniciar o sono.",
                "São episódios de ronco alto durante a noite.",
                "São episódios recorrentes de obstrução da via aérea superior durante o sono, levando a pausas respiratórias e dessaturação de oxigénio.",
                "É o movimento excessivo das pernas durante o sono."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A SAOS é um distúrbio respiratório do sono caracterizado pelo colapso repetitivo da faringe, que interrompe a ventilação e fragmenta o sono, resultando em sonolência diurna e aumento do risco cardiovascular.",
            "tag": "Distúrbios do Sono"
        },
        {
            "id": "PR2-Otorrino-Q54",
            "text": "Qual o exame padrão-ouro para o diagnóstico da Apneia do Sono?",
            "options": [
                "Tomografia de seios paranasais",
                "Laringoscopia",
                "Polissonografia",
                "Eletroencefalograma"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A polissonografia é o exame padrão-ouro que monitora diversas variáveis fisiológicas durante o sono (atividade cerebral, fluxo aéreo, esforço respiratório, oximetria, etc.), permitindo diagnosticar e quantificar a gravidade da SAOS.",
            "tag": "Distúrbios do Sono"
        },
        {
            "id": "PR2-Otorrino-Q55.1",
            "text": "Criança de 6 anos com corpo estranho no ouvido. Qual a conduta correta?",
            "options": [
                "Tentar remover com pinça em casa.",
                "Lavar o ouvido com água em alta pressão.",
                "Remoção sob visualização direta por um médico, preferencialmente com microscópio e instrumentos adequados.",
                "Aguardar a expulsão espontânea."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A remoção de corpo estranho do ouvido deve ser feita por um profissional, com boa iluminação e instrumentação adequada, para evitar lesões na pele do conduto, na membrana timpânica ou na cadeia ossicular. Tentativas leigas de remoção são perigosas.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q55.2",
            "text": "Se o corpo estranho no ouvido for uma pilha, qual o risco associado?",
            "options": [
                "Nenhum risco adicional.",
                "Apenas a obstrução do canal auditivo.",
                "Risco de necrose por liquefação e queimadura química devido ao vazamento do conteúdo alcalino.",
                "Risco de infecção por fungos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A pilha em contato com a umidade do conduto auditivo pode vazar seu conteúdo alcalino, causando uma queimadura química grave e necrose dos tecidos. É uma emergência e requer remoção imediata.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q56.1",
            "text": "O que é a Otite Externa Maligna?",
            "options": [
                "É um tumor maligno do conduto auditivo externo.",
                "É uma forma grave e necrosante de otite externa, geralmente causada por Pseudomonas aeruginosa, que afeta principalmente idosos diabéticos ou imunocomprometidos.",
                "É uma infecção fúngica do ouvido.",
                "É a complicação de uma otite média crônica."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Otite Externa Necrosante (ou maligna) é uma osteomielite da base do crânio que se inicia como uma otite externa. É uma infecção invasiva e potencialmente fatal que requer diagnóstico precoce e tratamento agressivo com antibióticos intravenosos.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q56.2",
            "text": "Qual o principal sinal clínico que levanta a suspeita de Otite Externa Maligna em um paciente de risco?",
            "options": [
                "Prurido no ouvido.",
                "Presença de cerúmen.",
                "Otalgia intensa e desproporcional aos achados da otoscopia, com presença de tecido de granulação no assoalho do conduto.",
                "Perda auditiva súbita."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A dor (otalgia) severa e a presença de tecido de granulação na junção osteocartilaginosa do conduto auditivo externo são os sinais de alerta para a Otite Externa Maligna. A paralisia facial pode ser uma complicação.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q57",
            "text": "O que é o Schwanoma Vestibular (Neurinoma do Acústico)?",
            "options": [
                "É um tumor maligno do nervo auditivo.",
                "É um tumor benigno que se origina das células de Schwann do nervo vestibular (ramo do VIII par craniano).",
                "É uma inflamação do nervo vestibular.",
                "É uma coleção de líquido na orelha interna."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Schwanoma Vestibular é um tumor benigno de crescimento lento que se desenvolve no nervo vestibular, dentro do meato acústico interno. Causa sintomas por compressão do próprio nervo vestibular e do nervo coclear adjacente.",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q58",
            "text": "Qual o sintoma de apresentação mais comum do Schwanoma Vestibular?",
            "options": [
                "Vertigem rotatória intensa.",
                "Perda auditiva neurossensorial unilateral e progressiva, muitas vezes acompanhada de zumbido.",
                "Paralisia facial súbita.",
                "Cefaleia."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O sintoma mais comum e inicial do Schwanoma Vestibular é a perda auditiva neurossensorial assimétrica e progressiva, associada a zumbido. A vertigem é menos comum e geralmente se manifesta como desequilíbrio, não como crises rotatórias.",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q59",
            "text": "Qual o exame padrão-ouro para o diagnóstico do Schwanoma Vestibular?",
            "options": [
                "Audiometria",
                "Tomografia de mastoides",
                "Ressonância Magnética de encéfalo com contraste (gadolínio)",
                "Potencial Evocado Auditivo de Tronco Encefálico (PEATE/BERA)"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Ressonância Magnética com gadolínio é o exame de imagem de escolha para o diagnóstico do Schwanoma Vestibular, pois mostra o tumor realçando intensamente com o contraste no meato acústico interno ou no ângulo ponto-cerebelar.",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q60",
            "text": "O que é a Laringite por Refluxo?",
            "options": [
                "É uma infecção viral da laringe.",
                "É a inflamação da mucosa da laringe causada pela exposição ao conteúdo gástrico refluído.",
                "É uma lesão pré-cancerosa.",
                "É a paralisia das pregas vocais."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Na Laringite por Refluxo (parte do Refluxo Laringofaríngeo), o ácido e a pepsina do estômago refluem até a laringe, causando inflamação crônica, edema e hiperemia da região posterior da laringe, resultando em sintomas como pigarro, rouquidão e tosse.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q61",
            "text": "Qual das seguintes lesões de prega vocal NÃO é tipicamente associada ao fonotrauma (abuso vocal)?",
            "options": [
                "Nódulos vocais ('calos')",
                "Pólipos vocais",
                "Edema de Reinke",
                "Leucoplasia"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Leucoplasia é uma placa branca na prega vocal que representa uma lesão do epitélio, sendo considerada uma lesão pré-maligna, fortemente associada ao tabagismo. Nódulos, pólipos e Edema de Reinke são lesões benignas relacionadas ao trauma mecânico da fonação.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q62",
            "text": "O que são os nódulos vocais?",
            "options": [
                "São tumores malignos das pregas vocais.",
                "São lesões inflamatórias agudas.",
                "São espessamentos bilaterais e simétricos na junção do terço anterior com o terço médio das pregas vocais, causados por fonotrauma crônico.",
                "São cistos cheios de muco."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Os nódulos vocais, popularmente conhecidos como 'calos', são lesões benignas que se formam na área de maior impacto vibratório das pregas vocais devido ao abuso ou mau uso crônico da voz.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q63",
            "text": "Qual o tratamento de primeira linha para os nódulos vocais?",
            "options": [
                "Cirurgia para remoção dos nódulos.",
                "Repouso vocal absoluto.",
                "Terapia fonoaudiológica (fonoterapia).",
                "Injeção de toxina botulínica."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento dos nódulos vocais é primariamente comportamental. A fonoterapia visa reeducar o paciente sobre o uso correto da voz, eliminar os comportamentos de abuso vocal e melhorar a técnica fonatória, o que leva à regressão dos nódulos na maioria dos casos.",
            "tag": "Laringologia"
        },
        {
            "id": "PR2-Otorrino-Q64.1",
            "text": "Qual o nome da condição em que há uma perfuração na membrana timpânica?",
            "options": [
                "Otite externa",
                "Timpanosclerose",
                "Otite média crônica simples",
                "Colesteatoma"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Otite Média Crônica Simples (ou não colesteatomatosa) é caracterizada pela presença de uma perfuração permanente na membrana timpânica e episódios recorrentes de otorreia não fétida, geralmente durante infecções de vias aéreas superiores.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q64.2",
            "text": "Qual a principal causa de perfuração da membrana timpânica?",
            "options": [
                "Infecções de repetição (Otite Média Aguda) e trauma.",
                "Exposição a ruído alto.",
                "Alergias.",
                "Refluxo."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. As perfurações timpânicas ocorrem mais comumente como uma sequela de otites médias agudas de repetição (onde a pressão do pus perfura o tímpano) ou por trauma direto (ex: cotonete, tapa no ouvido) ou barotrauma.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q65",
            "text": "O que é o teste da oximetria noturna?",
            "options": [
                "Mede os níveis de glicose durante o sono.",
                "É um exame de triagem para a apneia do sono que mede a saturação de oxigénio e a frequência cardíaca durante a noite.",
                "Avalia os estágios do sono.",
                "Detecta movimentos das pernas."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A oximetria noturna é um exame simplificado que pode ser usado como triagem para a SAOS. Pacientes com apneia obstrutiva apresentam quedas recorrentes na saturação de oxigénio durante os eventos respiratórios, que são registadas pelo aparelho.",
            "tag": "Distúrbios do Sono"
        },
        {
            "id": "PR2-Otorrino-Q66",
            "text": "Qual o tratamento padrão-ouro para a Apneia Obstrutiva do Sono moderada a grave?",
            "options": [
                "Cirurgia de uvulopalatofaringoplastia.",
                "Aparelho intraoral.",
                "CPAP (Pressão Positiva Contínua nas Vias Aéreas).",
                "Perda de peso e fonoterapia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O CPAP é um aparelho que gera um fluxo de ar contínuo através de uma máscara, criando uma pressão positiva que impede o colapso da faringe durante o sono. É o tratamento mais eficaz para a SAOS moderada a grave.",
            "tag": "Distúrbios do Sono"
        },
        {
            "id": "PR2-Otorrino-Q67",
            "text": "O que é a Síndrome de Sjogren?",
            "options": [
                "É uma doença que causa vertigem e zumbido.",
                "É uma doença autoimune sistémica que afeta principalmente as glândulas exócrinas, causando secura (xerostomia e xeroftalmia).",
                "É um tipo de linfoma de glândula salivar.",
                "É uma infecção viral das parótidas."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Síndrome de Sjogren é uma exocrinopatia autoimune em que linfócitos atacam as glândulas salivares e lacrimais, levando aos sintomas clássicos de boca seca (xerostomia) e olho seco (xeroftalmia ou ceratoconjuntivite sicca).",
            "tag": "Glândulas Salivares"
        },
        {
            "id": "PR2-Otorrino-Q68.1",
            "text": "Qual o tumor benigno mais comum das glândulas salivares?",
            "options": [
                "Tumor de Warthin",
                "Carcinoma mucoepidermoide",
                "Adenoma pleomórfico",
                "Carcinoma adenoide cístico"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Adenoma Pleomórfico (ou tumor misto benigno) é, de longe, o tumor benigno mais comum das glândulas salivares, acometendo principalmente a glândula parótida.",
            "tag": "Glândulas Salivares"
        },
        {
            "id": "PR2-Otorrino-Q68.2",
            "text": "Qual o tumor maligno mais comum das glândulas salivares?",
            "options": [
                "Adenoma pleomórfico",
                "Carcinoma mucoepidermoide",
                "Tumor de Warthin",
                "Carcinoma adenoide cístico"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Carcinoma Mucoepidermoide é o tumor maligno mais frequente das glândulas salivares, tanto em adultos quanto em crianças, também sendo mais comum na parótida.",
            "tag": "Glândulas Salivares"
        },
        {
            "id": "PR2-Otorrino-Q69",
            "text": "Na parotidectomia, qual estrutura nervosa deve ser cuidadosamente identificada e preservada?",
            "options": [
                "Nervo vago (X par)",
                "Nervo hipoglosso (XII par)",
                "Nervo facial (VII par)",
                "Plexo cervical"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O nervo facial e seus ramos atravessam o parênquima da glândula parótida. A sua identificação e dissecção meticulosa são o passo mais crítico da parotidectomia para evitar uma paralisia facial iatrogénica.",
            "tag": "Cirurgia"
        },
        {
            "id": "PR2-Otorrino-Q70",
            "text": "O que é a Síndrome de Frey?",
            "options": [
                "É a paralisia facial após uma parotidectomia.",
                "É a gustação fantasma após uma cirurgia de amígdalas.",
                "É a sudorese e rubor na região da parótida durante a alimentação, que pode ocorrer como sequela de uma parotidectomia.",
                "É a boca seca após radioterapia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Síndrome de Frey, ou sudorese gustatória, ocorre por uma regeneração anómala das fibras nervosas parassimpáticas (que deveriam inervar a glândula parótida) para as glândulas sudoríparas da pele. Assim, o estímulo da alimentação que deveria causar salivação acaba por causar suor na face.",
            "tag": "Cirurgia"
        },
        {
            "id": "PR2-Otorrino-Q71",
            "text": "Qual o local mais comum de impactação de corpos estranhos no esófago em adultos?",
            "options": [
                "No nível do cricofaríngeo (esfíncter esofágico superior).",
                "No nível do arco aórtico.",
                "No nível do brônquio principal esquerdo.",
                "Na junção gastroesofágica."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O músculo cricofaríngeo é o ponto mais estreito do esófago e o local mais comum de impactação de corpos estranhos, como espinhas de peixe ou pedaços de carne.",
            "tag": "Corpo Estranho"
        },
        {
            "id": "PR2-Otorrino-Q72.1",
            "text": "Qual a causa mais comum de estridor na infância?",
            "options": [
                "Laringomalácia",
                "Epiglotite",
                "Corpo estranho",
                "Laringite viral (crupe)"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A laringomalácia é a anomalia congénita mais comum da laringe e a principal causa de estridor em lactentes, caracterizada pelo colapso inspiratório das estruturas supraglóticas.",
            "tag": "Laringologia Pediátrica"
        },
        {
            "id": "PR2-Otorrino-Q72.2",
            "text": "Qual a causa mais comum de rouquidão na infância?",
            "options": [
                "Papilomatose laríngea",
                "Nódulos vocais",
                "Cistos de prega vocal",
                "Refluxo laringofaríngeo"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Assim como nos adultos, os nódulos vocais ('calos') são a causa mais comum de disfonia (rouquidão) crónica em crianças, devido ao comportamento de abuso vocal (gritar, etc.).",
            "tag": "Laringologia Pediátrica"
        },
        {
            "id": "PR2-Otorrino-Q73.1",
            "text": "Criança de 2 anos com tosse 'de cão' ou 'metálica', estridor inspiratório e febre baixa, com início gradual. Qual o diagnóstico?",
            "options": [
                "Epiglotite",
                "Laringite viral (crupe)",
                "Bronquiolite",
                "Asma"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O crupe viral, ou laringotraqueíte, é uma infecção viral (geralmente parainfluenza) que causa inflamação na região subglótica. A tosse ladrante (de cão), o estridor inspiratório e a rouquidão são a tríade clássica.",
            "tag": "Laringologia Pediátrica"
        },
        {
            "id": "PR2-Otorrino-Q73.2",
            "text": "Qual o tratamento para a laringite viral (crupe) moderada a grave?",
            "options": [
                "Apenas vaporização.",
                "Antibióticos.",
                "Corticoides (oral ou inalatório) e nebulização com adrenalina.",
                "Broncodilatadores."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento do crupe visa reduzir o edema da via aérea. Os corticoides têm efeito anti-inflamatório e são a base do tratamento. A nebulização com adrenalina racémica é usada nos casos de estridor em repouso (moderado/grave) pelo seu efeito vasoconstritor rápido, que alivia a obstrução.",
            "tag": "Laringologia Pediátrica"
        },
        {
            "id": "PR2-Otorrino-Q74",
            "text": "Qual o nome da condição em que há uma perfuração no septo nasal?",
            "options": [
                "Sinéquia nasal",
                "Atresia coanal",
                "Perfuração septal",
                "Desvio de septo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A perfuração septal é uma comunicação entre as duas fossas nasais através do septo. As causas incluem trauma, cirurgia prévia, uso de cocaína, doenças granulomatosas e uso excessivo de vasoconstritores tópicos.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q75",
            "text": "O que é o teste de impulso da cabeça (Head Impulse Test)?",
            "options": [
                "É um teste para avaliar a função do nervo óptico.",
                "É um teste clínico à beira do leito para avaliar o reflexo vestíbulo-ocular (RVO).",
                "É uma manobra para tratar a VPPB.",
                "É um teste para detetar nistagmo espontâneo."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O Head Impulse Test avalia a função do RVO. O examinador realiza movimentos rápidos e imprevisíveis da cabeça do paciente enquanto este fixa o olhar no nariz do examinador. Em uma lesão vestibular periférica (ex: neurite), o olho do lado lesado perde a fixação e realiza uma sacada corretiva para refixar o alvo.",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q76",
            "text": "Qual a tríade de HINTS (Head Impulse, Nystagmus, Test of Skew), e para que serve?",
            "options": [
                "Serve para diagnosticar a Doença de Ménière.",
                "Serve para diferenciar uma vertigem de origem central (ex: AVC de fossa posterior) de uma periférica (ex: neurite vestibular).",
                "Serve para avaliar o risco de queda em idosos.",
                "Serve para diagnosticar a VPPB."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O exame HINTS é uma bateria de três testes oculomotores que, quando realizados em um paciente com síndrome vestibular aguda, tem alta sensibilidade e especificidade para diferenciar um AVC de fossa posterior (causa central) de uma neurite vestibular (causa periférica). Um HINTS tranquilizador (sugestivo de causa periférica) é: impulso da cabeça anormal, nistagmo unidirecional e ausência de desvio skew.",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q77",
            "text": "O que é a Rinite Gustatória?",
            "options": [
                "É uma alergia a certos alimentos.",
                "É a coriza aquosa que ocorre após a ingestão de alimentos, especialmente os quentes ou picantes.",
                "É a perda de olfato para alimentos.",
                "É a congestão nasal causada pelo cheiro de comida."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Rinite Gustatória é uma forma de rinite não alérgica caracterizada por rinorreia aquosa proeminente que é desencadeada pela alimentação, mediada por um reflexo neurogénico.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q78",
            "text": "Qual o tratamento para a epistaxe posterior?",
            "options": [
                "Apenas compressão digital.",
                "Cauterização química.",
                "Tampão nasal anterior.",
                "Tampão nasal posterior (ex: sonda de Foley ou tampão específico) e/ou tratamento cirúrgico/embolização."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A epistaxe posterior é mais grave e não pode ser controlada com medidas anteriores. Requer a colocação de um tampão posterior para bloquear a coana, geralmente associado a um tampão anterior. Casos refratários podem necessitar de ligadura arterial endoscópica ou embolização.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q79",
            "text": "O que é o exame de Emissões Otoacústicas (teste da orelhinha)?",
            "options": [
                "É a triagem auditiva neonatal que avalia a função das células ciliadas externas da cóclea.",
                "Mede a audição em crianças mais velhas.",
                "Avalia a integridade da membrana timpânica.",
                "Diagnostica a otite média."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O teste de Emissões Otoacústicas é o principal método de triagem auditiva neonatal. Ele detecta a resposta sonora de baixa intensidade produzida pelas células ciliadas externas da cóclea em resposta a um estímulo sonoro, indicando que a orelha interna está a funcionar.",
            "tag": "Audiologia"
        },
        {
            "id": "PR2-Otorrino-Q80.1",
            "text": "Paciente de 75 anos com perda auditiva progressiva, principalmente para sons agudos, e dificuldade de entender a fala em ambientes ruidosos. Qual o diagnóstico?",
            "options": [
                "Otosclerose",
                "Surdez súbita",
                "Presbiacusia",
                "Doença de Ménière"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro descrito é a apresentação típica da presbiacusia, a perda auditiva relacionada ao envelhecimento, que é neurossensorial, bilateral, simétrica e afeta predominantemente as altas frequências, prejudicando a discriminação da fala.",
            "tag": "Audiologia"
        },
        {
            "id": "PR2-Otorrino-Q80.2",
            "text": "Qual a principal conduta para a presbiacusia?",
            "options": [
                "Cirurgia para reconstruir a cóclea.",
                "Medicamentos para regenerar as células ciliadas.",
                "Reabilitação auditiva com o uso de aparelhos de amplificação sonora individual (AASI).",
                "Terapia fonoaudiológica para treinar a leitura labial."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Não há tratamento para reverter a presbiacusia. A reabilitação é feita através da adaptação de aparelhos auditivos, que amplificam o som para compensar a perda auditiva e melhorar a comunicação e a qualidade de vida do paciente.",
            "tag": "Audiologia"
        },
        {
            "id": "PR2-Otorrino-Q81.1",
            "text": "Criança de 10 anos com otalgia intensa, febre e edema retroauricular com descolamento do pavilhão auricular. Qual a principal hipótese?",
            "options": [
                "Otite externa difusa",
                "Otite média aguda",
                "Mastoidite aguda coalescente",
                "Furunculose do conduto"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Mastoidite Aguda é uma complicação da OMA. O edema e a hiperemia retroauricular, com apagamento do sulco e deslocamento do pavilhão auricular para a frente e para baixo, são sinais clássicos de que a infecção se estendeu para a mastoide e formou um abscesso subperiosteal.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q81.2",
            "text": "Qual o tratamento para a mastoidite aguda coalescente?",
            "options": [
                "Apenas antibiótico oral.",
                "Drenagem do abscesso e antibioticoterapia venosa, frequentemente associada a mastoidectomia.",
                "Colírios antibióticos.",
                "Observação."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A mastoidite coalescente é uma emergência cirúrgica. O tratamento envolve a drenagem do abscesso (seja por miringotomia com ou sem colocação de dreno, ou por via retroauricular) e antibioticoterapia intravenosa de amplo espectro. A mastoidectomia (remoção cirúrgica das células infectadas) é frequentemente necessária.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q82",
            "text": "Qual o agente etiológico da Mononucleose Infecciosa, que pode cursar com faringoamigdalite membranosa e linfonodomegalia generalizada?",
            "options": [
                "Streptococcus pyogenes",
                "Adenovírus",
                "Vírus Epstein-Barr (EBV)",
                "Corynebacterium diphtheriae"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Mononucleose Infecciosa, ou 'doença do beijo', é causada pelo Vírus Epstein-Barr. A apresentação clássica em adolescentes e adultos jovens inclui febre, faringite (muitas vezes com exsudato e petéquias no palato) e linfonodomegalia, especialmente cervical posterior.",
            "tag": "Faringe"
        },
        {
            "id": "PR2-Otorrino-Q83",
            "text": "O que é o pericôndrio e por que um hematoma no pavilhão auricular deve ser drenado?",
            "options": [
                "É a pele da orelha; deve ser drenado por estética.",
                "É o osso da orelha; deve ser drenado para evitar fratura.",
                "É o tecido que nutre a cartilagem auricular; deve ser drenado para evitar a necrose da cartilagem e a deformidade conhecida como 'orelha em couve-flor'.",
                "É o tímpano; deve ser drenado para não perfurar."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O pericôndrio é uma camada de tecido conjuntivo que reveste a cartilagem e é responsável pela sua nutrição. Um hematoma subpericondral (oto-hematoma) separa o pericôndrio da cartilagem, interrompendo o suprimento sanguíneo. Se não for drenado, a cartilagem necrosa e resulta na deformidade fibrótica permanente conhecida como 'orelha em couve-flor'.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q84.1",
            "text": "Qual das seguintes condições nasais NÃO é uma causa comum de obstrução nasal?",
            "options": [
                "Desvio de septo",
                "Hipertrofia de cornetos",
                "Perfuração septal",
                "Polipose nasossinusal"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Uma perfuração septal, embora possa causar sintomas como crostas, sangramento e um assobio ao respirar, geralmente não causa obstrução nasal, a menos que seja muito grande e associada a um colapso da estrutura nasal.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q84.2",
            "text": "Qual o tratamento cirúrgico para a hipertrofia de cornetos inferiores refratária ao tratamento clínico?",
            "options": [
                "Septoplastia",
                "Turbinectomia ou Turbinoplastia",
                "Cirurgia endoscópica funcional dos seios paranasais (FESS)",
                "Rinoplastia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A turbinectomia (remoção parcial) ou a turbinoplastia (remodelação) são os procedimentos cirúrgicos realizados para reduzir o volume dos cornetos inferiores e aliviar a obstrução nasal quando o tratamento clínico falha.",
            "tag": "Rinologia"
        },
        {
            "id": "PR2-Otorrino-Q85",
            "text": "Qual dos seios paranasais é o último a se desenvolver completamente?",
            "options": [
                "Etmoidal",
                "Maxilar",
                "Esfenoidal",
                "Frontal"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O seio frontal é o último a se pneumatizar, começando a se desenvolver por volta dos 4-6 anos de idade e atingindo o tamanho adulto apenas na adolescência.",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Otorrino-Q86",
            "text": "Onde se localiza o complexo ostiomeatal?",
            "options": [
                "No meato inferior, onde drena o ducto nasolacrimal.",
                "No meato médio, sendo a via de drenagem comum dos seios maxilar, frontal e etmoidal anterior.",
                "No meato superior, onde drenam as células etmoidais posteriores.",
                "No recesso esfenoetmoidal, onde drena o seio esfenoidal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O complexo ostiomeatal é uma área anatómica crítica no meato médio, funcionando como uma 'encruzilhada' para a drenagem dos seios anteriores. A sua obstrução é um fator-chave na fisiopatologia da rinossinusite.",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Otorrino-Q87",
            "text": "Paciente de 70 anos refere tontura do tipo flutuação, sem vertigem rotatória, que piora no escuro ou em terreno irregular. A audiometria é normal. Qual a causa mais provável?",
            "options": [
                "Doença de Ménière",
                "Presbivertigem/Presbiastasia (desequilíbrio do idoso)",
                "VPPB",
                "Neurite vestibular"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O desequilíbrio do idoso é multifatorial, resultante do declínio fisiológico dos sistemas vestibular, visual e proprioceptivo. Caracteriza-se por uma sensação de instabilidade ou 'tontura' inespecífica, que piora em situações de conflito sensorial (escuro, piso irregular).",
            "tag": "Otoneurologia"
        },
        {
            "id": "PR2-Otorrino-Q88.1",
            "text": "Paciente com dor intensa e queimação no ouvido direito, seguida de vesículas dolorosas na orelha, paralisia facial direita, zumbido e hipoacusia. Qual o diagnóstico e o tipo de paralisia?",
            "options": [
                "Paralisia de Bell / Paralisia Central",
                "Otite Externa Necrosante / Paralisia Periférica",
                "Síndrome de Ramsay Hunt / Paralisia Facial Periférica",
                "Colesteatoma / Paralisia Central"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Síndrome de Ramsay Hunt é causada pela reativação do vírus Varicela-Zoster no gânglio geniculado. A tríade clássica é: otalgia, vesículas no pavilhão auricular (herpes zoster oticus) e paralisia facial periférica ipsilateral.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q88.2",
            "text": "Qual o tratamento a ser indicado para a Síndrome de Ramsay Hunt?",
            "options": [
                "Apenas corticoides e fisioterapia.",
                "Aciclovir ou Valaciclovir, Corticoide, Analgésico e Fisioterapia.",
                "Apenas antibióticos.",
                "Observação, pois a recuperação é sempre espontânea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento da Síndrome de Ramsay Hunt deve ser iniciado precocemente e combina um agente antiviral (para combater o vírus) e um corticoide (para reduzir a inflamação do nervo), além de analgesia e cuidados oculares, para melhorar o prognóstico de recuperação da função facial.",
            "tag": "Nervo Facial"
        },
        {
            "id": "PR2-Otorrino-Q89.1",
            "text": "Paciente com hipoacusia e otorreia purulenta fétida e constante. A otoscopia revela uma retração com perfuração na pars flácida da membrana timpânica, com debris esbranquiçados. Qual o diagnóstico?",
            "options": [
                "Otite Média Aguda",
                "Otite Média Secretora",
                "Otite Média Crônica Simples",
                "Otite Média Crônica Colesteatomatosa"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A otorreia purulenta, fétida e persistente, associada a uma perfuração marginal (na pars flácida) e à visualização de 'caspas' ou debris brancos, é a apresentação clássica da Otite Média Crônica Colesteatomatosa.",
            "tag": "Otologia"
        },
        {
            "id": "PR2-Otorrino-Q89.2",
            "text": "Qual a principal complicação intracraniana do colesteatoma?",
            "options": [
                "Hidrocefalia",
                "Abscesso cerebral (principalmente lobo temporal) e Meningite",
                "Hemorragia subaracnoide",
                "Trombose do seio sagital superior"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Devido à sua capacidade de erodir o osso (tegmen timpani), o colesteatoma pode se estender para a fossa média do crânio, levando a complicações graves como meningite, abscesso temporal e trombose do seio sigmoide.",
            "tag": "Otologia"
        }
    ]
},
  {
    id: "preset-m7-pr2-ortopedia",
    name: "Estácio - M7 - PR2 - Ortopedia",
    questions: [
        {
            "id": "PR2-Orto-Q1.1",
            "text": "Qual a principal diferença etiológica entre Sinovite Transitória de Quadril e Doença de Legg-Calvé-Perthes?",
            "options": [
                "Ambas são de origem infecciosa.",
                "Sinovite é inflamatória e autolimitada, enquanto Legg-Calvé-Perthes é uma necrose avascular.",
                "Sinovite afeta principalmente meninas e Legg-Calvé-Perthes afeta meninos.",
                "Legg-Calvé-Perthes sempre requer tratamento cirúrgico, enquanto a sinovite é sempre conservador."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A Sinovite Transitória é uma inflamação benigna e autolimitada da sinóvia do quadril, frequentemente pós-infecciosa. Já a Doença de Legg-Calvé-Perthes é uma necrose avascular da cabeça do fémur, um processo mais complexo de morte óssea por falta de suprimento sanguíneo.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q1.2",
            "text": "Radiograficamente, como se diferenciam a Sinovite Transitória de Quadril e a Doença de Legg-Calvé-Perthes?",
            "options": [
                "Na Sinovite, a radiografia mostra o sinal do crescente, indicando necrose.",
                "Na Legg-Calvé-Perthes, a radiografia é sempre normal.",
                "Na Sinovite, a radiografia é geralmente normal, enquanto na Legg-Calvé-Perthes pode aparecer o sinal do crescente.",
                "Ambas apresentam espessamento da membrana sinovial na radiografia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Na Sinovite Transitória, a radiografia é tipicamente normal ou pode mostrar um leve alargamento do espaço articular. Na Doença de Legg-Calvé-Perthes, um dos sinais radiográficos característicos, embora não inicial, é o 'sinal do crescente' subcondral, que indica uma fratura na área de necrose.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q2",
            "text": "Quais são as articulações mais comumente acometidas pela artrite séptica?",
            "options": [
                "Punho, cotovelo e ombro.",
                "Coluna vertebral e articulações sacroilíacas.",
                "Joelho, quadril e tornozelo.",
                "Pequenas articulações das mãos e dos pés."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A artrite séptica acomete preferencialmente grandes articulações de carga dos membros inferiores, sendo o joelho a mais comum, seguida pelo quadril e tornozelo.",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q3",
            "text": "Sobre as pseudoartroses, assinale a alternativa INCORRETA:",
            "options": [
                "Na Hipertrófica, há calo ósseo exuberante devido à instabilidade.",
                "Na Atrófica, há ausência ou deficiência de células osteogénicas e vascularização.",
                "A Pseudoartrose Atrófica está associada a fraturas expostas e diabetes.",
                "A Pseudoartrose Hipertrófica ocorre por falta de suprimento sanguíneo adequado."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa incorreta é a D. A pseudoartrose hipertrófica ('pata de elefante') é caracterizada por uma boa biologia (vascularização e células presentes), mas falha mecânica (instabilidade), levando a um calo exuberante e não consolidado. A falha no suprimento sanguíneo é a causa da pseudoartrose atrófica.",
            "tag": "Fraturas"
        },
        {
            "id": "PR2-Orto-Q4",
            "text": "Paciente com fratura de antebraço, imobilizado com gesso há 24 horas, chega com dor intensa, edema acentuado e cianose no membro. Qual o diagnóstico mais provável?",
            "options": [
                "Osteomielite aguda.",
                "Trombose venosa profunda.",
                "Artrite séptica de punho.",
                "Síndrome compartimental."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Dor desproporcional à lesão, edema tenso, palidez ou cianose e dor à extensão passiva dos dedos são os sinais clássicos da síndrome compartimental, uma emergência ortopédica. A contratura de Volkmann é uma sequela tardia da isquemia.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Orto-Q5",
            "text": "Qual das seguintes condições é uma indicação clássica para o uso da Tomografia Computadorizada (TC) na ortopedia?",
            "options": [
                "Avaliação inicial de uma entorse de tornozelo.",
                "Diagnóstico de lesões ligamentares do joelho.",
                "Planeamento cirúrgico de tumores ósseos e fraturas complexas.",
                "Rastreio de osteoporose em idosos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Tomografia Computadorizada é excelente para avaliar a arquitetura óssea em detalhe, sendo fundamental no planeamento cirúrgico de tumores ósseos e na avaliação de fraturas articulares complexas, como a fratura-luxação de Lisfranc.",
            "tag": "Imagiologia"
        },
        {
            "id": "PR2-Orto-Q6",
            "text": "Qual a diferença fundamental entre luxação, subluxação e entorse?",
            "options": [
                "Entorse é lesão óssea; luxação e subluxação são ligamentares.",
                "Luxação é a perda parcial do contacto articular; subluxação é a perda total.",
                "Entorse é uma lesão ligamentar sem perda de contacto; subluxação é a perda parcial e luxação é a perda total.",
                "Subluxação sempre reduz espontaneamente; luxação nunca."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Entorse é uma lesão ligamentar sem perda da congruência articular. Subluxação é a perda parcial do contacto entre as superfícies articulares. Luxação é a perda total e permanente desse contacto.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Orto-Q7",
            "text": "Quais são os principais agentes etiológicos da osteomielite em neonatos?",
            "options": [
                "Pseudomonas aeruginosa e Klebsiella pneumoniae",
                "Streptococcus pyogenes e Haemophilus influenzae",
                "Staphylococcus aureus, Streptococcus do grupo B e E. coli",
                "Clostridium perfringens e Bacteroides fragilis"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Em neonatos, os agentes mais comuns de osteomielite hematogénica são Staphylococcus aureus, Streptococcus agalactiae (Grupo B) e bacilos gram-negativos como a Escherichia coli.",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q8",
            "text": "Qual a finalidade das manobras de Ortolani e Barlow no exame do quadril neonatal?",
            "options": [
                "Ambas tentam luxar um quadril estável.",
                "Ortolani provoca a luxação, Barlow reduz o quadril.",
                "Ortolani é uma manobra de redução de um quadril luxado, Barlow é uma manobra provocativa para testar a instabilidade.",
                "Ambas avaliam a amplitude de movimento do quadril."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A manobra de Ortolani é um teste de redução; um 'clique' positivo significa que a cabeça do fémur, que estava luxada, foi reduzida para dentro do acetábulo. A manobra de Barlow é um teste provocativo; um 'clique' positivo significa que a cabeça do fémur, que estava reduzida, foi luxada.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q9",
            "text": "A manobra de Patte, que testa a rotação externa contra resistência, é utilizada para avaliar qual músculo do manguito rotador?",
            "options": [
                "Supraespinhoso",
                "Subescapular",
                "Infraespinhoso",
                "Redondo menor"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A manobra de Patte é um teste específico para avaliar a integridade e a força do músculo infraespinhoso, que é um dos principais rotadores externos do ombro.",
            "tag": "Ombro"
        },
        {
            "id": "PR2-Orto-Q10",
            "text": "O que é a capsulite adesiva, também conhecida como 'ombro congelado', e qual o seu tratamento principal?",
            "options": [
                "É uma infeção da cápsula articular, tratada com antibióticos.",
                "É uma lesão do manguito rotador, tratada com cirurgia.",
                "É um processo inflamatório e fibrótico da cápsula articular, tratado primariamente com fisioterapia para ganho de movimento.",
                "É uma artrose da articulação glenoumeral, tratada com artroplastia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A capsulite adesiva é uma condição inflamatória que leva ao espessamento e contratura da cápsula articular, resultando em dor e perda progressiva da mobilidade do ombro. A base do tratamento é a reabilitação com fisioterapia para restaurar a amplitude de movimento.",
            "tag": "Ombro"
        },
        {
            "id": "PR2-Orto-Q11",
            "text": "Qual é a manobra de redução para a pronação dolorosa em uma criança?",
            "options": [
                "Pronação e extensão do cotovelo.",
                "Adução e rotação interna do ombro.",
                "Supinação do antebraço e flexão do cotovelo.",
                "Flexão do punho e extensão dos dedos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A manobra de redução clássica para a pronação dolorosa consiste em aplicar pressão sobre a cabeça do rádio enquanto se realiza uma supinação firme do antebraço, seguida de flexão do cotovelo.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q12",
            "text": "Quais são as deformidades componentes do pé torto congénito?",
            "options": [
                "Plano, valgo e abdução do antepé.",
                "Cavo, valgo e adução do antepé.",
                "Equino, varo do retropé, adução e supinação do antepé.",
                "Calcâneo, plano e abdução do antepé."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O pé torto congénito é uma deformidade complexa cujos componentes são: equino (flexão plantar do tornozelo), varo do retropé (calcanhar virado para dentro), adução do antepé (antepé virado para dentro) e supinação.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q13",
            "text": "O que inicia a cascata de degeneração do disco intervertebral na coluna lombar?",
            "options": [
                "Aumento da produção de colagénio tipo I.",
                "Hipertrofia do ligamento amarelo.",
                "Desidratação do núcleo pulposo devido à diminuição de proteoglicanos.",
                "Formação de osteófitos nas placas terminais."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O processo degenerativo do disco intervertebral começa com a perda de proteoglicanos no núcleo pulposo, o que diminui a sua capacidade de reter água, levando à desidratação, perda de altura e sobrecarga das outras estruturas da coluna.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q14",
            "text": "Quais são os dois biótipos classicamente associados à epifisiólise (escorregamento da cabeça femoral)?",
            "options": [
                "Atleta de alta performance e sedentário.",
                "Magro e alto (gigantismo) e obeso com hipogonadismo (adiposo genital).",
                "Baixo e magro e alto e obeso.",
                "Apenas pacientes com doenças endócrinas."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A epifisiólise está associada a dois biótipos principais: o paciente obeso com maturação sexual atrasada (biótipo de Fröhlich) e o paciente alto e magro que passou por um estirão de crescimento rápido.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q15",
            "text": "O que caracteriza a tríade do Mal de Pott (tuberculose vertebral avançada)?",
            "options": [
                "Dor, febre e perda de peso.",
                "Escoliose, abscesso paravertebral e paraparesia.",
                "Cifose, abscesso paravertebral e défice neurológico.",
                "Lordose, dor noturna e infeção do disco."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Mal de Pott, uma forma grave de tuberculose vertebral, é caracterizado pela tríade de deformidade em cifose (colapso dos corpos vertebrais), formação de abscesso frio paravertebral e compressão medular com défice neurológico.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q16",
            "text": "Sobre fraturas expostas, quais afirmações são verdadeiras? I. Mecanismos de dentro para fora geralmente têm baixa contaminação. II. O ambiente da fratura não interfere na profilaxia antibiótica. III. A exteriorização do hematoma fraturário já classifica a fratura como exposta. IV. Fixadores externos ajudam no tratamento das partes moles.",
            "options": [
                "I, III e IV são verdadeiras.",
                "Apenas II e III são falsas.",
                "Apenas II, III e IV são falsas.",
                "Apenas I e II são verdadeiras."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A afirmativa II é falsa, pois o ambiente (ex: rural, aquático) determina o risco de contaminação por germes específicos e guia a antibioticoprofilaxia. As demais são verdadeiras: fraturas de dentro para fora têm menor energia e contaminação (I), a comunicação do foco fraturário com o meio externo, mesmo que apenas pelo hematoma, define a exposição (III), e a fixação externa estabiliza a fratura permitindo o cuidado com as feridas (IV).",
            "tag": "Fraturas"
        },
        {
            "id": "PR2-Orto-Q17",
            "text": "Numa punção articular por suspeita de artrite séptica, qual resultado laboratorial é esperado?",
            "options": [
                "Proteína diminuída com grumos.",
                "Líquido claro com proteína elevada.",
                "Leucocitose com diminuição da glicose.",
                "Líquido turvo com teste de mucina firme."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O líquido sinovial na artrite séptica é purulento, com uma contagem muito elevada de leucócitos (geralmente > 50.000), predominantemente polimorfonucleares. As bactérias consomem a glicose, resultando em níveis mais baixos que os do soro.",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q18",
            "text": "Lactente de 6 meses com febre alta, dor e impotência funcional no ombro, sem trauma. VHS e PCR elevados. Qual a hipótese e quais fatores de risco para artrite séptica no caso?",
            "options": [
                "Sarcoma de Ewing / Febre e ausência de trauma.",
                "Sarcoma de Ewing / Elevação do VHS e impotência funcional.",
                "Osteomielite aguda / Idade < 18 meses e localização no ombro.",
                "Osteomielite aguda / Elevação da PCR e febre alta."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro é de osteomielite hematogénica aguda. Em crianças com menos de 18 meses, vasos sanguíneos atravessam a placa de crescimento, permitindo que a infeção da metáfise se espalhe para a articulação. Além disso, a metáfise proximal do úmero (ombro) é intra-articular, o que também facilita a artrite séptica secundária.",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q19",
            "text": "A imagem de uma lesão lítica, central e bem delimitada na metáfise proximal do fémur de um menino de 7 anos, assintomático, é mais compatível com:",
            "options": [
                "Cisto ósseo simples",
                "Mieloma múltiplo",
                "Osteoblastoma",
                "Tumor de Células Gigantes"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A imagem radiográfica de uma lesão lítica, central, com bordas escleróticas e afilamento da cortical, localizada na metáfise de um osso longo em uma criança ou adolescente, é a apresentação clássica de um Cisto Ósseo Simples, uma lesão benigna.",
            "tag": "Tumores Ósseos"
        },
        {
            "id": "PR2-Orto-Q20",
            "text": "Sobre a abordagem das fraturas expostas, é CORRETO afirmar:",
            "options": [
                "A classificação de Gustilo-Anderson é imutável após a avaliação inicial.",
                "O potencial de contaminação está relacionado à extensão da lesão das partes moles.",
                "O ambiente onde ocorrem as lesões não é relevante para a contaminação.",
                "Para ser considerada exposta, o osso fraturado deve estar visível na ferida."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A extensão da lesão de partes moles é o principal fator que determina o grau de contaminação e o risco de infeção numa fratura exposta, sendo um pilar da classificação de Gustilo-Anderson.",
            "tag": "Fraturas"
        },
        {
            "id": "PR2-Orto-Q21",
            "text": "Na suspeita de Artrite Séptica, além da punção articular, quais exames são fundamentais na investigação inicial?",
            "options": [
                "Ressonância Magnética e Cintilografia Óssea.",
                "Cultura de LCR e Hemograma Completo.",
                "Hemocultura e Hemograma Completo.",
                "Apenas marcadores inflamatórios (VHS e PCR)."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A artrite séptica pode ser secundária a uma bacteriemia. Portanto, a colheita de hemoculturas é essencial para tentar identificar o agente etiológico. O hemograma avalia a resposta sistémica à infeção (leucocitose).",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q22",
            "text": "Em relação às lesões medulares, qual afirmação está INCORRETA?",
            "options": [
                "O uso de corticoide em altas doses é controverso, mas se usado, deve ser nas primeiras 8 horas em lesões com défice.",
                "Não ocorre lesão da medula espinhal em fraturas abaixo de L1/L2, apenas da cauda equina.",
                "A lesão medular secundária é causada pela resposta inflamatória ao trauma inicial.",
                "Em crianças, a lesão medular pode ocorrer sem fratura visível (SCIWORA)."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa incorreta (portanto, a resposta) é a A. O uso de corticoide em altas doses NÃO está indicado em lesões sem défice neurológico nem em traumas ocorridos há mais de 8 horas. Sua indicação, embora controversa, é restrita a casos com défice, dentro da janela de 8 horas.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q23",
            "text": "Paciente com fratura de fémur tratada cirurgicamente com placa e parafusos (osteossíntese rígida). Após 8 semanas, a radiografia não mostra calo ósseo visível, mas o paciente está assintomático. Qual a explicação?",
            "options": [
                "O calo ósseo só se torna visível após o remodelamento.",
                "A ausência de calo indica infeção ativa.",
                "O paciente está a evoluir para uma pseudoartrose.",
                "Ocorreu um processo de consolidação óssea direta (primária)."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A osteossíntese rígida com compressão interfragmentária permite a consolidação óssea direta ou primária, que ocorre por remodelamento haversiano através do foco de fratura, sem a formação de um calo ósseo externo visível radiograficamente.",
            "tag": "Fisiologia Óssea"
        },
        {
            "id": "PR2-Orto-Q24",
            "text": "Como se confirma o fim do choque medular num paciente com trauma raquimedular?",
            "options": [
                "Pelo retorno do reflexo bulbocavernoso.",
                "Pela estabilização da pressão arterial.",
                "Pelo retorno da sensibilidade nos membros inferiores.",
                "Pela ausência de bradicardia."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O choque medular é a perda temporária de toda a atividade reflexa abaixo do nível da lesão. O retorno do reflexo bulbocavernoso (contração do esfíncter anal à tração da sonda vesical ou compressão da glande/clitóris) é o primeiro a reaparecer e marca o fim desta fase.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q25",
            "text": "Sobre o choque medular, é CORRETO afirmar:",
            "options": [
                "Decorre de lesão das cadeias simpáticas.",
                "Cursa com extremidades quentes e hiperemiadas.",
                "O retorno precoce do reflexo bulbocavernoso indica bom prognóstico.",
                "É uma disfunção fisiológica temporária da medula e pode ocorrer mesmo em secções completas."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O choque medular é uma 'despolarização' funcional e temporária da medula espinhal que ocorre após um trauma, independentemente da gravidade da lesão anatómica. Por isso, pode ocorrer tanto em lesões completas quanto incompletas. As opções A e B descrevem o choque neurogénico.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q26",
            "text": "A artrite séptica pode ser uma complicação da osteomielite em crianças quando a metáfise óssea é intra-articular. Quais das seguintes articulações se enquadram nesta situação?",
            "options": [
                "Joelho, Punho e Mão.",
                "Ombro, Quadril e Tornozelo.",
                "Coluna, Sacroilíaca e Púbis.",
                "Apenas o quadril em menores de 1 ano."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A metáfise (região mais comum de osteomielite hematogénica) é intra-articular no ombro (úmero proximal), quadril (fémur proximal), cotovelo (rádio proximal) e tornozelo (tíbia distal). Portanto, uma osteomielite nestes locais pode facilmente disseminar-se para a articulação.",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q27",
            "text": "Criança de 5 anos com febre, dor pontiforme na coxa direita próxima ao joelho, que piora com o movimento. Qual o diagnóstico mais provável?",
            "options": [
                "Artrite Séptica do joelho",
                "Osteomielite Hematogénica Aguda do fémur distal",
                "Sarcoma de Ewing",
                "Doença de Legg-Calvé-Perthes"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A dor óssea localizada e intensa (puntiforme), associada a febre e sinais sistémicos numa criança, aponta para osteomielite hematogénica aguda. A metáfise distal do fémur (próxima ao joelho) é uma das localizações mais comuns.",
            "tag": "Infecção Ortopédica"
        },
        {
            "id": "PR2-Orto-Q28.1",
            "text": "Paciente de 63 anos com dor lombar que irradia pela face posterior da coxa e parestesia no maléolo lateral esquerdo. Qual teste clínico é utilizado para avaliar a compressão da raiz de S1?",
            "options": [
                "Teste de Lasègue (elevação da perna estendida).",
                "Teste de Patrick (ou FABERE).",
                "Teste de Thomas.",
                "Manobra de Spurling."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O Teste de Lasègue, que consiste na elevação passiva do membro inferior com o joelho estendido, provoca o estiramento do nervo ciático (raízes L4, L5, S1). A reprodução da dor irradiada entre 30 e 70 graus de flexão do quadril é um sinal positivo para compressão radicular.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q28.2",
            "text": "No paciente com radiculopatia de S1, qual grupo muscular pode apresentar fraqueza?",
            "options": [
                "Flexores do joelho.",
                "Dorsiflexores do pé (extensor longo do hálux).",
                "Flexores plantares e eversores do pé.",
                "Quadríceps femoral."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A raiz de S1 é responsável pela inervação dos músculos da panturrilha (gastrocnémio, sóleo), que realizam a flexão plantar, e dos músculos fibulares, responsáveis pela eversão do pé.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q28.3",
            "text": "Qual exame de imagem inicial é solicitado na investigação de uma lombociatalgia e quais achados são esperados em um quadro degenerativo?",
            "options": [
                "Ressonância Magnética, esperando encontrar hérnia de disco e edema medular.",
                "Tomografia Computadorizada, esperando encontrar fraturas e tumores.",
                "Radiografia da coluna lombossacral, esperando encontrar osteófitos, redução do espaço discal e espondilolistese.",
                "Cintilografia óssea, esperando encontrar áreas de hipercaptação."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A radiografia simples é o exame inicial na avaliação da dor lombar. Em processos degenerativos (espondilose), os achados esperados incluem a formação de osteófitos (bicos de papagaio), a diminuição da altura dos discos intervertebrais e eventuais desalinhamentos (espondilolistese).",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q29.1",
            "text": "Paciente jovem com metatarsalgia e dor tipo 'choque' à palpação do 3º espaço intermetatarsal, que irradia para os dedos. Qual a principal hipótese diagnóstica?",
            "options": [
                "Fratura por stress do metatarso.",
                "Artrite gotosa.",
                "Neuroma de Morton.",
                "Fascite plantar."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A dor em queimação ou 'choque' no espaço intermetatarsal (mais comum entre o 3º e 4º dedos), que piora com o uso de sapatos apertados e melhora ao retirá-los, é a apresentação clássica do Neuroma de Morton, uma fibrose perineural do nervo digital plantar.",
            "tag": "Pé e Tornozelo"
        },
        {
            "id": "PR2-Orto-Q29.2",
            "text": "Qual o exame padrão-ouro para confirmar o diagnóstico de Neuroma de Morton?",
            "options": [
                "Radiografia com carga.",
                "Ultrassonografia.",
                "Ressonância Magnética.",
                "Eletroneuromiografia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Embora a ultrassonografia possa visualizar o neuroma, a Ressonância Magnética é considerada o padrão-ouro por fornecer uma melhor definição da lesão e excluir outros diagnósticos diferenciais.",
            "tag": "Pé e Tornozelo"
        },
        {
            "id": "PR2-Orto-Q30.1",
            "text": "Paciente de 48 anos, tricoteira, com dor e parestesia nos três dedos laterais da mão direita. Quais testes semiológicos são usados para confirmar a Síndrome do Túnel do Carpo?",
            "options": [
                "Teste de Cozen e Teste de Mills.",
                "Teste de Lasègue e Teste de Patrick.",
                "Teste de Phalen e Teste de Tinel.",
                "Teste de Jobe e Teste de Gerber."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Teste de Phalen (flexão máxima do punho por 1 minuto) e o Teste de Tinel (percussão sobre o túnel do carpo) são as manobras clássicas para provocar os sintomas da Síndrome do Túnel do Carpo, ao aumentar a pressão sobre o nervo mediano.",
            "tag": "Mão e Punho"
        },
        {
            "id": "PR2-Orto-Q31.2",
            "text": "Num paciente com sintomas na mão e diagnóstico de cervicobraquialgia, como uma infiltração local pode ajudar a diferenciar a origem dos sintomas?",
            "options": [
                "Se a dor cervical melhorar, a origem é proximal.",
                "A infiltração não tem valor diagnóstico.",
                "Se os sintomas na mão melhorarem após a infiltração no túnel do carpo, a origem é distal (Síndrome do Túnel do Carpo).",
                "A melhora dos sintomas com a infiltração confirma que ambas as patologias estão presentes."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A infiltração de corticoide no túnel do carpo tem um papel tanto terapêutico quanto diagnóstico. Se a melhora dos sintomas na mão for significativa, isso confirma que a compressão distal do nervo mediano é a principal causa da sintomatologia, diferenciando-a de uma radiculopatia cervical.",
            "tag": "Mão e Punho"
        },
        {
            "id": "PR2-Orto-Q32",
            "text": "As manobras de Jobe e Gerber positivas indicam lesão em quais músculos do manguito rotador, respetivamente?",
            "options": [
                "Supraespinhoso e Infraespinhoso.",
                "Subescapular e Redondo Menor.",
                "Supraespinhoso e Subescapular.",
                "Infraespinhoso e Redondo Menor."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O teste de Jobe (ou 'empty can test') avalia primariamente o músculo supraespinhoso. O teste de Gerber (ou 'lift-off test') avalia o músculo subescapular.",
            "tag": "Ombro"
        },
        {
            "id": "PR2-Orto-Q33.1",
            "text": "Paciente com dor cervical irradiada para a face lateral do antebraço e 1º e 2º dedos. A ressonância mostra hérnia discal em C6-C7. Qual raiz nervosa está mais provavelmente comprimida?",
            "options": [
                "C5",
                "C6",
                "C7",
                "C8"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Uma hérnia discal em C6-C7 comprime a raiz nervosa que sai por este forame, que é a raiz de C7. O dermátomo de C7 corresponde classicamente ao dedo médio, mas pode haver sobreposição.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q33.2",
            "text": "Por que o tratamento conservador foi a opção inicial para o paciente da questão anterior, que tinha força muscular preservada?",
            "options": [
                "Porque a cirurgia tem alto risco de complicações.",
                "Porque a fisioterapia sempre resolve a hérnia discal.",
                "Porque a ausência de défice motor progressivo ou mielopatia é uma indicação para iniciar o tratamento conservador.",
                "Porque o paciente recusou a cirurgia."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A maioria dos casos de radiculopatia cervical por hérnia de disco melhora com o tratamento conservador. A cirurgia é reservada para casos de dor refratária, défice neurológico progressivo ou sinais de compressão medular (mielopatia).",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q34.1",
            "text": "Criança de 4 anos com claudicação e limitação da rotação interna do quadril esquerdo, uma semana após dor de garganta. Qual a principal hipótese?",
            "options": [
                "Doença de Legg-Calvé-Perthes",
                "Artrite Séptica",
                "Sinovite Transitória do Quadril",
                "Displasia do Desenvolvimento do Quadril"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A história de um quadro articular agudo (claudicação, limitação de movimento) em uma criança pequena, precedido por uma infeção de vias aéreas superiores, é a apresentação clássica da Sinovite Transitória do Quadril.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q34.2",
            "text": "Qual a orientação correta a ser dada aos pais de uma criança com Sinovite Transitória do Quadril?",
            "options": [
                "É uma emergência e necessita de cirurgia para drenagem.",
                "É uma necrose do osso e necessita de imobilização com gesso.",
                "É uma inflamação benigna e autolimitada, que melhora com repouso e sintomáticos.",
                "É necessário iniciar antibióticos imediatamente para evitar sequelas."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. É fundamental tranquilizar os pais, explicando que a Sinovite Transitória é uma condição benigna, inflamatória e que se resolve espontaneamente em poucos dias com repouso e anti-inflamatórios, sem deixar sequelas.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q35.1",
            "text": "Recém-nascido com cabeça inclinada para a direita e queixo rodado para a esquerda, com um 'caroço' no pescoço. Qual a principal hipótese diagnóstica?",
            "options": [
                "Fratura de clavícula",
                "Torcicolo muscular congénito",
                "Anomalia de Klippel-Feil",
                "Linfadenite cervical"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A postura característica de inclinação da cabeça para o lado da lesão e rotação do queixo para o lado contralateral, associada a uma massa palpável no músculo esternocleidomastoideo, define o Torcicolo Muscular Congénito.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q35.2",
            "text": "Quais são as principais implicações do torcicolo muscular congénito não tratado?",
            "options": [
                "Apenas uma limitação estética do movimento do pescoço.",
                "Pode levar a assimetria facial (plagiocefalia), desnivelamento dos olhos e escoliose.",
                "Raramente causa problemas a longo prazo.",
                "Está associado a um alto risco de atraso no desenvolvimento da fala."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A contratura persistente do esternocleidomastoideo pode levar a deformidades craniofaciais secundárias, como o achatamento da face e do crânio (plagiocefalia), e a deformidades posturais compensatórias, como a escoliose.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q35.3",
            "text": "Qual articulação deve ser cuidadosamente avaliada em um recém-nascido com torcicolo muscular congénito devido à sua associação frequente?",
            "options": [
                "Ombro",
                "Cotovelo",
                "Joelho",
                "Quadril"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Existe uma associação bem estabelecida entre o torcicolo muscular congénito e a Displasia do Desenvolvimento do Quadril (DDQ). Portanto, toda criança com torcicolo deve ter os seus quadris examinados cuidadosamente.",
            "tag": "Ortopedia Pediátrica"
        },
        {
            "id": "PR2-Orto-Q36.1",
            "text": "Qual o exame de imagem e as incidências padrão para avaliar uma luxação de ombro?",
            "options": [
                "Ultrassonografia em repouso e com movimento.",
                "Tomografia Computadorizada com reconstrução 3D.",
                "Radiografia em AP verdadeiro do ombro e Perfil escapular (ou axilar).",
                "Ressonância Magnética com contraste."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A avaliação radiográfica inicial de um ombro traumatizado deve incluir, no mínimo, duas incidências ortogonais, sendo o AP verdadeiro e o Perfil as mais utilizadas para diagnosticar e classificar uma luxação.",
            "tag": "Ombro"
        },
        {
            "id": "PR2-Orto-Q36.2",
            "text": "As imagens da questão mostram qual tipo de lesão?",
            "options": [
                "Fratura do colo do úmero.",
                "Luxação acromioclavicular.",
                "Fratura da escápula.",
                "Luxação anterior do ombro (glenoumeral)."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. As radiografias mostram a perda de congruência entre a cabeça do úmero e a cavidade glenoide, com a cabeça umeral deslocada anteriormente e inferiormente em relação à glenoide, o que é característico da luxação anterior do ombro.",
            "tag": "Ombro"
        },
        {
            "id": "PR2-Orto-Q36.3",
            "text": "Qual o tratamento do quadro agudo de uma luxação de ombro e a técnica de preferência?",
            "options": [
                "Cirurgia de urgência para reparo ligamentar.",
                "Redução fechada sob sedação, seguida de imobilização com tipóia.",
                "Apenas imobilização com tipóia, esperando a redução espontânea.",
                "Fisioterapia imediata para fortalecimento muscular."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento de uma luxação aguda do ombro consiste na sua redução o mais rápido possível, geralmente sob analgesia e relaxamento muscular (sedação). Após a redução, o membro é imobilizado para controlo da dor e cicatrização inicial. A manobra de tração e contra-tração é uma das técnicas possíveis.",
            "tag": "Ombro"
        },
        {
            "id": "PR2-Orto-Q37.1",
            "text": "Paciente jovem, vítima de acidente de automóvel, com trauma cervical e paraplegia flácida e arreflexa. Qual o diagnóstico da lesão traumática?",
            "options": [
                "Fratura de clavícula",
                "Lesão medular cervical",
                "Traumatismo cranioencefálico",
                "Lesão do plexo braquial"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O desenvolvimento de défice neurológico motor (paraplegia) após um trauma cervical é a definição de uma lesão medular traumática. A flacidez e arreflexia indicam que o paciente está na fase de choque medular.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q37.2",
            "text": "Quais as imagens da série trauma da coluna cervical devem ser realizadas para elucidação do quadro?",
            "options": [
                "Apenas AP e Perfil.",
                "Apenas Ressonância Magnética.",
                "Radiografia em AP, Perfil e Transoral.",
                "Apenas Tomografia Computadorizada."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A série radiográfica padrão para avaliação inicial da coluna cervical em um paciente traumatizado inclui três incidências: AP, Perfil (que deve mostrar até a transição C7-T1) e Transoral (para visualizar o processo odontoide de C2).",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q37.3",
            "text": "Como é o exame neurológico da raiz de C6 (motricidade, reflexo e sensibilidade)?",
            "options": [
                "Flexão do cotovelo, reflexo bicipital, sensibilidade da face lateral do braço.",
                "Extensão do punho, reflexo estilorradial, sensibilidade do polegar e indicador.",
                "Extensão do cotovelo, reflexo tricipital, sensibilidade do dedo médio.",
                "Flexão dos dedos, sem reflexo, sensibilidade do dedo mínimo."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A raiz de C6 inerva os extensores do punho, é responsável pelo reflexo braquiorradial (estilorradial) e pela sensibilidade da face lateral do antebraço e dos dois primeiros dedos.",
            "tag": "Coluna"
        },
        {
            "id": "PR2-Orto-Q37.4",
            "text": "Qual reflexo profundo deve ser testado para determinar se um paciente com lesão medular aguda saiu da fase de choque medular?",
            "options": [
                "Reflexo patelar.",
                "Reflexo bicipital.",
                "Reflexo cutâneo-abdominal.",
                "Reflexo bulbocavernoso."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O retorno do reflexo bulbocavernoso é o sinal que indica o fim da fase de choque medular. A sua presença permite uma avaliação mais acurada da lesão neurológica e do prognóstico.",
            "tag": "Coluna"
        }
    ]
},
  {
    id: "preset-m7-pr2-oftalmologia",
    name: "Estácio - M7 - PR2 - Oftalmologia",
    questions: [
        {
            "id": "PR2-Oftalmo-Q1.1",
            "text": "Paciente de 22 anos, míope, usuário de lentes de contato, refere olho vermelho após viagem. Ao exame: AV C/C OD: 20/40, OE: 20/100. OE com hiperemia difusa, lesão corneana central e hipópio leve. Qual a melhor hipótese diagnóstica para a baixa visual do OE?",
            "options": [
                "Ceratite por Acanthamoeba",
                "Uveíte anterior",
                "Ceratite bacteriana grave por Pseudomonas aeruginosa",
                "Conjuntivite viral"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A história de uso de lentes de contato associada a um quadro agudo de dor, olho vermelho, lesão corneana (infiltrado/úlcera) e reação inflamatória intensa (hipópio) é altamente sugestiva de ceratite bacteriana, sendo a Pseudomonas aeruginosa o agente mais temido e comum neste cenário. As outras opções não explicam a totalidade dos achados, especialmente a lesão corneana grave.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q1.2",
            "text": "Diante da hipótese de ceratite bacteriana grave no paciente da questão anterior, qual a conduta inicial mais adequada para o OE?",
            "options": [
                "Iniciar corticoide tópico para reduzir a inflamação.",
                "Ocluir o olho e reavaliar em 24 horas.",
                "Aguardar resultado de cultura para iniciar tratamento.",
                "Suspender lentes, colher raspado corneano e iniciar colírios antibióticos fortificados de amplo espectro."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A ceratite bacteriana é uma emergência oftalmológica. A conduta correta é suspender o uso das lentes de contato, colher material da úlcera para cultura e antibiograma (raspado corneano) e iniciar imediatamente antibioticoterapia tópica fortificada e de amplo espectro, com alta frequência, para cobrir os agentes mais prováveis, como a Pseudomonas.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q2.1",
            "text": "Paciente de 50 anos com queixa de hiperemia conjuntival em ambos os olhos. Ao exame: hiperemia bulbar (OD > OE), ausência de secreção purulenta e presença de reação folicular em fórnice inferior. Qual o diagnóstico mais provável?",
            "options": [
                "Conjuntivite viral",
                "Conjuntivite bacteriana",
                "Conjuntivite alérgica",
                "Blefarite"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A presença de reação folicular na conjuntiva tarsal é o sinal mais característico da conjuntivite viral, causada principalmente pelo adenovírus. A ausência de secreção purulenta significativa afasta a conjuntivite bacteriana (B). A reação na conjuntivite alérgica (C) é tipicamente papilar, não folicular.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q2.2",
            "text": "No paciente com suspeita de conjuntivite viral da questão anterior, qual das seguintes condutas é CORRETA?",
            "options": [
                "É esperado encontrar linfonodomegalia pré-auricular ou submandibular.",
                "Há indicação de antibiótico oral se não houver resposta ao tratamento tópico.",
                "Está indicado o uso de colírio de antibiótico associado a corticoide.",
                "Está indicado o uso de colírios de dupla-ação como a olopatadina."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A linfonodomegalia pré-auricular dolorosa é um achado semiológico clássico e muito comum na conjuntivite viral por adenovírus, ajudando a diferenciá-la de outras causas de olho vermelho. As outras opções se aplicam a outras patologias (bacteriana ou alérgica).",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q3",
            "text": "Um indivíduo que queima os olhos com a radiação de uma solda elétrica, por não usar EPI, procura atendimento de urgência imediatamente após o ocorrido.",
            "options": [
                "Verdadeiro, a dor é imediata e intensa.",
                "Falso, os sintomas como dor intensa e fotofobia demoram de 4 a 6 horas para aparecer.",
                "Verdadeiro, ocorre um dano térmico direto que causa dor instantânea.",
                "Falso, a lesão é indolor e só se percebe pela baixa de visão."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A lesão causada pela radiação UV da solda elétrica é uma ceratite actínica. O dano às células epiteliais da córnea tem um período de latência. Os sintomas de dor intensa, fotofobia e lacrimejamento tipicamente surgem horas após a exposição, muitas vezes acordando o paciente durante a noite.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q4.1",
            "text": "Paciente de 76 anos com queixa de ardência ocular e lacrimejamento. AV s/c: 20/200 em ambos os olhos, que não melhora com correção. Fundoscopia dificultada por opacidade de meios. Qual a principal hipótese para a baixa acuidade visual?",
            "options": [
                "Glaucoma",
                "Degeneração Macular Relacionada à Idade (DMRI)",
                "Catarata",
                "Olho seco"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A baixa acuidade visual progressiva em um paciente idoso, que não melhora com a refração (óculos) e está associada a uma 'opacidade de meios' que dificulta a fundoscopia, é o quadro clássico de catarata (opacificação do cristalino).",
            "tag": "Cristalino"
        },
        {
            "id": "PR2-Oftalmo-Q4.2",
            "text": "Para a paciente com diagnóstico de catarata da questão anterior, qual o tratamento proposto?",
            "options": [
                "Uso de colírios para dissolver a catarata.",
                "Facectomia com implante de lente intraocular.",
                "Capsulotomia com YAG laser.",
                "Acompanhamento clínico até a visão piorar para conta dedos."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O único tratamento definitivo e eficaz para a catarata é a remoção cirúrgica do cristalino opacificado (facectomia) e o implante de uma lente intraocular artificial para restaurar o foco e a visão.",
            "tag": "Cristalino"
        },
        {
            "id": "PR2-Oftalmo-Q4.3",
            "text": "Qual a principal hipótese diagnóstica para a queixa de ardência e lacrimejamento reflexo na paciente de 76 anos da questão anterior?",
            "options": [
                "Alergia ocular",
                "Obstrução de via lacrimal",
                "Síndrome do olho seco",
                "Blefarite"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Síndrome do Olho Seco é extremamente comum em idosos e se manifesta com sintomas de irritação, ardência, sensação de areia e, paradoxalmente, lacrimejamento reflexo, que é uma resposta do olho à irritação da superfície.",
            "tag": "Doenças Externas"
        },
        {
            "id": "PR2-Oftalmo-Q4.4",
            "text": "Qual dos seguintes testes NÃO é utilizado para o diagnóstico de olho seco?",
            "options": [
                "Teste de Schirmer",
                "Tempo de ruptura do filme lacrimal (TRFL)",
                "Coloração com Lissamina Verde",
                "Teste de sobrecarga hídrica"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O teste de sobrecarga hídrica é um teste provocativo utilizado na investigação do glaucoma, não do olho seco. Os testes de Schirmer (A), TRFL (B) e a coloração com corantes vitais (C) são métodos clássicos para avaliar a quantidade e a qualidade da lágrima.",
            "tag": "Doenças Externas"
        },
        {
            "id": "PR2-Oftalmo-Q4.5",
            "text": "Se a fundoscopia da paciente de 76 anos revelasse depósitos amarelados na mácula, qual seria o diagnóstico provável?",
            "options": [
                "Retinopatia Diabética",
                "Buraco Macular",
                "Drusas (DMRI seca)",
                "Edema Macular Cistoide"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Drusas são depósitos de material extracelular (lipofuscina) que se acumulam sob a retina na região macular. São o achado característico da forma seca da Degeneração Macular Relacionada à Idade (DMRI).",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q4.6",
            "text": "Na suspeita de DMRI, qual dos seguintes exames é MENOS útil para o diagnóstico e acompanhamento?",
            "options": [
                "Angiografia fluoresceínica",
                "Tomografia de Coerência Óptica (OCT)",
                "Grade de Amsler",
                "Paquimetria corneana"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A paquimetria mede a espessura da córnea e é importante na avaliação do glaucoma. Para a DMRI, os exames fundamentais são a angiografia (A) para detectar neovasos, o OCT (B) para avaliar as camadas da retina e a grade de Amsler (C) para detectar metamorfopsia.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q4.7",
            "text": "A queixa de ardência e lacrimejamento tem correlação com o diagnóstico de DMRI?",
            "options": [
                "Sim, pois a DMRI causa inflamação que afeta a superfície ocular.",
                "Não, pois a DMRI é uma doença da retina e não causa sintomas de superfície.",
                "Sim, pois a baixa visão da DMRI leva ao esforço visual e ressecamento.",
                "Não, pois o lacrimejamento é um sintoma exclusivo de obstrução de via lacrimal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A DMRI é uma doença restrita à mácula, na parte posterior do olho (retina). Os sintomas de ardência e lacrimejamento são de superfície ocular e não têm relação direta com a fisiopatologia da DMRI. No caso, são mais provavelmente causados pelo olho seco.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q4.8",
            "text": "Como pode ser feito o tratamento da síndrome do olho seco?",
            "options": [
                "Apenas com colírios antibióticos.",
                "Apenas com cirurgia para desobstruir as glândulas.",
                "Com colírios anti-inflamatórios e corticoides.",
                "Com lubrificantes oculares, medidas de higiene palpebral e suplementação nutricional."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O tratamento do olho seco é multifatorial e envolve o uso de lágrimas artificiais (lubrificantes), medidas de higiene para melhorar a função das glândulas de Meibomius (compressas mornas) e, em alguns casos, suplementação com ômega 3.",
            "tag": "Doenças Externas"
        },
        {
            "id": "PR2-Oftalmo-Q5",
            "text": "Sobre a degeneração macular relacionada à idade (DMRI) é possível afirmar que:",
            "options": [
                "Drusas esparsas localizadas fora da mácula podem ser observadas em pacientes idosos sem DMRI.",
                "O tratamento da forma seca e exsudativa é feito com agentes anti-VEGF.",
                "O tratamento com vitaminas reverte completamente as drusas.",
                "No estágio cicatricial da forma exsudativa, espera-se melhora significativa da visão com anti-VEGF."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Pequenas drusas duras e esparsas fora da área macular central podem ser um achado do envelhecimento normal e não necessariamente indicam o diagnóstico de DMRI. As outras opções estão incorretas: anti-VEGF é para a forma exsudativa (B), vitaminas não revertem drusas (C) e o tratamento é menos eficaz na fase cicatricial (D).",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q6.1",
            "text": "Paciente de 76 anos, assintomática, em consulta de rotina. AV c/c 20/25 em AO. PIO: 21/23 mmHg. Fundoscopia com bom reflexo e sem alterações na fóvea. Qual a principal suspeita diagnóstica?",
            "options": [
                "Catarata",
                "DMRI",
                "Glaucoma",
                "Hipertensão Ocular"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A combinação de idade avançada, pressão intraocular (PIO) no limite superior da normalidade ou discretamente elevada e a ausência de sintomas são altamente sugestivos de Glaucoma Primário de Ângulo Aberto, uma doença silenciosa nas fases iniciais.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q6.2",
            "text": "Na paciente com suspeita de glaucoma, qual exame é fundamental para avaliar o dano funcional?",
            "options": [
                "Retinografia",
                "Tomografia de Coerência Óptica (OCT)",
                "Exame do campo visual (Campimetria)",
                "Gonioscopia"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O glaucoma causa perda progressiva de fibras nervosas do nervo óptico, o que se traduz em perda de campo visual periférico. A campimetria é o exame padrão-ouro para detectar e quantificar este dano funcional.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q6.3",
            "text": "Na paciente com suspeita de glaucoma, qual alteração o médico deve procurar no exame de fundo de olho?",
            "options": [
                "Drusas no nervo óptico",
                "Edema de papila",
                "Aumento da escavação do nervo óptico",
                "Hemorragias em chama de vela"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O dano glaucomatoso se manifesta estruturalmente como a perda de axônios do nervo óptico. No fundo de olho, isso é observado como um aumento da escavação (a parte central, mais pálida) em relação ao disco óptico total.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q6.4",
            "text": "Como pode ser feito o tratamento inicial do glaucoma primário de ângulo aberto?",
            "options": [
                "Apenas com cirurgia (trabeculectomia).",
                "Com colírios hipotensores (ex: análogos da prostaglandina).",
                "Apenas com laser (trabeculoplastia).",
                "Com uso de óculos com prismas."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento de primeira linha para o glaucoma primário de ângulo aberto visa reduzir a pressão intraocular e é feito, na maioria dos casos, com o uso de colírios hipotensores. Os análogos de prostaglandina são frequentemente a primeira escolha.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q7.1",
            "text": "Homem de 26 anos com diplopia, queda do estado geral e edema periorbitário à esquerda. AV OE: 20/40. Apresenta restrição da abdução do olho esquerdo. Qual a principal suspeita diagnóstica?",
            "options": [
                "Celulite pré-septal",
                "Celulite orbitária (pós-septal)",
                "Conjuntivite alérgica grave",
                "Dacriocistite aguda"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O edema periorbitário associado a sinais de acometimento da órbita (proptose, baixa visual, dor à movimentação ocular e oftalmoplegia/diplopia) caracteriza a celulite orbitária (pós-septal), uma emergência infecciosa. A celulite pré-septal (A) não afeta a motilidade ou a visão.",
            "tag": "Órbita"
        },
        {
            "id": "PR2-Oftalmo-Q7.2",
            "text": "No caso de suspeita de celulite orbitária, qual o exame de imagem mais importante a ser solicitado?",
            "options": [
                "Ultrassonografia ocular",
                "Ressonância Magnética de crânio",
                "Tomografia Computadorizada de órbitas e seios paranasais",
                "Radiografia simples de face"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Tomografia Computadorizada é o exame de eleição na suspeita de celulite orbitária, pois permite avaliar a extensão do processo inflamatório/infeccioso, a presença de abscessos e o acometimento dos seios paranasais, que são a principal fonte da infecção.",
            "tag": "Órbita"
        },
        {
            "id": "PR2-Oftalmo-Q7.3",
            "text": "Na celulite orbitária, qual das seguintes NÃO é uma complicação temida?",
            "options": [
                "Abscesso orbitário",
                "Meningite",
                "Trombose do seio cavernoso",
                "Glaucoma agudo"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. As complicações da celulite orbitária são graves e resultam da disseminação da infecção para estruturas adjacentes, como a formação de abscessos (A) ou a propagação para o sistema nervoso central, causando meningite (B) ou trombose do seio cavernoso (C). O glaucoma agudo não é uma complicação direta.",
            "tag": "Órbita"
        },
        {
            "id": "PR2-Oftalmo-Q7.4",
            "text": "Qual o tratamento para a celulite orbitária (pós-septal)?",
            "options": [
                "Cefalexina 500mg via oral por 14 dias.",
                "Compressas mornas e acompanhamento ambulatorial.",
                "Internação hospitalar e antibioticoterapia venosa de amplo espectro.",
                "Drenagem cirúrgica em todos os casos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A celulite orbitária é uma emergência que exige internação hospitalar para administração de antibióticos intravenosos de amplo espectro para cobrir os patógenos mais comuns. A drenagem cirúrgica (D) é reservada para casos com formação de abscesso.",
            "tag": "Órbita"
        },
        {
            "id": "PR2-Oftalmo-Q8.1",
            "text": "Paciente de 40 anos com DM tipo II e baixa visual. Fundoscopia revela microaneurismas, exsudação e edema retiniano macular. Qual o tratamento deve ser instituído para o edema macular?",
            "options": [
                "Apenas controle rigoroso da glicemia.",
                "Fotocoagulação a laser em toda a retina.",
                "Injeção intravítrea de anti-VEGF ou corticoide.",
                "Vitrectomia via pars plana."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento padrão-ouro para o edema macular diabético clinicamente significativo é a injeção intravítrea de agentes anti-VEGF (fator de crescimento endotelial vascular) ou, em casos selecionados, de corticoides.",
            "tag": "Retinopatia"
        },
        {
            "id": "PR2-Oftalmo-Q8.2",
            "text": "Qual a primeira alteração fundoscópica que surge na retinopatia diabética?",
            "options": [
                "Microaneurismas",
                "Hemorragias em chama de vela",
                "Exsudatos algodonosos",
                "Neovasos"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Os microaneurismas, pequenas dilatações saculares na parede dos capilares retinianos, são o primeiro sinal clinicamente detectável da retinopatia diabética no exame de fundo de olho.",
            "tag": "Retinopatia"
        },
        {
            "id": "PR2-Oftalmo-Q9",
            "text": "Paciente com visão tubular (campo restrito a 20-30 graus centrais), mas com acuidade visual de 20/20, é diagnosticado com glaucoma avançado. O tratamento pode reverter a perda de campo visual?",
            "options": [
                "Sim, o uso de colírios recupera as fibras nervosas perdidas.",
                "Não, pois o dano ao nervo óptico causado pelo glaucoma é irreversível.",
                "Sim, a cirurgia de trabeculectomia pode restaurar o campo visual.",
                "Não, mas a perda de visão pode ser revertida com óculos especiais."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O dano causado pelo glaucoma às fibras do nervo óptico é permanente e irreversível. O objetivo do tratamento é controlar a pressão intraocular para frear ou impedir a progressão da perda de campo visual, mas não é possível recuperar o que já foi perdido.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q10.1",
            "text": "Paciente de 15 anos com olho vermelho há 48 horas, com hiperemia em fundo de saco e secreção purulenta frequente. Visão, fundo de olho e PIO normais. Qual o diagnóstico?",
            "options": [
                "Conjuntivite viral",
                "Conjuntivite bacteriana",
                "Conjuntivite alérgica",
                "Ceratite"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A presença de secreção purulenta abundante é o sinal cardinal da conjuntivite bacteriana aguda. Na conjuntivite viral (A), a secreção é mais aquosa ou mucoide, e na alérgica (C), é mais hialina e filamentosa.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q10.2",
            "text": "Qual o tratamento medicamentoso de primeira linha para uma conjuntivite bacteriana não complicada?",
            "options": [
                "Colírio lubrificante",
                "Colírio de corticoide",
                "Colírio antibiótico de amplo espectro",
                "Pomada antiviral"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da conjuntivite bacteriana é feito com colírios antibióticos de amplo espectro (como quinolonas ou aminoglicosídeos) para erradicar a infecção. O exemplo dado, Ciloxan (ciprofloxacino), é uma opção válida.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q11.1",
            "text": "Paciente de 45 anos, sexo feminino, refere aparecimento de 'carne no olho' há 2 anos. Ao exame, presença de tecido fibrovascular sobre a córnea, partindo da conjuntiva nasal e avançando 3mm em direção à pupila. Qual o diagnóstico?",
            "options": [
                "Pinguécula",
                "Pterígio",
                "Tumor de conjuntiva",
                "Hemorragia subconjuntival"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O pterígio é uma degeneração da conjuntiva que se caracteriza pelo crescimento de um tecido fibrovascular sobre a córnea, geralmente a partir do lado nasal, como descrito no caso.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q11.2",
            "text": "Qual o principal fator de risco para o desenvolvimento do pterígio?",
            "options": [
                "Uso de lentes de contato",
                "Diabetes Mellitus",
                "Exposição crônica à radiação ultravioleta (sol)",
                "Tabagismo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O principal fator de risco associado ao desenvolvimento do pterígio é a exposição crônica e desprotegida à radiação UV solar, o que explica sua maior prevalência em populações de regiões tropicais e em trabalhadores ao ar livre.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q12",
            "text": "Paciente de 8 anos com prurido ocular intenso, hiperemia, fotofobia e presença de papilas gigantes em conjuntiva tarsal superior. Qual a principal hipótese diagnóstica?",
            "options": [
                "Conjuntivite bacteriana",
                "Conjuntivite viral",
                "Ceratoconjuntivite vernal (alérgica)",
                "Síndrome do olho seco"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro de prurido ocular intenso, associado a fotofobia e à presença de papilas gigantes (aspecto de 'paralelepípedo') na conjuntiva tarsal superior em uma criança, é a apresentação clássica da ceratoconjuntivite vernal, uma forma grave de alergia ocular.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q13",
            "text": "Qual o tratamento farmacológico mais adequado para o quadro de ceratoconjuntivite vernal?",
            "options": [
                "Colírios antibióticos",
                "Colírios de dupla ação (anti-histamínico e estabilizador de mastócitos) e, em casos graves, corticoides tópicos",
                "Apenas lubrificantes",
                "Antivirais via oral"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento da alergia ocular como a ceratoconjuntivite vernal se baseia no controle da reação alérgica com colírios de dupla ação (ex: olopatadina). Em casos graves, para controlar a inflamação intensa e as papilas, são necessários ciclos curtos de corticoides tópicos.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q14",
            "text": "Paciente de 40 anos refere dor, hiperemia e secreção purulenta no canto medial do olho direito há 2 dias. Ao exame, observa-se abaulamento e eritema sobre o saco lacrimal. Qual o diagnóstico?",
            "options": [
                "Hordéolo (terçol)",
                "Calázio",
                "Dacriocistite aguda",
                "Celulite pré-septal"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A dacriocistite aguda é a infecção do saco lacrimal, que se manifesta como um processo inflamatório agudo (dor, edema, eritema) localizado na topografia do saco lacrimal (canto medial, abaixo do tendão cantal medial).",
            "tag": "Vias Lacrimais"
        },
        {
            "id": "PR2-Oftalmo-Q15.1",
            "text": "Qual a conduta inicial para uma queimadura ocular química por álcali (soda cáustica)?",
            "options": [
                "Ocluir o olho e encaminhar ao oftalmologista.",
                "Aplicar uma pomada antibiótica imediatamente.",
                "Irrigar o olho abundantemente com soro fisiológico ou água por pelo menos 20-30 minutos.",
                "Tentar neutralizar a base com uma solução ácida."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A medida mais importante e urgente em qualquer queimadura química ocular é a irrigação copiosa e imediata para remover o agente agressor e diluir sua concentração, minimizando o dano. A tentativa de neutralização (D) é contraindicada, pois a reação exotérmica pode piorar a lesão.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q15.2",
            "text": "Por que as queimaduras por álcalis são consideradas mais graves que as por ácidos?",
            "options": [
                "Porque os álcalis causam mais dor imediata.",
                "Porque os ácidos são mais comuns no ambiente doméstico.",
                "Porque os álcalis causam necrose por saponificação de gorduras e penetram mais profundamente nos tecidos oculares.",
                "Porque os ácidos causam necrose por coagulação que limita a sua penetração."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. As bases (álcalis) causam necrose liquefativa por saponificação dos lipídios das membranas celulares, o que permite que penetrem rapidamente e profundamente nas estruturas oculares, causando danos mais extensos e graves. Os ácidos (D) causam necrose de coagulação, que cria uma barreira e limita a penetração.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q16",
            "text": "Paciente com corpo estranho metálico na córnea há 2 dias. Após a remoção do corpo estranho, qual achado pode permanecer e necessitar de abordagem?",
            "options": [
                "Hipópio",
                "Hifema",
                "Anel de ferrugem (óxido de ferro)",
                "Edema de papila"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Corpos estranhos metálicos (ferrosos) que permanecem na córnea por algum tempo oxidam, deixando um anel de ferrugem impregnado no estroma corneano. Este anel deve ser removido, geralmente com uma broca apropriada, para evitar inflamação crônica e facilitar a cicatrização.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q17",
            "text": "Em um paciente com trauma contuso (soco) no olho, qual das seguintes estruturas NÃO faz parte da úvea e, portanto, não é primariamente afetada em uma uveíte traumática?",
            "options": [
                "Íris",
                "Corpo ciliar",
                "Coroide",
                "Retina"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A úvea é a camada vascular média do olho, composta pela íris, corpo ciliar e coroide. A retina é a camada neurossensorial interna. Uma uveíte traumática é a inflamação da úvea, não da retina.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q18",
            "text": "Qual o tratamento padrão para uma uveíte anterior traumática não complicada?",
            "options": [
                "Apenas colírio antibiótico",
                "Apenas analgésico via oral",
                "Colírio de corticoide para controlar a inflamação e cicloplégico para evitar sinéquias e aliviar a dor",
                "Cirurgia para drenar o humor aquoso inflamatório"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da uveíte anterior visa controlar a inflamação (com corticoides tópicos) e prevenir complicações como as sinéquias posteriores (aderências entre a íris e o cristalino), além de aliviar a dor do espasmo ciliar (com cicloplégicos, ex: atropina, ciclopentolato).",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q19.1",
            "text": "Mulher de 55 anos, diabética, com baixa visual súbita e indolor no olho direito. Fundoscopia revela hemorragias nos 4 quadrantes, veias tortuosas e dilatadas, e edema de papila. Qual o diagnóstico?",
            "options": [
                "Oclusão da artéria central da retina",
                "Oclusão da veia central da retina",
                "Descolamento de retina",
                "Neurite óptica"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O fundo de olho descrito, com hemorragias difusas nos quatro quadrantes, tortuosidade e dilatação venosa, e edema de papila, é o aspecto clássico de 'sangue e trovão' (blood and thunder) da oclusão da veia central da retina (OVCR).",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q19.2",
            "text": "Qual a principal causa de baixa visual permanente na oclusão da veia central da retina?",
            "options": [
                "Catarata secundária",
                "Edema macular",
                "Glaucoma neovascular",
                "Hemorragia vítrea"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O edema macular, seja isquêmico ou inflamatório, é a complicação mais comum e a principal causa de perda visual central e permanente após uma oclusão de veia retiniana. O tratamento com anti-VEGF visa tratar justamente o edema.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q20",
            "text": "Homem de 65 anos, hipertenso, com perda súbita, profunda e indolor da visão em um olho. Fundoscopia mostra palidez retiniana difusa e uma 'mancha vermelho-cereja' na mácula. Qual o diagnóstico?",
            "options": [
                "Oclusão da veia central da retina",
                "Neurite óptica",
                "Hemorragia vítrea maciça",
                "Oclusão da artéria central da retina"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A perda visual súbita, profunda e indolor, associada ao fundo de olho com palidez retiniana (por isquemia) e o sinal da mancha vermelho-cereja (a mácula continua visível pois é irrigada pela coroide), é o quadro patognomônico da oclusão da artéria central da retina (OACR).",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q21",
            "text": "Paciente de 60 anos, alto míope, refere surgimento de 'moscas volantes' e flashes de luz (fotopsias) no olho direito há 1 dia, seguido de uma 'sombra' ou 'cortina' no campo visual periférico. Qual a principal hipótese diagnóstica?",
            "options": [
                "Uveíte posterior",
                "Hemorragia vítrea",
                "Descolamento de retina regmatogênico",
                "Enxaqueca com aura"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A tríade de sintomas: moscas volantes (floaters), fotopsias (flashes) e perda de campo visual periférico (sombra/cortina) em um paciente com fator de risco (alta miopia) é a apresentação clássica do descolamento de retina regmatogênico, que é uma emergência cirúrgica.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q22.1",
            "text": "Recém-nascido pré-termo, submetido a oxigenoterapia em UTI neonatal, realiza mapeamento de retina na 4ª semana de vida. Qual patologia está sendo rastreada?",
            "options": [
                "Glaucoma congênito",
                "Catarata congênita",
                "Retinoblastoma",
                "Retinopatia da prematuridade (ROP)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Retinopatia da Prematuridade é uma doença vasoproliferativa da retina que afeta recém-nascidos prematuros e de baixo peso, especialmente aqueles expostos a altas concentrações de oxigênio. O rastreamento (mapeamento de retina) é fundamental para detectar e tratar a doença precocemente, evitando a cegueira.",
            "tag": "Retina Pediátrica"
        },
        {
            "id": "PR2-Oftalmo-Q22.2",
            "text": "Qual o tratamento para os casos graves de Retinopatia da Prematuridade (doença limiar ou plus)?",
            "options": [
                "Apenas observação",
                "Fotocoagulação a laser da retina avascular periférica ou anti-VEGF",
                "Uso de colírios de corticoide",
                "Vitrectomia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tratamento padrão para a ROP grave visa destruir a retina periférica avascular, que é a fonte dos fatores angiogênicos (como o VEGF) que causam a neovascularização patológica. Isso é feito principalmente com fotocoagulação a laser ou, mais recentemente, com injeção de anti-VEGF.",
            "tag": "Retina Pediátrica"
        },
        {
            "id": "PR2-Oftalmo-Q23.1",
            "text": "Criança de 2 anos é trazida à consulta pois os pais notaram um reflexo branco na pupila ('olho de gato') em fotografias com flash. Qual a principal hipótese diagnóstica a ser descartada?",
            "options": [
                "Catarata congênita",
                "Retinoblastoma",
                "Glaucoma congênito",
                "Doença de Coats"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A leucocoria (reflexo pupilar branco) em uma criança é o sinal de apresentação mais comum do Retinoblastoma, o tumor intraocular maligno mais frequente na infância. É uma emergência oncológica e deve ser investigada imediatamente.",
            "tag": "Oncologia Ocular"
        },
        {
            "id": "PR2-Oftalmo-Q23.2",
            "text": "Além da leucocoria, qual outro sinal comum de apresentação do Retinoblastoma?",
            "options": [
                "Ptose palpebral",
                "Estrabismo",
                "Nistagmo",
                "Olho seco"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O estrabismo (desvio ocular) é o segundo sinal de apresentação mais comum do Retinoblastoma. O tumor, ao acometer a mácula, causa baixa visão central, o que impede a correta fixação e alinhamento dos olhos.",
            "tag": "Oncologia Ocular"
        },
        {
            "id": "PR2-Oftalmo-Q24",
            "text": "Qual é o tumor maligno primário mais comum da pálpebra?",
            "options": [
                "Melanoma",
                "Carcinoma espinocelular",
                "Carcinoma basocelular",
                "Carcinoma sebáceo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O Carcinoma Basocelular (CBC) é o tipo mais comum de câncer de pele e também o tumor maligno mais frequente da região palpebral, respondendo por cerca de 90% dos casos.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q25",
            "text": "Em qual camada da retina estão localizados os fotorreceptores (cones e bastonetes)?",
            "options": [
                "Camada de fibras nervosas",
                "Camada de células ganglionares",
                "Camada nuclear externa",
                "Epitélio pigmentado da retina"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A camada nuclear externa da retina contém os corpos celulares dos fotorreceptores (cones e bastonetes), que são as células responsáveis por converter o estímulo luminoso em sinal elétrico.",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Oftalmo-Q26",
            "text": "Qual o músculo responsável pelo fechamento das pálpebras?",
            "options": [
                "Músculo levantador da pálpebra superior",
                "Músculo orbicular do olho",
                "Músculo de Müller",
                "Músculo reto superior"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O músculo orbicular do olho é um músculo circular ao redor da órbita que é responsável pela oclusão palpebral (piscar e fechar os olhos com força). É inervado pelo nervo facial (VII par).",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Oftalmo-Q27.1",
            "text": "Um paciente sofre um trauma na parede medial da órbita. Qual osso é mais frequentemente fraturado nesta localização?",
            "options": [
                "Frontal",
                "Zigomático",
                "Maxilar",
                "Etmoide (lâmina papirácea)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A lâmina papirácea do osso etmoide forma a maior parte da parede medial da órbita e é extremamente fina e delicada, sendo o local mais comum de fratura 'blow-out' nesta parede.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q27.2",
            "text": "Um paciente sofre um trauma no assoalho da órbita. Qual músculo extraocular é mais comumente encarcerado na fratura?",
            "options": [
                "Reto medial",
                "Reto superior",
                "Reto inferior",
                "Oblíquo superior"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O assoalho da órbita é fino e frequentemente fratura em traumas contusos (fratura 'blow-out'). O músculo reto inferior e a gordura orbitária adjacente podem hernia para o seio maxilar, ficando encarcerados e causando restrição na elevação do olho.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q28",
            "text": "Qual nervo craniano é responsável pela abdução do olho (movimento para fora)?",
            "options": [
                "Nervo Oculomotor (III par)",
                "Nervo Troclear (IV par)",
                "Nervo Abducente (VI par)",
                "Nervo Óptico (II par)"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O nervo Abducente (VI par craniano) inerva exclusivamente o músculo reto lateral, que tem como única função a abdução do globo ocular.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q29.1",
            "text": "Paciente com ptose palpebral, pupila dilatada e olho desviado 'para baixo e para fora'. Qual nervo craniano está acometido?",
            "options": [
                "Nervo Oculomotor (III par)",
                "Nervo Troclear (IV par)",
                "Nervo Abducente (VI par)",
                "Nervo Facial (VII par)"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. A paralisia completa do nervo Oculomotor (III par) causa ptose (por paralisia do levantador da pálpebra), midríase (por paralisia do esfíncter da pupila) e o olho fica desviado em abdução (pela ação sem oposição do reto lateral - VI par) e levemente deprimido.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q29.2",
            "text": "No caso de uma paralisia de III par com envolvimento da pupila (midríase), qual a causa mais provável a ser investigada?",
            "options": [
                "Diabetes Mellitus",
                "Hipertensão Arterial",
                "Aneurisma da artéria comunicante posterior",
                "Sinusite"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. As fibras parassimpáticas responsáveis pela constrição pupilar correm na periferia do III nervo. Uma lesão compressiva, como um aneurisma da artéria comunicante posterior, tipicamente afeta essas fibras precocemente, causando uma paralisia dolorosa com midríase. Causas isquêmicas (A, B) geralmente poupam a pupila.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q30",
            "text": "O que é ambliopia?",
            "options": [
                "É o desalinhamento dos eixos visuais.",
                "É a opacificação do cristalino.",
                "É a baixa acuidade visual em um ou ambos os olhos devido a um desenvolvimento visual anormal na infância, sem uma causa orgânica.",
                "É a inflamação do nervo óptico."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Ambliopia, ou 'olho preguiçoso', é uma condição em que a visão em um olho não se desenvolve adequadamente durante a infância porque o cérebro 'ignora' ou suprime a imagem daquele olho. As causas mais comuns são estrabismo e anisometropia (graus muito diferentes entre os olhos).",
            "tag": "Estrabismo e Ambliopia"
        },
        {
            "id": "PR2-Oftalmo-Q31",
            "text": "Qual o período crítico para o desenvolvimento da ambliopia e quando o tratamento é mais eficaz?",
            "options": [
                "Na adolescência",
                "Na vida adulta",
                "Até os 7-8 anos de idade",
                "Apenas no primeiro ano de vida"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O sistema visual tem grande plasticidade nos primeiros anos de vida. O período crítico para o desenvolvimento da ambliopia e para a eficácia do tratamento (geralmente oclusão do olho bom) vai até cerca de 7 a 8 anos de idade. Após essa fase, a recuperação visual é muito mais difícil.",
            "tag": "Estrabismo e Ambliopia"
        },
        {
            "id": "PR2-Oftalmo-Q32",
            "text": "Paciente de 35 anos queixa-se de visão dupla horizontal que piora ao olhar para a direita. Ao exame, apresenta limitação da abdução do olho direito. Qual o diagnóstico mais provável?",
            "options": [
                "Paralisia do III nervo direito",
                "Paralisia do IV nervo direito",
                "Paralisia do VI nervo direito",
                "Oftalmopatia de Graves"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A diplopia horizontal que piora ao tentar olhar para o lado da lesão, associada a uma limitação da abdução (movimento para fora) daquele olho, é o sinal clássico da paralisia do VI nervo craniano (nervo abducente), que inerva o músculo reto lateral.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q33",
            "text": "O que é o teste de Hirschberg?",
            "options": [
                "É um teste para medir a pressão intraocular.",
                "É um teste para avaliar o fundo de olho.",
                "É um teste para avaliar o alinhamento ocular através do reflexo luminoso corneano.",
                "É um teste para medir a produção de lágrima."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O teste de Hirschberg, ou teste do reflexo luminoso, é um método objetivo e rápido para avaliar o alinhamento ocular. O examinador observa a posição do reflexo de uma fonte de luz nas córneas do paciente. Se os reflexos estiverem centrados e simétricos, os olhos estão alinhados.",
            "tag": "Estrabismo e Ambliopia"
        },
        {
            "id": "PR2-Oftalmo-Q34",
            "text": "Paciente apresenta desvio do olho para dentro (em direção ao nariz). Como se chama esse tipo de estrabismo?",
            "options": [
                "Exotropia",
                "Hipertropia",
                "Esotropia (ou endotropia)",
                "Hipotropia"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Esotropia é o termo médico para o desvio convergente, ou seja, quando um ou ambos os olhos estão desviados para dentro (medialmente).",
            "tag": "Estrabismo e Ambliopia"
        },
        {
            "id": "PR2-Oftalmo-Q35",
            "text": "O que é o hifema?",
            "options": [
                "É a presença de pus na câmara anterior.",
                "É a presença de sangue na câmara anterior.",
                "É a presença de sangue no vítreo.",
                "É a inflamação da íris."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Hifema é o acúmulo de sangue na câmara anterior do olho (o espaço entre a córnea e a íris), geralmente resultante de um trauma contuso que lesa os vasos da íris ou do corpo ciliar.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q36.1",
            "text": "Recém-nascido apresenta lacrimejamento constante, secreção e 'olho molhado' desde as primeiras semanas de vida. Qual o diagnóstico mais provável?",
            "options": [
                "Glaucoma congênito",
                "Conjuntivite neonatal",
                "Obstrução congênita do ducto nasolacrimal",
                "Catarata congênita"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A obstrução congênita do ducto nasolacrimal é a causa mais comum de lacrimejamento persistente no lactente. Ocorre por uma imperfuração da válvula de Hasner na extremidade distal do ducto.",
            "tag": "Vias Lacrimais"
        },
        {
            "id": "PR2-Oftalmo-Q36.2",
            "text": "Qual a conduta inicial para a obstrução congênita do ducto nasolacrimal?",
            "options": [
                "Cirurgia imediata (sondagem)",
                "Uso de colírios antibióticos contínuos",
                "Observação e massagem de Crigler",
                "Oclusão do ponto lacrimal"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A maioria dos casos de obstrução congênita do ducto nasolacrimal se resolve espontaneamente no primeiro ano de vida. A conduta inicial é conservadora, orientando os pais a realizarem a massagem de Crigler (pressão hidrostática sobre o saco lacrimal) para tentar romper a membrana.",
            "tag": "Vias Lacrimais"
        },
        {
            "id": "PR2-Oftalmo-Q37",
            "text": "Qual das seguintes condições NÃO é uma causa de leucocoria?",
            "options": [
                "Retinoblastoma",
                "Catarata congênita",
                "Doença de Coats",
                "Glaucoma agudo"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. Leucocoria significa 'pupila branca'. As principais causas são o Retinoblastoma (A), a Catarata congênita (B) e a Doença de Coats (C). O glaucoma agudo causa olho vermelho, dor, edema de córnea e aumento da PIO, mas não leucocoria.",
            "tag": "Oncologia Ocular"
        },
        {
            "id": "PR2-Oftalmo-Q38",
            "text": "Paciente de 60 anos, com diabetes há 20 anos, apresenta baixa visual progressiva. Na fundoscopia, observam-se neovasos no disco óptico e em outras áreas da retina. Qual o estágio da retinopatia diabética?",
            "options": [
                "Retinopatia Diabética Não Proliferativa Leve",
                "Retinopatia Diabética Não Proliferativa Moderada",
                "Retinopatia Diabética Não Proliferativa Grave",
                "Retinopatia Diabética Proliferativa"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A presença de neovasos (vasos sanguíneos anormais e frágeis) na retina ou no disco óptico é o marco que define a forma mais avançada da doença, a Retinopatia Diabética Proliferativa (RDP), que tem alto risco de complicações graves como hemorragia vítrea e descolamento de retina tracional.",
            "tag": "Retinopatia"
        },
        {
            "id": "PR2-Oftalmo-Q39",
            "text": "Qual o tratamento padrão para a Retinopatia Diabética Proliferativa?",
            "options": [
                "Apenas controle glicêmico rigoroso.",
                "Injeções intravítreas de anti-VEGF.",
                "Panfotocoagulação a laser da retina.",
                "Vitrectomia via pars plana."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento padrão-ouro para a RDP é a panfotocoagulação retiniana a laser. O objetivo é destruir a retina periférica isquêmica para diminuir a produção de fatores angiogênicos (VEGF) e induzir a regressão dos neovasos, prevenindo a cegueira.",
            "tag": "Retinopatia"
        },
        {
            "id": "PR2-Oftalmo-Q40",
            "text": "O que é o sinal de Seidel?",
            "options": [
                "É a presença de células inflamatórias no vítreo.",
                "É a observação de vazamento de humor aquoso de uma perfuração corneana, visualizado com fluoresceína.",
                "É a impossibilidade de eversão da pálpebra superior.",
                "É um reflexo pupilar branco."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O sinal de Seidel é um teste semiológico fundamental na avaliação do trauma ocular. Consiste na instilação de uma gota de fluoresceína no olho para evidenciar o extravasamento ativo de humor aquoso através de uma perfuração na córnea ou esclera, que aparece como um 'riacho' de cor verde-clara sob a luz azul de cobalto.",
            "tag": "Trauma"
        },
        {
            "id": "PR2-Oftalmo-Q41.1",
            "text": "Paciente apresenta lesão nodular, endurecida e indolor na pálpebra, sem sinais inflamatórios agudos. A lesão surgiu após um episódio de terçol há alguns meses. Qual o diagnóstico?",
            "options": [
                "Hordéolo",
                "Calázio",
                "Xantelasma",
                "Carcinoma basocelular"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O calázio é um granuloma lipofágico inflamatório crônico causado pela obstrução de uma glândula de Meibomius. Clinicamente, apresenta-se como um nódulo palpebral firme, indolor e não infeccioso, que pode ser uma sequela de um hordéolo interno.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q41.2",
            "text": "Qual o tratamento inicial para um calázio pequeno e recente?",
            "options": [
                "Antibiótico sistêmico",
                "Excisão cirúrgica imediata",
                "Injeção de corticoide",
                "Compressas mornas e massagem palpebral"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O tratamento conservador com compressas mornas e massagem é a primeira linha para calázios pequenos, visando liquefazer o conteúdo sebáceo retido e facilitar a drenagem da glândula obstruída.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q42",
            "text": "Paciente refere dor ocular intensa de início súbito, visão embaçada, halos coloridos ao redor das luzes e náuseas. Ao exame, olho vermelho, córnea turva e pupila em média midríase fixa. A tonometria de aplanação revela PIO de 55 mmHg. Qual o diagnóstico?",
            "options": [
                "Uveíte anterior aguda",
                "Conjuntivite aguda",
                "Crise aguda de glaucoma de ângulo fechado",
                "Ceratite aguda"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O quadro descrito com dor ocular muito intensa, baixa visual súbita, edema de córnea, pupila fixa e pressão intraocular (PIO) muito elevada é a apresentação clássica da crise aguda de glaucoma primário de ângulo fechado, uma emergência oftalmológica.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q43",
            "text": "Qual a conduta imediata para a crise aguda de glaucoma de ângulo fechado?",
            "options": [
                "Apenas analgésicos e aguardar.",
                "Cirurgia de catarata de emergência.",
                "Iniciar imediatamente terapia hipotensora máxima (tópica e sistêmica) e miótico.",
                "Dilatar a pupila com colírio de atropina."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O objetivo inicial é baixar a pressão intraocular o mais rápido possível. Isso é feito com uma combinação de colírios hipotensores (beta-bloqueador, alfa-agonista, inibidor da anidrase carbônica), medicação sistêmica (manitol, acetazolamida) e um colírio miótico (pilocarpina) para tentar quebrar o bloqueio pupilar.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q44",
            "text": "O que é a gonioscopia?",
            "options": [
                "É o exame que mede a curvatura da córnea.",
                "É o exame que avalia o ângulo da câmara anterior, onde ocorre a drenagem do humor aquoso.",
                "É o exame que fotografa o nervo óptico.",
                "É o exame que mede o comprimento axial do olho."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A gonioscopia é um exame fundamental na oftalmologia, realizado com uma lente especial em contato com a córnea, que permite a visualização direta das estruturas do ângulo da câmara anterior (trabeculado, esporão escleral, etc.), sendo essencial para classificar os glaucomas em ângulo aberto ou fechado.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q45.1",
            "text": "Qual é a definição de cegueira legal no Brasil?",
            "options": [
                "Acuidade visual corrigida no melhor olho igual ou pior que 20/200.",
                "Acuidade visual corrigida no melhor olho igual ou pior que 20/400.",
                "Campo visual menor que 20 graus no melhor olho.",
                "Combinação da alternativa A e/ou C."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A cegueira legal é definida por critérios funcionais. No Brasil e em muitos países, considera-se cego legal o indivíduo que, mesmo com a melhor correção óptica, apresenta acuidade visual igual ou inferior a 20/200 (ou 0,1) no melhor olho, OU campo visual restrito a um ângulo de 20 graus ou menos.",
            "tag": "Refração e Visão Subnormal"
        },
        {
            "id": "PR2-Oftalmo-Q45.2",
            "text": "Quais são as principais causas de cegueira evitável no mundo?",
            "options": [
                "Glaucoma e DMRI",
                "Retinopatia diabética e trauma",
                "Catarata e erros refrativos não corrigidos",
                "Tracoma e oncocercose"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Segundo a Organização Mundial da Saúde, as principais causas de deficiência visual e cegueira evitável em todo o mundo são a catarata (que é cirurgicamente curável) e os erros de refração (miopia, hipermetropia, astigmatismo) que não são corrigidos com óculos ou outras formas de tratamento.",
            "tag": "Saúde Pública"
        },
        {
            "id": "PR2-Oftalmo-Q46.1",
            "text": "Qual o nome do erro refrativo em que o olho é 'longo demais' e a imagem se forma na frente da retina, causando dificuldade para enxergar de longe?",
            "options": [
                "Hipermetropia",
                "Miopia",
                "Astigmatismo",
                "Presbiopia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Na miopia axial, o globo ocular é mais longo que o normal. Isso faz com que os raios de luz paralelos que vêm de objetos distantes foquem em um ponto antes da retina, resultando em uma imagem desfocada para longe.",
            "tag": "Refração"
        },
        {
            "id": "PR2-Oftalmo-Q46.2",
            "text": "Qual o nome do erro refrativo em que o olho é 'curto demais' e a imagem se forma atrás da retina, causando maior dificuldade para perto?",
            "options": [
                "Hipermetropia",
                "Miopia",
                "Astigmatismo",
                "Presbiopia"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Na hipermetropia axial, o globo ocular é mais curto que o normal. Os raios de luz são focalizados em um ponto virtual atrás da retina. O paciente precisa usar o poder de acomodação do cristalino para trazer a imagem para a retina, o que gera maior esforço e dificuldade para a visão de perto.",
            "tag": "Refração"
        },
        {
            "id": "PR2-Oftalmo-Q47",
            "text": "O que é presbiopia (vista cansada)?",
            "options": [
                "É um tipo de astigmatismo que surge com a idade.",
                "É a dificuldade de enxergar de longe que piora com a idade.",
                "É a perda fisiológica da capacidade de acomodação do cristalino, que dificulta a visão de perto após os 40 anos.",
                "É uma complicação do glaucoma."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A presbiopia é um processo natural de envelhecimento do olho no qual o cristalino perde sua elasticidade e o músculo ciliar perde sua força, resultando em uma diminuição progressiva da capacidade de focar objetos próximos. Geralmente se inicia por volta dos 40 anos de idade.",
            "tag": "Refração"
        },
        {
            "id": "PR2-Oftalmo-Q48",
            "text": "O que é o teste do olhinho (teste do reflexo vermelho)?",
            "options": [
                "É um teste para medir a pressão ocular em bebês.",
                "É um teste de triagem neonatal que avalia o reflexo vermelho do fundo de olho para detectar precocemente patologias como catarata congênita e retinoblastoma.",
                "É um teste para verificar se o bebê tem daltonismo.",
                "É um teste para avaliar a motilidade ocular do recém-nascido."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O teste do reflexo vermelho é um exame simples e fundamental que deve ser realizado em todos os recém-nascidos. Um oftalmoscópio direto é usado para verificar a presença e a qualidade do reflexo vermelho que vem da retina. A ausência ou alteração desse reflexo (leucocoria) pode indicar doenças graves que causam cegueira.",
            "tag": "Oftalmopediatria"
        },
        {
            "id": "PR2-Oftalmo-Q49.1",
            "text": "Paciente de 70 anos refere metamorfopsia (visão ondulada) e um escotoma central no olho direito. Qual exame simples de autoavaliação pode ser usado para detectar esses sintomas?",
            "options": [
                "Teste de Ishihara",
                "Tabela de Snellen",
                "Grade de Amsler",
                "Teste de Schirmer"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A Grade de Amsler é uma tela quadriculada com um ponto central. É um teste subjetivo simples que o paciente pode usar em casa para monitorar a visão central. Alterações como linhas tortas (metamorfopsia) ou manchas (escotomas) são sugestivas de doenças maculares, como a DMRI.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q49.2",
            "text": "Qual o tratamento padrão para a forma úmida (exsudativa) da DMRI?",
            "options": [
                "Apenas suplementação com vitaminas.",
                "Fotocoagulação a laser.",
                "Injeções intravítreas de agentes anti-VEGF.",
                "Terapia fotodinâmica (PDT)."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A forma úmida da DMRI é caracterizada pelo crescimento de neovasos sob a retina, que extravasam fluido e sangue. O tratamento que revolucionou o prognóstico da doença consiste em injeções intravítreas de medicamentos que bloqueiam o fator de crescimento endotelial vascular (anti-VEGF), como ranibizumabe e aflibercepte.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q50",
            "text": "O que é um calázio?",
            "options": [
                "Infecção aguda de uma glândula na margem palpebral (terçol).",
                "Inflamação crônica granulomatosa de uma glândula de Meibomius obstruída.",
                "Depósito de gordura amarelado na pele da pálpebra.",
                "Infecção do saco lacrimal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O calázio é um lipogranuloma estéril e crônico que se forma devido à obstrução do ducto de uma glândula de Meibomius e o consequente extravasamento de seu conteúdo lipídico para os tecidos adjacentes, gerando uma reação inflamatória.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q51",
            "text": "O que é ectrópio?",
            "options": [
                "É a eversão da margem palpebral, expondo a conjuntiva.",
                "É a inversão da margem palpebral, fazendo os cílios tocarem o olho.",
                "É a queda da pálpebra superior.",
                "É a inflamação da margem palpebral."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. Ectrópio é o mau posicionamento da pálpebra, que se vira para fora. Isso deixa a superfície ocular exposta, podendo causar olho seco, lacrimejamento (epífora) e ceratite de exposição. A causa mais comum é a involucional (senil).",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q52",
            "text": "O que é entrópio?",
            "options": [
                "É a eversão da margem palpebral.",
                "É a inversão da margem palpebral, fazendo os cílios tocarem o olho.",
                "É a queda da pálpebra superior.",
                "É a inflamação da margem palpebral."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Entrópio é o mau posicionamento da pálpebra, que se vira para dentro. Isso causa triquíase (toque dos cílios na córnea e conjuntiva), levando a sintomas de corpo estranho, irritação, lacrimejamento e risco de úlcera de córnea.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q53",
            "text": "O que é uma úlcera de córnea?",
            "options": [
                "É uma opacidade do cristalino.",
                "É uma inflamação da conjuntiva.",
                "É uma escavação do tecido corneano associada a um processo inflamatório, geralmente infeccioso.",
                "É um aumento da pressão intraocular."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Uma úlcera de córnea (ou ceratite ulcerativa) é uma ferida aberta na córnea, com perda de substância do epitélio e estroma, acompanhada de um infiltrado inflamatório. A maioria das úlceras é causada por infecções (bactérias, fungos, vírus, protozoários).",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q54",
            "text": "Qual das seguintes condições NÃO costuma cursar com dor ocular?",
            "options": [
                "Glaucoma agudo de ângulo fechado",
                "Ceratite",
                "Uveíte anterior",
                "Glaucoma primário de ângulo aberto (fase inicial)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O Glaucoma Primário de Ângulo Aberto é conhecido como o 'ladrão silencioso da visão' porque, em suas fases iniciais e moderadas, ele é completamente assintomático, não causando dor ou outros sintomas perceptíveis pelo paciente.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q55",
            "text": "O que é o teste de sensibilidade corneana?",
            "options": [
                "Mede a espessura da córnea.",
                "Avalia a integridade do filme lacrimal.",
                "Testa a inervação sensorial da córnea, geralmente com um fio de algodão.",
                "Mede a curvatura da córnea."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O teste de sensibilidade corneana avalia a função do ramo oftálmico do nervo trigêmeo (V1). A diminuição da sensibilidade (hipoestesia) é um sinal importante em algumas doenças, como a ceratite herpética.",
            "tag": "Semiologia"
        },
        {
            "id": "PR2-Oftalmo-Q56.1",
            "text": "Paciente com história de herpes labial recorrente apresenta olho vermelho, dor, fotofobia e visão embaçada. Na lâmpada de fenda, a coloração com fluoresceína revela uma lesão dendrítica na córnea. Qual o diagnóstico?",
            "options": [
                "Ceratite bacteriana",
                "Ceratite fúngica",
                "Ceratite herpética epitelial",
                "Uveíte anterior"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A úlcera dendrítica, uma lesão linear com ramificações e bulbos terminais que cora com fluoresceína, é o achado patognomônico da ceratite epitelial causada pela replicação ativa do vírus Herpes Simples.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q56.2",
            "text": "Qual o tratamento para a ceratite herpética epitelial?",
            "options": [
                "Colírio de corticoide",
                "Colírio antibiótico",
                "Pomada ou colírio antiviral (ex: aciclovir, ganciclovir)",
                "Apenas lubrificantes"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento da infecção epitelial ativa pelo herpes simples é feito com agentes antivirais tópicos. O uso de corticoides (A) é contraindicado nesta fase, pois pode piorar a replicação viral e levar a uma úlcera geográfica.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q57.1",
            "text": "Qual das seguintes doenças sistêmicas NÃO está classicamente associada a manifestações em forma de uveíte?",
            "options": [
                "Espondilite anquilosante",
                "Sarcoidose",
                "Artrite idiopática juvenil",
                "Diabetes Mellitus"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A Diabetes Mellitus causa a retinopatia diabética, mas não é uma causa clássica de uveíte. As outras três doenças (A, B, C) são causas bem estabelecidas de uveíte anterior e/ou posterior.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q57.2",
            "text": "Na avaliação de um paciente com uveíte anterior, qual sinal biomicroscópico indica atividade inflamatória na câmara anterior?",
            "options": [
                "Opacidade do cristalino",
                "Células e flare no humor aquoso",
                "Drusas na mácula",
                "Escavação aumentada do nervo óptico"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A presença de células inflamatórias flutuando no humor aquoso e o 'flare' (aspecto turvo do humor aquoso devido ao extravasamento de proteínas, visível como um 'facho de luz' na lâmpada de fenda) são os sinais cardinais de atividade inflamatória na câmara anterior.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q58",
            "text": "O que são os precipitados ceráticos (PKs)?",
            "options": [
                "São depósitos de pigmento na superfície anterior do cristalino.",
                "São depósitos de células inflamatórias na superfície posterior da córnea (endotélio).",
                "São nódulos inflamatórios na superfície da íris.",
                "São opacidades no humor vítreo."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Os precipitados ceráticos são um sinal clássico de uveíte anterior. São aglomerados de células inflamatórias que, pela circulação do humor aquoso e pela gravidade, se depositam no endotélio corneano. A sua aparência (finos, em 'poeira', ou 'gordurosos') pode ajudar a sugerir a etiologia.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q59",
            "text": "Qual o nome do desvio ocular latente, que só se manifesta quando a fusão binocular é quebrada (ex: teste de cobertura)?",
            "options": [
                "Tropia",
                "Foria",
                "Nistagmo",
                "Ambliopia"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. Foria (ou heteroforia) é um desvio latente dos olhos que é mantido alinhado pelo reflexo de fusão. O desvio só aparece quando um olho é ocluído. Tropia (A) é o desvio manifesto, presente com ambos os olhos abertos.",
            "tag": "Estrabismo e Ambliopia"
        },
        {
            "id": "PR2-Oftalmo-Q60",
            "text": "Paciente refere baixa visual para perto, que melhora ao 'espremer' os olhos ou afastar o texto. Qual o provável erro refrativo?",
            "options": [
                "Miopia",
                "Astigmatismo",
                "Presbiopia ou Hipermetropia",
                "Nenhum, é apenas cansaço."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A dificuldade para perto que melhora ao afastar os objetos é o sintoma clássico da presbiopia (vista cansada). A hipermetropia também pode causar sintomas semelhantes, pois exige esforço de acomodação. 'Espremer' os olhos cria um efeito estenopeico que pode melhorar a nitidez em vários erros refrativos.",
            "tag": "Refração"
        },
        {
            "id": "PR2-Oftalmo-Q61",
            "text": "O que é o teste de sensibilidade ao contraste?",
            "options": [
                "Mede a capacidade de distinguir cores.",
                "Mede a acuidade visual com letras de alto contraste.",
                "Mede a capacidade de distinguir um objeto do seu fundo, especialmente em baixos níveis de contraste.",
                "Mede a pressão intraocular."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A sensibilidade ao contraste é uma medida da qualidade da visão que vai além da acuidade visual da tabela de Snellen. Ela avalia a capacidade do sistema visual de discernir entre diferentes níveis de luminosidade. Muitas doenças, como catarata e glaucoma, podem reduzir a sensibilidade ao contraste antes de afetar a acuidade visual.",
            "tag": "Semiologia"
        },
        {
            "id": "PR2-Oftalmo-Q62",
            "text": "O que é o exame de Tomografia de Coerência Óptica (OCT)?",
            "options": [
                "É uma fotografia colorida do fundo de olho.",
                "É um exame de ultrassom que mede o comprimento do olho.",
                "É um exame que utiliza luz para criar imagens de alta resolução, em cortes transversais, das estruturas oculares, especialmente da retina e do nervo óptico.",
                "É um exame que injeta contraste para visualizar os vasos sanguíneos."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O OCT é análogo a uma 'biópsia óptica', fornecendo imagens em corte (tomográficas) das camadas da retina e do nervo óptico com resolução quase histológica. É um exame fundamental no diagnóstico e acompanhamento de doenças como DMRI, edema macular diabético e glaucoma.",
            "tag": "Exames Complementares"
        },
        {
            "id": "PR2-Oftalmo-Q63",
            "text": "Qual das seguintes afirmações sobre o glaucoma congênito é FALSA?",
            "options": [
                "Os sinais clássicos incluem epífora, fotofobia e blefaroespasmo.",
                "O aumento da PIO pode causar aumento do diâmetro corneano (buftalmo).",
                "O tratamento é primariamente clínico com colírios.",
                "Pode levar a estrias de Haab na córnea."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C, pois ela é falsa. O tratamento do glaucoma congênito é primariamente cirúrgico (goniotomia ou trabeculotomia) para corrigir a anomalia anatômica na malha de drenagem. O tratamento clínico com colírios é usado como adjuvante ou ponte para a cirurgia. As outras afirmações são verdadeiras.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q64.1",
            "text": "O que causa o hordéolo (terçol)?",
            "options": [
                "Uma infecção viral da conjuntiva.",
                "Uma inflamação crônica de uma glândula de Meibomius.",
                "Uma infecção bacteriana aguda (geralmente estafilocócica) de uma glândula da pálpebra.",
                "Uma reação alérgica."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O hordéolo é um abscesso agudo causado pela infecção de uma glândula palpebral. Se for de uma glândula de Zeiss ou Moll (na margem ciliar), é um hordéolo externo. Se for de uma glândula de Meibomius, é um hordéolo interno.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q64.2",
            "text": "Qual o tratamento para o hordéolo?",
            "options": [
                "Apenas colírio de corticoide.",
                "Cirurgia para remoção da glândula.",
                "Compressas mornas, higiene palpebral e, se necessário, pomada antibiótica.",
                "Colírio antiviral."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O tratamento do hordéolo visa acelerar a drenagem do abscesso. Isso é feito com compressas mornas e higiene da margem palpebral. Pomadas com antibiótico e corticoide podem ser usadas para controlar a infecção e a inflamação.",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q65",
            "text": "A pupila de Argyll Robertson, caracterizada por pupilas mióticas, irregulares, que não reagem à luz mas reagem à acomodação, é um sinal clássico de qual doença?",
            "options": [
                "Diabetes Mellitus",
                "Esclerose Múltipla",
                "Sífilis terciária (neurossífilis)",
                "Hipertensão Arterial"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A dissociação luz-perto, onde a via da acomodação está intacta mas a via do reflexo fotomotor não, com pupilas pequenas e irregulares, é um sinal neuroftalmológico clássico da neurossífilis.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q66.1",
            "text": "Paciente de 70 anos com hipertensão e diabetes refere perda de campo visual superior em um olho. Fundoscopia revela hemorragia e edema no polo inferior da retina. Qual o diagnóstico?",
            "options": [
                "Oclusão de Ramo Arterial da Retina",
                "Oclusão de Ramo Venoso da Retina",
                "Oclusão da Veia Central da Retina",
                "Descolamento de Retina"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O acometimento de um setor específico da retina (neste caso, o polo inferior, causando defeito de campo superior) com hemorragias e edema é característico da oclusão de um ramo da veia retiniana, frequentemente associada a cruzamentos arteriovenosos patológicos em pacientes hipertensos.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q66.2",
            "text": "Qual o principal fator de risco para a oclusão de ramo venoso da retina?",
            "options": [
                "Miopia",
                "Trauma ocular",
                "Hipertensão arterial sistêmica",
                "Tabagismo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A hipertensão arterial crônica leva ao enrijecimento das arteríolas retinianas. Nos cruzamentos arteriovenosos, a arteríola enrijecida comprime a vênula, causando turbulência no fluxo sanguíneo e predispondo à trombose e oclusão venosa.",
            "tag": "Retina"
        },
        {
            "id": "PR2-Oftalmo-Q67",
            "text": "O que é o fenômeno de Tyndall na oftalmologia?",
            "options": [
                "É a observação do reflexo vermelho na pupila.",
                "É a visualização de células e flare na câmara anterior com a lâmpada de fenda.",
                "É a sensação de flashes de luz na periferia visual.",
                "É a visão de halos coloridos ao redor das luzes."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O fenômeno de Tyndall, na física, é a dispersão da luz por partículas em uma suspensão. Na oftalmologia, o termo é usado para descrever a visualização do feixe de luz da lâmpada de fenda atravessando um humor aquoso túrbido pela presença de células e proteínas (flare), um sinal de uveíte anterior.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q68",
            "text": "O que são as sinéquias posteriores?",
            "options": [
                "São aderências entre a córnea e a íris.",
                "São aderências entre a íris e o cristalino.",
                "São vasos anormais na íris.",
                "São depósitos de pigmento no trabeculado."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. As sinéquias posteriores são aderências inflamatórias entre a borda pupilar da íris e a cápsula anterior do cristalino. São uma complicação comum da uveíte anterior e, se forem extensas (360 graus), podem causar bloqueio pupilar e glaucoma agudo secundário.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q69",
            "text": "Qual o músculo extraocular inervado pelo nervo troclear (IV par)?",
            "options": [
                "Reto superior",
                "Reto inferior",
                "Oblíquo inferior",
                "Oblíquo superior"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. O nervo troclear é o único que inerva o músculo oblíquo superior, cuja principal ação é a inciclotorção e a depressão do olho em adução.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q70",
            "text": "Paciente com paralisia do IV nervo queixa-se de diplopia vertical que piora ao olhar para baixo e para o lado oposto da lesão. Qual manobra semiológica é característica desta condição?",
            "options": [
                "Manobra de Valsalva",
                "Teste de Hirschberg",
                "Manobra de Bielschowsky (inclinação da cabeça)",
                "Teste de sobrecarga hídrica"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A manobra de Bielschowsky é usada para diagnosticar a paralisia do músculo oblíquo superior. Na paralisia do IV nervo, a hipertropia (olho mais alto) piora quando a cabeça é inclinada para o lado da lesão, devido à ação compensatória dos músculos.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q71",
            "text": "O que é o defeito pupilar aferente relativo (pupila de Marcus Gunn)?",
            "options": [
                "É a ausência de reação pupilar à luz em ambos os olhos.",
                "É uma pupila miótica que não dilata no escuro.",
                "É uma condição em que, ao alternar o estímulo luminoso entre os olhos, a pupila do olho afetado se dilata paradoxalmente em vez de contrair.",
                "É uma pupila dilatada que não reage à luz nem à acomodação."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O defeito pupilar aferente relativo (DPAR) é um sinal de disfunção da via aferente (nervo óptico). No teste do 'swinging flashlight', o olho doente percebe menos luz, então quando o estímulo vai do olho bom para o doente, ambas as pupilas se dilatam, pois o estímulo constritor é menor. É um sinal objetivo importante de neuropatia óptica.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q72.1",
            "text": "Paciente de 28 anos, sexo feminino, com dor à movimentação ocular e baixa visual em um olho, com escotoma central. Fundoscopia normal. Qual a principal hipótese?",
            "options": [
                "Glaucoma agudo",
                "Neurite óptica retrobulbar",
                "Oclusão de artéria central da retina",
                "Descolamento de retina"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A tríade de baixa visual subaguda, dor à movimentação ocular e discromatopsia (alteração na visão de cores) em um paciente jovem é a apresentação clássica da neurite óptica. Quando o fundo de olho é normal, ela é chamada de retrobulbar, pois a inflamação ocorre na porção posterior do nervo óptico.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q72.2",
            "text": "A neurite óptica está fortemente associada a qual doença desmielinizante do sistema nervoso central?",
            "options": [
                "Doença de Alzheimer",
                "Doença de Parkinson",
                "Esclerose Lateral Amiotrófica (ELA)",
                "Esclerose Múltipla (EM)"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A neurite óptica é a manifestação inicial da Esclerose Múltipla em cerca de 20% dos pacientes e ocorre em aproximadamente 50% dos pacientes em algum momento da doença. Portanto, todo paciente com um primeiro episódio de neurite óptica deve ser investigado para EM.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q73",
            "text": "O que é o tracoma?",
            "options": [
                "É uma conjuntivite viral causada pelo adenovírus.",
                "É uma ceratoconjuntivite crônica causada pela bactéria Chlamydia trachomatis, que pode levar à cegueira por cicatrizes.",
                "É uma infecção fúngica da córnea.",
                "É uma inflamação da glândula lacrimal."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O tracoma é uma doença infecciosa crônica, uma das principais causas de cegueira infecciosa evitável no mundo. A infecção repetida pela Chlamydia trachomatis leva a um processo cicatricial na conjuntiva tarsal, causando entrópio, triquíase e, finalmente, opacidade corneana e cegueira.",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q74.1",
            "text": "O que é o ceratocone?",
            "options": [
                "É uma inflamação da córnea.",
                "É um afinamento e protrusão progressiva da córnea, que assume um formato cônico.",
                "É um depósito de cálcio na córnea.",
                "É um tumor benigno da córnea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O ceratocone é uma doença ectásica da córnea, de caráter progressivo e não inflamatório, que causa um afinamento e abaulamento da córnea, levando a astigmatismo irregular e baixa acuidade visual.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q74.2",
            "text": "Qual o principal fator de risco modificável associado à progressão do ceratocone?",
            "options": [
                "Uso de óculos",
                "Exposição solar",
                "Coçar os olhos",
                "Dieta"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O ato de coçar os olhos de forma crônica e vigorosa é um fator de risco fortemente associado ao desenvolvimento e à progressão do ceratocone. Orientar o paciente a não coçar os olhos e tratar a alergia ocular associada é fundamental no manejo da doença.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q75",
            "text": "Qual exame é considerado o padrão-ouro para o diagnóstico precoce do ceratocone?",
            "options": [
                "Paquimetria",
                "Retinoscopia",
                "Topografia corneana (ou Tomografia de Córnea)",
                "Teste de acuidade visual"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A topografia e a tomografia de córnea são exames que mapeiam a curvatura e a espessura da córnea em milhares de pontos, permitindo detectar as alterações sutis e os padrões de curvatura assimétrica característicos do ceratocone, mesmo em fases subclínicas.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q76",
            "text": "O que é o tratamento de crosslinking do colágeno corneano?",
            "options": [
                "É uma cirurgia para transplante de córnea.",
                "É um procedimento que usa radiação ultravioleta A (UVA) e riboflavina (vitamina B2) para enrijecer a córnea e frear a progressão do ceratocone.",
                "É o uso de lentes de contato rígidas para aplanar a córnea.",
                "É a implantação de um anel no interior da córnea."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O crosslinking é o único tratamento que atua na fisiopatologia do ceratocone. O procedimento cria novas ligações covalentes entre as fibras de colágeno do estroma, aumentando a rigidez biomecânica da córnea e, na maioria dos casos, estabilizando a doença e evitando a sua progressão.",
            "tag": "Córnea"
        },
        {
            "id": "PR2-Oftalmo-Q77",
            "text": "O que é a hemianopsia homônima?",
            "options": [
                "É a perda da metade superior do campo visual de ambos os olhos.",
                "É a perda da metade temporal do campo visual de ambos os olhos (hemianopsia bitemporal).",
                "É a perda da mesma metade (direita ou esquerda) do campo visual de ambos os olhos.",
                "É a perda da visão em apenas um olho."
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A hemianopsia homônima é a perda de campo visual que afeta o lado direito ou o lado esquerdo de ambos os olhos. É causada por uma lesão na via óptica retroquiasmática (após o quiasma óptico), como um AVC no trato óptico ou no córtex visual.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q78",
            "text": "Uma lesão que comprime o centro do quiasma óptico, como um tumor de hipófise, tipicamente causa qual defeito de campo visual?",
            "options": [
                "Hemianopsia homônima direita",
                "Hemianopsia bitemporal",
                "Hemianopsia binasal",
                "Quadrantanopsia superior"
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. No quiasma óptico, as fibras nervosas das hemirretinas nasais (que enxergam o campo visual temporal) cruzam para o lado oposto. Uma lesão central no quiasma, como um adenoma de hipófise, comprime justamente essas fibras cruzadas, causando a perda dos campos visuais temporais de ambos os olhos, ou seja, uma hemianopsia bitemporal.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q79",
            "text": "O que é edema de papila?",
            "options": [
                "É um afinamento da camada de fibras nervosas da retina.",
                "É o inchaço do disco óptico devido ao aumento da pressão intracraniana.",
                "É a inflamação do nervo óptico.",
                "É a presença de neovasos no disco óptico."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O termo papiledema refere-se especificamente ao edema do disco óptico (a 'cabeça' do nervo óptico) que ocorre de forma bilateral e é causado pela transmissão da hipertensão intracraniana para o espaço subaracnóideo ao redor do nervo, causando estase do fluxo axoplasmático. É uma emergência neurológica.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q80",
            "text": "Qual das seguintes condições NÃO é uma causa de olho vermelho doloroso com baixa visual?",
            "options": [
                "Glaucoma agudo",
                "Uveíte anterior",
                "Ceratite",
                "Hemorragia subconjuntival"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A hemorragia subconjuntival, apesar de ter um aspecto alarmante (sangue sob a conjuntiva), é uma condição benigna que não causa dor nem afeta a visão. As outras três opções são causas importantes de olho vermelho doloroso que requerem avaliação oftalmológica urgente.",
            "tag": "Diagnóstico Diferencial"
        },
        {
            "id": "PR2-Oftalmo-Q81.1",
            "text": "Paciente queixa-se de visão dupla. Ao exame, o olho esquerdo não consegue se mover para baixo quando está posicionado em direção ao nariz (adução). Qual músculo está paralisado?",
            "options": [
                "Reto inferior esquerdo",
                "Reto superior esquerdo",
                "Oblíquo superior esquerdo",
                "Oblíquo inferior esquerdo"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A principal ação do músculo oblíquo superior é a depressão do olho quando ele está em adução. Portanto, a dificuldade em olhar para 'baixo e para dentro' é o sinal clássico da paralisia do oblíquo superior, causada por uma lesão do nervo troclear (IV par).",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q81.2",
            "text": "A principal causa de paralisia do IV nervo craniano (troclear) em adultos é:",
            "options": [
                "Tumor cerebral",
                "Aneurisma",
                "Traumatismo craniano",
                "Diabetes Mellitus (isquêmica)"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. O nervo troclear tem o trajeto intracraniano mais longo e é muito fino, o que o torna particularmente vulnerável a lesões por cisalhamento em traumatismos cranianos, mesmo os considerados leves.",
            "tag": "Neuroftalmologia"
        },
        {
            "id": "PR2-Oftalmo-Q82",
            "text": "O que é o teste de cobertura e descoberta (cover-uncover test)?",
            "options": [
                "É usado para medir a pressão intraocular.",
                "É usado para diferenciar uma foria (desvio latente) de uma tropia (desvio manifesto).",
                "É usado para avaliar a visão de cores.",
                "É usado para detectar olho seco."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O teste de cobertura e descoberta é a manobra semiológica fundamental para o diagnóstico de estrabismo. Ao ocluir um olho, observa-se o movimento do olho não ocluído para detectar uma tropia. Ao desocluir, observa-se o movimento do olho que estava coberto para detectar uma foria.",
            "tag": "Estrabismo e Ambliopia"
        },
        {
            "id": "PR2-Oftalmo-Q83",
            "text": "Qual das seguintes afirmações sobre a conjuntivite alérgica é VERDADEIRA?",
            "options": [
                "A principal característica é a secreção purulenta.",
                "O principal sintoma é o prurido (coceira).",
                "É comumente acompanhada de linfonodo pré-auricular.",
                "O tratamento de primeira linha é com antibióticos."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. O prurido é o sintoma sentinela da conjuntivite alérgica. A sua presença é altamente sugestiva do diagnóstico, enquanto sua ausência praticamente o exclui. As outras características pertencem a outros tipos de conjuntivite (bacteriana ou viral).",
            "tag": "Conjuntiva"
        },
        {
            "id": "PR2-Oftalmo-Q84",
            "text": "Qual o nome da condição em que há inflamação de ambas as pálpebras, geralmente com formação de crostas nos cílios, vermelhidão e irritação?",
            "options": [
                "Conjuntivite",
                "Ceratite",
                "Blefarite",
                "Uveíte"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. Blefarite é o termo geral para a inflamação das margens palpebrais. Pode ser anterior (afetando a base dos cílios, geralmente estafilocócica ou seborreica) ou posterior (afetando as glândulas de Meibomius).",
            "tag": "Pálpebras"
        },
        {
            "id": "PR2-Oftalmo-Q85",
            "text": "O que é a oftalmia simpática?",
            "options": [
                "É uma conjuntivite transmitida por contato direto.",
                "É uma uveíte granulomatosa bilateral grave que ocorre após um trauma ocular penetrante em um dos olhos.",
                "É o desalinhamento ocular que ocorre por fadiga visual.",
                "É a inflamação da órbita secundária a uma sinusite."
            ],
            "answerIndex": 1,
            "explanation": "A alternativa correta é a B. A oftalmia simpática é uma complicação rara, mas devastadora, de um trauma ocular perfurante. É uma reação autoimune na qual o sistema imune do corpo ataca o olho não traumatizado (o olho 'simpatizante'), causando uma pan-uveíte bilateral que pode levar à cegueira.",
            "tag": "Uveítes"
        },
        {
            "id": "PR2-Oftalmo-Q86",
            "text": "Qual é a estrutura transparente e avascular que recobre a parte anterior do olho, funcionando como a principal lente refrativa?",
            "options": [
                "Íris",
                "Cristalino",
                "Córnea",
                "Esclera"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A córnea é a estrutura transparente localizada na frente da íris, responsável por cerca de dois terços do poder refrativo total do olho. Sua transparência e curvatura regular são essenciais para uma boa visão.",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Oftalmo-Q87",
            "text": "Qual o nome da membrana que reveste a superfície interna das pálpebras e a superfície anterior da esclera?",
            "options": [
                "Coroide",
                "Retina",
                "Cápsula de Tenon",
                "Conjuntiva"
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A conjuntiva é uma mucosa fina e transparente que recobre a esclera (conjuntiva bulbar) e a face interna das pálpebras (conjuntiva tarsal), formando um saco protetor.",
            "tag": "Anatomia"
        },
        {
            "id": "PR2-Oftalmo-Q88",
            "text": "Qual das seguintes condições NÃO representa um risco aumentado para o desenvolvimento de glaucoma?",
            "options": [
                "Pressão intraocular elevada",
                "História familiar positiva",
                "Miopia",
                "Idade avançada"
            ],
            "answerIndex": 2,
            "explanation": "A alternativa correta é a C. A alta miopia é um fator de risco para o Glaucoma Primário de Ângulo Aberto. Os outros fatores listados (PIO elevada, história familiar e idade) são os principais fatores de risco para a doença.",
            "tag": "Glaucoma"
        },
        {
            "id": "PR2-Oftalmo-Q89",
            "text": "No exame de triagem de uma criança de 3 anos, qual das seguintes condições pode ser detectada pela primeira vez?",
            "options": [
                "Ambliopia e Estrabismo",
                "Apenas Retinoblastoma",
                "Apenas Hipertensão ocular",
                "Apenas Uveíte cicatrizada"
            ],
            "answerIndex": 0,
            "explanation": "A alternativa correta é a A. O período entre 1 e 3 anos é crucial para o desenvolvimento visual. O estrabismo pode se manifestar nesta fase, e se não for corrigido, pode levar à ambliopia. Por isso, a triagem nesta idade é fundamental para detectar e tratar ambas as condições precocemente.",
            "tag": "Oftalmopediatria"
        },
        {
            "id": "PR2-Oftalmo-Q90",
            "text": "Assinale a alternativa incorreta sobre a orbitopatia de Graves:",
            "options": [
                "Os sinais oftalmológicos da Doença de Graves ocorrem somente após a elevação do hormônio tireoidiano.",
                "Entre 25% a 50% dos pacientes com Doença de Graves podem evoluir com algum grau de orbitopatia.",
                "Tabagismo e sexo feminino são fatores de risco para o desenvolvimento do quadro oftalmológico.",
                "O sinal mais comum é a retração da pálpebra superior (sinal de Dalrymple)."
            ],
            "answerIndex": 0,
            "explanation": "A alternativa incorreta (e portanto, a resposta correta) é a A. A orbitopatia de Graves é um processo autoimune que pode ocorrer antes, durante ou depois do hipertireoidismo, e até mesmo em pacientes com função tireoidiana normal (oftalmopatia eutireoidea). As outras afirmações são verdadeiras.",
            "tag": "Órbita"
        },
        {
            "id": "PR2-Oftalmo-Q91",
            "text": "Sobre a ceratite actínica (queimadura por solda), é correto afirmar:",
            "options": [
                "Os sintomas são imediatos após a exposição.",
                "O tratamento envolve oclusão bilateral e analgésicos.",
                "Causa dano permanente à retina.",
                "Ocorre uma lesão epitelial superficial que geralmente cicatriza sem sequelas em 24-48h."
            ],
            "answerIndex": 3,
            "explanation": "A alternativa correta é a D. A ceratite actínica é uma lesão dolorosa, mas superficial, do epitélio da córnea. Com o tratamento adequado (oclusão, lubrificação, analgésicos), o epitélio se regenera completamente em 1 a 2 dias, sem deixar cicatriz ou perda visual permanente.",
            "tag": "Trauma"
       
        }
    ]
    
}
    ]
