import "./App.css";
import BrandsAndNewsletter from "./component/BrandsAndNewsletter/BrandsAndNewsletter";
import EyeglassesCategories from "./component/EyeglassesCategories/EyeglassesCategories";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import ImageSlider from "./component/ImageSlider/ImageSlider";
import NavigationMenu from "./component/NavigationMenu/NavigationMenu";
import Products from "./component/Products/Products";
import TopBar from "./component/TopBar/TopBar";

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Header></Header>
      <NavigationMenu></NavigationMenu>
      <ImageSlider></ImageSlider>
      <EyeglassesCategories></EyeglassesCategories>
      <Products></Products>
      <BrandsAndNewsletter></BrandsAndNewsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
