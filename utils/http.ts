export const removeEmptyKeys = (obj: Record<string, any>): Record<string, any> => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key];
    }
  });
  return obj;
};

export const objectToQueryString = (obj: Record<string, any>): string => {
  const keyValuePairs = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        for (const val of value) {
          keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
        }
      } else {
        keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  }
  return keyValuePairs.join('&');
};

const AUTH_TOKENS = `_user`;

const BASE_URL = process.env.NEXT_PUBLIC_API || 'https://dev-api-game.beratown.app';

const getUrl = (url: string) => {
  return url.startsWith('http') ? url : `${BASE_URL}${url}`;
};

const handleUpgrade = (result: any) => {
  if (window.location.pathname === '/upgrade') {
    return;
  }
  if (result && result.code === 9000) {
    window.location.replace('/upgrade');
  }
};

const get = async (url: string, query?: Record<string, any>) => {
  const tokens = JSON.parse(window.sessionStorage.getItem(AUTH_TOKENS) || '{}');
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (!query) {
    const res = await fetch(getUrl(url), options);
    const result = (await res.json()) as any;
    handleUpgrade(result);
    return result;
  }

  query = removeEmptyKeys(query);
  const queryStr = objectToQueryString(query);
  const res = await fetch(`${getUrl(url)}?${queryStr}`, options);
  const result = (await res.json()) as any;
  handleUpgrade(result);
  return result;
};

const post = async (url: string, data?: object) => {
  // const tokens = JSON.parse(window.sessionStorage.getItem(AUTH_TOKENS) || '{}');
  const res = await fetch(getUrl(url), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined
  });
  const result = (await res.json()) as any;
  handleUpgrade(result);
  return result;
};


const asyncFetch = async (url: string, options?: object) => {
  const response = await fetch(url, options);
  return await response.json();
};



export { get, post, AUTH_TOKENS, asyncFetch };
