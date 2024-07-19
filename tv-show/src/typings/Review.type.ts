import { IUser } from "./User.type";

export interface IReview {
  id: string,
  comment: string,
  rating: number,
  show_id: number,
  user: IUser
}
