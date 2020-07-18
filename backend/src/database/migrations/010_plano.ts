import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("plano", table => {
        table.integer("ID").notNullable().primary()
        table.string("Preco", 45).notNullable()
        table.string("Descricao", 45).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("plano")
}