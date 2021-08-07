import { useContext, Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

import CartContext from '../../data/CartContext';

const portalElement = document.getElementById('overlays');
const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
};
const Overlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = (props) => {
    const cartCtx = useContext(CartContext);   
    if (!cartCtx.isCartVisible){ return null; } 
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop></Backdrop>, portalElement)}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </Fragment>
    );    
};

export default Modal;