import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle base path for assets
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/lerevena' : '';
  return `${basePath}${path}`;
}
