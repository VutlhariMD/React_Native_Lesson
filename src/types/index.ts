export const CATEGORIES = ['work', 'study', 'personal'] as const;
export type Category = (typeof CATEGORIES)[number];

export type User = {
  id: string;
  email: string;
  username: string;
  salt: string;         // random text mixed into the password before hashing
  passwordHash: string; // hashed password


};
// What the app keeps in memory while logged in: the same user WITHOUT secrets
export type SessionUser = Pick<User, 'id' | 'email' | 'username'>;


export type Note = {
  id: string;
  userId: string;     // owner, so each user only sees their own notes
  title?: string;     // optional
  noteDescription: string;       // the note text
  category: Category;
  createdAt: string;  // ISO date string, when it was added
  updatedAt?: string; // ISO date string, set when the note is edited
};