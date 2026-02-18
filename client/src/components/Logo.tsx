import logoImg from "@assets/SOLID_GLASS_CUBE_2_1771449977187.jpg";

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      <img 
        src={logoImg} 
        alt="NAV Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;
