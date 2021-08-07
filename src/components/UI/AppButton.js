import classes from './AppButton.module.css';

const AppButton = (props) => {
    return (
        <button className={classes.AppButton} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default AppButton;
