type Currency = "USD" | "EUR" | "UAH";

type ConvertCurrencyProps = {
  amount: number;
  currency: Currency;
};

function convertCurrency({ amount, currency }: ConvertCurrencyProps): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "EUR" });

