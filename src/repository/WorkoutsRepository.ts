import workoutJSON from "@/assets/workout.json";
import type {IWorkout} from "@/interfaces/IWorkout";

const allWorkouts: IWorkout[] = workoutJSON as IWorkout[];

export function getAllWorkouts() {
    return allWorkouts;
}
