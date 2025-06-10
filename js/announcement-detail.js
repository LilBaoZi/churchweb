
document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-0');
        mobileMenu.classList.remove('-translate-x-full');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('-translate-x-full');
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const announcementId = urlParams.get('id');


    console.log("Announcement ID from URL:", announcementId);


    const announcementTitle = document.getElementById('announcement-title');
    const announcementDate = document.getElementById('announcement-date');
    const announcementImage1 = document.getElementById('announcement-image1');
    const announcementImage2 = document.getElementById('announcement-image2');
    const announcementFullDescription1 = document.getElementById('announcement-full-description1');
    const announcementFullDescription2 = document.getElementById('announcement-full-description2');
    const announcementDetailContent = document.getElementById('announcement-detail-content');

    if (typeof announcementsData === 'undefined') {
        console.error("announcementsData is not loaded. Please ensure js/announcements-data.js is linked correctly.");
        if (announcementDetailContent) {
             announcementDetailContent.innerHTML = '<p class="text-red-600">Error: Announcement data not available.</p>';
        }
        return;
    }

    const announcement = announcementsData.find(ann => ann.id === announcementId);

    console.log("Found announcement object:", announcement);

    if (announcement) {
        if (announcementTitle) announcementTitle.textContent = announcement.title;
        if (announcementDate) announcementDate.textContent = announcement.date;
        
        if (announcementImage1) {
            announcementImage1.src = announcement.imageUrlChi;
            announcementImage1.alt = announcement.imageAlt || `Image for ${announcement.title}`;
            announcementImage1.onerror = function() {
                this.onerror=null; 
                this.src='https://placehold.co/800x450/6B4D3C/FFFFFF?text=Image+Not+Found';
            };
        }
        if (announcementImage2) {
            announcementImage2.src = announcement.imageUrlEng;
            announcementImage2.alt = announcement.imageAlt || `Image for ${announcement.title}`;

            announcementImage2.onerror = function() {
                this.onerror=null; 
                this.src='https://placehold.co/800x450/6B4D3C/FFFFFF?text=Image+Not+Found';
            };
        }
        

        if (announcementFullDescription1) announcementFullDescription1.innerHTML = announcement.fullDescription1;
        if (announcementFullDescription2) announcementFullDescription2.innerHTML = announcement.fullDescription2;

    } else {

        if (announcementDetailContent) {
            announcementDetailContent.innerHTML = `
                <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Announcement Not Found</h2>
                <p class="text-gray-700 text-lg">
                    The announcement you are looking for could not be found. 
                    Please check the URL or go back to the <a href="announcements.html" class="underline text-blue-600 hover:text-blue-800">Announcements Page</a>.
                </p>
            `;
        }
    }
});
