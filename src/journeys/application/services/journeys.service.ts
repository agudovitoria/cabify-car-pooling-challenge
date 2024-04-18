import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { JourneyDto } from '../dto/JourneyDto';
import { JourneyDtoMapper } from '../mappers/JourneyDtoMapper';
import { AddJourneyCommand } from '../commands/impl/AddJourney.command';

@Injectable()
export class JourneysService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly journeyDtoMapper: JourneyDtoMapper,
  ) {}

  async addJourney(journeyDto: JourneyDto): Promise<void> {
    await this.commandBus.execute(
      new AddJourneyCommand(this.journeyDtoMapper.to(journeyDto)),
    );
  }
}
