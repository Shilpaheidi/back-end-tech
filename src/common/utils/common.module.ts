import { Module } from '@nestjs/common';
import { HelperService } from '../services/helper/helper.service';

@Module({
  providers: [HelperService],
  exports: [HelperService],
})
export class CommonModule {}
