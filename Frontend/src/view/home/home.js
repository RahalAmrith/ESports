import React, { Component } from "react";
import Slider from "react-slick";

import "../assets/home/home.css";

// images
import PUBG from "../images/home/pubg_esportsearnings.jpg";
import DOTA2 from "../images/home/dota2_esports_earnings.jpg";
import CSGO from "../images/home/csgo_esportsearnings.jpg";
import OverWatch from "../images/home/overwatch_esportsearnings.jpg";
import LOL from "../images/home/leagueoflegends_esportsearnings.jpg";
import Banner_ALl from "../images/home/Banner/All.jpg";
import Banner_PUBG from "../images/home/Banner/PUBG.jpg";
import Banner_DOTA2 from "../images/home/Banner/DOTA2.jpg";
import Banner_CSGO from "../images/home/Banner/CSGO.jpg";
import Banner_OverWatch from "../images/home/Banner/OverWatch.jpg";
import Banner_LOL from "../images/home/Banner/LOL.jpg";

// Components
import GameCard from "./gameCard.js";
import PostCard from "./postCard.js";
import TournemantContainer from "../Games/TournmentsContainer.js";

// controllers
import _Tournemants from "../../Controller/Tournemant.js";
import _Players from "../../Controller/Player.js";
// import Matches from "../../Controller/matches.js";
// import Game from "../../Controller/Game.js";
import Blog from "../../Controller/Blog.js";
import Config from "../../Controller/config.js";

var numeral = require("numeral");

class Home extends Component {
  constructor() {
    super();
    this.state = {
      recentTournemants: [],
      topPlayers: [],
      recentPostList: [],
      bannerImgs: [
        Banner_ALl,
        Banner_DOTA2,
        Banner_CSGO,
        Banner_OverWatch,
        Banner_LOL,
        Banner_PUBG
      ],
      currentBannerImg: 0
    };
  }

  async UNSAFE_componentWillMount() {
    // get Players
    var _playersList = await _Players.DB_list(18);

    await this.setState({
      topPlayers: _playersList
    });

    // get recent tournemants
    var _tournemantsList = await _Tournemants.getRecentTournemants();

    var _finalTournemantsList = [];

    await _tournemantsList.map((data, i) => {
      if (data.prizepool !== null) {
        _finalTournemantsList.push(data);
      }
    });
    await _tournemantsList.map((data, i) => {
      if (data.prizepool === null) {
        _finalTournemantsList.push(data);
      }
    });

    await this.setState({
      recentTournemants: _finalTournemantsList
    });

    // get resent posts

    var _recentPosts = await Blog.getPostList();

    await this.setState({
      recentPostList: _recentPosts
    });
  }

  setBannerImage(num) {
    this.setState({
      currentBannerImg: num
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:
        this.state.recentPostList.length > 4
          ? 4
          : this.state.recentPostList.length,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const _posts = this.state.recentPostList.map((data, i) => {
      return <PostCard key={i} data={data} />;
    });

    const topPlayersList = this.state.topPlayers.slice(0, 25).map((data, i) => {
      return (
        <h5 key={i}>
          <img
              className="flag"
              alt=""
              src={Config.parseCountry(data.country).flag}
            />
          {data.player_name}
          <span style={{ float: "right", color: "#00ff00" }}>
            {numeral(data.total_earning).format("$ 0.00 a")}
          </span>
        </h5>
      );
    });

    return (
      <div className="container-fluid row mb-5">
        <div className="col-md-3 mb-5">
          <div className="home_container">
            <h1>Top Players</h1>
            {topPlayersList}
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="home_container">
            <h1>Top 5 Esports Earning Games</h1>
            <div className="home_banner_back">
              <img
                className="home_banner"
                src={this.state.bannerImgs[0]}
                style={
                  this.state.currentBannerImg === 0
                    ? { opacity: 1, transform: "translateY(0px)" }
                    : { opacity: 0, transform: "translateY(-20.23vw)" }
                }
                alt="WorlEsports Earnnings Games"
              />
              <img
                className="home_banner"
                src={this.state.bannerImgs[1]}
                style={
                  this.state.currentBannerImg === 1
                    ? { opacity: 1, transform: "translateY(-20.23vw)" }
                    : { opacity: 1, transform: "translateY(0px)" }
                }
                alt="WorlEsports Earnnings Games"
              />
              <img
                className="home_banner"
                src={this.state.bannerImgs[2]}
                style={
                  this.state.currentBannerImg === 2
                    ? { opacity: 1, transform: "translateY(-40.47vw)" }
                    : { opacity: 0, transform: "translateY(-20.23vw)" }
                }
                alt="WorlEsports Earnnings Games"
              />
              <img
                className="home_banner"
                src={this.state.bannerImgs[3]}
                style={
                  this.state.currentBannerImg === 3
                    ? { opacity: 1, transform: "translateY(-60.71vw)" }
                    : { opacity: 0, transform: "translateY(-40.47vw)" }
                }
                alt="WorlEsports Earnnings Games"
              />
              <img
                className="home_banner"
                src={this.state.bannerImgs[4]}
                style={
                  this.state.currentBannerImg === 4
                    ? { opacity: 1, transform: "translateY(-80.94vw)" }
                    : { opacity: 0, transform: "translateY(-60.71vw)" }
                }
                alt="WorlEsports Earnnings Games"
              />
              <img
                className="home_banner"
                src={this.state.bannerImgs[5]}
                style={
                  this.state.currentBannerImg === 5
                    ? { opacity: 1, transform: "translateY(-101.18vw)" }
                    : { opacity: 0, transform: "translateY(-80.94vw)" }
                }
                alt="WorlEsports Earnnings Games"
              />
            </div>

            {/* Games */}
            <div className="row">
              <div className="col-md-1"></div>
              <GameCard
                bannerNum={1}
                setBanner={this.setBannerImage.bind(this)}
                img={DOTA2}
                title="DOTA 2"
                link="/games/dota2"
              />
              <GameCard
                bannerNum={2}
                setBanner={this.setBannerImage.bind(this)}
                img={CSGO}
                title="CS:GO"
                link="games/csgo"
              />
              <GameCard
                bannerNum={3}
                setBanner={this.setBannerImage.bind(this)}
                img={OverWatch}
                title="OVERWATCH"
                link="/games/overwatch"
              />
              <GameCard
                bannerNum={4}
                setBanner={this.setBannerImage.bind(this)}
                img={LOL}
                title="LOL"
                link="/games/lol"
              />
              <GameCard
                bannerNum={5}
                setBanner={this.setBannerImage.bind(this)}
                img={PUBG}
                title="PUBG"
                link="/games/pubg"
              />
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-5">
          <div className="homeAdvertiesment">
            <h4>Contact us for advertise here</h4>
          </div>
        </div>

        <div className="col-12 home_header">
          <center>
            <h1>Welcome to eSports </h1>

            <p>
              Esports is a form of sport competition using video games. Esports
              often takes the form of organized, multiplayer video game
              competitions, particularly between professional players,
              individually or as teams.
            </p>
          </center>
        </div>

        {/* recent Tournemants */}
        <div className="container home_container mb-5">
          <h1>Recent Tournemants and Prize Pools</h1>
          {/* <hr /> */}

          <TournemantContainer data={this.state.recentTournemants} />
        </div>

        {/* Upcomming Leagus */}
        <div className="container home_container mb-5">
          <h1>Recent Posts</h1>
          <hr />
          <Slider {...settings}>{_posts}</Slider>
        </div>
      </div>
    );
  }
}

export default Home;
