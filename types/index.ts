export interface TQna {
  id: number;
  profileImage: string | null;
  userName: string | null;
  date: Date;
  content: string;
  answer: {
    id: number;
    profileImage: string | null;
    userName: string;
    date: Date;
    content: string;
  } | null;
  like: number;
  thumb: number;
  check: number;
  smile: number;
  sad: number;
}
