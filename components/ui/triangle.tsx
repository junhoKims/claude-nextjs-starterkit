import React from "react"

interface TriangleProps {
  size?: "sm" | "md" | "lg"
  color?: string
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

const sizeMap = {
  sm: "border-8",
  md: "border-12",
  lg: "border-16",
}

const directionStyles = {
  up: "border-l-8 border-r-8 border-b-16",
  down: "border-l-8 border-r-8 border-t-16",
  left: "border-t-8 border-b-8 border-r-16",
  right: "border-t-8 border-b-8 border-l-16",
}

export const Triangle: React.FC<TriangleProps> = ({
  size = "md",
  color = "border-blue-500",
  direction = "up",
  className = "",
}) => {
  const borderColor = color.replace("bg-", "border-")
  const directionStyle = directionStyles[direction]

  return (
    <div
      className={`w-0 h-0 ${borderColor} ${directionStyle} ${className}`}
      style={{
        borderLeftColor:
          direction === "up" || direction === "down"
            ? "transparent"
            : undefined,
        borderRightColor:
          direction === "up" || direction === "down"
            ? "transparent"
            : undefined,
        borderTopColor:
          direction === "down" || direction === "left"
            ? "transparent"
            : undefined,
        borderBottomColor:
          direction === "up" || direction === "right"
            ? "transparent"
            : undefined,
      }}
    />
  )
}

export const TriangleShowcase: React.FC = () => (
  <div className="flex gap-8 p-8">
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Up</h3>
      <Triangle direction="up" />
      <Triangle
        size="lg"
        direction="up"
        color="bg-green-500"
      />
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Down</h3>
      <Triangle direction="down" />
      <Triangle
        size="lg"
        direction="down"
        color="bg-red-500"
      />
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Left</h3>
      <Triangle direction="left" />
      <Triangle
        size="lg"
        direction="left"
        color="bg-yellow-500"
      />
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Right</h3>
      <Triangle direction="right" />
      <Triangle
        size="lg"
        direction="right"
        color="bg-purple-500"
      />
    </div>
  </div>
)
