type FlowerProps = {
  i: number;
};

const Flower = ({ i }: FlowerProps) => {
  return (
    <div className={`flower-${i}`}>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
      <div className="petal">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Flower;
