import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("template", table => {
        table.increments("ID").primary()
        table.string("Nome", 45)
        table.string("Capa", 45)
        table.string("Arquivo", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("template")
}