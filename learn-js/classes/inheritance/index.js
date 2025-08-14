class Pokemon {
  chance = 5;
  caught = false;

  constructor(name) {
    this.name = name;
    this.level = 5;
    this.isRare = false;
  }

  evolve() {
    alert(`${this.name} is evolving!`);
  }

  levelUp() {
    this.level += 1;
    alert(
      `${this.name} leveled up! Now ${this.name} is on level ${this.level}`
    );
  }

  tryCatch() {
    if (this.caught) {
      alert(`${this.name} has successfully been caught!`);
      return;
    }

    if (this.chance <= 0) {
      alert(`${this.name} has fled!`);
      return;
    }

    const gotcha = Math.random() < 0.5;
    let message;

    if (gotcha) {
      this.caught = true;
      message = `Gotcha! ${this.name} has been caught!`;
    } else {
      this.chance -= 1;
      message =
        this.chance > 0
          ? `${this.name} breaks through! ${this.chance} chance(s) left!`
          : `Oh no! ${this.name} has ran away!`;
    }
    alert(message);
  }
}

// ShinyPokemon is a rare one, so the isRare should be TRUE
class ShinyPokemon extends Pokemon {
  constructor(name) {
    //we need to call the parent methods first if we want to tweak them
    //by calling the super keyword first
    super(name);

    //then make any changes
    this.isRare = true; // variable to be tweaked
    this.chance = 2; //it's also tougher to catch
  }

  //immediately called without calling
  prepCatch() {
    // super.tryCatch(); //Pokemon.tryCatch
    this.tryCatch(); //ShinyPokemon.tryCatch
  }
}

const pikachu = new ShinyPokemon("Shiny Pikachu");
const pikachu2 = new Pokemon("Pikachu");
