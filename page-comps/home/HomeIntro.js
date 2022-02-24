import Link from "next/link";


const HomeIntro = () => (
  <div className="intro">
    <div className="intro-row">
      <div className="intro-left">
        <h1
          style={{ color: "#fff" }}
          className="intro-title display-3 text-font-glock"
        >
          Welcome to <br /> Metaverse of Danerob
        </h1>
        <div className="intro-left-card-filter card-filter-shadow">
          <div
            className="intro-left-card mw-mobile-100 clip-mobile-none"
            style={{
              backgroundColor: "#101010",
              opacity: 0.98,
            }}
          >
            <div className="intro-left-card-row gap">
              <p style={{ color: "white" }} className="text-p text-font-glock">
                Join the DaneRob's Megaverse in the Metaverse, the most exciting
                metaverse in the whole universe — explore and battle with other
                players to collect rare and precious element kronton.
              </p>
              <div className="d-flex w-100 flex-mobile-column align-items-center align-mobile-start gap">
                <a href="https://discord.gg/ZFsHF3Ex" target="_blank">
                  <button
                    className="dark"
                    style={{
                      backgroundImage: 'url("/images/bgg.png")',
                    }}
                  >
                    Join Community
                  </button>
                </a>
                <a href="/game-demo">
                  <button
                    style={{
                      borderColor: "#fff",
                      color: "#fff",
                      backgroundImage: 'url("/images/1-purple.png")',
                    }}
                    className="outline light"
                  >
                    Game Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default HomeIntro;
