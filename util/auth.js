import axios from "axios";

const API_KEY = "AIzaSyB4lB0fYjNYywGNQzHeogVr-r7c0vWzPXA";

function createUser() {
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: pa,
    }
  );
}
