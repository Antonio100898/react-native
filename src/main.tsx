import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useAppDispatch } from "./redux/hooks/useAppDispatch";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import AppButton from "./components/app-button/app-button";
import {
  nextPage,
  prevPage,
  setCategoryModalOpen,
  setCurrentImage,
  setImageModalOpen,
  setImages,
  setIsFetching,
  setPagesCount,
} from "./redux/slices/app-slice";
import { color_main, color_white } from "./variables";
import CategoryModal from "./components/modal/category-modal";
import { useEffect } from "react";
import { ApiService } from "./services/api-service";
import ImagesList from "./components/images-list/images-list";
import ImageModal from "./components/modal/image-modal";
import Loader from "./components/loader/loader";
import PagesDisplay from "./components/pages-display/pages-display";
import { Divider } from "react-native-paper";

//Main screen with images render and buttons
const Main = () => {
  const service: ApiService = new ApiService();

  const dispatch = useAppDispatch();
  const {
    category,
    images,
    page,
    pagesCount,
    isCategoryModalOpen,
    isImageModalOpen,
    currentImage,
    isFetching,
  } = useAppSelector((state) => state.app);

  //go to prev page
  const onPrevPageClick = () => {
    page > 1 && dispatch(prevPage());
  };

  //go to next page
  const onNextPageClick = () => {
    page < pagesCount && dispatch(nextPage());
  };

  //open modal to choose category
  const openCategoryModal = () => {
    dispatch(setCategoryModalOpen(true));
  };

  const closeCategoryModal = () => {
    dispatch(setCategoryModalOpen(false));
  };

  //open modal with image info
  const openImageModal = (id: number) => {
    const image = images.find((i) => i.id === id);
    if (image) {
      dispatch(setCurrentImage(image));
      dispatch(setImageModalOpen(true));
    }
  };

  const closeImageModal = () => {
    dispatch(setImageModalOpen(false));
  };

  //function whitch fetches images array and dispatches them to the redux store
  const fetchImages = async () => {
    dispatch(setIsFetching(true));

    const response = await service.getImages(category, page);
    if (!response?.data) {
      console.log("error");
    } else {
      dispatch(setImages(response.data));
      dispatch(setPagesCount(response.pagesCount));

      console.log("success");
    }
    dispatch(setIsFetching(false));
  };

  //fetch new images if category / page chang has been requested by user
  useEffect(() => {
    fetchImages();
  }, [category, page]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar />

      <View style={styles.container}>
        <View style={styles.buttons_container}>
          <AppButton
            disabled={!(page > 1)}
            onPress={onPrevPageClick}
            text="Prev"
          />
          <AppButton
            onPress={openCategoryModal}
            disabled={isCategoryModalOpen}
            text="Category"
          />
          <AppButton
            disabled={!(page < pagesCount)}
            onPress={onNextPageClick}
            text="Next"
          />
        </View>
        <PagesDisplay currentPage={page} pagesCount={pagesCount} />

        <Divider style={styles.divider} />

        <Text style={styles.header}>
          Current category: {category === "" ? "all" : category}
        </Text>
        <View style={styles.content_view}>
          {images.length > 0 && !isFetching ? (
            <ImagesList onImageClick={openImageModal} images={images} />
          ) : (
            <Loader />
          )}
        </View>

        {isCategoryModalOpen && (
          <CategoryModal
            onClose={closeCategoryModal}
            open={isCategoryModalOpen}
          />
        )}
        {currentImage && isImageModalOpen && (
          <ImageModal
            image={currentImage}
            onClose={closeImageModal}
            open={isImageModalOpen}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { backgroundColor: color_white },
  container: {
    height: "100%",
    paddingTop: 10,
  },
  buttons_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  content_view: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    marginTop: 20,
  },
  divider: { backgroundColor: color_main, height:1 },
});

export default Main;
