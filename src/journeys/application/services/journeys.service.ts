import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { JourneyDto } from '../dto/JourneyDto';
import { JourneyDtoMapper } from '../mappers/JourneyDto.mapper';
import { AddJourneyCommand } from '../commands/impl/AddJourney.command';
import { BaseDto } from '../../../shared/domain/BaseDto';
import { ExistsGroupQuery } from '../queries/impl/ExistsGroupQuery';
import { BaseDtoMapper } from '../../../shared/application/mappers/BaseDto.mapper';
import { RemoveJourneyCommand } from '../commands/impl/RemoveJourney.command';

@Injectable()
export class JourneysService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly journeyDtoMapper: JourneyDtoMapper,
    private readonly baseDtoMapper: BaseDtoMapper
  ) {}

  async addJourney(journeyDto: JourneyDto): Promise<void> {
    await this.commandBus.execute(
      new AddJourneyCommand(this.journeyDtoMapper.to(journeyDto))
    );
  }

  async existsGroup(baseDto: BaseDto): Promise<boolean> {
    return await this.queryBus.execute(
      new ExistsGroupQuery(this.baseDtoMapper.to(baseDto))
    );
  }

  async removeGroup(baseDto: BaseDto): Promise<void> {
    await this.commandBus.execute(new RemoveJourneyCommand(baseDto));
  }
}
