const findTheOldest = function(people) {
  console.log("start");
  return people.reduce((oldest, person) => {
    oldestPersonAge = (("yearOfDeath" in oldest) ? oldest.yearOfDeath : (new Date()).getFullYear()) - oldest.yearOfBirth;
    newPersonAge = (("yearOfDeath" in person) ? person.yearOfDeath : (new Date()).getFullYear()) - person.yearOfBirth;
    return oldestPersonAge > newPersonAge ? oldest : person;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
