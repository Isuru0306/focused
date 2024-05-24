abstract class Spell {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  abstract cast(): void;
}

enum FireSpellName {
  fireBolt = "Fire Bolt",
  fireWall = "Fire Wall",
  BigBang = "Big Bang",
}

enum FrostSpellName {
  frostBolt = "Frost Bolt",
  Blizzard = "Blizzard",
}

class FireSpell extends Spell {
  readonly burnDamage: number = 20;

  constructor(name: FireSpellName) {
    super(name);
  }

  cast() {
    console.log(
      `${this.name} - Boom your burning the enemy with ${this.burnDamage} damage points`
    );
  }
}

class FrostSpell extends Spell {
  readonly slowingRate: number = 0.5;

  constructor(name: FrostSpellName) {
    super(name);
  }

  cast() {
    console.log(
      `${this.name} - Brrr you are freezing the enemy. It's slowed by ${this.slowingRate}`
    );
  }
}

type spellName<S> = S extends FireSpell
  ? FireSpellName
  : FrostSpellName;

class Wizard<S extends Spell> {
  private spellBook: S[] = [];

  constructor(spellBook: S[]) {
    this.spellBook = spellBook;
  }

  castAllAtOnce() {
    this.spellBook.forEach((spell: S) => {
      spell.cast();
    });
  }

  castFromSpellBook(name: spellName<S>) {
    const spell = this.spellBook.find(
      (spell: S) => spell.name === name
    );
    if (spell) {
      spell.cast();
    } else {
      console.log(`Spell ${name} not found`);
    }
  }
}

const fireSpell: FireSpell[] = [
  new FireSpell(FireSpellName.fireBolt),
  new FireSpell(FireSpellName.fireWall),
];
const frostSpell: FrostSpell[] = [
  new FrostSpell(FrostSpellName.Blizzard),
  new FrostSpell(FrostSpellName.frostBolt),
];

const fireWizard = new Wizard(fireSpell);
const frostWizard = new Wizard(frostSpell);

fireWizard.castAllAtOnce();
fireWizard.castFromSpellBook(FireSpellName.BigBang);

frostWizard.castAllAtOnce();
frostWizard.castFromSpellBook(FrostSpellName.Blizzard);
