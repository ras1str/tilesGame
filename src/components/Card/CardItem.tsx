import React from 'react';
import css from './Card.module.css';
import { Card } from '../../store/cardSlice';

interface CardProps {
  card: Card;
  handleChoice: (card: Card) => void;
}

export const CardItem: React.FC<CardProps> = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className={css.card} key={card.id}>
      <div className={card.opened ? css.opened : ''}>
        <div className={css.front} style={{ background: card.color }}></div>
        <div className={css.back} style={{ background: 'grey' }} onClick={handleClick}></div>
      </div>
    </div>
  );
};
