function techList(tech, person) {
  let techName = [];
  for (let index = 0; index < tech.length; index += 1) {
    techName.push(
      {
        tech: tech[index],
        name: person,
      },
    );
  }
  if (techName.length === 0) {
    return 'Vazio!';
  }
  return techName.sort((obj1, obj2) => ((obj1.tech > obj2.tech) ? 1 : -1));
}


module.exports = techList;