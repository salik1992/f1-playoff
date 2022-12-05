import { parseSeason } from '../parser';
import { loadSeason } from '../loader';

jest.mock('../parser');

const CSV_DATA = 'season csv';

const textMock = jest.fn(async () => CSV_DATA);
let fetchMock = jest.fn();

describe('loader', () => {
    beforeAll(() => {
        // @ts-ignore - mock only
        fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({ text: textMock });
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should fetch and parse season data', async () => {
        await loadSeason('2022');
        expect(fetchMock).toHaveBeenCalledWith('2022.csv');
        expect(parseSeason).toHaveBeenCalledWith(CSV_DATA);
    });
});
