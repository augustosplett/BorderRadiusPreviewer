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
