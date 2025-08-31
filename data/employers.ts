export interface Employer {
  readonly name: string;
  readonly url: string;
}

const constEmployers = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Apple",
    url: "https://apple.com",
  },
  {
    name: "Meta",
    url: "https://meta.com",
  },
  {
    name: "Amazon",
    url: "https://amazon.com",
  },
  {
    name: "Microsoft",
    url: "https://microsoft.com",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
  },
  {
    name: "Roblox",
    url: "https://roblox.com",
  },
  {
    name: "Snap",
    url: "https://snapchat.com",
  },
  {
    name: "Uber",
    url: "https://uber.com",
  },
  {
    name: "Jane Street",
    url: "https://janestreet.com",
  },
  {
    name: "Citadel",
    url: "https://citadel.com",
  },
  {
    name: "Visa",
    url: "https://visa.com",
  },
  {
    name: "Capital One",
    url: "https://capitalone.com",
  },
  {
    name: "PayPal",
    url: "https://paypal.com",
  },
  {
    name: "Intuit",
    url: "https://intuit.com",
  },
  {
    name: "Stripe",
    url: "https://stripe.com",
  },
  {
    name: "S&P Global",
    url: "https://spglobal.com",
  },
  {
    name: "Workday",
    url: "https://workday.com",
  },
  {
    name: "Databricks",
    url: "https://databricks.com",
  },
  {
    name: "Cloudflare",
    url: "https://cloudflare.com",
  },
  {
    name: "Nvidia",
    url: "https://nvidia.com",
  },
  {
    name: "Tesla",
    url: "https://tesla.com",
  },
  {
    name: "Salesforce",
    url: "https://salesforce.com",
  },
  {
    name: "ServiceNow",
    url: "https://servicenow.com",
  },
  {
    name: "IBM",
    url: "https://ibm.com",
  },
  {
    name: "Verkada",
    url: "https://verkada.com",
  },
  {
    name: "Arista Networks",
    url: "https://arista.com",
  },
  {
    name: "Cisco",
    url: "https://cisco.com",
  },
  {
    name: "Palantir",
    url: "https://palantir.com",
  },
  {
    name: "Coinbase",
    url: "https://coinbase.com",
  },
  {
    name: "Northrop Grumman",
    url: "https://northropgrumman.com",
  },
  {
    name: "Oracle",
    url: "https://oracle.com",
  },
  {
    name: "SAP",
    url: "https://sap.com",
  },
] as const;
export type EmployerName = (typeof constEmployers)[number]["name"];

const allEmployers: readonly Employer[] = constEmployers.slice();

export { allEmployers };
