let checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
const handleClick = (e) =>{
    let inBetween = false;
    if(e.shiftKey && this.checked){
        console.log('clicked')
        checkBoxes.forEach(checkbox=>{
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }
}

checkBoxes.forEach(checkbox=>checkbox.addEventListener('click',handleClick))
console.log(checkBoxes)