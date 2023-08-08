import { getDestinationListService } from "../services/destination-service";

export default class DestinationModel {
  constructor() {}

  getDestinationListModel = async () => {
    const response = await getDestinationListService();
    return response;
  };
}
