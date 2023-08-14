import React from 'react'
import TopBar1 from '../layouts/TopBar1'
import Sidebar from '../layouts/Sidebar'
import FooterPreview from '../layouts/FooterPreview'

import podcast from "../assets/images/podcast.png"


const PlaySpotify: React.FC = () => {

    return (
        <div>
            <TopBar1 />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <h2 className='text-white ' >Good Afternoon</h2>
                        <div className="spotify-playlists">
                            <div className="row show-wall">
                                <div className="col">
                                    <h6 className='text-white pb-2'>Best of : Brown Bag</h6>
                                </div>

                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 ">
                                <div className="col list">
                                    <div className="card item">

                                        <img src={podcast} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h4 className="card-title ">Today's Top Hits</h4>
                                            <p className="card-text">Selena Gomez are on top of the....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col list">
                                    <div className="card item">

                                        <img src={podcast} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h4 className="card-title ">Today's Top Hits</h4>
                                            <p className="card-text">Selena Gomez are on top of the....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col list">
                                    <div className="card item">

                                        <img src={podcast} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h4 className="card-title ">Today's Top Hits</h4>
                                            <p className="card-text">Selena Gomez are on top of the....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col list">
                                    <div className="card item">

                                        <img src={podcast} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h4 className="card-title ">Today's Top Hits</h4>
                                            <p className="card-text">Selena Gomez are on top of the....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col list">
                                    <div className="card item">

                                        <img src={podcast} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h4 className="card-title ">Today's Top Hits</h4>
                                            <p className="card-text">Selena Gomez are on top of the....</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <FooterPreview />
        </div>
    )
}

export default PlaySpotify