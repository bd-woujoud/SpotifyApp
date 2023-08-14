import React from 'react' 

function Navbar() {

  return (

      <div>
          <div className="topbar">
              <div className="prev-next-buttons">
                  <button type="button" className="fa fas fa-chevron-left" />
                  <button type="button" className="fa fas fa-chevron-right" />
              </div>
              <div className="navbar">
                  <ul>
                      <li>
                          <a href="#">Premium</a>
                      </li>
                      <li>
                          <a href="#">Support</a>
                      </li>
                      <li>
                          <a href="#">Download</a>
                      </li>
                      <li className="divider">|</li>
                      <li>
                          <a href="#">Sign Up</a>
                      </li>
                  </ul>
                  <button type="button">Log In</button>
              </div>
          </div>
      </div>

  )
}

export default Navbar