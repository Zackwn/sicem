import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("gatway_pagamento", table => {
        table.integer("ID").primary()
        table.string("Nome", 45)
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("gatway_pagamento")
}