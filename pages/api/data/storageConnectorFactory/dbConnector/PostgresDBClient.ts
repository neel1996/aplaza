import {
  PG_DB_NAME,
  PG_HOST_NAME,
  PG_PASSWORD,
  PG_PORT,
  PG_USER_NAME,
} from "./postgresConnectionConfig";
import { Client } from "pg";

export class PostgresClient {
  constructor() {}

  getPGClient(): Client {
    const client = new Client({
      host: PG_HOST_NAME,
      port: PG_PORT,
      user: PG_USER_NAME,
      password: PG_PASSWORD,
      database: PG_DB_NAME,
    });

    return client;
  }
}
