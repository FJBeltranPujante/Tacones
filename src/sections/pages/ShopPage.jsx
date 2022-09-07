import { data } from "../components/Data";
import Card from "../components/Card";
import './ShopPage.css';

export const ShopPage = () => {
  
  return (

    <section className="shop__section">
      <div className="shop__container"> 
      {
      data.map( shoe => (
        <Card
        key={shoe.id} 
        { ...shoe }
        />
      ))
      }</div>
    </section>
  
  );
};


