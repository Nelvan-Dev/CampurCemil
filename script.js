  // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Simple reveal on scroll for sections (can be enhanced with Intersection Observer API)
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            observer.observe(section);
        });
    });

    // WhatsApp Order Functionality
    document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah form untuk submit secara default

      const name = document.getElementById('customerName').value;
      const saran = document.getElementById('customerSaran').value;
      const kritik = document.getElementById('customerKritik').value;
      const selectedPackage = document.getElementById('packageSelect').value;
      // const notes = document.getElementById('customerNotes').value;
      // const DrinkSelect = document.getElementById('DrinkSelect').value;

      if (!name || !selectedPackage || !saran || !kritik) {
        alert('Harap lengkapi semua kolom yang wajib diisi!');
        return;
      }

      // Format pesan untuk WhatsApp
      const message = `Halo CampurCemil! Saya ingin memesan:\n` +
                      `*Nama:* ${name}\n` +
                      `*Paket Pesanan:* ${selectedPackage}\n` +
                      `*Saran untuk kami kedepannya:* ${saran}\n` +
                      `*Kritik untuk kami kedepannya: * ${kritik}\n` +
                      `Terima kasih!`;

      // Ganti dengan nomor WhatsApp Anda (termasuk kode negara, contoh: 6281234567890)
      const whatsappNumber = '6285754131840'; // <-- **GANTI DENGAN NOMOR WHATSAPP ANDA!**

      const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank'); // Buka link WhatsApp di tab baru

      // Opsional: Reset form setelah pengiriman
      this.reset();
      alert('Pesanan Anda akan segera kami proses via WhatsApp. Silakan lanjutkan chat di WhatsApp!');
    });