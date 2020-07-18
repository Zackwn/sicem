import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("dominio", table => {
        table.integer("ID").notNullable().primary()
        table.integer("Loja_ID").notNullable().references("ID").inTable("loja")
        table.string("Endereco", 100).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("dominio")
}