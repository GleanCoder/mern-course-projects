import { useState } from "react";
function Card(id, name, info, image, price, removeTour) {
  let Description = `${info.substring(0, 200)}...`;
  const [readmore, setRead] = useState(false);
  function handleReadMore() {
    setRead(!readmore);
  }

  return (
    <div className="card">
      <img src={image} alt="Card Image" />
      <div className="card-info">
        <div className="tour-info">
          <p className="tour-price">{price}</p>
          <h4 className="tour-place">{name}</h4>
        </div>
        <div className="Description">
          {Description}
          <span className="read-more" onClick={handleReadMore}>
            {readmore ? "Show Less" : "Show More"}
          </span>
        </div>
      </div>
      <button className="red-btn" onClick={() => removeTour(id)}>
        Not Intrestead
      </button>
    </div>
  );
}
export default Card;
