/* eslint-disable react/no-unescaped-entities */

import Progress from "../../components/Progress";
import { BIG_CARD } from "../../constants/data/home/media";
import Link from "next/link";

const HomeMedia = () => (
  <section className="press-media section-padding">
    <h1
      style={{ color: "#affc16" }}
      className="line-height text-center explore-title text-font-glock display-5 mb-5"
    >
      MegaVerse in the MetaVerse
    </h1>
    <div className="media-big-card clip-mobile-none">
      <div className="m-0 row">
        <div className="p-0 col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12">
          <iframe
            width="100%"
            height="350px"
            src="https://www.youtube.com/embed/2hvVWoj2T2k"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <img src="/images/media-2.png" width={100 + "%"} height={"auto"} />
        </div>
        <div className="p-0 col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12">
          <div className="media-big-card-body">
            <h1 className="text-font-glock display-7 line-height-md text-white">
              {BIG_CARD.title}
            </h1>
            <Progress percent={25} className="dark my-3" />
            <p className="text-p text-white">
              <h3> MultiPlayer Battle:</h3> <br />{" "}
              <p>
                Players compete with each other in the magnificent metaverse of
                DaneRob. They are on a mission to collect kronton as much as
                possible and in order to achieve that, they can challenge each
                other to a battle.
              </p>{" "}
              <br />
              <h3> 1 Vs 1 Arena Battle: :</h3> <br />{" "}
              <p>
                To accelerate the collection of Kronton, players enter Battle
                Arena organized by us. Two players who want to fight each other
                meet in DaneRob's ultimate battle arena. They fight each other
                to win the weekly prize pool.
              </p>
              <br />
              <h3>Artificial Intelligence Bots:</h3> <br />{" "}
              <p>
                Unlike other games on the blockchain, you can still continue to
                win prizes even if there are no active users at the time you
                play the game. <br /> Artificial intelligence bots are added to
                servers when the number of active users drops a certain
                threshold. The reward distribution of the players is made
                according to the amount of Kronton they have mined in-game. The
                mined Kronton can be exchanged for $DANE tokens.
              </p>
            </p>

            <div className="w-100 mt-3 d-flex align-items-center justify-content-between align-mobile-center flex-mobile-column w-100 gap">
              <Link href="https://whitepaper.danerob.com/gameplay">
                <button
                  className="light text-white"
                  style={{
                    backgroundImage: "url('images/bgg.png')",
                  }}
                >
                  Learn More
                </button>
              </Link>
              <img
                style={{ width: 40 + "%", height: "auto" }}
                src={BIG_CARD.rightImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeMedia;
