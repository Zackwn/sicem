import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("produto_loja", table => {
        table.integer("ID").primary()
        table.integer("Loja_ID").references("ID").inTable("loja")
        table.integer("Produto_ID").references("ID").inTable("produto")
        table.tinyint("Oferta")
        table.double("Preco")
        table.double("Preco_Oferta").notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("produto_loja")
}