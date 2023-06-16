import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./sidenav.module.css"
import {navData} from "./lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {NavLink} from "react-router-dom";

const SideNav = () => {

    const [open, setopen] = useState(true);


    const toggleOpen = () => {
        setopen(!open);
    }

    return (
        <div className={open?styles.sidenav:styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
                {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
            </button>
            {navData.map(item =>{
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                </NavLink>
            })}
        </div>
);
}

SideNav.propTypes = {};

SideNav.defaultProps = {};

export default SideNav;