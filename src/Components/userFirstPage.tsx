import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
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
    <div>
      <h1>First Page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={userDetails.name}
          onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          required
          fullWidth
        />
        <TextField
          label="Phone Number"
          value={userDetails.phone}
          onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
          required
          fullWidth
        />
        <TextField
          label="Email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          required
          fullWidth
        />
        {userDetails.name && userDetails.phone && userDetails.email && (
          <Button type="submit" variant="contained" color="secondary">
            Next
          </Button>
        )}
      </form>
    </div>
  );
};

export default userFirstPage;
