const getAge = (birth, death) => {
    if(!death){
      death = new Date().getFullYear()
    }
    return death - birth
  }
  
const findTheOldest = function(people) {
    return people.reduce((oldest, currPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath)
      return oldestAge < currAge ? currPerson : oldest
    })
  }
// Do not edit below this line
module.exports = findTheOldest;
