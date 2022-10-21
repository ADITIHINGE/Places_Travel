import React from 'react';
import styles from './cards.module.css';

const Cards = (props) => {
  let {place} = props;
  return (
    <div className= {styles.card} >
      <img src={place.img} alt='place' className={styles.img} />
      <p><b>{place.Title}</b></p>
      <p><i>{place.Description}</i></p>
      <p> <h4> Price: ${place.Price} </h4></p>
      <p><h4> Rate: {place.Rating}/5 </h4></p> 
      <button className={styles.btn}>Book Now</button>
    </div>
  )
}

export default Cards;