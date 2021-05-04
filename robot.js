const robot = (string) => {
  const commands = string.split('');
  let x = 0;
  let y = 0;
  let direction = 'north';
  commands.map((command) => {
    if (command === 'G') {
      if (direction === 'north') {
        y++;
      } else if (direction === 'east') {
        x++;
      } else if (direction === 'south') {
        y--;
      } else {
        x--;
      }
    } else if (command === 'R') {
      if (direction === 'north') {
        direction = 'east';
      } else if (direction === 'east') {
        direction = 'south';
      } else if (direction === 'south') {
        direction = 'west';
      } else {
        direction = 'north';
      }
    } else if (command === 'L') {
      if (direction === 'north') {
        direction = 'west';
      } else if (direction === 'east') {
        direction = 'north';
      } else if (direction === 'south') {
        direction = 'east';
      } else {
        direction = 'south';
      }
    }
  });
  return x === 0 && y === 0;
};

robot('RRLG'); //false
robot('GGRRGG'); //true
