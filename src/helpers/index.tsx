import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classMerge = (...classes: ClassValue[]) => twMerge(clsx(classes));
