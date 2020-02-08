import React, { Component } from "react";
import Slider from "react-slick";

import "../assets/home/home.css";

// images
import PUBG from "../images/home/pubg.jpg";
import DOTA2 from "../images/home/dota2.jpg";
import CSGO from "../images/home/csgo.jpg";
import OverWatch from "../images/home/overwatch.jpg";
import LOL from "../images/home/lol.jpg";

// Components
import GameCard from "./gameCard.js";
import PostCard from "./postCard.js";
import TournemantContainer from "../Games/TournmentsContainer.js";

// controllers
import _Tournemants from "../../Controller/Tournemant.js";
// import Matches from "../../Controller/matches.js";
// import Game from "../../Controller/Game.js";
import Blog from "../../Controller/Blog.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      recentTournemants: [],
      recentPostList : []
    };
  }

  async UNSAFE_componentWillMount() {
    // get recent tournemants
    var _tournemantsList = await _Tournemants.getRecentTournemants();

    console.log(_tournemantsList);

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

    console.log(_finalTournemantsList);

    await this.setState({
      recentTournemants: _finalTournemantsList
    });

    // get resent posts

    var _recentPosts = await Blog.getPostList();

    await this.setState({
      recentPostList: _recentPosts
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.recentPostList.length > 4 ? 4 : this.state.recentPostList.length,
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
    return (
      <div className="container-fluid">
        {/* Games */}
        <div className="container home_container row">
          <GameCard img={LOL} title="LOL" link="/games/lol" />
          <GameCard img={DOTA2} title="DOTA 2" link="/games/dota2" />
          <GameCard img={OverWatch} title="OVERWATCH" link="/games/overwatch" />
          <div className="col-sm-2"></div>
          <GameCard img={CSGO} title="CS:GO" link="games/csgo" />
          <GameCard img={PUBG} title="pubg" link="/games/pubg" />
          <div className="col-sm-2"></div>
        </div>

        <div className="container home_header">
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
        <div className="container home_container">
          <h1>Recent Tournemants and Prize Pools</h1>
          {/* <hr /> */}

          <TournemantContainer data={this.state.recentTournemants} />
        </div>

        {/* Upcomming Leagus */}
        <div className="container home_container">
          <h1>Recent Posts</h1>
          <hr />
          <Slider {...settings}>{_posts}</Slider>
        </div>
      </div>
    );
  }
}

export default Home;
