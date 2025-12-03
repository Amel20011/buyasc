// --- KONFIGURASI NOMOR WHATSAPP (Wajib Diubah) ---
// PASTIKAN Anda MENGGANTI nomor di bawah ini dengan nomor WA ASLI Anda.
// Format harus 628xxx (tanpa tanda +, spasi, atau strip).
const nomerWA = "13658700681"; // ⬅️ GANTI BARIS INI! Contoh: "628991234567"

function buyScript(tipe, harga) {
    // Cek Keamanan: Mencegah tombol tidak berfungsi jika nomor masih placeholder.
    if (nomerWA === "13658700681") {
        alert("🚨 PERBAIKAN: Tombol tidak berfungsi karena Anda belum mengganti variabel 'nomerWA' di file script.js. Harap ganti nomornya!");
        console.error("Kesalahan: Nomor WhatsApp belum diganti. Tombol tidak akan membuka tautan.");
        return; 
    }

    // Logika Pembuatan Pesan WA
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Script Bot WhatsApp ${tipe}* seharga *Rp ${harga}*. \n\nApakah stok masih tersedia?`;
    
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // Buka Link WhatsApp
    window.open(url, '_blank');
}

