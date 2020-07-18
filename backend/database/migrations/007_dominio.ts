import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("dominio", table => {
        table.integer("ID").primary()
        table.integer("Loja_ID").references("ID").inTable("loja")
        table.string("Endereco", 100)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("dominio")
}