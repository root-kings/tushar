let tushar = {};

tushar.greet = function greet(name) {
  if (typeof name === "string")
    return console.log(`Hello ${name}, I'm Tushar!`);
  return console.log(`Hello stranger, I'm Tushar!`);
};

module.exports = tushar;
