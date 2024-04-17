import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CarAddedEvent } from '../impl/CarAdded.event';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { Logger } from '../../../../shared/application/Logger';

@EventsHandler(CarAddedEvent)
export class CarAddedEventHandler implements IEventHandler<CarAddedEvent> {
  private readonly logger = new Logger(CarAddedEventHandler.name);
  handle(event: CarAddedEvent) {
    this.logger.log(clc.green(`Car [${event.id}] added event...`));
  }
}
