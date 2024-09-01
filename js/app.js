 
const selectrosecolor = document.getElementById("selectrosecolor");

const alldivs = [...document.querySelectorAll('.allrose')]


const oncolorchange = (eve) => {
   let selectedcolor = eve.target.value;


   alldivs.forEach(div => div.classList.add('d-none'));

   let selecteddiv = [...document.querySelectorAll("."+selectedcolor)];

   selecteddiv.forEach(div => div.classList.remove('d-none'))

}

selectrosecolor.addEventListener('change' , oncolorchange)