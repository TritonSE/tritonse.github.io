export function makeComparator<Type, Key extends readonly any[]>(keyFunc: (value: Type) => Key): (value1: Type, value2: Type) => number {
  return (value1, value2) => {
    const key1 = keyFunc(value1);
    const key2 = keyFunc(value2);
    for (let i = 0; i < key1.length; i++) {
      if (key1[i] < key2[i]) return -1;
      if (key1[i] > key2[i]) return 1;
    }
    return 0;
  }
}

export function groupBy<Type, Key extends Object>(objects: readonly Type[], keyFunc: (obj: Type) => Key): [Key, Type[]][] {
  const groups = {} as {
    [key: string]: {
      value: any,
      objs: Type[],
    }
  };

  for (const obj of objects) {
    const value = keyFunc(obj);
    const valueString = value.toString();
    if (!groups.hasOwnProperty(valueString)) {
      groups[valueString] = { value, objs: [] };
    }
    groups[valueString].objs.push(obj);
  }

  return Object.values(groups).sort(makeComparator((group) => [group.value])).map((group) => [group.value, group.objs]);
}

export function nameToFilename(name: string) {
  return name.toLowerCase().replace(/ /g, "_");
}
