import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import './styles.css';


const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <div className="form-container">
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address"
              }
            })}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password", { required: "Password is required" })}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: 2 }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Already have an account? <Link to="/login">Login here</Link>
        </Typography>
      </div>
    </Container>
  );
};

export default RegisterPage;
