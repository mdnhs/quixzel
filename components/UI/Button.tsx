import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
}

const Button = ({ variant, children }: ButtonProps) => {
  const baseClasses =
    "px-10 py-2 font-bold rounded-full relative group transition-all duration-300 ease-in-out";
  const borderClasses = "border-[3px]";

  const classes = {
    primary: `${baseClasses} ${borderClasses} bg-secondary border-secondary text-white`,
    secondary: `${baseClasses} bg-white ${borderClasses} border-tertiary text-tertiary`,
  };

  const innerIconClasses = {
    primary: `border-secondary ${borderClasses} bg-white absolute -left-3 -top-3`,
    secondary: `border-tertiary ${borderClasses} bg-white absolute -right-3 -top-3`,
  };

  const animateDelay = {
    primary: 300,
    secondary: 500,
  };

  return (
    <div className="hover:-translate-y-3 transition-all duration-300 ease-in-out">
      <p
        data-aos="fade-up"
        data-aos-delay={animateDelay[variant]}
        className={classes[variant]}
      >
        <span
          className={`w-10 h-10 rounded-lg rotate-45 group-hover:animate-bounce ${innerIconClasses[variant]}`}
        />
        {children}
      </p>
    </div>
  );
};

export default Button;
