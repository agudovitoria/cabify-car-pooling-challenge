import {
  Body,
  ConflictException,
  Controller, Delete, Get,
  Logger, Param,
  Post
} from '@nestjs/common';
import { JourneyDto } from '../dto/JourneyDto';
import { JourneysService } from '../services/journeys.service';
import { JourneyIdAlreadyUsedException } from '../../domain/errors/JourneyIdAlreadyUsedException';
import { BaseDto } from '../../../shared/domain/BaseDto';

@Controller('journeys')
export class JourneysController {
  private readonly logger = new Logger(JourneysController.name);

  constructor(private readonly journeysService: JourneysService) {}

  @Post()
  async createJourneys(@Body() journey: JourneyDto): Promise<void> {
    this.logger.debug('Creating journey', { journey });
    try {
      await this.journeysService.addJourney(journey);
    } catch (e) {
      /**
       * Duplicated ids management
       * because it's not supported by in-memory-db fake database engine
       * send an error response with code 400
       */
      if (e instanceof JourneyIdAlreadyUsedException) {
        throw new ConflictException(e.message);
      }

      /**
       * Not managed error
       */
      throw e;
    }
  }

  @Get('/:id')
  async existsJourney(@Param('id') id: number): Promise<boolean> {
    this.logger.debug(`Looking for group ${id}`);
    return await this.journeysService.existsGroup(new BaseDto(id));
  }

  @Delete('/:id')
  async removeJourney(@Param('id') id: number): Promise<void> {
    this.logger.debug(`Removing group ${id}`);
    await this.journeysService.removeGroup(new BaseDto(id));
  }
}
