import "./backBtn.scss";
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { extractSearchParams } from "../../Utils/HotelsUtils/searchparams.utils.jsx";
function BackBTN({ btnName = "back", to = -1, onClick, preserveParams = false }) {
  const [style, setStyles] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const changeColor = {
    color: "#3e3e3e"
  };

  const handleBackClick = () => {
    // If custom onClick is provided, use it
    if (onClick) {
      onClick();
      return;
    }

    // If preserveParams is true, carry params forward
    if (preserveParams) {
      const params = extractSearchParams(searchParams);
      console.log(params);
      // If 'to' is a number, use history navigation with current params
      if (typeof to === 'number') {
        // Can't preserve params with numeric navigation, so warn or use fallback
        console.warn('Cannot preserve params with numeric navigation. Use a route path instead.');
        navigate(to);
      } else {
        // Navigate to specific route with params
        navigate(params ? `${to}?${params}` : to);
      }
    } else {
      // Standard navigation without params
      if (typeof to === 'number') {
        navigate(to);
      } else {
        navigate(to);
      }
    }
  };

  return (
    <div className='flexButtons'>
      <button onClick={handleBackClick}>
        <ArrowLeft 
          style={style ? changeColor : { color: "#fff" }}  
          onMouseEnter={() => setStyles(true)}
          onMouseLeave={() => setStyles(false)}
          size={20}
        />
      </button>
    </div>
  );
}

export default BackBTN;