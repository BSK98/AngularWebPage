import React from "react";
import './Home.css'
import UserImg from './images/userimg.png';

function Home(){
        return(
            <>
                <div className="home-container">
                    <div className="title">Search Github User</div>
                    <input className="input"/>
                    <button className="search-btn">Search</button>
                    <div>
                        <div className="search-name">Search Results</div>
                        <div className="search-result-container">
                            <div className="user-details">
                                <div className="user-name">User Image</div>
                                <div><img className="user-image" src={UserImg} alt="User" width="80" height="80" /></div>
                            </div>
                            <div className="user-details">
                                <div className="user-name">Github User Name</div>
                                <div>Ethan Linker</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default Home;