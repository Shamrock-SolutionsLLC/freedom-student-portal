import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from '@/lib/utils'
import { cva } from "class-variance-authority"

const buttonVariants = cva('cursor-pointer rounded-lg font-semibold transition duration-200', {
  variants: {
    variant: {
      default: 'bg-[#979ea8] hover:bg-gray-600 text-white !rounded-xl',
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border-black border border-solid bg-white !text-black hover:bg-gray-600 hover:!text-white",
      secondary: "border-gray-400 border border-solid bg-[#ced4db] !text-black text-lg !rounded-lg hover:bg-gray-600 hover:!text-white",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      icon: "text-center h-8 w-8 !p-0",
    },
    size: {
      default: "h-10 py-2 px-10",
      sm: "h-8 py-1 px-4 leading-none text-sm",
      // lg: "h-10 rounded-md px-8",      
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }