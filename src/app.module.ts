import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    JobModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:w7g3QPOKwcJ3IVHE@jobcluster.rr4t5hu.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
