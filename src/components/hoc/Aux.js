import React from 'react';

const Aux = props => {
    return (
        <div className={'Aux'}>
            {props.children}
        </div>
    );
};

Aux.propTypes = {};

export default Aux;