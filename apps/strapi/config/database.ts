import path from "path";

export default ({ env }) => {
  // For local development use sqlite
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(__dirname, "..", "..", env("DATABASE_FILENAME", ".tmp/data.db")),
      },
      useNullAsDefault: true,
    },
  };
};
