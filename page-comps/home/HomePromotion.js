
import Link from "next/link";

const HomePromotion = () => (
  <section className="promotion-model">
    <div className="card-filter-shadow">
      <div className="promotion-left-model-card d-flex align-items-center justify-content-between clip-mobile-none">
        <div className="only-lg"></div>
        <div className="d-flex flex-direction-column gap w-50 w-mobile-100">
          <img src="/images/mecha-logo.png" width={"auto"} height={"auto"} />
          <h4
            className="my-3"
            style={{
              color: "#affc16",
              fontFamily: "Roboto Mono",
              lineHeight: 2,
            }}
          >
            {" "}
            The biggest megaverse in the metaverse invites all explorers in
            search of adventure.
          </h4>
          <p className="text-p text-white">
            The magnificent metaverse of DaneRob is where Danes are on a mission
            to collect kronton a rare element which can be exchanged for $DANE
            tokens. You get an option to get into an exploration adventure in
            the megaverse to search and mine kronton or you can challenge other
            Danes into battle and win kronton as reward.
          </p>
          <p className="text-p text-white">
            Each Dane can be customized from our in-game NFT marketplace, high
            detail of customizations are available to suit both looks and style.
            Moreover, each Dane has a unique serial number registered on the
            blockchain.
          </p>
          <p className="text-p text-white">
            Each attribute can affect the stats of your Dane (strength, speed,
            attack, defense, battle ability ….) and/or be used offensively,
            defensively or to move around, like for example the acquiring and
            assembling of NFT attribute upgrades allows you to develop your own
            play style.
          </p>
          <div className="d-flex flex-mobile-column align-items-center gap">
            <Link href="/game-demo">
              <button
                target="_blank"
                className="light text-white"
                style={{
                  backgroundImage: "url('/images/bgg.png')",
                }}
              >
                See Demo
              </button>
            </Link>

            <Link
              href="https://solanart.io/collections/danerob"
              target="_blank"
            >
              <button
                className="light text-white"
                style={{
                  backgroundImage: "url('/images/1-purple.png')",
                }}
              >
                View on Solanart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="w-100 d-flex align-items-end justify-content-end card-filter-shadow">
      <div className="promotion-right-model-card clip-mobile-none">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-4 col-xs-12 col-sm-12">
            <div className="h-100 me-4">
              <img
                width="130%"
                height="100%"
                className="w-mobile-100 object-fit-cover"
                src="/images/DanBird.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-8 col-xs-12 col-sm-12">
            <div className="right d-flex flex-direction-column gap">
              <h1 className="display-6 fw-bold text-font-glock">
                Origins of Dr.Danerob
              </h1>
              <p className="text-p">
                It all started with Doctor Dane Rob who is an infamous Biotech
                genetic scientist, from his childhood Doctor Dane was fascinated
                by all species of animals and he thought to himself what if
                these species of animals were as smart and intelligent as
                humans.
              </p>
              <p className="text-p">
                He followed his curiosity and started his research at a very
                young age learning about the biology of animals especially in
                Genetics and how a technique called cloning can be used to
                modify the genetics of a being and theoretically enhance its
                abilities. Soon enough the work of Doctor Dane was identified by
                the government as a threat to humanity which led Doctor Dane to
                lose his lab but he had known that this was going to happen
                sooner or later, so he had planned his escape to Bermuda
                Islands. In the mysterious Islands of Bermuda...{" "}
                <a
                  href="https://whitepaper.danerob.com/storyline"
                  target="_blank"
                >
                  Read more.
                </a>
              </p>
              <div className="d-flex align-items-center flex-mobile-column gap">
                <button className="dark">Learn more about storyline</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default HomePromotion;
