const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const bono = async (options) => {
  const { url, ...restOptions } = { ...defaultOptions, ...options, headers: { ...defaultOptions.headers, ...options.headers } };
  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// 컴파운드 컴포넌트
bono.get = (url, options) => bono({ url, ...options });
bono.post = (url, body, options) =>
  bono({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
bono.put = (url, body, options) =>
  bono({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
bono.patch = (url, body, options) =>
  bono({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
bono.delete = (url, options) =>
  bono({
    method: 'DELETE',
    url,
    ...options,
  });

const getBono = await bono({
  url: END_POINT,
  // body: { name: 'bono🦭', age: 10 },
});
