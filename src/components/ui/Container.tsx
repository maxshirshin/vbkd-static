interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "md";
}

export function Container({ children, className = "", size = "default", ...props }: ContainerProps) {
  // We ignore the `size` prop here to ensure the main content identically matches 
  // the Header and Footer boundaries at all breakpoints.
  return (
    <div className={`container mx-auto px-6 max-w-[var(--container-max)] ${className}`} {...props}>
      {children}
    </div>
  );
}
