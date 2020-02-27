import React, { Component } from "react";

import "../../assets/Admin/Players/UpdatePlayers.css";

class UpdatePlayers extends Component {
  constructor() {
    super();
    this.state = {};
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
          name: data.cells[1].innerText,
          fullName: data.cells[2].innerText,
          country:
            data.cells[1].children[0].pathname.replace("/countries/", "") || "",
          totalEarning : data.cells[3].innerText,
          game : data.cells[4].innerText,
          gameTotal : data.cells[5].innerText,
        });
      }
    });
    console.table([...playersDataTable]);
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
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UpdatePlayers;
