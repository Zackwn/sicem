import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("produto", table => {
        table.increments("ID").primary()
        table.integer("Categoria_ID").references("ID").inTable("categoria")
        table.string("Nome", 45)
        table.string("Imagem", 45)
        table.string("Codigo_Barras", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("produto")
}