import React from 'react'
import { FaArrowLeftLong, FaRegHeart } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import {Link} from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_info">
          <div className="navigate">
            <FaArrowLeftLong />
          </div>
          <p className='location'>
            <span>Chair</span> / <b>Meryl Lounge Chair</b>
          </p>
          <h1 className='product_title'>Meryl Lounge Chair</h1>
          <div className='price'>
            <h2>$149.99</h2>
            <img src="./imgs/raitings.png" alt="" />
          </div>
          <p className="desc">
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
          <div className="colors">
            {["#C1BDB3", "#58737D", "#545454", "#CBA5A5"].map((item) => {
              return <span style={{ backgroundColor: item }}></span>;
            })}
          </div>
          <div className="add_Cart">
            <div className="count">
              <span className='minus'>-</span>
              <span>1</span>
              <span className='plus'>+</span>
            </div>
            <button>Add to Cart</button>
          </div>
          <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
          <div className="social">
            <div className="like">
              <FaRegHeart />
              Add to Wishlist
            </div>
            <div className="social_links">
              <Link
                target="_blank"
                to={"https://www.facebook.com/abbosbek.qodirov.319/"}
              >
                <FaFacebook />
              </Link>
              <Link to={"/"}>
                <FaTwitter />
              </Link>
              <Link
                target="_blank"
                to={"https://www.pinterest.com/abbosbekqodirov2501/"}
              >
                <FaPinterest />
              </Link>
              <Link
                target="_blank"
                to={"https://www.instagram.com/abbosbek_qodirovv/"}
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero_imgs">
          <div>
            <img src="./imgs/main_img.png" alt="" />
          </div>
          <div className="imgs">
            {[1, 2, 3, 4, 5].map((item) => {
              return <img src={`./imgs/img${item}.png`} alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home