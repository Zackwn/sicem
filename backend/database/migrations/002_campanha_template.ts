import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("campanha_template", table => {
        table.integer("ID").primary()
        table.string("Nome", 45)
        table.string("Capa", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("campanha_template")
}