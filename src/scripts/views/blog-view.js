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
  displayFilteredDestinations = (filteredDestinations) => {
    this.displayDestinationList(filteredDestinations);
  };

  // Function to display blog list
  displayBlogList = (blogs) => {
    const blogList = document.getElementById("blogList");
    blogList.innerHTML = "";

    blogs.forEach((blog) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class="blog-frame">
        <div class="blog-content">
          <h2 class="blog-title">${blog.title}</h2>
          <h3 class="blog-subtitle">${blog.country}</h3>
         </div>
        <img class="blog-img" src="${blog.image}" alt="${blog.country}" />
      </div>
        `;
      blogList.appendChild(listItem);
    });
  };

  // Function to display the popup
  displayPopup = () => {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "block";
  };

  // Function to close the popup
  closePopup = () => {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
  };
}
