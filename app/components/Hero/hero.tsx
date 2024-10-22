import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
        <h1>Shopping with ShopZone</h1>
        <p className="paragraph">"Shop from anywhere,anytime!At ShopZone,we offer a hassle-free
           shopping experience with easy returns,fast shipping and secure payments.Start shopping now!"
        </p>
      </div>

  
  )
}

export default Hero;