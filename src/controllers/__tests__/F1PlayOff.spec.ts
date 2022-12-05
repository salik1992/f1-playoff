import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadSeason } from '../../data/loader';
import { parseSeason } from '../../data/parser';
import { F1PlayOff } from '../F1PlayOff';
import { flushPromises, getOrderedDrivers, nTimesAsync } from './utils';

jest.useFakeTimers();

jest.mock('../../data/loader');

const csv = readFileSync(resolve(__dirname, '../../data/seasons/2007.csv')).toString();
const season = parseSeason(csv);
(loadSeason as jest.MockedFunction<typeof loadSeason>).mockResolvedValue(season);

describe('F1Classic controller', () => {
    const controller = new F1PlayOff();

    it('should load and start season on init', () => {
        controller.init('2007');
        expect(loadSeason).toHaveBeenCalled();
    });

    it('should simulate the first race and get results', async () => {
        expect(getOrderedDrivers(controller.getRegularDrivers())).toEqual([
            [0, 'Kimi RAIKKONEN', 10],
            [1, 'Fernando ALONSO', 8],
            [2, 'Lewis HAMILTON', 6],
            [3, 'Nick HEIDFELD', 5],
            [4, 'Giancarlo FISICHELLA', 4],
            [5, 'Felipe MASSA', 3],
            [6, 'Nico ROSBERG', 2],
            [7, 'Ralf SCHUMACHER', 1],
            [8, 'Christijan ALBERS', 0],
            [9, 'Rubens BARRICHELLO', 0],
            [10, 'Jenson BUTTON', 0],
            [11, 'David COULTHARD', 0],
            [12, 'Anthony DAVIDSON', 0],
            [13, 'Heikki KOVALAINEN', 0],
            [14, 'Robert KUBICA', 0],
            [15, 'Vitantonio LIUZZI', 0],
            [16, 'Kazuki NAKAJIMA', 0],
            [17, 'Takuma SATO', 0],
            [18, 'Scott SPEED', 0],
            [19, 'Adrian SUTIL', 0],
            [20, 'Jarno TRULLI', 0],
            [21, 'Sebastian VETTEL', 0],
            [22, 'Mark WEBBER', 0],
            [23, 'Alexander WURZ', 0],
            [24, 'Sakon YAMAMOTO', 0],
        ]);
    });

    it('should simulate all races and get final results', async () => {
        await nTimesAsync(season.races.length - 1, async () => {
            jest.runAllTimers();
            await flushPromises();
        });
        expect(getOrderedDrivers(controller.getPlayOffDrivers(), true)).toEqual([
            [0, 'Kimi RAIKKONEN', 26],
            [1, 'Fernando ALONSO', 14],
            [2, 'Lewis HAMILTON', 12],
            [3, 'Nick HEIDFELD', 5],
        ]);
        expect(getOrderedDrivers(controller.getRegularDrivers())).toEqual([
            [0, 'Felipe MASSA', 94],
            [1, 'Robert KUBICA', 39],
            [2, 'Heikki KOVALAINEN', 30],
            [3, 'Giancarlo FISICHELLA', 21],
            [4, 'Nico ROSBERG', 20],
            [5, 'David COULTHARD', 14],
            [6, 'Alexander WURZ', 13],
            [7, 'Mark WEBBER', 10],
            [8, 'Jarno TRULLI', 8],
            [9, 'Jenson BUTTON', 6],
            [10, 'Sebastian VETTEL', 6],
            [11, 'Ralf SCHUMACHER', 5],
            [12, 'Takuma SATO', 4],
            [13, 'Vitantonio LIUZZI', 3],
            [14, 'Adrian SUTIL', 1],
            [15, 'Christijan ALBERS', 0],
            [16, 'Rubens BARRICHELLO', 0],
            [17, 'Anthony DAVIDSON', 0],
            [18, 'Kazuki NAKAJIMA', 0],
            [19, 'Scott SPEED', 0],
            [20, 'Sakon YAMAMOTO', 0],
        ]);
    });
});
