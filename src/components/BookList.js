import React from 'react';

import { CardColumns, Card, Button } from 'react-bootstrap';

class BookList extends React.Component {

  render() {
    return (

      <CardColumns>
        {this.props.books.map(book =>
          <Card key={book.id}  >
            <Card.Img src={book.image} rounded />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.description.slice(0, 50) + '...'}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>buy</Button>
            </Card.Footer>
          </Card>)}

      </CardColumns>
    );
  }
}

export default BookList;
