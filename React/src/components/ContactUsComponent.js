import React, { Component } from "react";

class ContactUsComponent extends Component {
  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };
    return (
      <div class="p-4 bg-image text-white text-center" style={mystyle}>
        <div
          class="container border p-4 mask"
          style={{
            backgroundColor: `rgba(0, 0, 0,0.5)`,
            borderStyle: `groove`,
            borderRadius: `20px`,
            width: '40%'
          }}
        >
          <div class="add">
            <h3 class="loc">
              <u>◘Our Locations:</u>
            </h3>
            <br />
            <br />
            <address>
              <u>
                <big> - Headquaters -</big>
                <br />
              </u>
              ABC House, 29-A,Kalu Sarai, Sarvapriya Vihar
              <br />
              (Near Hauz Khas Bus Terminal),
              <br />
              New Delhi-110016
              <br />
              Phone No: 011-49283471/73/74/75
              <br />
              Fax : 011 - 26513942 <br />
              e-mail : info@abccentre.com
            </address>
            <br />
            <u>
              <big> - Mumbai Office - </big>
              <br />
            </u>
            Raidurg, Serilingampally, Mandal, <br />
            Survey no. 83/1, Plot No.25, 26, Part 29 Panmaqtha, Rangareddy,
            <br />
            Kurla, 400032,
            <br />
            Mumbai, India <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsComponent;
