function Black() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="row">
      {arr.map((item) => {
        return item % 2 === 0 ? (
          <div key={item} className="black">
            {" "}
          </div>
        ) : (
          <div key={item} className="white"></div>
        );
      })}
    </div>
  );
}
function White() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="row">
      {" "}
      {arr.map((item) => {
        return item % 2 === 0 ? (
          <div key={item} className="white">
            {" "}
          </div>
        ) : (
          <div key={item} className="black"></div>
        );
      })}
    </div>
  );
}
function Card() {
  const arr1 = [1, 2, 3, 4, 5];
  return (
    <div className="chess-board">
      {arr1.map((item) => {
        return (
          <>
            <Black key={item} />
            <White key={item} />
          </>
        );
      })}
      <Black />
    </div>
  );
}

export default Card;
