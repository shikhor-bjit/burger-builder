import './Logo.css';
import React from 'react';
import LogoImg from '../../assets/images/app-logo.png';

const Logo = props => {
    return (
        <div className={'Logo'} style={{height: props.height}}>
            <img src={LogoImg} alt="BurgerLogo"/>
        </div>
    );
};

Logo.propTypes = {};

export default Logo;