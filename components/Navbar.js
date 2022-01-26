import Image from 'next/image'
import React from 'react'
import styles from "../styles/Navbar.module.css"
import { useSelector } from 'react-redux'
import Link from 'next/link';
function Navbar() {

    const quantity = useSelector(state=>state.cart.quantity);
    return (
        <div className={styles.container}>
           <div className={styles.item}>
           <div className={styles.callButton}>
               <Image src="/img/telephone.png" width="32" height="32"/>
           </div>
           <div className={styles.texts}>
           <div className={styles.text}>ORDER NOW!</div>
           <div className={styles.text}>085 345 765</div>
           </div>

           </div>
           <div className={styles.item}>
               <ul className={styles.list}>
                   <li className={styles.listItem}>HomePage</li>
                   <li className={styles.listItem}>Products</li>
                   <li className={styles.listItem}>Menu</li>
                   <Image src="/img/logo.png" width="160px" height="69px"/>
                   <li className={styles.listItem}>Events</li>
                   <li className={styles.listItem}>Blog</li>
                   <li className={styles.listItem}>Contact</li>
                 
               </ul>
           </div>
           <Link href={"/cart"}  passhref>
           <div className={styles.item}>
               <div className={styles.cart}>
               <Image src="/img/cart.png" width="30px" height="30px"/>
               <div className={styles.counter}>{quantity}</div>
               </div>
           </div>
           </Link>

        </div>
    )
}

export default Navbar
