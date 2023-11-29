import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AuthContainer } from "./styled";

export default function AuthPage() {
  return (
    <>
      <AuthContainer>
        <TextField
          id="outlined-basic"
          label="Usuário"
          variant="outlined"
          sx={{
            width: "90%",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          type="password"
          variant="outlined"
          sx={{
            width: "90%",
          }}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          sx={{
            width: "90%",
          }}
        >
          Entrar
        </Button>
      </AuthContainer>
    </>
  );
}
