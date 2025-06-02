document.addEventListener("DOMContentLoaded", function () {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // بعد إدراج الهيدر، أضف دالة toggleMenu
            window.toggleMenu = function () {
                const sideMenu = document.getElementById('sideMenu');
                sideMenu.classList.toggle('active');
            };

            // إضافة كود لإغلاق القائمة عند النقر خارجها
            document.addEventListener('click', function (event) {
                const sideMenu = document.getElementById('sideMenu');
                const menuToggle = document.querySelector('.menu-toggle');
                const isClickInsideMenu = sideMenu.contains(event.target);
                const isClickOnToggle = menuToggle.contains(event.target);

                if (!isClickInsideMenu && !isClickOnToggle && sideMenu.classList.contains('active')) {
                    sideMenu.classList.remove('active');
                }
            });
        })
        .catch(error => console.error('خطأ في تحميل الهيدر:', error));
});
