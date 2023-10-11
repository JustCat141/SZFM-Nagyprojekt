import "../../styles/Chart.css";
import { RandomColor } from "./RandomColor";


const Chart = (props) => {
  const answerText = props.answerText;
  const answerNumber = props.answerNumber;
  const maxWidth = 40;
  const actualWidth = (answerNumber * 100) / maxWidth; // Calculate actual width

  const chartStyle = {
    maxWidth: `${actualWidth}rem`, // Set maxWidth dynamically
    height: "1rem",
//    backgroundColor: RandomColor(),
  };

  console.log(actualWidth);

  return (
    <div className="Chart" >
        <div style={chartStyle}>

        </div>


    </div>
  );
};

export default Chart;
