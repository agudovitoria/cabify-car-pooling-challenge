import { Module } from '@nestjs/common';
import { CustomConsoleLogger } from './application/CustomConsoleLogger';
import { CqrsModule } from '@nestjs/cqrs';
import { BaseDtoMapper } from './application/mappers/BaseDto.mapper';

@Module({
  imports: [CqrsModule],
  providers: [CustomConsoleLogger, BaseDtoMapper],
  exports: [CqrsModule, CustomConsoleLogger, BaseDtoMapper]
})
export class SharedModule {}
