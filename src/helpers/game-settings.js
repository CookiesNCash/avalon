import readlineSync from 'readline-sync';

export default () => {
  console.clear();

  const countPlayer = +readlineSync.question('Сколько игроков? ');
  const players = [];

  for (let i = 0; i < countPlayer; i += 1) {
    const name = readlineSync.question('Введи имя игрока: ');
    players.push(name);
  }
  return players;
};
