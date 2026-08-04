export function MultiCol({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 ${className}`}>
      {children}
    </div>
  );
}

export function Col({ children, className = "", span = 1 }: { children: React.ReactNode, className?: string, span?: number }) {
  // If span is provided, we can dynamically assign col-span-X class
  // Otherwise default to standard flex col wrapper
  const spanClass = span > 1 ? `col-span-1 md:col-span-2 lg:col-span-${span}` : "";
  return (
    <div className={`flex flex-col ${spanClass} ${className}`}>
      {children}
    </div>
  );
}
