import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  outline?: boolean;
}

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  size = "md",
  color = "primary",
  outline = false,
}: ButtonProps) => {
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  const colorClass = outline ? `btn-outline btn-${color}` : `btn-${color}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${colorClass} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
