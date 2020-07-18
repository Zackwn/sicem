import path from "path"

module.exports = {
    client: "sqlite3",
    connection: {
        // file do sqlite (database)
        filename: path.resolve(__dirname, "src", "database", "db.sqlite")
    },
    migrations: {
        // Rota para as migrations
        directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds: {
        directory: path.resolve(__dirname, "src", "database", "seeds")
    },
    useNullAsDefault: true,
}