import {ExerciseType} from '../enums/ExerciseType.enum';

export default interface Exercise {
  title: string;
  icon?: string;
  type: ExerciseType;
  duration: string;
}
