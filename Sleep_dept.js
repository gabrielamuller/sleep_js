/* In this project we'll calculate if you're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else {
    return 8;
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};

console.log('Your ideal sleep hours: ' + getIdealSleepHours());
console.log('Your actual sleep hours: ' + getActualSleepHours());

function calculateSleepDept() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
    
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed!');
  } else {
    console.log('You need to get ' + (idealSleepHours - actualSleepHours) + ' hours more sleep.');
  }
};

return(calculateSleepDept());
