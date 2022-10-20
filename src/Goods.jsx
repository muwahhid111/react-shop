const Goods = (props) => {
  return (
  
      <div className="list">
        <img src={props.img} alt="" />
        <div className="text">
        <h3>{props.price}</h3>
        <p>
          <s>{props.sale}</s>
        </p>
        </div>
        <p>{props.name}</p>
        <button>{props.but}</button>
      </div>
    
  );
};
export default Goods;

