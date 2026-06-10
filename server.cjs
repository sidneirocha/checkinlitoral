var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var PORT = 3e3;
var reviewsCache = null;
var lastRefreshedAt = 0;
var GOOGLE_BUSINESS_API_V4 = "https://mybusiness.googleapis.com/v4";
var GOOGLE_BUSINESS_ACCOUNT_API_V1 = "https://mybusinessaccountmanagement.googleapis.com/v1";
var GOOGLE_BUSINESS_LOCATION_API_V1 = "https://mybusinessbusinessinformation.googleapis.com/v1";
var DEFAULT_BUSINESS_NAME = "Checkin Litoral - Im\xF3veis de Temporada";
var DEFAULT_LOCATION_TITLE = "Checkin Litoral";
var DEFAULT_AVATAR = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80";
var TOKEN_SAFETY_WINDOW_MS = 60 * 1e3;
var cachedGoogleAccessToken = null;
var FALLBACK_REVIEWS = [
  {
    id: "g1",
    autor: "Mariana Siqueira",
    fotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "H\xE1 uma semana",
    texto: "Experi\xEAncia sensacional! O kitnet do 9\xBA andar estava impec\xE1vel, cozinha super equipada e a ducha \xE9 deliciosa. O atendimento da Checkin Litoral pelo WhatsApp foi extremamente r\xE1pido e profissional em todas as etapas.",
    imovelVisitado: "Kitnet 9\xBA Andar - Ed. Mil\xE3o - Santos/SP"
  },
  {
    id: "g2",
    autor: "Carlos Eduardo Menezes",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "H\xE1 duas semanas",
    texto: "Ficamos no kitnet do 4\xBA andar do Edif\xEDcio Mil\xE3o e adoramos cada detalhe. Tudo extremamente limpo, bem arejado, o Wi-Fi para home office funcionou impec\xE1vel. Localiza\xE7\xE3o muito segura da Ponta da Praia.",
    imovelVisitado: "Kitnet 4\xBA Andar - Ed. Mil\xE3o - Santos/SP"
  },
  {
    id: "g3",
    autor: "Ros\xE2ngela Prado de Assis",
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "H\xE1 um m\xEAs",
    texto: "Aluguei o Sala Living do 3\xBA andar para passar o final de semana. Decora\xE7\xE3o primorosa, de muito bom gosto. Cozinha limpa e moderna. Fornecem suporte fant\xE1stico pelo WhatsApp.",
    imovelVisitado: "Sala Living 3\xBA Andar - Ed. Mil\xE3o - Santos/SP"
  },
  {
    id: "g4",
    autor: "Thiago G. Vasconcellos",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    nota: 5,
    data: "H\xE1 um m\xEAs",
    texto: "Melhor custo-benef\xEDcio de Santos no 3\xBA andar. Pr\xE1tico, limpo, bem equipado e de fac\xEDlimo contato com a equipe. Recomendo demais os im\xF3veis da Checkin Litoral.",
    imovelVisitado: "Kitnet 3\xBA Andar - Ed. Mil\xE3o - Santos/SP"
  }
];
var DEFAULT_RATING = {
  mediaAvaliacoes: 5,
  totalAvaliacoes: 150,
  avaliacoes: FALLBACK_REVIEWS
};
var imoveisCache = [
  {
    id: "14043076",
    titulo: "Kitnet 9\xBA Andar - Ed. Mil\xE3o - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Kitnet no 9\xBA andar com cama de casal, treliche, internet 500 megas e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: 'Apartamento no 9\xBA andar do Edif\xEDcio Mil\xE3o, na Ponta da Praia, com 29,78m\xB2, cama de casal, treliche, cabideiro, TV smart 32", cozinha equipada, internet 500 megas, dois ventiladores, cadeiras de praia e guarda-sol. O pr\xE9dio tem portaria 24h e garagem coletiva, havendo vaga para um ve\xEDculo. Fica a uma quadra da praia e perto do Shopping Praiamar, mercado, farm\xE1cia, padaria e demais pontos da orla.',
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
    avaliacoesGoogle: 5,
    totalAvaliacoes: 35,
    datasBloqueadas: ["2026-06-12", "2026-06-13", "2026-06-14", "2026-06-20", "2026-06-21"]
  },
  {
    id: "14834054",
    titulo: "Kitnet 4\xBA Andar - Ed. Mil\xE3o - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Kitnet no 4\xBA andar com cama de casal, treliche, internet 500 megas e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: "Apartamento no 4\xBA andar do Edif\xEDcio Mil\xE3o com 29,78m\xB2, cama de casal, treliche, TV, fog\xE3o a g\xE1s com duas bocas e forno, frigobar de 120 litros, micro-ondas, grill, cafeteira, liquidificador, dois ventiladores, cadeiras de praia e guarda-sol. O edif\xEDcio tem portaria 24h e garagem coletiva, com vaga para um ve\xEDculo quando dispon\xEDvel. A localiza\xE7\xE3o \xE9 pr\xE1tica, pr\xF3xima \xE0 praia e ao com\xE9rcio da Ponta da Praia.",
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
      "https://a0.muscache.com/im/pictures/27f72094-5b8f-4f9d-9ba0-482a4daa22e9.jpg",
      "https://a0.muscache.com/im/pictures/b3f2d94c-ed17-48d8-ba65-85623ae2967b.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14834054/original/8d95e094-9df0-4d02-b685-423ae3de7e8d.jpeg",
      "https://a0.muscache.com/im/pictures/89ed6452-08ce-4574-8a3c-a89818fc9b50.jpg",
      "https://a0.muscache.com/im/pictures/1ae9169c-d7ab-4bdc-9105-756800c97967.jpg",
      "https://a0.muscache.com/im/pictures/eff56873-a3fa-46ef-81d2-ba81f52b2360.jpg",
      "https://a0.muscache.com/im/pictures/b4fde322-0d8e-4c7c-9ef1-808868336e84.jpg",
      "https://a0.muscache.com/im/pictures/15bb4491-ea2c-4aa5-85ed-eec0b8bbcb15.jpg",
      "https://a0.muscache.com/im/pictures/919fab52-dfb3-4e71-bca9-824514fc413c.jpg",
      "https://a0.muscache.com/im/pictures/a51eaff1-10d9-420e-830c-5ed0090e06f5.jpg",
      "https://a0.muscache.com/im/pictures/5280e5d4-2895-497e-952f-63bd06382f8c.jpg",
      "https://a0.muscache.com/im/pictures/6788f385-c374-41f8-a8e8-b312bbd94610.jpg",
      "https://a0.muscache.com/im/pictures/5944d1b1-73cc-46ad-9ee5-9f9b157e59a2.jpg",
      "https://a0.muscache.com/im/pictures/ee9ce9ee-d90a-487b-845c-1a4b30e8c715.jpg",
      "https://a0.muscache.com/im/pictures/eb80faa2-5b80-41f3-a3ed-07990f47f1ef.jpg",
      "https://a0.muscache.com/im/pictures/c58c1126-360a-4d01-ae45-1541a4526843.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14834054/original/c353a7da-71b3-4f59-9543-d40f531d1dcb.png",
      "https://a0.muscache.com/im/pictures/1eb4bbb5-6c31-44d7-a064-d45af5bcc751.jpg",
      "https://a0.muscache.com/im/pictures/a716c3bc-fc56-4916-8496-5d74cc0a9079.jpg",
      "https://a0.muscache.com/im/pictures/fb4ea1c4-dc85-4d96-9880-a71b4ea52123.jpg",
      "https://a0.muscache.com/im/pictures/edd6319d-7675-4634-bc4c-5ba32f531892.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14834054/original/88d33705-4545-43dd-9d5b-cae8aa4c5b20.jpeg",
      "https://a0.muscache.com/im/pictures/ed59ceaa-876e-4eaf-9f03-62c1b90d2ec0.jpg",
      "https://a0.muscache.com/im/pictures/78aad189-4ea2-4134-a6af-5897168e8a0f.jpg",
      "https://a0.muscache.com/im/pictures/bb19c993-bdd1-4b32-a1f3-adf50e10b13c.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14834054/original/df9db7d8-8caf-4d6c-877e-2061a93856fe.jpeg",
      "https://a0.muscache.com/im/pictures/87edf743-5a1c-41c4-bd00-79f78c33928d.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14834054/original/77c19491-e471-4a20-8c00-b01adba54990.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14834054/original/ef0c197e-87d8-47d1-9180-c4119e523f36.jpeg"
    ],
    avaliacoesGoogle: 5,
    totalAvaliacoes: 41,
    datasBloqueadas: ["2026-06-15", "2026-06-16", "2026-06-25", "2026-06-26", "2026-06-27"]
  },
  {
    id: "40831273",
    titulo: "Kitnet 3\xBA Andar - Ed. Mil\xE3o - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Kitnet no 3\xBA andar com 29,78m\xB2, internet 500 megas e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: 'Apartamento no 3\xBA andar do Edif\xEDcio Mil\xE3o com 29,78m\xB2, internet 500 megas, cama de casal, treliche, TV smart 32", fog\xE3o a g\xE1s com quatro bocas e forno, geladeira frost free, micro-ondas, grill, cafeteira, liquidificador, dois ventiladores, cadeiras de praia e guarda-sol. O pr\xE9dio oferece portaria 24h e garagem coletiva, com possibilidade de estacionar um ve\xEDculo quando houver vaga. A poucos passos da praia e perto de com\xE9rcio e servi\xE7os da regi\xE3o.',
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
    petFriendly: true,
    linkAirbnb: "https://www.airbnb.com.br/h/checkinlitoral3",
    imagemCapa: "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/c830885b-0ff8-4077-9648-24235c8737ee.jpeg",
    imagensGaleria: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/c830885b-0ff8-4077-9648-24235c8737ee.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/7bce0687-b79a-4771-ad8e-04d0570f9a5c.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/bb9ab649-c8b5-467b-ae08-8ea5fbb60b9d.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/6d037a11-71fa-4959-afb9-44c8eb177dd4.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/6d3e5fab-a898-4ff6-9afc-c4f7ceab93ec.jpeg",
      "https://a0.muscache.com/im/pictures/4e11ed92-b22e-4638-9818-26bd4fb00ba5.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/303867e5-2b4a-496e-b45d-7dc55cb2bc49.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/7a940adb-bf2b-45b2-8d71-f4e6e00ca7e2.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/ffac0353-619c-458d-abee-fbf0983b7917.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/24a84118-8c59-4731-a992-3f3b0672456b.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/4f1f8d9f-6bfb-4e5e-8005-8b3bc375d02a.jpeg",
      "https://a0.muscache.com/im/pictures/263e23a8-cff7-4106-ac65-cf757fe7001e.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/0725a3a1-5c8f-47f0-90de-6abf5eebb73b.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/f9f8e6cf-e836-4c2e-9789-2ecc75e67d87.jpeg",
      "https://a0.muscache.com/im/pictures/846a2fe4-8aa2-4599-8b55-d0d10dd89f29.jpg",
      "https://a0.muscache.com/im/pictures/143c694a-1530-41c3-985e-a7acb73394cc.jpg",
      "https://a0.muscache.com/im/pictures/7ded2de5-43d4-40b6-9261-84cdeed3482f.jpg",
      "https://a0.muscache.com/im/pictures/d480b6d0-98e4-4817-b0b2-9ebbd6a64d5e.jpg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/7da07a05-636b-469e-80c0-de70215b293b.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/1aa72730-3a2b-45a6-9cb6-76a39841ae8e.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/ff56064d-548a-4c6c-8c1f-f3312f2fdd80.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/582d59b8-dfe3-4ce0-a9f9-928a0b4f6b82.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/7b68c115-f128-45f8-a0af-79bc5e946df0.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/a14929ad-b0ff-4186-9bb4-4193201ffa4b.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDA4MzEyNzM%3D/original/097469e7-de93-4e57-84cd-1c22be424319.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-40831273/original/46fff903-a73e-447c-93a4-5a1826dc7ddf.jpeg"
    ],
    avaliacoesGoogle: 5,
    totalAvaliacoes: 21,
    datasBloqueadas: ["2026-06-09", "2026-06-10", "2026-06-11", "2026-06-19", "2026-06-20"]
  },
  {
    id: "649905667489960100",
    titulo: "Sala Living 3\xBA Andar - Ed. Mil\xE3o - Santos/SP",
    bairro: "Ponta da Praia",
    descricaoCurta: "Sala Living no 3\xBA andar com 35,57m\xB2, 6 h\xF3spedes e garagem coletiva a uma quadra da praia.",
    descricaoCompleta: 'Sala Living no 3\xBA andar do Edif\xEDcio Mil\xE3o, com 35,57m\xB2, bicama, treliche diferenciado, TV smart 32", internet 500 megas, fog\xE3o a g\xE1s com quatro bocas e forno, geladeira frost free duplex, micro-ondas, grill, cafeteira, liquidificador, dois ventiladores, cadeiras de praia e guarda-sol. O edif\xEDcio tem portaria 24h e garagem coletiva, com vaga para um ve\xEDculo quando dispon\xEDvel. O apartamento fica a uma quadra da praia e mant\xE9m f\xE1cil acesso \xE0 Ponta da Praia.',
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
    avaliacoesGoogle: 5,
    totalAvaliacoes: 53,
    datasBloqueadas: ["2026-06-12", "2026-06-13", "2026-06-18", "2026-06-19", "2026-06-28", "2026-06-29"]
  }
];
function isPropertyImage(url) {
  if (!url) return false;
  const lower = url.toLowerCase();
  const isHostPortrait = lower.includes("host") && !lower.includes("hosting") || lower.includes("co-host");
  return !lower.includes("banner") && !lower.includes("favicon") && !lower.includes("logo") && !lower.includes("avatar") && !lower.includes("user/") && !lower.includes("/user") && !lower.includes("user_profile") && !lower.includes("profile_photos") && !lower.includes("profile") && !lower.includes("aline") && !isHostPortrait && !lower.includes("guest") && !lower.includes("search-bar-icons") && !lower.includes("airbnbplatformassets");
}
async function _scrapeUrl(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8"
      }
    });
    if (!res.ok) return null;
    const html = await res.text();
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
    let cover = ogImageMatch ? ogImageMatch[1].replace(/&amp;/g, "&") : null;
    if (cover && !isPropertyImage(cover)) {
      cover = null;
    }
    const imgMatches = html.match(/https:\/\/a0\.muscache\.com\/im\/pictures\/[a-zA-Z0-9_\-\./]+(?:jpeg|jpg|png|webp)/gi) || [];
    const gallerySet = /* @__PURE__ */ new Set();
    if (cover) {
      gallerySet.add(cover.split("?")[0]);
    }
    for (const img of imgMatches) {
      const parsedImage = img.replace(/&amp;/g, "&").split("?")[0];
      if (isPropertyImage(parsedImage)) {
        gallerySet.add(parsedImage);
      }
    }
    const galleryList = Array.from(gallerySet).filter(Boolean);
    return {
      cover: cover || galleryList[0] || null,
      gallery: galleryList.slice(0, 24)
      // Dynamic limit increase for more complete gallery pictures!
    };
  } catch (err) {
    console.error(`Error crawling URL (${url}):`, err);
    return null;
  }
}
async function scrapeAirbnbListing(id, url) {
  const directRoomUrl = `https://www.airbnb.com.br/rooms/${id}`;
  const directResult = await _scrapeUrl(directRoomUrl);
  if (directResult && directResult.gallery && directResult.gallery.length > 2) {
    return directResult;
  }
  return await _scrapeUrl(url);
}
async function syncAllAirbnbProperties() {
  console.log("Starting background synchronization of Airbnb property image assets...");
  try {
    for (let i = 0; i < imoveisCache.length; i++) {
      const p = imoveisCache[i];
      const scraped = await scrapeAirbnbListing(p.id, p.linkAirbnb);
      if (scraped && scraped.cover) {
        p.imagemCapa = scraped.cover;
        if (scraped.gallery && scraped.gallery.length > 0) {
          p.imagensGaleria = scraped.gallery;
        }
        console.log(`\u2713 Real-time images for "${p.titulo}" fetched & cached successfully. Total items: ${p.imagensGaleria.length}`);
      }
    }
  } catch (err) {
    console.error("Critical error in periodic Airbnb asset synchronization:", err);
  }
}
function normalizeResourceId(value, prefix) {
  if (!value) return null;
  return value.startsWith(`${prefix}/`) ? value.slice(prefix.length + 1) : value;
}
function extractGoogleReviewNumber(starRating) {
  const value = String(starRating || "").toUpperCase();
  const map = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5
  };
  const fromEnum = map[value];
  if (typeof fromEnum === "number") return fromEnum;
  const numeric = Number(starRating);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 5;
}
function formatRelativeDate(input) {
  if (!input) return "Recente";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return String(input);
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.max(0, Math.floor(diffMs / (24 * 60 * 60 * 1e3)));
  if (diffDays <= 0) return "H\xE1 pouco";
  if (diffDays === 1) return "H\xE1 1 dia";
  if (diffDays < 7) return `H\xE1 ${diffDays} dias`;
  if (diffDays < 14) return "H\xE1 1 semana";
  if (diffDays < 30) return `H\xE1 ${Math.max(2, Math.round(diffDays / 7))} semanas`;
  if (diffDays < 60) return "H\xE1 1 m\xEAs";
  return `H\xE1 ${Math.max(2, Math.round(diffDays / 30))} meses`;
}
function inferPropertyFromText(text) {
  const normalized = (text || "").toLowerCase();
  if (!normalized) return null;
  if (normalized.includes("sala living")) {
    return "Sala Living 3\xBA Andar - Ed. Mil\xE3o - Santos/SP";
  }
  if (normalized.match(/9(º|°|o)?\s*andar|nono andar/)) {
    return "Kitnet 9\xBA Andar - Ed. Mil\xE3o - Santos/SP";
  }
  if (normalized.match(/4(º|°|o)?\s*andar|quarto andar/)) {
    return "Kitnet 4\xBA Andar - Ed. Mil\xE3o - Santos/SP";
  }
  if (normalized.match(/3(º|°|o)?\s*andar|terceiro andar/)) {
    return "Kitnet 3\xBA Andar - Ed. Mil\xE3o - Santos/SP";
  }
  return null;
}
async function fetchGoogleAccessToken() {
  const accessToken = process.env.GOOGLE_BUSINESS_ACCESS_TOKEN;
  const refreshToken = process.env.GOOGLE_BUSINESS_REFRESH_TOKEN;
  const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_BUSINESS_CLIENT_SECRET;
  if (cachedGoogleAccessToken && cachedGoogleAccessToken.expiresAt > Date.now() + TOKEN_SAFETY_WINDOW_MS) {
    return cachedGoogleAccessToken.token;
  }
  if (accessToken) {
    cachedGoogleAccessToken = {
      token: accessToken,
      expiresAt: Date.now() + 60 * 60 * 1e3
    };
    return accessToken;
  }
  if (!refreshToken || !clientId || !clientSecret) {
    return null;
  }
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    })
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Falha ao renovar token do Google: ${response.status} ${text}`);
  }
  const payload = await response.json();
  if (!payload.access_token) {
    return null;
  }
  cachedGoogleAccessToken = {
    token: payload.access_token,
    expiresAt: Date.now() + Math.max(0, (payload.expires_in ?? 3600) * 1e3)
  };
  return payload.access_token;
}
async function googleApiRequest(url, accessToken, init = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      ...init.headers || {}
    }
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google API error (${response.status}) for ${url}: ${text}`);
  }
  return response.json();
}
async function listGoogleAccounts(accessToken) {
  const data = await googleApiRequest(`${GOOGLE_BUSINESS_ACCOUNT_API_V1}/accounts?pageSize=100`, accessToken);
  return Array.isArray(data?.accounts) ? data.accounts : [];
}
async function listGoogleLocations(accessToken, accountId) {
  const data = await googleApiRequest(
    `${GOOGLE_BUSINESS_LOCATION_API_V1}/accounts/${accountId}/locations?readMask=name,title&pageSize=100`,
    accessToken
  );
  return Array.isArray(data?.locations) ? data.locations : [];
}
async function resolveGoogleBusinessContext(accessToken) {
  const envAccountId = normalizeResourceId(process.env.GOOGLE_BUSINESS_ACCOUNT_ID, "accounts");
  const envLocationId = normalizeResourceId(process.env.GOOGLE_BUSINESS_LOCATION_ID, "locations");
  const envLocationTitle = (process.env.GOOGLE_BUSINESS_LOCATION_TITLE || DEFAULT_LOCATION_TITLE).toLowerCase();
  const envBusinessName = (process.env.GOOGLE_BUSINESS_NAME || DEFAULT_BUSINESS_NAME).toLowerCase();
  if (envAccountId && envLocationId) {
    return {
      accountId: envAccountId,
      locationId: envLocationId,
      locationName: `accounts/${envAccountId}/locations/${envLocationId}`
    };
  }
  const accounts = await listGoogleAccounts(accessToken);
  if (!accounts.length) {
    throw new Error("Nenhuma conta do Google Business Profile foi encontrada para o token autenticado.");
  }
  const selectedAccount = accounts.find((account) => {
    const displayName = String(account?.displayName || "").toLowerCase();
    const accountName = String(account?.name || "").toLowerCase();
    return displayName.includes(envBusinessName) || accountName.includes(envBusinessName);
  }) || accounts[0];
  const accountId = normalizeResourceId(selectedAccount?.name, "accounts");
  if (!accountId) {
    throw new Error("N\xE3o foi poss\xEDvel identificar o accountId do Google Business Profile.");
  }
  if (envLocationId) {
    return {
      accountId,
      locationId: envLocationId,
      locationName: `accounts/${accountId}/locations/${envLocationId}`
    };
  }
  const locations = await listGoogleLocations(accessToken, accountId);
  if (!locations.length) {
    throw new Error("Nenhuma localiza\xE7\xE3o foi encontrada para a conta autenticada.");
  }
  const selectedLocation = locations.find((location) => {
    const title = String(location?.title || "").toLowerCase();
    const locationName = String(location?.name || "").toLowerCase();
    return title.includes(envLocationTitle) || locationName.includes(envLocationTitle);
  }) || locations[0];
  const locationId = normalizeResourceId(selectedLocation?.name, "locations");
  if (!locationId) {
    throw new Error("N\xE3o foi poss\xEDvel identificar o locationId do Google Business Profile.");
  }
  return {
    accountId,
    locationId,
    locationName: selectedLocation?.name || `accounts/${accountId}/locations/${locationId}`
  };
}
async function fetchGoogleReviewsPage(accessToken, accountId, locationId, pageToken) {
  const url = new URL(`${GOOGLE_BUSINESS_API_V4}/accounts/${accountId}/locations/${locationId}/reviews`);
  url.searchParams.set("pageSize", "50");
  if (pageToken) {
    url.searchParams.set("pageToken", pageToken);
  }
  return googleApiRequest(url.toString(), accessToken);
}
async function fetchLatestFromGoogleMaps() {
  const accessToken = await fetchGoogleAccessToken();
  if (!accessToken) {
    console.warn(
      "Google Business Profile OAuth credentials not configured. Using fallback review values."
    );
    return DEFAULT_RATING;
  }
  try {
    const { accountId, locationId, locationName } = await resolveGoogleBusinessContext(accessToken);
    console.log(`Fetching Google reviews from ${locationName}...`);
    const allReviews = [];
    let pageToken;
    let pageCount = 0;
    do {
      const page = await fetchGoogleReviewsPage(accessToken, accountId, locationId, pageToken);
      const reviews = Array.isArray(page?.reviews) ? page.reviews : [];
      allReviews.push(...reviews);
      pageToken = page?.nextPageToken;
      pageCount += 1;
    } while (pageToken && pageCount < 20);
    if (!allReviews.length) {
      console.warn("Google Business Profile returned no reviews. Falling back to default review set.");
      return DEFAULT_RATING;
    }
    const normalizedReviews = allReviews.map((review, idx) => {
      const text = review?.comment || review?.text || "";
      const reviewerName = review?.reviewer?.displayName || review?.authorName || "H\xF3spede Google";
      const photoUrl = review?.reviewer?.profilePhotoUrl || review?.reviewer?.photoUri || review?.profilePhotoUrl || DEFAULT_AVATAR;
      const inferredProperty = inferPropertyFromText(text) || inferPropertyFromText(review?.reviewReply?.comment);
      return {
        id: review?.reviewId || review?.name || `google-review-${idx}`,
        autor: reviewerName,
        fotoUrl: photoUrl.startsWith("http") ? photoUrl : DEFAULT_AVATAR,
        nota: extractGoogleReviewNumber(review?.starRating),
        data: formatRelativeDate(review?.createTime || review?.updateTime || review?.reviewTime),
        texto: text || "Avalia\xE7\xE3o sem coment\xE1rio escrito.",
        ...inferredProperty ? { imovelVisitado: inferredProperty } : {}
      };
    }).filter((review) => review.texto);
    const mediaAvaliacoes = normalizedReviews.reduce((sum, review) => sum + Number(review.nota || 0), 0) / Math.max(1, normalizedReviews.length);
    const parsed = {
      mediaAvaliacoes: Number.isFinite(mediaAvaliacoes) ? Number(mediaAvaliacoes.toFixed(1)) : 5,
      totalAvaliacoes: normalizedReviews.length,
      avaliacoes: normalizedReviews.slice(0, 12)
    };
    console.log("Successfully fetched reviews from Google Business Profile API:", parsed);
    return parsed;
  } catch (error) {
    console.error("Failed to fetch Google reviews via Business Profile API:", error);
    return DEFAULT_RATING;
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  syncAllAirbnbProperties();
  app.get("/api/reviews", async (req, res) => {
    const isRefresh = req.query.refresh === "true";
    const cacheAge = Date.now() - lastRefreshedAt;
    if (!reviewsCache || isRefresh || cacheAge > 12 * 60 * 60 * 1e3) {
      reviewsCache = await fetchLatestFromGoogleMaps();
      lastRefreshedAt = Date.now();
    }
    res.json({
      ...reviewsCache,
      lastRefreshedAt: new Date(lastRefreshedAt).toISOString()
    });
  });
  app.post("/api/reviews/refresh", async (req, res) => {
    console.log("Forced refresh triggered manually via client API request");
    reviewsCache = await fetchLatestFromGoogleMaps();
    lastRefreshedAt = Date.now();
    await syncAllAirbnbProperties();
    res.json({
      success: true,
      data: reviewsCache,
      imoveis: imoveisCache,
      lastRefreshedAt: new Date(lastRefreshedAt).toISOString()
    });
  });
  app.get("/api/imoveis", (req, res) => {
    res.json(imoveisCache);
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Full-stack server running successfully on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
