const handleError = async response => {
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Fetch Failed');
  }
};

const fetchData = async url => {
  const response = await fetch(url);
  return handleError(response);
};

export { fetchData };
