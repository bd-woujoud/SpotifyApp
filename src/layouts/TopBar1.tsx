import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const TopBar1: React.FC = () => {

    const [token, setToken] = useState<string>("")
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('token')
    const handleLogout = () => {

        setToken("")
        window.localStorage.removeItem("token")
        navigate("/");

    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg  mb-5 navbar-light bg-dark  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className="prev-next-buttons ">
                            <button type="button" className="fa fas fa-chevron-left">
                            </button><button type="button" className="fa fas fa-chevron-right">
                            </button></div>

                        {/* Actual search box */}
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback" />
                            <input type="text" className=" rounded-pill  form-control" placeholder="What do you want to listen to?" />
                        </div>

                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                            </li>
                        </ul>
                        <form className="d-flex auth">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#" >Sign Up</a>
                                </li>{!accessToken ?
                                    <Link to='/login'>  <li className="nav-item">
                                        <button className="btn rounded-pill  btn-light fw-bold" type="submit">Log in</button>
                                    </li></Link> :
                                    <Link to='/login'>  <li className="nav-item">
                                        <button className="btn rounded-pill  btn-light fw-bold" onClick={handleLogout} type="submit">Log out</button>
                                    </li></Link>
                                }
                            </ul>


                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default TopBar1