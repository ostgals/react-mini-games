export function randomInt(min, max) {
  const diff = max - min;
  return Math.floor(Math.random() * diff + 1) + min;
}

export function randomString(strings) {
  const index = Math.floor(Math.random() * strings.length);
  return strings[index];
}

export function shuffle(array) {
  return array.sort(() => randomInt(0, 1));
}

