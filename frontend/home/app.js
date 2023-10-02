const ber = document.querySelector('#menu-right')
const hid = document.getElementById('menu')
const ber1 = document.getElementById('menu-1')
const ber2 = document.getElementById('menu-2')
const ber3 = document.getElementById('menu-3')

ber.addEventListener('click',()=>{
    if (hid.className == 'in') {
        hid.classList.toggle('out')
    } else {
        hid.classList.toggle('in')
    }
    ber1.classList.toggle('rotate-1')
    ber2.classList.toggle('rotate-2')
    ber3.classList.toggle('rotate-3')
})