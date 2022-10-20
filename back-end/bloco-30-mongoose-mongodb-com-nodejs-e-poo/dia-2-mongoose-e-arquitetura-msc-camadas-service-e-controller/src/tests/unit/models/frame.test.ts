import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId, framesMock } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(async() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(framesMock);
    sinon.stub(Model, 'deleteOne').resolves();
  });

  after(async() => {
    sinon.restore();
  });

  describe('Creating a frame', () => {

    it('Successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });

  });

  describe('Searching a frame', () => {

    it('Successfully found', async () => {
      const frame = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(frame).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {

      try {
				await frameModel.readOne('wrong_id');
			} catch (error: any) {
				expect(error.message).to.be.equal('InvalidMongoId');
			}

    });
  });

  describe('Searching all frames', () => {

    it('Successfully found', async () => {
      const frames = await frameModel.read();
      expect(frames).to.be.an('array');
      expect(frames).to.be.deep.equal(framesMock);
    });

  });

  describe('Deleting a frame', () => {

    it('Successfully deleted', async () => {
      const deletedFrame = await frameModel.destroy('62cf1fc6498565d94eba52cd');
      expect(deletedFrame).to.be.undefined;
    });

    it('_id not found', async () => {

      try {
				await frameModel.destroy('wrong_id');
			} catch (error: any) {
				expect(error.message).to.be.equal('InvalidMongoId');
			}

    });

  })
});