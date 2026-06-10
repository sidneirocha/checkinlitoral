export interface Imovel {
  id: string;
  titulo: string;
  bairro: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  precoPorNoite: number;
  quartos: number;
  banheiros: number;
  maxHospedes: number;
  distanciaPraia: string; // e.g. "Pé na areia" or "1 quadra"
  arCondicionado: boolean;
  wiFi: boolean;
  vagaGaragem: boolean;
  churrasqueira: boolean;
  vistaMar: boolean;
  petFriendly: boolean;
  linkAirbnb: string;
  imagemCapa: string;
  imagensGaleria: string[];
  avaliacoesGoogle: number; // e.g. 4.9
  totalAvaliacoes: number;
  datasBloqueadas: string[]; // ISO format YYYY-MM-DD
}

export interface GoogleReview {
  id: string;
  autor: string;
  fotoUrl: string;
  nota: number;
  data: string;
  texto: string;
  imovelVisitado?: string;
}

export const LISTA_IMOVEIS: Imovel[] = [
  {
    id: "14043076",
    titulo: "Kitnet 9º Andar - Ed. Milão - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Kitnet no 9º andar com cama de casal, treliche, internet 500 megas e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: "Apartamento no 9º andar do Edifício Milão, na Ponta da Praia, com 29,78m², cama de casal, treliche, cabideiro, TV smart 32\", cozinha equipada, internet 500 megas, dois ventiladores, cadeiras de praia e guarda-sol. O prédio tem portaria 24h e garagem coletiva, havendo vaga para um veículo. Fica a uma quadra da praia e perto do Shopping Praiamar, mercado, farmácia, padaria e demais pontos da orla.",
    precoPorNoite: 220,
    quartos: 1,
    banheiros: 1,
    maxHospedes: 6,
    distanciaPraia: "300m da praia",
    arCondicionado: false,
    wiFi: true,
    vagaGaragem: true,
    churrasqueira: false,
    vistaMar: true,
    petFriendly: true,
    linkAirbnb: "https://www.airbnb.com.br/h/checkinlitoral9",
    imagemCapa: "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/8a67cefa-2dba-4de2-8823-14e56fa5e55a.jpeg",
    imagensGaleria: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/8a67cefa-2dba-4de2-8823-14e56fa5e55a.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/4c84104d-0fd0-45a7-bcc3-3a5e128c076b.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/39921ed4-08d5-40c0-bff5-014e35664386.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/3228ed04-96f5-4d02-b500-086d5d26c507.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/894262a6-24ea-4d2d-85b4-8cf8c43f3666.png",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/e5a56ed8-d286-4be8-8599-bac1c12a0044.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/c8f532a8-d1cf-4d7d-b566-1388b9b1ee0c.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/d9c66347-b03f-473b-8c38-26be383381cd.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/3cfe24c5-ed44-4ade-b3c8-08cb0f5a7324.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/6c9ec125-7123-4f16-b8aa-350ecc6d9714.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/0fc0031d-ccc0-4a45-a35d-d0613da67f16.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/4409772b-8ac6-4bfb-9206-464f88a63669.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/0d89d435-77b6-4fab-b72b-6c6f2dc9f007.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14043076/original/d0021d02-28e7-46e6-a829-28f20ec7bd84.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-14043076/original/af5fc3fd-b60b-4106-b13b-536f4c48e39a.jpeg"
    ],
    avaliacoesGoogle: 5.0,
    totalAvaliacoes: 35,
    datasBloqueadas: ["2026-06-12", "2026-06-13", "2026-06-14", "2026-06-20", "2026-06-21"]
  },
  {
    id: "14834054",
    titulo: "Kitnet 4º Andar - Ed. Milão - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Kitnet no 4º andar com cama de casal, treliche, internet 500 megas e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: "Apartamento no 4º andar do Edifício Milão com 29,78m², cama de casal, treliche, TV, fogão a gás com duas bocas e forno, frigobar de 120 litros, micro-ondas, grill, cafeteira, liquidificador, dois ventiladores, cadeiras de praia e guarda-sol. O edifício tem portaria 24h e garagem coletiva, com vaga para um veículo quando disponível. A localização é prática, próxima à praia e ao comércio da Ponta da Praia.",
    precoPorNoite: 195,
    quartos: 1,
    banheiros: 1,
    maxHospedes: 6,
    distanciaPraia: "300m da praia",
    arCondicionado: false,
    wiFi: true,
    vagaGaragem: true,
    churrasqueira: false,
    vistaMar: false,
    petFriendly: true,
    linkAirbnb: "https://www.airbnb.com.br/h/checkinlitoral4",
    imagemCapa: "https://a0.muscache.com/im/pictures/27f72094-5b8f-4f9d-9ba0-482a4daa22e9.jpg",
    imagensGaleria: [
      "https://a0.muscache.com/im/pictures/27f72094-5b8f-4f9d-9ba0-482a4daa22e9.jpg"
    ],
    avaliacoesGoogle: 5.0,
    totalAvaliacoes: 41,
    datasBloqueadas: ["2026-06-15", "2026-06-16", "2026-06-25", "2026-06-26", "2026-06-27"]
  },
  {
    id: "40831273",
    titulo: "Kitnet 3º Andar - Ed. Milão - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Kitnet no 3º andar com 29,78m², internet 500 megas e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: "Apartamento no 3º andar do Edifício Milão com 29,78m², internet 500 megas, cama de casal, treliche, TV smart 32\", fogão a gás com quatro bocas e forno, geladeira frost free, micro-ondas, grill, cafeteira, liquidificador, dois ventiladores, cadeiras de praia e guarda-sol. O prédio oferece portaria 24h e garagem coletiva, com possibilidade de estacionar um veículo quando houver vaga. A poucos passos da praia e perto de comércio e serviços da região.",
    precoPorNoite: 180,
    quartos: 1,
    banheiros: 1,
    maxHospedes: 5,
    distanciaPraia: "300m da praia",
    arCondicionado: false,
    wiFi: true,
    vagaGaragem: true,
    churrasqueira: false,
    vistaMar: false,
    petFriendly: false,
    linkAirbnb: "https://www.airbnb.com.br/h/checkinlitoral3",
    imagemCapa: "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/c830885b-0ff8-4077-9648-24235c8737ee.jpeg",
    imagensGaleria: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/c830885b-0ff8-4077-9648-24235c8737ee.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/7bce0687-b79a-4771-ad8e-04d0570f9a5c.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/7da07a05-636b-469e-80c0-de70215b293b.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/1aa72730-3a2b-45a6-9cb6-76a39841ae8e.jpeg"
    ],
    avaliacoesGoogle: 5.0,
    totalAvaliacoes: 21,
    datasBloqueadas: ["2026-06-09", "2026-06-10", "2026-06-11", "2026-06-19", "2026-06-20"]
  },
  {
    id: "649905667489960100",
    titulo: "Sala Living 3º Andar - Ed. Milão - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Sala Living no 3º andar com 35,57m², 6 hóspedes e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: "Sala Living no 3º andar do Edifício Milão, com 35,57m², bicama, treliche diferenciado, TV smart 32\", internet 500 megas, fogão a gás com quatro bocas e forno, geladeira frost free duplex, micro-ondas, grill, cafeteira, liquidificador, dois ventiladores, cadeiras de praia e guarda-sol. O edifício tem portaria 24h e garagem coletiva, com vaga para um veículo quando disponível. O apartamento fica a uma quadra da praia e mantém fácil acesso à Ponta da Praia.",
    precoPorNoite: 240,
    quartos: 1,
    banheiros: 1,
    maxHospedes: 6,
    distanciaPraia: "300m da praia",
    arCondicionado: false,
    wiFi: true,
    vagaGaragem: true,
    churrasqueira: false,
    vistaMar: true,
    petFriendly: true,
    linkAirbnb: "https://www.airbnb.com.br/h/checkinlitoral",
    imagemCapa: "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/63c2defe-6605-4ec2-97ac-deb2b8fb136d.jpeg",
    imagensGaleria: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/63c2defe-6605-4ec2-97ac-deb2b8fb136d.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/99ffbd7f-deb4-429b-a4de-80b4e05edfe2.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/06201139-ec8e-4bbb-9609-cf808d3228c9.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/d9759f11-9268-4e46-91a5-af6ebf34b7e7.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/eb7f645e-0e33-46d9-a45a-607066fc4b81.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/c328c583-9e04-4d4d-a1e1-5f7760e673ae.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/e6031bff-c164-4777-aae8-7830d17cbd36.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/53904290-3ba7-4873-a5f9-3c57018fa7d6.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/82e2369d-3dc3-4dd9-b52a-3c79809a3ee5.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/115e41ee-f224-4c75-8dd5-36b52ab7b608.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/24873da3-67d4-46c3-9e54-c5ada3d2cc57.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/c5c88eff-b6e9-4132-a912-5ea216a28b1c.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/f5546c1c-c1a8-4e32-9802-0ffc105bedfa.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/b90d664a-7528-4742-8833-486f0b87fbaa.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/513daad6-f8e3-442d-bcb9-7914b20b37db.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/c6beb19d-0aa7-4fe2-9469-ae2ffb767a15.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-649905667489960100/original/8afeb284-a6bf-4ece-a42e-26e1545c7150.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/ee8cf2d3-7255-48b6-bdf8-4f3fb95d7bf1.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/f2994274-d428-44f1-b24a-0d4a6c4e445f.png",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/779747ce-7689-4d59-8a74-5183ab1fc9b4.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/f9ca7522-e56d-4318-b0ad-471b0c18c411.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/d052856d-8a9e-4ea6-a233-fc2982b2b9ad.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/8db6b05e-45c7-4af4-99c9-8b381d306063.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649905667489960100/original/e683cdee-ba1c-4ba4-9a96-8a1802be8402.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/6ef8153f-9407-4887-abfe-e5882d3e746d.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/d4158fce-f5bd-407f-939a-d51ac3e8a766.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/1faa1eae-fb30-4cd5-a35c-4ee2112b9936.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ5OTA1NjY3NDg5OTYwMTAw/original/1c888d20-f9c7-474b-b37f-7a48688a937e.jpeg"
    ],
    avaliacoesGoogle: 5.0,
    totalAvaliacoes: 53,
    datasBloqueadas: ["2026-06-12", "2026-06-13", "2026-06-18", "2026-06-19", "2026-06-28", "2026-06-29"]
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "g1",
    autor: "Mariana Siqueira",
    fotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "Há uma semana",
    texto: "Experiência sensacional! O kitnet do 9º andar estava impecável, cozinha super equipada e a ducha é deliciosa. O atendimento da Checkin Litoral pelo WhatsApp foi extremamente rápido e profissional em todas as etapas.",
    imovelVisitado: "Kitnet 9º Andar - Ed. Milão - Santos/SP"
  },
  {
    id: "g2",
    autor: "Carlos Eduardo Menezes",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "Há duas semanas",
    texto: "Ficamos no kitnet do 4º andar do Edifício Milão e adoramos cada detalhe. Tudo extremamente limpo, bem arejado, o Wi-Fi para home office funcionou impecável. Localização muito segura da Ponta da Praia.",
    imovelVisitado: "Kitnet 4º Andar - Ed. Milão - Santos/SP"
  },
  {
    id: "g3",
    autor: "Rosângela Prado de Assis",
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "Há um mês",
    texto: "Aluguei o Sala Living do 3º andar para passar o final de semana. Decoração primorosa, de muito bom gosto. Cozinha limpa e moderna. Fornecem suporte fantástico pelo WhatsApp.",
    imovelVisitado: "Sala Living 3º Andar - Ed. Milão - Santos/SP"
  },
  {
    id: "g4",
    autor: "Thiago G. Vasconcellos",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "Há um mês",
    texto: "Melhor custo-benefício de Santos no 3º andar. Prático, limpo, bem equipado e de facílimo contato com a equipe. Recomendo demais os imóveis da Checkin Litoral.",
    imovelVisitado: "Kitnet 3º Andar - Ed. Milão - Santos/SP"
  }
];
