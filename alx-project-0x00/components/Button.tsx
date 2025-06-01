type ButtonProps = {
  title: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({title, className=""
}) => {
  return (
    <button className={`border px-3 py-1 text-lg mt-3 bg-blue-500 text-white ${className}`}>
      {title}
    </button>
  );
}
export default Button;