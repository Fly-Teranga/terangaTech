import Link from "next/link";
import AppImage from "./AppImage";

type AppLogoProps = {
  withLabel?: boolean;
};

export default function AppLogo({ withLabel = true }: AppLogoProps) {
  return (
    <Link href="/homepage" className="inline-flex items-center gap-3">
      <AppImage
        src="/assets/images/app_logo.png"
        alt="FakiAirline logo"
        width={36}
        height={36}
        className="rounded-xl bg-white ring-1 ring-slate-200"
      />
      {withLabel ? (
        <span className="text-lg font-semibold tracking-tight text-slate-950">
          FakiAirline
        </span>
      ) : null}
    </Link>
  );
}
