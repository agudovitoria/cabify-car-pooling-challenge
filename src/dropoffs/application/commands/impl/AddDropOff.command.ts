import { DropOff } from '../../../domain/DropOff';

export class AddDropOffCommand {
  constructor(public readonly dropOff: DropOff) {}
}
