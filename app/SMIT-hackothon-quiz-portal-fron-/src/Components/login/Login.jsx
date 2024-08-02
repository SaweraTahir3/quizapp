


import "./login.css";
import { Link } from "react-router-dom";
import LoginImage from '../../Components/Images/smit.png';


const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const [error, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    setValue(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validiation(value);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
        });

        if (response.ok) {
          const result = await response.json();
          setMessage(result.message);
        } else {
          const errorData = await response.json();
          setMessage(`Error: ${errorData.message}`);
        }
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    }
  }
 
  return (
    <div className="loginPage d-flex justify-content-align-item-center bg-primary vh-100">
      <img src={LoginImage} alt="Login" className="loginImage" />
      <div className="addUser bg-white p-3 rounded w-25">
        <h3>Login</h3>
        <form action="" className="addUserForm" >
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              placeholder="Enter your Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        
        <div className="login">
          <p>Don't have an account?</p>
          <Link to="/signup" className="btn btn-success">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

