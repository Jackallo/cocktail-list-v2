import { useSwipeable } from "react-swipeable";
import { CocktailInfo } from "./Cocktail";
import "./InfoCard.css";

interface Props {
  isCardShown: boolean;
  drink: CocktailInfo;
  onHideCard: () => void;
}

export function InfoCard(props: Props) {
  const handlers = useSwipeable({
    onSwipedDown: () => props.onHideCard(),
    preventDefaultTouchmoveEvent: true,
    delta: 36,
    trackTouch: true,
    rotationAngle: 0,
  });
  return (
    <div className={props.isCardShown ? "card swiped" : "card"} {...handlers}>
      <div className="upper-card">
        <div className="stats">
          <h1>{props.drink.name}</h1>
          <h2>{props.drink.ingredients}</h2>
        </div>
        <div className="glass-container">
          <div>
            <img src={props.drink.glass} alt="Glass" />
          </div>
          <h3>{props.drink.style}</h3>
        </div>
      </div>
      <div className="bottom-card">
        <p className="description">{props.drink.description}</p>
      </div>
    </div>
  );
}
