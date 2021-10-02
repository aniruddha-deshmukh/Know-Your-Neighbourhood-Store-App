import React, { Component } from "react";

class AboutUsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mystyle = {
      width: "100%",
      height: "100%",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };
    return (
      <div class="p-5 bg-image text-white" style={mystyle}>
        <div
          class="container border p-5 mask"
          style={{
            backgroundColor: `rgba(0, 0, 0,0.5)`,
            borderStyle: `groove`,
            borderRadius: `20px`,
          }}
        >
          <div class="story">
            <h2 class="title">
              <b>◘ Our Story</b>
            </h2>
            <br />
            <p>
              Know Your Neighbourhood began in 2005. After years in the IT
              industry, we realized that it was near impossible for the average
              Jane or Joe to create their own website. Traditional web hosting
              services were simply too complicated, time consuming, and
              expensive to manage.
            </p>
            <br />
            <p>
              We created this website with simplicity in our mind. We wanted to
              offer a platform that would require no coding skills or design
              experience. We keep it simple, so users can focus on creating an
              amazing website that reflects their brand. Best of all - it's
              free. You can get online, showcase your brand, or start selling
              products right away. <br />
            </p>
            <br />
            <p>
              After seeing an increased need for ecommerce solutions, we
              developed one of the only fully-featured, free and commission-free
              online store builders, allowing business owners to launch their
              online business.
            </p>
            <p>
              Today, we're proud to empower individuals and small business
              owners around the world. Everyone deserves a website, and we're
              excited to see what you create.
            </p>
          </div>
          <br></br>
          <div class="right">
            <h2 class="title">
              <b>◘ Our Values</b>
            </h2>
            <br />
            <ul>
              <li>
                <div class="titl">Every Individual Deserves Knowledge.</div>
                <br />
                <p>
                  We believe every individual should have the power to create
                  their own website or online store. If you can point and click,
                  you can create a professional website or online store using
                  our free and intuitive tools.
                </p>
              </li>
              <li>
                <div class="titl">Our Student Mean the World</div>
                <br />
                <p>
                  At ABC Learning Centre, we strive to provide exactly what our
                  customers are looking for. A huge part of our brainstorming
                  process is looking at our client feedback to make sure you're
                  well taken care of.
                </p>
              </li>
              <li>
                <div class="titl">In-House Made Unique Course</div>
                <br />
                <p>
                  We are personally committed to delivering the very best.
                  Everything, from customer support to product design and
                  development, is provided by our dedicated (and adorable) team
                  in beautiful BC, Canada.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUsComponent;
