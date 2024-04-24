import { BaseDto } from '../../../../shared/domain/BaseDto';

export class RemoveJourneyCommand {
  constructor(public readonly baseDto: BaseDto) {}
}
