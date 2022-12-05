import React from 'react';
import styles from '../styles/utils.module.css'
import Link from "next/link";
import Image from "next/image";
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import mail from '../public/images/mail.png'

const Footer = props => {
    const info = [
        {
            name: "LinkedIn",
            link: 'https://www.linkedin.com/in/anwarhossain1/',
            icon: linkedin
        },
        {
            name: "Github",
            link: 'https://github.com/anwarhossain1',
            icon: github
        },
        {
            name: "Mail",
            link: 'mailto:irishkhan33@gmail.com',
            icon: mail
        }]
    return (
        <div className={styles.flex}>
            <h3>Contact with me</h3>
           <div className={styles.contactMeContainer}>
               {
                   info?.map((item,index)=>{
                       return  <div className={styles.linkContainer} key={index}><Image
                           priority
                           src={item?.icon}
                           height={30}
                           width={30}
                           alt={item?.name}
                       /> <Link href={item?.link}
                                style={{textDecoration: 'none', color: 'black'}}>{item?.name}</Link></div>
                   })
               }
           </div>
        </div>
    );
};


export default Footer;