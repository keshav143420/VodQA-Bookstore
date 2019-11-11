import React from 'react';

import { Form } from 'react-bootstrap';

class BookFilters extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {value, checked} = e.target;
    let newSelectedAuthors = [...new Set(this.props.selectedAuthors)];
    if(checked){
      newSelectedAuthors.push(value);
    }
    else{
        newSelectedAuthors = newSelectedAuthors.filter(item=> item!==value);
    }
    this.props.handleSelectAuthor(newSelectedAuthors);
  }

  render() {
    return (
      <>
        <b>Filter Authors</b>
        <Form>
          {
            Object.values(this.props.authors).map((author, index) =>
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