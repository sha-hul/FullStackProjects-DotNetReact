import React, {useState} from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  const goBack = useNavigate();
  const [navi,setNavi] = useState(false);
  return (
    <div className="text-light">
      Product
      <div>
        {/* 1.Using the Link  */}
        <Link to="/Product/Details/5">
          <button>ProductDetails-Link</button>
        </Link>
        <br />
        {/* 2.Using the useNavigate react Hooks  */}
        <button
          onClick={() => {
            navigate("/Product/Details/15");
          }}
        >
          ProductDetails-useNavigate
        </button>
        <br />
        {/* 3.By Using the Navigate Component  */}
          {navi && <Navigate to="/Product/Details/15"/>}
          <button onClick={()=>setNavi(true)}>ProductDetails-Navigate Component</button>
        <br />
        {/* Go to the previuos page */}
        <button onClick={()=>goBack(-1)}>Go Back 🔙</button>
      </div>
    </div>
  );
}

export default Product;