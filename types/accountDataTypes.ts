type SerializedAccount = {
  id: string;
  name: string;
  type: string;
  balance: string;
  isDefault: boolean;
  createdAt: string;
  _count?: {
    transactions: number;
  };
};
