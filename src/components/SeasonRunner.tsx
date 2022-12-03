import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as ROA from 'fp-ts/lib/ReadonlyArray';
import { getController } from '../controllers';
import { SeasonController } from '../controllers/interface';
import { Driver } from '../data';
import { DriverView } from './Driver';
import { DriversGroup } from './DriversGroup';
import { SeasonPicker } from './SeasonPicker';
import { H1, H2 } from './Texts';
import { Params } from './types';

type RaceState = {
    race: string;
    regularDrivers: readonly Driver[];
    playoffDrivers: readonly Driver[];
    isPlayoffRunning: boolean;
};

const ResultsWrap = styled.div<{ driversLength: number }>`
    height: ${({ driversLength }) => driversLength * 50 + 100}px;
`;

export const SeasonRunner = () => {
    const { season, championshipStyle } = useParams<Params>();

    const [controller, setController] = useState<SeasonController | null>(null);

    const [raceIndex, setRaceIndex] = useState(-1);
    const [raceState, setRaceState] = useState<RaceState>({
        race: '',
        regularDrivers: [],
        playoffDrivers: [],
        isPlayoffRunning: false,
    });

    useEffect(
        () => () => {
            controller?.destruct();
        },
        [controller],
    );

    useEffect(() => {
        if (!controller) return;
        controller.init(season!);
        controller.setters = {
            setRaceIndex,
        };
    }, [season, controller]);

    useEffect(() => {
        if (!controller || controller.destructed) return;
        setRaceState({
            race: controller.getRace(),
            regularDrivers: controller.getRegularDrivers(),
            playoffDrivers: controller.getPlayOffDrivers(),
            isPlayoffRunning: controller.isPlayOffRunning(),
        });
    }, [raceIndex]);

    useEffect(() => {
        controller?.destruct();
        setController(getController(championshipStyle!));
    }, [season, championshipStyle]);

    return (
        <>
            <SeasonPicker />
            <H1>Season - {season}</H1>
            <H1>
                Race {raceIndex + 1}: {raceState.race}
            </H1>
            <ResultsWrap
                driversLength={raceState.playoffDrivers.length + raceState.regularDrivers.length}>
                {raceState.isPlayoffRunning && (
                    <>
                        <H2>Playoff Group</H2>
                        <DriversGroup>
                            {ROA.map((driver: Driver) => (
                                <DriverView
                                    key={driver.name}
                                    offsetIndex={driver.position}
                                    driver={driver}
                                    isInPlayoff
                                />
                            ))(raceState.playoffDrivers)}
                        </DriversGroup>
                    </>
                )}
                <DriversGroup offset={raceState.playoffDrivers.length}>
                    {ROA.map((driver: Driver) => (
                        <DriverView
                            key={driver.name}
                            offsetIndex={driver.position}
                            driver={driver}
                            playoffRunners={raceState.playoffDrivers.length}
                        />
                    ))(raceState.regularDrivers)}
                </DriversGroup>
            </ResultsWrap>
        </>
    );
};
