import './Modal.css';
import React from 'react';
import Aux from "../../hoc/Aux";
import PropTypes from 'prop-types';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
    const clicked = props.clicked;
    const shouldShow = props.show;
    return (
        <Aux>
            <Backdrop show={shouldShow} clicked={clicked}/>
            <div className={'Modal'}
                 style={{
                     transform: shouldShow ? 'translate(0)' : 'translateY(-100vh)'
                 }}>
                {props.children}
            </div>
        </Aux>
    );
};

Modal.propTypes = {
    show: PropTypes.bool
};
Modal.defaultProps = {
    show: false
}

export default Modal;