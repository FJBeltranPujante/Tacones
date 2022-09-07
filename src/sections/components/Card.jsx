import "./Card.css";



const Card = (props) => {
  return (
    <div className="card">
      <div className="image__container">
      <img 
                src={`../assets/${props.coverImg}`}  className="card__image" />
      </div>

      <div className="data__container">
        <span className="product__description">{props.description}</span>
        <h4 className="product__name">{props.name}</h4>
        <span className="product__price">{props.price} zł</span>
      </div>
    </div>
  );
};

export default Card;
