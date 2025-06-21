function firstWord(str) {
  str = str.trimStart();
  const spaceIndex = str.indexOf(' ');
  if (spaceIndex === -1) {
    return str;
  }

  return str.substring(0, spaceIndex);
}
