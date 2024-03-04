import React, { Component } from "react";
import '../assets/style.css';
import img1 from '../assets/img/adrien-s.jpg';
import UserCard from "./user-card";
import PersonCard from "./personCard";
import Counter from "./counter";
import CounterV2  from "./counterV2";
import Wrapper from './Wrapper';
import UserForm from './userForm';
import DataGridDemo from './tabla';
import MovieForm from './movie/movieForm';
import FruitForm from './fruit/fruitForm';
import MovieList from './movie/movieList';
import MarsRoverImg from './axios/axiosMarsRoverImg';
import Router from '../routers/router'
import RouterParam from '../routers/routerParam'
import UseNavigate from '../navigate/useNavigate'
import Mensaje from './axios/axiosApiV2';


/*
                    <DataGridDemo></DataGridDemo>
                    <MovieForm /> 
                    <FruitForm /> 

                    <MovieList movies={['movie1', 'movie2', 'movie3', 'movie3', 'movie3', 'movie3', 'movie3']} /> 
        

                    <UserCard firstName="Luis" lastName="Guerrero">
                    </UserCard>
                    <UserCard firstName="Ana" lastName="Guerrero">
                    </UserCard>
                    <UserCard firstName="Benjamin" lastName="Guerrero">
                    </UserCard>
                    <UserCard firstName="Maria" lastName="Guerrero">
                    </UserCard>
                    <PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"} />

                    <Counter />
                    <CounterV2 />
                    <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']} />
                                       <UserForm/> 
                    <MarsRoverImg></MarsRoverImg>
  
*/

class Main extends Component {
    render() {
        return (
            <div className="flex-container main">
                <div className="col-2">
                   
                    <div className="card">
                        <div className="card-header">
                            <h3>Education</h3>
                        </div>
                        <div className="card-body">
                            <h2>Coding Dojo - Full Stack Bootcamp</h2>
                            <p className="dates">Dec 2019 - Mar 2020</p>
                            <p>Triple black belt in Python, MERN, and C#...</p>
                        </div>
                    </div>    
                    <MovieForm />
                    <FruitForm /> 
                    <Mensaje/>

                    <UseNavigate /> 
                    <Router></Router>
                    <RouterParam></RouterParam>


                </div>
                <div className="col-1">
                    <div className="card">
                        <div className="card-header">
                            <span className="badge" id="requests">2</span>
                            <h3>Connection Requests</h3>
                        </div>
                        <ul className="card-list">
                            <li className="card-list-item" id="request-1">
                                <span>
                                    <img src={img1} alt="todd" className="avatar-s" />
                                    Todd E
                                </span>
                                <span>
                                    <img src={img1} alt="accept" className="icon" />
                                    <img src={img1} alt="close" className="icon" />
                                </span>
                            </li>
                            <li className="card-list-item" id="request-2">
                                <span>
                                    <img src={img1} alt="phil" className="avatar-s" />
                                    Phil E
                                </span>
                                <span>
                                    <img src={img1} alt="accept" className="icon" />
                                    <img src={img1} alt="close" className="icon" />
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <span className="badge" id="connections">498</span>
                            <h3>Your Connections</h3>
                        </div>
                        <ul className="card-list">
                            <li className="card-list-item start">
                                <img src={img1} alt="adrien" className="avatar-s" />
                                Adrien D
                            </li>
                            <li className="card-list-item start">
                                <img src={img1} alt="anne" className="avatar-s" />
                                Anne J
                            </li>
                            <li className="card-list-item start">
                                <img src={img1} alt="alayne" className="avatar-s" />
                                Alayne T
                            </li>
                            <li className="card-list-item start">
                                <img src={img1} alt="arry" className="avatar-s" />
                                Arry Y
                            </li>
                        </ul>
                        <div className="card-footer">
                            <a href="#">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;