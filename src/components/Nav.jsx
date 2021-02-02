import React, { useEffect, useState } from 'react'
import '../css/Nav.css'


function Nav() {


        const [show , handleShow] = useState(false)

        useEffect(() => {
            window.addEventListener("scroll", () => {
              if (window.scrollY > 100) {
                handleShow(true);
              } else {
                handleShow(false);
              }
            });
            return () => {
              window.removeEventListener("scroll");
            };
          }, []);







    // let navSection = document.querySelector('.nav');

    // let options = {
    //     rootMargin: '0px 0px -400px 0px'

    // }



    // const sectionObserver = new IntersectionObserver((entries)=>{
    //         if(entries[0].isIntersecting){
    //             navSection.classList.add('nav__black')
    //         }

    // },options)








    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="avatar"
      />
        </div>
    )
}

export default Nav
