import { Body, Controller, Logger, Put } from '@nestjs/common';
import { DropOffDto } from '../dto/DropOffDto';
import { DropOffsService } from '../services/dropOffs.service';

@Controller('dropOffs')
export class DropOffsController {
  private readonly logger = new Logger(DropOffsController.name);

  constructor(private readonly dropOffsService: DropOffsService) {}

  @Put()
  async createDropOffs(@Body() dropOffs: Array<DropOffDto>): Promise<void> {
    this.logger.debug('Creating dropOffs', { dropOffs });
    await this.dropOffsService.addDropOffs(dropOffs);
  }
}
