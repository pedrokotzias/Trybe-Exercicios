const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonBreath = (dragon) => {
  const min = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - min + 1) + min));
  return dragonDmg;
}

const warriorAttack = (warrior) => {
  const min = warrior.strength;
  const max = min * warrior.weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (max - min + 1) + min));
  return warriorDmg;
}

const mageSpell = (mage) => {
  const mageMana = mage.mana;
  const min = mage.intelligence;
  const max = min * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  }

  if (mageMana > 15) {
    const mageDmg = Math.floor((Math.random() * (max - min + 1) + min));
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
return turnStats;
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDmg = warriorAttack(warrior);
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },

  mageTurn: (mageSpell) => {
    const mageDmgMana = mageSpell(mage);
    const mageDmg = mageDmgMana.damageDealt;
    mage.damage = mageDmg;
    mage.mana -= mageDmgMana.manaSpent;
    dragon.healthPoints -= mageDmg;
  },
  dargonTurn : (dragonBreath) => {
    const dragonDmg = dragonBreath(dragon);
    dragon.damage = dragonDmg;
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
  },
  turnResults: () => battleMembers,

};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageSpell);
gameActions.dargonTurn(dragonBreath);
console.log(gameActions.turnResults());

