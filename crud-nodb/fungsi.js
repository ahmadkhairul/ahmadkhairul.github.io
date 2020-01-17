var dataBarang = [
    "Bedog",
    "Peso",
    "Samurai"
];


function showBarang(){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "<thead><tr><th>No</th><th>Nama Barang</th><th>Aksi</th></tr></thead>";

    // cetak semua barang
    var no = 1;
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<tr><td>" + no + "</td><td>" + dataBarang[i] + "</td><td>["+btnEdit + " | "+ btnHapus +"]</td></tr>";        
        no++;
    }

}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    if (input.value == ""){
        window.alert("Nama barang tidak boleh kosong");
    }else{
        dataBarang.push(input.value);
        showBarang();
    }
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    if (newBarang == ""){
        window.alert("Nama barang tidak boleh kosong");
    }else{
        dataBarang[id] = newBarang;
        showBarang();
    }
}

function deleteBarang(id){
    var yakin = confirm("Apakah kamu yakin menghapus barang ini?");
    if (yakin) {
        dataBarang.splice(id, 1);
        showBarang();
    } else {
        showBarang();
    }
}

showBarang();