import React from "react";
import './History.css'
import UserImg from './images/userimg.png';

function Home(){
        return(
            <>
                <div className="home-container">
                    <div className="title">Your Search History</div>
                    <div>
                        <div className="search-container">
                            <div>Search Term</div>
                            <div className="search-name">Search Results</div>
                        </div>
                        <div className="Ethan-Linker-container">
                        <div className="Hitory-details">Ethan Linker</div>
                            <div className="History-details">
                                <div className="user-name">User Image</div>
                                <div><img className="user-image" src={UserImg} alt="User" width="80" height="80" /></div>
                            </div>
                            <div className="History-details">
                                <div className="user-name">Github Username</div>
                                <div>Ethan Linker</div>
                            </div>
                        </div>
                        <div className="Footer-container">
                            <div>Peter Thief</div>
                            <div className="result-name">Search result not found</div>
                        </div><br/>
                        <div className="button-container">
                        <button className="search-btn">Clear Search History</button>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default Home;