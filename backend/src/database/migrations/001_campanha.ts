import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("campanha", table => {
        table.increments("ID").notNullable().primary()
        table.integer("Loja_ID").notNullable().references("ID").inTable("loja")
        table.integer("Campanha_Tipo_ID").notNullable().references("ID").inTable("campanha_tipo")
        table.integer("Campanha_Template_ID").notNullable().references("ID").inTable("campanha_template")
        table.string("Investimento_Mensal", 45).notNullable()
        table.string("Descricao", 45).notNullable()
        table.boolean("Ativada").notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("campanha")
}