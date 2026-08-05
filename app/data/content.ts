export const altitudeLayers = [
  {
    code: "0 KM",
    name: "Kuzatuv maydoni",
    place: "Chotqol tizmasi, 2 840 m",
    text: "Observatoriya tunda shahar yog'usidan uzoqda joylashgan — eng yaqin sun'iy yorug'lik 46 km narida. Osmon sifati Bortle shkalasi bo'yicha 2-darajaga baholanadi.",
  },
  {
    code: "12 KM",
    name: "Stratosfera chegarasi",
    place: "Atmosfera oynasi",
    text: "Kuzatuv balandligi havoning turbulentligini kamaytiradi. Shu sababli teleskop tasvirlari 'seeing' deb ataladigan tebranishdan deyarli xoli bo'ladi.",
  },
  {
    code: "384 000 KM",
    name: "Oy",
    place: "Yer yo'ldoshi",
    text: "To'liq bo'lmagan Oy fazalarida krater soyalari eng yaxshi ko'rinadi. Terminator chizig'i bo'ylab tog' cho'qqilari relyefi aniq ажralib turadi.",
  },
  {
    code: "150 MLN KM",
    name: "Quyosh",
    place: "1 astronomik birlik",
    text: "Maxsus H-alfa filtrli teleglobda quyosh dog'lari, protuberanslar va xromosfera faolligi xavfsiz kuzatiladi.",
  },
  {
    code: "1 300 YY",
    name: "Orion tumanligi",
    place: "M42, chuqur osmon",
    text: "Yulduzlar tug'ilayotgan bulut — ko'zga zaif kulrang, uzoq ta'sirli suratga olishda esa qizil va binafsha gaz qatlamlari ochiladi.",
  },
  {
    code: "2.5 MLN YY",
    name: "Andromeda galaktikasi",
    place: "M31, ko'rinadigan eng uzoq ob'ekt",
    text: "Yalang'och ko'z bilan ilg'ash mumkin bo'lgan yagona boshqa galaktika. Uning yorug'ligi sizga 2.5 million yil oldin yo'lga chiqqan.",
  },
] as const;

export const sessionTypes = [
  {
    id: "solar",
    title: "Quyosh kuzatuvi",
    duration: "90 daqiqa",
    time: "Kunduzi",
    desc: "H-alfa va oq yorug'lik filtrlari orqali quyosh dog'lari, faklalar va protuberanslarni xavfsiz kuzatish.",
    detail: "Guruh: 2–6 kishi",
  },
  {
    id: "lunar",
    title: "Oy kuzatuvi",
    duration: "120 daqiqa",
    time: "Kechqurun",
    desc: "Kraterlar, tog' tizmalari va dengizlar — Oyning eng foydali fazalarida yuqori kattalashtirishda.",
    detail: "Guruh: 2–8 kishi",
  },
  {
    id: "deepsky",
    title: "Chuqur osmon",
    duration: "180 daqiqa",
    time: "Yarim tundan keyin",
    desc: "Tumanliklar, yulduz to'plamlari va uzoq galaktikalar — oysiz, tiniq tunlarda uzoq ekspozitsiyali kuzatuv.",
    detail: "Guruh: 2–4 kishi",
  },
  {
    id: "meteor",
    title: "Meteor yomg'iri",
    duration: "Butun tun",
    time: "Yiliga bir necha marta",
    desc: "Perseid va Geminid faolligi cho'qqisida ochiq maydonda yotgan holda kuzatish, issiq choy va uyqu qopi bilan.",
    detail: "Guruh: 4–12 kishi",
  },
] as const;

export const equipment = [
  {
    name: "Ridvan-400",
    kind: "Ritchey–Chrétien reflektor",
    aperture: "400 mm",
    focal: "f/8, 3200 mm",
    note: "Asosiy chuqur osmon teleskopi, kompyuter boshqaruvli montirovka bilan.",
  },
  {
    name: "Solara-130",
    kind: "H-alfa teleguide",
    aperture: "130 mm",
    focal: "f/7, 910 mm",
    note: "Quyosh xromosferasi va protuberanslarni kuzatish uchun maxsus filtrlangan.",
  },
  {
    name: "Lunetta-8",
    kind: "Apokromatik refraktor",
    aperture: "203 mm",
    focal: "f/9, 1827 mm",
    note: "Oy va sayyoralar uchun yuqori kontrastli, keskin optika.",
  },
] as const;

export const logEntries = [
  {
    date: "14.07.2026",
    observer: "D. Yusupova",
    object: "Saturn halqalari",
    note: "Kassini bo'shlig'i aniq ko'rindi. Yetti oyning to'rttasi kuzatildi.",
  },
  {
    date: "02.07.2026",
    observer: "B. Nazarov",
    object: "M13 to'plami",
    note: "300 000 dan ortiq yulduzli sharsimon to'plam — okulyarda 'qumdek sochilgan' ko'rinish berdi.",
  },
  {
    date: "21.06.2026",
    observer: "N. Karimov",
    object: "Yoz solstitsiyasi",
    note: "Eng qisqa tun — chuqur osmon uchun oyna vaqti atigi 3 soat 40 daqiqa bo'ldi.",
  },
] as const;

export const upcomingEvents = [
  { date: "12 AVGUST", title: "Perseid meteor yomg'iri cho'qqisi", tag: "Meteor" },
  { date: "07 SENTABR", title: "To'liq Oy tutilishi", tag: "Oy" },
  { date: "22 SENTABR", title: "Kuz tengkunligi kuzatuvi", tag: "Chuqur osmon" },
  { date: "08 OKTABR", title: "Yupiterning qarama-qarshiligi", tag: "Sayyora" },
] as const;
