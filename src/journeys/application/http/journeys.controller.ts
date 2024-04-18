import { Body, Controller, HttpException, Logger, Post } from '@nestjs/common';
import { JourneyDto } from '../dto/JourneyDto';
import { JourneysService } from '../services/journeys.service';
import { JourneyIdAlreadyUsedException } from '../../domain/errors/JourneyIdAlreadyUsedException';

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
        throw new HttpException({ error: e.message }, 400);
      }

      /**
       * Not managed server error
       */
      throw e;
    }
  }
}
