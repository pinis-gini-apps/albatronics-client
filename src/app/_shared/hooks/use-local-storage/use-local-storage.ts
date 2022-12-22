import React from 'react';

const localstorageApiFactory = <T>(key: string) => ({
  getItem(initialValue: T): T {
    try {
      const itemFromStore = localStorage.getItem(key);
      return itemFromStore ? JSON.parse(itemFromStore) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  },
  setItem(item: T) {
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  }
});

const useLocalStorage = <T>(key: string) => React.useMemo(
  () => localstorageApiFactory<T>(key),
  [ key ]
);

export { useLocalStorage };
