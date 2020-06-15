class Hero {
  constructor(
    name,
    abilities
  ) {
    this.name = name;
    this.abilities = abilities;
  }

  match(searchString) {
    let matchSearch = false;
    if (this.name.toLowerCase().includes(searchString)) {
      matchSearch = true;
    }
    for (const ab of this.abilities) {
      if (ab.toLowerCase().includes(searchString)) {
        matchSearch = true;
      }
    }
    return matchSearch;
  }
}

const heroes = [
  new Hero("Superman", ["Superhuman", "Heat vision", "Longevity"]),
  new Hero("Batman", ["Genius-level intelligence", "Escapologist"]),
  new Hero("The Flash", ["Super speed"]),
  new Hero("Wonder Woman", ["Superhuman", "Longevity"])
]

module.exports = {
  Hero,
  heroes
};