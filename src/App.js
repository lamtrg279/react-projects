import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-button";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

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
    </div>
  );
}

export default App;
