interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "md";
}

export function Container({ children, className = "", size = "default", ...props }: ContainerProps) {
  const maxW = size === "sm" ? "max-w-2xl" : size === "md" ? "max-w-3xl" : "";
  return (
    <div className={`container ${maxW} ${className}`} {...props}>
      {children}
    </div>
  );
}
