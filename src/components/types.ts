import { Controllers } from "../controllers";
import { PATHS } from "../data";

export type Params = {
    season: keyof typeof PATHS,
    championshipStyle: Controllers,
};
