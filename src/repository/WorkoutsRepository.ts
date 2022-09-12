import workoutJSON from "@/assets/workout.json";
import type {IWorkout} from "@/interfaces/iWorkout";

const allWorkouts: IWorkout[] = workoutJSON as IWorkout[];

export function getAllWorkouts() {
    return allWorkouts;
}
