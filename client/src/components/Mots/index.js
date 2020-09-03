import React from 'react';
import './style.scss';
import schema from '../../assets/images/logistique.png';

const Mots = () => {
return (
  <div>

<div className="split leftMots">
    <div className="textMots">
      <h2 className="h2Mots">En quelques mots</h2>
    <p className="pMots">Transport Tdr est une entreprise française fondée en 1980, spécialisée dans le groupage et la distribution de fret à haute valeur ajoutée. Nos entrepôts sécurisés sont idéalement situés aux croisements des axes autoroutiers et nous permettent de proposer tout une gamme de prestations logistiques.</p>
    </div>
    
  
  </div>
  <div className="split rightMots">
     <img className="imgMots"  style={{width:700,height:1000}} src={schema} alt="hey1"/>
  </div>


</div> 
)

}


export default Mots;