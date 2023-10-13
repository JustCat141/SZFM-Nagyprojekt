import "../../styles/Card.css";
const Error = (props) => {
    return (
        <div className="error">
            <p className="error-text">
            {props.text}
            </p>
        </div>
    );
}

export default Error;