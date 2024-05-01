document.getElementById('flickerButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('flickerImage').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('flickerImage').style.animation = 'flickerAnimation 0.2s infinite alternate';
    }, 10);
});
