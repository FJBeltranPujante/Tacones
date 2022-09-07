import { data } from "./Data"
import Card from "./Card";
import './Main.css';

const Main = () => {
  return (
    <section className="main__section">
      <div className='nav__extra'>
      <p>Free Delivery and Return</p>
      </div>
      <div className="main__container"> 
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

export default Main;
