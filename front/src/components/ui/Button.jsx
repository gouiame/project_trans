import { ButtonHTMLAttributes, ReactNode } from "react";

function Button({
      children,
      className,
      ...props
    })
    {
      return (
        <button
          className={`whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full glass-button flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 ${
            className ? className : ""
          }`}
          {...props}
        >
          {children}
        </button>
      );
}

export default Button;
