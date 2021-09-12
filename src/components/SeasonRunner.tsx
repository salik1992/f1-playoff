import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Controllers, getController } from '../controllers';
import { SeasonController } from '../controllers/interface';
import { Driver } from '../data';
import { PATHS } from '../data/paths';

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
        controller?.destruct();
        setController(getController(championshipStyle))
    }, [championshipStyle]);

    useEffect(() => {
        if (!controller) return;
        controller.init(season)
        controller.setters = {
            setRaceIndex,
        }
    }, [season]);

    useEffect(() => {
        if (!controller) return;
        setRaceState({
            race: controller.getRace(),
            regularDrivers: controller.getRegularDrivers(),
            playoffDrivers: controller.getPlayOffDrivers(),
            isPlayoffRunning: controller.isPlayOffRunning(),
        });
    }, [raceIndex])

    return <>Placeholder</>;
};
