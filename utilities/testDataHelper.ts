// generate a randomstring using numbers and letters
export function randomString(stringLength: number) {
  const possibleCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = stringLength; i > 0; --i)
    randomString +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  return randomString;
}

// generate a random age
export function randomAge() {
  return Math.floor(Math.random() * 99) + 1;
}

// generate a random email
export function randomEmail() {
  const randomstring = randomString(10);
  const name = getValidName()
  const lastname = getValidLastName()
  return `${name}.${lastname}-${randomstring}@email.com`;
}
// get any name from the list
export function getValidName() {
  const names = [
    "John",
    "Claire",
    "Anna",
    "Tom",
    "Niel",
    "Laurel",
    "Blair",
    "Quentin",
    "Brad",
    "Oliver",
    "Ralph",
    "James",
    "Mary",
    "Robert",
    "Patricia",
    "John",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Christopher",
    "Karen",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// get any lastname from the list
export function getValidLastName() {
  const lastNames = [
    "Lance",
    "Armstrong",
    "Dickerson",
    "Trump",
    "HardChair",
    "Quinn",
    "Kent",
    "Lopez",
    "Navarro",
    "Chavez",
    "Arce",
    "Smith",
    "Davis",
    "Jones",
    "Miller",
    "Wilson",
    "William",
    "Moore",
    "Thomas",
    "brown",
  ];
  return lastNames[Math.floor(Math.random() * lastNames.length)];
}