import {DisplayRandom} from "./views/home-view";
DisplayRandom();

import DestinationModel from "./models/destination-model";
import DestinationView from "./views/destination-view";
import DestinationController from "./controllers/destination-controller";

const destinationModel = new DestinationModel()
const destinationView = new DestinationView()
const destinationController = new DestinationController(destinationModel, destinationView)

destinationController.init()