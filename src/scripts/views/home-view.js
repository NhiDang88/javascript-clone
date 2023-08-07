// Function to display a random destination name
async function displayRandomDestination(destinations) {
  if (destinations.length === 0) {
    console.log('No destinations found in the database.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * destinations.length);
  const randomDestination = destinations[randomIndex];

  const destinationNameElement = document.getElementById('destinationName');
  destinationNameElement.textContent = randomDestination.name;
}

// Fetch data from JSON Server and display random destination
async function fetchDataAndDisplay() {
  try {
    const response = await fetch('http://localhost:3000/destination');
    const data = await response.json();
    displayRandomDestination(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Display a random destination name when the page loads
export {fetchDataAndDisplay};
