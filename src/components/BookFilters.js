import React from 'react';

import { Form } from 'react-bootstrap';

class BookFilters extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let authorName = e.target.value;
    this.props.handleSelectAuthor(authorName);
  }

  render() {
    return (
      <>
        <b>Filter Authors</b>
        <Form>
          {
            Object.keys(this.props.authors).map((author, index) =>
              <Form.Group key={index} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" value={author} label={author} onChange={this.handleChange} />
              </Form.Group>
            )
          }
        </Form>
      </>
    );
  }
}
export default BookFilters;