class Veiculos {
  _modelo: string;
   _marca: string;
   _ano: number;
   _valordalocacao: number;
   _quantidadededias: number;

  constructor (
    modelo: string,
    marca: string,
    ano: number,
    valordalocacao: number,
    quantidadededias: number
  ) {
    this._modelo = modelo;
    this._marca = marca;
    this._ano = ano;
    this._valordalocacao = valordalocacao;
    this._quantidadededias = quantidadededias;
  }

  public get modelo() {
    return this._modelo;
  }

  public set modelo(modelo: string) {
    if (modelo.trim() === '') {
      console.log('Modelo Incorreto')
      return;
    }

    this._modelo = modelo;
  }

  public get marca() {
    return this._marca;
  }

  public set marca(marca: string) {
    if (marca.trim() === '') {
      console.log('Marca Incorreta')
      return;
    }

    this._marca = marca;
  }

  public get ano() {
    return this._ano;
  }

  public set ano(ano: number) {
    if (ano === 0) {
      console.log('Ano incorreto')
      return;
    }

    this._ano = ano;
  }

  public get valordalocacao() {
    return this._valordalocacao;
  }

  public set valordalocacao(valordalocacao: number) {
    if (valordalocacao === 0) {
      console.log('Valor da locação errado')
      return;
    }

    this._valordalocacao = valordalocacao;
  }

  public get quantidadeDias() {
    return this._quantidadededias;
  }

  public set quantidadeDias(quantidadeDias: number) {
    if (quantidadeDias === 0) {
      console.log('Quantidade de dias inválido')
      return;
    }

    this._quantidadeDias = quantidadeDias;
  }

  public passeio(quantidadedeDias: number, valordaLocacao: number) {
    return quantidadedeDias * valordaLocacao
  }

}

const veiculos = new Veiculos('Modelo a', 'Marca b', 2023, 2000, 10)
const total = veiculos.passeio(5, 3000)
console.log(`Foi um total de R$${total}`)
veiculos.ano = 0
veiculos.marca = ''
veiculos.modelo = ''
veiculos.quantidadeDias = 0
veiculos.valordalocacao = 0