import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DropOffDto } from '../dto/DropOffDto';
import { AddDropOffsCommand } from '../commands/impl/AddDropOffs.command';
import { DropOffDtoMapper } from '../mappers/DropOffDtoMapper';

@Injectable()
export class DropOffsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly dropOffDtoMapper: DropOffDtoMapper,
  ) {}

  async addDropOffs(dropOffDtos: Array<DropOffDto>): Promise<void> {
    const dropOffs = dropOffDtos.map((dropOffDto: DropOffDto) => this.dropOffDtoMapper.to(dropOffDto));
    await this.commandBus.execute(new AddDropOffsCommand(dropOffs));
  }
}
