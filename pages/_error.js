function CustomError({ statusCode }) {
  return (
    <figure>
      <img
        alt="Showing a properly cat according the status code"
        width="100%"
        src={`https://http.cat/${statusCode}`}
      />
      <figcaption>
        <h1>{statusCode}</h1>
      </figcaption>
    </figure>
  );
}

export default CustomError;
