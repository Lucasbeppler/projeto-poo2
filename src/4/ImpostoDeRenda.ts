class ImpostoDeRenda {
 _nome: string
 _rendaanual: number

  constructor(nome: string, rendaanual: number) {
    this._nome = nome;
    this._rendaanual = rendaanual;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    if (nome.trim() === '') {
      console.log('Nome inválido');
      return;
    }

    this._nome = nome;
  }

  public get rendaanual() {
    return this._rendaanual;
  }

  public set rendaAnual(rendaanual: number) {
    if (rendaanual === 0) {
      console.log('Renda anual está incorreta');
      return;
    }
    this._rendaanual = rendaanual;
  }

}

class Impostoderendadapessoafisica extends ImpostoDeRenda {
   _gastosaude: number;

  constructor (nome: string, rendaanual: number, gastosaude: number) {
 
    super(nome, rendaanual);
    this._gastosaude = gastosaude;
  }

  public get gastosaude() {
    return this._gastosaude
  }

  public set gastosaude(gastosaude: number) {
    if (gastosaude < 0) {
      console.log('Gastos com a saúde incorreto')
      return;
    }

    this._gastosaude = gastosaude;
  }

  public calculodeImposto() {
    if (this.rendaanual < 20000) {
      return this.rendaanual * 0.15 - (this.gastosaude === 0 ? 0 : this.gastosaude / 2);
    }

    return this.rendaanual * 0.25 - (this.gastosaude === 0 ? 0 : this.gastosaude / 2);
  }
}

class Impostoderendapessoajuridica extends ImpostoDeRenda {
   _numeroFuncionarios: number

  constructor (nome: string, rendaanual: number, numeroFuncionarios: number) {
    super(nome, rendaanual);
    this._numeroFuncionarios = numeroFuncionarios;
  }

  public get numeroFuncionarios() {
    return this._numeroFuncionarios;
  }

  public set numeroFuncionarios(numeroFuncionarios: number) {
    if (numeroFuncionarios === 0) {
      console.log('Número de funcionários incorreto')
      return;
    }

    this._numeroFuncionarios = numeroFuncionarios
  }

  public calcularImposto() {
    if (this._numeroFuncionarios > 10) {
      return this.rendaanual * 0.14;
    }

    return this.rendaanual * 0.16;
  }

}

const impostoDeRendaPessoaJuridica = new Impostoderendapessoajuridica('Nome x', 500000, 30)
const impostoPessoaJuridica = impostoDeRendaPessoaJuridica.calcularImposto()
console.log(`O imposto da pessoa juridica ficou no valor de ${impostoPessoaJuridica}`)

const impostoDeRendaPessoaFisica = new Impostoderendadapessoafisica('Nome y', 50000, 3000)
const impostoPessoaFisica = Impostoderendadapessoafisica.calcularImposto()
console.log(`O imposto da pessoa fisica ficou no valor de ${impostoPessoaFisica}`)