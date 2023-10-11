import classes from "../../styles/Chart.module.css";
import { RandomColor } from "./RandomColor"; // Import the getRandomColor function

const Chart = (props) => {
  const answerNumber = props.answerNumber;
  const maxWidth = 40;
  const actualWidth = (answerNumber * 100) / maxWidth; // Calculate actual width

  const chartStyle = {
    maxWidth: `${actualWidth}rem`, // Set maxWidth dynami   cally
  };

  const fill = {
    maxWidth: `${actualWidth}rem`,
    height: "1rem",
    backgroundColor: RandomColor(), // Generate a random background color
  };

  return (
    <div className={classes["Chart"]}>
      <div className={classes["chart-box-full"]} style={{ maxWidth: `${maxWidth}rem`, height: "2rem"}}>
        <div className={classes["chart-box-partial"]} style={chartStyle}>
          <div className={classes["chart-box-filled"]} style={fill}></div>
          <div className={classes["chart-text-box"]}>
            <p className={classes["chart-text"]}>0</p>
            <p className={classes["chart-text"]}>{answerNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
