import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-white p-1.5 rounded-lg shadow-md border border-gray-200 space-y-4", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, title, ...props }, ref) => (
  (
    <div className={cn("bg-[#f2f3f5] flex justify-between items-center pt-2 px-3.5 pb-8 rounded", className)}
      {...props}>
      {title && <h2 className="text-md font-bold text-gray-800">
        {title}
      </h2>}
      {props.children}
    </div>
  ))
)
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div className={className} {...props} />

))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardContent }