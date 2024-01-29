import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ExchangeRate } from './exchange-rate/entity';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { User } from './user/entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [User, ExchangeRate],
      synchronize: true,
    }),
    AuthModule,
    ExchangeRateModule,
    UserModule
  ],
})
export class AppModule {}
