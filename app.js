// insert current year
document.querySelector('.year').textContent = new Date().getFullYear();

// fetch projects
fetch('./projects.json')
    .then(res => res.json())
    .then(data => {
        const projects = data
        projects.sort(() => Math.random() - 0.5)
        document.querySelector('#howManyProjects').textContent = `[ ${projects.length} ]`
        renderProjects(projects)
        fetchEmojis(projects)

        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault()
            document.querySelector('.search-icon').classList.toggle('hide')
            document.querySelector('.close-icon').classList.toggle('show')
            document.querySelector('form').classList.toggle('show')
            if (document.querySelector('form').classList.contains('show')) getVibes()
        })
        // search
        searchProjects(projects)
        // add animation on scroll
        checkProjects();
    })
    .catch(err => console.log(err))

// search button press
document.querySelector('.search-button').addEventListener('click', () => {
    document.querySelector('.search-icon').classList.toggle('hide')
    document.querySelector('.close-icon').classList.toggle('show')
    document.querySelector('form').classList.toggle('show')
    if (document.querySelector('form').classList.contains('show')) getVibes()
})

window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        document.querySelector('.search-icon').classList.toggle('hide')
        document.querySelector('.close-icon').classList.toggle('show')
        document.querySelector('form').classList.toggle('show')
        if (document.querySelector('form').classList.contains('show')) getVibes()
    }
})

// label animation
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map(
            (letter, index) => `<span 
        style="transition-delay:${index * 50}ms">${letter}</span>`
        )
        .join('');
});

// vibes
function getVibes() {

    const vibes = [
        "Remember that you will attract the energy that you are giving off. So spread good vibes, give a lot of love and think positive at all times. Enjoy life!",
        "You should cleanse your mind of all the bad vibes. Let the good vibes flow instead.",
        "Stay strong despite of the bad things that happened. Make them wonder how you are still smiling despite of everything.",
        "Always surround yourself with positive souls and good vibes will just come naturally. Remember that your surroundings will influence your experience so make it a positive one.",
        "You cannot control other people but you can definitely control how you react to them.",
        "I do not have time to hate people who hated me. I am just too busy loving the ones who really love me.",
        "Even if you are feeling mad, always think before you talk. The words you say can be forgiven but will never forgotten.",
        "It does not matter what you have done, what matter is what you will choose to do after what happened.",
        "Negativity will only affect you if you are on the same frequency. So vibrate higher and you’ll attract positivity.",
        "Good intentions can go further than what you might think. So spread some good vibes and show some love!",
        "There is nothing better than a positive and good-natured person. Be one of them. Surround yourself with these people and you will feel the change.",
        "Always leave people better than when you met them. Hug those who are hurting. Kiss those who feel broken. Befriend those who are lost and love those who feel lonely.",
        "Positive people can change your whole day and can even change your whole life.",
        "Overthinking destroys relationships and friendships. Overthinking creates problems you have never had. So do not overthink. Simply overflow with the good vibes.",
        "Make it a habit to throw good vibes around like confetti.",
        "Do not worry about failures. Instead, worry about those chances that you have missed because you did not even give it a try. So stop worrying, be glad and learn to move on.",
        "Challenges are what make life so interesting. Overcoming them is what makes life so beautiful.",
        "Look for something good in every day. Even if in some days you need to have to look a little bit harder.",
        "No matter what happens, regardless of how far you think to be away from the place you wanted to be, do not ever stop hoping that you will eventually make it through in the end.",
        "Spending your day complaining about yesterday will not make tomorrow any better.",
        "Do not be afraid of life. Believe that life is really worth living and your belief can help to create the fact.",
        "Even if you are taking the right path, you could get ruin over if you will just be sitting right there.",
        "Whenever I would hear someone say life is very hard, I often get tempted to say – compared to what?",
        "The real opportunity to success lies within the person and not on the job.",
        "Optimism is the faith that leads to achievement. There is nothing that can be done without confidence and home.",
        "Our greatest weakness often lies in giving up. The most certain way to achieve success is t always try just one more time.",
        "Always believe in yourself and have faith in all your abilities. Without humble and reasonable powers, you cannot be successful or stay happy.",
        "Always talking about problems is often one of the greatest addictions of some people. So break the habit. Talk about all your triumphs, joys and accomplishments instead.",
        "You do not always need to have a plan. Sometimes, you just need to breath. Have faith. Trust. Let go and see what happens.",
        "Try to think like a Proton, which always stays positive.",
        "Beautiful things will always happen if you distance yourself from all the negativities in life.",
        "Positive thoughts can lead to positive feelings and attractive positive experiences in life. So always think about good thoughts all times.",
        "Be thankful for all those who said no. It is because of them that I am doing it myself.",
        "Be strong and always stay positive. Things will get better soon. It might be stormy now, but always remember that it will never rain forever.",
        "Nobody made you angry. It is you who decided to use anger as your response to things.",
        "Do not allow all the negative thoughts and feelings to drain your energy. Instead, focus on the good things that you have in your life now.",
        "We can no longer go back to the past. So start a new beginning now and come up with a new and positive ending.",
        "Do not think about what might go wrong. Instead, think about what could go right.",
        "Surround yourself with people who can lift you higher and instill positivity in your life.",
        "The main cause of sadness and depression is never about the situation but your thoughts about it.",
        "As soon as you replace negative thoughts with a positive one, you will start seeing positive results.",
        "Every bad situation will always have something positive in the end. Even a dead clock will show correct time twice in a day. So always stay positive in life because God knows what is best for you.",
        "Teach your mind to see good in all things. Staying positive is a choice. Your happiness will depend on the quality of your thoughts.",
        "Worrying will not empty tomorrow of all its troubles. It just empties all of its strengths.",
        "Stay away from things that will give you bad vibes. There’s absolutely no need to try to make sense of it. It is your life. You are free to do everything, so do whatever makes you happy.",
        "Life is too short to always be serious at all times. So, if you cannot laugh at yourself, then give me a call. I will laugh at you!",
        "When life puts you into tough situations, do not say why me? Instead, you should say, try me?",
        "Choosing to be positive and always having a grateful attitude is going to determine how you are going to live your life.",
        "Life will only come around once, so do whatever makes you smile and try to be with whoever that makes you happy.",
        "Surround yourself with good people and positive souls. Good vibes will come to you naturally. Remember that it is your environment that influences your experiences. So make it a positive one.",
        "You should be that kind of person that whenever you wake up every morning, the devil will end up saying, oh crap she is already up.",
        "Thinking positive at all time is not about expecting for the best things to happen in everything. But it is accepting that regardless of what happens, it is the best for that moment.",
        "We do not appreciate negative vibes around here, so move along.",
        "Look at those people surrounding you. Others inspire you, while some will merely perspire you. So be with people that will build good and positive energy in you.",
        "Your mind is very powerful. If you fill it with positive thoughts, you will soon start seeing positive changes in it.",
        "It hurts more to hold to grudges than to forgive. The anger will hold inside you and cause damage in you, and nobody else. So do not be a prisoner of you.",
        "Stay positive and be happy at all times. Work hard and do not give up hope. Always be open to criticism and do not be afraid to learn new things.",
        "Your positive action, along with positive thinking can sure lead to success.",
        "Learn to love yourself. It is important that you stay positive all the times because beauty comes from the inside.",
        "Adapting to the right attitude can turn a negative stress into a positive one.",
        "Successful people will maintain a positive focus in life no matter what.",
        "A strong and positive self-image is always the best possible preparation for one’s success.",
        "You can never have a positive life, yet maintain a negative mind.",
        "Your smile will lead to a positive countenance that makes people feel happy and comfortable being around you.",
        "A positive attitude can lead to a chain reaction of positive thoughts, outcomes and events.",
        "You should work really hard, remain positive and get up early each day. Consider every day as the best day.",
        "Your attitude is like box of crayons that give color to your world. If you constantly color your own picture with grey, then your picture will remain bleak. So try adding some bright colors into your picture no matter what life throws at you.",
        "A positive attitude will surely make dreams come true so always have this kind of positive in you, if you want your dreams to come true.",
        "In hale good vibes and exhale the bad ones. Worrying will not take the troubles away. It will just take away the peace of today.",
        "Always radiate positive vibes. Rise up and face the day full of enthusiasm and life.",
        "Always send out good vibes to the people around you every day. The world badly needs them.",
        "Always think happy thoughts and put a smile in your face so that good opportunities can easily find you.",
        "Be the kind of energy that no matter where you will go, you will always add value to the lives of people around you."
    ];

    const vibe = vibes[Math.floor(Math.random() * vibes.length)];
    document.querySelector('.vibe').textContent = `❤ ${vibe}`
}

// select and copy active vibe
document.querySelector('.vibe').addEventListener('click', e => {
    const input = document.body.appendChild(document.createElement("input"));
    input.value = e.target.textContent;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);

    const divEl = e.target.appendChild(document.createElement('div'))
    divEl.textContent = 'Copied 😉'
    divEl.style.marginTop = '20px'
    divEl.style.color = 'var(--color4)'
    setTimeout(() => {
        divEl.parentNode.removeChild(divEl)
    }, 500)
})

// button scroll to top
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.querySelector('#btnScrollToTop').style.display = 'block'
        document.querySelector('#btnScrollToTop').classList.add('show')
    } else {
        document.querySelector('#btnScrollToTop').style.display = 'none'
        document.querySelector('#btnScrollToTop').classList.remove('show')
    }
})

document.querySelector("#btnScrollToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// scrolled indicator
const scrolledIndicatorFill = document.querySelector(".scrolled-indicator-fill");
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    let percentageScrolled = 100;
    if (scrollable > 0) {
        percentageScrolled = Math.ceil(scrolled / scrollable * 100);
    }
    scrolledIndicatorFill.style.width = `${percentageScrolled}%`;
});

// typewriter
function w(d, e, c) {
    b = d.slice(0, c),
        b == d ? e.innerHTML = b : (e.innerHTML = b + "|",
            setTimeout(w, 100, d, e, c + 1))
}
window.addEventListener("DOMContentLoaded", function () {
    for (i of document.getElementsByClassName("typewriter"))
        w(i.innerHTML, i, 0)
}, false)

// utils
function fetchEmojis(projects) {
    fetch(`https://api.emojisworld.fr/v1/random?&limit=${projects.length}`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll('.emojis').forEach((item, index) => {
                item.textContent = `${data.results[index].emoji}`
            })
        })
        .catch(err => console.log(err))
}

function checkProjects() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    document.querySelectorAll('.project').forEach((project) => {
        const projectTop = project.getBoundingClientRect().top;
        if (projectTop < triggerBottom) {
            project.classList.add("show");
        } else {
            project.classList.remove("show");
        }
    });
};

window.addEventListener('scroll', checkProjects);

function renderProjects(projects) {
    document.querySelector('.projects').innerHTML = projects.map(project => `
            <div class="project">
                <div class="emojis" title="Emojis World is created and maintained by Anton Bourtnik"></div>
                <div class="project-header">
                    <div><a href="${project.url}" target="_blank">${project.title}</a></div>
                    <div>Last updated ${project.date}</div>
                </div>
            </div>
            `).join('')
    // <iframe src="${project.url}" loading="lazy"></iframe>
    fetchEmojis(projects)
    // add animation on scroll
    checkProjects()
}

function searchProjects(projects) {
    document.querySelector('input').addEventListener('keyup', e => {
        if (e.target.value !== '') {
            const filteredProjects = projects.filter(project => {
                return project.title.toLowerCase().includes(e.target.value.toLowerCase())
            })
            renderProjects(filteredProjects)
            document.querySelector('.search-info').textContent = `There are ${filteredProjects.length} projects`
            document.querySelector('#howManyProjects').textContent = `[ ${filteredProjects.length} ]`
        } else {
            document.querySelector('#howManyProjects').textContent = `[ ${projects.length} ]`
            document.querySelector('.search-info').textContent = ''
            renderProjects(projects)
        }
    })
}