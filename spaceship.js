class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    crew.length === 0 ? this.docked = true : this.docked = false;
    this.phasersCharge = "uncharged";
    crew.forEach(function(member) {
      member.currentShip = this;
    }.bind(this));
  }
}
