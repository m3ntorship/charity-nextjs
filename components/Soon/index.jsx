export const Soon = ({ data }) => {
  if (!data.statusCode) {
    let {
      comming_soon_main_message,
      comming_soon_second_message,
      comming_soon_third_message,
      comming_soon_image: { url } = {}
    } = data;
    return (
      <div className="flex flex-col text-c100 items-center w-full text-center py-16 border-t">
        <div>
          <img src={url} alt="soon" />
        </div>
        <p className="text-large leading-none my-10 mb-4 font-semibold">
          {!data.statusCode && comming_soon_main_message}
        </p>
        <p>{comming_soon_second_message}</p>
        <p className="text-lg">
          {!data.statusCode && comming_soon_third_message}
        </p>
      </div>
    );
  } else return '';
};
