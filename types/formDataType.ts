export interface CreateAccountData {
  name: string;
  type: "CURRENT" | "SAVINGS";
  balance: string;
  isDefault?: boolean;
}
