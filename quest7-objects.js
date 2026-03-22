const profile = {
  names: "elphaz thomas",
  occupation: "engineer",
  address: "mwanza",
  marital: "married",
  age: "30",
  experience: (years) => {
    console.log(`i have ${years}yrs of experience`);
  },
};
console.log(profile.experience(5));
console.log(`his name is ${profile.names}`);
console.log(profile["occupation"]);
profile.hobbies = "listening to music and sermons";
console.log(profile);
