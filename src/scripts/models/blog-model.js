import { getDestinationListService } from "../services/blog-service";

export default class DestinationModel {
  constructor() {}

  getDestinationListModel = async () => {
    const response = await getDestinationListService();
    return response;
  };
}
