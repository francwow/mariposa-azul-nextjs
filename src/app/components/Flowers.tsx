import Flower from "./Flower";

type FlowerProps = {
  number: number;
};

const Flowers = ({ number }: FlowerProps) => {
  let arr = [];

  for (let i = 0; i <= number - 1; i++) {
    let obj = { id: i };
    arr.push(obj);
  }

  return (
    <div className="flowers-container">
      {arr.map((item) => {
        return <Flower key={item.id} i={item.id} />;
      })}
    </div>
  );
};

export default Flowers;
