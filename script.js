/*kita akan memecah setiap karakter dari kata dobleh agar
setiap disorot salah satu dari karakter	dari kata dobleh maka
karakter tersebut otomatis akan membesar*/

let nama = document.querySelector('.nama');
/*
memecah menggunakan spread operator [...nama.textContent], textContent agar hanya mengambil isi
dari h1 nya saja bukan semua join() digunakan untuk menghilangkan tanda koma pada array*/
let hasil = [...nama.textContent].map(nm => `<span class="hasil">${nm}</span>`).join('');

nama.innerHTML = hasil;
