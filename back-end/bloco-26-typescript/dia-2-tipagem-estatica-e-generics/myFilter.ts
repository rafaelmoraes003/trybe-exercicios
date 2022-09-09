type CallbackInterface<T> = (item: T, index: number, array: T[]) => boolean;

function myFilter<T> (array: T[], callback: CallbackInterface<T>) {
  const arr: T[] = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      arr.push(array[i])
    }
  }

  return arr;
};