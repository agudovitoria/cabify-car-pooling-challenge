import { DropOff } from '../../../domain/DropOff';

export class AddDropOffsCommand {
  constructor(public readonly dropOffs: Array<DropOff>) {}
}
