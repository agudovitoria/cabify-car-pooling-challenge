import { Journey } from '../../../domain/Journey';

export class AddJourneyCommand {
  constructor(public readonly journey: Journey) {}
}
