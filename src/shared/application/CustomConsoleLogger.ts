import { ConsoleLogger, LogLevel } from '@nestjs/common';

const defaultLogLevels = ['error' as LogLevel, 'warn' as LogLevel];
const developmentLogLevels = [
  ...defaultLogLevels,
  'log' as LogLevel,
  'debug' as LogLevel,
  'verbose' as LogLevel
];

export class CustomConsoleLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context);
    const isDev = ['development', 'test'].includes(process.env.NODE_ENV);
    this.setLogLevels(isDev ? developmentLogLevels : defaultLogLevels);
  }
}
