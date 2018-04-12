let prevTimePassed = new Date().getTime();

const utils = {
  getRandom: num => Math.ceil(Math.random() * num),
  hasTimePassed: time => {
    const currCalcTime = new Date().getTime();
    if (currCalcTime - prevTimePassed > time) {
      prevTimePassed = currCalcTime;
      return true;
    }
    return false;
  },
};

module.exports = utils;
