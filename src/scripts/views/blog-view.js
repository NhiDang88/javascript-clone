export default class DestinationView {
  constructor() {}

  // Function to display random country
  displayRandomDestination = async (destinations) => {
    if (destinations.length === 0) {
      console.log("No destinations found in the database.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];

    const destinationNameElement = document.getElementById("destinationName");
    destinationNameElement.textContent = randomDestination.country;
  };

  // Function to display a list of destinations
  displayDestinationList = (blogs) => {
    const destinationList = document.getElementById("destinationList");
    destinationList.innerHTML = ""; // Clear previous list items

    blogs.forEach((blog) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <img src="${blog.image}" alt="${blog.country}" />
          <h3>${blog.country}</h3>
        `;
      destinationList.appendChild(listItem);
    });
  };

  // Function to display a filtered list of destinations based on category
  // displayFilteredDestinations = (filteredDestinations) => {
  //   this.displayDestinationList(filteredDestinations);
  // };

  render = (filter) => {
    const category = document.getElementById("category");

    category.addEventListener("change", (event) => {
      const element = event.target;
      const value = element.value;

      filter(value);
    });
  };

  init = (controller) => {
    category.addEventListener("change", (event) => {
      const element = event.target;
      const value = element.value;

      controller.getCate(value);
    });
  };
}
