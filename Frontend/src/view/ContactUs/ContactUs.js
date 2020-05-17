import React, { Component } from "react";

import "../assets/ContactUs/ContactUs.css";

// controllers
import contact_controller from "../../Controller/Contact";

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async handleSubmit(e) {
    e.preventDefault();

    var res = await contact_controller.Add(
      e.target.name.value,
      e.target.email.value,
      e.target.subject.value,
      e.target.msg.value
    );

    if (res) {
      window.alert("Done! We will contact you soon");
    } else {
      window.alert("Error! please try again");
    }
  }

  render() {
    return (
      <div className="pp_main container App_Page">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              name="email"
              type="email"
              class="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              class="form-control"
              placeholder="subject"
            />
          </div>

          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control" name="msg" rows="5"></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-light">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
