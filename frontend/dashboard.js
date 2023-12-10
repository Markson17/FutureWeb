document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
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

  