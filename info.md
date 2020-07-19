

## /loja-login 

Email
Senha

-------------------------

## /loja-create

Nome
Email
Senha


--------------------------

## /template-read

Retorno:
{
    templates: [
        {
            ID:Number,
            Nome:String,
            Capa:String
        },...
    ],
    template-selecionado: Number
}


## /template-update

--------------------------

## /loja-read

Retorno: {
    "Nome": String,
    "Email": String,
    "Telefone": String,
    "Whatsapp": String,
    "Descricao": String,
    "Endereco": String,
    "CNPJ": String
}

## loja-update

Envio: {
    "Nome": String,
    "Email": String,
    "Telefone": String,
    "Whatsapp": String,
    "Descricao": String,
    "Endereco": String,
    "CNPJ": String
}

## produto-list

## produto-update

Envio: [{
    "ProdutoID": Int,
    "Preco": Decimal
    "Promocao": Bool,
    "ValorPromocional": Decimal
}]

## produto-search

## campanha-list

## campanha-update

## pagamento-read

## pagamento-update

## bot-read

## bot-update

## dominio-read

## dominio-update

## personalizacao-read

## personalizacao-update

