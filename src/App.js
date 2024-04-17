// import React from "react";
import ScrollIndicator from "components/scroll-indicator";
import "./App.css";
import Accordion from "./components/accordion";
import LightDarkMode from "./components/dark-mode";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-button";
import QRCodeGenerator from "./components/qr-code";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import React from "react";

function App() {
  return (
    <div className='App'>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
    </div>
  );
}

export default App;
