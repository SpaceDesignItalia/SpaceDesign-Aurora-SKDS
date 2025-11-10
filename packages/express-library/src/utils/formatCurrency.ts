import { CurrencyOptions } from './types';

export const formatCurrency = (
  amount: number,
  options: CurrencyOptions = {}
): string => {
  const {
    locale = 'it-IT',
    currency = 'EUR',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
};

