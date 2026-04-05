import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">

          {/* TITLE */}
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              Welcome <br />
              Best Suitable
              <br /> Laxury House
            </motion.h1>
          </div>

          {/* DESCRIPTION */}
          <div className="flexColStart secondaryText hero-des">
            <p>Find a variety of properties that suit you very easily</p>
            <p>Forget all difficulties in finding a residence for you</p>
          </div>

          {/* SEARCH BAR */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search location..." />
            <button className="button">Search</button>
          </div>

          {/* STATS */}
          <div className="flexCenter stats">

            <div className="flexColCenter stat">
              <div className="primaryText">
                +
              </div>
              <p className="secondaryText">Premium Products</p>
            </div>

            <div className="flexColCenter stat">
              <div className="primaryText">
                +
              </div>
              <p className="secondaryText">Happy Customers</p>
            </div>

            <div className="flexColCenter stat">
              <div className="primaryText">
                +
              </div>
              <p className="secondaryText">Awards Winning</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
            className="image-container"
          >
              <img src="https://i.ytimg.com/vi/B56pik49Y5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxi5QbZd7EennlYLzHEnYOnSfccA" alt="houses" />

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;