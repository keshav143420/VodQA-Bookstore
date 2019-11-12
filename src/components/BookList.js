import React from 'react';

import { CardColumns, Card, Button } from 'react-bootstrap';

class BookList extends React.Component {

  render() {
    return (
      <CardColumns>
        {this.props.books.map(book =>
          <Card key={book.id}  >
            <Card.Img src={book.image} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.description.slice(0, 50) + '...'}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button>Add to Cart</Button>
              <Button variant="light" disabled> &#x20b9; {book.price}</Button>
            </Card.Footer>
          </Card>)}
      </CardColumns>
    );
  }
}

export default BookList;
