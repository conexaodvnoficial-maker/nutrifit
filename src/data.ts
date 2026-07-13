import { 
  ChallengeItem, 
  SolutionBenefit, 
  CategoryCard, 
  RecipeItem, 
  BonusItem, 
  BenefitItem, 
  FAQItem, 
  TestimonialItem 
} from "./types";

export const CHALLENGES: ChallengeItem[] = [
  {
    id: "challenge-1",
    title: "Falta de tempo para cozinhar",
    description: "Você acha que comer saudável exige passar horas na cozinha? Nossas receitas são pensadas para quem tem a rotina corrida e busca praticidade em até 20 minutos.",
    iconName: "Clock"
  },
  {
    id: "challenge-2",
    title: "Pouca variedade nas refeições",
    description: "Cansado de comer frango grelhado com batata doce todos os dias? Descubra novas combinações saborosas que tornam a alimentação um momento de prazer.",
    iconName: "UtensilsCrossed"
  },
  {
    id: "challenge-3",
    title: "Dificuldade para organizar o cardápio",
    description: "Ficar pensando no que cozinhar consome muita energia mental. Com nosso guia, você tem um planejamento estruturado por categorias e de fácil escolha.",
    iconName: "CalendarDays"
  },
  {
    id: "challenge-4",
    title: "Receitas complicadas e caras",
    description: "Pratos cheios de ingredientes raros que você só usa uma vez e estragam na geladeira. Aqui focamos em ingredientes acessíveis de qualquer supermercado.",
    iconName: "Coins"
  }
];

export const SOLUTION_BENEFITS: SolutionBenefit[] = [
  {
    id: "benefit-1",
    title: "Preparos rápidos e eficientes",
    description: "A maioria das receitas fica pronta em menos de 25 minutos, utilizando técnicas simples que poupam seu tempo e panelas sujas.",
    iconName: "Zap"
  },
  {
    id: "benefit-2",
    title: "Ingredientes acessíveis do dia a dia",
    description: "Chega de ingredientes caros e importados. Cozinhe de forma saudável usando o que você já encontra no mercado do seu bairro.",
    iconName: "ShoppingBag"
  },
  {
    id: "benefit-3",
    title: "Divisão inteligente por categorias",
    description: "Encontre instantaneamente o prato ideal para cada momento do seu dia através do nosso índice dinâmico e visual.",
    iconName: "Layers"
  },
  {
    id: "benefit-4",
    title: "Organização completa e sem stress",
    description: "Facilite as compras e a preparação prévia (marmitas) com dicas exclusivas de conservação para manter o sabor por mais dias.",
    iconName: "Sparkles"
  }
];

export const CATEGORIES: CategoryCard[] = [
  {
    id: "cat-breakfast",
    title: "Café da Manhã",
    description: "Desperte sua energia com opções nutritivas, rápidas e cheias de saciedade para começar o dia no ritmo certo.",
    iconName: "Coffee",
    recipesCount: "25 Receitas",
    gradient: "from-amber-500/10 to-orange-500/10 border-orange-500/20",
    tags: ["Energia", "Praticidade", "Fibras"]
  },
  {
    id: "cat-lunch",
    title: "Almoço",
    description: "Pratos equilibrados que combinam proteínas de qualidade, carboidratos complexos e vegetais para um almoço leve e saciante.",
    iconName: "Sun",
    recipesCount: "35 Receitas",
    gradient: "from-green-500/10 to-emerald-500/10 border-green-500/20",
    tags: ["Proteico", "Alimentação Completa", "Marmitas"]
  },
  {
    id: "cat-dinner",
    title: "Jantar",
    description: "Refeições mais leves e reconfortantes, de fácil digestão, perfeitas para encerrar o seu dia com bem-estar.",
    iconName: "Moon",
    recipesCount: "30 Receitas",
    gradient: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
    tags: ["Leveza", "Baixo Carboidrato", "Sono Reparador"]
  },
  {
    id: "cat-snacks",
    title: "Lanches Práticos",
    description: "Evite beliscar alimentos ultraprocessados com opções saudáveis e práticas para levar na bolsa ou comer à tarde.",
    iconName: "Apple",
    recipesCount: "25 Receitas",
    gradient: "from-rose-500/10 to-pink-500/10 border-rose-500/20",
    tags: ["Portátil", "Saciedade", "Anti-Fome"]
  },
  {
    id: "cat-desserts",
    title: "Sobremesas Saudáveis",
    description: "Mate a vontade de doce sem peso na consciência com opções deliciosas sem açúcar refinado ou farinhas brancas.",
    iconName: "Cookie",
    recipesCount: "20 Receitas",
    gradient: "from-purple-500/10 to-fuchsia-500/10 border-purple-500/20",
    tags: ["Doces Fit", "Zero Açúcar", "Funcional"]
  },
  {
    id: "cat-drinks",
    title: "Sucos & Bebidas",
    description: "Smoothies cremosos, sucos detox e chás termogênicos para potencializar sua hidratação e metabolismo.",
    iconName: "GlassWater",
    recipesCount: "15 Receitas",
    gradient: "from-cyan-500/10 to-teal-500/10 border-cyan-500/20",
    tags: ["Hidratação", "Detox", "Termogênico"]
  }
];

export const RECIPES: RecipeItem[] = [
  {
    id: "recipe-1",
    title: "Panqueca Fit de Aveia e Banana",
    category: "Café da Manhã",
    prepTime: "10 min",
    calories: "280 kcal",
    macros: { protein: "14g", carbs: "38g", fat: "6g" },
    ingredients: [
      "1 banana média madura",
      "2 colheres de sopa de farelo de aveia",
      "1 ovo inteiro",
      "1 colher de chá de canela em pó",
      "Mel ou melado de cana para finalizar"
    ],
    instructions: [
      "Amasse bem a banana em um prato fundo.",
      "Adicione o ovo e bata levemente com um garfo.",
      "Misture o farelo de aveia e a canela até obter uma massa homogênea.",
      "Despeje em uma frigideira antiaderente pré-aquecida e untada com um fio de óleo de coco.",
      "Deixe dourar por 2 minutos de cada lado em fogo baixo.",
      "Sirva com um fio de mel e rodelas extras de banana, se desejar."
    ],
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "recipe-2",
    title: "Salmão Grelhado com Crosta de Ervas",
    category: "Almoço / Jantar",
    prepTime: "20 min",
    calories: "340 kcal",
    macros: { protein: "32g", carbs: "2g", fat: "22g" },
    ingredients: [
      "150g de filé de salmão fresco",
      "Suco de 1/2 limão siciliano",
      "1 colher de chá de azeite de oliva extra virgem",
      "Ervas finas (alecrim, tomilho e salsa picados)",
      "Sal e pimenta-do-reino a gosto"
    ],
    instructions: [
      "Tempere o filé de salmão com sal, pimenta e o suco de limão.",
      "Em um recipiente pequeno, misture as ervas finas picadas com metade do azeite.",
      "Pressione as ervas sobre a parte superior do filé de salmão para formar uma crosta aderida.",
      "Aqueça uma frigideira com o restante do azeite em fogo médio.",
      "Coloque o salmão com a pele voltada para baixo e grelhe por 4 a 5 minutos.",
      "Vire delicadamente para selar a crosta por 2 a 3 minutos adicionais.",
      "Sirva acompanhado de vegetais no vapor ou uma salada verde."
    ],
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "recipe-3",
    title: "Bowl Nutritivo de Quinoa, Frango e Abacate",
    category: "Almoço",
    prepTime: "25 min",
    calories: "410 kcal",
    macros: { protein: "35g", carbs: "28g", fat: "16g" },
    ingredients: [
      "100g de peito de frango cozido e desfiado",
      "1/2 xícara de quinoa cozida",
      "1/2 abacate maduro cortado em fatias",
      "1 xícara de folhas de espinafre baby",
      "Tomates cereja cortados ao meio",
      "Sementes de gergelim para salpicar"
    ],
    instructions: [
      "Disponha a quinoa cozida como base de um bowl grande.",
      "Adicione as folhas de espinafre em um dos lados.",
      "Arrume o peito de frango desfiado ao lado.",
      "Adicione o abacate fatiado e os tomates cereja decorando as bordas.",
      "Regue com algumas gotas de limão e um fio de azeite.",
      "Salpique gergelim por cima e sirva em temperatura ambiente."
    ],
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "recipe-4",
    title: "Chia Pudding Cremoso de Morango",
    category: "Sobremesas Saudáveis",
    prepTime: "10 min",
    calories: "190 kcal",
    macros: { protein: "6g", carbs: "16g", fat: "11g" },
    ingredients: [
      "3 colheres de sopa de sementes de chia",
      "200ml de leite de amêndoas ou de coco light",
      "1 colher de chá de extrato de baunilha",
      "1 colher de sopa de adoçante natural (eritritol ou xilitol)",
      "5 morangos frescos higienizados e picados"
    ],
    instructions: [
      "Em um pote de vidro com tampa, misture o leite vegetal, a chia, a baunilha e o adoçante.",
      "Mexa vigorosamente para que as sementes não fiquem grudadas no fundo.",
      "Deixe descansar por 10 minutos em temperatura ambiente e mexa novamente.",
      "Adicione os morangos picados no fundo e cubra com o creme de chia.",
      "Tampe o pote e leve à geladeira por pelo menos 4 horas (ou durante a noite) até adquirir consistência de pudim.",
      "Sirva gelado, decorando com mais frutas por cima."
    ],
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "recipe-5",
    title: "Wrap Proteico de Ricota e Rúcula",
    category: "Lanches Práticos",
    prepTime: "12 min",
    calories: "220 kcal",
    macros: { protein: "16g", carbs: "19g", fat: "8g" },
    ingredients: [
      "1 folha de wrap integral (pão folha)",
      "3 colheres de sopa de ricota esfarelada",
      "1 colher de chá de azeite",
      "Punhado de rúcula fresca lavada",
      "3 tomates secos caseiros fatiados ou tomate fresco",
      "Orégano e pitada de sal"
    ],
    instructions: [
      "Em uma vasilha, amasse a ricota com o azeite, o orégano e a pitada de sal até formar uma pastinha.",
      "Aqueça rapidamente o wrap integral em uma frigideira limpa por 30 segundos de cada lado.",
      "Espalhe a pastinha de ricota uniformemente sobre a massa.",
      "Distribua as folhas de rúcula e o tomate por cima.",
      "Enrole bem apertado, dobre as pontas para dentro e corte ao meio na diagonal antes de servir."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "recipe-6",
    title: "Suco Verde Detox Antioxidante",
    category: "Sucos & Bebidas",
    prepTime: "8 min",
    calories: "85 kcal",
    macros: { protein: "2g", carbs: "18g", fat: "0g" },
    ingredients: [
      "1 folha grande de couve manteiga (sem o talo grosso)",
      "Suco de 1 limão tahiti",
      "1 fatia média de abacaxi",
      "1 pedaço pequeno de gengibre fresco (cerca de 1cm)",
      "200ml de água de coco gelada"
    ],
    instructions: [
      "Lave bem a folha de couve e pique grosseiramente.",
      "Coloque todos os ingredientes no liquidificador.",
      "Bata em velocidade máxima por cerca de 2 minutos até que a mistura fique completamente homogênea.",
      "Para reter todas as fibras e nutrientes, evite coar o suco antes de beber.",
      "Sirva imediatamente bem gelado ou com pedras de gelo."
    ],
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bonus-1",
    title: "Planner Alimentar Interativo",
    description: "Um guia de organização semanal completo em PDF preenchível e imprimível. Estruture sua semana, controle seus macros e saiba exatamente o que comer a cada dia sem perder tempo decidindo no calor do momento.",
    value: "R$ 47,00",
    iconName: "FileCheck",
    highlights: ["Organização Semanal", "Controle de Metas", "Fácil de Imprimir / Preencher"]
  },
  {
    id: "bonus-2",
    title: "Lista de Compras Inteligente",
    description: "Esqueça as idas confusas ao supermercado. Uma lista categorizada e otimizada por grupos de alimentos que faz você economizar dinheiro e tempo, comprando exatamente o necessário para as receitas.",
    value: "R$ 29,00",
    iconName: "ListOrdered",
    highlights: ["Economize no Mercado", "Divisão por Categorias", "Evite o Desperdício de Alimentos"]
  },
  {
    id: "bonus-3",
    title: "Calendário de Preparação Semanal (Marmitas)",
    description: "Aprenda a cozinhar uma única vez para 3 ou 5 dias sem perder o sabor dos alimentos. Cronograma exato de cozimento, resfriamento e técnicas de congelamento para garantir pratos deliciosos e frescos.",
    value: "R$ 39,00",
    iconName: "CalendarRange",
    highlights: ["Cozinhe 1x na Semana", "Técnicas de Congelamento", "Conservação do Sabor de Verdade"]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben-1",
    title: "Acesso Imediato",
    description: "Receba o material de forma imediata na sua caixa de entrada logo após a confirmação do pagamento.",
    iconName: "Zap"
  },
  {
    id: "ben-2",
    title: "Formato PDF Premium",
    description: "Compatível com qualquer leitor de PDF, computadores, tablets, e de fácil impressão.",
    iconName: "FileText"
  },
  {
    id: "ben-3",
    title: "Otimizado para Celular",
    description: "Layout adaptado perfeitamente para telas verticais, ideal para usar enquanto cozinha.",
    iconName: "Smartphone"
  },
  {
    id: "ben-4",
    title: "Receitas Organizadas",
    description: "Divisão lógica por refeições com dados calóricos e de macronutrientes detalhados por porção.",
    iconName: "Grid"
  },
  {
    id: "ben-5",
    title: "Passo a Passo Simples",
    description: "Instruções diretas ao ponto, sem rodeios ou termos difíceis de culinária profissional.",
    iconName: "CheckCircle2"
  },
  {
    id: "ben-6",
    title: "Atualizações Gratuitas",
    description: "Novas receitas adicionadas em futuras edições serão enviadas diretamente no seu e-mail, sem custo.",
    iconName: "RefreshCw"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como eu recebo o eBook?",
    answer: "O envio é 100% automático. Assim que o pagamento for aprovado pela plataforma de pagamento (como Kiwify), você receberá um e-mail com o link de download exclusivo para acessar o material imediatamente."
  },
  {
    id: "faq-2",
    question: "O pagamento é seguro?",
    answer: "Sim, absolutamente. Todo o processamento de pagamento é realizado de forma criptografada por meio de plataformas líderes de mercado (como Kiwify), garantindo total privacidade e segurança para seus dados bancários e cartões."
  },
  {
    id: "faq-3",
    question: "Posso acessar pelo celular?",
    answer: "Sim! O eBook foi desenvolvido e diagramado com foco na portabilidade. O arquivo em PDF premium se adapta perfeitamente a celulares, tablets, notebooks e computadores convencionais."
  },
  {
    id: "faq-4",
    question: "Consigo imprimir o eBook de receitas?",
    answer: "Com certeza. O formato PDF de alta resolução permite que você imprima o material em tamanho folha A4 completa ou no formato que preferir para ter o livro físico na bancada da sua cozinha."
  },
  {
    id: "faq-5",
    question: "Preciso comprar ingredientes caros ou raros?",
    answer: "Não! Esse é um dos maiores diferenciais do nosso eBook. Todas as receitas foram elaboradas com ingredientes fáceis e acessíveis, que você encontra em feiras livres e mercados comuns, sem estourar seu orçamento mensal."
  },
  {
    id: "faq-6",
    question: "O eBook ensina os macros e calorias de cada prato?",
    answer: "Sim! Cada uma das mais de 150 receitas acompanha a contagem precisa de Calorias totais por porção, além dos macronutrientes divididos em Proteínas, Carboidratos e Gorduras, facilitando o encaixe na sua dieta atual."
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Mariana Costa",
    role: "Professora de Ensino Fundamental",
    content: "O que eu mais gostei foi a simplicidade dos ingredientes. Eu sempre achava que comer saudável era caro, mas as receitas usam coisas normais de geladeira e ficam prontas em 15 minutos! O Wrap de Ricota com Rúcula virou meu lanche de todo dia.",
    rating: 5,
    date: "Há 2 dias",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    name: "Thiago Ramos",
    role: "Analista de Sistemas",
    content: "Eu não sei cozinhar quase nada, mas o passo a passo é muito direto ao ponto. Consegui fazer o salmão com crosta logo na primeira tentativa e ficou fantástico. Já economizei muito deixando de pedir delivery à noite.",
    rating: 5,
    date: "Há 1 semana",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-3",
    name: "Carolina Albuquerque",
    role: "Advogada e Mãe de 2 filhos",
    content: "Os bônus de planejamento de marmitas salvaram a minha rotina familiar. Agora tiro 2 horas do meu domingo, preparo as receitas do eBook e a semana inteira corre de forma saudável e leve, sem estresse. Meus filhos adoram as panquecas de aveia!",
    rating: 5,
    date: "Há 2 semanas",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];
