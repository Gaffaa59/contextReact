import React from "react";
import ReactDOM from 'react-dom';
import MyLine from "./Line";

const DataContext = React.createContext({name: «», surname: «», mark: «»});

class Enter extends React.Component {
    constructor(props) {
      super(props);
      this.data  = [];
      this.state = {name: “”, surname: “”, mark: ""};
  
      this.HChange = this.HChange.bind(this);
      this.changeName = this.changeName.bind(this);
      this.changeSurname = this.changeSurname.bind(this);
      this.changeMark = this.changeMark.bind(this);
      this.HSubmit = this.HSubmit.bind(this);
    }
  
    HChange(event) {
      this.setState({value1: event.target.value});
    }
    changeName(event) {
      this.setState({name: event.target.value});
    }
    changeSurname(event) {
      this.setState({surname: event.target.value});
    }
    changeMark(event) {
      this.setState({mark: event.target.value});
    }

    HSubmit(event){
      event.preventDefault(); 
      this.data.push(<Line name={this.state.name} surname={this.state.surname} mark={this.state.mark}/>)
      ReactDOM.render(<div>{this.data}</div>, document.getElementById('Content'));
    }
  
    render() {
      return (
        <form onSubmit={this.HSubmit}>
          <label>
            Имя
            <input type="text" value={this.state.value1} onChange={this.changeName} /> <br/>
            Фамилия
            <input type="text" value={this.state.value2} onChange={this.changeSurname} /> <br/>
            Марка
            <input type="text" value={this.state.value2} onChange={this.changeMark} /> <br/>
          </label>
          <input type="submit" value="Галка" />
        </form>
      );
    }
  }

export default Enter;