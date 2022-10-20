import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import ErrorTypes, { CustomError } from '../../../errors/catalog';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/frame';
import { frameMock, frameMockWithId, framesMock } from '../../mocks/frameMock';

describe('Frame Service', () => {
  const frameModel = new FrameModel();
  const frameService = new FrameService(frameModel);

  before(async () => {
    sinon.stub(frameModel, 'create').resolves(frameMockWithId);
    sinon.stub(frameModel, 'readOne')
      .onCall(0).resolves(frameMockWithId)
      .onCall(1).resolves(null)
      .onCall(2).resolves(frameMockWithId)
      .onCall(3).resolves(null);
    sinon.stub(frameModel, 'read').resolves(framesMock);
    sinon.stub(frameModel, 'destroy').resolves();
  });

  after(async () => {
    sinon.restore();
  });

  describe('Creating a frame', () => {

    it('Successfully created', async () => {
      const createdFrame = await frameService.create(frameMock);
      expect(createdFrame).to.be.deep.equal(frameMockWithId);
    });

    it('Validation error', async () => {

      let error;

      try {
        await frameService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(CustomError);

    });

  });

  describe('Searching a frame', () => {

    it('Successfully found', async () => {
      const frame = await frameService.readOne(frameMockWithId._id);
      expect(frame).to.be.deep.equal(frameMockWithId);
    });

    it('Invalid _id', async () => {
      let error;
      try {
        await frameService.readOne('12345');
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
      
    }); 

    it('Frame not found', async () => {
      let error;
      try {
        await frameService.readOne(frameMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);

    });

  });

  describe('Searching all frames', () => {

    it('Successfully found', async () => {
      const frames = await frameService.read();
      expect(frames).to.be.deep.equal(framesMock);
    });

  });

  describe('Deleting a frame', () => {

    it('Succesfully deleted', async () => {
      const response = await frameService.destroy(frameMockWithId._id);
      expect(response).to.be.undefined;
    });

    it('Invalid _id', async () => {
      let error;
      try {
        await frameService.destroy('12345');
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
      
    }); 

    it('Frame not found', async () => {
      let error;

      try {
        await frameService.destroy(frameMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.equal('EntityNotFound');
      expect(error).to.be.instanceOf(CustomError);
    });

  });
});