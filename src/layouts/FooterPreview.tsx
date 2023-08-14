import React from 'react'

function FooterPreview() {
  return (
    <>

      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark preview">
        <div className=" container-fluid ">
          <div className="text">
            <h6>Preview of Spotify</h6>
            <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <div className="button">
            <button type="button" className=" btn float-end">Sign up free</button>
          </div>
        </div>


      </nav>
    </>
  )
}

export default FooterPreview