export interface AdventureTask {
  id: string;
  title: string;
  description: string;
  image: string;
}

export type TaskStatus = 'available' | 'completed' | 'saved' | 'hidden';

export interface TaskState {
  [key: string]: TaskStatus;
}
