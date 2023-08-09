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
