const Potion = require("../lib/Potion.js");
const Character = require("./Character");

class Enemy extends Character {
  constructor(name, weapon) {
    // call parent constructor here:
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  // inherit prototype methods from Character here:
  //Enemy.prototype = Object.create(Character.prototype);

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

module.exports = Enemy;
