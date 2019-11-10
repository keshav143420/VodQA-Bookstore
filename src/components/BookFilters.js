import React from 'react';

import { Form } from 'react-bootstrap';

class BookFilters extends React.Component {
  render() {
    return (
      <>
        <b>Filter Authors</b>
        <Form>
          {
            Object.keys(this.props.authors).map((author, index) =>
              <Form.Group key={index} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={author} />
              </Form.Group>
            )
          }
        </Form>
      </>
    );
  }
}
export default BookFilters;