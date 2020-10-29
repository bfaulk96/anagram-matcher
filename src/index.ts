function splitStr(str: string): string[] {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '')
    .split('');
}

export function containsAllLetters(a: string[], b: string[]): boolean {
  const letters = [...a];
  return b.every((letter: string) => {
    const i = letters.indexOf(letter);
    if (i === -1) return false;
    letters.splice(i, 1);
    return true;
  });
}

export function findMatchesInArray(arr: string[], stringToCheck: string): string[] {
  return arr.filter((str: string) => {
    const letters = splitStr(str);
    const b = splitStr(stringToCheck);
    return containsAllLetters(letters, b);
  });
}
