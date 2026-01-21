import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge';

export const connector = (...inputs) => {
  return twMerge(clsx(inputs));
}