import classes from './AppInput.module.css';

const AppInput = (props) => {
    return (
        <div className={classes.AppInput}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}></input>
        </div>
        
    );
};

export default AppInput;
