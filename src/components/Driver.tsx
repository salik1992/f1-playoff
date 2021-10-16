import styled from "styled-components";
import { Driver } from "../data";

type Props = {
    offsetIndex: number,
    driver: Driver,
    isInPlayoff?: true,
    playoffRunners?: number,
}

export const HEIGHT = 50;

const DriverWrap = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: ${HEIGHT}px;
    line-height: ${HEIGHT}px;
    color: #ffffff;
    background-image: linear-gradient(to top, #000000, #222222);
    transition: transform 800ms;

    .name {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .position, .points, .points-from-last-race {
        padding: 0 20px;
        min-width: 40px;
        font-weight: bold;
    }

    .position {
        text-align: center;
    }

    .points, .points-from-last-race {
        text-align: right;
    }

    .points-from-last-race {
        color: #00aa00;

        &.points-0 {
            color: #999999;
        }
    }
`;

export const DriverView = ({
    offsetIndex, isInPlayoff, playoffRunners = 0, driver: {
        position, name, points, playOffPoints, pointsFromLastRace,
    } }: Props) => (
    <DriverWrap style={{ transform: `translateY(${offsetIndex * HEIGHT}px)` }}>
        <div className="position">
            {position + 1 + (!isInPlayoff ? playoffRunners : 0)}
        </div>
        <div className="name">
            {name}
        </div>
        <div className="points">
            {isInPlayoff ? playOffPoints : points}
        </div>
        <div className={`points-from-last-race points-${pointsFromLastRace}`}>
            +{pointsFromLastRace}
        </div>
    </DriverWrap>
);
