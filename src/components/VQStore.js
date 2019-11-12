import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import BookFilters from './BookFilters';
import { Container, Row, Col,Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const VQStore = () => {
  const [data, setData] = useState([]);
  const [authors,setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(data);

  useEffect(() => {
    if (selectedAuthors.length >= 1) {
      // console.log('Executed');console.Log (selectedAuthors);

      // setFilteredBooks(books.filter(item => selectedAuthors.findIndex(item.author) >= -1));
      setFilteredBooks(data.filter(item => selectedAuthors.includes(item.author)));
    }
    else {
      setFilteredBooks(data);
    }
  }, [selectedAuthors,data]);

  useEffect(() => {
    const fetchData = async () => {
      var config = {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const result = await axios(
        'https://us-central1-fire-app-bykk.cloudfunctions.net/allbooks', config
      );
      setData(result.data);
      setAuthors([...new Set(result.data.map(item => item.author))])
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container style={{ margin: '0px' }}>
      { data.length === 0 && <Spinner animation="border" />}
      <Row>
        <Col md={2}><BookFilters authors={authors} selectedAuthors={selectedAuthors} handleSelectAuthor={setSelectedAuthors} /></Col>
        <Col md={10}><BookList books={filteredBooks} /></Col>
      </Row>
    </Container>
  );
}



export default withRouter(VQStore);
