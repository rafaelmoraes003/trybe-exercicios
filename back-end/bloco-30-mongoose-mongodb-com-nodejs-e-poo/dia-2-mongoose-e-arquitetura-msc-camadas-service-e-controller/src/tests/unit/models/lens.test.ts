import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lenMock, lenMockWithId, lensMock } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(lenMockWithId);
    sinon.stub(Model, 'findOne').resolves(lenMockWithId);
    sinon.stub(Model, 'find').resolves(lensMock);
    sinon.stub(Model, 'deleteOne').resolves();
  });

  after(async () => {
    sinon.restore();
  });

  describe('Creating a len', () => {
    it('Created successfully', async () => {
      const createdLen = await lensModel.create(lenMock);
      expect(createdLen).to.be.deep.equal(lenMockWithId);
    });
  });

  describe('Searching a len', () => {

    it('Successfully found', async () => {
      const len = await lensModel.readOne('73cf1fc6498565d94eba52cd');
      expect(len).to.be.deep.equal(lenMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('wrong_id');
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });

  });

  describe('Searching all lens', () => {

    it('Successfully found', async () => {
      const lens = await lensModel.read();
      expect(lens).to.be.an('array');
      expect(lens).to.be.deep.equal(lensMock);
    });

  });

  describe('Deletind a len', () => {

    it('Successfully deleted', async () => {
      const deletedLen = await lensModel.destroy('73cf1fc6498565d94eba52cd');
      expect(deletedLen).to.be.undefined;
    });

    it('_id not found', async () => {
      try {
        await lensModel.destroy('wrong_id');
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });

  });

});