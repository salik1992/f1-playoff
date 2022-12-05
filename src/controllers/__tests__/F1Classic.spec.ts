import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadSeason } from '../../data/loader';
import { parseSeason } from '../../data/parser';
import { F1Classic } from '../F1Classic';
import { flushPromises, getOrderedDrivers, nTimesAsync } from './utils';

jest.useFakeTimers();

jest.mock('../../data/loader');

const csv = readFileSync(resolve(__dirname, '../../data/seasons/2007.csv')).toString();
const season = parseSeason(csv);
(loadSeason as jest.MockedFunction<typeof loadSeason>).mockResolvedValue(season);

describe('F1Classic controller', () => {
    const controller = new F1Classic();

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
        expect(getOrderedDrivers(controller.getRegularDrivers())).toEqual([
            [0, 'Kimi RAIKKONEN', 110],
            [1, 'Lewis HAMILTON', 109],
            [2, 'Fernando ALONSO', 109],
            [3, 'Felipe MASSA', 94],
            [4, 'Nick HEIDFELD', 61],
            [5, 'Robert KUBICA', 39],
            [6, 'Heikki KOVALAINEN', 30],
            [7, 'Giancarlo FISICHELLA', 21],
            [8, 'Nico ROSBERG', 20],
            [9, 'David COULTHARD', 14],
            [10, 'Alexander WURZ', 13],
            [11, 'Mark WEBBER', 10],
            [12, 'Jarno TRULLI', 8],
            [13, 'Jenson BUTTON', 6],
            [14, 'Sebastian VETTEL', 6],
            [15, 'Ralf SCHUMACHER', 5],
            [16, 'Takuma SATO', 4],
            [17, 'Vitantonio LIUZZI', 3],
            [18, 'Adrian SUTIL', 1],
            [19, 'Christijan ALBERS', 0],
            [20, 'Rubens BARRICHELLO', 0],
            [21, 'Anthony DAVIDSON', 0],
            [22, 'Kazuki NAKAJIMA', 0],
            [23, 'Scott SPEED', 0],
            [24, 'Sakon YAMAMOTO', 0],
        ]);
    });
});
