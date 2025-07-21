// import { Inject } from "@nestjs/common";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { TypeOrmModuleOptions } from "@nestjs/typeorm";
// import { UserEntity } from "src/users/entities/user.entity";

// export const postgresConfig = {
//     imports: [ConfigModule],
//     inject: [ConfigService],
//     useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
//         type: 'postgres',
//         host: configService.get<string>('DB_HOST') || 'localhost',
//         port: parseInt(configService.get<string>('DB_PORT') || '5432'),
//         username: configService.get<string>('DB_USER') || 'testpostgres',
//         password: configService.get<string>('DB_PASSWORD') || '123345',
//         database: configService.get<string>('DB_NAME') || 'sell_everything',
//         entities: [UserEntity],
//         synchronize: true,
// })
// }