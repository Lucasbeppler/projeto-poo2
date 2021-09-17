interface IEndereco {
  rua: string
  numero: number
  bairro: string
  cidade: string
}

const endereco: IEndereco = {
  rua: 'Rua x',
  numero: 100,
  bairro: 'Centro',
  cidade: 'Pinheiral'
}

console.log(endereco)