export type IconName =
  | "FiHeart"
  | "FiUsers"
  | "FiClock"
  | "FiHome"
  | "FiCheckCircle"
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
  points: string[];
  cta: Cta;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const siteName = "Golden Care";

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
    heading: "Starter Care",
    points: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
    ],
    cta: { label: "Choose Starter", href: "#", primary: true },
  },
  {
    icon: "FaCalendarAlt",
    heading: "Full Time Care",
    points: [
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation",
      "Ullamco laboris nisi",
    ],
    cta: { label: "Choose Full Time", href: "#", primary: true },
  },
  {
    icon: "FaHandHoldingHeart",
    heading: "Palliative Care",
    points: [
      "Duis aute irure dolor",
      "In reprehenderit voluptate",
      "Velit esse cillum dolore",
    ],
    cta: { label: "Choose Palliative", href: "#", primary: true },
  },
];

export const locations = {
  heading: "Where we can provide care",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  areas: ["London", "Manchester", "Birmingham", "Leeds"],
};

export const philosophy = {
  heading: "Our philosophy",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  values: ["Dignity", "Compassion", "Independence", "Trust"],
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Home care", href: "#packages" },
      { label: "Live-in care", href: "#packages" },
      { label: "Palliative care", href: "#packages" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

export const footerContact = {
  phone: "+44 1234 567 890",
  email: "hello@goldencare.example",
  address: "1 Lorem Street, Ipswich, IP1 1AA",
};

export const socialLinks: { icon: IconName; label: string; href: string }[] = [
  { icon: "FaFacebook", label: "Facebook", href: "#" },
  { icon: "FaTwitter", label: "Twitter", href: "#" },
  { icon: "FaInstagram", label: "Instagram", href: "#" },
];
