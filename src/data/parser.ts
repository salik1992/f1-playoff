import { compose } from '@salik1992/fun-ts/dist/core';
import { filter, forEach, map } from '@salik1992/fun-ts/dist/array';
import { split } from '@salik1992/fun-ts/dist/string';
import { parseInt } from '@salik1992/fun-ts/dist/math';
import { Season, Driver } from './types';

const getValues = compose(
    filter<string>((_, index) => index > 0),
    split(','),
);

const getResults = compose(
    map<number, null | number>((result) => Number.isNaN(result) ? null : result),
    map(parseInt()),
);

const driverLineToDriver = (line: string): Driver => {
    const [name, ...results] = split(',')(line);
    return {
        name,
        results: getResults(results),
        finishesCount: {},
        position: 0,
        points: 0,
        pointsFromLastRace: 0,
        isInPlayOff: false,
        playOffPoints: 0,
        playOffFinishesCount: {},
    }
}

export const parseSeason = (csv: string): Season => {
    const [
        yearLine,
        pointsLine,
        racesLine,
        halfPointsLine,
        fastestLapPointLine,
        ...driversLines
    ] = compose(filter<string>((_, index) => index !== 5), split('\n'))(csv);
    const year = parseInt()(getValues(yearLine)[0]);
    const awardedPoints: Record<number, number> = {};
    const points = compose(
        map<number, number>((points) => Number.isNaN(points) ? 0 : points),
        map<string, number>(parseInt()),
        getValues,
    )(pointsLine);
    forEach<number>((points, index) => {
        awardedPoints[index + 1] = points
    })(points);
    const races = getValues(racesLine);
    const halfPoints = compose(
        map((text) => text === 'YES'),
        getValues,
    )(halfPointsLine);
    const fastestLapPoints = getValues(fastestLapPointLine);
    const drivers = map(driverLineToDriver)(driversLines);
    return {
        year, awardedPoints, drivers, races, halfPoints, fastestLapPoints,
    }
};
