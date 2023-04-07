import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
  search = () => {
    const { keyWordElement: { value: keyWord } } = this
    this.props.getResult({
      isFirst: false,
      isLoading: true,
      err: ''
    })
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        this.props.getResult({
          isLoading: false,
          result: response.data.items
        })
      },
      (error) => {
        this.props.getResult({
          isLoading: false,
          err: error
        })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-header">Search Github User</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="Enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
