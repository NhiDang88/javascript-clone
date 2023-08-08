export default class DestinationView {
  constructor() {}

  // Function to display a list of destinations
  displayDestinationList = (destinations) => {
    const destinationList = document.getElementById("destinationList");
    destinationList.innerHTML = ""; // Clear previous list items

    destinations.forEach((destination) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <img src="${destination.logo}" alt="${destination.name}" />
          <h3>${destination.name}</h3>
        `;
      destinationList.appendChild(listItem);
    });

  };

  // Function to display a filtered list of destinations based on category
  // displayFilteredDestinations = (filteredDestinations) => {
  //   this.displayDestinationList(filteredDestinations);
  // };

  render = (filter) => {
    const category = document.getElementById('category') 

    category.addEventListener('change', (event) => {
        const element = event.target
        const value = element.value

       filter(value);
    })

  }
}
