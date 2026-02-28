import React from "react";

interface ShapeProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const sizeMap = {
  sm: "w-12 h-12",
  md: "w-24 h-24",
  lg: "w-48 h-48",
};

export const Square: React.FC<ShapeProps> = ({
  size = "md",
  color = "bg-blue-500",
  className = "",
}) => <div className={`${sizeMap[size]} ${color} ${className}`} />;

export const Circle: React.FC<ShapeProps> = ({
  size = "md",
  color = "bg-red-500",
  className = "",
}) => <div className={`rounded-full ${sizeMap[size]} ${color} ${className}`} />;

export const Shapes: React.FC = () => (
  <div className="flex gap-8 p-8">
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Square</h3>
      <Square size="sm" />
      <Square size="md" />
      <Square size="lg" color="bg-green-500" />
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Circle</h3>
      <Circle size="sm" />
      <Circle size="md" />
      <Circle size="lg" color="bg-purple-500" />
    </div>
  </div>
);
