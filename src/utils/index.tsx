import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


/**   
 * Constructs a className string by merging multiple class values conditionally.
 * @param classes - An array of class values or strings representing class names.
 * @returns A string representing the merged class names.
 * 
 * clsx for constructing className strings conditionally
 * twMerge function combines multiple class names into a single string
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))