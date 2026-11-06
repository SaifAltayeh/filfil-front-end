export type JobListing = {
  id: string;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  type: "Full-time" | "Part-time" | "Seasonal";
  location: string;
  locationAr: string;
  summary: string;
  summaryAr: string;
  description: string;
  descriptionAr: string;
  responsibilities: string[];
  responsibilitiesAr: string[];
  requirements: string[];
  requirementsAr: string[];
};

export const jobTypeLabels = {
  "Full-time": { en: "Full-time", ar: "دوام كامل" },
  "Part-time": { en: "Part-time", ar: "دوام جزئي" },
  Seasonal: { en: "Seasonal", ar: "موسمي" },
} as const;

export const jobs: JobListing[] = [
  {
    id: "front-of-house",
    title: "Front of House",
    titleAr: "خدمة الضيوف",
    department: "Guest Experience",
    departmentAr: "تجربة الضيف",
    type: "Full-time",
    location: "Sweifieh Village, Amman",
    locationAr: "الصويفية فيليج، عمّان",
    summary: "Be the first smile guests meet — service as considered as the food.",
    summaryAr: "كن الابتسامة الأولى التي يستقبل بها ضيوفنا — ضيافة بعناية الطعام نفسها.",
    description:
      "You’ll welcome guests, keep the floor moving, and make filfil feel like a place people want to stay.",
    descriptionAr:
      "تستقبل الضيوف، وتحافظ على انسياب الصالة، وتجعل فلفل مكاناً يحب الناس البقاء فيه.",
    responsibilities: [
      "Greet guests, walk them through the menu, and take orders with care",
      "Keep the dining room, counter, and takeaway station guest-ready",
      "Run food, pack orders, and handle payments without slowing the line",
      "Flag guest notes to the kitchen and close loops before they become problems",
      "Leave every table and every shift looking like filfil",
    ],
    responsibilitiesAr: [
      "استقبال الضيوف، ومرافقتهم في قائمة الطعام، وتلقّي الطلبات بعناية",
      "الحفاظ على جاهزية الصالة والكاونتر ومحطة الطلبات الخارجية",
      "تقديم الطعام، وتجهيز الطلبات، وإتمام المدفوعات دون إبطاء الخط",
      "نقل ملاحظات الضيوف إلى المطبخ ومعالجتها قبل أن تتحول إلى مشكلة",
      "ترك كل طاولة وكل وردية بمستوى فلفل",
    ],
    requirements: [
      "Warm, confident communicator in Arabic and English",
      "Comfortable on a busy floor during lunch and evening service",
      "Available for rotating shifts, including weekends",
      "Hospitality experience is a plus — the right energy is required",
    ],
    requirementsAr: [
      "تواصل دافئ وواثق بالعربية والإنجليزية",
      "راحة في العمل ضمن صالة مزدحمة في الغداء وخدمة المساء",
      "توافر للعمل بنظام الورديات المتناوبة، بما في ذلك عطل نهاية الأسبوع",
      "خبرة الضيافة ميزة إضافية — والطاقة المناسبة شرط أساسي",
    ],
  },
  {
    id: "kitchen-crew",
    title: "Kitchen Crew",
    titleAr: "طاقم المطبخ",
    department: "Kitchen",
    departmentAr: "المطبخ",
    type: "Full-time",
    location: "Sweifieh Village, Amman",
    locationAr: "الصويفية فيليج، عمّان",
    summary: "Prep, grill, and plate the food that made filfil filfil.",
    summaryAr: "حضّر، اشوِ، وقدّم الطعام الذي يصنع شخصية فلفل.",
    description:
      "You’ll work the line on shawarma, snack boxes, and sides — true ingredients, consistent flavour, no shortcuts.",
    descriptionAr:
      "تعمل على خط الشاورما وبوكسات السناك والإضافات — مكوّنات أصيلة، مذاق ثابت، بلا اختصارات.",
    responsibilities: [
      "Prep ingredients to filfil specs and keep the line stocked",
      "Grill, assemble, and plate sandwiches, meals, snack boxes, and sides",
      "Hold ticket times without dropping quality or presentation",
      "Keep the station clean, labelled, and ready for the next rush",
      "Follow hygiene, food-safety, and closing checklists every shift",
    ],
    responsibilitiesAr: [
      "تحضير المكوّنات وفق معايير فلفل والحفاظ على جاهزية الخط",
      "شوي وتجميع وتقديم الساندويشات والوجبات وبوكسات السناك والإضافات",
      "الالتزام بأوقات الطلبات من دون التفريط بالجودة أو التقديم",
      "الحفاظ على نظافة المحطة وترتيبها وجاهزيتها للذروة التالية",
      "اتباع قوائم النظافة وسلامة الغذاء والإغلاق في كل وردية",
    ],
    requirements: [
      "Kitchen experience preferred — hunger to learn is required",
      "Calm under pressure and sharp on hygiene",
      "Comfortable standing, lifting, and working a hot line",
      "Available for rotating shifts, including weekends",
    ],
    requirementsAr: [
      "خبرة المطبخ مفضّلة — والرغبة في التعلّم مطلوبة",
      "هدوء تحت الضغط ودقة في النظافة",
      "قدرة على الوقوف والرفع والعمل على خط ساخن",
      "توافر للعمل بنظام الورديات المتناوبة، بما في ذلك عطل نهاية الأسبوع",
    ],
  },
  {
    id: "shift-supervisor",
    title: "Shift Supervisor",
    titleAr: "مشرف الوردية",
    department: "Operations",
    departmentAr: "العمليات",
    type: "Full-time",
    location: "Sweifieh Village, Amman",
    locationAr: "الصويفية فيليج، عمّان",
    summary: "Run the shift, back the crew, keep the standard high.",
    summaryAr: "أدِر الوردية، ادعم الفريق، وحافظ على المستوى عالياً.",
    description:
      "You’ll lead service, support both kitchen and floor, and keep filfil feeling tight when it gets busy.",
    descriptionAr:
      "تقود الخدمة، وتدعم المطبخ والصالة، وتحافظ على إيقاع فلفل حتى في أوقات الذروة.",
    responsibilities: [
      "Open, run, and close the shift across kitchen and front of house",
      "Coach the crew in the moment and jump in wherever the line needs you",
      "Protect food quality, speed, and the guest experience",
      "Handle guest issues, cash-up, and shift notes with a clear head",
      "Set the tone — calm, sharp, and on-brand",
    ],
    responsibilitiesAr: [
      "فتح الوردية وإدارتها وإغلاقها في المطبخ وخدمة الضيوف",
      "توجيه الفريق في اللحظة والمساندة أينما احتاج الخط",
      "الحفاظ على جودة الطعام والسرعة وتجربة الضيف",
      "معالجة ملاحظات الضيوف والجرد وملاحظات الوردية بهدوء ووضوح",
      "ضبط الإيقاع: هدوء، دقة، وعلى هوية فلفل",
    ],
    requirements: [
      "Previous supervisory or senior hospitality experience",
      "Clear communicator who can coach without killing the vibe",
      "Strong sense of quality, timing, and guest care",
      "Available for rotating shifts, including weekends",
    ],
    requirementsAr: [
      "خبرة سابقة في الإشراف أو في الضيافة بمستوى متقدم",
      "تواصل واضح وقدرة على التوجيه من دون إفساد الأجواء",
      "حس قوي بالجودة والتوقيت والعناية بالضيف",
      "توافر للعمل بنظام الورديات المتناوبة، بما في ذلك عطل نهاية الأسبوع",
    ],
  },
];

export const generalPositionLabel = "General Application";
export const generalPositionLabelAr = "تقديم عام";
