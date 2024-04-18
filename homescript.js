// Initialize confetti
const jsConfetti = new JSConfetti();

// Function to trigger confetti after a delay
function triggerConfettiWithDelay() {
    // Trigger confetti after a delay of 3 seconds (for example)
    setTimeout(function() {
        jsConfetti.addConfetti();
    }, 2000); // 3000 milliseconds = 3 seconds
}

// Call the function to trigger confetti with delay when the page loads
$(document).ready(function() {
    triggerConfettiWithDelay();
});

// Function to handle scrolling event
function handleScroll() {
    var s = $(window).scrollTop(); // Get the scroll position


    // Trigger confetti only when at the top of the page
    if (s === 0) 
    {
        jsConfetti.addConfetti();
    }
    // Define a function for parallax effect on background
    function pbg(e, t) {
        $(e).css({
            'background-attachment': 'fixed',
            'background-position': 'center ' + -(s * t) + 'px'
        });
    }

    // Define a function for parallax effect on text elements
    function ptxt(e, t) {
        $(e).css({
            'position': 'relative',
            'top': (s * t) + 'px'
        });
    }

    // Apply parallax effect to backgrounds
    pbg('header', 0.8);

    // Apply parallax effect to text elements
    ptxt('h1', 0.4);
    ptxt('.elep', 0.4);
}

// Bind the handleScroll function to the scroll event
$(window).on('scroll', handleScroll);

// Define the parallax function
function parallax() {
    // Initial call to the handleScroll function
    handleScroll();
}

// Function to handle click event on the random button
function handleRandomButtonClick() {
    // Array of random links
    const randomLinks = [
        'https://youtu.be/watch?v=CBGFPAgWeZw&t=310s',
        'https://youtu.be/watch?v=VO0RqUFeMOM&t=5m10s',
        'https://youtu.be/watch?v=Cbitu7JXcrM&t=3m4s',
        'https://www.youtube.com/watch?v=fR4HjTH_fTM',
        'https://longdogechallenge.com/',
        'http://doughnutkitten.com/',
        'https://www.youtube.com/watch?v=uq00EreNHYk&t=26s',
        'https://puginarug.com/',
        'https://papertoilet.com/',
        'https://zoomquilt.org/',
        'https://toms.toys',
        'https://www.youtube.com/watch?v=MCVDTLMQBmc',
        'https://screamintothevoid.com/',
        'http://burymewithmymoney.com/',
        'https://smashthewalls.com/',
        'https://jacksonpollock.org/',
        'http://endless.horse/',
        'http://drawing.garden/',
        'https://www.trypap.com/',
        'http://www.republiquedesmangues.fr/',
        'http://www.movenowthinklater.com/',
        'https://sliding.toys/klotski/easy-street/',
        'https://paint.toys/calligram/',
        'https://checkboxrace.com/',
        'http://www.rrrgggbbb.com/',
        'http://www.koalastothemax.com/',
        'https://rotatingsandwiches.com/',
        'http://www.everydayim.com/',
        'http://maninthedark.com/',
        'http://cat-bounce.com/',
        'http://chrismckenzie.com/',
        'https://thezen.zone/',
        'http://ninjaflex.com/',
        'http://ihasabucket.com/',
        'http://corndogoncorndog.com/',
        'https://www.americanmeadows.com/content/perennials/aster/all-about-aster',
        'https://www.youtube.com/watch?v=lsDYR6LiY2Y&t=7s',
        'https://www.rhs.org.uk/plants/aster/growing-guide',
        'https://www.youtube.com/watch?v=xdN2gYjcWuM',
        'http://www.omfgdogs.com/',
        'https://www.youtube.com/watch?v=rJqIVdzeXlI',
        'http://thirty-seven.org/pictures.html',
        
        // Add more links as needed
    ];

    // Get a random index from the randomLinks array
    const randomIndex = Math.floor(Math.random() * randomLinks.length);

    // Get the random link from the array
    const randomLink = randomLinks[randomIndex];

    // Redirect the user to the random link
    window.location.href = randomLink;
}

// Bind the handleRandomButtonClick function to the click event of the random button
$('#randomButton').on('click', handleRandomButtonClick);


// Initial call to the parallax function
parallax();
