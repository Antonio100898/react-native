import { IImage } from "./IImage";

//response from nodejs server
export interface IImagesReponse {
  data: IImage[];
  page: number;
  pagesCount: number;
}
