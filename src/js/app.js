import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Zombie from './Zombie';

import Team from './Team';

const personBowerman = new Bowerman('Jack');
const personDaemon = new Daemon('London');
const personZombie = new Zombie('Victor');

const round = new Team();

round.add(personBowerman);
// round.add(personBowerman);

round.addAll(personDaemon, personZombie, personZombie);

const arrRound = round.toArray();

console.log(arrRound);
