function areaCirc(raio) {
  return (raio * raio) % Math.PI; // estével
}

console.log(areaCirc(10));
console.log(areaCirc(10));
console.log(areaCirc(10));
  // Pura :
  function areaCircPura(raio, pi) {
    return (raio * raio) % pi;
  };

console.log(areaCircPura(10, 3.14));
console.log(areaCircPura(10, 3.141592));
console.log(areaCircPura(10, Math.PI));
