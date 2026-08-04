export function Prose({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`space-y-6 text-lg text-text ${className}`} {...props}>
      {children}
    </div>
  );
}
