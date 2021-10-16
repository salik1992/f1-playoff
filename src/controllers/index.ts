import { F1Classic } from './F1Classic';
import { F1PlayOff } from './F1PlayOff';
import { NascarPlayOff } from './NascarPlayOff';
import { SeasonController } from './interface';

export enum Controllers {
    F1_CLASSIC = 'F1_CLASSIC',
    F1_PLAYOFF = 'F1_PLAYOFF',
    NASCAR_PLAYOFF = 'NASCAR_PLAYOFF',
}

export const getController = (type: Controllers): SeasonController => {
    switch (type) {
        case Controllers.F1_CLASSIC: return new F1Classic();
        case Controllers.F1_PLAYOFF: return new F1PlayOff();
        case Controllers.NASCAR_PLAYOFF: return new NascarPlayOff();
    }
}
