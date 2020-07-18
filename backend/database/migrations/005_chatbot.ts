import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("chatbot", table => {
        table.integer("ID").primary()
        table.integer("Loja_ID").references("ID").inTable("loja")
        table.integer("Chatbot_Template_ID").references("ID").inTable("chatbot_template")
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("chatbot")
}