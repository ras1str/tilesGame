import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { check, cardAdd, flipCard, Card } from '../../store/cardSlice';
import css from './CardList.module.css';
import { CardItem } from '../Card/CardItem';
import { reshaffleCards } from 'src/utiliti/reshaffleCard';

export const CardList = () => {
  const opensCards = useSelector((state: RootState) => state.cardReducer.opensCards);
  const cardsColor = useSelector((state: RootState) => state.cardReducer.colors);
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cardReducer.card);

  useEffect(() => {
    dispatch(cardAdd(reshaffleCards(cardsColor)));
  }, [dispatch]);

  const handleChoice = (card: Card) => {
    if (card.completed === true) return;
    if (opensCards.length === 2) return false;
    if (card.opened === true) {
      dispatch(flipCard(card));
      return;
    }
    dispatch(flipCard(card));
  };

  useEffect(() => {
    if (opensCards.length === 2) {
      setTimeout(() => dispatch(check()), 1000);
    }
  }, [opensCards, dispatch]);

  return (
    <div>
      <div className={css.cardGrid}>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};
