export const Soon = ({
  data: {
    comming_soon_main_message,
    comming_soon_second_message,
    comming_soon_third_message,
    comming_soon_image: { url } = {}
  }
}) => {
  return (
    <div className="flex flex-col text-c100 items-center w-full text-center py-16">
      <div>
        <img src={url} alt="soon" />
      </div>
      <p className="text-xl leading-none my-8 mb-2 font-semibold">
        {comming_soon_main_message}
      </p>
      <p>{comming_soon_second_message}</p>
      <p className="text-lg">{comming_soon_third_message}</p>
    </div>
  );
};
