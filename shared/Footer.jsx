"use client";

import { useState } from "react";
import Link from "next/link";

import {
  services,
  destinations,
  contact,
  freeTools,
} from "@/components/Data/navigation";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

const company = [
  { label: "About us", href: "/about" },
  { label: "Success stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
];

// মেগা মেনুর তালিকা থেকেই প্রথম ৬টা দেশ
const topCountries = destinations.flatMap((g) => g.countries).slice(0, 6);

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="wrapper grid gap-12 py-16 lg:grid-cols-[330px_1fr] lg:gap-16 lg:py-20">
        {/* ---------- brand + newsletter ---------- */}
        <div>
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="text-[22px] font-bold tracking-tight text-white">
              Riz
            </span>
            <span className="text-[15px] font-medium tracking-wide text-white/60">
              Migration
            </span>
          </Link>

          <p className="mt-4 text-[14px] leading-relaxed">
            We help students pick a course they can actually get into, and tell
            them honestly when a profile is not ready yet.
          </p>

          <ul className="mt-6 space-y-3 text-[14px]">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
              <span>House 00, Road 00, Dhaka 1000, Bangladesh</span>
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-primary" />
              <a href={contact.phoneHref} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-primary" />
              <a
                href="mailto:info@therizmigration.com"
                className="hover:text-white"
              >
                info@therizmigration.com
              </a>
            </li>
          </ul>

          <Newsletter />
        </div>

        {/* ---------- link columns ---------- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Services" links={services} />
          <FooterColumn
            title="Free tools"
            links={[
              ...freeTools,
              { label: "Book counseling", href: "/counseling" },
            ]}
          />
          <FooterColumn
            title="Destinations"
            links={[
              ...topCountries.map((c) => ({ label: c.name, href: c.href })),
              { label: "All destinations", href: "/destinations" },
            ]}
          />
        </div>
      </div>

      {/* ---------- bottom bar ---------- */}
      <div className="border-t border-white/10">
        <div className="wrapper flex flex-col-reverse items-center gap-6 py-6 text-[13px] md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} Riz Migration. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link href="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of service
            </Link>

            <div className="flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- sub components ---------------- */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[14px]">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className="transition-colors hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;
    // TODO: ব্যাকএন্ড রেডি হলে এখানে API কল বসবে
    setSent(true);
    setEmail("");
  };

  return (
    <div className="mt-8">
      <h3 className="text-[15px] font-semibold text-white">
        Never miss an intake deadline
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed">
        Application windows and scholarship dates, once a month.
      </p>

      {sent ? (
        <p className="mt-4 rounded-xl bg-primary/15 px-4 py-3 text-[14px] text-primary">
          You are on the list. Check your inbox to confirm.
        </p>
      ) : (
        <div className="mt-4 flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="you@email.com"
            aria-label="Email address"
            className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary shrink-0"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}
