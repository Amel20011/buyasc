// --- KONFIGURASI NOMOR WHATSAPP ---
// Nomor telah diatur ke 13658700681 sesuai permintaan Anda.
const nomerWA = "13658700681"; 

function buyScript(tipe, harga) {
    // Membuat pesan otomatis berdasarkan produk yang diklik
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Script Bot WhatsApp ${tipe}* seharga *Rp ${harga}*. \n\nApakah stok masih tersedia?`;
    
    // Membuat URL WhatsApp
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // Membuka Link WhatsApp secara otomatis
    window.open(url, '_blank');
}
