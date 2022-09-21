import fs from 'fs/promises';

export interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { 
  createdPlants: number, 
}

const defineWaterFrequency = (needsSun: boolean, size: number, origin: string): number => {
  const multiplyFactor: number = origin === 'Brasil' ? 8 : 7;

  return needsSun 
    ? size * 0.77 + multiplyFactor
    : (size / 2) * 1.33 + multiplyFactor;
};

export class Plants {
  private readonly plantsFile = './plantsData.json';
  private readonly opsFile = 'opsInfo.json';

  public static initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = defineWaterFrequency(needsSun, size, origin);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plants = await this.readPlantsFile();
    return plants;
  }

  public async getPlantById(id: string): Promise<IPlant | null> {
    const plants = await this.readPlantsFile();
    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(id: string): Promise<IPlant | null> {
    const plants = await this.readPlantsFile();

    const index = plants.findIndex((i) => i.id === id);
    if (index < 0) return null;

    const removedPlant = plants[index];

    plants.splice(index, 1);
    await this.writeInPlantsFile(plants);

    return removedPlant;
  }

  public async getPlantThatNeedsSunWithId(id: string): Promise<IPlant | null> {
    const plants = await this.readPlantsFile();

    const plantThatNeedsSun = plants.find((plant) => plant.id === id && plant.needsSun);

    if (!plantThatNeedsSun) return null;
    return plantThatNeedsSun;
  }

  public async editPlant(id: string, newPlant: IPlant): Promise<IPlant | null> {
    const plants = await this.readPlantsFile();

    const index = plants.findIndex((i) => i.id === id);
    if (index < 0) return null;

    plants[index] = newPlant;

    await this.writeInPlantsFile(plants);
    return newPlant;
  }

  public async savePlant(plant: IPlant): Promise<IPlant> {
    const plants = await this.readPlantsFile();
    const newPlant = Plants.initPlant(plant);

    plants.push(newPlant);

    await this.writeInPlantsFile(plants);
    await this.incrementPlantsCount();

    return newPlant;
  }

  private async readPlantsFile() {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  private async incrementPlantsCount() {
    const plantsCount = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    const count: IOpsInfo = JSON.parse(plantsCount);
    count.createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify(count, null, 2));
  }

  private async writeInPlantsFile(plants: IPlant[]) {
    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
  }
}