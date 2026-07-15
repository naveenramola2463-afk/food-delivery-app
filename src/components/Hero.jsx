import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <section id="home" className="hero"></section>
      <div className="hero-left">

        <h1>
          Fresh Food <br />
          Delivered To <br />
          Your Door
        </h1>

        <p>
          Delicious meals from your favourite restaurants.
        </p>

        <button>Order Now</button>

      </div>

      <div className="hero-right">

        <img
          className="main-food"
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
          alt="Burger"
        />

        <motion.div
          className="floating-card card1"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🍕 Pizza
        </motion.div>

        <motion.div
          className="floating-card card2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🍔 Burger
        </motion.div>

        <motion.div
          className="floating-card card3"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🍰 Cake
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;