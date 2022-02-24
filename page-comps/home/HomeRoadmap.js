/* eslint-disable react/jsx-key */
import React from "react";
import RoadmapCard from "../../components/RoadmapCard";

import { ROADMAP } from "../../constants/data/home/roadmap";
const HomeRoadmap = () => {
  return (
    <section className="section-padding">
      <h1 className="display-5 text-white text-font-glock mb-5">Roadmap</h1>
      <div className="row">
        {ROADMAP.map((item, idx) => (
          <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-5">
            <RoadmapCard item={item} key={idx} idx={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeRoadmap;
