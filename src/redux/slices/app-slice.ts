import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../models/category";
import { IImage } from "../../models/IImage";

interface IInitialState {
  images: IImage[];
  category: Category;
  page: number;
  pagesCount: number;
  isCategoryModalOpen: boolean;
  isImageModalOpen: boolean;
  currentImage: IImage | null;
  isFetching: boolean;
}
const initialState: IInitialState = {
  images: [],
  category: Category.NONE,
  page: 1,
  pagesCount: 1,
  isCategoryModalOpen: false,
  isImageModalOpen: false,
  currentImage: null,
  isFetching: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    prevPage(state) {
      state.page -= 1;
    },
    setCategory(state, actions: PayloadAction<Category>) {
      state.category = actions.payload;
      state.page = 1;
    },
    setImages(state, actions: PayloadAction<IImage[]>) {
      state.images = actions.payload;
    },
    setPagesCount(state, action: PayloadAction<number>) {
      state.pagesCount = action.payload;
    },
    setCategoryModalOpen(state, action: PayloadAction<boolean>) {
      state.isCategoryModalOpen = action.payload;
    },
    setImageModalOpen(state, action: PayloadAction<boolean>) {
      state.isImageModalOpen = action.payload;
    },
    setCurrentImage(state, action: PayloadAction<IImage | null>) {
      state.currentImage = action.payload;
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export const {
  nextPage,
  prevPage,
  setCategory,
  setImages,
  setPagesCount,
  setCategoryModalOpen,
  setCurrentImage,
  setImageModalOpen,
  setIsFetching,
} = appSlice.actions;
export default appSlice.reducer;
