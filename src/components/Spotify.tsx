import React from 'react'
import focus from '../assets/images/Image.png'
function Spotify() {
  return (
      <div> 
          <div className="spotify-playlists">
          <div className="row show-wall">
              <div className="col">
                  <h2>Focus</h2>
              </div>
              <div className="col text-end">
                  <h6>Show all</h6>
              </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 ">
              <div className="col list">
                  <div className="card item">

                      <img src={focus} alt="Card image cap" width="400" />
                      <div className="card-body ">
                          <h4 className="card-title ">Today's Top Hits</h4>
                          <p className="card-text">Selena Gomez are on top of the....</p>
                      </div>
                  </div>
              </div>
              <div className="col list">
                  <div className="card item">

                      <img src={focus} alt="Card image cap" width="400" />
                      <div className="card-body ">
                          <h4 className="card-title ">Today's Top Hits</h4>
                          <p className="card-text">Selena Gomez are on top of the....</p>
                      </div>
                  </div>
              </div>
              <div className="col list">
                  <div className="card item">

                      <img src={focus} alt="Card image cap" width="400" />
                      <div className="card-body ">
                          <h4 className="card-title ">Today's Top Hits</h4>
                          <p className="card-text">Selena Gomez are on top of the....</p>
                      </div>
                  </div>
              </div>
              <div className="col list">
                  <div className="card item">

                      <img src={focus} alt="Card image cap" width="400" />
                      <div className="card-body ">
                          <h4 className="card-title ">Today's Top Hits</h4>
                          <p className="card-text">Selena Gomez are on top of the....</p>
                      </div>
                  </div>
              </div>
              <div className="col list">
                  <div className="card item">

                      <img src={focus} alt="Card image cap" width="400" />
                      <div className="card-body ">
                          <h4 className="card-title ">Today's Top Hits</h4>
                          <p className="card-text">Selena Gomez are on top of the....</p>
                      </div>
                  </div>
              </div>




          </div>
      </div>
      
      
      </div>
  )
}

export default Spotify