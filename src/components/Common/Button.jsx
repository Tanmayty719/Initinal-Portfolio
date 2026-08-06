import { motion } from "framer-motion";

const Button = ({
  children,
  href,
  onClick,
  download = false,
  target,
  variant = "primary",
  icon,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-600 hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]",

    secondary:
      "border border-slate-700 bg-slate-900/60 text-white hover:border-sky-400 hover:bg-slate-800",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={classes}
    >
      {icon}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
};

export default Button;