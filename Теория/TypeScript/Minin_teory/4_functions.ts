// FUNCTION
function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toLocaleUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

// Перегрузка функии - отпределяет количество передаваемых аргументов
function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition {}

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log('Empty', position()); // { x: undefined, y: undefined }
console.log('One params', position(42)); // { x: 42, y: undefined }
console.log('Two params', position(42, 5)); // { x: 42, y: 5 }
