export const CLINIC = {
  name: "Spandana Fertility Clinic",
  doctor: "Dr. Spandana Nuthakki",
  qualification: "MBBS, MS, Fertility Specialist",
  tagline: "Consult the Best IVF Doctor in Gachibowli",
  address: "Road No. 2, Gachibowli, Hyderabad, Telangana 500032",
  phone: "+91 7036146129",
  phoneRaw: "+917036146129",
  whatsapp: "+91 7036146129",
  whatsappRaw: "917036146129",
  email: "info@spandanafertility.com",
  mapsEmbedQuery: "Gachibowli, Hyderabad, Telangana",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  {
    label: "Specialities",
    href: "/treatments",
    children: [
      { label: "IVF", href: "/ivf" },
      { label: "ICSI", href: "/icsi" },
      { label: "IUI", href: "/iui" },
    ],
  },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export const SPECIALTIES = [
  "IVF",
  "ICSI",
  "IUI",
  "Laparoscopy",
  "3D USG",
  "Sonoendocrinology",
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Happy Families", display: "5000+" },
  { value: 10, suffix: "+", label: "Years Experience", display: "10+" },
  { value: 95, suffix: "%", label: "Patient Satisfaction", display: "95%" },
];

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  href: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "ivf",
    title: "IVF",
    short: "In Vitro Fertilization",
    description:
      "Advanced lab-based fertilization for a wide range of fertility challenges, with precision monitoring at every stage.",
    icon: "FlaskConical",
    href: "/ivf",
  },
  {
    slug: "icsi",
    title: "ICSI",
    short: "Intracytoplasmic Sperm Injection",
    description:
      "A single sperm is injected directly into the egg — the recommended path for male-factor infertility.",
    icon: "Microscope",
    href: "/icsi",
  },
  {
    slug: "iui",
    title: "IUI",
    short: "Intrauterine Insemination",
    description:
      "A gentler, lower-intervention first step that places prepared sperm directly into the uterus.",
    icon: "Syringe",
    href: "/iui",
  },
  {
    slug: "laparoscopy",
    title: "Laparoscopy",
    short: "Minimally Invasive Surgery",
    description:
      "Keyhole diagnostic and corrective surgery for endometriosis, fibroids, and tubal blockages.",
    icon: "Activity",
    href: "/treatments",
  },
  {
    slug: "3d-usg",
    title: "3D USG",
    short: "3D Ultrasonography",
    description:
      "High-resolution volumetric imaging for precise uterine and follicular assessment.",
    icon: "Scan",
    href: "/treatments",
  },
  {
    slug: "fertility-evaluation",
    title: "Fertility Evaluation",
    short: "Sonoendocrinology & Diagnostics",
    description:
      "A complete hormonal and structural workup to map the exact cause behind delayed conception.",
    icon: "ClipboardCheck",
    href: "/treatments",
  },
];

export type VideoItem = {
  id: string;
  title: string;
  description: string;
};

export const VIDEOS: VideoItem[] = [
  {
    id: "L4aMcGkffMk",
    title: "Understanding Your Fertility Journey",
    description: "Dr. Spandana explains what to expect at every stage of treatment.",
  },
  {
    id: "RFnCjeKlqjk",
    title: "IVF Success — What Really Matters",
    description: "The key factors that influence a successful IVF cycle.",
  },
  {
    id: "x5rqe-4l2n8",
    title: "Patient Questions, Answered",
    description: "Real answers to the questions patients ask most often.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya & Karthik",
    text: "After two failed cycles elsewhere, Dr. Spandana's precision and honesty gave us our daughter. We never felt like a statistic here.",
    outcome: "IVF — Successful Pregnancy",
  },
  {
    name: "Anitha R.",
    text: "The 3D USG monitoring meant every appointment felt data-backed, not guesswork. That clarity is what finally got us answers.",
    outcome: "ICSI — Successful Pregnancy",
  },
  {
    name: "Meera & Suresh",
    text: "IUI was the right first step for us, and the team never pushed us toward more than we needed. We conceived in our second cycle.",
    outcome: "IUI — Successful Pregnancy",
  },
];

export const FAQ_GENERAL = [
  {
    q: "How do I know which treatment is right for me?",
    a: "Every plan starts with a full fertility evaluation — hormonal panel, 3D USG, and a review of your history — before any treatment is recommended.",
  },
  {
    q: "Is the first consultation just for assessment?",
    a: "Yes. The first visit is focused on understanding your history and ordering the right diagnostics. No procedure is scheduled at this stage.",
  },
  {
    q: "Do you treat male-factor infertility?",
    a: "Yes, through semen analysis and ICSI when indicated. Both partners are evaluated together for a complete picture.",
  },
  {
    q: "How soon can I get an appointment?",
    a: "Most patients are seen within 2–3 working days. Urgent cases are prioritised — call or WhatsApp the clinic directly.",
  },
];
