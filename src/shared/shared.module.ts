import { Module } from '@nestjs/common';
import { CustomConsoleLogger } from './application/CustomConsoleLogger';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [CustomConsoleLogger],
  exports: [CqrsModule, CustomConsoleLogger],
})
export class SharedModule {}
