import { Module } from '@nestjs/common';
import { DropOffsService } from './application/services/dropOffs.service';
import { DropOffsController } from './application/http/dropOffs.controller';
import { SharedModule } from '../shared/shared.module';
import { InMemoryDropOffRepository } from './infrastructure/repositories/InMemoryDropOffRepository';
import { AddDropOffsCommandHandler } from './application/commands/handlers/AddDropOffsCommand.handler';
import { DropOffEntityMapper } from './application/mappers/DropOffEntityMapper';
import { DropOffDtoMapper } from './application/mappers/DropOffDtoMapper';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [SharedModule],
  controllers: [DropOffsController],
  providers: [
    InMemoryDBService,
    DropOffsService,
    AddDropOffsCommandHandler,
    InMemoryDropOffRepository,
    DropOffEntityMapper,
    DropOffDtoMapper,
  ],
})
export class DropOffsModule {}
