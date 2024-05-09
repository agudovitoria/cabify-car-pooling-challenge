import { Module } from '@nestjs/common';
import { KnapSackService } from './application/services/knapsack.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [KnapSackService],
  exports: []
})
export class KnapSackModule {}
