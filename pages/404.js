import { Soon } from '../components/Soon/index';
import useI18n from '../hooks/use-i18n';

export default () => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  let data;
  if (currentLocale === 'en') {
    data = {
      comming_soon_main_message: '404 Page NotFound',
      comming_soon_second_message: `We Can't seem to find the page you're looking for `,
      comming_soon_third_message: 'Check The URL & Try Again',
      comming_soon_image: {
        url:
          'https://s3.m3ntorship.net/charity-cms-dev/soon_2041fc2628_5969143c3d.png'
      }
    };
  } else {
    data = {
      comming_soon_main_message: ' Page 404 NotFound ',
      comming_soon_second_message: `الصفحه التي تحاول الوصول اليها غير موجوده`,
      comming_soon_third_message: 'تأكد من الرابط وحاول مرة اخرى',
      comming_soon_image: {
        url: 'https://s3.m3ntorship.net/charity-cms-dev/soon_2041fc2628.png'
      }
    };
  }
  return <Soon data={data} />;
};
