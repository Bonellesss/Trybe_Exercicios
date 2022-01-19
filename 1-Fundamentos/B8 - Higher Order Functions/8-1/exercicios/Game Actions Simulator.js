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

const Dmg = (member) => {
    switch (member) {
        case 'dragon':
            const dragonDmg = Math.floor(Math.random() * dragon.strength) + 15;
            
            if (dragonDmg > dragon.strength) {
               return dragon.strength
            }

            return dragonDmg
        case 'warrior':
            const warriorDmg = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg)) + warrior.strength;

            if (warriorDmg > warrior.strength * warrior.weaponDmg) {
                return warrior.strength * warrior.weaponDmg
            }

            return warriorDmg
        case 'mage':
            let mageDmg = Math.floor(Math.random() * (mage.intelligence * 2)) + mage.intelligence   
            let mageMana
            if (mage.mana > 15) {
                mageMana = mage.mana - 15
            } else {
                mageMana = 'Não possui mana suficiente' 
            }
            if (mageDmg > mage.intelligence * 2) {
                mageDmg = mage.intelligence * 2;
            }

            return {
                damage: mageDmg,
                mana: mageMana,
            }
        default:
            break;
    }
}


console.log(Dmg('mage'));