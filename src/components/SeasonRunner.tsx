import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { map } from '../../node_modules/@salik1992/fun-ts/dist/array';
import { getController } from '../controllers';
import { SeasonController } from '../controllers/interface';
import { Driver } from '../data';
import { DriverView } from './Driver';
import { DriversGroup } from './DriversGroup';
import { SeasonPicker } from './SeasonPicker';
import { H1, H2 } from './Texts';
import { Params } from './types';

type RaceState = {
    race: string,
    regularDrivers: Driver[],
    playoffDrivers: Driver[],
    isPlayoffRunning: boolean,
};

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

    useEffect(() => () => {
        controller?.destruct();
    }, []);

    useEffect(() => {
        if (!controller) return;
        controller.init(season)
        controller.setters = {
            setRaceIndex,
        }
    }, [season, controller]);

    useEffect(() => {
        if (!controller || controller.destructed) return;
        setRaceState({
            race: controller.getRace(),
            regularDrivers: controller.getRegularDrivers(),
            playoffDrivers: controller.getPlayOffDrivers(),
            isPlayoffRunning: controller.isPlayOffRunning(),
        });
    }, [raceIndex])

    useEffect(() => {
        controller?.destruct();
        setController(getController(championshipStyle))
    }, [season, championshipStyle]);

    return (
        <>
            <SeasonPicker />
            <H1>Season - {season}</H1>
            <H1>Race {raceIndex + 1}: {raceState.race}</H1>
            {raceState.isPlayoffRunning && (
                <>
                <H2>Playoff Group</H2>
                <DriversGroup>
                    {map((driver: Driver) => (
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
                {map((driver: Driver) => (
                    <DriverView
                        key={driver.name}
                        offsetIndex={driver.position}
                        driver={driver}
                        playoffRunners={raceState.playoffDrivers.length}
                    />
                ))(raceState.regularDrivers)}
            </DriversGroup>
        </>
    )
};
