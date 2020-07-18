import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("campanha", table => {
        table.increments("ID").primary()
        table.integer("Loja_ID").references("ID").inTable("loja")
        table.integer("Campanha_Tipo_ID").references("ID").inTable("campanha_tipo")
        table.integer("Campanha_Template_ID").references("ID").inTable("campanha_template")
        table.string("Investimento_Mensal", 45)
        table.string("Descricao", 45)
        table.tinyint("Ativada")
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("campanha")
}