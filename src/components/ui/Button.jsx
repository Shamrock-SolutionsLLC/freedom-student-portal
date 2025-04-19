import React from "react"
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, type = 'button', ...props }, ref) => (
  <button ref={ref}
    type="button"
    className={cn("bg-[#979ea8] cursor-pointer hover:bg-gray-600 text-white font-semibold py-2 px-10 rounded-xl transition duration-200", className)}
    {...props}
  />
))
Button.displayName = "Button"

export { Button }