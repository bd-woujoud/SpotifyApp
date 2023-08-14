import React, { useState } from 'react'
import TopBar1 from '../layouts/TopBar1'
import Sidebar from '../layouts/Sidebar'
import FooterPreview from '../layouts/FooterPreview'
import axios from 'axios'


const Search: React.FC = () => {

    const tabCategory = [
        { image: require("../assets/images/Image (10).png"), nomCat: "Podcasts ", color: "#27856a" },
        { image: require("../assets/images/Image (11).png"), nomCat: "Audiobooks", color: "#283ea3" },
        { image: require("../assets/images/Image (12).png"), nomCat: "Made For You ", color: "#1e3264" },
        { image: require("../assets/images/Image (13).png"), nomCat: "Charts", color: "#8d67ab" },
        { image: require("../assets/images/Image (14).png"), nomCat: "Discover ", color: "#8d67ab" },
        { image: require("../assets/images/Image (15).png"), nomCat: "Live Events", color: "#7358ff" },
        { image: require("../assets/images/Image (16).png"), nomCat: "Hip-Hop", color: "#b49bc8" },
        { image: require("../assets/images/Image (17).png"), nomCat: "Pop ", color: "#f037a5" },
        { image: require("../assets/images/Image (18).png"), nomCat: "Country", color: "#9cf0e1" },
        { image: require("../assets/images/Image (19).png"), nomCat: "Latin", color: "#e1118b" },
        { image: require("../assets/images/Image (20).png"), nomCat: "Rock", color: "#d7f27d" },
        { image: require("../assets/images/Image (21).png"), nomCat: "Summer", color: "#8d67ab" },
        { image: require("../assets/images/Image (22).png"), nomCat: "workout", color: "#777777" },
        { image: require("../assets/images/Image (23).png"), nomCat: "R&B", color: "#dc148c" },
        { image: require("../assets/images/Image (24).png"), nomCat: "", color: "" },

    ]


    const [searchKey, setSearchKey] = useState<string>(""); // Add type annotation for searchKey
    const [artists, setArtists] = useState<string[]>([]); // Add type annotation for artists



    const searchArtists = async (token: string, searchKey: string, setArtists: React.Dispatch<React.SetStateAction<any[]>>) => {
        try {
            const response = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchKey,
                    type: "artist"
                }
            });

            setArtists(response.data.artists.items);
        } catch (error) {
            console.error("Erreur lors de la recherche d'artistes :", error);
        }
    };


    return (
        <div>
            <TopBar1 />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <h2 className='text-white ' >Browse All </h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3  ">

                            {

                                tabCategory.map((e, i) => {
                                    return (
                                        <div className="col" style={{ height: "230px" }}>
                                            <div className="card Browse-all " style={{ height: "230px", background: `${e.color}` }}>
                                                <img className="image-browseall" src={e.image} alt="Card image cap" />
                                                <div className="podcasts" >{e.nomCat}</div>

                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </main>
                </div>
            </div>
            <FooterPreview />
        </div>
    )
}

export default Search