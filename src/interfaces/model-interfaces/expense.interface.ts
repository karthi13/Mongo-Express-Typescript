export interface IExpense {
  date: string,
  account: string,
  category?: string,
  subCategory?: string,
  amount: number,
  note?: string,
};
