import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Zombie from '../Zombie';

import Team from '../Team';

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
