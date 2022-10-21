import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
       <div className={styles.nav}>
       <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMGWSREJ-CjBSzTBjzYcCtOh0j5wzPbjlfQI-DODYfvD1xT9gPBzlE5rxE8glOxS79XU&usqp=CAU"></img>
        <p><a href='#'>Home</a></p>
        <p><a href='#'>About</a></p>
        <p><a href='#'>Trips</a></p>
       
        <button className={styles.btn1}> SignIn </button>
    </div> 
   
  )
}

export default Navbar