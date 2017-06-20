import React, { Component } from 'react'
import axios from 'axios'

class ShowItemPokemon extends Component {
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
      this.setData(res)
    })
  }

  setData(resData) {
    console.log(resData)
    this.setState({
      data: resData.data
    })
  }

  render() {
    return (
      <div> {this.state.data.name} </div>
    )
  }
}


export default ShowItemPokemon
