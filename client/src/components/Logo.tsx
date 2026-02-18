import logoImg from "@assets/SOLID_GLASS_CUBE_2_1771449977187.jpg";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <span className={`font-heading font-bold text-2xl tracking-tighter text-[#800000] ${className}`}>NAV</span>
  );
};

export default Logo;
