import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseSeason } from '../parser';

const s2022 = readFileSync(resolve(__dirname, '../seasons/2022.csv')).toString();

describe('parser', () => {
    const season = parseSeason(s2022);

    it('should parse season drivers', () => {
        expect(season.drivers.map(({ name }) => name)).toEqual([
            'Alexander ALBON',
            'Fernando ALONSO',
            'Valtteri BOTTAS',
            'Nyck de VRIES',
            'Pierre GASLY',
            'Lewis HAMILTON',
            'Nico HULKENBERG',
            'Nicholas LATIFI',
            'Charles LECLERC',
            'Kevin MAGNUSSEN',
            'Lando NORRIS',
            'Esteban OCON',
            'Sergio PEREZ',
            'Daniel RICCIARDO',
            'George RUSSELL',
            'Carlos SAINZ',
            'Mick SCHUMACHER',
            'Lance STROLL',
            'Yuki TSUNODA',
            'Max VERSTAPPEN',
            'Sebastian VETTEL',
            'Guanyu ZHOU',
        ]);
    });

    it('should parse races', () => {
        expect(season.races).toEqual([
            'Bahrain',
            'Saudi Arabia',
            'Australia',
            'SPRINT Emilia-Romagna',
            'Emilia-Romagna',
            'Miami',
            'Spain',
            'Monaco',
            'Azerbaijan',
            'Canada',
            'Great Britain',
            'SPRINT Austria',
            'Austria',
            'France',
            'Hungary',
            'Belgium',
            'Netherlands',
            'Italy',
            'Singapore',
            'Japan',
            'USA',
            'Mexico',
            'SPRINT Brazil',
            'Brazil',
            'Abu Dhabi',
        ]);
    });

    it('should contain finishing positions of a driver', () => {
        const vettel = season.drivers.find(({ name }) => name.includes('VETTEL'))!;
        expect(vettel.results).toEqual([
            null,
            null,
            null,
            13,
            8,
            17,
            11,
            10,
            6,
            12,
            9,
            19,
            17,
            11,
            10,
            8,
            14,
            null,
            8,
            6,
            8,
            14,
            9,
            11,
            10,
        ]);
    });
});
