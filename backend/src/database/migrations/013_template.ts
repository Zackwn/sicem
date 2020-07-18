import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("template", table => {
        table.increments("ID").notNullable().primary()
        table.string("Nome", 45).notNullable()
        table.string("Capa", 45).notNullable()
        table.string("Arquivo", 45).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("template")
}