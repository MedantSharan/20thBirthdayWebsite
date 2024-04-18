

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.wrapper'),
        rotateSlider = document.querySelector('.rotate-slider');

    rotateSlider.addEventListener('input', () => wrapper.style.setProperty('--rotate-y', `-${rotateSlider.value}deg`));

    //Detect Apple Device
    if (navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) wrapper.classList.add('apple-os');

    function createTooltip(text, x, y) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = text;
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        document.body.appendChild(tooltip);
        return tooltip;
    }

    const homelinks = [
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
        'https://www.youtube.com/watch?v=FFbc-jXkADs',
        'https://www.youtube.com/watch?v=i1XWFepLJso',
        'https://www.youtube.com/watch?v=i1XWFepLJso',
];

const elephantlinks = [
    'https://www.youtube.com/watch?v=J8O9_ugpDjE',
    'https://www.youtube.com/watch?v=u4aN5ndPTHw',
    'https://www.youtube.com/watch?v=oXaJlpts_IY',
];

const collegelinks = [
'https://www.geetabitan.com/lyrics/P/purano-sei-diner-kotha-lyric.html',
'https://www.poetryfoundation.org/poems/148649/the-census-taker',
'https://www.poetryfoundation.org/poems/47548/acquainted-with-the-night',
'https://www.poetryfoundation.org/poems/44261/the-death-of-the-hired-man',
'https://www.poetryfoundation.org/poems/44262/dust-of-snow',
'https://www.poetryfoundation.org/poems/44263/fire-and-ice',
'https://www.poetryfoundation.org/poems/53000/love-and-a-question',
'https://www.amarujala.com/kavya/kavya-charcha/ramdhari-singh-dinkar-hindi-kavita',
'https://www.hindwi.org/kavita/hatasha-se-ek-wekti-baith-gaya-tha-vinod-kumar-shukla-kavita-3',
'https://www.hindwi.org/kavita/ankh-band-kar-lene-se-vinod-kumar-shukla-kavita',
'https://www.hindwi.org/kavita/sabse-gharib-adami-ki-vinod-kumar-shukla-kavita',
'https://www.hindwi.org/kavita/wicharon-ka-wistar-is-tarah-hua-vinod-kumar-shukla-kavita-1',
'https://www.hindwi.org/kavita/duniya-jagat-vinod-kumar-shukla-kavita',
'https://www.hindwi.org/kavita/ishwar-ab-adhik-hai-vinod-kumar-shukla-kavita',
];

const mandirlinks = [
'https://www.youtube.com/watch?v=Hi_gyY-mMQo',
'https://www.youtube.com/watch?v=pETRXDb1YoQ',
'https://www.youtube.com/watch?v=re88S-5fpmA',
'https://www.youtube.com/watch?v=bo62sjQ0CmE&t=11s',
'https://www.youtube.com/watch?v=442ewPgXHQ0',
]

const sunlinks = 
[
'https://www.youtube.com/watch?v=KQetemT1sWc',
'https://www.youtube.com/watch?v=NmU96BBwU2g',
]


    // Add event listeners to emojis
    const emojis = document.querySelectorAll('.ground > *');
    emojis.forEach(emoji => {
        // Show tooltip on mouse enter
        emoji.addEventListener('mouseenter', (event) => {
            let tooltipText;
            const x = event.clientX;
            const y = event.clientY;
            const emojiContent = emoji.textContent.trim(); // Get emoji content without leading/trailing spaces
            
            // Determine tooltip text based on emoji content
            if (emojiContent === '🏠') 
            {
                tooltipText = 'Looks like home';
            } 
            
            else if (emojiContent === '🏢') 
            {
                tooltipText = 'Big office, apply with cv';
            }
            
            else if (emojiContent === '🛕') 
            {
                tooltipText = 'Mandir!';
            }

            else if (emojiContent === '🐈') 
            {
                tooltipText = 'Sonu';
            }

            else if (emojiContent === '🚁') 
            {
                tooltipText = 'what a scenery';
            }
            
            else if (emojiContent === '🏩') 
            {
                tooltipText = 'House of hearts';
            }

            else if (emojiContent === '⛰️')
            {
                tooltipText = 'Tara Pahad';
            }

            else if (emojiContent === '🌲' || emojiContent === '🌳')
            {
                tooltipText = 'Uchlani ka ped';
            }

            else if (emojiContent === '🏛️')
            {
                tooltipText = 'Time to study?';
            }

            else if (emojiContent === '🐘')
            {
                tooltipText = 'Hathi mera sathi';
            }

            else if (emojiContent === '👬')
            {
                tooltipText = 'Love is in the air';
            }

            else if (emojiContent === '🚴')
            {
                tooltipText = 'medant';
            }

            else if (emojiContent === '☁️')
            {
                tooltipText = 'Badal';
            }

            else if (emojiContent === '🏪')
            {
                tooltipText = 'Anjalis fave shop';
            }

            else if (emojiContent === '🐕')
            {
                tooltipText = 'Doggo';
            }

            else if (emojiContent === '🏫')
            {
                tooltipText = 'Anjalis school';
            }

            else
            {
                tooltipText = `${emoji.textContent}`;
            }
            // Add more conditions as needed for other emojis

            // Create and display tooltip
            if (tooltipText) {
                const tooltip = createTooltip(tooltipText, x, y);
                tooltip.style.display = 'block';
            }
        });
        // Hide tooltip on mouse leave
        emoji.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.display = 'none';
                tooltip.remove(); // Remove the tooltip element from the DOM
            }
        });



        //add click functions
        emoji.addEventListener('click', () => {


            const emojiSymbol = emoji.textContent.trim();
   

            
              // Check the type of emoji and perform different actions
    if (emojiSymbol === '🏠') 
    {
        const homelinkIndex = Math.floor(Math.random() * homelinks.length);
        window.location.href = homelinks[homelinkIndex];
    } 
    
    else if (emojiSymbol === '🚗' || emojiSymbol === '🚓' || emojiSymbol === '🚕') 
    {
        const alertstrings = [
            `Crazy fast car, this one.`,
            `So weird`,
            `Do you want a car Anjali?`,
            `It is all under control Anjali`,
            `You are going to achieve whatever you wnat Anjali`,
            `Vroom vroom?`,
        ];

        alert(alertstrings[Math.floor(Math.random() * alertstrings.length)]);
    } 

    else if (emojiSymbol === '☀️')
    {
        const sunlinkIndex = Math.floor(Math.random() * sunlinks.length);
        window.location.href = sunlinks[sunlinkIndex];
    }

    else if (emojiSymbol === '🐘')
    {
        window.location.href = elephantlinks[Math.floor(Math.random() * sunlinks.length)];
    }

    else if (emojiSymbol === '🏢')
    {
        window.location.href = 'cvpage.html';
    }

    else if (emojiSymbol === '🚁')
    {
        window.location.href = 'https://source.unsplash.com/random/1920x1080/?scenery';
    }

    else if (emojiSymbol === '☁️')
    {
        window.location.href = 'https://source.unsplash.com/random/1920x1080/?clouds';
    }

    else if (emojiSymbol === '🏛️')
    {
        window.location.href = collegelinks[Math.floor(Math.random() * collegelinks.length)];
    }

    else if (emojiSymbol === '⛰️')
    {
        window.location.href = 'https://source.unsplash.com/random/1920x1080/?mountains';
    }

    else if (emojiSymbol === '🌲' || emojiSymbol === '🌳')
    {
        window.location.href = 'https://source.unsplash.com/random/1920x1080/?trees';
    }

    else if (emojiSymbol === '🏩')
    {
        window.location.href = 'museumpage.html';
    }

    else if (emojiSymbol === '🛕')
    {
        window.location.href = mandirlinks[Math.floor(Math.random() * mandirlinks.length)];
    }

    else if (emojiSymbol === '🐈')
    {
        window.location.href = 'https://source.unsplash.com/random/1920x1080/?cats';
    }

    else if (emojiSymbol === '🏪')
    {
        window.location.href = 'https://www.amazon.in/';
    }

    else if (emojiSymbol === '🐕')
    {
        window.location.href = 'https://source.unsplash.com/random/1920x1080/?dogs';
    }

    else if (emojiSymbol === '🏫')
    {
        window.location.href = 'https://www.chmcollege.in/';
    }

    else 
    {
        // Default action for other emojis
        alert(`You seem to like clicking on ${emojiSymbol}`);
    }
        });
    });
});
