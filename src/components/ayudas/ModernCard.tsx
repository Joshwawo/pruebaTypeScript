import React from "react";
import "../../css/ModernCard.css";
import { Link } from 'react-router-dom';

const ModernCard = () => {
  return (
    <div className=" paraXl">
      

      <div className="first hero">
        <img
          className="hero-profile-img object-cover bg-white/90"
          src="https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png"
          alt=""
        />
        <div className="hero-description-bk"></div>
        <div className="hero-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
            alt=""
            className="bg-black"
          />
        </div>
        <div className="hero-description">
          <p className="text-black/60">PokeApp, with all generations and a search engine  </p>
        </div>
        {/* <div className="hero-date text-black/80">
          <p>En este proyecto</p>
          <p>React, Tailwind, TypeScript</p>
        </div> */}
        <div className="hero-btn hover:bg-yellow-600/80 rounded-md">
        <Link to={`/generaciones`}>
          See More..
        </Link>
        </div>
      </div>

      <div className="second hero">
        <img
          className="hero-profile-img object-cover"
          src="https://i.pinimg.com/originals/9f/b1/ff/9fb1ffb05dd28039d1a06ad8e90cbd75.jpg"
          alt=""
        />
        <div className="hero-description-bk"></div>
        <div className="hero-logo">
          <img
            src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg"
            alt=""
          />
        </div>
        <div className="hero-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* <div className="hero-date">
          <p>20.02.2019</p>
        </div> */}
        <div className="hero-btn hover:bg-yellow-600/80 rounded-md">
          <Link to={`lol`}>See More..</Link>
        </div>
      </div>
      <div className="second hero">
        <img
          className="hero-profile-img object-cover"
          src="https://i.blogs.es/8935db/lroyale/1366_2000.jpg"
          alt=""
        />
        <div className="hero-description-bk"></div>
        <div className="hero-logo">
          <img
            src="https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ"
            alt=""
          />
        </div>
        <div className="hero-description">
          <p>Here you can view your profile, upcoming chests and more!</p>
        </div>
        {/* <div className="hero-date">
          <p>20.02.2019</p>
        </div> */}
        <div className="hero-btn hover:bg-yellow-600/80 rounded-md">
          <Link to={`clashroyale`}>See More..</Link>
        </div>
      </div>
    </div>
  );
};

export default ModernCard;
