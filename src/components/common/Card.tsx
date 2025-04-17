interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  const Card = ({ title, children, className = "" }: CardProps) => {
    return (
      <div className={`max-w-sm rounded-xl shadow-md p-6 border border-soild ${className}`}>
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <div className="text-sm">{children}</div>
      </div>
    );
  };
  
  export default Card;
  