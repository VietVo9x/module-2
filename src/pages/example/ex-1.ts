function charCountTS(str: string): { [key: string]: number } {
  const obj: {
    [key: string]: number;
  } = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : (obj[str[i]] = 1);
  }
  return obj;
}
