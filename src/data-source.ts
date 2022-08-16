import { DataSource } from "typeorm";
import "dotenv/config";

const env = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        ...env,
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

// AppDataSource.initialize()
//   .then(() => console.log("Data Source Initialized"))
//   .catch((err) => console.log("Error Data Source", err));

/* Explicando código abaixo:
  * Estamos utilizando um ternário para controlar a configuração
    do DataSource do typeorm.

  * Utilizamos uma variavel de ambiente para controlar isso pois
    para conseguir manipular mesmo em um ambiente de produção.

  * O banco em que fazemos os testes é o SQLite e precisamos 
    das configurações pré definidas abaixo para que os testes executem
    de forma correta.
*/
