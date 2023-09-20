import { Card } from "src/store/cardSlice"
type cardsColor =  {
    color: string;
}[]

export const reshaffleCards = (cardsColor: cardsColor) => {
    const shaffle: Card[] = [...cardsColor, ...cardsColor]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({
            color: card.color,
            id: Math.random(),
            opened: false,
            completed: false
        }))
    return shaffle
}