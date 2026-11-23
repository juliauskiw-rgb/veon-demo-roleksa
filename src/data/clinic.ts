// All facts come from veon/client.json (ids in comments). Nothing here is invented.
export const FUTURE = "Розділ у розробці";

// company.contacts
export const contacts = {
  phoneDisplay: "067 774 01 77",
  phoneFull: "+38 (067) 774 01 77",
  tel: "tel:+380677740177",
  viber: "viber://chat?number=%2B380677740177",
  telegram: "https://t.me/Roleksa",
  email: "roleksa.dental@gmail.com",
  mailto: "mailto:roleksa.dental@gmail.com",
  city: "м. Львів",
  street: "вул. Під Голоском, 24В",
  hoursDays: "Пн–Сб",
  hoursTime: "9:00–20:00",
  map: "https://www.google.com/maps/place/ROLEKSA/@49.8708373,24.0057625,17z",
} as const;

// C-001 + audit screenshot of /poslugy/pervinnij-oglyad/ (ux/demo-home.md, С3)
export const firstVisit = {
  price: "2 370",
  steps: [
    "Оцінка стану зубів",
    "Фотопротокол",
    "PSR-тест ясен",
    "Сканування цифровим сканером і 3D-модель",
  ],
  last: "План лікування",
} as const;

// company.business_lines + company.products_services
export interface Direction { name: string; note?: string; services: string[]; accent?: boolean; }
export const directions: Direction[] = [
  { name: "Імплантація", services: ["Імплантація", "Імплантація 1–2 зубів", "Складна імплантація", "All-on-4 та All-on-6"] },
  { name: "Лікування під наглядом анестезіолога", accent: true, note: "У команді лікар-анестезіолог і медсестра-анестезист.", services: [] },
  { name: "Лікування", services: ["Первинний огляд", "Гігієна", "Відбілювання", "Лікування ясен", "Лікування зубів", "Лікування дітей", "Лікування каналів", "Художня реставрація"] },
  { name: "Хірургія", services: ["Видалення зубів мудрості"] },
  { name: "Вирівнювання", services: ["Брекети", "Елайнери", "Апарати (пластинки)"] },
  { name: "Протезування", services: ["Коронки", "Вініри", "Протезування на імплантах"] },
];

// C-003, C-004
export const implants = {
  turnkey: "36 860",
  systems: [
    { name: "NUVO", price: "14 290" },
    { name: "Neodent Acqua", price: "25 460" },
    { name: "Straumann Roxolid SLActive", price: "44 340" },
  ],
  tech: "Цифрове планування і власне виготовлення хірургічних шаблонів, п’єзохірургія, кісткова пластика, КТ, інтраоральний сканер 3Shape, мікроскоп.",
} as const;

// C-010
export const rating = { value: "5.0", reviews: 104, last: "06.09.2026", checked: "23 листопада 2026" } as const;

// C-001 (/storinka-cin/), 12 positions in the published order
export const prices: { name: string; price: string }[] = [
  { name: "Консультація", price: "2 370 грн" },
  { name: "Професійна гігієна", price: "3 210–4 400 грн" },
  { name: "Лікування карієсу", price: "від 4 025 грн" },
  { name: "Ендодонтія", price: "від 6 650 грн" },
  { name: "Лікування ясен", price: "від 2 820 грн" },
  { name: "Відбілювання", price: "від 10 140 грн" },
  { name: "Брекет-система (1 щелепа)", price: "від 30 990 грн" },
  { name: "Дитяча стоматологія", price: "від 1 240 грн" },
  { name: "Видалення зуба", price: "від 2 950 грн" },
  { name: "Керамічний вінір", price: "24 855 грн" },
  { name: "Цирконієва коронка", price: "14 845 грн" },
  { name: "Імплант", price: "від 14 290 грн" },
];

// C-009
export const legal = ["ФОП Томищ Олекса Іванович", "ФОП Томищ Роксана Мирославівна"];
