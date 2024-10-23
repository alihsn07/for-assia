let noClickCount = 0;  // عدد الضغطات على زر No

// تشغيل المفرقعات وإظهار الرسالة عند الضغط على زر Yes
document.getElementById('yes-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('confetti-container').classList.remove('hidden');
});

// تحريك زر No عند كل ضغطة
document.getElementById('no-btn').addEventListener('click', function() {
    const button = document.getElementById('no-btn');
    noClickCount += 1;

    if (noClickCount >= 3) {
        // إخفاء زر No بعد 3 ضغطات
        button.style.display = 'none';
        
        // تكبير حجم زر Yes وإضافة تأثير الوميض
        document.getElementById('yes-btn').classList.add('big');
    } else {
        // تحريك زر No لموقع عشوائي
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = 'absolute';
        button.style.left = x + 'px';
        button.style.top = y + 'px';
    }
});
