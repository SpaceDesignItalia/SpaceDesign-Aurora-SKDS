import { ref, watch } from 'vue';

export const useDebounce = (value, delay = 300) => {
  const debouncedValue = ref(value.value);
  let timeout = null;

  watch(
    value,
    (newValue) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        debouncedValue.value = newValue;
      }, delay);
    },
    { immediate: false }
  );

  return debouncedValue;
};

