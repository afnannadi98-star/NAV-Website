import logoImg from "@assets/NAV_Logo_copy_1772810699063.png";

const Logo = ({ className = "", textColor = "text-primary" }: { className?: string, textColor?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoImg} alt="NAV Logo" className="h-8 w-auto object-contain block" />
    </div>
  );
};

export default Logo;
