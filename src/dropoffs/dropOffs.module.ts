import { Module } from '@nestjs/common';
import { DropOffsController } from './application/http/dropOffs.controller';
import { SharedModule } from '../shared/shared.module';
import { InMemoryDropOffRepository } from './infrastructure/repositories/InMemoryDropOff.repository';
import { AddDropOffCommandHandler } from './application/commands/handlers/AddDropOffCommand.handler';
import { DropOffEntityMapper } from './application/mappers/DropOffEntity.mapper';
import { DropOffDtoMapper } from './application/mappers/DropOffDto.mapper';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { DropOffsService } from './application/services/DropOffs.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SharedModule, HttpModule],
  controllers: [DropOffsController],
  providers: [
    InMemoryDBService,
    DropOffsService,
    AddDropOffCommandHandler,
    InMemoryDropOffRepository,
    DropOffEntityMapper,
    DropOffDtoMapper
  ]
})
export class DropOffsModule {}
