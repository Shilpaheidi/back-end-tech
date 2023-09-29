import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeMonitoringSystemModule } from './modules/time-monitoring-system/time-monitoring-system.module';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import dbConfig from './config/db.config';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),TimeMonitoringSystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
export const dbConnection = new DataSource(dbConfig());
dbConnection
  .initialize()
  .then(() => {
    console.log(
      `Data Source has been initialized! "${process.env.DB_HOST},${process.env.DB_USERNAME},${process.env.DB_PASSWORD}"`,
    );
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
