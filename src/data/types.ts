export type Driver = {
    name: string;
    results: readonly (number | null)[];
    position: number;
    points: number;
    pointsFromLastRace: number;
    finishesCount: Record<number, number>;
    isInPlayOff: boolean;
    playOffPoints: number;
    playOffFinishesCount: Record<number, number>;
};

export type Season = {
    year: number;
    races: readonly string[];
    drivers: readonly Driver[];
    awardedPoints: Record<number, number>;
    halfPoints: readonly boolean[];
    fastestLapPoints: readonly string[];
};
