import './Certificate.css';
import { useContext } from 'react';
import { assets } from '../assets/images';
import { ThemeContext } from "../App";

const Certificate = () => {
  const Theme = useContext(ThemeContext);
    
  return (
    <div className={`certificate-section ${Theme && "dark-certificate-section"}`}>
        <div className="heading">
          <h1>Certificates</h1>
        </div>
        <div className="certificates-all">
            <div className="cert-box">
                <img src={assets.Deloitte_certificate} alt="certificate_img" />
            </div>
        </div>
    </div>
  )
}

export default Certificate
