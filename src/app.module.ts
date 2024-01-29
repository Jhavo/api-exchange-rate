import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity';
import { ExchangeRate } from './exchange-rate/entity';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, ExchangeRate],
    }),
    AuthModule,
    ExchangeRateModule,
    UserModule
  ],
})
export class AppModule {}
