//Soal1
function hitungLingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").
        innerText = "luas : " + luas + "cm², keliling : "+ keliling + "cm²";
    }else {
        document.getElementById("lingkaranOutput").
        innerText = "Masukan jari-jari yang valid!";
    }
}

//Soal 2
function hitungDuit(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilDuit").
        innerText = "niai : $ " + dollar.toFixed(2);
    }else {
        document.getElementById("hasilDuit").innerText = "Masukan Nilai Mata Uang yang Valid !!";
    }
}

//Soal 3
function hitungPenjumlahan(){
    var bil1 = parseFloat(document.getElementById ("bil1").value) || 0;
    var bil2 = parseFloat(document.getElementById ("bil2").value) || 0;
    var jumlah = bil1 + bil2; document.getElementById("hasilJumlah").innerText ="Jumlah: " + jumlah.toFixed(2);
}