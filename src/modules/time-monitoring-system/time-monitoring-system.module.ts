import { Module } from '@nestjs/common';
import { TimeMonitoringController } from '../time-monitoring/time-monitoring.controller';
import { TimeMonitoringService } from '../time-monitoring/time-monitoring.service';

@Module({  controllers: [TimeMonitoringController],
    providers: [TimeMonitoringService],})
export class TimeMonitoringSystemModule {}
