import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Zombie from '../Zombie';
import Magician from '../Magician';

import Team from '../Team';

test('test iterators', () => {
  const personBowerman = new Bowerman('Jack');
  const personDaemon = new Daemon('London');
  const personZombie = new Zombie('Victor');
  const personMagician = new Magician('Tsoy');
  const round = new Team();

  round.addAll(personDaemon, personBowerman, personZombie, personMagician);

  const arrRound = round.toArray();

  const arr = [];
  for (const iterator of round) {
    arr.push(iterator);
  }

  expect(arr).toEqual(arrRound);
});

test('test Set function', () => {
  const personDaemon = new Daemon('London');
  const personZombie = new Zombie('Victor');

  const round = new Team();

  round.addAll(personDaemon, personZombie, personZombie);

  expect(round.toArray()).toEqual([personDaemon, personZombie]);
});

test('test Set function throw error', () => {
  const personBowerman = new Bowerman('Jack');
  const round = new Team();

  round.add(personBowerman);
  expect(() => round.add(personBowerman)).toThrow('Такой персонаж уже выбран');
});
