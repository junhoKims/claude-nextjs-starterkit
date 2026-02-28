import React from "react"
import { Button, buttonVariants } from "./button"
import type { VariantProps } from "class-variance-authority"

interface ShadcnButtonProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * ShadcnButton - shadcn/ui의 Button 컴포넌트를 래핑한 확장 버전
 * 모든 variant와 size 옵션을 제공합니다
 */
export const ShadcnButton = React.forwardRef<
  HTMLButtonElement,
  ShadcnButtonProps
>(
  (
    { variant = "default", size = "default", ...props },
    ref
  ) => (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      {...props}
    />
  )
)

ShadcnButton.displayName = "ShadcnButton"

/**
 * ShadcnButtonShowcase - 모든 variant와 size를 보여주는 데모 컴포넌트
 */
export const ShadcnButtonShowcase: React.FC = () => {
  const variants = [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
  ] as const
  const sizes = [
    "xs",
    "sm",
    "default",
    "lg",
    "icon",
  ] as const

  return (
    <div className="space-y-8 p-8">
      {/* Variants */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">
          Variants
        </h2>
        <div className="flex flex-wrap gap-4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant as any}>
              {variant}
            </Button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map((size) => (
            <Button key={size} size={size as any}>
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* States */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  )
}
