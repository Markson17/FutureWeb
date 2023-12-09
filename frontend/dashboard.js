document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mainContent = document.querySelector('.main-content');

    hamburgerBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSidebar();
    });

    closeBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSidebar();
    });
    
    document.addEventListener('click', function (event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnButtons = event.target === hamburgerBtn || event.target === closeBtn;
    
        if (!isClickInsideSidebar && !isClickOnButtons && sidebar.classList.contains('sidebar-expanded')) {
          toggleSidebar();
        }
    });

    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-expanded');
        mainContent.classList.toggle('content-expanded');
        toggleButtons();
    }

    function toggleButtons() {
        hamburgerBtn.classList.toggle('hidden');
        closeBtn.classList.toggle('hidden');
    }
  
});

  