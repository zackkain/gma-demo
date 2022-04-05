import * as React from 'react';

import { Card, CardActions, CardContent, Button } from '@mui/material'

import Belongings from 'Components/Belongings'
import Catalyst from 'Components/Catalyst'
import Dice from 'Components/Dice'
import DifficultyGenerator from 'Components/DifficultyGenerator'
import ElementSymbols from 'Components/ElementSymbols'
import LikelyOdds from 'Components/LikelyOdds'
import Location from 'Components/Location'
import Names from 'Components/Names'
import NorseRunes from 'Components/NorseRunes'
import RandomEventGenerator from 'Components/RandomEventGenerator'
import ScatterDie from 'Components/ScatterDie'
import SensorySnippets from 'Components/SensorySnippets'
import TagSymbols from 'Components/TagSymbols'
import VirtueAndVice from 'Components/VirtueAndVice'

import styles from './index.css'

export default function PlayCard(props) {
    return (<Card className={styles?.Card}>
        <CardContent className={styles?.CardContent}>
            <Belongings className={styles?.Belongings} />
            <Catalyst className={styles?.Catalyst} />
            <Dice className={styles?.Dice} />
            <DifficultyGenerator className={styles?.DifficultyGenerator} />
            <ElementSymbols className={styles?.ElementSymbols} />
            <LikelyOdds className={styles?.LikelyOdds} />
            <Location className={styles?.Location} />
            <Names className={styles?.Names} />
            <NorseRunes className={styles?.NorseRunes} />
            <RandomEventGenerator className={styles?.RandomEventGenerator} />
            <ScatterDie className={styles?.ScatterDie} />
            <SensorySnippets className={styles?.SensorySnippets} />
            <TagSymbols className={styles?.TagSymbols} />
            <VirtueAndVice className={styles?.VirtueAndVice} />
        </CardContent>
        <CardActions>
            <Button></Button>
        </CardActions>
    </Card>)
}

