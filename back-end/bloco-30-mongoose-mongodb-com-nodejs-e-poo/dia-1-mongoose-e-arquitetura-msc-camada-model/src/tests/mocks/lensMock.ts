import ILens from '../../interfaces/Lens';

interface ILensWithId extends ILens {
  _id: string,
};

export const lenMock: ILens = {
  degree: 5,
  antiGlare: true,
  blueLightFilter: false,
}

export const lenMockWithId: ILensWithId = {
  _id: '73cf1fc6498565d94eba52cd',
  degree: 5,
  antiGlare: true,
  blueLightFilter: false,
}

export const lensMock: ILensWithId[] = [
  {
    ...lenMockWithId,
  },
  {
    _id: '73cf1fc6498565d94eba52dr',
    degree: 5,
    antiGlare: true,
    blueLightFilter: false,
  }
];