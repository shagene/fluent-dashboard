import { useMediaQuery } from "react-responsive";
import "./App.css";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isonBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isonTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isonPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isonRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p> You are on a desktop or laptop</p>}
      {isonBigScreen && <p>You have a huge screen</p>}
      {isonTabletOrMobile && <p> You are on a tablet or using mobile </p>}
      <p>Your are in {isonPortrait ? "portrait" : "landscape"} orientation</p>
      {isonRetina && <p>You are retina</p>}
    </div>
  );
}

export default App;
