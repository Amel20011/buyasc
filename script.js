// --- KONFIGURASI NOMOR WHATSAPP (Wajib Diubah) ---
// GANTI ANGKA DI BAWAH INI dengan nomor WhatsApp ASLI Anda.
const nomerWA = "13658700681"; // ⬅️ GANTI NOMOR INI! Contoh: "628123456789"

function buyScript(tipe, harga) {
    // Cek Keamanan: Jika nomor masih placeholder, tampilkan peringatan.
    if (nomerWA === "13658700681") {
        alert("🚨 PERBAIKAN: Tombol tidak berfungsi karena Anda belum mengganti variabel 'nomerWA' di file script.js. Harap ganti nomornya!");
        console.error("Kesalahan: Nomor WhatsApp belum diganti.");
        return; 
    }

    // Logika Pembuatan Pesan WA
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Script Bot WhatsApp ${tipe}* seharga *Rp ${harga}*. \n\nApakah stok masih tersedia?`;
    
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // Buka Link WhatsApp
    window.open(url, '_blank');
}
