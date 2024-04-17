import { Module } from '@nestjs/common';
import { Logger } from './application/Logger';

@Module({
  providers: [Logger],
  exports: [Logger],
})
export class SharedModule {}
