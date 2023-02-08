export const dataLoader = async () => {
  const res = await fetch('https://random.dog/woof.json');
  const dog = await res.json();

  return dog.url;
};
