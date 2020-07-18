import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("produto_loja", table => {
        table.integer("ID").notNullable().primary()
        table.integer("Loja_ID").notNullable().references("ID").inTable("loja")
        table.integer("Produto_ID").notNullable().references("ID").inTable("produto")
        table.boolean("Oferta").notNullable()
        table.decimal("Preco", 10, 2).notNullable()
        table.decimal("Preco_Oferta", 10, 2).nullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("produto_loja")
}