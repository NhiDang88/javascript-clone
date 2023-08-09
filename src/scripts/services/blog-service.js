const request = async (method, data) => {
  const url = `${process.env.REACT_APP_API_URL}/blog`;
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(response);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error while sending request");
  }
};

/**
 * Get list destination
 * @returns {Function}
 */
export const getDestinationListService = () => {
  return request("GET");
};