import { Test, TestingModule } from '@nestjs/testing';
import { TimeMonitoringService } from './time-monitoring.service';

describe('TimeMonitoringService', () => {
  let service: TimeMonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeMonitoringService],
    }).compile();

    service = module.get<TimeMonitoringService>(TimeMonitoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
