export interface TReactions {
  like: number;
  thumb: number;
  check: number;
  smile: number;
  sad: number;
}

export interface TQna extends TReactions {
  id: number;
  state: 'rejected' | 'new' | 'answered'
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
}
