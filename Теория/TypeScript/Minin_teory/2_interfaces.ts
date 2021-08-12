// Interfaces
interface Rect {
  readonly id: string; // поле только для чтения, запрещает изменение
  color?: string; // необязательное поле
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30,
  },
  color: '#ccc',
};

const rect2: Rect = {
  id: '5678',
  size: {
    width: 10,
    height: 5,
  },
};

rect2.color = 'black';
// rect2.id = '1'; // read-only properties

//Приводим объект к типу
const rect3 = {} as Rect;
const rect4 = <Rect>{};

//======================
// Наследование Interface(ов)
interface ReacWithArea extends Rect {
  getArea: () => number;
}

const rect5: ReacWithArea = {
  id: '123',
  size: {
    width: 15,
    height: 7,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

//==========================
// Интерфейсы и классы
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

//==========================
interface IStyles {
  // border: string;
  // marginTop: string;
  // borderRadius: string;
  [key: string]: string; // Типизирование ключа и значения для минимизации кода
}

const css: IStyles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
};
