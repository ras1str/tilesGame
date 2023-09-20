import React, { useCallback, useEffect } from "react"
import { CardList } from "../components/CardList/CardList"
import { RootState } from "src/store/store"
import { useDispatch, useSelector } from "react-redux"
import { cardAdd, restart } from "src/store/cardSlice"
import { reshaffleCards } from "src/utiliti/reshaffleCard"
import { Alert } from "src/components/Alert/Alert"
import css from './MainPage.module.css'

export const MainPage = () => {
    const score = useSelector((state: RootState) => state.cardReducer.score)
    const cardsColor = useSelector((state: RootState) => state.cardReducer.colors)
    const completed =  useSelector((state: RootState) => state.cardReducer.completed)
    const dispatch = useDispatch()

    const reRun = useCallback(() => {
        dispatch(restart())
        dispatch(cardAdd(reshaffleCards(cardsColor)))
    },[cardsColor, dispatch])

    useEffect(()=>{
        if(completed.length === 16){
            reRun()
        }
    }, [reRun, completed.length])
    return (
        <div>
            <div className={css.header}>
                <button
                    className={css.btn}
                    onClick={reRun}
                >
                    New Game
                </button>
                {completed.length === 16 ? <Alert/> : <div className={css.score}>Score : {score}</div>}
                
            </div>
            <CardList />
        </div>
    )
}