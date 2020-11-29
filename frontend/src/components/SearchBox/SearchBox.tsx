import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      history.push(`/search/${searchTerm}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="searchTerm"
        placeholder="Search Books..."
        onChange={(event) => setSearchTerm(event.target.value)}
        className="mr-sm-2 ml-sm-5"
      />
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
