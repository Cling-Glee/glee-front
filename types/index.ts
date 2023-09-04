export const REACTIONS = {
  LIKE: 'LIKE',
  THUMB: 'THUMB',
  CHECK: 'CHECK',
  SMILE: 'SMILE',
  SAD: 'SAD',
} as const;

export type TReactions = {
  [key in keyof typeof REACTIONS]: number;
};

export interface TQna {
  id: number;
  state: 'rejected' | 'accepted' | 'new' | 'answered';
  profileImage: string | null;
  userName: string | null;
  date: Date;
  content: string;
  answer?: {
    id: number;
    profileImage: string | null;
    userName: string;
    date: Date;
    content: string;
  };
  reactions?: TReactions;
}
