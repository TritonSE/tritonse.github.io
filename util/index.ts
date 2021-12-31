export function makeComparator<Type, Key extends (number | string)[]>(
  keyFunc: (v: Type) => Key
): (v1: Type, v2: Type) => number {
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

export function groupBy<Type, Key extends number | string>(
  objects: readonly Type[],
  keyFunc: (obj: Type) => Key
): [Key, Type[]][] {
  const groups: {
    [key: string]: {
      value: Key;
      objs: Type[];
    };
  } = {};

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

export function findWhere<Type, Key extends keyof Type>(
  arr: readonly Type[],
  key: Key,
  value: Type[Key]
): Type {
  const found = arr.find((element) => element[key] === value);
  if (found === undefined) {
    throw new Error(`No element found where element.${key} is ${value}`);
  }
  return found;
}

export function findOne<Type>(arr: readonly Type[], query: Partial<Type>): Type {
  const found = arr.find((obj) => {
    for (const [key, value] of Object.entries(query)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((obj as any)[key] !== (value as any)) return false;
    }
    return true;
  });
  if (found !== undefined) {
    return found;
  }
  throw new Error(`No element found matching query: ${query}`);
}

export function makeSlug(name: string, replaceChar = "_") {
  return name.replace(/[^A-Za-z0-9]/g, replaceChar).toLowerCase();
}
