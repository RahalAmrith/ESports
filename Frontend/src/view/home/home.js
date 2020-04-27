import React, { Component } from "react";
import Slider from "react-slick";

import "../assets/home/home.css";

// images
import PUBG from "../images/home/pubg_esportsearnings.jpg";
import DOTA2 from "../images/home/dota2_esports_earnings.jpg";
import CSGO from "../images/home/csgo_esportsearnings.jpg";
import OverWatch from "../images/home/overwatch_esportsearnings.jpg";
import LOL from "../images/home/leagueoflegends_esportsearnings.jpg";
// import Banner_ALl from "../images/home/Banner/All.jpg";
// import Banner_PUBG from "../images/home/Banner/PUBG.jpg";
// import Banner_DOTA2 from "../images/home/Banner/DOTA2.jpg";
// import Banner_CSGO from "../images/home/Banner/CSGO.jpg";
// import Banner_OverWatch from "../images/home/Banner/OverWatch.jpg";
// import Banner_LOL from "../images/home/Banner/LOL.jpg";

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
      bannerImgs: [PUBG, DOTA2, CSGO, OverWatch, LOL],
      bannerTitles: ["PUBG", "DOTA2", "CS:GO", "Over Watch", "LOL"],
      bannerLinks: [
        "/games/pubg",
        "/games/dota2",
        "/games/csgo",
        "/games/overwatch",
        "/games/lol",
      ],
      currentBannerImg: 0,

      bannerDesc: [
        "PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.",
        "Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne.",
        "Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series and was released for Windows, OS X, Xbox 360, and PlayStation 3 in August 2012, while the Linux version was released in 2014.",
        "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Described as a 'hero shooter', Overwatch assigns players into two teams of six, with each player selecting from a roster of over 30 characters, known as 'heroes', each with a unique style of play that is divided into three general roles that fit their purpose.",
        "League of Legends (LoL) is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. Inspired by the Warcraft III: The Frozen Throne mod Defense of the Ancients, the game follows a freemium model and is supported by microtransactions.",
      ],
    };
  }

  async UNSAFE_componentWillMount() {
    // get Players
    var _playersList = await _Players.DB_list(18);

    await this.setState({
      topPlayers: _playersList,
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
      recentTournemants: _finalTournemantsList,
    });

    // get resent posts

    var _recentPosts = await Blog.getPostList();

    await this.setState({
      recentPostList: _recentPosts,
    });
  }

  setBannerImage(num) {
    this.setState({
      currentBannerImg: num,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const _posts = this.state.recentPostList.map((data, i) => {
      return <PostCard key={i} data={data} />;
    });

    const topPlayersList = this.state.topPlayers.slice(0, 25).map((data, i) => {
      return (
        <h5 key={i}>
          <img
            className="flag"
            title=""
            alt="Esports earnings  "
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
        {/* ============================== */}
        {/* ========== left col ========== */}
        {/* ============================== */}
        <div className="col-sm-8">
          {/* gameCards */}
          <div className="home_newBanner home_container">
            <div className="bigBanner">
              <img
                src={this.state.bannerImgs[this.state.currentBannerImg]}
                alt=""
              />

              <h1>{this.state.bannerTitles[this.state.currentBannerImg]}</h1>

              <p>{this.state.bannerDesc[this.state.currentBannerImg]}</p>
            </div>
            <div className="tiles">
              <GameCard
                bannerNum={0}
                setBanner={this.setBannerImage.bind(this)}
                img={this.state.bannerImgs[0]}
                title={this.state.bannerTitles[0]}
                link={this.state.bannerLinks[0]}
              />
              <GameCard
                bannerNum={1}
                setBanner={this.setBannerImage.bind(this)}
                img={this.state.bannerImgs[1]}
                title={this.state.bannerTitles[1]}
                link={this.state.bannerLinks[1]}
              />
              <GameCard
                bannerNum={2}
                setBanner={this.setBannerImage.bind(this)}
                img={this.state.bannerImgs[2]}
                title={this.state.bannerTitles[2]}
                link={this.state.bannerLinks[2]}
              />
              <GameCard
                bannerNum={3}
                setBanner={this.setBannerImage.bind(this)}
                img={this.state.bannerImgs[3]}
                title={this.state.bannerTitles[3]}
                link={this.state.bannerLinks[3]}
              />
              <GameCard
                bannerNum={4}
                setBanner={this.setBannerImage.bind(this)}
                img={this.state.bannerImgs[4]}
                title={this.state.bannerTitles[4]}
                link={this.state.bannerLinks[4]}
              />
            </div>
          </div>

          {/* recent Tournemants */}
          <div className="home_container mb-5">
            <h1>Recent Tournemants and Prize Pools</h1>
            {/* <hr /> */}

            <TournemantContainer data={this.state.recentTournemants} />
          </div>

          {/* Upcomming Leagus */}
          <div className="home_container mb-5">
            <h1>Recent Posts</h1>
            <hr />
            <Slider {...settings}>{_posts}</Slider>
          </div>
        </div>

        {/* =============================== */}
        {/* ========== right col ========== */}
        {/* =============================== */}
        <div className="col-sm-4">
          {/* Top Players */}
          <div className="home_container">
            <h1>Top Players</h1>
            {topPlayersList}
          </div>

          {/* advertiesmen */}
          <div className="homeAdvertiesment">
            <h4>Contact us for advertise here</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
