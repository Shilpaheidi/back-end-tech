import { Body, Controller, Get, HttpStatus, Post, Put } from '@nestjs/common';
import { TimeMonitoringService } from './time-monitoring.service';

import { TicketsInfo } from 'src/models/dto/ticket.dto';

@Controller('time-monitoring')
export class TimeMonitoringController {
  constructor(private appService: TimeMonitoringService) {}
  @Get('getAllRecords') // Define a GET request handler for retrieving all records
  async getAllRecords() {
    const records = await this.appService.getAllRecords();
    return { records }; // Return the records as JSON
  }

  @Post('insert-tickets')
  insertingCards(@Body() tickets: TicketsInfo) {
    return this.appService.insertCard(tickets);
  }

  @Put('update-tickets')
  async updatingCards(@Body() tickets: TicketsInfo) {
    try {
      await this.appService.updateCard(tickets);
      return { message: 'Card updated successfully' };
    } catch (error) {
      return { error: 'Failed to update card' };
    }
  }
}
