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

if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize()
    .then(() => console.log("Data Source Initialized"))
    .catch((err) => console.log("Error Data Source", err));
}
