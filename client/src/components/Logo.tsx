import logoImg from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img src={logoImg} alt="Verloren Vrienden Logo" className="w-full h-full" />
    </div>
  );
}
