import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { map } from '../../node_modules/@salik1992/fun-ts/dist/array';
import { Controllers, getController } from '../controllers';
import { SeasonController } from '../controllers/interface';
import { Driver } from '../data';
import { PATHS } from '../data/paths';
import { DriverView } from './Driver';
import { SeasonPicker } from './SeasonPicker';
import { H1, H2 } from './Texts';

type Params = {
    season: keyof typeof PATHS,
    championshipStyle: Controllers,
};

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

    useEffect(() => {
        if (!controller) return;
        controller.init(season)
        controller.setters = {
            setRaceIndex,
        }
    }, [season, controller]);

    useEffect(() => {
        if (!controller) return;
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
            <H1>Race {raceIndex + 1}: {raceState.race}</H1>
            {raceState.isPlayoffRunning && (
                <div style={{ position: 'relative' }}>
                    <H2>Playoff Group</H2>
                    {map((driver: Driver) => (
                        <DriverView
                            key={driver.name}
                            offsetIndex={driver.position}
                            driver={driver}
                        />
                    ))(raceState.playoffDrivers)}
                </div>
            )}
            <div style={{ position: 'relative' }}>
                {map((driver: Driver) => (
                    <DriverView
                        key={driver.name}
                        offsetIndex={driver.position - raceState.playoffDrivers.length}
                        driver={driver}
                    />
                ))(raceState.regularDrivers)}
            </div>
        </>
    )
};
