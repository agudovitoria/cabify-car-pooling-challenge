import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { DropOffDtoMapper } from '../mappers/DropOffDto.mapper';
import { DropOffDto } from '../dto/DropOffDto';
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { GroupToDropOffNotFoundException } from '../../domain/errors/GroupToDropOffNotFoundException';
import { GroupToDropOffCannotBeDeletedException } from '../../domain/errors/GroupToDropOffCannotBeDeletedException';

@Injectable()
export class DropOffsService {
  private readonly logger = new Logger(DropOffsService.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly dropOffDtoMapper: DropOffDtoMapper,
    private readonly httpService: HttpService
  ) {}

  private async existsGroup(id: number): Promise<boolean> {
    this.logger.debug(`Asking if exists group ${id}`);

    const existsGroupEndpoint = `${process.env.TRANSPORT}://${process.env.HOST}:${process.env.PORT}/journeys/${id}`;
    const { data } = await firstValueFrom(
      this.httpService.get<boolean>(existsGroupEndpoint).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(
            `Group ${id} for drop off not found`,
            error.response.data
          );
          throw new GroupToDropOffNotFoundException(id);
        })
      )
    );
    return data;
  }

  private async deleteGroup(id: number): Promise<void> {
    this.logger.debug(`Asking for delete group ${id}`);

    const deleteGroupEndpoint = `${process.env.TRANSPORT}://${process.env.HOST}:${process.env.PORT}/journeys/${id}`;
    const { data } = await firstValueFrom(
      this.httpService.delete<void>(deleteGroupEndpoint).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(
            `Cannot delete group ${id} when drop off`,
            error.response.data
          );
          throw new GroupToDropOffCannotBeDeletedException(id);
        })
      )
    );
    return data;
  }

  async dropOff(dropOffDto: DropOffDto): Promise<void> {
    this.logger.debug(`Dropping off group ${dropOffDto.id}`);

    const existsGroup = await this.existsGroup(dropOffDto.id);

    if (!existsGroup) {
      throw new GroupToDropOffNotFoundException(dropOffDto.id);
    }

    await this.deleteGroup(dropOffDto.id);
  }
}
