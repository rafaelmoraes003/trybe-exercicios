import { z } from 'zod';

const frameZodSchema = z.object({
  material: z.string(),
  color: z.string({
    required_error: 'color is required',
    invalid_type_error: 'color must be a string',
  }).min(3, { message: 'color must be 3 characters long' }),
});

type IFrame = z.infer<typeof frameZodSchema>;

export default IFrame;
export { frameZodSchema };