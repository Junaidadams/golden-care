import type { ImageMetadata } from "astro";
import wellness from "./src/assets/wellness-companion.jpeg";
// import additional from "./src/assets/additional.png";
// import medical from "./src/assets/medical.png";
import medical from "./src/assets/medical-companion.jpeg";
import technology from "./src/assets/technology-companion.jpeg";
import outing from "./src/assets/outing-companion.jpeg";

export type IconName =
  | "FiHeart"
  | "FiUsers"
  | "FiClock"
  | "FiHome"
  | "FiCheckCircle"
  | "FiPlus"
  | "FaMapMarkedAlt"
  | "FaHeartbeat"
  | "FaCalendarAlt"
  | "FaHandHoldingHeart"
  | "FaUserNurse"
  | "FaPhoneAlt"
  | "FaEnvelope"
  | "FaMapMarkerAlt"
  | "FaFacebook"
  | "FaTwitter"
  | "FaInstagram";

export interface Cta {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Feature {
  icon: IconName;
  heading: string;
  description: string;
}

export interface Package {
  icon: IconName;
  heading: string;
  price?: string;
  note?: string;
  points: string[];
  cta: Cta;
  img: ImageMetadata;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const siteName = "Within Reach";

export const navLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Locations", href: "/#locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  heading: "Companionship and support for everyday life",
  text: "I offer friendly, personalised companionship for older adults in the Helderberg area — from sharing a cup of tea and a chat to help with shopping, errands, admin and attending appointments.",
  ctas: [
    { label: "Get Started", href: "#services", primary: true },
    { label: "Learn More", href: "#philosophy" },
  ] as Cta[],
};

export const features: Feature[] = [
  {
    icon: "FiHeart",
    heading: "Personal Companionship",
    description:
      "One-on-one time built around you and whatever you most enjoy.",
  },
  {
    icon: "FiUsers",
    heading: "Local & Trusted",
    description:
      "A single trusted companion based in the Helderberg area — not a rotation of strangers.",
  },
  {
    icon: "FiClock",
    heading: "Flexible Scheduling",
    description:
      "Visits arranged around your routine within my weekday operating hours.",
  },
  {
    icon: "FiHome",
    heading: "In Your Own Home",
    description: "Support in the comfort and privacy of your own home.",
  },
];

export const packages: Package[] = [
  {
    icon: "FaHeartbeat",
    heading: "Wellness Visit",
    price: "R280 per visit",
    img: wellness,
    points: [
      "1 hour visit",
      "Check wellbeing",
      "Tea and chat or walk and chat",
      "Card game, or an activity of your choice",
      "Light household tasks",
      "Needs assessment for future services and upcoming appointments",
      "Fridge and pantry check if required",
      "Medication reminder & check",
      "Family feedback if required",
    ],
    cta: { label: "Book a visit", href: "/contact", primary: true },
  },
  {
    icon: "FaHandHoldingHeart",
    heading: "Shopping & Outings",
    price: "R260 per hour",
    note: "Partial hours after the first hour are billed in 30-minute blocks at pro-rata half rate.",
    img: outing,
    points: [
      "Accompanied full door-to-door assistance",
      "Shopping trips",
      "Outings — coffee shop, a drive, the library and more",
      "Within a 15km radius (AA rate of R4.95 per km beyond)",
    ],
    cta: { label: "Enquire now", href: "/contact", primary: true },
  },
  // TODO: replace placeholder image below with a dedicated Admin & Technology image.
  {
    icon: "FaCalendarAlt",
    heading: "Admin & Technology",
    price: "R260 per hour",
    note: "Partial hours after the first hour are billed in 30-minute blocks at pro-rata half rate.",
    img: technology,
    points: [
      "Administration: medical aid & gap cover claims, liaison with creditors and debtors, assist with account payments, streamline and file paperwork",
      "Technology: setting up new phones, laptops and email accounts, recovering forgotten passwords, streaming, voice-to-text and e-sign assistance",
    ],
    cta: { label: "Enquire now", href: "/contact", primary: true },
  },
  // TODO: revisit later — the procedures list also covers Cure Day Hospital
  // Paardevlei and Summerhill Surgical Centre Dennegeur. Facilities currently
  // shown for the Medical Companion service are the 3 core hospitals only.
  {
    icon: "FaUserNurse",
    heading: "Medical Companion",
    price: "R260 per hour",
    note: "Partial hours after the first hour are billed in 30-minute blocks at pro-rata half rate.",
    img: medical,
    points: [
      "Full door-to-door assistance, including help inside and being present at the appointment if needed",
      "Hospital visits to an admitted patient",
      "Support for procedures, scans & x-rays — check in/out, navigate administration, settle in ward, pack personal items, collect script and transport home",
      "Facilities covered: Mediclinic Vergelegen, Busamed Hospital, Helderberg Hospital",
    ],
    cta: { label: "Enquire now", href: "/contact", primary: true },
  },
];

// Summarised subscription plans shown on the homepage only for now.
// TODO: build a dedicated subscriptions page (and full detail per plan) later.
export interface Subscription {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  cta: Cta;
}

export const subscriptions: Subscription[] = [
  {
    name: "Essential",
    price: "R1010",
    cadence: "per month",
    summary: "4 wellness visits per month (1 hour each).",
    cta: { label: "Contact me", href: "/contact", primary: true },
  },
  {
    name: "Support",
    price: "R1525",
    cadence: "per month",
    summary:
      "4 wellness visits + 2 shopping trips per month (1 hour each, within a 15km radius).",
    cta: { label: "Contact me", href: "/contact", primary: true },
  },
  {
    name: "Comprehensive",
    price: "R2000",
    cadence: "per month",
    summary:
      "4 wellness visits + your choice of any 4 hourly services (shopping, outing, administration, technology, medical companion, or hospital visit/support).",
    cta: { label: "Contact me", href: "/contact", primary: true },
  },
];

export const locations = {
  heading: "Areas Serviced",
  text: "I serve the Somerset West, Strand and Gordon's Bay areas, bringing companionship to people wherever they call home.",
  areas: ["Somerset West", "Strand", "Gordon's Bay"],
};

export type FaqAudience = "client" | "family" | "both";

export interface Faq {
  question: string;
  answer: string;
  audience: FaqAudience;
}

export const faqs: Faq[] = [
  {
    question: "What is included in a Wellness Visit?",
    answer:
      "A one-hour visit at R280 includes a wellbeing check, a tea and chat, walk and chat or an activity of your choice, light household tasks, a needs assessment for future services, a fridge and pantry check if required, a medication reminder and check, and family feedback if requested.",
    audience: "both",
  },
  {
    question: "How are additional and medical services billed?",
    answer:
      "All additional and medical services are charged at R260 per hour. Partial hours after the first hour are billed in 30-minute blocks at a pro-rata half rate.",
    audience: "both",
  },
  {
    question: "Which services are covered by the hourly rate?",
    answer:
      "The hourly rate covers accompanied shopping, outings, administration, technology assistance, the medical companion service, hospital visits and support for medical procedures, scans and x-rays.",
    audience: "both",
  },
  {
    question: "Is there a travel charge for shopping and outings?",
    answer:
      "Shopping and outing services are R260 per hour within a 15km radius. Outside the radius, an AA rate of R4.95 per km is added.",
    audience: "both",
  },
  {
    question: "Do you provide medical and hospital support?",
    answer:
      "Yes. I offer a medical companion service with full door-to-door assistance, including being present at appointments. I also support hospital visits to admitted patients and procedures, scans and x-rays.",
    audience: "both",
  },
  {
    question: "Which hospitals and facilities are covered?",
    answer:
      "I cover Mediclinic Vergelegen, Busamed Hospital, Helderberg Hospital, Cure Day Hospital Paardevlei and Summerhill Surgical Centre Dennegeur. Please feel free to enquire about any other facility.",
    audience: "both",
  },
  {
    question: "What do the monthly subscription plans include?",
    answer:
      "Essential (R1010/month) includes 4 wellness visits per month. Support (R1525/month) adds 2 shopping trips per month within a 15km radius. Comprehensive (R2000/month) includes 4 wellness visits plus your choice of any 4 hourly services.",
    audience: "both",
  },
  {
    question: "Can I choose my own combination of services?",
    answer:
      "Yes. On the Comprehensive plan you choose any 4 services from shopping, outing, administration, technology, medical companion and hospital visit or support, all 1 hour each. Services that require travel are limited to a 15km radius, with the AA rate charged beyond.",
    audience: "both",
  },
  {
    question: "How do I arrange a visit for a parent or relative?",
    answer:
      "Getting started is easy. Send me a message through the contact page or give me a call. We'll have a short chat about your family member's routine, interests and needs, then book a first visit at a time that suits them.",
    audience: "family",
  },
  {
    question: "Will you report back to me after visits?",
    answer:
      "Yes, if you'd like. I'll send a brief update after each visit — how things went, what we did, and anything you should know. I'll only share what your family member is comfortable with.",
    audience: "family",
  },
  {
    question: "Can a family member pay for the services?",
    answer:
      "Absolutely. Monthly packages and visits can be paid for by a family member on the client's behalf — we'll just arrange the billing details when we set things up.",
    audience: "family",
  },
  {
    question: "Can I be present during a visit?",
    answer:
      "Of course. Whether you'd like to sit in on a first visit or join occasionally, you're welcome. I know families often appreciate that peace of mind.",
    audience: "family",
  },
  {
    question: "How do you keep my family member's information private?",
    answer:
      "Their privacy is very important to me. Anything shared with me stays between us, and I only discuss their situation with family members they've agreed I can speak to.",
    audience: "family",
  },
  {
    question: "What if my family member is having a difficult day?",
    answer:
      "No problem at all. If they're not up for company or an outing, we'll spend the time together quietly or reschedule. There's never any pressure — the visit is always on their terms.",
    audience: "family",
  },
  {
    question:
      "Can you accompany them to medical appointments when I can't be there?",
    answer:
      "Yes — that's exactly what the medical companion service is for. I provide door-to-door support: meeting them at home, getting to the appointment, being present during it, taking notes, and helping them home safely.",
    audience: "family",
  },
  {
    question: "What happens on my first visit?",
    answer:
      "We'll start with a friendly chat over a cup of tea so we can get to know each other. I'll listen to what you enjoy, how you like to spend your time, and where a helping hand would make things easier. From there we can agree on a rhythm that suits you.",
    audience: "client",
  },
  {
    question: "Do I need to prepare anything before a visit?",
    answer:
      "No, nothing at all — just be yourself. If you'd like me to help with a task, like organising paperwork or setting up a new phone, let me know ahead of time and I'll bring what's needed.",
    audience: "client",
  },
  {
    question: "Will I see the same person every time?",
    answer:
      "Yes. I work on my own, so you'll always see the same familiar face. There's no rotation of different people, which I think makes visits feel far more personal.",
    audience: "client",
  },
  {
    question: "What if I need help with something not on your services list?",
    answer:
      "Just ask. If it's within my abilities I'm happy to help, and if it isn't I'll point you to someone who can. There's no harm in asking.",
    audience: "client",
  },
  {
    question: "Can I change my regular visit schedule?",
    answer:
      "Of course. Just give me 24 hours notice to cancel or change a visit and we'll find a new time that works for you.",
    audience: "client",
  },
];

export const philosophy = {
  heading: "My Philosophy",
  text: "Growing older should not mean becoming less independent. Sometimes, what makes the greatest difference is simply having the right person within reach — someone dependable who can lend a helping hand, offer reassurance, accompany you when needed, or take care of the practical things that have become more difficult.",
  values: ["Dignity", "Compassion", "Independence", "Trust"],
};

// Full "My Philosophy" prose, kept here for future use (e.g. an About page).
// The condensed version above (philosophy.text) is what appears on the homepage.
// Note: render the words 'being there' in the tagline in italics if/when displayed.
export const philosophyFullText = {
  tagline: "Within Reach is about being there — not taking over.",
  paragraphs: [
    "Growing older should not mean becoming less independent.",
    "I believe that sometimes, what makes the greatest difference is simply having the right person within reach — someone dependable who can lend a helping hand, offer reassurance, accompany you when needed, or take care of the practical things that have become more difficult.",
    "I created Within Reach because I wanted to bring together my professional experience, organisational skills and genuine ability to connect with others, and use them in a way that makes everyday life a little easier for people.",
    "My background in business and corporate environments, together with years of working closely with people, has taught me the value of being trustworthy, discreet, organised, patient and dependable. I believe in treating every person with respect, protecting their independence and, above all, taking the time to listen.",
    "After spending a brief time in the UK, I made the decision to bring my experience home and create something meaningful here in South Africa.",
    "Whether it is a wellness visit, a medical appointment, help with technology or assistance with everyday administration, my aim is to provide practical support with warmth, professionalism and respect.",
    "Because sometimes, having someone you can trust within reach makes all the difference.",
  ],
};

// Content for the About page. The story prose reuses the full philosophy text above.
export const about = {
  name: "Caryl Henrico",
  ...philosophyFullText,
};

export const operatingHours: { day: string; hours: string }[] = [
  { day: "Monday", hours: "08:30 AM - 17:30 PM" },
  { day: "Tuesday", hours: "08:30 AM - 17:30 PM" },
  { day: "Wednesday", hours: "08:30 AM - 17:30 PM" },
  { day: "Thursday", hours: "08:30 AM - 17:30 PM" },
  { day: "Friday", hours: "08:30 AM - 17:30 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export interface TermsSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export const termsOfService = {
  intro:
    "Welcome to Within Reach. By using my wellness visits, medical-companion appointments, shopping and outing services, you agree to these rules. Please read them carefully.",
  sections: [
    {
      title: "My Services",
      bullets: [
        "I provide companionship, assistance and transportation services.",
        "I do not provide nursing or medical services.",
        "I do not administer medication or provide medical advice.",
      ],
    },
    {
      title: "Client Health and Safety",
      paragraphs: [
        "Your safety is my top priority.",
        "Clients must be stable enough to be safely transported and accompanied by me.",
        "If a client's physical or mental health needs exceed my non-medical capabilities, I reserve the right to pause or end services immediately.",
      ],
    },
    {
      title: "My Cancellation Promise",
      paragraphs: [
        "Because I reserve dedicated hours just for you, I kindly ask that you give 24 hours notice if you need to cancel or change a visit.",
        "Late cancellations: If you cancel late, a small fee of R100 may apply to cover my time.",
        "If you are not home: If I arrive and you are not home, I will wait 20 minutes and try calling you. If I cannot reach you, the full price of the visit will apply.",
        "Health comes first: Health issues can happen suddenly. If you have a medical emergency or sudden illness, please let me know as soon as possible and no fee will be charged.",
        "Pre-paid packages: For clients using monthly packages, late cancellations or no-shows result in a deduction of 1 hour from the remaining package balance.",
      ],
    },
    {
      title: "Payments and Expenses",
      paragraphs: [
        "Monthly packages are payable up front by the 1st of the month.",
        "Standard or ad-hoc visits are payable by the 30th of every month for all services rendered between the 1st and the 25th of that month.",
        "Third-party costs: The client or their family is responsible for paying for all shopping items, event tickets, parking fees and meals during outings. I will not use personal funds for client expenses.",
      ],
    },
    {
      title: "Emergencies",
      paragraphs: [
        "In the event of a medical emergency during a visit, emergency services will be called and thereafter the designated emergency contact.",
        "Any medical costs incurred from an emergency are the sole responsibility of the client.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "While I take every precaution to ensure a safe and pleasant experience, Within Reach is not liable for any accidents, injuries, illnesses, or loss of personal property that may occur during the provision of my services, except in cases of gross negligence.",
      ],
    },
    {
      title: "Termination of Service",
      paragraphs: [
        "I treat all clients with respect and expect the same in return. I reserve the right to refuse or cancel service at any time if a client or their family displays abusive, unsafe or inappropriate behaviour.",
      ],
    },
  ],
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export const footerContact = {
  phone: "+27761461291",
  email: "carylhenrico8@gmail.com",
  address: "Helderberg Area, Cape Town",
};

export const socialLinks: { icon: IconName; label: string; href: string }[] = [
  { icon: "FaFacebook", label: "Facebook", href: "#" },
  { icon: "FaTwitter", label: "Twitter", href: "#" },
  { icon: "FaInstagram", label: "Instagram", href: "#" },
];
