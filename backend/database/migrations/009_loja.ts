import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("loja", table => {
        table.increments("ID").primary()
        table.integer("Template_ID").notNullable().references("ID").inTable("template")
        table.integer("Plano_ID").notNullable().references("ID").inTable("plano")
        table.integer("Gatway_Pagamento_ID").notNullable().references("ID").inTable("gatway_pagamento")
        table.string("Nome", 45).unique()
        table.string("Email", 45)
        table.string("Usuario", 45)
        table.string("Senha", 45)
        table.tinyint("Ativada")
        table.string("Telefone", 45).notNullable()
        table.string("Whatsapp", 45).notNullable()
        table.string("Logotipo", 45).notNullable()
        table.string("Descricao", 100).notNullable()
        table.string("Endereco", 100).notNullable()
        table.string("CNPJ", 45).notNullable()
        table.string("Cor1", 20).notNullable()
        table.string("Cor2", 20).notNullable()
        table.string("Cor3", 20).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("loja")
}