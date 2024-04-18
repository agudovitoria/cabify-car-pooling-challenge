import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { JourneyAddedEvent } from '../impl/JourneyAdded.event';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';

@EventsHandler(JourneyAddedEvent)
export class JourneyAddedEventHandler implements IEventHandler<JourneyAddedEvent> {
  private readonly logger = new CustomConsoleLogger(JourneyAddedEventHandler.name);
  handle(event: JourneyAddedEvent) {
    this.logger.log(clc.green(`Journey [${event.id}] added event...`));
  }
}
