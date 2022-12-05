import { render } from '@testing-library/react';
import { Driver } from '../../data';
import { DriverView } from '../Driver';

const DRIVER = {
    name: 'Test DRIVER',
    position: 0,
    points: 20,
    pointsFromLastRace: 10,
} as unknown as Driver;

describe('Driver', () => {
    it('should render driver', () => {
        render(<DriverView offsetIndex={0} driver={DRIVER} />);
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});
