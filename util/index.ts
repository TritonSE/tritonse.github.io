export function makeComparator<Type, Key extends readonly (number | string)[]>(
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

export function nameToFilename(name: string) {
  return name.toLowerCase().replace(/ /g, "_");
}
