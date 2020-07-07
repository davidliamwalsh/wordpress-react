import React, { Component } from 'react'
import BookItem from './BookItem'
import axios from 'axios'

export class books extends Component {
  state = {
    books: [],
    isLoaded: false
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/books')
      .then(res => this.setState({
        books: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { books, isLoaded } = this.state
    if (isLoaded) {
      return (
        <div>
          { books.map(book => (
            <BookItem key={book.id} book={book} />
          )) }
        </div>
      )
    }
    return <h3>is loading....</h3>
  }
}

export default books
