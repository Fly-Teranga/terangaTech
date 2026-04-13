import AppImage from "./AppImage";

export default function AppIcon() {
  return (
    <AppImage
      src="/assets/images/app_logo.png"
      alt="TerangaTech icon"
      width={32}
      height={32}
      className="rounded-lg bg-white ring-1 ring-slate-200"
    />
  );
}
