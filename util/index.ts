/**
 * Create a comparator for sorting objects.
 * @param keyFunc Map each object to an array of values to sort by.
 */
export function makeComparator<T, K extends (number | string)[]>(
  keyFunc: (v: T) => K,
): (v1: T, v2: T) => number {
  return (value1, value2) => {
    const key1 = keyFunc(value1);
    const key2 = keyFunc(value2);
    for (let i = 0; i < key1.length; i++) {
      if (key1[i] < key2[i]) return -1;
      if (key1[i] > key2[i]) return 1;
    }
    return 0;
  };
}

/**
 * Group objects by the value of a specified key.
 */
export function groupBy<T, K extends number | string>(
  objects: readonly T[],
  keyFunc: (obj: T) => K,
): [K, T[]][] {
  const groups: Record<
    string,
    {
      value: K;
      objs: T[];
    }
  > = {};

  for (const obj of objects) {
    const value = keyFunc(obj);
    const valueString = value.toString();
    if (!Object.prototype.hasOwnProperty.call(groups, valueString)) {
      groups[valueString] = { value, objs: [] };
    }
    groups[valueString].objs.push(obj);
  }

  return Object.values(groups)
    .sort(makeComparator((group) => [group.value]))
    .map((group) => [group.value, group.objs]);
}

/**
 * Find one object with key-value pairs that match the query.
 */
export function findOne<T>(arr: readonly T[], query: Partial<T>): T {
  const found = arr.find((obj) => {
    for (const [key, value] of Object.entries(query)) {
      if ((obj as Record<string, unknown>)[key] !== value) return false;
    }
    return true;
  });
  if (found !== undefined) {
    return found;
  }
  throw new Error(`No element found matching query: ${JSON.stringify(query)}`);
}

/**
 * Assert that each object in the array has a unique value for the specified key.
 */
export function assertUniqueKey<T, K extends keyof T>(arr: readonly T[], key: K) {
  const seen = new Set();
  for (const element of arr) {
    const value = element[key];
    if (seen.has(value)) {
      throw new Error(`Duplicate value for key '${key.toString()}': ${String(value)}`);
    }
    seen.add(value);
  }
}

/**
 * Convert a string to lowercase and replace non-alphanumeric characters.
 */
export function makeSlug(s: string, replaceChar = "_") {
  return s.replace(/[^A-Za-z0-9]/g, replaceChar).toLowerCase();
}
