import React from 'react'
import "../assets/css/home.css"
import Sidebar from '../layouts/Sidebar'
import FooterPreview from '../layouts/FooterPreview'


const Home: React.FC = () => {

    const tabFocus = [
        { image: require("../assets/images/Image1.png"), Song: "Peaceful Piano", description: "Relax and indulge with beautiful piano pieces" },
        { image: require("../assets/images/Image2.png"), Song: "Deep Focus", description: "Keep calm and focus with ambient and post-rock music." },
        { image: require("../assets/images/Image3.png"), Song: "Jazz Vibes", description: " The original chill instrumental beats playlist." },
        { image: require("../assets/images/Image10.png"), Song: "Focus Flow ", description: " with beautiful piano pieces" },
        { image: require("../assets/images/Image4.png"), Song: "Instrumental Study", description: "Relax and indulge " },

    ]
    const tabPlaylist = [
        { image: require("../assets/images/Image5.png"), Song: "Peaceful Piano", description: "Relax and indulge with beautiful piano pieces" },
        { image: require("../assets/images/Image6.png"), Song: "Deep Focus", description: "Keep calm and focus with ambient and post-rock music." },
        { image: require("../assets/images/Image7.png"), Song: "Jazz Vibes", description: " The original chill instrumental beats playlist." },
        { image: require("../assets/images/Image8.png"), Song: "Focus Flow ", description: " with beautiful piano pieces" },
        { image: require("../assets/images/Image9.png"), Song: "Instrumental Study", description: "Relax and indulge " },

    ]

    console.log(tabPlaylist, "tableList");

    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">


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
                                {

                                    tabFocus.map((e, i) => {
                                        return (

                                            <div className="col list">
                                                <div className="card item">

                                                    <img src={e.image} alt="Card image cap" width="400" />
                                                    <div className="card-body ">
                                                        <h4 className="card-title ">{e.Song}</h4>
                                                        <p className="card-text">{e.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        )

                                    })

                                }

                            </div>
                        </div>

                        <div className="spotify-playlists">
                            <div className="row show-wall">
                                <div className="col">
                                    <h2>Spotify Playlists</h2>
                                </div>
                                <div className="col text-end">
                                    <h6>Show all</h6>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 ">
                                {

                                    tabPlaylist.map((e, i) => {
                                        return (

                                            <div className="col list">
                                                <div className="card item">

                                                    <img src={e.image} alt="Card image cap" width="400" />
                                                    <div className="card-body ">
                                                        <h4 className="card-title ">{e.Song}</h4>
                                                        <p className="card-text">{e.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        )

                                    })

                                }

                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <FooterPreview />
        </div>
    )
}

export default Home