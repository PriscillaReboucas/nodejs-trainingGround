import assert from 'assert';
import {getAge, getAgeGroup, getAgeForPerson, divide, addWithLog} from './index.mjs';


describe('age calculator', () => {
  it('someone born 1972 is 50 2022', () => {
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });

  it('someone born 2021 is 1 2022', () => {
    // arrange
    // act
    const result = getAge(2021, 2022);
  
    // assert
    assert.equal(result, 1);
  });

  it('someone born 1993 is 29 2022', () => {
    const result = getAge(1993,2022);

    assert.equal(result, 29);
  })
});

describe('age classifier', () => {
  it('less than 0 does not exist', () => {
    const result = getAgeGroup(-1);

    assert.equal(result, "does not exist");
  });

  it('0-3 years old should be a toddler', () => {

    const result0 = getAgeGroup(0);
    const result3 = getAgeGroup(3);
  
    // assert
    assert.equal(result0, "toddler");
    assert.equal(result3, "toddler");
  });

  it('4-12 years old should be a kid', () => {
    const result = getAgeGroup(4);

    assert.equal(result, "kid");
  });

  it('13-19 years old should be a teenager', () => {
    const result = getAgeGroup(13);

    assert.equal(result, "teenager");
  });

  it('20-39 years old should be a adult', () => {
    const result = getAgeGroup(20);

    assert.equal(result, "adult");
  });

  it('above 39 years old ... you are just old', () => {
    const result = getAgeGroup(39);

    assert.equal(result, "old");
  });

  it('But 50 - that is prime age, my friend. PRIME. AGE.', () => {
    // arrange
    // act
    const result = getAgeGroup(50);
    
    // assert
    assert.equal(result, "prime");
    });
});

describe('constants and variables', () => {
  it.skip('const means constant', () => {
    const aNumber = 1;
    aNumber = 2;
  });
  it('you can change a let variable', () => {
    let aNumber = 1;
    aNumber = 2;

    assert.equal(aNumber, 2);
  });
  it('uninitialized variables are undefined', () => {
    let aNumber;
    assert.equal('undefined', typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  it('null should be used for not set', () => {
    const peekIntoTheBox = () => {return false;}

    let isCatAlive = null;

    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
  });
  it('array keep values', () => {
    const array1 = [1,2,3,4];
    const array2 = ["Marcus","Eliza","Obaid"];
    const array3 = ["Marcus",49, true];
  });
  it('getting elements out of arrays', () => {
    // arrange
    const names = ["Marcus","Eliza","Obaid"];
  
    // act
    const firstElement = names[0];
    const secondElement = names[1];
  
    const length = names.length;
    const lastElement = names[names.length - 1];
  
    // assert
    assert.equal(firstElement, "Marcus");
    assert.equal(secondElement, "Eliza");
    assert.equal(lastElement, "Obaid");
    assert.equal(length, 3);
  });
});

describe('loops does things over and over', () => {
  it('while-loops just keeps going unless we stop them', () => {
    // arrange
    let counter = 0;
  
    // act
    while (counter < 2) {
      console.log(`Counter is now '${counter}'`);
  
      counter += 1;
    }
  });
  it('loop through an array with while', () => {
    // arrange
    let index = 0;
    const names = ["Marcus","Eliza","Obaid"];
  
    // act
    while (index < names.length ) {
      console.log(`Index is now '${index}'`);
      console.log(`Current element is '${names[index]}'`);
  
      index = index + 1;
    };
  });
  it('loop through an array with for', () => {
    // arrange
    const names = ["Marcus","Eliza","Obaid"];
  
    // act
    for (let i = 0; i < names.length; i++) {
      console.log(`i is now '${i}'`);
      console.log(`Current element is '${names[i]}'`);
    };
  });
  it('calling getAge for each age', () => {
    // arrange
    const currentYear = 2022;
    const birthYears = [1972, 2022, 1980];
  
    // act
    for (let i = 0; i < birthYears.length; i++) {
      const age = getAge(birthYears[i], currentYear);
  
      console.log(`If you born in ${birthYears[i]} you are ${age} in ${currentYear}`);
    }
  });
  it('adding elements to array with push', () => {
    // arrange
    const names = ['Marcus','Eliza','Obaid'];
    assert.equal(names.length, 3);
  
    // act
    names.push('Arvid');
  
    // arrange
    assert.equal(names.length, 4);
    assert.equal(names[3], 'Arvid');
  });
  it('removing elements from array with pop', () => {
    // arrange
    const names = ['Marcus','Eliza','Obaid', 'Arvid'];
    assert.equal(names.length, 4);
  
    // act
    names.pop();
  
    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  it('removing elements from array using splice', () => {
    // arrange
    const names = ['Marcus','Eliza','Obaid', 'Arvid'];
    assert.equal(names.length, 4);
  
    // act
    names.splice(names.length -1, 1);
  
    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  it('removing elements from the begging array using splice', () => {
    const names = ['Marcus','Eliza','Obaid', 'Arvid'];
    assert.equal(names.length, 4);

    names.splice(0,1);

    assert.equal(names.length, 3);
    assert.equal(names[0], 'Eliza');
  });
  it('adding elements to an immutable array', () => {
    // arrange
    const names = ['Marcus','Eliza','Obaid'];
    assert.equal(names.length, 3);
  
    // act
    const newNames = [...names, 'Arvid'];
  
    // arrange
    assert.equal(names.length, 3);
    assert.equal(newNames.length, 4);
  });
  it('filter an array - mutable', () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];
  
    // act
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        numbers.splice(i, 1);
      }
    }
  
    // arrange
    assert.equal(numbers.length, 3);
  });
  it('filter an array - immutable', () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];
  
    // act
    const lowNumbers = numbers.filter(x => x > 10);
  
    // arrange
    assert.equal(lowNumbers.length, 3);
  });
});

describe('object are for building things', () => {
  it('our first object - a human', () => {
    // act
    const person = {
      name: 'Marcus',
      birthYear: 1972,
      isTeacher: true
    };

    // assert
    assert.equal(person.name, 'Marcus')
    assert.equal(person.birthYear, 1972)
    assert.equal(person.isTeacher, true)
  });
  it('get age for person', () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: 'Marcus',
      birthYear: 1972,
      isTeacher: true
    };
  
    // act
    const age = getAgeForPerson(person, currentYear);
  
    // assert
    assert.equal(age, 50);
  });
  it('a person has a list of favorite movies', () => {
    // act
    const person = {
      name: 'Marcus',
      favoriteMovies: ['Star Wars IV', 'Star Wars V', 'Star Wars IX'],
    }
  
    // assert
    assert.equal(person.favoriteMovies.length, 3);
    assert.equal(person.favoriteMovies[0], 'Star Wars IV');
    assert.equal(person.favoriteMovies[1], 'Star Wars V');
    assert.equal(
      person.favoriteMovies[person.favoriteMovies.length-1],
      'Star Wars IX'
    );
  });
  it('a person has a list of favorite movies with releaseYears', () => {
    // act
    const person = {
      name: 'Marcus',
      favoriteMovies: [
        {
          title: 'Star Wars IV',
          releaseYear: 1977
        },
        {
          title: 'Star Wars V',
          releaseYear: 1980
        },
        {
          title: 'Star Wars IX',
          releaseYear: 2017
        }
      ],
    };
  
    // assert
    assert.equal(person.favoriteMovies.length, 3);
    assert.equal(person.favoriteMovies[0].title, 'Star Wars IV');
    assert.equal(person.favoriteMovies[2].releaseYear, 2017);
  });
  describe('division', () => {
    it('4 divided with 2 is 2', () => {
      // act
      const result = divide(4, 2);
  
      // assert
      assert.equal(result, 2);
    });
  });
  it('4 divided with 0 should throw error', () => {
    // arrange
    try {
      // act
      const result = divide(4, 0);
  
    } catch (error) {
      // assert
      assert.notEqual(error, undefined);
      assert.equal(error.message, 'Please... No division by zero... I cannot cope with that. /Your computer');
    }
  });
});

describe('callbacks', () => {
  it('adding with logger', () => {
    // arrange
    const logThis2 = (message) => {
      console.log(message);
    }

    // act
    const result = addWithLog(1, 89, logThis2);

    // assert
    assert.equal(result, 90);
  });
  it('adding with inline logger', () => {
    // act
    const result = addWithLog(1, 89, (message) => {
      console.log(message);
    });
  
    // assert
    assert.equal(result, 90);
  });
});