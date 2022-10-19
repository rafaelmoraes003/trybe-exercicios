import IFrame from '../../interfaces/Frame';

interface IFrameWithId extends IFrame {
  _id: string,
}

export const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Dourado',
};

export const frameMockWithId: IFrameWithId = {
  _id: '62cf1fc6498565d94eba52cd',
  ...frameMock,
}

export const framesMock: IFrameWithId[] = [
  {
    ...frameMockWithId,
  },
  {
    _id: '62cf1fc6498565d94eba52fv',
    material: 'Ouro',
    color: 'Dourado',
  }
];