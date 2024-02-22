"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { usePathname } from 'next/navigation'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faCog, faStar);

import logo from "../../../public/assets/logo.png";
import image from "../../../public/assets/sidebar.avif";

const Sidebar = () => {
  const router = usePathname();


  return (
    <div className="sidebar">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="nav_content">
        <ul>
          <li className={`link ${router === '/' ? 'active' : ''}`} >
            <FontAwesomeIcon icon={faHome} />
            <Link href="/#">Home</Link>
          </li>
          <li className={`link ${router === '/hardware' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faCog} />
            <Link href="/hardware">Hardware</Link>
          </li>
          <li className={`link ${router === '/solutions' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faStar} />
            <Link href="/solutions">Solutions</Link>
          </li>
        </ul>
        <div className="sidebar-img">
          <Image src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
