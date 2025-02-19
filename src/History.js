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
                            <div className="search-term">Search Term</div>
                            <div className="search-name">Search Results</div>
                        </div>
                        <div className="Ethan-Linker-container">
                            <div className="ethan-name">Ethan Linker</div>
                            <div className="history-details">
                                <div className="user-image">
                                    <div className="user-img">User Image</div>
                                    <div>
                                        <img className="img-tag" src={UserImg} alt="User" width="80" height="80" />
                                    </div>
                                </div>
                        
                                <div className="user-name">
                                    <div>Github User Name</div>
                                    <div className="ethan-link">Ethan Linker</div>
                                </div>
                            </div>
                        </div>
                        <div className="Footer-container">
                            <div className="result-name">Peter Thief</div>
                            <div className="result-notfound">Search result not found</div>
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