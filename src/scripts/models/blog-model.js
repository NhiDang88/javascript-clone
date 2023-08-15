import { getDestinationListService } from "../services/blog-service";

export default class DestinationModel {
  constructor() {}

  getDestinationListModel = async () => {
    const response = await getDestinationListService();
    return response;
  };

  addNewContent = async (newContent) => {
    try {
      const response = await postContentService(newContent); // Replace with your API call
      return response;
    } catch (error) {
      throw error;
    }
  };
}
