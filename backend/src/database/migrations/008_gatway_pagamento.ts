import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("gatway_pagamento", table => {
        table.integer("ID").notNullable().primary()
        table.string("Nome", 45).notNullable()
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("gatway_pagamento")
}