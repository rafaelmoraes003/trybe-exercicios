interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character: Character): DbCharacter,
  getAll(): DbCharacter[],
  update(id: number, character: Character): DbCharacter,
  delete(id: number): boolean,
}

class LocalDbModel implements IModel {
  static id: number = 0;

  create(character: Character) {
    const newCharacter: DbCharacter = {
        id: LocalDbModel.id +=1,
        ...character,
    }
    db.push(newCharacter);
    return newCharacter;
  }

  getAll() {
    return db;
  }

  update(id: number, character: Character) {
    const idd = db.findIndex(i => i.id === id);
    if (idd < 0) throw new Error();
    db[idd] = {...db[idd], ... character};
    return {...db[idd], ... character}
  }

  delete(id: number) {
    const idd = db.findIndex(i => i.id === id);
    if (idd < 0) throw new Error();
    db.splice(idd, 1);
    return true;
  }
}

class CharacterService {
  constructor(
    public model: IModel,
  ) {}

  create(character: Character) {
    const newCharacter = this.model.create(character);
    return newCharacter;
  }

  getAll() {
    return this.model.getAll();
  }

  update(id: number, character: Character) {
    const updatedCharacter = this.model.update(id, character);
    return updatedCharacter;
  }
  
  delete(id: number) {
    this.model.delete(id);
  }
}

const mydb = new CharacterService(new LocalDbModel());
mydb.create({ name: 'rafael', specialMove: 'fly' });
mydb.create({ name: 'yoshi', specialMove: 'invisibility' });

mydb.update(1, { name: 'rafael', specialMove: 'super strength' });

mydb.delete(2);

console.log(mydb.getAll());