import React from "react";
import "../Tourist/tourist.css";
import BlueMosque from "../../Assets/balkh.jpg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const places = [
  {
    id: 1,
    picture: BlueMosque,
    pname: "Rowza Sharif",
    address: "Mazar-e-Sharif",
    hyear: "3K",
    longtitute: "1234",
    latitute: "1234",
    specification1: "Religious",
    specification2: "Antient",
    specification3: "Uknown",
    specification4: "Known",
  },
  {
    id: 1,
    picture: BlueMosque,
    pname: "Rowza Sharif",
    address: "Mazar-e-Sharif",
    hyear: "3K",
    longtitute: "1234",
    latitute: "1234",
    specification1: "Religious",
    specification2: "Antient",
    specification3: "Uknown",
    specification4: "Known",
  },
  {
    id: 1,
    picture: BlueMosque,
    pname: "Rowza Sharif",
    address: "Mazar-e-Sharif",
    hyear: "3K",
    longtitute: "1234",
    latitute: "1234",
    specification1: "Religious",
    specification2: "Antient",
    specification3: "Uknown",
    specification4: "Known",
  },
  {
    id: 1,
    picture: BlueMosque,
    pname: "Rowza Sharif",
    address: "Mazar-e-Sharif",
    hyear: "3K",
    longtitute: "1234",
    latitute: "1234",
    specification1: "Religious",
    specification2: "Antient",
    specification3: "Uknown",
    specification4: "Known",
  },
];
const Tourist = () => {
  return (
    <section className="tourist container section">
      <div className="secContainer">
        <div className="secIntro flex">
          <h2 className="secTitle">Tourist Attractions</h2>
          <p className="secText">
            Place filled with stories of strength and beauty. Despite tough
            times, this country is like a hidden gem waiting to be explored.
            Imagine walking on ancient streets, feeling the history under your
            feet, and exploring lively markets full of laughter and delicious
            smells. It's more than just a destination; a journey through time
            and a chance to witness incredibles that warmly welcomes every
            traveler with open arms.
          </p>
        </div>

        <div className="mainContent grid">
          {places.map(
            ({
              pname,
              picture,
              address,
              hyear,
              longtitute,
              latitute,
              specification1,
              specification2,
              specification3,
              specification4,
            }) => {
              return (
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={picture} alt="ismage name" />
                    <span className="location">{address}</span>
                  </div>
                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{pname}</h4>
                      <span className="status">{hyear} Years</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmentity flex">
                        <small>{specification1}</small>
                      </div>

                      <div className="singleAmentity flex">
                        <small>{specification2}</small>
                      </div>
                      <div className="singleAmentity flex">
                        <small>{specification3}</small>
                      </div>
                      <div className="singleAmentity flex">
                        <small>{specification4}</small>
                      </div>
                    </div>
                    <div className="singleAmentity flex">
                      <MdLocationOn className="icon" />
                      <small>Lat: {latitute}</small>|
                      <small>Lon: {longtitute}</small>
                    </div>
                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Tourist;
