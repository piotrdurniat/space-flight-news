import { FC } from "react";
import CountDown from "react-native-countdown-component";

interface Props {
  time: number;
}

const CountDownTimer: FC<Props> = ({ time }) => {
  const timeInSec = Math.round(time / 1000);
  return (
    <CountDown
      until={timeInSec}
      size={18}
      digitStyle={{ backgroundColor: "none" }}
      showSeparator
      separatorStyle={{ marginLeft: -30, marginRight: -30 }}
    />
  );
};

export default CountDownTimer;
