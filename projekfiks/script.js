// form pesanan pizza
function calculateTotal() {
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const total = document.getElementById('total');
  
    const price = parseInt(product.value);
    const qty = parseInt(quantity.value);
  
    if (!isNaN(price) && qty > 0) {
      const totalPrice = price * qty;
      total.value = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    } else {
      total.value = 'Rp 0';
    }
  }
  
  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesanan Anda telah diterima!');
  });

  //slide promo 
  let currentIndex = 0;

function slideImages() {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Hitung posisi slide berikutnya
  currentIndex = (currentIndex + 1) % totalSlides;

  // Geser posisi slide dengan CSS transform
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Atur interval untuk memindahkan slide setiap 3 detik
setInterval(slideImages, 3000);



  