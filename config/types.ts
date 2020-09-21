export type LoginUser = {
  isOwner: boolean;
  validateIn: number;
  refresh: string;
  access: string;
  email?: string;
};
