import React, { Component } from 'react'
import axios from 'axios'

class ShowItemPokemonAxios extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        name: '',
        age: 0,
      }
    }
    this.getData()
  }

  getData() {
    axios.get('http://localhost:5000')
    .then((res) => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    return (
      <div>data use from axios : {this.state.data.name} </div>
    )
  }
}


export default ShowItemPokemonAxios
