export const getAge = (birthYear, currentYear) => currentYear-birthYear;

export const getAgeGroup = (age) => {
    if(age < 0)
      return "does not exist";
    if(age < 4)
      return "toddler";
    if(age < 13)
      return "kid";
    if(age < 20)
      return "teenager";
    if(age < 39)
      return "adult";
    if(age === 50)
      return "prime";
  
    return "old";
}

export const getAgeForPerson = (person, currentYear) => {
  return currentYear - person.birthYear
}

export const divide = (number1, number2) => {
  if(number2 === 0) {
    throw new Error('Please... No division by zero... I cannot cope with that. /Your computer');
  }
  return number1 / number2;
}

export const addWithLog = (number1, number2, logger) => {
  logger(`About to '${number1} + ${number2}'`);
  return number1 + number2;
}

const hiSayer = function () {
  console.log('HI!')
}

function main(fn) {
  console.log('About to call a function passed to me');
  console.log(fn);
  fn();
}

main(hiSayer);