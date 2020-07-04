export const Soon = ({
  data: {
    comming_soon_main_message,
    comming_soon_second_message,
    comming_soon_third_message,
    comming_soon_image: { url } = {}
  }
}) => {
  return (
    <div className="flex justify-center items-center w-full text-center pt-12">
      <div>
        <img src={url} alt="soon" />
      </div>
      <p>{comming_soon_main_message}</p>
      <p>{comming_soon_second_message}</p>
      <p>{comming_soon_third_message}</p>
    </div>
  );
};

let sampleData = {
  _id: '5f00810db3f06316bce12b5a',
  comming_soon_main_message: 'قريباً جداً',
  comming_soon_second_message: 'نعمل جاهدين علي إنهاء جميع محتويات الموقع',
  comming_soon_third_message: 'شكراً لصبركم',
  createdAt: '2020-07-04T13:15:57.390Z',
  updatedAt: '2020-07-04T13:15:57.540Z',
  __v: 0,
  comming_soon_image: {
    _id: '5f00810ab3f06316bce12b59',
    name: 'soon',
    alternativeText: '',
    caption: '',
    hash: 'soon_2041fc2628',
    ext: '.png',
    mime: 'image/png',
    size: 13.38,
    width: 402,
    height: 253,
    url: 'https://s3.m3ntorship.net:443/charity-cms-dev/soon_2041fc2628.png',
    formats: {
      thumbnail: {
        hash: 'thumbnail_soon_2041fc2628',
        ext: '.png',
        mime: 'image/png',
        width: 245,
        height: 154,
        size: 25.38,
        url:
          'https://s3.m3ntorship.net:443/charity-cms-dev/thumbnail_soon_2041fc2628.png'
      }
    },
    provider: 'minio',
    related: ['5f00810db3f06316bce12b5a'],
    createdAt: '2020-07-04T13:15:54.043Z',
    updatedAt: '2020-07-04T13:15:57.484Z',
    __v: 0,
    id: '5f00810ab3f06316bce12b59'
  },
  id: '5f00810db3f06316bce12b5a'
};
