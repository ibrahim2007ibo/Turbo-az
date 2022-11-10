let cars = [{
    id: 01,
    brand: "Audi",
    model: "A4",
    price: 5800,
    currency: "AZN",
    barter: false,
    credit: false,
    date: 1996,
    yeni: false,
    city: "Gəncə",
    reng: "Yaşıl",
    engine: 1.9,
    milestone: "415 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F01%2F10%2F08%2F40%2F139f40a2-8367-44bc-866e-b13b8d9f0caa%2F79226_Tci0Jokfw98fvEgbuqm7ow.jpg",
},
{
    id: 02,
    brand: "Audi",
    model: "A8",
    price: 26900,
    reng: "Ağ",
    city: "Bakı",
    currency: "$",
    barter: true,
    credit: true,
    date: 2011,
    yeni: false,
    engine: 4.2,
    milestone: "160 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F05%2F31%2F22%2F24%2F55%2Fc3e33fa5-da25-4f86-905c-4f1b5d752fe5%2F6929_7CXi-ZYYYdbr0UbyfNaYQQ.jpg"
},
{
    id: 03,
    brand: "Audi",
    model: "A4",
    price: 10900,
    reng: "Ağ",
    currency: "AZN",
    city: "Bakı",
    barter: true,
    credit: false,
    date: 2006,
    yeni: false,
    engine: 2.0,
    milestone: "242 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F31%2F21%2F48%2F11%2F134a9c64-2a5c-49dc-aa92-2e61472b2086%2F30071_svPAzAjI-XBwF4S1uhXRkA.jpg",
},
{
    id: 04,
    brand: "Audi",
    model: "R8",
    price: 45000,
    city: "Bakı",
    reng: "Ağ",
    credit: false,
    barter: true,
    currency: "$",
    date: 2010,
    yeni: false,
    engine: 4.2,
    milestone: "74 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F05%2F15%2F00%2F28%2F14%2F7e3dd17c-e087-4f6d-8d10-ea3fea29e5ce%2F44794_Ur2y2zJ1mI4Uxgl0a7GquA.jpg"
},
{
    id: 05,
    brand: "Audi",
    model: "Q7",
    price: 68000,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2022,
    yeni: false,
    engine: 2.0,
    milestone: "3 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F28%2F15%2F02%2F21%2F8538ad2c-3a2c-4bdd-8031-52ac60ea80c0%2F52638_X0_y7-YQFfCLgopISb31ew.jpg"
},
{
    id: 06,
    brand: "Audi",
    model: "A7",
    price: 69500,
    city: "Bakı",
    currency: "EUR",
    barter: false,
    credit: false,
    reng: "Boz",
    date: 2022,
    yeni: true,
    engine: 2.0,
    milestone: 0,
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F08%2F02%2F10%2F23%2F47%2Fd6ea7b82-f3e4-4e06-8212-2077a6389b24%2F93766_81ABBAwtGSQJYgiaT3z_Mw.jpg"
},
{
    id: 07,
    brand: "Mercedes",
    model: "E 220",
    price: 6800,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Boz",
    date: 1995,
    yeni: false,
    engine: 2.2,
    milestone: "325 800",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F04%2F19%2F12%2F42%2F1e9b08ea-2b83-4d51-97ad-38237fbccf08%2F71566_jUddTlfPETfIvz-gq0_oiA.jpg"
},
{
    id: 08,
    brand: "Mercedes",
    model: "E 220",
    price: 19200,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2007,
    yeni: false,
    engine: 2.2,
    milestone: "408 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F07%2F29%2F10%2F47%2F09%2F3a4b1827-680d-481e-b27d-3a50d64ac808%2F18492_qrR7M4oh93PLTbHwnDHWCQ.jpg#_gl=1*1ko445q*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQ3MTU5My4zOS4xLjE2NjA0NzE2NzUuNDU."
},
{
    id: 09,
    brand: "Mercedes",
    model: "E 280",
    price: 9900,
    city: "Gəncə",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Yaşıl",
    date: 1997,
    yeni: false,
    engine: 2.8,
    milestone: "359 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F07%2F25%2F20%2F27%2F40%2F8f93cba7-bcc0-4bbb-a58d-f0fcc040a3ff%2F93163_C08P4Eeh7Vh7CgX4KMLSUA.jpg"
},
{
    id: 10,
    brand: "Mercedes",
    model: "C 180",
    price: 10900,
    city: "Şəmkir",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 1997,
    yeni: false,
    engine: 1.8,
    milestone: "395 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F29%2F10%2F47%2F06%2F738b256c-73ad-4707-a3fd-81843f27f672%2F38093_jci6oU-qoqnbm-LLvUDNhw.jpg"
},
{
    id: 11,
    brand: "Mercedes",
    model: "GLS 450",
    price: 140400,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2021,
    yeni: false,
    engine: 3.0,
    milestone: "13 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F05%2F13%2F47%2F08%2F0af7378d-445b-485e-8c2a-e201cff1eab4%2F81941_9LHT8uSpZzGfRmJa4nGlAw.jpg"
},
{
    id: 12,
    brand: "Mercedes",
    model: "E 300",
    price: 35500,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Qırmızı",
    date: 2016,
    yeni: false,
    engine: 2.0,
    milestone: "59 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F06%2F07%2F22%2F44%2F41%2F9e9099d4-1946-4b49-86bb-988c4da016c1%2F33617_uduQKDai0w-j9RLPruDKKg.jpg"
},
{
    id: 13,
    brand: "BMW",
    model: "318",
    price: 5100,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Göy",
    date: 1995,
    yeni: false,
    engine: 1.8,
    milestone: "350 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F01%2F11%2F46%2F26%2Ff38f9b92-b399-4189-b463-fa5249e48fde%2F81228_J7pWO4KF3HFpwSaK47ryzg.jpg"
},
{
    id: 14,
    brand: "BMW",
    model: "X5",
    price: 54500,
    city: "Bakı",
    barter: true,
    credit: true,
    currency: "$",
    reng: "Qara",
    date: 2016,
    yeni: false,
    engine: 2.0,
    milestone: "92 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F11%2F17%2F36%2F06%2Fd8cfe2f2-3b05-473d-9adf-925bc7cac2c3%2F26111_WCO-0Zdg0161F3bFCL4nQg.jpg"
},
{
    id: 15,
    brand: "BMW",
    model: "528",
    price: 18900,
    city: "Gəncə",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2014,
    yeni: false,
    engine: 2.0,
    milestone: "205 996",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F08%2F18%2F56%2F07%2F5bbea6c1-51f1-439a-b199-d721f7bb9083%2F89955_qelpT-oDpvtY5GQYXZmaWw.jpg"
},
{
    id: 16,
    brand: "BMW",
    model: "X6",
    price: 113000,
    city: "Bakı",
    currency: "EUR",
    barter: false,
    credit: false,
    reng: "Boz",
    date: 2022,
    yeni: true,
    engine: 3.0,
    milestone: 0,
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F05%2F06%2F15%2F52%2F11%2F48421ef2-f339-4733-9b77-129fa23476ad%2F62740_xVTqXDXZuKuw4c2ONoLU4g.jpg"
},
{
    id: 17,
    brand: "BMW",
    model: "323",
    price: 11500,
    city: "Bakı",
    barter: true,
    credit: true,
    currency: "AZN",
    reng: "Qara",
    date: 2000,
    yeni: false,
    engine: 2.5,
    milestone: "418 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F26%2F11%2F01%2F10%2F304654b5-38ce-4f38-8962-ca5bc8975efa%2F45435_y9PEj2DlvJuk_tRcA7GqRg.jpg"
},
{
    id: 18,
    brand: "BMW",
    model: "525",
    price: 18800,
    city: "Bakı",
    barter: true,
    credit: false,
    currency: "AZN",
    reng: "Ağ",
    date: 2005,
    yeni: false,
    engine: 2.5,
    milestone: "229 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F05%2F15%2F23%2F40%2F5b220e3d-84a1-4f95-ad68-fa3f6d141471%2F81960_dcYlDF1AWewQnf_Q5hvuYQ.jpg"
},
{
    id: 19,
    brand: "LADA (VAZ)",
    model: "2106",
    price: 5000,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qırmızı",
    date: 1995,
    yeni: false,
    engine: 1.6,
    milestone: "250 300",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F27%2F11%2F38%2F35%2F9fab6b92-20c2-4cfd-a125-737e8f1b4913%2F52642_qCuWLaPSqTISgvkU2C2-kw.jpg"
},
{
    id: 20,
    brand: "LADA (VAZ)",
    model: "Niva",
    price: 19200,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2021,
    yeni: false,
    engine: 1.7,
    milestone: "15 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F01%2F19%2F48%2F32%2F7df7de09-b3d0-445e-8912-005bd6f71cdb%2F93779_Ebd-lyHX0OQBw9XUOnH1ZA.jpg"
},
{
    id: 21,
    brand: "LADA (VAZ)",
    model: "Niva",
    price: 14500,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2014,
    yeni: false,
    engine: 1.7,
    milestone: "50 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F17%2F14%2F36%2F41%2Fc7bf928e-97e4-453c-8418-c80b9cdf900b%2F47559_3s77dDWoG1O9CU4kTgiVIg.jpg"
},
{
    id: 22,
    brand: "LADA (VAZ)",
    model: "Niva",
    price: 12500,
    city: "Bakı",
    barter: true,
    credit: false,
    currency: "AZN",
    reng: "Ağ",
    date: 2015,
    yeni: false,
    engine: 1.7,
    milestone: "148 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F06%2F15%2F20%2F07%2F69c8653a-4aef-492e-a88f-01f95f7a37cb%2F54467_RjlpLx9jpevW4Ha5wpgHgA.jpg"
},
{
    id: 23,
    brand: "LADA (VAZ)",
    model: "Priora",
    price: 20400,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2015,
    yeni: false,
    engine: 1.6,
    milestone: "94 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F31%2F14%2F45%2F54%2Fb756210e-1d39-4c0c-adee-8b471ae439b7%2F81237_vixV_niGriNGs-pVku2CvA.jpg"
},
{
    id: 24,
    brand: "Porsche",
    model: "Panamera 4",
    price: 28800,
    city: "Bakı",
    barter: true,
    credit: true,
    currency: "$",
    reng: "Ağ",
    date: 2010,
    yeni: false,
    engine: 4.8,
    milestone: "185 000",
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F07%2F17%2F11%2F52%2F47%2F0044efbc-80e5-4e0e-a912-a6df7a31f21d%2F35951_X2CC4YzGz1nNTnpZ0f0aug.jpg"
},
{
    id: 25,
    brand: "Porsche",
    model: "Cayenne",
    price: 51500,
    city: "Bakı",
    barter: true,
    credit: false,
    currency: "$",
    reng: "Yaş Asfalt",
    date: 2015,
    yeni: false,
    engine: 3.6,
    milestone: "111 180",
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F07%2F01%2F18%2F38%2F03%2F0627bc28-e2f0-4049-97e4-6279746ed025%2F71746_8eD3oFUOpmiHrFeI0_u5ZA.jpg"
},
{
    id: 26,
    brand: "Porsche",
    model: "Panamera GTS",
    price: 175000,
    city: "Bakı",
    barter: true,
    credit: false,
    currency: "$",
    reng: "Göy",
    date: 2021,
    yeni: true,
    engine: 4.0,
    milestone: 0,
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F02%2F05%2F14%2F21%2F05%2Fec4ff85d-5956-4073-aa28-c652ba8600d3%2F20697_DMB1x10bKI77AGbUgPeGaw.jpg"
},
{
    id: 27,
    brand: "Porsche",
    model: "Macan",
    price: 46800,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Yaş Asfalt",
    date: 2017,
    yeni: false,
    engine: 2.0,
    milestone: "66 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F17%2F21%2F32%2F29%2F4308d338-fefc-4c3a-8749-be6d0795815d%2F63223_3QPyBiJxMX-tgxplXE0TSw.jpg"
},
{
    id: 28,
    brand: "Toyota",
    model: "Prius",
    price: 14600,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Yaşıl",
    date: 2008,
    yeni: false,
    engine: 1.5,
    milestone: "158 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F13%2F13%2F31%2F43%2Fc9f04c90-d784-42d3-8387-5bd02029371a%2F73181_H4iZmL8J09nJ8A3w-GxJtw.jpg#_gl=1*1gkncyg*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTU3OTQuNTg."
},
{
    id: 29,
    brand: "Toyota",
    model: "Prius",
    price: 13500,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Yaş Asfalt",
    date: 2008,
    yeni: false,
    engine: 1.5,
    milestone: "312 052",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F08%2F03%2F03%2F18%2F55%2F9aee7a59-b194-4b10-b004-f7340e1fea2b%2F67374_eAitOuiAiz8oyUHgxgeXiA.jpg"
},
{
    id: 30,
    brand: "Toyota",
    model: "Prius",
    price: 15900,
    city: "Sumqayıt",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2008,
    yeni: false,
    engine: 1.5,
    milestone: "200 000",
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F07%2F25%2F12%2F58%2F36%2Fbff3e661-785b-4811-abf2-36fa8a9c9517%2F66152_4cKFcjTv296xzZR1TVXcJg.jpg"
},
{
    id: 31,
    brand: "Toyota",
    model: "Prado",
    price: 22900,
    city: "Sumqayıt",
    credit: true,
    barter: false,
    currency: "$",
    reng: "Ağ",
    date: 2010,
    yeni: false,
    engine: 2.7,
    milestone: "169 000",
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F08%2F05%2F17%2F25%2F24%2F1c3a2267-7199-4614-b999-0cc09c68fc57%2F54471_1D-vgCyRJhqkHnzRwgitmA.jpg"
},
{
    id: 32,
    brand: "Toyota",
    model: "Land Cruiser",
    price: 44000,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2013,
    yeni: false,
    engine: 4.6,
    milestone: "160 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F05%2F15%2F09%2F25%2F41%2Fa225c7f1-a1c6-4cc4-b859-553dafddd5a5%2F50541_1Rf9hp-tZPQjqgG0GFNy7g.jpg"
},
{
    id: 33,
    brand: "Toyota",
    model: "Corolla",
    price: 13900,
    city: "Bakı",
    credit: true,
    barter: false,
    currency: "AZN",
    reng: "Qara",
    date: 2006,
    yeni: false,
    engine: 1.4,
    milestone: "220 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F06%2F23%2F35%2F35%2Fe8c081ae-f09a-41dd-bd54-d796a0bc0d53%2F2024_y43KieyRbBg-4XT0n5JdcQ.jpg#_gl=1*ah4rmx*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTU1NzUuMzc."
},
{
    id: 34,
    brand: "Toyota",
    model: "C-HR",
    price: 33500,
    city: "Bakı",
    credit: false,
    barter: true,
    currency: "$",
    reng: "Ağ",
    date: 2022,
    yeni: true,
    engine: 2.0,
    milestone: 0,
    url: "https://turbo.azstatic.com/uploads/full/2022%2F07%2F06%2F13%2F17%2F12%2F0c905e76-3862-4193-8a22-23989b8a7222%2F2312_r4rGFEbyzkQCqnOrIZqEMg.jpg#_gl=1*1pg7225*_ga*NTQzNDM0Mzg1LjE2NTk2OTQ1NTE.*_ga_68B6PJZXYD*MTY1OTcwMzEyOC4yLjEuMTY1OTcwODQyOS40Mw.."
},
{
    id: 35,
    brand: "Chevrolet",
    model: "Malibu",
    price: 18999,
    city: "Bakı",
    credit: false,
    barter: true,
    currency: "AZN",
    reng: "Göy",
    date: 2016,
    yeni: false,
    engine: 1.5,
    milestone: "98 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F22%2F18%2F36%2F36%2F243c443c-dd91-45dd-a793-ee8c0c9d9652%2F46301_zKLJDDo3IFrWdxi9CqZPHQ.jpg"
},
{
    id: 36,
    brand: "Chevrolet",
    model: "Volt",
    price: 24000,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Boz",
    date: 2018,
    yeni: false,
    engine: 1.5,
    milestone: "71 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F15%2F10%2F40%2F44%2Fef27d8ca-7cd7-4bbd-a4d6-f98ebd71b069%2F95958_6W_YFD_eEN2riSyePFtHtA.jpg"
},
{
    id: 37,
    brand: "Chevrolet",
    model: "Camaro",
    price: 27700,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2019,
    yeni: false,
    engine: 2.0,
    milestone: "57 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F12%2F10%2F23%2F57%2Fbb110a40-702f-4243-852c-333157785ed8%2F74090_qWw_rLVWGKongfpCDUfekQ.jpg"
},
{
    id: 38,
    brand: "Chevrolet",
    model: "Equinox",
    price: 39150,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2022,
    yeni: true,
    engine: 2.0,
    milestone: 0,
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F05%2F26%2F18%2F19%2F44%2F1c00e45d-3ab3-47d3-9809-1f606b8f99d1%2F86615_Hq81k7cbL74WNeNiAMHFaQ.jpg"
},
{
    id: 39,
    brand: "Chevrolet",
    model: "Cruze",
    price: 12300,
    city: "Sumqayıt",
    barter: true,
    credit: true,
    currency: "AZN",
    reng: "Ağ",
    date: 2011,
    yeni: false,
    engine: 1.4,
    milestone: "345 000",
    url: "https://turbo.azstatic.com/uploads/f460x343/2022%2F07%2F08%2F19%2F03%2F17%2Fab11f963-1772-485a-8cbf-99a271a62347%2F74127_RszsBKSxtDgnpXdYFFm-og.jpg"
},
{
    id: 40,
    brand: "Chevrolet",
    model: "Cruze",
    price: 15300,
    city: "Bakı",
    barter: true,
    credit: false,
    currency: "AZN",
    reng: "Qara",
    date: 2014,
    yeni: false,
    engine: 1.4,
    milestone: "89 000",
    url: "https://turbo.azstatic.com/uploads/f330x248/2022%2F07%2F27%2F11%2F26%2F05%2Fd2381ce7-84ac-4c3a-8b82-236826e72a6c%2F42754_Ybwf9N_uwKE1IQA5aWoCFA.jpg"
},
{
    id: 41,
    brand: "Toyota",
    model: "Prius",
    price: 19400,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2012,
    yeni: false,
    engine: 1.8,
    milestone: "202 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F06%2F21%2F51%2F10%2F24304e34-10d3-4fd7-8b96-c29153a8deeb%2F54461_bltltrfgg82V9MUds5ToWw.jpg#_gl=1*xhbalv*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTYyMDIuNTA."
},
{
    id: 42,
    brand: "BMW",
    model: "X7",
    price: 107000,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Göy",
    date: 2020,
    yeni: false,
    engine: 3.0,
    milestone: "58 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F06%2F02%2F19%2F12%2F40%2F22b37ab0-2ff9-4b3e-85c4-ee3ba710da07%2F43331_h41wcmujdmB1dPIdbfWI_g.jpg#_gl=1*14poej2*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTU5OTguNTU."
},
{
    id: 43,
    brand: "Chevrolet",
    model: "Malibu",
    price: 27900,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2016,
    yeni: false,
    engine: 1.5,
    milestone: "126 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F12%2F11%2F45%2F13%2F08b8c015-1922-4ca2-825f-40aabb561834%2F35145_1C3HfT1o9WnLGGgQYeiXOg.jpg#_gl=1*t5tij*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDM5Njg4OC4zNy4xLjE2NjAzOTgzNjkuMzc."
},
{
    id: 44,
    brand: "LADA (VAZ)",
    model: "2107",
    price: 6200,
    city: "Sumqayıt",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2009,
    yeni: false,
    engine: 1.6,
    milestone: "90 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F06%2F10%2F26%2F11%2F0636b6d9-6e74-41e1-8559-33c8a85a1c06%2F2000_qCiqGslbEOBiooDIlYVptQ.jpg#_gl=1*icbq95*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDM5Njg4OC4zNy4xLjE2NjAzOTkwODAuNTM."
},
{
    id: 45,
    brand: "LADA (VAZ)",
    model: "2107",
    price: 7500,
    city: "Şəmkir",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2009,
    yeni: false,
    engine: 1.6,
    milestone: "70 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F13%2F18%2F11%2F09%2F7a61df81-0058-46e8-8333-c6d4cff8bb2f%2F18759_lLSUC1g-PznXTGB-p7QZUw.jpg#_gl=1*1becg1h*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTI0NjQuMzg."
},
{
    id: 46,
    brand: "LADA (VAZ)",
    model: "2107",
    price: 8900,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2010,
    yeni: false,
    engine: 1.6,
    milestone: "80 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F13%2F12%2F15%2F17%2Fd2cd922e-eb6a-42a5-b371-fcd179fa17d7%2F73182_FdYCueuCKpVQCf44gvTtXw.jpg#_gl=1*13m4mo3*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTI1NjQuNTU."
},
{
    id: 47,
    brand: "Chevrolet",
    model: "Cruze",
    price: 17000,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2016,
    yeni: false,
    engine: 1.4,
    milestone: "130 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F06%2F12%2F15%2F47%2F33%2Fa0ce6d0e-ae43-4c7d-b39a-c1460e12bee7%2F20110_o3dI6dVVujxFv7KSZQKSEA.jpg#_gl=1*3ncxuu*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTI2NzUuMzk."
},
{
    id: 48,
    brand: "Chevrolet",
    model: "Cruze",
    price: 15200,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qırmızı",
    date: 2013,
    yeni: false,
    engine: 1.4,
    milestone: "243 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F05%2F21%2F37%2F35%2Fa296085b-08ce-4a70-8e38-971e645ea907%2F15133_y33Qa8sw9CzWc4Qq8v4ArQ.jpg#_gl=1*f0t78o*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTI3OTEuNjA."
},
{
    id: 49,
    brand: "Chevrolet",
    model: "Camaro",
    price: 25500,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2017,
    yeni: false,
    engine: 2.0,
    milestone: "80 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F06%2F16%2F17%2F37%2F08%2Fc50fe276-bb54-4b55-8c92-b821f4bc41a8%2F48323_I-pxb6vhTHBo3CW1H9z0NA.jpg#_gl=1*13yu3np*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTMwMTEuNTc."
},
{
    id: 50,
    brand: "Chevrolet",
    model: "Malibu",
    price: 24000,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Göy",
    date: 2016,
    yeni: false,
    engine: 1.5,
    milestone: "130 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F07%2F23%2F15%2F15%2F57%2Fa42f96c6-3b02-4a7d-82db-6a0eb1cdecf2%2F30067_6GM5wdoE707DRkFx1CAJQA.jpg#_gl=1*1xyt5qh*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTY0MDguMjU."
},
{
    id: 51,
    brand: "Chevrolet",
    model: "Camaro",
    price: 21900,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Yaş Asfalt",
    date: 2014,
    yeni: false,
    engine: 3.6,
    milestone: "66 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F05%2F11%2F24%2F37%2Faecc09e2-ce00-4fb0-b33f-56ad5f0e9f6e%2F71849_iPBdQkqDFlpJZKZ0TOYkXg.jpg#_gl=1*s1cugu*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTY0ODcuNTA."
},
{
    id: 52,
    brand: "Audi",
    model: "Q8",
    price: 76900,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Boz",
    date: 2018,
    yeni: false,
    engine: 3.0,
    milestone: "67 500",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F05%2F26%2F12%2F00%2F47%2F3dbcaf77-4b67-48c5-86d6-92a6688aa67a%2F20074_zLCgpeHLKeLQILxD40G36w.jpg#_gl=1*ukk1fi*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTM1OTguMzQ."
},
{
    id: 53,
    brand: "Audi",
    model: "S8",
    price: 14000,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2001,
    yeni: false,
    engine: 4.2,
    milestone: "196 200",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F07%2F28%2F18%2F04%2F25%2F6f09c145-cc30-49a3-bcd3-ad7f7b2e1127%2F18509_HhSogkImRI6ugZTcU8Vhwg.jpg#_gl=1*zjl5xo*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTM3MjguNTA."
},
{
    id: 54,
    brand: "Audi",
    model: "A4",
    price: 5000,
    city: "Sumqayıt",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2000,
    yeni: false,
    engine: 1.8,
    milestone: "370 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F07%2F00%2F58%2F45%2Fcfcc8425-9c2a-4fb7-ab68-039fdae2d293%2F2026_D6YK3nV7Lv9Ju9Ki11hMrA.jpg#_gl=1*11mkj5y*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTM4NjYuMjI."
},
{
    id: 55,
    brand: "BMW",
    model: "530",
    price: 18500,
    city: "Sumqayıt",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Yaşıl",
    date: 2003,
    yeni: false,
    engine: 3.0,
    milestone: "300 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F06%2F23%2F15%2F35%2Ff92e2f8c-0ef2-430c-837b-025e04128a72%2F54465_1j22R5N3lA9spwrH0bJEOg.jpg#_gl=1*10m5whv*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTQwNTAuNTg."
},
{
    id: 56,
    brand: "Mercedes",
    model: "E 220",
    price: 26500,
    city: "Sumqayıt",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2011,
    yeni: false,
    engine: 2.2,
    milestone: "301 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F09%2F16%2F39%2F11%2F6993a950-1d1d-4011-ada5-9a612ee424d3%2F41466_HaKN9x_vhTb-y2l1EAvTIw.jpg#_gl=1*lsupwm*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTQyNTIuNjA."
},
{
    id: 57,
    brand: "Mercedes",
    model: "GLC 300",
    price: 37500,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Yaş Asfalt",
    date: 2016,
    yeni: false,
    engine: 2.0,
    milestone: "75 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F06%2F07%2F23%2F22%2F36%2F6c06ec14-37b0-40bc-a4bb-94747537ba0d%2F56750_x71jUh4FpnE4g8bgzg9fzg.jpg#_gl=1*4jtwfp*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTQzODkuNDQ."
},
{
    id: 58,
    brand: "Hyundai",
    model: "Elantra",
    price: 26900,
    city: "Bakı",
    currency: "AZN",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2017,
    yeni: false,
    engine: 1.6,
    milestone: "18 000",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F04%2F20%2F46%2F25%2F7bc23e5b-bfe7-41f9-88e2-924300a1aaf9%2F37002_aUgkEjj4CyxG2t1HYp_z1w.jpg#_gl=1*1idkwh2*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTQ3MTguNjA."
},
{
    id: 59,
    brand: "Hyundai",
    model: "Sonata",
    price: 39500,
    city: "Bakı",
    currency: "$",
    barter: false,
    credit: false,
    reng: "Ağ",
    date: 2020,
    yeni: true,
    engine: 2.0,
    milestone: "0",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F03%2F16%2F12%2F59%2F29%2Fd8fc7103-53b9-48ab-ade4-fa419b0af443%2F19381_bYsKSOLd5i8HxaNDNv2I7Q.jpg#_gl=1*1m0epvs*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTQ2NDguNDk."
},
{
    id: 60,
    brand: "Porsche",
    model: "Cayenne Coupe",
    price: 117000,
    city: "Bakı",
    currency: "EUR",
    barter: false,
    credit: false,
    reng: "Qara",
    date: 2022,
    yeni: true,
    engine: 3.0,
    milestone: "0",
    url: "https://turbo.azstatic.com/uploads/full/2022%2F08%2F11%2F09%2F25%2F32%2F5a670c1c-0aab-41c9-bf35-7980b11ebbfa%2F34034_eexMue2OTbUBgSBQHO3YPA.jpg#_gl=1*64p96l*_ga*MzI2MzE4MTI1LjE2NTk0MzcxMjc.*_ga_68B6PJZXYD*MTY2MDQxMjM3NC4zOC4xLjE2NjA0MTQ5MTEuNDU."
},
];
let minumum = document.getElementById("input-minil")
let maximum = document.getElementById("input-maxil")
let minqiymet = document.getElementById("input-minqiymet")
let maxqiymet = document.getElementById("input-maxqiymet")
let markainput = document.getElementById("inputmarka")
let datal = document.getElementById("marka")
let allCars = document.getElementById("cars-img")
let demo = document.getElementById("demo")
let datalreng = document.getElementById("reng")
let inputreng = document.getElementById("inputreng")
let datalseher = document.getElementById("seher")
let inputseher = document.getElementById("inputseher")
let masincardyazi = document.getElementById("masin-card-yazi")
let masincardimg = document.getElementById("masin-card-img")
let inputModel = document.getElementById("inputmodel")
let model = document.getElementById("model")
let btnbarter = document.getElementById("btnbarter")
let findObj = cars.filter(
    (item, index, array) => index === array.findIndex((a) => a.brand === item.brand)
)
let colors = cars.filter(
    (item, index, array) => index === array.findIndex((a) => a.reng === item.reng)
)
let cities = cars.filter(
    (item, index, array) => index === array.findIndex((a) => a.city === item.city)
)
for (let i in findObj) {
    datal.innerHTML += `
    <option>${findObj[i].brand}</option>
    `
}
for (let i in colors) {
    datalreng.innerHTML += `
    <option>${colors[i].reng}</option>
    `
}
for (let i in cities) {
    datalseher.innerHTML += `
    <option>${cities[i].city}</option>
    `
}

//disable model
markainput.onchange = (e) => {
    if (e.target.value !== "") {
        inputModel.removeAttribute("disabled")
    }
    else {
        inputModel.value = ""
        inputModel.setAttribute("disabled", "")
    }

    if (model.hasChildNodes()) {
        model.innerHTML = ""
    }
    if (model.children[0] === undefined) {
        let modelList = new Set()
        cars.forEach(item => { if (e.target.value === item.brand) modelList.add(item.model) })
        for (let i of modelList) {
            model.innerHTML += `
            <option>${i}</option>
            `
        }
    }
}
//disable model

for (let i in cars) {
    masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${cars[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${cars[i].price}
                ${cars[i].currency}</p>
                <p class = "marka">${cars[i].brand}
                ${cars[i].model}
                </p>
                <p class = "tarix">${cars[i].date},
                    ${cars[i].engine} L,
                    ${cars[i].milestone} km
                </p>
                <p class = "seher">${cars[i].city}
                </p>
            </div>
        </div>
                `
    masincardimg.style.display = "flex"
    masincardimg.style.flexWrap = "wrap"
    masincardimg.style.justifyContent = "space-between"
}
function barter() {
    if (open) {
        btnbarter.style.color = "#212c3a"
        btnbarter.style.backgroundColor = "#ffe6e5"
        btnbarter.style.border = "1px solid #ca1016"
    }
    else {
        btnbarter.style.color = "#212c3a"
        btnbarter.style.backgroundColor = "#fff"
        btnbarter.style.border = "1px solid #dfe3e9"
    }
    open = !open;
}
let btnkredit = document.getElementById("btnkredit")
let aciq = true;
function kredit() {
    if (aciq) {
        btnkredit.style.color = "#212c3a"
        btnkredit.style.backgroundColor = "#ffe6e5"
        btnkredit.style.border = "1px solid #ca1016"
    }
    else {
        btnkredit.style.color = "#212c3a"
        btnkredit.style.backgroundColor = "#fff"
        btnkredit.style.border = "1px solid #dfe3e9"
    }
    aciq = !aciq;
}

//// new variables
let isActiveSurulmus = false
let isActiveHamisi = true
let isActiveYeni = false

let btnhamisi = document.getElementById("btnhamisi")
let open1 = true;
function hamisi() {
    if (open1 && !isActiveHamisi) {
        btnhamisi.style.color = "#fff"
        btnhamisi.style.backgroundColor = "#ca1016"
        btnhamisi.style.border = "1px solid #ca1016"
        btnyeni.style.color = "#8d94ad"
        btnyeni.style.backgroundColor = "#fff"
        btnyeni.style.border = "1px solid #dfe3e9"
        btnsurulmus.style.color = "#8d94ad"
        btnsurulmus.style.backgroundColor = "#fff"
        btnsurulmus.style.border = "1px solid #dfe3e9"
        isActiveHamisi = true // isActive
        isActiveSurulmus = false
        isActiveYeni = false
    }
    open1 = !open1;
}
let btnyeni = document.getElementById("btnyeni")
let open2 = true;
function yeni() {
    if (open2 && !isActiveYeni) {
        btnhamisi.style.color = "#8d94ad"
        btnhamisi.style.backgroundColor = "#fff"
        btnhamisi.style.border = "1px solid #dfe3e9"
        btnsurulmus.style.color = "#8d94ad"
        btnsurulmus.style.backgroundColor = "#fff"
        btnsurulmus.style.border = "1px solid #dfe3e9"
        btnyeni.style.color = "#fff"
        btnyeni.style.backgroundColor = "#ca1016"
        btnyeni.style.border = "1px solid #ca1016"
        isActiveYeni = true // isActive
        isActiveHamisi = false
        isActiveSurulmus = false
    }
    open2 = !open2;
}
let btnsurulmus = document.getElementById("btnsurulmus")
let open3 = true;
function surulmus() {
    if (open3 && !isActiveSurulmus) {
        btnyeni.style.color = "#8d94ad"
        btnyeni.style.backgroundColor = "#fff"
        btnyeni.style.border = "1px solid #dfe3e9"
        btnhamisi.style.color = "#8d94ad"
        btnhamisi.style.backgroundColor = "#fff"
        btnhamisi.style.border = "1px solid #dfe3e9"
        btnsurulmus.style.color = "#fff"
        btnsurulmus.style.backgroundColor = "#ca1016"
        btnsurulmus.style.border = "1px solid #ca1016"
        isActiveSurulmus = true // isActive
        isActiveHamisi = false
        isActiveYeni = false
    }
    open3 = !open3;
}
function tap() {
    masincardimg.innerHTML = ""

    let btnHamisi, btnYeni, btnSurulmus

    if (isActiveHamisi) btnHamisi = document.getElementById("btnhamisi").textContent
    else if (isActiveYeni) btnYeni = document.getElementById("btnyeni").textContent
    else if (isActiveSurulmus) btnSurulmus = document.getElementById("btnsurulmus").textContent

    if (btnYeni !== undefined && btnYeni === "Yeni") btnYeni = true
    else if (btnSurulmus !== undefined && btnSurulmus === "Sürülmüş") btnSurulmus = false
    if (btnHamisi !== undefined && btnHamisi == "Hamisi") btnHamisi == true

    let carYeni = cars.filter((item) => {
        return item.yeni === btnYeni
    })
    let carSurulmus = cars.filter((item) => {
        return item.yeni === btnSurulmus
    })

    let carHamisi = cars

    // let bartercar = cars.filter((item) => {
    //     return item.barter == true && item.credit == false
    // })
    // let creditcar = cars.filter((item) => {
    //     return item.credit == true && item.barter == false
    // })
    // let bartercreditcar = cars.filter((item) => {
    //     return item.barter == true && item.barter == true
    // })
    let optval = document.getElementById("optval")
    let dollar = cars.filter((item) => {
        return item.currency == "$"
    })
    let azn = cars.filter((item) => {
        return item.currency == "AZN"
    })
    let euro = cars.filter((item) => {
        return item.currency == "EUR"
    })
    console.log(euro);
    // tekfilterler 
    let filteredCar = cars.filter((item) => {
        return item.brand == markainput.value
    })
    let filteredModelCar = filteredCar.filter((item) => {
        return item.model == inputModel.value
    })
    let carcolors = cars.filter((item) => item.reng == inputreng.value)
    let carcities = cars.filter((item) => item.city == inputseher.value)
    let cardates = cars.filter((item) => item.date >= minumum.value && item.date <= maximum.value)
    let carprices = cars.filter((item) => item.price >= minqiymet.value && item.price <= maxqiymet.value)
    // let currencycars = cars.filter((item) => item.currency ==)

    //2liler
    let colorinput = filteredCar.filter((item) => {
        return item.reng == inputreng.value && item.brand == markainput.value
    })
    let seherinput = filteredCar.filter((item) => {
        return item.city == inputseher.value && item.brand == markainput.value
    })
    let qiymetinput = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let ilinput = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.date >= minumum.value && item.date <= maximum.value
    })
    let ilseher = cardates.filter((item) => {
        return item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value
    })
    let rengseher = carcolors.filter((item) => {
        return item.city == inputseher.value && item.reng == inputreng.value
    })
    let qiymetseher = carprices.filter((item) => {
        return item.price >= minqiymet.value && item.price <= maxqiymet.value && item.city == inputseher.value
    })
    let ilreng = cardates.filter((item) => {
        return item.reng == inputreng.value && item.date >= minumum.value && item.date <= maximum.value
    })
    let ilqiymet = cardates.filter((item) => {
        return item.price >= minqiymet.value && item.price <= maxqiymet.value && item.date >= minumum.value && item.date <= maximum.value
    })
    let rengqiymet = carcolors.filter((item) => {
        return item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markamodelseher = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.city == inputseher.value
    })
    let markamodelil = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.date >= minumum.value && item.date <= maximum.value
    })
    let markamodelreng = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.reng == inputreng.value
    })
    let markamodelqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })

    //3luler
    let markarengseher = seherinput.filter((item) => {
        return item.reng == inputreng.value && item.city == inputseher.value && item.brand == markainput.value
    })
    let markarengil = filteredCar.filter((item) => {
        return item.reng == inputreng.value && item.date >= minumum.value && item.date <= maximum.value && item.brand == markainput.value
    })
    let markarengqiymet = filteredCar.filter((item) => {
        return item.reng == inputreng.value && markainput.value == item.brand && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markaseheril = filteredCar.filter((item) => {
        return item.city == inputseher.value && markainput.value == item.brand && item.date >= minumum.value && item.date <= maximum.value
    })
    let markaseherqiymet = filteredCar.filter((item) => {
        return item.city == inputseher.value && markainput.value == item.brand && item.date >= minqiymet.value && item.date <= maxqiymet.value
    })
    let markailqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.date >= minumum.value && item.date <= maximum.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let seherilreng = rengseher.filter((item) => {
        return item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value
    })
    let seherilqiymet = ilseher.filter((item) => {
        return item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let seherrengqiymet = rengseher.filter((item) => {
        return item.city == inputseher.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let ilrengqiymet = ilreng.filter((item) => {
        return item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })


    //4luler
    let markaseherilreng = filteredCar.filter((item) => {
        return item.city == inputseher.value && markainput.value == item.brand && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value
    })
    let markaseherilqiymet = filteredCar.filter((item) => {
        return markainput.value == item.brand && item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markailrengqiymet = filteredCar.filter((item) => {
        return item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value && markainput.value == item.brand && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markaseherrengqiymet = rengseher.filter((item) => {
        return markainput.value == item.brand && item.city == inputseher.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markamodelseheril = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value
    })
    let markamodelilreng = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value
    })
    let markamodelseherreng = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.reng == inputreng.value && item.city == inputseher.value
    })
    let markamodelseherqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.price >= minqiymet.value && item.price <= maxqiymet.value && item.city == inputseher.value
    })
    let markamodelilqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.date >= minumum.value && item.date <= maximum.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markamodelrengqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let seherilrengqiymet = rengseher.filter((item) => {
        return item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })


    //5liler
    let markaseherilrengqiymet = rengseher.filter((item) => {
        return item.brand == markainput.value && item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markamodelseherilreng = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value
    })
    let markamodelseherrengqiymet = rengseher.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.reng == inputreng.value && item.city == inputseher.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markamodelilrengqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    let markamodelseherilqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })

    //6lilar
    let markamodelseherilrengqiymet = filteredCar.filter((item) => {
        return item.brand == markainput.value && item.model == inputModel.value && item.city == inputseher.value && item.date >= minumum.value && item.date <= maximum.value && item.reng == inputreng.value && item.price >= minqiymet.value && item.price <= maxqiymet.value
    })
    //tekler
    for (let i = 0; i < dollar.length; i++) {
        if (dollar.length > 0 && carYeni.length == 0 && carSurulmus.length == 0 && carHamisi.length == 0 && markainput.value.length == 0 && inputModel.value.length == 0 && inputreng.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${dollar[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${dollar[i].price}
                ${dollar[i].currency}</p>
                <p class = "marka">${dollar[i].brand}
                ${dollar[i].model}
                </p>
                <p class = "tarix">${dollar[i].date},
                    ${dollar[i].engine} L,
                    ${dollar[i].milestone} km
                </p>
                <p class = "seher">${dollar[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < carYeni.length; i++) {
        if (carYeni.length > 0 && carSurulmus.length == 0 && markainput.value.length == 0 && inputModel.value.length == 0 && inputreng.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            console.log(carYeni);
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${carYeni[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${carYeni[i].price}
                ${carYeni[i].currency}</p>
                <p class = "marka">${carYeni[i].brand}
                ${carYeni[i].model}
                </p>
                <p class = "tarix">${carYeni[i].date},
                    ${carYeni[i].engine} L,
                    ${carYeni[i].milestone} km
                </p>
                <p class = "seher">${carYeni[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < carSurulmus.length; i++) {
        if (carSurulmus.length > 0 && carYeni.length == 0 && markainput.value.length == 0 && inputModel.value.length == 0 && inputreng.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${carSurulmus[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${carSurulmus[i].price}
                ${carSurulmus[i].currency}</p>
                <p class = "marka">${carSurulmus[i].brand}
                ${carSurulmus[i].model}
                </p>
                <p class = "tarix">${carSurulmus[i].date},
                    ${carSurulmus[i].engine} L,
                    ${carSurulmus[i].milestone} km
                </p>
                <p class = "seher">${carSurulmus[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < carHamisi.length; i++) {
        if (carSurulmus.length == 0 && carHamisi.length > 0 && carYeni.length == 0 && markainput.value.length == 0 && inputModel.value.length == 0 && inputreng.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${carHamisi[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${carHamisi[i].price}
                ${carHamisi[i].currency}</p>
                <p class = "marka">${carHamisi[i].brand}
                ${carHamisi[i].model}
                </p>
                <p class = "tarix">${carHamisi[i].date},
                    ${carHamisi[i].engine} L,
                    ${carHamisi[i].milestone} km
                </p>
                <p class = "seher">${carHamisi[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < filteredCar.length; i++) {
        if (markainput.value.length > 0 && inputModel.value.length == 0 && inputreng.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${filteredCar[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${filteredCar[i].price}
                ${filteredCar[i].currency}</p>
                <p class = "marka">${filteredCar[i].brand}
                ${filteredCar[i].model}
                </p>
                <p class = "tarix">${filteredCar[i].date},
                    ${filteredCar[i].engine} L,
                    ${filteredCar[i].milestone} km
                </p>
                <p class = "seher">${filteredCar[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < filteredModelCar.length; i++) {
        if (markainput.value.length > 0 && inputModel.value.length > 0 && inputreng.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${filteredModelCar[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${filteredModelCar[i].price}
                ${filteredModelCar[i].currency}</p>
                <p class = "marka">${filteredModelCar[i].brand}
                ${filteredModelCar[i].model}
                </p>
                <p class = "tarix">${filteredModelCar[i].date},
                    ${filteredModelCar[i].engine} L,
                    ${filteredModelCar[i].milestone} km
                </p>
                <p class = "seher">${filteredModelCar[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in carcolors) {
        if (inputreng.value.length > 0 && inputModel.value.length == 0 && markainput.value.length == 0 && inputseher.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${carcolors[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${carcolors[i].price}
                ${carcolors[i].currency}</p>
                <p class = "marka">${carcolors[i].brand}
                ${carcolors[i].model}
                </p>
                <p class = "tarix">${carcolors[i].date},
                    ${carcolors[i].engine} L,
                    ${carcolors[i].milestone} km
                </p>
                <p class = "seher">${carcolors[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in carcities) {
        if (inputseher.value.length > 0 && inputModel.value.length == 0 && markainput.value.length == 0 && inputreng.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${carcities[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${carcities[i].price}
                ${carcities[i].currency}</p>
                <p class = "marka">${carcities[i].brand}
                ${carcities[i].model}
                </p>
                <p class = "tarix">${carcities[i].date},
                    ${carcities[i].engine} L,
                    ${carcities[i].milestone} km
                </p>
                <p class = "seher">${carcities[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in cardates) {
        if (inputseher.value.length == 0 && inputModel.value.length == 0 && markainput.value.length == 0 && inputreng.value.length == 0 && minumum.value.length > 0 && maximum.value.length > 0 && minqiymet.value.length == 0 && maxqiymet.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${cardates[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${cardates[i].price}
                ${cardates[i].currency}</p>
                <p class = "marka">${cardates[i].brand}
                ${cardates[i].model}
                </p>
                <p class = "tarix">${cardates[i].date},
                    ${cardates[i].engine} L,
                    ${cardates[i].milestone} km
                </p>
                <p class = "seher">${cardates[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in carprices) {
        if (inputseher.value.length == 0 && inputModel.value.length == 0 && markainput.value.length == 0 && inputreng.value.length == 0 && minumum.value.length == 0 && maximum.value.length == 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${carprices[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${carprices[i].price}
                ${carprices[i].currency}</p>
                <p class = "marka">${carprices[i].brand}
                ${carprices[i].model}
                </p>
                <p class = "tarix">${carprices[i].date},
                    ${carprices[i].engine} L,
                    ${carprices[i].milestone} km
                </p>
                <p class = "seher">${carprices[i].city}
                </p>
            </div>
        </div>
                `
        }
    }


    //2 ve daha cox olan filterlerin funksiyasi
    for (let i in colorinput) {
        if (markainput.value.length > 0 && inputreng.value.length > 0 && inputModel.value.length == 0 && markaseherrengqiymet == 0 && markailrengqiymet == 0 && markaseherilreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${colorinput[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${colorinput[i].price}
                ${colorinput[i].currency}</p>
                <p class = "marka">${colorinput[i].brand}
                ${colorinput[i].model}
                </p>
                <p class = "tarix">${colorinput[i].date},
                    ${colorinput[i].engine} L,
                    ${colorinput[i].milestone} km
                </p>
                <p class = "seher">${colorinput[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseher) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputseher.value.length > 0 && markamodelseheril == 0 && markamodelseherreng == 0 && markamodelseherqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseher[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseher[i].price}
                ${markamodelseher[i].currency}</p>
                <p class = "marka">${markamodelseher[i].brand}
                ${markamodelseher[i].model}
                </p>
                <p class = "tarix">${markamodelseher[i].date},
                    ${markamodelseher[i].engine} L,
                    ${markamodelseher[i].milestone} km
                </p>
                <p class = "seher">${markamodelseher[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelil) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && markamodelseheril == 0 && markamodelilreng == 0 && markamodelilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelil[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelil[i].price}
                ${markamodelil[i].currency}</p>
                <p class = "marka">${markamodelil[i].brand}
                ${markamodelil[i].model}
                </p>
                <p class = "tarix">${markamodelil[i].date},
                    ${markamodelil[i].engine} L,
                    ${markamodelil[i].milestone} km
                </p>
                <p class = "seher">${markamodelil[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelreng) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputreng.value.length > 0 && markamodelilreng == 0 && markamodelseherreng == 0 && markamodelrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelreng[i].price}
                ${markamodelreng[i].currency}</p>
                <p class = "marka">${markamodelreng[i].brand}
                ${markamodelreng[i].model}
                </p>
                <p class = "tarix">${markamodelreng[i].date},
                    ${markamodelreng[i].engine} L,
                    ${markamodelreng[i].milestone} km
                </p>
                <p class = "seher">${markamodelreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && markamodelseherqiymet == 0 && markamodelilqiymet == 0 && markamodelrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markamodelqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet">${markamodelqiymet[i].price}
                ${markamodelqiymet[i].currency}</p>
                <p class = "marka">${markamodelqiymet[i].brand}
                ${markamodelqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelqiymet[i].date},
                    ${markamodelqiymet[i].engine} L,
                    ${markamodelqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < seherinput.length; i++) {
        if (markainput.value.length > 0 && inputseher.value.length > 0 && markarengseher == 0 && inputModel.value.length == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${seherinput[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${seherinput[i].price}
                ${seherinput[i].currency}</p>
                <p class = "marka">${seherinput[i].brand}
                ${seherinput[i].model}
                </p>
                <p class = "tarix">${seherinput[i].date},
                    ${seherinput[i].engine} L,
                    ${seherinput[i].milestone} km
                </p>
                <p class = "seher">${seherinput[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < qiymetinput.length; i++) {
        if (maxqiymet.value.length > 0 && markainput.value.length > 0 && minqiymet.value.length > 0 && inputModel.value.length == 0 && markarengqiymet == 0 && markaseherqiymet == 0 && markailqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${qiymetinput[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${qiymetinput[i].price}
                ${qiymetinput[i].currency}</p>
                <p class = "marka">${qiymetinput[i].brand}
                ${qiymetinput[i].model}sehe
                </p>
                <p class = "tarix">${qiymetinput[i].date},
                    ${qiymetinput[i].engine} L,
                    ${qiymetinput[i].milestone} km
                </p> 
                <p class = "seher">${qiymetinput[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < ilinput.length; i++) {
        if (maximum.value.length > 0 && markainput.value.length > 0 && minumum.value.length > 0 && inputModel.value.length == 0 && markarengil == 0 && markaseheril == 0 && markailqiymet == 0 && markaseherilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${ilinput[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${ilinput[i].price}
                ${ilinput[i].currency}</p>
                <p class = "marka">${ilinput[i].brand}
                ${ilinput[i].model}
                </p>
                <p class = "tarix">${ilinput[i].date},
                    ${ilinput[i].engine} L,
                    ${ilinput[i].milestone} km
                </p>
                <p class = "seher">${ilinput[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < ilseher.length; i++) {
        if (maximum.value.length > 0 && inputseher.value.length > 0 && minumum.value.length > 0 && markaseheril == 0 && seherilreng == 0 && seherilqiymet == 0 && markaseherilqiymet == 0 && markamodelseheril == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${ilseher[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${ilseher[i].price}
                ${ilseher[i].currency}</p>
                <p class = "marka">${ilseher[i].brand}
                ${ilseher[i].model}
                </p>
                <p class = "tarix">${ilseher[i].date},
                    ${ilseher[i].engine} L,
                    ${ilseher[i].milestone} km
                </p>
                <p class = "seher">${ilseher[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < rengseher.length; i++) {
        if (inputreng.value.length > 0 && inputseher.value.length > 0 && markarengseher == 0 && seherilreng == 0 && seherrengqiymet == 0 && markamodelseherreng == 0 && markamodelseherreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${rengseher[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${rengseher[i].price}
                ${rengseher[i].currency}</p>
                <p class = "marka">${rengseher[i].brand}
                ${rengseher[i].model}
                </p>
                <p class = "tarix">${rengseher[i].date},
                    ${rengseher[i].engine} L,
                    ${rengseher[i].milestone} km
                </p>
                <p class = "seher">${rengseher[i].city}
                </p>
            </div>
        </div>
                `
        }
    }

    for (let i = 0; i < qiymetseher.length; i++) {
        if (maxqiymet.value.length > 0 && inputseher.value.length > 0 && minqiymet.value.length > 0 && markaseherqiymet == 0 && seherrengqiymet == 0 && seherilqiymet == 0 && markaseherilqiymet == 0 && markamodelseherqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${qiymetseher[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${qiymetseher[i].price}
                ${qiymetseher[i].currency}</p>
                <p class = "marka">${qiymetseher[i].brand}
                ${qiymetseher[i].model}
                </p>
                <p class = "tarix">${qiymetseher[i].date},
                    ${qiymetseher[i].engine} L,
                    ${qiymetseher[i].milestone} km
                </p>
                <p class = "seher">${qiymetseher[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < ilreng.length; i++) {
        if (maximum.value.length > 0 && inputreng.value.length > 0 && minumum.value.length > 0 && ilrengqiymet == 0 && markamodelilreng == 0 && markaseherilreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${ilreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${ilreng[i].price}
                ${ilreng[i].currency}</p>
                <p class = "marka">${ilreng[i].brand}
                ${ilreng[i].model}
                </p>
                <p class = "tarix">${ilreng[i].date},
                    ${ilreng[i].engine} L,
                    ${ilreng[i].milestone} km
                </p>
                <p class = "seher">${ilreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < ilqiymet.length; i++) {
        if (maximum.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && minumum.value.length > 0 && markailqiymet == 0 && seherilqiymet == 0 && ilrengqiymet == 0 && markamodelilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${ilqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${ilqiymet[i].price}
                ${ilqiymet[i].currency}</p>
                <p class = "marka">${ilqiymet[i].brand}
                ${ilqiymet[i].model}
                </p>
                <p class = "tarix">${ilqiymet[i].date},
                    ${ilqiymet[i].engine} L,
                    ${ilqiymet[i].milestone} km
                </p>
                <p class = "seher">${ilqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < rengqiymet.length; i++) {
        if (maxqiymet.value.length > 0 && inputreng.value.length > 0 && minqiymet.value.length > 0 && markarengqiymet == 0 && seherrengqiymet == 0 && ilrengqiymet == 0 && markamodelrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${rengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${rengqiymet[i].price}
                ${rengqiymet[i].currency}</p>
                <p class = "marka">${rengqiymet[i].brand}
                ${rengqiymet[i].model}
                </p>
                <p class = "tarix">${rengqiymet[i].date},
                    ${rengqiymet[i].engine} L,
                    ${rengqiymet[i].milestone} km
                </p>
                <p class = "seher">${rengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markarengseher.length; i++) {
        if (inputseher.value.length > 0 && inputreng.value.length > 0 && markainput.value.length > 0 && rengseher == 0 && colorinput == 0 && seherinput == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markarengseher[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markarengseher[i].price}
                ${markarengseher[i].currency}</p>
                <p class = "marka">${markarengseher[i].brand}
                ${markarengseher[i].model}
                </p>
                <p class = "tarix">${markarengseher[i].date},
                    ${markarengseher[i].engine} L,
                    ${markarengseher[i].milestone} km
                </p>
                <p class = "seher">${markarengseher[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markarengil.length; i++) {
        if (minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && markainput.value.length > 0 && colorinput == 0 && ilreng == 0 && ilinput == 0 && markamodelilreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markarengil[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markarengil[i].price}
                ${markarengil[i].currency}</p>
                <p class = "marka">${markarengil[i].brand}
                ${markarengil[i].model}
                </p>
                <p class = "tarix">${markarengil[i].date},
                    ${markarengil[i].engine} L,
                    ${markarengil[i].milestone} km
                </p>
                <p class = "seher">${markarengil[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markarengqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && inputreng.value.length > 0 && markainput.value.length > 0 && colorinput == 0 && qiymetinput == 0 && rengqiymet == 0 && markamodelrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markarengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markarengqiymet[i].price}
                ${markarengqiymet[i].currency}</p>
                <p class = "marka">${markarengqiymet[i].brand}
                ${markarengqiymet[i].model}
                </p>
                <p class = "tarix">${markarengqiymet[i].date},
                    ${markarengqiymet[i].engine} L,
                    ${markarengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markarengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markaseheril.length; i++) {
        if (minumum.value.length > 0 && maximum.value.length > 0 && inputseher.value.length > 0 && markainput.value.length > 0 && inputseher == 0 && ilinput == 0 && ilseher == 0 && markaseherilqiymet == 0 && markamodelseheril == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markaseheril[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markaseheril[i].price}
                ${markaseheril[i].currency}</p>
                <p class = "marka">${markaseheril[i].brand}
                ${markaseheril[i].model}
                </p>
                <p class = "tarix">${markaseheril[i].date},
                    ${markaseheril[i].engine} L,
                    ${markaseheril[i].milestone} km
                </p>
                <p class = "seher">${markaseheril[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markaseherqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && inputseher.value.length > 0 && markainput.value.length > 0 && inputseher == 0 && qiymetinput == 0 && qiymetseher == 0 && markaseherilqiymet == 0 && markamodelseherqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markaseherqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markaseherqiymet[i].price}
                ${markaseherqiymet[i].currency}</p>
                <p class = "marka">${markaseherqiymet[i].brand}
                ${markaseherqiymet[i].model}
                </p>
                <p class = "tarix">${markaseherqiymet[i].date},
                    ${markaseherqiymet[i].engine} L,
                    ${markaseherqiymet[i].milestone} km
                </p>
                <p class = "seher">${markaseherqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markailqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && markainput.value.length > 0 && markaseherilqiymet == 0 && markamodelilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markailqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markailqiymet[i].price}
                ${markailqiymet[i].currency}</p>
                <p class = "marka">${markailqiymet[i].brand}
                ${markailqiymet[i].model}
                </p>
                <p class = "tarix">${markailqiymet[i].date},
                    ${markailqiymet[i].engine} L,
                    ${markailqiymet[i].milestone} km
                </p>
                <p class = "seher">${markailqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < seherilreng.length; i++) {
        if (inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && ilreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${seherilreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${seherilreng[i].price}
                ${seherilreng[i].currency}</p>
                <p class = "marka">${seherilreng[i].brand}
                ${seherilreng[i].model}
                </p>
                <p class = "tarix">${seherilreng[i].date},
                    ${seherilreng[i].engine} L,
                    ${seherilreng[i].milestone} km
                </p>
                <p class = "seher">${seherilreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < seherilqiymet.length; i++) {
        if (inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && markaseherilqiymet == 0 && seherilrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${seherilqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${seherilqiymet[i].price}
                ${seherilqiymet[i].currency}</p>
                <p class = "marka">${seherilqiymet[i].brand}
                ${seherilqiymet[i].model}
                </p>
                <p class = "tarix">${seherilqiymet[i].date},
                    ${seherilqiymet[i].engine} L,
                    ${seherilqiymet[i].milestone} km
                </p>
                <p class = "seher">${seherilqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < seherrengqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && inputseher.value.length > 0 && inputreng.value.length > 0 && markamodelseherrengqiymet == 0 && seherilrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${seherrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${seherrengqiymet[i].price}
                ${seherrengqiymet[i].currency}</p>
                <p class = "marka">${seherrengqiymet[i].brand}
                ${seherrengqiymet[i].model}
                </p>
                <p class = "tarix">${seherrengqiymet[i].date},
                    ${seherrengqiymet[i].engine} L,
                    ${seherrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${seherrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < ilrengqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && markailrengqiymet == 0 && seherilrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${ilrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${ilrengqiymet[i].price}
                ${ilrengqiymet[i].currency}</p>
                <p class = "marka">${ilrengqiymet[i].brand}
                ${ilrengqiymet[i].model}
                </p>
                <p class = "tarix">${ilrengqiymet[i].date},
                    ${ilrengqiymet[i].engine} L,
                    ${ilrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${ilrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    //4lu
    for (let i = 0; i < markaseherilreng.length; i++) {
        if (minumum.value.length > 0 && maximum.value.length > 0 && inputseher.value.length > 0 && markainput.value.length > 0 && inputreng.value.length > 0 && markaseherilrengqiymet == 0 && markamodelseherilreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markaseherilreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markaseherilreng[i].price}
                ${markaseherilreng[i].currency}</p>
                <p class = "marka">${markaseherilreng[i].brand}
                ${markaseherilreng[i].model}
                </p>
                <p class = "tarix">${markaseherilreng[i].date},
                    ${markaseherilreng[i].engine} L,
                    ${markaseherilreng[i].milestone} km
                </p>
                <p class = "seher">${markaseherilreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markaseherilqiymet.length; i++) {
        if (minumum.value.length > 0 && maximum.value.length > 0 && inputseher.value.length > 0 && markainput.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && qiymetseher == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markaseherilqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markaseherilqiymet[i].price}
                ${markaseherilqiymet[i].currency}</p>
                <p class = "marka">${markaseherilqiymet[i].brand}
                ${markaseherilqiymet[i].model}
                </p>
                <p class = "tarix">${markaseherilqiymet[i].date},
                    ${markaseherilqiymet[i].engine} L,
                    ${markaseherilqiymet[i].milestone} km
                </p>
                <p class = "seher">${markaseherilqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markailrengqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && markainput.value.length > 0 && colorinput == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markailrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markailrengqiymet[i].price}
                ${markailrengqiymet[i].currency}</p>
                <p class = "marka">${markailrengqiymet[i].brand}
                ${markailrengqiymet[i].model}
                </p>
                <p class = "tarix">${markailrengqiymet[i].date},
                    ${markailrengqiymet[i].engine} L,
                    ${markailrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markailrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < markaseherrengqiymet.length; i++) {
        if (minqiymet.value.length > 0 && maxqiymet.value.length > 0 && markainput.value.length > 0 && inputseher.value.length > 0 && inputreng.value.length > 0 && markamodelseherrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markaseherrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markaseherrengqiymet[i].price}
                ${markaseherrengqiymet[i].currency}</p>
                <p class = "marka">${markaseherrengqiymet[i].brand}
                ${markaseherrengqiymet[i].model}
                </p>
                <p class = "tarix">${markaseherrengqiymet[i].date},
                    ${markaseherrengqiymet[i].engine} L,
                    ${markaseherrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markaseherrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseheril) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && markamodelseherilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseheril[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseheril[i].price}
                ${markamodelseheril[i].currency}</p>
                <p class = "marka">${markamodelseheril[i].brand}
                ${markamodelseheril[i].model}
                </p>
                <p class = "tarix">${markamodelseheril[i].date},
                    ${markamodelseheril[i].engine} L,
                    ${markamodelseheril[i].milestone} km
                </p>
                <p class = "seher">${markamodelseheril[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelilreng) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && markamodelseherilreng == 0 && markamodelilrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelilreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelilreng[i].price}
                ${markamodelilreng[i].currency}</p>
                <p class = "marka">${markamodelilreng[i].brand}
                ${markamodelilreng[i].model}
                </p>
                <p class = "tarix">${markamodelilreng[i].date},
                    ${markamodelilreng[i].engine} L,
                    ${markamodelilreng[i].milestone} km
                </p>
                <p class = "seher">${markamodelilreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseherreng) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputreng.value.length > 0 && inputseher.value.length > 0 && markamodelseherilreng == 0 && markamodelseherrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseherreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseherreng[i].price}
                ${markamodelseherreng[i].currency}</p>
                <p class = "marka">${markamodelseherreng[i].brand}
                ${markamodelseherreng[i].model}
                </p>
                <p class = "tarix">${markamodelseherreng[i].date},
                    ${markamodelseherreng[i].engine} L,
                    ${markamodelseherreng[i].milestone} km
                </p>
                <p class = "seher">${markamodelseherreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseherqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && inputseher.value.length > 0 && markamodelseherrengqiymet == 0 && markamodelseherilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markamodelseherqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet">${markamodelseherqiymet[i].price}
                ${markamodelseherqiymet[i].currency}</p>
                <p class = "marka">${markamodelseherqiymet[i].brand}
                ${markamodelseherqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelseherqiymet[i].date},
                    ${markamodelseherqiymet[i].engine} L,
                    ${markamodelseherqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelseherqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelilqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && markamodelilrengqiymet == 0 && markamodelseherilqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markamodelilqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet">${markamodelilqiymet[i].price}
                ${markamodelilqiymet[i].currency}</p>
                <p class = "marka">${markamodelilqiymet[i].brand}
                ${markamodelilqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelilqiymet[i].date},
                    ${markamodelilqiymet[i].engine} L,
                    ${markamodelilqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelilqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelrengqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && inputreng.value.length > 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markamodelrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet">${markamodelrengqiymet[i].price}
                ${markamodelrengqiymet[i].currency}</p>
                <p class = "marka">${markamodelrengqiymet[i].brand}
                ${markamodelrengqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelrengqiymet[i].date},
                    ${markamodelrengqiymet[i].engine} L,
                    ${markamodelrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i = 0; i < seherilrengqiymet.length; i++) {
        if (inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${seherilrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${seherilrengqiymet[i].price}
                ${seherilrengqiymet[i].currency}</p>
                <p class = "marka">${seherilrengqiymet[i].brand}
                ${seherilrengqiymet[i].model}
                </p>
                <p class = "tarix">${seherilrengqiymet[i].date},
                    ${seherilrengqiymet[i].engine} L,
                    ${seherilrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${seherilrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    //5liler
    for (let i = 0; i < markaseherilrengqiymet.length; i++) {
        if (markainput.value.length > 0 && inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && seherilreng == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img  src=${markaseherilrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markaseherilrengqiymet[i].price}
                ${markaseherilrengqiymet[i].currency}</p>
                <p class = "marka">${markaseherilrengqiymet[i].brand}
                ${markaseherilrengqiymet[i].model}
                </p>
                <p class = "tarix">${markaseherilrengqiymet[i].date},
                    ${markaseherilrengqiymet[i].engine} L,
                    ${markaseherilrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markaseherilrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseherilreng) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && ilreng == 0 && markamodelseherilrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseherilreng[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseherilreng[i].price}
                ${markamodelseherilreng[i].currency}</p>
                <p class = "marka">${markamodelseherilreng[i].brand}
                ${markamodelseherilreng[i].model}
                </p>
                <p class = "tarix">${markamodelseherilreng[i].date},
                    ${markamodelseherilreng[i].engine} L,
                    ${markamodelseherilreng[i].milestone} km
                </p>
                <p class = "seher">${markamodelseherilreng[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseherrengqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputreng.value.length > 0 && inputseher.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && rengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseherrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseherrengqiymet[i].price}
                ${markamodelseherrengqiymet[i].currency}</p>
                <p class = "marka">${markamodelseherrengqiymet[i].brand}
                ${markamodelseherrengqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelseherrengqiymet[i].date},
                    ${markamodelseherrengqiymet[i].engine} L,
                    ${markamodelseherrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelseherrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelilrengqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && rengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelilrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelilrengqiymet[i].price}
                ${markamodelilrengqiymet[i].currency}</p>
                <p class = "marka">${markamodelilrengqiymet[i].brand}
                ${markamodelilrengqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelilrengqiymet[i].date},
                    ${markamodelilrengqiymet[i].engine} L,
                    ${markamodelilrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelilrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    for (let i in markamodelseherilqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && markamodelseherilrengqiymet == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseherilqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseherilqiymet[i].price}
                ${markamodelseherilqiymet[i].currency}</p>
                <p class = "marka">${markamodelseherilqiymet[i].brand}
                ${markamodelseherilqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelseherilqiymet[i].date},
                    ${markamodelseherilqiymet[i].engine} L,
                    ${markamodelseherilqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelseherilqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    //6lilar
    for (let i in markamodelseherilrengqiymet) {
        if (inputModel.value.length > 0 && markainput.value.length > 0 && inputseher.value.length > 0 && minumum.value.length > 0 && maximum.value.length > 0 && inputreng.value.length > 0 && minqiymet.value.length > 0 && maxqiymet.value.length > 0 && colorinput == 0) {
            masincardimg.innerHTML += `
            <div id = "umumi">
            <div id="sekil">
                <img src=${markamodelseherilrengqiymet[i].url}>
            </div>
            <div id="yazi">
                <p class="qiymet" >${markamodelseherilrengqiymet[i].price}
                ${markamodelseherilrengqiymet[i].currency}</p>
                <p class = "marka">${markamodelseherilrengqiymet[i].brand}
                ${markamodelseherilrengqiymet[i].model}
                </p>
                <p class = "tarix">${markamodelseherilrengqiymet[i].date},
                    ${markamodelseherilrengqiymet[i].engine} L,
                    ${markamodelseherilrengqiymet[i].milestone} km
                </p>
                <p class = "seher">${markamodelseherilrengqiymet[i].city}
                </p>
            </div>
        </div>
                `
        }
    }
    // for (let i in bartercar) {
    //     if (bartercar[i].barter == true && creditcar[i].credit == false) {
    //         console.log(bartercar)
    //         masincardimg.innerHTML += `
    //             <div id = "umumi">
    //             <div id="sekil">
    //                 <img  src=${bartercar[i].url}>
    //             </div>
    //             <div id="yazi">
    //                 <p class="qiymet" >${bartercar[i].price}
    //                 ${bartercar[i].currency}</p>
    //                 <p class = "marka">${bartercar[i].brand}
    //                 ${bartercar[i].model}
    //                 </p>
    //                 <p class = "tarix">${bartercar[i].date},
    //                     ${bartercar[i].engine} L,
    //                     ${bartercar[i].milestone} km
    //                 </p>
    //                 <p class = "seher">${bartercar[i].city}
    //                 </p>
    //             </div>
    //         </div>
    //                 `
    //     }
    // }
    // for (let i in creditcar) {
    //     if (creditcar[i].credit == true && bartercar[i].barter == false) {
    //         masincardimg.innerHTML += `
    //             <div id = "umumi">
    //             <div id="sekil">
    //                 <img  src=${creditcar[i].url}>
    //             </div>
    //             <div id="yazi">
    //                 <p class="qiymet" >${creditcar[i].price}
    //                 ${creditcar[i].currency}</p>
    //                 <p class = "marka">${creditcar[i].brand}
    //                 ${creditcar[i].model}   
    //                 </p>
    //                 <p class = "tarix">${creditcar[i].date},
    //                     ${creditcar[i].engine} L,
    //                     ${creditcar[i].milestone} km
    //                 </p>
    //                 <p class = "seher">${creditcar[i].city}
    //                 </p>
    //             </div>
    //         </div>
    //                 `
    //     }
    // }
    // for (let i in bartercreditcar) {
    //     if (bartercreditcar[i].credit == true && bartercreditcar[i].barter == true) {
    //         // console.log(bartercreditcar);
    //         masincardimg.innerHTML += `
    //             <div id = "umumi">
    //             <div id="sekil">
    //                 <img  src=${bartercreditcar[i].url}>
    //             </div>
    //             <div id="yazi">
    //                 <p class="qiymet" >${bartercreditcar[i].price}
    //                 ${bartercreditcar[i].currency}</p>
    //                 <p class = "marka">${bartercreditcar[i].brand}
    //                 ${bartercreditcar[i].model}
    //                 </p>
    //                 <p class = "tarix">${bartercreditcar[i].date},
    //                     ${bartercreditcar[i].engine} L,
    //                     ${bartercreditcar[i].milestone} km
    //                 </p>
    //                 <p class = "seher">${bartercreditcar[i].city}
    //                 </p>
    //             </div>
    //         </div>
    //                 `
    //     }
    // }
}
function sifirla() {
    for (let i in cars) {
        masincardimg.innerHTML += `
                <div id = "umumi">
                <div id="sekil">
                    <img src=${cars[i].url}>
                </div>
                <div id="yazi">
                    <p class="qiymet" >${cars[i].price}
                    ${cars[i].currency}</p>
                    <p class = "marka">${cars[i].brand}
                    ${cars[i].model}
                    </p>
                    <p class = "tarix">${cars[i].date},
                        ${cars[i].engine} L,
                        ${cars[i].milestone} km
                    </p>
                    <p class = "seher">${cars[i].city}
                    </p>
                </div>
            </div>
                    `
    }
    markainput.value = ""
    inputseher.value = ""
    inputreng.value = ""
    minumum.value = ""
    maximum.value = ""
    minqiymet.value = ""
    maxqiymet.value = ""
    inputModel.value = ""
    
}
