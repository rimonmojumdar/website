<script>
    // এই ফাংশনটি নেভিগেশন লিংকগুলিতে ক্লিক হ্যান্ডেল করে
    function setupSmoothScroll() {
        // মেনুর ভেতরের সব লিংক নির্বাচন করা হলো
        const navLinks = document.querySelectorAll('.main_menu .nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                // লিংকের href মানটি নেওয়া হলো (যেমন: #home, #product)
                const targetId = this.getAttribute('href'); 
                
                // যদি টার্গেট একটি অ্যাঙ্কর হয় (যেমন #id), তবে ডিফল্ট অ্যাকশন বন্ধ করা হলো
                if (targetId && targetId.startsWith('#')) {
                    event.preventDefault(); 
                    
                    const targetElement = document.querySelector(targetId);
                    
                    // টার্গেট সেকশনে মসৃণভাবে স্ক্রল করা হলো
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // ডকুমেন্ট লোড হওয়ার পর ফাংশনটি কল করা হলো
    document.addEventListener('DOMContentLoaded', setupSmoothScroll);
</script>
