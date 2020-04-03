// var downline = document.querySelector("#jumorang").value
// var penjualan = document.querySelector("#jumpe").value

function bagianA() {
    var downline = document.querySelector("#jumorang").value
    var penjualan = document.querySelector("#jumpe").value
    var komisi
    document.querySelector("#tampilOrang").innerHTML = `Jumlah Orang : ${downline}`
    document.querySelector("#tampilJual").innerHTML = `Jumlah Penjualan : ${penjualan}`



    //Logic
    var downlineInt = parseInt(downline)
    var penjualanInt = parseInt(penjualan)
    //

    if (downlineInt < 10) {
        komisi = penjualanInt * (5 / 100)
    } else if (downlineInt >= 10 && downlineInt <= 50) {
        if (penjualanInt < 1000000) {
            komisi = penjualanInt * (10 / 100)
        } else {
            komisi = penjualanInt * (12.5 / 100)
        }
    } else {
        komisi = penjualanInt * (15 / 100)
    }

    console.log(`Orang adalah :${downlineInt}, Penjualan adalah : ${penjualanInt}, Komisi adalah ${komisi}`);

    document.querySelector("#tampilKOmisi").innerHTML = `Hasil Komisi : ${komisi}`

}