import * as React from 'react';
import { range, random, sumBy } from 'lodash'

export default function DifficultyGenerator(props) {
    const iterations = 10
    const max = 10
    const difficulty = sumBy(range(iterations), () => random(max, true))/iterations;
    const formattedDifficulty = new Intl.NumberFormat('en-US', { 
        style: 'decimal', 
        roundingIncrement: 1,
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 1
    }).format(difficulty)
    return (<span className={props.className}>{formattedDifficulty}</span>)
}