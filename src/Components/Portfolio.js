import React from "react";
import cabin from "../Assets/img/portfolio/cabin.png";
import cake from "../Assets/img/portfolio/cake.png";
import circus from "../Assets/img/portfolio/circus.png";
import game from "../Assets/img/portfolio/game.png";
import safe from "../Assets/img/portfolio/safe.png";
import submarine from "../Assets/img/portfolio/submarine.png";
import CardComponent from "./CardCompnent";
import Divider from "./Divider";
import Modal from "./PortFolioModal";

const Portfolio = () => (
  <div>
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <Divider title="Portfolio" />

        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {/* <!-- Portfolio Item 1--> */}
          <CardComponent image={cabin} id="portfolioModal1" />

          {/* <!-- Portfolio Item 2--> */}
          <CardComponent image={cake} id="portfolioModal2" />

          {/* <!-- Portfolio Item 3--> */}
          <CardComponent image={circus} id="portfolioModal3" />

          {/* <!-- Portfolio Item 4--> */}
          <CardComponent image={game} id="portfolioModal4" />

          {/* <!-- Portfolio Item 5--> */}
          <CardComponent image={safe} id="portfolioModal5" />

          {/* <!-- Portfolio Item 6--> */}
          <CardComponent image={submarine} id="portfolioModal6" />
        </div>
      </div>
    </section>
    <Modal image={cabin} title="Log Cabin" id="portfolioModal1" />
    <Modal image={cake} title="TASTY CAKE" id="portfolioModal2" />
    <Modal image={circus} title="CIRCUS TENT" id="portfolioModal3" />
    <Modal image={game} title="CONTROLLER" id="portfolioModal4" />
    <Modal image={safe} title="LOCKED SAFE" id="portfolioModal5" />
    <Modal image={submarine} title="SUBMARINE" id="portfolioModal6" />
  </div>
);

export default Portfolio;
