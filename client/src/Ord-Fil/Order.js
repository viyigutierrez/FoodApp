function AZ(a, b) {
  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
}

function ZA(a, b) {
  return b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1;
}

function SCOREUP(a, b) {
  return a.score - b.score;
}

function SCOREDW(a, b) {
  return a.score - b.score;
}

function orders(searched1, order) {
  switch (order) {
    case 'AZ':
      return [...searched1].sort(AZ);
    case 'ZA':
      return [...searched1].sort(ZA);
    case 'SCOREUP':
      return [...searched1].sort(SCOREUP);
    case 'SCOREDW':
      return [...searched1].sort(SCOREDW);
    default:
      return searched1;
  }
}

export default orders;
