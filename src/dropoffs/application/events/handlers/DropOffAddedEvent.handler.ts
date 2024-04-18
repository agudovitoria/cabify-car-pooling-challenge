import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DropOffAddedEvent } from '../impl/DropOffAdded.event';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { CustomConsoleLogger } from '../../../../shared/application/CustomConsoleLogger';

@EventsHandler(DropOffAddedEvent)
export class DropOffAddedEventHandler implements IEventHandler<DropOffAddedEvent> {
  private readonly logger = new CustomConsoleLogger(DropOffAddedEventHandler.name);
  handle(event: DropOffAddedEvent) {
    this.logger.log(clc.green(`DropOff [${event.id}] added event...`));
  }
}
