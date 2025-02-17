export interface IRoutine {
    id: string;
    name: string;
    description?: string;
    completedTimes: number;
    target: number;
}