export const formatDate = (date, options = {}) => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;

  if (isNaN(dateObj.getTime())) {
    throw new Error('Data non valida');
  }

  const {
    locale = 'it-IT',
    format = 'short',
    timezone,
  } = options;

  const dateOptions = {};

  switch (format) {
    case 'short':
      dateOptions.year = 'numeric';
      dateOptions.month = '2-digit';
      dateOptions.day = '2-digit';
      break;
    case 'long':
      dateOptions.year = 'numeric';
      dateOptions.month = 'long';
      dateOptions.day = 'numeric';
      break;
    case 'full':
      dateOptions.weekday = 'long';
      dateOptions.year = 'numeric';
      dateOptions.month = 'long';
      dateOptions.day = 'numeric';
      dateOptions.hour = '2-digit';
      dateOptions.minute = '2-digit';
      break;
    case 'relative':
      const now = new Date();
      const diff = now.getTime() - dateObj.getTime();
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) return `${days} ${days === 1 ? 'giorno' : 'giorni'} fa`;
      if (hours > 0) return `${hours} ${hours === 1 ? 'ora' : 'ore'} fa`;
      if (minutes > 0) return `${minutes} ${minutes === 1 ? 'minuto' : 'minuti'} fa`;
      return 'poco fa';
  }

  if (timezone) {
    dateOptions.timeZone = timezone;
  }

  return new Intl.DateTimeFormat(locale, dateOptions).format(dateObj);
};

