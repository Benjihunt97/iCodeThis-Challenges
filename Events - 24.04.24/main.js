const events = [
    {
        month: 'May',
        day: '4',
        desc: 'HTML and CSS Basics',
        timeFrame: '15:00 - 17:00',
        type: 'online'
    },
    {
        month: 'May',
        day: '2',
        desc: 'JavaScript Advanced',
        timeFrame: '12:00 - 14:00',
        type: 'online'
    },
    {
        month: 'May',
        day: '8',
        desc: 'JavaScript for Begginers',
        timeFrame: '14:00 - 15:00',
        type: 'online'
    },
    {
        month: 'May',
        day: '11',
        desc: 'Python for Data Leanring',
        timeFrame: '09:00 - 11:00',
        type: 'online'
    },
    {
        month: 'May',
        day: '14 - 16',
        desc: 'Web Development Concepts',
        timeFrame: '11:00 - 13:00',
        type: 'online'
    },
    {
        month: 'My',
        day: '18 - 20',
        desc: 'Group Metting',
        timeFrame: '13:00 - 14:00',
        type: 'online'
    },
]

// loop throug the events and add them to the DOM
events.forEach(event => {
    const cardClasses = ["card", "text-xs", "p-5", "rounded-sm", "transition-all", "hover:scale-110", "hover:shadow-lg", "duration-500"];
    const card = document.createElement("div");
    cardClasses.forEach(classes => card.classList.add(classes));

    card.innerHTML = `
        <p id="card-month">${event.month}</p>
            <p id="card-date" class="font-bold text-3xl mb-4">${event.day}</p>

            <p id="card-desc" class="text-sm font-semibold mb-8">${event.desc}</p>

            <div class="flex items-start justify-between">
                <div>
                    <p id="card-time-frame">${event.timeFrame}</p>
                    <p id="card-type">${event.type}</p>
                </div>
            <p class="material-symbols-outlined text-lg">east</p>
        </div>
    `;

    document.getElementById("app").appendChild(card);

    setTimeout(() => {
        card.classList.remove("scale-0");
    }, 1300);

});
