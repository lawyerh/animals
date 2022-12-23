import horse from "./../style/horse.svg";
import gator from "./../style/gator.svg";
import cow from "./../style/cow.svg";
import dog from "./../style/dog.svg";
import cat from "./../style/cat.svg";
import bird from "./../style/bird.svg";

const svgMap = {
  horse,
  gator,
  cow,
  dog,
  cat,
  bird,
};

export default function AnimalCard({ type }) {
  return (
    <div className="card">
      <div className="card__photo-container">
        <img src={svgMap[type]} alt={type} className="card__photo" />
      </div>
      <p className="card__title">{type}</p>
    </div>
  );
}
