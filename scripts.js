document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('user-form');
    const submissionResult = document.getElementById('submission-result');
    const resultContent = document.getElementById('result-content');
    const resetFormButton = document.getElementById('reset-form');
    
    // Handler untuk submit form
    if (userForm) {
        userForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Mengambil nilai dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Menampilkan hasil
            const resultHTML = `
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Pesan:</strong> ${message || '(Tidak ada pesan)'}</p>
            `;
            
            resultContent.innerHTML = resultHTML;
            userForm.classList.add('hidden');
            submissionResult.classList.remove('hidden');
            
            // Dalam aplikasi nyata, di sini kita akan mengirim data ke server
            console.log('Data form:', { name, email, message });
        });
    }
    
    // Handler untuk tombol reset
    if (resetFormButton) {
        resetFormButton.addEventListener('click', function() {
            userForm.reset();
            userForm.classList.remove('hidden');
            submissionResult.classList.add('hidden');
        });
    }
});