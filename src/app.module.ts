import { Transaction } from './transactions/entities/transaction.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
//import { AccountsModule } from './accounts/accounts.module';
//import { Account } from './accounts/entities/account.entity';
@Module({
  imports: [
  ConfigModule.forRoot(),
  SequelizeModule.forRoot({
    dialect: process.env.DB_CONNECTION as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    //models: [Transaction, Account],
    models: [Transaction],
    autoLoadModels: true,
    synchronize: true,
    sync: {
      alter: true,
      force: true,
    },
  }), 
  TransactionsModule,
  //AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
