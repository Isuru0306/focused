function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temps = array[i];
    array[i] = array[j];
    array[j] = temps;
  }

  return array;
}

function getRandomCharacter(text) {
  return text[Math.floor(Math.random() * text.length)];
}

export function generatePassword(config) {
  const LOWERCASE = "qwertyuiopasdfghjklzxcvbnm";
  const UPPERCASE = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const NUMBER = "1234567890";
  const SPECIAL = '~!@#$%^&*()_+=-?><,."/:;[]{}\\';
  let result = "";
  let alphabet = LOWERCASE;
  result += getRandomCharacter(UPPERCASE);
  if (config.uppercase) {
    alphabet += UPPERCASE;
    result += getRandomCharacter(UPPERCASE);
  }

  if (config.number) {
    alphabet += NUMBER;
    result += getRandomCharacter(NUMBER);
  }

  if (config.special) {
    alphabet += SPECIAL;
    result += getRandomCharacter(SPECIAL);
  }

  for (let i = result.length; i < Number(config.size); i++) {
    result += getRandomCharacter(alphabet);
  }

  return shuffle(result).join("");
}
