import React from 'react';

class App4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: undefined, txtNome: ''}
    }

    changeTxtNome = (event) =>{
        this.setState({txtNome: event.target.value})
      }

    persistName = ()=>{
      if (this.state.txtNome != ''){
        this.setState({nome: this.state.txtNome})
      }
    }

    clearName = () =>{
      this.setState({nome: undefined, txtNome: ''})
    }

  render(){
    const renderForm = () => {
      return (
        <div>
        Nome: <input type="text" value = {this.state.nome} onChange={this.changeTxtNome}></input>
        <button onClick={this.persistName}>Salvar</button>
        </div>
      )
    }
    const renderTxt = () => {
    return (
      <div>
        <p>
          Olá {this.state.nome}
        </p>
        <button onClick={this.clearName}>Reinserir Nome</button>
      </div>
      )
    }

    return !this.state.nome ? renderForm() : renderTxt()

  }
}

export default App4;
