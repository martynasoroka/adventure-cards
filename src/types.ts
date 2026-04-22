export type TaskCategory = "observe" | "slow-down" | "elements" | "hands-on";

export interface AdventureTask {
  id: string;
  title: string;
  description: string;
  image: string;
  category: TaskCategory;
}

export type TaskStatus = "available" | "completed" | "saved" | "hidden";

export interface TaskState {
  [key: string]: TaskStatus;
}