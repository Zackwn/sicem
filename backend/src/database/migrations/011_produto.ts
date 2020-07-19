import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("produto", table => {
        table.increments("ID").notNullable().primary()
        table.integer("Categoria_ID").notNullable().references("ID").inTable("categoria")
        table.string("Nome", 45).notNullable()
        table.string("Imagem", 45).notNullable()
        table.string("Codigo_Barras", 45).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("produto")
}