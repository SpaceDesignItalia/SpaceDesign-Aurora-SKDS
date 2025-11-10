import { ref, watch } from 'vue';

export const useThrottle = (value, limit = 300) => {
  let inThrottle = false;
  const throttledValue = ref(value.value);

  watch(
    value,
    (newValue) => {
      if (!inThrottle) {
        throttledValue.value = newValue;
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    },
    { immediate: false }
  );

  return throttledValue;
};

