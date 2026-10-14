import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GadgetsController } from './gadgets/gadgets.controller';
import { GadgetsService } from './gadgets/gadgets.service';

@Module({
  imports: [],
  controllers: [AppController, GadgetsController],
  providers: [AppService, GadgetsService],
})
export class AppModule {}
