let lt = document.querySelector(`[lt]`);
let lb = document.querySelector(`[lb]`);
let rt = document.querySelector(`[rt]`);
let rb = document.querySelector(`[rb]`);
const prev = document.querySelector(`[preview]`);

lt.addEventListener('change', v => {
    prev.style.borderTopLeftRadius = (v.target.value + "%" ) 
});

lb.addEventListener('change', v => {
    prev.style.borderBottomLeftRadius = (v.target.value + "%" ) 
});

rt.addEventListener('change', v => {
    prev.style.borderTopRightRadius = (v.target.value + "%" ) 
});

rb.addEventListener('change', v => {
    prev.style.borderBottomRightRadius = (v.target.value + "%" ) 
});

function copyToClipboard() {
    var copyText = (lt.value + "% " + lb.value + "% " + rt.value + "% " + rb.value+"%");
    console.log(copyText)
    copyStringToClipboard(copyText);
    //copyText.select();
    //document.execCommand("copy");
    //alert("Copied the text: " + copyText.value);
  }

  function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }