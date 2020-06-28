import useI18n from './use-i18n';
export const useDirectionalValue = (value, type = 'number') => {
  const { activeDirection } = useI18n();
  switch (type) {
    case 'number': {
      return activeDirection === 'rtl' ? -1 * value : value;
    }
    default:
      return value;
  }
};
