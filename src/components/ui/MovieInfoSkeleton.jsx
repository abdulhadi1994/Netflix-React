import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const MovieInfoSkeleton = () => {
  return (
    <>
    <div className="movieinfo">
      <div className="movieinfo-img-wrapper">
        <div className="skeleton skeleton-img"></div>
      </div>
      <div className="movieinfo-text">
        <div className="skeleton skeleton-title"></div>
        <div className="movieinfo-info">
          <div className="skeleton skeleton-info-span"></div>
          <div className="skeleton skeleton-info-span"></div>
          <div className="skeleton skeleton-info-span"></div>
        </div>
        <div className="skeleton skeleton-para-title"></div>
        <div className="skeleton skeleton-para"></div>
        <div className="skeleton skeleton-para"></div>
        <div className="skeleton skeleton-para"></div>
        <div className="skeleton skeleton-btn"></div>
      </div>
    </div>

    <div className="moviesinfo-recommend">
        <div className="skeleton skeleton-recommend-title"></div>
        <div className="movieinfo-recommend-list">
            <div className="skeleton skeleton-movie"></div>
            <div className="skeleton skeleton-movie"></div>
            <div className="skeleton skeleton-movie"></div>
            <div className="skeleton skeleton-movie"></div>
            <div className="skeleton skeleton-movie"></div>
            <div className="skeleton skeleton-movie"></div>
        </div>
    </div>
    
    </>
  );
};

export default MovieInfoSkeleton;