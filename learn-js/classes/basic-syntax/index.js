//Problem: Why use a class if in Javascript both 'class' and 'function' treated as a function?

//this is a class, but if we check the type like this
//typeof(Pokemon)
//it will say that it is a function not a class
class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(`${this.name} says hello from a class!`);
  }
}

//Why not use it like this?
//more straightforward, a function that looks like a class
function pokemon(name) {
  this.name = name;

  alert(`${this.name} says hello from a function!`);
}

// Question: Is 'class' keyword is really a 'Syntactic Sugar'?
// syntax that is designed to make things easier to read, but doesn’t introduce anything new

//let's see the difference
const charmander = new Pokemon("Charmander");
charmander.sayHi(); // it works, of course. It's like calling a function

const cyndaquil = "Cyndaquil";
pokemon(cyndaquil); // it wors too, of course. It IS a function

//then, this also should work
//since a class is treated as a function.
alert("Gotta catch 'em all!", Pokemon());
