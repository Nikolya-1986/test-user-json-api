import { Position } from "../../interfaces/position.interface";

export interface PositionState {
    position: Position | null,
    errorMessage: string,
};

export const initialPositionState: PositionState = {
    position: null,
    errorMessage: 'Position state is empy',
};

export default interface DefaultPositionState {
    positionState: PositionState,
};
