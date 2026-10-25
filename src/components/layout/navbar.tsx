"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const colors = isDark
    ? {
        brand: "#F0F1F8",
        brandAccent: "#9EAEFF",
        navText: "#E0E5FA",
        navHover: "#FFFFFF",
        background: "#111737",
        border: "#343B61",
        buttonBackground: "#7C93F0",
        buttonText: "#111737",
        buttonHover: "#A6B6FF",
        icon: "#F0F1F8",
      }
    : {
        brand: "#1B2250",
        brandAccent: "#2A3F9E",
        navText: "#626681",
        navHover: "#2A3F9E",
        background: "#FFFAF1",
        border: "#E5D9C3",
        buttonBackground: "#2A3F9E",
        buttonText: "#FFFFFF",
        buttonHover: "#223582",
        icon: "#1B2250",
      };

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 shadow-[0_2px_12px_rgba(27,34,80,0.03)]"
      style={{
        backgroundColor: colors.background,
        color: colors.brand,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <nav
        className="container flex min-h-[72px] items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-lg font-bold tracking-[-0.04em] transition-opacity hover:opacity-80 sm:text-xl"
          aria-label="Amit Kumar — Home"
          style={{ color: colors.brand }}
        >
          AMIT KUMAR
          <span style={{ color: colors.brandAccent }}>.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: colors.navText }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = colors.navHover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = colors.navText;
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              borderColor: colors.border,
              backgroundColor: isDark ? "#191F42" : "#FFFFFF",
              color: colors.icon,
            }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {!mounted ? (
              <span className="size-[18px]" aria-hidden="true" />
            ) : isDark ? (
              <Sun
                className="size-[18px]"
                style={{ color: "#F2A33A" }}
                aria-hidden="true"
              />
            ) : (
              <Moon
                className="size-[18px]"
                style={{ color: "#2A3F9E" }}
                aria-hidden="true"
              />
            )}
          </button>

          {/* Desktop contact button */}
          <Link
            href="/contact"
            className="hidden min-h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:inline-flex"
            style={{
              backgroundColor: colors.buttonBackground,
              color: colors.buttonText,
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = colors.buttonHover;
              event.currentTarget.style.color = colors.buttonText;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor =
                colors.buttonBackground;
              event.currentTarget.style.color = colors.buttonText;
            }}
          >
            <span style={{ color: "inherit" }}>Let&apos;s talk</span>
            <ArrowUpRight
              className="size-4"
              style={{ color: "inherit" }}
              aria-hidden="true"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border transition-colors md:hidden"
            style={{
              borderColor: colors.border,
              color: colors.icon,
              backgroundColor: "transparent",
            }}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="overflow-hidden">
          <div
            className="border-t px-5 py-4"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
            }}
          >
            <div className="container flex flex-col items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="w-full rounded-lg px-3 py-3 text-center text-sm font-medium transition-colors"
                  style={{ color: colors.brand }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor = isDark
                      ? "#22294D"
                      : "#F5E7CB";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold"
                style={{
                  backgroundColor: colors.buttonBackground,
                  color: colors.buttonText,
                }}
              >
                <span style={{ color: "inherit" }}>Let&apos;s talk</span>
                <ArrowUpRight
                  className="size-4"
                  style={{ color: "inherit" }}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
