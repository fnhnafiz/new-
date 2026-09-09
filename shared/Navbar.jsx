"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import {
  mainLinks,
  services,
  freeTools,
  destinations,
  allCountries,
  contact,
} from "@/components/Data/navigation";

const BTN =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-3 text-[15px] font-medium leading-none transition-all duration-300";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // রুট বদলালে সব মেনু বন্ধ
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openNow = (key) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const triggerClass = (active) =>
    `flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
      scrolled
        ? active
          ? "text-white"
          : "text-white/80 hover:text-white"
        : active
          ? "text-primary-dark"
          : "text-dark/80 hover:text-primary-dark"
    }`;

  return (
    <>
      <header
        onMouseLeave={scheduleClose}
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-out px-4 ${
          scrolled
            ? "border-transparent bg-primary shadow-[0_10px_30px_-16px_rgba(15,148,136,0.85)]"
            : "border-border bg-white"
        }`}
      >
        <div
          className={`wrapper flex items-center justify-between gap-6 transition-[height] duration-500 ease-out ${
            scrolled ? "h-16 xl:h-[68px]" : "h-16 xl:h-20"
          }`}
        >
          <Logo />

          {/* ---------- Desktop nav ---------- */}
          <nav className="hidden xl:block" aria-label="Main">
            <ul className="flex items-center gap-0.5">
              {mainLinks.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.menu ? openNow(item.menu) : scheduleClose()
                  }
                >
                  {item.menu ? (
                    <button
                      type="button"
                      aria-expanded={openMenu === item.menu}
                      onClick={() =>
                        setOpenMenu(openMenu === item.menu ? null : item.menu)
                      }
                      className={triggerClass(
                        openMenu === item.menu || isActive(item.href),
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          openMenu === item.menu ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={triggerClass(isActive(item.href))}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.menu === "services" && openMenu === "services" && (
                    <DropdownPanel
                      items={services}
                      footer={{ label: "See all services", href: "/services" }}
                    />
                  )}

                  {item.menu === "tools" && openMenu === "tools" && (
                    <DropdownPanel items={freeTools} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="/login"
              className={`${BTN} ${
                scrolled
                  ? "border border-white/40 bg-white/10 text-white hover:bg-white/20"
                  : "border border-[#e5e7eb] text-[#1a1a1a] hover:border-[#14b8a6] hover:text-[#0f9488]"
              }`}
            >
              Log in
            </Link>

            <Link
              href="/counseling"
              className={`${BTN} ${
                scrolled
                  ? "bg-white text-black shadow-sm hover:bg-[#f0fdfa]"
                  : "bg-primary text-white hover:bg-[#0f9488]"
              }`}
            >
              Book counseling
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={`-mr-2 p-2 xl:hidden transition-colors ${
              scrolled ? "text-white" : "text-dark"
            }`}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* ---------- Countries mega menu ---------- */}
        {openMenu === "countries" && (
          <div
            className="animate-menu absolute inset-x-0 top-full hidden xl:block"
            onMouseEnter={() => openNow("countries")}
          >
            <div className="wrapper pt-2">
              <div className="grid grid-cols-[1fr_300px] overflow-hidden rounded-2xl border border-border bg-white shadow-menu">
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 p-8">
                  {destinations.map((group) => (
                    <div key={group.region}>
                      <h3 className="mb-3 text-[13px] font-semibold text-body">
                        {group.region}
                      </h3>
                      <ul className="space-y-0.5">
                        {group.countries.map((country) => (
                          <li key={country.href}>
                            <Link
                              href={country.href}
                              className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[14px] text-dark transition-colors hover:bg-primary-light hover:text-primary-dark"
                            >
                              <span aria-hidden="true" className="text-base">
                                {country.flag}
                              </span>
                              {country.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <aside className="flex flex-col justify-between border-l border-border bg-primary-light p-8">
                  <div>
                    <h3 className="text-[17px] font-semibold">
                      Not sure which country fits you?
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed">
                      Answer a few questions about your grades, budget and
                      English score. You will get a country-by-country read on
                      your chances.
                    </p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/visa-checker"
                      className={`${BTN} w-full bg-[#14b8a6] text-white hover:bg-[#0f9488]`}
                    >
                      Check my chances
                    </Link>
                    <Link
                      href="/destinations"
                      className="block text-center text-[14px] font-medium text-primary-dark hover:underline"
                    >
                      Browse all destinations
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={`fixed inset-0 z-60 xl:hidden ${
          mobileOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-dark/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="-mr-2 p-2 text-dark"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5" aria-label="Mobile">
            {mainLinks.map((item) =>
              item.menu ? (
                <div key={item.label} className="border-b border-border">
                  <button
                    type="button"
                    aria-expanded={mobileSection === item.menu}
                    onClick={() =>
                      setMobileSection(
                        mobileSection === item.menu ? null : item.menu,
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-[16px] font-medium text-dark"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`text-body transition-transform duration-200 ${
                        mobileSection === item.menu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileSection === item.menu && (
                    <div className="pb-4">
                      {item.menu === "countries" ? (
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                          {allCountries.map((country) => (
                            <li key={country.href}>
                              <Link
                                href={country.href}
                                className="flex items-center gap-2 rounded-lg py-2 text-[14px] text-dark"
                              >
                                <span aria-hidden="true">{country.flag}</span>
                                {country.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-1">
                          {(item.menu === "services"
                            ? services
                            : freeTools
                          ).map(({ label, href, icon: Icon, badge }) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className="flex items-center gap-3 rounded-xl bg-surface px-3 py-3 text-[15px] text-dark"
                              >
                                <Icon
                                  size={18}
                                  className="shrink-0 text-primary-dark"
                                />
                                {label}
                                {badge && <Badge>{badge}</Badge>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block border-b border-border py-4 text-[16px] font-medium ${
                    isActive(item.href) ? "text-primary-dark" : "text-dark"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="py-6">
              <Link
                href="/login"
                className={`${BTN} w-full border border-[#e5e7eb] text-[#1a1a1a]`}
              >
                Log in
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* ---------- Sticky mobile CTA ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-4 py-3 xl:hidden">
        <div className="flex gap-2">
          <a
            href={contact.phoneHref}
            aria-label="Call us"
            className={`${BTN} border border-[#e5e7eb] px-4 text-[#1a1a1a]`}
          >
            <Phone size={18} />
          </a>
          <Link
            href="/counseling"
            className={`${BTN} flex-1 bg-primary text-white hover:bg-[#0f9488]`}
          >
            Book counseling
          </Link>
        </div>
      </div>
    </>
  );
}

/* ---------------- sub components ---------------- */
function Logo({ scrolled = false }) {
  return (
    <Link href="/" className="flex items-baseline gap-1.5">
      <span
        className={`text-[22px] font-bold tracking-tight transition-colors duration-500 ${
          scrolled ? "text-white" : "text-dark"
        }`}
      >
        Riz
      </span>
      <span
        className={`text-[15px] font-medium tracking-wide transition-colors duration-500 ${
          scrolled ? "text-white/70" : "text-body"
        }`}
      >
        Migration
      </span>
    </Link>
  );
}

function DropdownPanel({ items, footer }) {
  return (
    <div className="animate-menu absolute left-0 top-full w-[350px] pt-2">
      <div className="rounded-2xl border border-border bg-white p-2 shadow-menu">
        {items.map(({ label, href, desc, icon: Icon, badge }) => (
          <Link
            key={href}
            href={href}
            className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-primary-light"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary-dark transition-colors group-hover:bg-primary group-hover:text-white">
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 text-[15px] font-medium text-dark">
                {label}
                {badge && <Badge>{badge}</Badge>}
              </span>
              <span className="mt-1 block text-[13px] leading-snug text-body">
                {desc}
              </span>
            </span>
          </Link>
        ))}

        {footer && (
          <Link
            href={footer.href}
            className="mt-1 block border-t border-border px-3 pb-1 pt-3 text-[13px] font-medium text-primary-dark hover:underline"
          >
            {footer.label}
          </Link>
        )}
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white">
      {children}
    </span>
  );
}
