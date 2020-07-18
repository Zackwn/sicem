import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("loja", table => {
        table.increments("ID").notNullable().primary()
        table.integer("Template_ID").nullable().references("ID").inTable("template")
        table.integer("Plano_ID").nullable().references("ID").inTable("plano")
        table.integer("Gatway_Pagamento_ID").nullable().references("ID").inTable("gatway_pagamento")
        table.string("Nome", 45).notNullable().unique()
        table.string("Email", 45).notNullable()
        table.string("Usuario", 45).notNullable()
        table.string("Senha", 45).notNullable()
        table.boolean("Ativada").notNullable()
        table.string("Telefone", 45).nullable()
        table.string("Whatsapp", 45).nullable()
        table.string("Logotipo", 45).nullable()
        table.string("Descricao", 100).nullable()
        table.string("Endereco", 100).nullable()
        table.string("CNPJ", 45).nullable()
        table.string("Cor1", 20).nullable()
        table.string("Cor2", 20).nullable()
        table.string("Cor3", 20).nullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("loja")
}