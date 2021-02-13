export const random = () => Math.floor(Math.random() * 10) % 10;
export const user = () => ({
  id: random(99),
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${random()}.jpg`,
});
