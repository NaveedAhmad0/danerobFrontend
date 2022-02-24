
import { COMMENTS, COMPANIES } from "../../constants/data/home/investors";

const HomeInvestors = () => (
  <section className="investors section-padding">
    <h1 className="text-white text-center text-font-glock display-4">
      Investors & Team
    </h1>
    <ul
      className="mt-large w-100 flex-mobile-column d-flex align-items-center justify-content-between"
      style={{ flexWrap: "wrap" }}
    >
      {COMPANIES.map((company, idx) => (
        <li>
          <img
            width={190}
            height={80}
            src={company.image}
            className="object-fit-contain"
            alt="Image"
          />
        </li>
      ))}
    </ul>
    <div className="user-comments">
      {COMMENTS.map((comment, idx) => (
        <a href={comment.link} target="_blank">
          <div key={idx} className="user-comment clip-mobile-none">
            <img src={comment.image} alt="" />
            <div>
              <span className="font-weight-bold h6">{comment.text}</span>
              <br />
              <span className="text-p">{comment.name}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
    <h1 className="text-font-glock text-white display-6 text-center">
      We creating MegaVerse in the Metaverse.
    </h1>
  </section>
);

export default HomeInvestors;
