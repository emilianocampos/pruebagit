import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
const onLog = () => {
  return <div>Bienvenido emiliano</div>;
};
const Login = () => {
  // Estado para los campos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    {
      email === "emicampos1268@gmail.com" && password === "1234"
        ? alert("bien")
        : alert("f");
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Inicio de Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {/* Campo de Email */}
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Campo de Contraseña */}
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Botón de Enviar */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Paper>
      </Container>
      <div>
        {email === "emicampos1268@gmail.com" && password === "1234"
          && onLog()
          }
      </div>
    </>
  );
};

export default Login;
