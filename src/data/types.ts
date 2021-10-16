export type Driver = {
    name: string,
    results: (number | null)[],
    position: number,
    points: number,
    pointsFromLastRace: number,
    finishesCount: Record<number, number>,
    isInPlayOff: boolean,
    playOffPoints: number,
    playOffFinishesCount: Record<number, number>,
};

export type Season = {
    year: number,
    races: string[],
    drivers: Driver[],
    awardedPoints: Record<number, number>,
    halfPoints: boolean[],
    fastestLapPoints: string[],
};
