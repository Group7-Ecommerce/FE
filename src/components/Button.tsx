import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
}

function Button({ id, label, loading, ...props }: ButtonProps) {
  return (
    <button
      id={id}
      className={`bg-green-500 text-white font-bold py-2 px-4 rounded-full border border-green-500 ${
        loading && "cursor-not-allowed"
      }`}
      disabled={loading}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
