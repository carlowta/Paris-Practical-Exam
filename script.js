document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and ready!");

    // Typewriter effect for "<hello world>"
    const helloWorld = document.getElementById("hello-world");
    const text = "<hello world>";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            helloWorld.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            // Restart the typing effect after it finishes
            setTimeout(() => {
                helloWorld.innerHTML = ''; // Clear the text
                index = 0; // Reset index
                typeWriter(); // Restart typing
            }, 3000); // Pause for 3 seconds before restarting
        }
    }

    typeWriter();

    // Hover effects on social media icons
    const socialIcons = document.querySelectorAll(".social-icons ion-icon");
    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Sticky Navbar Effect
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
    };
    // Select all the file boxes
const fileBoxes = document.querySelectorAll('.file-box');

// Select the modal and buttons
const modal = document.getElementById('file-options-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const viewFileBtn = document.getElementById('view-file-btn');
const downloadFileBtn = document.getElementById('download-file-btn');
const watchVideoBtn = document.getElementById('watch-video-btn');
const openLinkBtn = document.getElementById('open-link-btn');
const modalTitle = document.getElementById('modal-file-title');

// Event listener to show modal with file options
fileBoxes.forEach(fileBox => {
    fileBox.addEventListener('click', () => {
        const fileId = fileBox.getAttribute('data-file');
        
        // Reset modal buttons
        watchVideoBtn.style.display = 'none';
        openLinkBtn.style.display = 'none';
        
        // Set modal title
        modalTitle.textContent = `Options for File ${fileId}`;
        
        // Set actions based on file number
        if (fileId <= 4) {
            viewFileBtn.style.display = 'inline-block';
            downloadFileBtn.style.display = 'inline-block';
            watchVideoBtn.style.display = 'none';
            openLinkBtn.style.display = 'none';
        } else if (fileId >= 5 && fileId <= 6) {
            viewFileBtn.style.display = 'none';
            downloadFileBtn.style.display = 'inline-block';
            watchVideoBtn.style.display = 'inline-block';
            openLinkBtn.style.display = 'none';
        } else if (fileId == 7) {
            viewFileBtn.style.display = 'none';
            downloadFileBtn.style.display = 'none';
            watchVideoBtn.style.display = 'none';
            openLinkBtn.style.display = 'inline-block';
        }

        // Show modal
        modal.style.display = 'flex';
    });
});

// Close modal functionality
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Example of action buttons
viewFileBtn.addEventListener('click', () => {
    window.open('path/to/file', '_blank');
});

downloadFileBtn.addEventListener('click', () => {
    window.location.href = 'path/to/file';
});

watchVideoBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=example', '_blank');
});

openLinkBtn.addEventListener('click', () => {
    window.open('https://carlowta.github.io/Dino-Rawr/', 'https://carlowta.github.io/Dino-Rawr/');
});

});
