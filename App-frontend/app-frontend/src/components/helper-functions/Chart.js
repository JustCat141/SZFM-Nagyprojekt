import classes from "../../styles/Chart.module.css";
import { RandomColor } from "./RandomColor"; // Import the getRandomColor function

const Chart = (props) => {
  const answerNumber = props.answerNumber;
  const maxWidth = 40;
  const actualWidth = (answerNumber * 100) / maxWidth; // Calculate actual width

  const chartStyle = {
    maxWidth: `${actualWidth}rem`, // Set maxWidth dynamically
  };

  const fill = {
    maxWidth: `${actualWidth}rem`,
    height: "1rem",
    backgroundColor: RandomColor(), // Generate a random background color
  };

  return (
    <div className="Chart">
      <div style={{ maxWidth: `${maxWidth}rem`, height: "2rem"}}>
        <div style={chartStyle}>
          <div className="fill" style={fill}></div>
          <div >
            <p>0</p>
            <p>{answerNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
