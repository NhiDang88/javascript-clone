import DestinationModel from "./models/blog-model";
import DestinationView from "./views/blog-view";
import DestinationController from "./controllers/blog-controller";

const destinationModel = new DestinationModel();
const destinationView = new DestinationView();
const app = new DestinationController(destinationModel, destinationView);

app.init();

// const randomNumber = () => {
//   const random = Math.random();

//   return random;
// };

// const checkEven = (number) => {
//   if (number % 2 === 0) return true;

//   return false;
// };

// /**
//  * A -> {
//  *  cv1: random
//  *  cv2: check is even
//  *
//  * }
//  */

// const a = () => {
//   const random = randomNumber();
//   const isEven = checkEven(2);

//   console.log(isEven);
// };

/**
 * MODELS
 */

// class TodoModel {

// }

/**
 * VIEWS
 */

// class TodoView {

// }

/**
 * CONTROLLERS
 */

// class TodoController {

// }

//   render = (filter) => {
  //     const category = document.getElementById("category");

  //     category.addEventListener("change", (event) => {
  //       const element = event.target;
  //       const value = element.value;

  //       filter(value);
  //     });
  //   };

  //   init = (controller) => {
  //     category.addEventListener("change", (event) => {
  //       const element = event.target;
  //       const value = element.value;

  //       controller.getCate(value);
  //     });
  //   };
