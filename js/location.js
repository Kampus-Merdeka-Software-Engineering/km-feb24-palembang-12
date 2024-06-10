document.addEventListener('DOMContentLoaded', () => {
    // check if url has id
    const id = window.location.hash.substring(1);
    if (id) {
        // Find targeted card
        const target = document.getElementById(id);
        if (target) {
            // Add highlight class to targeted card
            target.classList.add('highlight');
            
            // Remove highlight class after 2 seconds
            setTimeout(() => {
                target.classList.remove('highlight');
            }, 2000);
        }
    }
});