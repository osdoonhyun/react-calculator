import { Operands } from '../types/calculate';

const calculate = (operation: string, operands: Operands) => {
  const { firstValue, secondValue } = operands;

  switch (operation) {
    case '/':
      return Math.floor(Number(firstValue) / Number(secondValue));
    case 'X':
      return Number(firstValue) * Number(secondValue);
    case '-':
      return Number(firstValue) - Number(secondValue);
    case '+':
      return Number(firstValue) + Number(secondValue);
    default:
      throw Error('입력 값이 유효하지 않습니다.');
  }
};

export default calculate;
