type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type NovoCarrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: Lowercase<'credito' | 'Debito'>,
    cartao: Cartao,
    endereco: Endereco
};

// Um jeito mais otimizado abaixo

type NovoCarrinhoOtimizado = Omit<Carrinho, 'tipoTransacao'> & {
    tipoTransacao: Lowercase<'credito' | 'Debito'>
    endereco: Endereco,
}
