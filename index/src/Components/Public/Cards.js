import React from 'react'
import { CardFearless } from './CardFearless';
import { CardSpeakNow } from './CardSpeakNow';
import { CardRed } from './CardRed';
import { Card1989 } from './Card1989';
import { CardSweetEscape } from './CardSweetEscape';
import { CardNevada } from './CardNevada';
import { CardWhereWeAre } from './CardWhereWeAre';
import { CardQuantum } from './CardQuantum';
import { CardBelong } from './CardBelong';

export const Cards = () => {
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <CardFearless />
                    <CardSpeakNow />
                    <CardRed />
                    <Card1989 />
                    <CardSweetEscape />
                    <CardNevada />
                    <CardWhereWeAre />
                    <CardQuantum />
                    <CardBelong />
                </div>
            </div>
        </div>
    )
}
