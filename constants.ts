import type { ImageMetadata } from "astro:assets";
import wellness from "./src/assets/wellness.png";
import additional from "./src/assets/additional.png";
import medical from "./src/assets/medical.png";
import monthly from "./src/assets/monthly.png";

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
  { label: "Features", href: "#features" },
  { label: "Packages", href: "#packages" },
  { label: "Locations", href: "#locations" },
  { label: "Philosophy", href: "#philosophy" },
];

export const hero = {
  heading: "Compassionate care for every stage of life",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  ctas: [
    { label: "Get Started", href: "#packages", primary: true },
    { label: "Learn More", href: "#philosophy" },
  ] as Cta[],
};

export const features: Feature[] = [
  {
    icon: "FiHeart",
    heading: "Compassionate Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "FiUsers",
    heading: "Expert Caregivers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "FiClock",
    heading: "Around the Clock",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "FiHome",
    heading: "Care at Home",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
      "Check wellbeing & needs assessment",
      "Tea and chat, walk and chat or an activity of choice",
      "Medication reminder & check",
      "Light household tasks",
      "Fridge & pantry check if required",
    ],
    cta: { label: "Book a visit", href: "/contact", primary: true },
  },
  {
    icon: "FiClock",
    heading: "Additional Services",
    price: "R260 per hour",
    img: additional,
    points: [
      "Accompanied shopping & outings",
      "Administration & paperwork support",
      "Technology set-up & assistance",
      "Within a 15km radius (AA rate R4.95/km beyond)",
      "Billed in 30-minute blocks after the first hour",
    ],
    cta: { label: "Enquire now", href: "/contact", primary: true },
  },
  {
    icon: "FaUserNurse",
    heading: "Medical Services",
    price: "R260 per hour",
    img: medical,
    points: [
      "Medical companion for appointments",
      "Hospital visits & admissions support",
      "Procedures, scans & x-ray support",
      "Covers Mediclinic Vergelegen, Busamed & Helderberg Hospital",
      "Billed in 30-minute blocks after the first hour",
    ],
    cta: { label: "Enquire now", href: "/contact", primary: true },
  },
  {
    icon: "FaCalendarAlt",
    heading: "Monthly Subscriptions",
    price: "From R1010 per month",
    img: monthly,
    points: [
      "Essential – R1010: 4 wellness visits",
      "Support – R1525: 4 wellness visits + 2 shopping trips",
      "Comprehensive – R2000: 4 wellness visits + choose 4 services",
      "Your choice of any 4 hourly services",
    ],
    cta: { label: "View subscriptions", href: "/contact", primary: true },
  },
];

export const locations = {
  heading: "Our Operating Area",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  areas: ["Somerset West", "Strand", "Gordon's Bay", "Helderberg"],
};

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is included in a Wellness Visit?",
    answer:
      "A one-hour visit at R280 includes a wellbeing check, a tea and chat, walk and chat or an activity of your choice, light household tasks, a needs assessment for future services, a fridge and pantry check if required, a medication reminder and check, and family feedback if requested.",
  },
  {
    question: "How are additional and medical services billed?",
    answer:
      "All additional and medical services are charged at R260 per hour. Partial hours after the first hour are billed in 30-minute blocks at a pro-rata half rate.",
  },
  {
    question: "Which services are covered by the hourly rate?",
    answer:
      "The hourly rate covers accompanied shopping, outings, administration, technology assistance, the medical companion service, hospital visits and support for medical procedures, scans and x-rays.",
  },
  {
    question: "Is there a travel charge for shopping and outings?",
    answer:
      "Shopping and outing services are R260 per hour within a 15km radius. Outside the radius, an AA rate of R4.95 per km is added.",
  },
  {
    question: "Do you provide medical and hospital support?",
    answer:
      "Yes. We offer a medical companion service with full door-to-door assistance, including being present at appointments. We also support hospital visits to admitted patients and procedures, scans and x-rays.",
  },
  {
    question: "Which hospitals and facilities are covered?",
    answer:
      "We cover Mediclinic Vergelegen, Busamed Hospital, Helderberg Hospital, Cure Day Hospital Paardevlei and Summerhill Surgical Centre Dennegeur. Please feel free to enquire about any other facility.",
  },
  {
    question: "What do the monthly subscription plans include?",
    answer:
      "Essential (R1010/month) includes 4 wellness visits. Support (R1525/month) adds 2 shopping trips per month. Comprehensive (R2000/month) includes 4 wellness visits plus your choice of any 4 hourly services.",
  },
  {
    question: "Can I choose my own combination of services?",
    answer:
      "Yes. On the Comprehensive plan you choose any combination of 4 services from shopping, outing, administration, technology, medical companion and hospital visit or support. Travel-based services are limited to a 15km radius, with the AA rate charged beyond.",
  },
];

export const philosophy = {
  heading: "Dignity First Philosophy",
  text: "We believe in empowering the elderly to continue to do the things they love, while also assisting them with day-to-day actions they might struggle with.",
  values: ["Dignity", "Compassion", "Independence", "Trust"],
};

export const operatingHours: { day: string; hours: string }[] = [
  { day: "Monday", hours: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
  { day: "Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

export const footerContact = {
  phone: "+27 82 675 6350",
  email: "hello@goldencare.example",
  address: "Helderberg Area, Cape Town",
};

export const socialLinks: { icon: IconName; label: string; href: string }[] = [
  { icon: "FaFacebook", label: "Facebook", href: "#" },
  { icon: "FaTwitter", label: "Twitter", href: "#" },
  { icon: "FaInstagram", label: "Instagram", href: "#" },
];
