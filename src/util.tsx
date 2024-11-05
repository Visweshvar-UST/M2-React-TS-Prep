import { Sales } from "./App";


export const calculateTotalCash = (data: Sales[]) => {
    return data.filter((obj) => obj.cash).reduce((acc, data) => (acc + data.amount), 0);
}  

export const calculateTotal = (data: Sales[]): React.ReactNode => {
  return data.reduce((acc, data) => (acc + data.amount), 0);
}

export const calculateTotalCredit = (data: Sales[]): React.ReactNode => {
    return data.filter((obj) => !obj.cash).reduce((acc, data) => (acc + data.amount), 0);
}

export const maxBuyer = (data: Sales[]) => {
  const res = data.reduce((max, obj) => (max.amount < obj.amount) ? obj : max, data[0]);
  if(res) {
      const buyer = {
          buyerName: res.name,
          salesTotal: res.amount
      }
      return JSON.stringify(buyer);
  }
  return ;
}