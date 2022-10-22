const names = require("../country/state/city/index.js");

const firstName = require("../utilities/utils/index.js");

const getPeopleInCity = (names) => {
  return firstName(names);
};

module.exports = getPeopleInCity;
