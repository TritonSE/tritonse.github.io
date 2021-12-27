import { makeComparator } from "../util/sorting";
import _clients from "./clients.json";

interface Client {
  readonly name: string,
  readonly startYear: number,
  readonly endYear: number | null,
  readonly url: string,
}

function sortKey(client: Client) {
  return [
    client.startYear,
    client.endYear === null ? Infinity : client.endYear,
    client.name,
  ]
}

const clients = _clients as Client[];
clients.sort(makeComparator(sortKey));
export default clients as readonly Client[];
