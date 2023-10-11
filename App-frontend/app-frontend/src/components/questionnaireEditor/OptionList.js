import Card from "../helper-functions/Card";
const OptionList = (props) => {
    const options = props.options;
    return <div>
        {
            options.map((option, index) => {
                return (<Card key={index}>
                    <p>{option}</p>
                </Card>)
            })
        }
    </div>;
};

export default OptionList;