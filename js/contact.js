document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation
    const name = document.getElementById('name').value.trim();
    const questionValue = document.getElementById('question').value.trim();
    const details = document.getElementById('details').value.trim();

    if (name === '' || questionValue === '' || details === '') {
        alert('All fields are required.');
        return;
    }

    // Map question values to their corresponding text
    const questionsMap = {
        question1: 'What is your return policy?',
        question2: 'How do I track my order?',
        question3: 'Can I purchase items again?'
    };

    const questionText = questionsMap[questionValue];

    // Create and download the .txt file
    const filename = `${name}.txt`;
    const content = `Name: ${name}\nQuestion: ${questionText}\nDetails: ${details}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);

    // Show confirmation popup
    alert('Your question has been sent.');
    
    // Reset the form
    document.getElementById('contactForm').reset();
});
