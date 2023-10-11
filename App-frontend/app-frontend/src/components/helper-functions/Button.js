import "../../styles/Button.css";
export const Button = props => {
    return <div className="button-box">
        <button className="button-text" onClick={props.func}>{props.text}</button>
    </div>
};

