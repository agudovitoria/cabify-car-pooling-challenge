import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  NotFoundException,
  Post
} from '@nestjs/common';
import { DropOffDto } from '../dto/DropOffDto';
import { DropOffsService } from '../services/DropOffs.service';
import { GroupToDropOffNotFoundException } from '../../domain/errors/GroupToDropOffNotFoundException';

@Controller('drop-offs')
export class DropOffsController {
  private readonly logger = new Logger(DropOffsController.name);

  constructor(private readonly dropOffsService: DropOffsService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async askForDropOff(@Body() dropOff: DropOffDto): Promise<void> {
    this.logger.debug(`Group with id ${dropOff.id} asking for drop off`);
    try {
      await this.dropOffsService.dropOff(dropOff);
    } catch (error) {
      if (error instanceof GroupToDropOffNotFoundException) {
        throw new NotFoundException(error.message);
      }
    }
  }
}
