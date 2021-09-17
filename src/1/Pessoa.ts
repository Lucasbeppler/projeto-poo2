class Pessoas {
  constructor(
  _nome: string,
    _sexo: string,
   _idade: number
  ) {}

  public get nome () {
    return this._nome;
  }

  public set nome(nome: string) {
    if (nome.trim() === ''){
      console.log('Nome incorreto')
      return;
    }

    this._nome = nome
  }

  public get sexo() {
    return this._sexo;
  }

  public set sexo(sexo: string) {
    if (sexo.toLowerCase() !== 'masculino' && sexo.toLowerCase() !== 'feminino') {
      console.log('Sexo incorreto')
      return;
    }

    this._sexo = sexo;
  }

  public get idade() {
    return this._idade;
  }

  public set idade(idade: number) {
    if (idade === 0) {
      console.log('Idade incorreto')
      return;
    }

    this._idade = idade;
  }

  public menoroumaiordeidade(idade: number) {

    if (idade >= 18) {
      console.log('Pessoa é maior de Idade')
      return;
    }
    
    console.log('Pessoa é menor de Idade')
  }
}

const cadastro = new Cadastramento('Lucas', 'Masculino', 23)
cadastro.menorDeIdadeOuMaior(cadastro.idade)
cadastro.nome = ''
cadastro.sexo = 'outro'
cadastro.idade = 0
console.log(cadastro)