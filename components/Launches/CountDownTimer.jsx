import * as React from "react";
import CountDown from 'react-native-countdown-component';

const CountDownTimer = ({ time }) =>  {
  let timeInSec = Math.round(time / 1000);
  return (
      <CountDown
        until={timeInSec}
        size={18}
        digitStyle={{backgroundColor: 'none'}}
        timeLabels={{d: null, h: null, m: null, s: null}}
        showSeparator
        separatorStyle={{   marginLeft: -30 , marginRight: -30}}
      />
    )
};
export default CountDownTimer;