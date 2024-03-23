import { Platform } from "react-native";
import { Category } from "../models/category";
import { IImagesReponse } from "../models/IImagesReponse";

export class ApiService {
  private BASE_URL: string = "";

  constructor() {
    //to make a call to a server on localhost need to provide proper ip to react native app
    switch (Platform.OS) {
      case "ios":
        // if you use IOS check your ipv4 in cmd by typing 'ipconfig' -> enter
        // replase '192.168.68.106' by your ipv4 in the next code line
        this.BASE_URL = "http://192.168.68.106:5000/images";
        break;
      case "android":
        this.BASE_URL = "http://10.0.2.2:5000/images";
        break;
      default:
        this.BASE_URL = "http://localhost:5000/images";
        break;
    }
  }

  //fetch images from node express server by category and page
  public async getImages(
    category: Category,
    page: number
  ): Promise<null | IImagesReponse> {
    const url = `?page=${page}${category === "" ? "" : "&q=" + category}`;
    try {
      const response = await fetch(`${this.BASE_URL}/${url}`);

      if (response.status !== 200) {
        console.log(response.status);
        return null;
      } else {
        return response.json();
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
