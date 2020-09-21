import axios from 'axios';

const host = 'https://api-test.carta.is';
const port = 443;
export const API_BASE_URL = port ? `${host}:${port}` : host;

const release = process.env.RELEASE;

const commonHeaders = {
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  pragma: 'no-cache',
  'x-carta-frontend-version': release,
};

export const formDataContenType = { 'Content-Type': 'multipart/form-data' };

export const getQuery = (query) => {
  if (!query) return '';

  let queries = '';
  for (const [key, value] of Object.entries(query)) {
    if (queries == '') {
      queries += `?${key}=${value}`;
    } else {
      queries += `&${key}=${value}`;
    }
  }

  return queries;
};

export const onRequestGet = async ({ url, query, headers }) => {
  try {
    const { status, data } = await onPromiseGet({ url, query, headers });
    return { status, data };
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return { status, data };
    }

    return {
      status: 500,
      data: 'Server Internal Error',
    };
  }
};

export const onPromiseGet = ({ url, query, headers }) => {
  return new Promise<{ status; data }>((resolve, reject) => {
    const QUERY = getQuery(query);
    const URL = API_BASE_URL + url + QUERY;

    const request = axios.get(URL, {
      ...commonHeaders,
      ...headers,
    });

    request
      .then((response) => {
        const { status, data } = response;
        resolve({ status, data });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const onRequestPost = async ({
  url,
  query = '',
  params,
  headers = '',
}) => {
  try {
    const { status, data } = await onPromisePost({
      url,
      query,
      params,
      headers,
    });
    return { status, data };
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return { status, data };
    }

    return {
      status: 500,
      data: 'Server Internal Error',
    };
  }
};

export const onPromisePost = ({ url, query, params, headers }) => {
  return new Promise<{ status; data }>((resolve, reject) => {
    const QUERY = getQuery(query);
    const URL = API_BASE_URL + url + QUERY;

    const request = axios.post(URL, params, {
      ...commonHeaders,
      ...headers,
    });

    request
      .then((response) => {
        const { status, data } = response;
        resolve({ status, data });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
