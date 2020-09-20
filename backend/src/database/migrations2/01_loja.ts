import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("loja", table => {
        table.increments("ID").notNullable().primary()
        table.string("Nome", 45).notNullable().unique()
        table.string("Email", 45).notNullable()
        table.string("Senha").notNullable()
        table.boolean("Ativada").notNullable()
        table.string("Telefone", 45)
        table.string("Whatsapp", 45)
        table.string("Logotipo", 45)
        table.string("Descricao", 100)
        table.string("Endereco", 100)
        table.string("CNPJ", 45)
        table.string("Cor1", 20)
        table.string("Cor2", 20)
        table.string("Cor3", 20)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("loja")
}