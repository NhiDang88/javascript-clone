export const getDestinationListService = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/blog`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addNewContentService = async (newContent) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContent),
    });

    if (!response.ok) {
      throw new Error("Failed to add new content");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};