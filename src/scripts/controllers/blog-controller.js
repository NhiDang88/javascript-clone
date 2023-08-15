export default class DestinationController {
  constructor(destinationModel, destinationView) {
    this.destinations = [];
    this.destinationModel = destinationModel;
    this.destinationView = destinationView;
  }

  init = () => {
    // try {
    //   const response = await this.destinationModel.getDestinationListModel();

    //   this.destinations = response;
    //   console.log(response);
    // } catch (error) {}

    this.handleGetDestinationList();
    this.handleGetDestinationRandom();
    this.handleCategoryChange();
    this.handleGetBlogList();

    this.handleOpenPopup();
    this.handleClosePopup();
    this.handleAddContent();
  };

  handleGetDestinationRandom = async () => {
    try {
      const response = await this.destinationModel.getDestinationListModel();
      this.destinationView.displayRandomDestination(response);
    } catch (error) {
      console.error("Error displaying list:", error);
      alert(error_display_list);
    }
  };

  handleGetDestinationList = async () => {
    try {
      const response = await this.destinationModel.getDestinationListModel();
      this.destinationView.displayDestinationList(response);
    } catch (error) {
      console.error("Error display list");
    }
  };

  handleCategoryChange = () => {
    const categoryDropdown = document.getElementById("category");
    categoryDropdown.addEventListener("change", async () => {
      try {
        const selectedCategory = categoryDropdown.value;
        const response = await this.destinationModel.getDestinationListModel();

        if (selectedCategory === "All") {
          this.destinationView.displayDestinationList(response);
        } else {
          const filteredDestinations = response.filter(
            (destination) => destination.category === selectedCategory
          );
          this.destinationView.displayFilteredDestinations(
            filteredDestinations
          );
        }
      } catch (error) {
        console.error("Error handling category change:", error);
        this.destinationView.displayError(
          "An error occurred while filtering destinations."
        );
      }
    });
  };

  // Read
  handleGetBlogList = async () => {
    try {
      const response = await this.destinationModel.getDestinationListModel();
      this.destinationView.displayBlogList(response);
    } catch (error) {
      console.error("Error display list");
    }
  };

  handleOpenPopup = () => {
    const openPopupBtn = document.getElementById("openPopupBtn");
    openPopupBtn.addEventListener("click", () => {
      this.destinationView.displayPopup();
    });
  };

  handleClosePopup = () => {
    const closePopupBtn = document.getElementById("closePopupBtn");
    closePopupBtn.addEventListener("click", () => {
      this.destinationView.closePopup();
    });
  };

  // CREATE

  handleAddContent = () => {
    const addContentBtn = document.getElementById("addContentBtn");

    addContentBtn.addEventListener("click", async () => {
      // Get new content data from input fields
      const newTitle = document.getElementById("newTitle").value;
      const newCountry = document.getElementById("newCountry").value;
      const newCategory = document.getElementById("newCategory").value;
      const newImage = document.getElementById("newImage").value;

      const newContent = {
        title: newTitle,
        country: newCountry,
        category: newCategory,
        image: newImage,
      };

      try {
        // Call the addNewContentService function
        await addNewContentService(newContent);

        // Refresh the destination list or perform other necessary actions
        this.handleGetDestinationList();
      } catch (error) {
        console.error("Error adding content:", error);
      }
    });
  };

  // handleGetDestinationList = async () => {
  //   try {
  //     const filterData = this.destinations.filter((data) => {
  //       const { category } = data;

  //       return category === "Asia";
  //     });

  //     this.destinationView.displayDestinationList(filterData);
  //     this.destinationView.render((value) => {
  //       console.log(value);
  //     });

  //     this.destinationView.init(this);
  //   } catch (error) {
  //     console.error("Error display list");
  //   }
  // };

  // filterDestinations = (category) => {
  //   console.log("Controller", category);
  // };
}
