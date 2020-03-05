import React, { Component } from "react";

import "../../assets/Admin/Players/UpdatePlayers.css";

// controllers
import PlayersController from "../../../Controller/Player.js";
import Axios from "axios";

class UpdatePlayers extends Component {
  constructor() {
    super();
    this.state = {
      playersData: []
    };
  }

  async handleSource(e) {
    e.preventDefault();

    var playersDataTable = [];

    var _source = e.target.Source.value;

    var impl = document.implementation;
    var htmlDoc = impl.createHTMLDocument(null, "html", null);
    htmlDoc.write(_source);

    var playersRawData = await htmlDoc.querySelector(
      "body > div.center_wrapper > div > main > div.detail_box_smooth > article > div > table > tbody"
    ).children;

    await Array.from(playersRawData).map(async (data, i) => {
      if (i !== 0) {
        await playersDataTable.push({
          id: data.cells[1].children[1].pathname.replace("/players/", "") || "",
          name: data.cells[1].innerText.replace(" ", ""),
          fname: data.cells[2].innerText,
          country:
            data.cells[1].children[0].pathname.replace("/countries/", "").toUpperCase() || "",
          totalearning: data.cells[3].innerText
            .replace("$", "")
            .replace(/,/g, ""),
          game: data.cells[4].innerText,
          gametotal: data.cells[5].innerText.replace("$", "").replace(/,/g, "")
        });
      }
    });
    console.table([...playersDataTable]);

    await this.setState({
      playersData: playersDataTable
    });
  }

  async updateDB() {
    await this.state.playersData.map((data, i) => {
      PlayersController.DB_add(data);
    });
  }

  render() {
    return (
      <div className="container UP_main">
        <h1>Update Players</h1>
        <form
          onSubmit={event => {
            this.handleSource(event);
          }}
        >
          <div className="form-group">
            <label for="exampleFormControlTextarea1">
              Paste page Source here
            </label>
            <textarea className="form-control" name="Source"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Crawl
          </button>
        </form>
        <hr />

        <h1>Total Players : {this.state.playersData.length}</h1>

        <button
          onClick={() => this.updateDB()}
          type="button"
          className="btn btn-primary"
        >
          Add /Update
        </button>
      </div>
    );
  }
}

export default UpdatePlayers;
