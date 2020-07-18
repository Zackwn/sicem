import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("categoria", table => {
        table.integer("ID").primary()
        table.integer("Categoria_Mestre").references("ID").inTable("categoria")
        table.integer("Nivel")
        table.string("Nome", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("categoria")
}