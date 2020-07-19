import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("categoria", table => {
        table.integer("ID").notNullable().primary()
        table.integer("Categoria_Mestre").notNullable().references("ID").inTable("categoria")
        table.integer("Nivel").notNullable()
        table.string("Nome", 45).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("categoria")
}