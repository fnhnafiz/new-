"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  X,
  Mail,
  Lock,
  User,
  Phone,
  GraduationCap,
  Briefcase,
  Building2,
  Eye,
  EyeOff,
} from "lucide-react";

const roles = [
  { value: "student", label: "Student", icon: GraduationCap },
  { value: "agent", label: "Agent", icon: Briefcase },
  { value: "university", label: "University", icon: Building2 },
];

export default function AuthModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("login");
  const firstFieldRef = useRef(null);

  /* ---------- mount, তারপর পরের ফ্রেমে ট্রানজিশন চালু ---------- */
  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    const timer = setTimeout(() => setMounted(false), 220);
    return () => clearTimeout(timer);
  }, [open]);

  /* scroll lock এখানে নেই — Navbar একাই সেটা সামলায়, নইলে দুই জায়গা
     থেকে body বদলালে বন্ধ করার সময় পেজ ঝাঁকি খায় */

  /* ---------- Escape + খোলার পর প্রথম ঘরে ফোকাস ---------- */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const timer = setTimeout(() => firstFieldRef.current?.focus(), 240);

    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
  }, [open, mode, onClose]);

  if (!mounted) return null;

  const isLogin = mode === "login";

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-dark/55 backdrop-blur-sm transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className={`relative max-h-[90vh] w-full max-w-[420px] overflow-y-auto rounded-3xl bg-white p-7 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.6)] transition-all duration-200 ease-out sm:p-8 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-[0.97] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-lg p-1.5 text-body transition-colors hover:bg-surface hover:text-dark"
        >
          <X size={19} />
        </button>

        <div className="pr-8">
          <h2 id="auth-modal-title" className="text-2xl font-bold">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            {isLogin
              ? "Pick up where you left off with your applications and saved courses."
              : "Track applications, save courses and keep your documents in one place."}
          </p>
        </div>

        <GoogleButton
          label={isLogin ? "Continue with Google" : "Sign up with Google"}
        />

        <Divider />

        {isLogin ? (
          <LoginForm firstFieldRef={firstFieldRef} />
        ) : (
          <SignupForm firstFieldRef={firstFieldRef} />
        )}

        <p className="mt-6 text-center text-sm">
          {isLogin ? "New to Riz Migration?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setMode(isLogin ? "signup" : "login")}
            className="font-semibold text-primary-dark hover:underline"
          >
            {isLogin ? "Create an account" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}

/* ---------------- google ---------------- */

function GoogleButton({ label }) {
  const handleClick = () => {
    // TODO: ব্যাকএন্ড রেডি হলে OAuth flow এখানে বসবে
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-border py-3 text-sm font-medium text-dark transition-colors hover:border-primary hover:bg-surface"
    >
      <GoogleIcon />
      {label}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-border" />
      <span className="text-xs">or continue with email</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

/* ---------------- login ---------------- */

function LoginForm({ firstFieldRef }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const canSubmit = form.email.trim() && form.password.trim();

  const handleSubmit = () => {
    if (!canSubmit) return;
    // TODO: ব্যাকএন্ড রেডি হলে এখানে API কল বসবে
  };

  return (
    <div className="space-y-3.5">
      <Field
        ref={firstFieldRef}
        icon={Mail}
        type="email"
        placeholder="Email address"
        value={form.email}
        onChange={update("email")}
      />

      <PasswordField
        placeholder="Password"
        value={form.password}
        onChange={update("password")}
      />

      <div className="flex items-center justify-between pt-1 text-sm">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 accent-[var(--color-primary)]"
          />
          Keep me signed in
        </label>

        <Link
          href="/forgot-password"
          className="text-primary-dark hover:underline"
        >
          Forgot password
        </Link>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="btn btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        Log in
      </button>
    </div>
  );
}

/* ---------------- signup ---------------- */

function SignupForm({ firstFieldRef }) {
  const [form, setForm] = useState({
    role: "student",
    name: "",
    email: "",
    phone: "",
    password: "",
    agreed: false,
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const canSubmit =
    form.name.trim() && form.email.trim() && form.password.trim() && form.agreed;

  const handleSubmit = () => {
    if (!canSubmit) return;
    // TODO: ব্যাকএন্ড রেডি হলে এখানে API কল বসবে
  };

  return (
    <div>
      <p className="text-sm font-medium text-dark">I am signing up as</p>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {roles.map(({ value, label, icon: Icon }) => {
          const selected = form.role === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, role: value }))}
              aria-pressed={selected}
              className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-3 text-xs font-medium transition-colors ${
                selected
                  ? "border-primary bg-primary-light text-primary-dark"
                  : "border-border text-body hover:border-primary/50"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 space-y-3.5">
        <Field
          ref={firstFieldRef}
          icon={User}
          placeholder={
            form.role === "university" ? "Institution name" : "Full name"
          }
          value={form.name}
          onChange={update("name")}
        />

        <Field
          icon={Mail}
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={update("email")}
        />

        <Field
          icon={Phone}
          type="tel"
          placeholder="Mobile number"
          value={form.phone}
          onChange={update("phone")}
        />

        <PasswordField
          placeholder="Create a password"
          value={form.password}
          onChange={update("password")}
        />
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, agreed: e.target.checked }))
          }
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
        />
        <span>
          I agree to the{" "}
          <Link href="/terms" className="text-primary-dark underline">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary-dark underline">
            privacy policy
          </Link>
          .
        </span>
      </label>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="btn btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        Create account
      </button>
    </div>
  );
}

/* ---------------- inputs ---------------- */

function Field({ icon: Icon, ref, className = "", ...props }) {
  return (
    <div className="relative">
      <Icon
        size={17}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body/60"
      />
      <input
        ref={ref}
        {...props}
        aria-label={props.placeholder}
        className={`w-full rounded-xl border border-border py-3 pl-11 pr-4 text-sm text-dark placeholder:text-body/70 focus:border-primary focus:outline-none ${className}`}
      />
    </div>
  );
}

function PasswordField(props) {
  const [shown, setShown] = useState(false);

  return (
    <div className="relative">
      <Lock
        size={17}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body/60"
      />
      <input
        {...props}
        type={shown ? "text" : "password"}
        aria-label={props.placeholder}
        className="w-full rounded-xl border border-border py-3 pl-11 pr-11 text-sm text-dark placeholder:text-body/70 focus:border-primary focus:outline-none"
      />
      <button
        type="button"
        onClick={() => setShown((s) => !s)}
        aria-label={shown ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-body/60 hover:text-dark"
      >
        {shown ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}