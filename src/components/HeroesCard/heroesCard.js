import React from "react";
import "./heroesCard.css";

const HeroCard = props => (

<div className = "card">
<div  className = "img-container">
<img alt={props.name} src={props.image} />

</div>
</div>

);

export default HeroCard;