document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    
    const isMatrix = localStorage.getItem('matrixMode') === 'true';
    
    if (isMatrix) {
        document.body.classList.add('matrix-mode');
        if (themeToggle) themeToggle.textContent = "BASCULER EN BLEU NÉON";
    }

    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            
            document.body.classList.toggle('matrix-mode');
            
            
            const activeMode = document.body.classList.contains('matrix-mode');
            
            
            localStorage.setItem('matrixMode', activeMode);
            
            
            if (activeMode) {
                themeToggle.textContent = "BASCULER EN BLEU NÉON";
            } else {
                themeToggle.textContent = "BASCULER EN VERT NÉON";
            }
        });
    }
});