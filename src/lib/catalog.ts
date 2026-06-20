export type CatalogKit = {
  slug: "kit-4" | "kit-8" | "kit-12";
  name: string;
  title: string;
  units: number;
  price: number;
  perUnit: number;
  image: string;
  highlight: string;
  summary: string;
  description: string;
  notes?: string[];
  includes: string[];
  details: string[];
};

export const productInfo = {
  title: "Bálsamo Real - Hidratante para Couro Natural",
  content: "25g",
  description:
    "Hidratante desenvolvido para auxiliar na conservação e manutenção de artigos em couro natural, ajudando a reduzir o ressecamento e mantendo a aparência da peça por mais tempo.",
  indicatedFor: [
    "Bolsas",
    "Carteiras",
    "Mochilas",
    "Jaquetas",
    "Calçados de couro",
    "Artigos em couro natural em geral",
  ],
  usage:
    "Aplique uma pequena quantidade com pano macio e limpo, espalhando de forma uniforme sobre a superfície do couro. Aguarde a absorção do produto e, se desejar, finalize com um pano seco.",
  importantInfo: [
    "Uso externo.",
    "Indicado para couro natural.",
    "Recomenda-se testar em uma pequena área antes da aplicação.",
    "Manter em local seco e protegido do calor excessivo.",
  ],
  production:
    "O Bálsamo Real é produzido em pequenos lotes. O prazo de produção e envio pode variar conforme a disponibilidade em estoque e a quantidade solicitada. O prazo estimado será informado durante o atendimento.",
  shipping:
    "O valor do frete é calculado de acordo com o CEP de entrega. Para solicitar um orçamento, entre em contato informando a quantidade desejada e o CEP para envio.",
} as const;

export const catalogKits: CatalogKit[] = [
  {
    slug: "kit-4",
    name: "Kit Inicial",
    title: "Kit Inicial",
    units: 4,
    price: 180,
    perUnit: 45,
    image: "/IMG_5500.jpg",
    highlight: "Kit inicial",
    summary: "4 latas de Bálsamo Real, ideal para conhecer o produto ou iniciar as primeiras vendas.",
    description:
      "4 latas de Bálsamo Real, 25g cada. Ideal para quem deseja conhecer o produto ou iniciar as primeiras vendas.",
    notes: [
      "Esse kit de 4 latas funciona bem para quem usa o Bálsamo Real com frequência ou quer começar a revender aos poucos. Também é uma boa escolha para compras compartilhadas.",
      "O produto é um hidratante e condicionador para couro, formulado com cera de abelha, manteiga de cacau e óleo de amêndoas. Esses ingredientes ajudam a proteger a superfície e a nutrir as fibras, devolvendo vida e aumentando a durabilidade da peça.",
    ],
    includes: [
      "4 unidades de 25g",
      "Produto pronto para uso e revenda",
      "Orientação de uso enviada no atendimento",
    ],
    details: [
      "Frete calculado conforme o CEP de entrega",
      "Prazo de produção e envio informado durante o atendimento",
    ],
  },
  {
    slug: "kit-8",
    name: "Kit Profissional",
    title: "Kit Profissional",
    units: 8,
    price: 280,
    perUnit: 35,
    image: "/IMG_5516.JPG",
    highlight: "Kit profissional",
    summary: "8 latas de Bálsamo Real, indicado para ateliês e artesãos que mantêm estoque para vendas recorrentes.",
    description:
      "8 latas de Bálsamo Real, 25g cada. Ideal para quem usa muito e/ou quer começar a revender o Bálsamo Real de alguma forma.",
    notes: [
      "Esse kit de 8 latas é para quem usa muito e/ou quer começar a revender o Bálsamo Real de alguma forma. Também é uma ótima opção para quem quer comprar com mais gente, afinal acreditamos que o que é bom precisa ser compartilhado.",
      "Bálsamo hidratante e condicionador de couro, produzido com apenas 3 ingredientes naturais: cera de abelha, manteiga de cacau e óleo de amêndoas.",
      "A cera de abelha cria uma proteção para a superfície do couro enquanto o óleo de amêndoas e a manteiga de cacau hidratam e condicionam as fibras e estrutura do couro, devolvendo vida e aumentando a vida útil do seu artigo de couro.",
    ],
    includes: [
      "8 unidades de 25g",
      "Produto pronto para uso e revenda",
      "Orientação de uso enviada no atendimento",
    ],
    details: [
      "Frete calculado conforme o CEP de entrega",
      "Prazo de produção e envio informado durante o atendimento",
    ],
  },
  {
    slug: "kit-12",
    name: "Kit Ateliê",
    title: "Kit Ateliê",
    units: 12,
    price: 360,
    perUnit: 30,
    image: "/balsamo_lata.avif",
    highlight: "Melhor custo",
    summary: "12 latas de Bálsamo Real, a melhor opção para quem busca maior volume e menor custo por unidade.",
    description:
      "12 latas de Bálsamo Real, 25g cada. Esse kit é para quem usa muito e/ou quer revender o Bálsamo Real com mais volume.",
    notes: [
      "Esse kit de 12 latas é indicado para quem usa muito o Bálsamo Real e quer manter um estoque maior para uso ou revenda.",
      "Também é uma opção prática para compras compartilhadas, com mais volume e melhor custo por unidade.",
      "Bálsamo hidratante e condicionador de couro, produzido com apenas 3 ingredientes naturais: cera de abelha, manteiga de cacau e óleo de amêndoas.",
      "A cera de abelha cria uma proteção para a superfície do couro enquanto o óleo de amêndoas e a manteiga de cacau hidratam e condicionam as fibras e estrutura do couro, devolvendo vida e aumentando a vida útil do seu artigo de couro.",
    ],
    includes: [
      "12 unidades de 25g",
      "Produto pronto para uso e revenda",
      "Orientação de uso enviada no atendimento",
    ],
    details: [
      "Frete calculado conforme o CEP de entrega",
      "Prazo de produção e envio informado durante o atendimento",
    ],
  },
];

export const whatsappNumber = "5541988691275";

export function formatMoney(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function whatsappOrderLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: "Olá! Quero falar sobre o Bálsamo Real.",
  kits: "Olá! Quero ver os kits do Bálsamo Real.",
  resale: "Olá! Tenho interesse em revender o Bálsamo Real.",
  support: "Olá! Quero tirar uma dúvida sobre o Bálsamo Real.",
};

export function kitOrderMessage(kitTitle: string) {
  return `Olá! Quero pedir o ${kitTitle}.`;
}

export function getKitBySlug(slug: string) {
  return catalogKits.find((kit) => kit.slug === slug);
}
