import Knex from "knex"
export async function seed(knex: Knex) {
    return knex("loja").insert([{Template_ID: 1,Plano_ID:2,Gatway_Pagamento_ID:3,Nome:"Zack",Email:"zack@email.com",Senha:"123456",Ativada:true,Telefone:"18 991930",Whatsapp:"1245660",Logotipo:"http://localhost",Descricao:"des i nodna",Endereco:"pdadad",CNPJ:"33555","Cor1":"","Cor2":"","Cor3":""}])
}