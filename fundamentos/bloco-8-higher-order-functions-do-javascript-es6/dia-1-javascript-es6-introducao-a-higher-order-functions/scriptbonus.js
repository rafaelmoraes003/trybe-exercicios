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


const dragonDamage = (dragon) => {
    const dgnDamage =  Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
    return dgnDamage;
}

const warriorDamage = (warrior) => {
    const wrorDamage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) ) + warrior.strength;
    return wrorDamage;
}

const damageAndMana = (mage) => {
    const object = {
        damage: 'Mana Insuficiente!',
        manaGasta: 0,
    }
    if(mage.mana > 15){
        object.damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) ) + mage.intelligence;
        object.manaGasta = 15;
        return object;
    }
    return object
}
