import useI18n from './use-i18n';
export const useDirectionalValue = (value, type = 'number') => {
  const { activeDirection } = useI18n();
  switch (type) {
    case 'number': {
      return activeDirection === 'rtl' ? -1 * value : value;
    }
    case 'direction': {
      if (value === 'left') {
        return activeDirection === 'rtl' ? 'right' : 'left';
      }
      if (value === 'right') {
        return activeDirection === 'rtl' ? 'left' : 'right';
      } else {
        return value;
      }
    }
    default:
      return value;
  }
};
