import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("plano", table => {
        table.integer("ID").primary()
        table.string("Preco", 45)
        table.string("Descricao", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("plano")
}