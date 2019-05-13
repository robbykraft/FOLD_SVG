const style = `svg * {
 stroke-width: var(--crease-width);
 stroke-linecap: round;
 stroke: black;
}
polygon {
 fill: none;
 stroke: none;
 stroke-linejoin: bevel;
}
.boundary {
 fill: white;
 stroke: black;
}
.mountain{
 stroke: #e14929;
}
.valley{
 stroke: #314f69;
 stroke-dasharray: calc( var(--crease-width) * 2) calc( var(--crease-width) * 2);
}
.mark {
 stroke: #888;
}
.foldedForm #faces polygon {
 /*stroke: black;*/
}
.foldedForm #faces .front {
 fill: steelblue;
}
.foldedForm #faces .back {
 fill: peru;
}
.foldedForm #creases line {
 stroke: none;
}`;

export default style;