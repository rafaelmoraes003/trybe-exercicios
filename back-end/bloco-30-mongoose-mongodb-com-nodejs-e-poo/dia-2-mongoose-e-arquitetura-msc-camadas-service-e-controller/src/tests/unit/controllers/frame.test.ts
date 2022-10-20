import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';
import { frameMock, frameMockWithId, framesMock } from '../../mocks/frameMock';
import FrameController from '../../../controllers/frame';
import FrameService from '../../../services/frame';
import FrameModel from '../../../models/Frame';

describe('Frame Controller', () => {
  const frameModel = new FrameModel();
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);

  const req = {} as Request;
  const res = {} as Response;
  const next = new Function as NextFunction;

  before(async () => {
    sinon.stub(frameService, 'create').resolves(frameMockWithId)
    
    sinon.stub(frameService, 'readOne').resolves(frameMockWithId)
      
    sinon.stub(frameService, 'read').resolves(framesMock);
    
    sinon.stub(frameService, 'destroy').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(async () => {
    sinon.restore();
  });

  describe('Creating a frame', () => {

    it('Successfully created', async () => {
      req.body = frameMock;
      await frameController.create(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    })
  });

  describe('Searchign a frame', () => {
    it('Succesfully found', async () => {
      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });

  describe('Searching all frames', () => {
    it('Successfully found', async () => {
      await frameController.read(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(framesMock)).to.be.true;
    })

  });

  describe('Deleting a frame', () => {

    it('Successfully deleted', async () => {
      req.params = { id: frameMockWithId._id };
      await frameController.destroy(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(202)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith({ deleted: true })).to.be.true;
    });

  });

});