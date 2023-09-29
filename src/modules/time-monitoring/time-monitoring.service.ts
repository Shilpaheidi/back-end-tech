import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { dbConnection } from 'src/app.module';
import * as mysql from 'mysql2';

import { Ticket } from 'src/models/interface/ticket.model';
@Injectable()
export class TimeMonitoringService {

  async getAllRecords(): Promise<any> {
    try {
      const data = await dbConnection.query(`select * from cards.cardsTable;`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async insertCard(ticket: Ticket): Promise<any> {
    try {
      await dbConnection.query(`insert into cards.cardsTable(
            Title, Status, Description ) values (
                  ${mysql.escape(ticket.title)},
                  ${mysql.escape(ticket.status)},
                  ${mysql.escape(ticket.description)}
                 
                 )`);
    } catch (error) {
      throw error;
    }
  }

  async updateCard(ticket: Ticket): Promise<any> {
    try {
      await dbConnection.query(`UPDATE cards.cardsTable SET  Title = ${mysql.escape(
        ticket.title,
      )},
          Status =  ${mysql.escape(ticket.status)},
          Description = ${mysql.escape(ticket.description)} WHERE

          ID = ${mysql.escape(ticket.id)}; 
         `);
    } catch (error) {
      throw error;
    }
  }


}
