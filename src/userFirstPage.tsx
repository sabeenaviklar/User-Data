import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useHistory } from 'react-router-dom';

interface UserDetails {
  name: string;
  phone: string;
  email: string;
}

const userFirstPage: React.FC = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any validation here if needed

    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    
    // Redirect to the second page
    history.push('/second');
  };

  return (
    <Container maxWidth="sm">
      <h1>First Page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Phone number"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button href='/secondPage' type="submit" variant="contained" color="secondary">
          Next
        </Button>
      </form>
    </Container>
  );
};

export default userFirstPage;
