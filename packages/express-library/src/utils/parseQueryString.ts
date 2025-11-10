export const parseQueryString = (queryString: string): Record<string, string> => {
  const params: Record<string, string> = {};
  
  if (!queryString) return params;

  const pairs = queryString.replace(/^\?/, '').split('&');
  
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : '';
    }
  }
  
  return params;
};

