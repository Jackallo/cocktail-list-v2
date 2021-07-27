import { useSwipeable } from "react-swipeable";
import "./Cocktail.css";
import icon from "./1swipe-up-arrow.svg";

export interface CocktailInfo {
  name: string;
  summary: string;
  ingredients: string;
  description: string;
  glass: string;
  style: string;
  image: string;
  alcohol: number;
  id: number;
}

interface Props {
  onShowCard: () => void;
  drink: CocktailInfo;
}

export function Cocktail(props: Props) {
  const handlers = useSwipeable({
    onSwipedUp: () => props.onShowCard(),
    preventDefaultTouchmoveEvent: true,
    delta: 36,
    trackTouch: true,
    rotationAngle: 0,
  });
  return (
    <div
      style={{ backgroundImage: `url(${props.drink.image})` }}
      className="cocktail"
    >
      <div className="film"></div>
      <div className="overlay-container">
        <div className="overlay">
          <h1>&mdash; {props.drink.name} &mdash;</h1>
          <h2>{props.drink.summary}</h2>
        </div>
        <div className="swipe-area" {...handlers}>
          <img className="swipe-img" src={icon} alt="Icon" />
          <div>
            <button className="show-more">#DimmiDiPiù</button>
          </div>
        </div>
      </div>
    </div>
  );
}
