import * as React from "react"

const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  const variants = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    outline: "text-foreground",
  }

  const variantClass = variants[variant || "default"]

  return <div className={`${baseStyles} ${variantClass} ${className}`} {...props}>{children}</div>
}

export { Badge }