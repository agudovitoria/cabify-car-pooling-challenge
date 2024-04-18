import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CarAddedEvent } from '../impl/CarAdded.event';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';

@EventsHandler(CarAddedEvent)
export class CarAddedEventHandler implements IEventHandler<CarAddedEvent> {
  private readonly logger = new CustomConsoleLogger(CarAddedEventHandler.name);
  handle(event: CarAddedEvent) {
    this.logger.log(clc.green(`Car [${event.id}] added event...`));
  }
}
