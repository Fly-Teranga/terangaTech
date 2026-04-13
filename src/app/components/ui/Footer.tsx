import Link from "next/link";
import AppLogo from "./AppLogo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <AppLogo />
          <p className="max-w-xl text-sm text-slate-600">
            Solutions web et experiences digitales pensees pour grandir avec
            votre entreprise.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-slate-600">
          <Link href="/homepage">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
