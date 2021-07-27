import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Cocktail } from "./components/Cocktail";
import { InfoCard } from "./components/InfoCard";
import list from "./list.json";

export function App() {
  const [isCardShown, setIsCardShown] = useState(false);
  return (
    <Carousel
      infiniteLoop
      emulateTouch
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      autoPlay={false}
      showThumbs={false}
      interval={86400000}
      swipeScrollTolerance={50}
      preventMovementUntilSwipeScrollTolerance
      onChange={() => setIsCardShown(false)}
    >
      {list.map((cocktail) => (
        <>
          <div>
            <Cocktail
              onShowCard={() => setIsCardShown(true)}
              key={cocktail.id}
              drink={cocktail}
            />
          </div>
          <div className="card-style">
            <InfoCard
              isCardShown={isCardShown}
              onHideCard={() => setIsCardShown(false)}
              key={cocktail.id}
              drink={cocktail}
            />
          </div>
        </>
      ))}
    </Carousel>
  );
}
