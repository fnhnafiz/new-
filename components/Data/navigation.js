import {
  GraduationCap,
  Briefcase,
  ClipboardCheck,
  FolderCheck,
  ShieldCheck,
  FileText,
  Search,
} from "lucide-react";

export const services = [
  {
    label: "Student Visa",
    href: "/services/student-visa",
    desc: "File it right the first time, with the papers that matter.",
    icon: GraduationCap,
  },
  {
    label: "Work Visa",
    href: "/services/work-visa",
    desc: "Skilled worker and post-study work routes.",
    icon: Briefcase,
  },
  {
    label: "Admission Support",
    href: "/services/admission-support",
    desc: "Shortlist courses and build a stronger application.",
    icon: ClipboardCheck,
  },
  {
    label: "Documentation",
    href: "/services/documentation",
    desc: "Financials, translations and attestation, handled.",
    icon: FolderCheck,
  },
];

export const freeTools = [
  {
    label: "Visa Possibility Checker",
    href: "/visa-checker",
    desc: "See where your profile stands in two minutes.",
    icon: ShieldCheck,
    badge: "AI",
  },
  {
    label: "SOP Review",
    href: "/sop-review",
    desc: "Upload your SOP and get it back rewritten.",
    icon: FileText,
    badge: "AI",
  },
  {
    label: "Course Finder",
    href: "/courses",
    desc: "Match courses to your grades, budget and intake.",
    icon: Search,
  },
];

/* ক্লায়েন্ট কনফার্ম করলে এই লিস্ট আপডেট করবেন — flag emoji পরে SVG দিয়ে বদলানো যাবে */
export const destinations = [
  {
    region: "Europe",
    countries: [
      { name: "United Kingdom", href: "/destinations/united-kingdom", flag: "🇬🇧" },
      { name: "Germany", href: "/destinations/germany", flag: "🇩🇪" },
      { name: "Ireland", href: "/destinations/ireland", flag: "🇮🇪" },
      { name: "Finland", href: "/destinations/finland", flag: "🇫🇮" },
      { name: "Malta", href: "/destinations/malta", flag: "🇲🇹" },
      { name: "Netherlands", href: "/destinations/netherlands", flag: "🇳🇱" },
    ],
  },
  {
    region: "Northern & Central Europe",
    countries: [
      { name: "Sweden", href: "/destinations/sweden", flag: "🇸🇪" },
      { name: "Denmark", href: "/destinations/denmark", flag: "🇩🇰" },
      { name: "Poland", href: "/destinations/poland", flag: "🇵🇱" },
      { name: "Hungary", href: "/destinations/hungary", flag: "🇭🇺" },
      { name: "Lithuania", href: "/destinations/lithuania", flag: "🇱🇹" },
      { name: "Cyprus", href: "/destinations/cyprus", flag: "🇨🇾" },
    ],
  },
  {
    region: "Beyond Europe",
    countries: [
      { name: "United States", href: "/destinations/united-states", flag: "🇺🇸" },
      { name: "Canada", href: "/destinations/canada", flag: "🇨🇦" },
      { name: "Australia", href: "/destinations/australia", flag: "🇦🇺" },
      { name: "New Zealand", href: "/destinations/new-zealand", flag: "🇳🇿" },
      { name: "Japan", href: "/destinations/japan", flag: "🇯🇵" },
      { name: "South Korea", href: "/destinations/south-korea", flag: "🇰🇷" },
    ],
  },
];

export const allCountries = destinations.flatMap((group) => group.countries);

export const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Course Finder", href: "/courses" },
  { label: "Free Tools", href: "/visa-checker", menu: "tools" },
  { label: "Countries", href: "/destinations", menu: "countries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+880 1XXX-XXXXXX",
  phoneHref: "tel:+8801XXXXXXXXX",
};