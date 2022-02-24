import React from "react";

const RoadmapCard = ({ item, idx }) => {
  return (
    <div className="roadmap-card">
      <img
        src={item.image}
        style={{
          width: 100 + "%",
          height: 400,
          objectFit: "cover",
          borderRadius: 12,
        }}
        alt=""
      />
      <div className="p-5">
        <h1 className="display-7 text-white">{item.title}</h1>
        <ul className="mt-3">
          {item?.list?.map((listItem, idx) => (
            <li key={idx} className="d-flex align-items-center gap">
              {
                <>
                  {listItem.type !== "arrow" ? (
                    <img src="images/check-circle.svg" />
                  ) : (
                    <img src="images/gradient-arrow-right.svg" />
                  )}
                  <span className="text-white">{listItem.title}</span>
                </>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapCard;
