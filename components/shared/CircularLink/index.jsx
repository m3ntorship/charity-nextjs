export const CircularLink = ({ url, fontClass }) => {
  return (
    <a
      href={url}
      className="rounded-full p-5 text-c100 bg-c000 hover:bg-c200 hover:text-c000"
    >
      <div className="w-3 h-3 flex justify-center items-center">
        <i className={fontClass}></i>
      </div>
    </a>
  );
};
