import React from "react";
import ShoeCards from "./ShoeCards";
import multicolor_sneaker from "../sneaker-images/multicolor-low sneaker.jpg";
import nikeair_sneaker from "../sneaker-images/nike air sneaker.jpg";
import blueblack_sneaker from "../sneaker-images/blue&black nike sneaker.jpg";
import rednike_sneaker from "../sneaker-images/sneaker-red-nike.jpg";
import greywhite_sneaker from "../sneaker-images/grey and white sneaker.jpg";
import lemonblue_sneaker from "../sneaker-images/lemon and blue sneaker.jpg";
import purple_sneaker from "../sneaker-images/purple sneaker.jpg";
import gold_sneaker from "../sneaker-images/2a163653-c2b8-40df-8b3a-9b83a525327d.jpg";
import { MdFavorite } from "react-icons/md";

const ShoeComponent = () => {
  return (
    <div>
      <div className="bg-red-500 grid grid-cols-4 items-center gap-8">
        <ShoeCards
          images={multicolor_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Multicolor-Sneaker"
          num={4.1}
        />
        <ShoeCards
          images={blueblack_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Blueblack-Sneaker"
          num={4.5}
        />
        <ShoeCards
          images={rednike_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="RedNike-Sneaker"
          num={4.8}
        />
        <ShoeCards
          images={greywhite_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Greywhite-Sneaker"
          num={4.2}
        />
        <ShoeCards
          images={gold_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Gold-Sneaker"
          num={4.5}
        />
        <ShoeCards
          images={purple_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Purple-Sneaker"
          num={4.5}
        />
        <ShoeCards
          images={lemonblue_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Lemonblue-Sneaker"
          num={4.5}
        />
        <ShoeCards
          images={nikeair_sneaker}
          icon={() => <MdFavorite color="coral" fontSize={24} />}
          name="Nikeair-Sneaker"
          num={4.5}
        />
      </div>
    </div>
  );
};

export default ShoeComponent;
