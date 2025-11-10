export interface FormatDateOptions {
  locale?: string;
  format?: 'short' | 'long' | 'full' | 'relative';
  timezone?: string;
}

export interface CurrencyOptions {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

