/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response } from 'express';
import { Plants, IPlant } from './Plants';

const app = express();
const PORT = 3000;
const plantsModule = new Plants();

app.use(express.json());

const allPlantsRoute = '/plants';
const singlePlantRoute = '/plant';
const plantByIdRoute = '/plant/:id';
const sunnyPlantRoute = '/sunny/:id';

const notFountPlantResponse = (res: Response) => (
  res.status(404).json({ message: 'Plant was not found' })
);

app.get(allPlantsRoute, async (_req: Request, res: Response) => {
  const plants = await plantsModule.getPlants();
  return res.status(200).json(plants);
});

app.get(plantByIdRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.getPlantById(id);
  if (!plant) {
    return notFountPlantResponse(res);
  }
  return res.status(200).json(plant);
});

app.get(sunnyPlantRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.getPlantThatNeedsSunWithId(id);
  if (!plant) return notFountPlantResponse(res);
  return res.status(200).json(plant);
});

app.post(plantByIdRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = req.body as IPlant;
  const newPlant = await plantsModule.editPlant(id, plant);
  if (newPlant) return notFountPlantResponse(res);
  return res.status(200).json(newPlant);
});

app.post(singlePlantRoute, async (req: Request, res: Response) => {
  const plant = req.body as IPlant;
  const newPlant = await plantsModule.savePlant(plant);
  return res.status(200).json(newPlant);
});

app.delete(plantByIdRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedPlant = await plantsModule.removePlantById(id);
  if (!deletedPlant) {
    return notFountPlantResponse(res);
  }
  return res.status(200).json(deletedPlant);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});