export const SELECT_COLOR = 'SELECT_COLOR';
export const SELECT_SIZE = 'SELECT_SIZE';
export const FILTER = 'FILTER';

export const selectColor = color => ({
  type: SELECT_COLOR,
  payload: color,
});

export const selectSize = size => ({
  type: SELECT_SIZE,
  payload: size,
});

export const filter = (
  color = 'all',
  size = 'all',
  price = { min: 12, max: 20 }
) => ({
  type: FILTER,
  payload: { color, size, price },
});
