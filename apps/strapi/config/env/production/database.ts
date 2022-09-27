import { parse } from "pg-connection-string";

const config = parse(process.env.DATABASE_URL);

export default ({ env }) => {
  // For local development use sqlite
  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        schema: "public",
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      debug: false,
    },
  };
};
