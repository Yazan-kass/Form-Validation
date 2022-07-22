import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const Body = styled.div`
  background: #7d2ae8;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxDiv = styled(Box)`
  background: #fff;
  width: 50%;
  min-height: 200px;
  border-radius: 6px;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  gap: 15px;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    margin: 5px 0;
  }
`;

export const ButtonSignup = styled(Button)`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: 25px;
  &:hover {
    background: #484846;
  }
`;
