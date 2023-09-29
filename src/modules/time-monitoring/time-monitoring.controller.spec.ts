import { Test, TestingModule } from '@nestjs/testing';
import { TimeMonitoringController } from './time-monitoring.controller';

describe('TimeMonitoringController', () => {
  let controller: TimeMonitoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeMonitoringController],
    }).compile();

    controller = module.get<TimeMonitoringController>(TimeMonitoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
