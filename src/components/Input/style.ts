import { cva } from "class-variance-authority";

export const inputStyles = cva([
  "w-full",
  "border",
  "border-primary-400",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "hover:border-primary-500 ",
  "focus:outline-primary-500 border",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "cursor-pointer",
]);
