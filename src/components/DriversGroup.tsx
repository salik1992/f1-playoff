import styled from 'styled-components';
import { HEIGHT } from './Driver';

type Props = {
    offset?: number,
};

export const DriversGroup = styled.div<Props>`
    position: relative;
    top: ${({ offset }) => (offset ?? 0) * HEIGHT}px;
    margin-bottom: 30px;
`;