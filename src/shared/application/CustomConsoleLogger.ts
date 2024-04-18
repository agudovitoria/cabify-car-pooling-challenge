import { ConsoleLogger, LogLevel } from '@nestjs/common';

const defaultLogLevels = ['error' as LogLevel, 'warn' as LogLevel];
const developmentLogLevels = [
  ...defaultLogLevels,
  'log' as LogLevel,
  'debug' as LogLevel,
  'verbose' as LogLevel,
];

export class CustomConsoleLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context);
    const isDev = process.env.NODE_ENV === 'development';
    this.setLogLevels(isDev ? developmentLogLevels : defaultLogLevels);
  }
}
