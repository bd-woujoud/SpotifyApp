import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css'
import gmail from '../assets/images/Frame.png'

const CLIENT_ID = "e4b7ef8678dd43ec806a895185732d04";
const REDIRECT_URI = "http://localhost:3000"; // Must match your app's redirect URI


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform authentication logic here, e.g., validate user credentials
    if (username === "valid" && password === "valid") {
      redirectToSpotifyLogin();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const redirectToSpotifyLogin = () => {
    const queryParams = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: "token",
      redirect_uri: REDIRECT_URI,
      scope: "user-read-private user-read-email", // Add necessary scopes
    });
    const loginUrl = `https://accounts.spotify.com/authorize?${queryParams}`;
    console.log(loginUrl);

    window.location.href = loginUrl;
    navigate("/");
  };

  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1] || "";

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token || "");
  }, []);




  return (
    <div id='login'>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-12">
            <div className="headerBar">
              <div className="headerLogo text-center">
                <a href="#">
                  <img className="headerLogoImage" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
                  <div className="card border-0 my-5">

                    <div className="card-body p-4 p-sm-5">
                      <div className="d-grid">
                        <button className=" btn btn-perso btn btn-perso-social bg-primary text-white text-uppercase fw-bold rounded-pill" type="submit">
                          <i className="fab fa-facebook me-2" style={{ color: "ffffff" }}></i> Sign in with Facebook
                        </button>
                      </div>
                      <div className="d-grid mb-2">
                        <button className="btn btn-perso btn btn-perso-social bg-dark text-white btn btn-perso text-uppercase fw-bold rounded-pill" type="submit">
                          <i className="fab fa-apple me-2" /> Sign in with Apple
                        </button>
                      </div>
                      <div className="d-grid mb-2">
                        <button className="btn btn-perso btn btn-perso-social bg-white  btn btn-perso text-uppercase fw-bold rounded-pill" type="submit">
                          <img className="gmail" src={gmail} alt="gmail" />
                          Sign in with Google
                        </button>
                      </div>

                      <div className="my-4 my-4-perso divider">

                        <div className='divider-OR'>   <span>OR</span>
                        </div>
                      </div>
                      <form>

                        <div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address or username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address or username' />

                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>



                            <div className="input-group ">
                              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                              <i className="eye float-end far fa-eye-slash me-2 " id="togglePassword"
                                style={{ cursor: 'pointer', marginLeft: '-20px', zIndex: 100 }}></i>
                            </div>
                          </div>

                        </div>

                        <div className="row ">
                          <div className="forgot-password  text-decoration-underline ">Forgot password ?</div>
                          <div className="col-md-6 ">

                            <div className="custom-control custom-checkbox d-inline-flex align-items-center">
                              <input type="checkbox" className="custom-control-input" id="rememberPasswordCheck" />
                              <label className="custom-control-label ms-2" htmlFor="rememberPasswordCheck"> Remember me</label>
                            </div>

                          </div>

                          <div className="col-md-6 text-end">
                            <button onClick={handleLogin} className="btn btn-perso sign-in btn btn-perso-primary btn btn-perso  text-uppercase fw-bold">
                              <span className='logIn'>LOG IN</span></button>
                          </div>
                        </div>

                        <hr className="my-4 my-4-perso" />
                        <div>
                          <div className="row">
                            <div className="don-t-have-an-account  text-center fw-bold">Don't have an account?</div>
                            <div className="d-grid">
                              <button onClick={handleLogin} className="btn btn-perso btn btn-perso-social bg-white  btn btn-perso text-uppercase fw-bold rounded-pill text-muted" type="submit">
                                Sign up for Spotify
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login