import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("campanha_tipo", table => {
        table.integer("ID").primary()
        table.string("Nome", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("campanha_tipo")
}