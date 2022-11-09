import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: "https://farms.marathoncash.com/assets/coin/GMT94.png",
    apy: "600",
    textfirst: "GMT",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/BUSD94.png",
    apy: "3500",
    textfirst: "BUSD",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/USDT94.png",
    apy: "4000",
    textfirst: "USDT",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/USDC94.png",
    apy: "4000",
    textfirst: "USDC",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/WBNB94.png",
    apy: "3400",
    textfirst: "WBNB",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/CAKE94.png",
    apy: "4500",
    textfirst: "CAKE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/ETH94.png",
    apy: "7800",
    textfirst: "ETH",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/1INCH94.png",
    apy: "3400",
    textfirst: "1INCH",
  },
];

const Cards = () => {
  const navigate = useNavigate();

  const component=(v)=>
  {
    navigate("/Cardpage", {state:v});
  }
  return (
    <>
      <div className="cards">
        <div className="container">
          <h1 className="text-center">Choose Your Stake Pool</h1>
          <div className="row ">
          {data.map((v, i) => {
            return (
              <>
                <div className="col-lg-3 gy-4" key={i}>
                    <div className="card">
                      <div className="card-body">
                        <div>
                          <img src={v.img} className="card-topimg" alt="no" />
                        </div>
                        <h4 className="text-center card-h4">APY: {v.apy}%</h4>
                        <div className="d-flex justify-content-between">
                          <h5 className="card-f">Deposit</h5>
                          <h5>{v.textfirst}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                          <h5 className="card-f">Earn</h5>
                          <h5>MRACE</h5>
                        </div>
                        <div>
                          <hr />
                        </div>
                        <button className="btn card-btn" onClick={()=>
                            {
                                component(v)
                            }} 
                            >Select</button>
                      </div>
                    </div>
                  </div>
              </>
            );
          })}
                </div>
          
        </div>
      </div>
    </>
  );
};

export default Cards;
