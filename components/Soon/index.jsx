import useI18n from '../../hooks/use-i18n';
export const Soon = () => {
  const i18n = useI18n();
  const soon = `${i18n.t('soon')}`;
  return (
    <div className="flex justify-center items-center h-64 w-full text-center text-xxl text-c200 bg-c800">
      {soon}
    </div>
  );
};
