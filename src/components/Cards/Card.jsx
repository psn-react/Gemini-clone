// import React from "react";

import PropTypes from "prop-types";

import { assets } from "../../assets/assets";

Card.propTypes = {
  index: PropTypes.number,
  selectedCard: PropTypes.number,
  handleCardSelect: PropTypes.func,
  card: PropTypes.object,
};

export default function Card({ index, selectedCard, handleCardSelect, card }) {
  return (
    <div
      className={`card ${
        selectedCard === index ? "card_active" : "card_inactive"
      }`}
      onClick={() => handleCardSelect(index)}
    >
      <p>{card.text}</p>

      <img src={assets[card.icon]} />
    </div>
  );
}
