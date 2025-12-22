const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
}) => {
  
  const baseStyles =
    "inline-flex items-center cursor-pointer justify-center font-medium  rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
   "bg-brand-600 text-primary bg-gray-500 hover:text-white hover:bg-red-700 focus:ring-red-500",
    danger:
      "bg-brand-600 text-white   hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base", 
    lg: "px-6 py-3 text-lg",
  };

  // const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
