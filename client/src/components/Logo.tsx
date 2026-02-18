import logoImg from "@assets/SOLID_GLASS_CUBE_2_1771449977187.jpg";

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2`}>
      <div className={`relative overflow-hidden rounded-sm ${className}`}>
        <img 
          src={logoImg} 
          alt="NAV Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-heading font-bold text-2xl tracking-tighter text-[#800000]">NAV</span>
    </div>
  );
};

export default Logo;
