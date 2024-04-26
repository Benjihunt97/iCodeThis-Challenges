const current = document.getElementById("current");
const allTime = document.getElementById("all-time");
const cell = document.querySelector(".cell");

current.addEventListener("click", () => {
    cell.removeAttribute('data-active');
});


allTime.addEventListener("click", () => {
    cell.setAttribute('data-active', true);
});

const people = [
    {
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
        name: 'Cherly Correa',
        views: '6.23M views',
        images: [
            'https://images.unsplash.com/photo-1512620230221-c041ac15d906?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1596236100207-d8d53459cc08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1617094243942-d3f510fb1e9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D'
        ]
    },
    {
        img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Tamika Walker',
        views: '5.1M views',
        images: [
            'https://images.unsplash.com/photo-1619164044178-4e9cf4bc8e7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1630273244883-cd6756ceb353?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1698516880610-0d683e4598f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D'
        ]
    },
    {
        img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Judith Earnhardt',
        views: '4.76M views',
        images: [
            'https://plus.unsplash.com/premium_photo-1691852516264-bc1de7f5fbdd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1616990086066-ea33d4890266?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1571075547867-f36e5ca05913?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D'
        ]
    },
    {
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Edward',
        views: '4.23M views',
        images: [
            'https://plus.unsplash.com/premium_photo-1692049123449-10ebfa8370cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1588186879741-889eb26e549f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1605562526387-c4c8359f13b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D'
        ]
    },
    {
        img: 'https://media.istockphoto.com/id/1494495577/photo/smiling-young-indian-man-portrait-in-black-t-shirt-and-silver-neck-chain-outdoor-green-public.webp?b=1&s=170667a&w=0&k=20&c=FvYJK4hfMIJx7vacjLbcDw36Ddk70Ynvk4g6rIUSwKY=',
        name: 'Shawn Hanna',
        views: '4.19M views',
        images: [
            'https://images.unsplash.com/photo-1612091934022-608f0c6444fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1578141954934-b8af210ecf5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1445264718234-a623be589d37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwcGhvdG9zfGVufDB8fDB8fHww'
        ]
    }
]
const board = document.getElementById("board");

people.forEach((person, index) => {
    const personClasses = ['flex', 'items-center', 'gap-3', 'rounded-full', 'border', 'border-slate-300', 'py-2', 'px-4', 'overflow-hidden'];

    const personCard = document.createElement("div");
    personClasses.forEach(classes => personCard.classList.add(classes));

    personCard.innerHTML = `
        <p class="font-bold text-2xl">${index + 1}</p>
        <img src="${person.img}" alt="" class="rounded-full size-12 bg-red-300 object-cover">

        <div>
            <h3 class="font-bold">${person.name}</h3>
            <p class="text-gray-500 text-xs">${person.views}</p>
        </div>

        <div class="hidden gap-3 ml-auto sm:flex">
            <img src="${person.images[0]}" alt="" class="size-12 rounded-lg bg-red-300 object-cover">
            <img src="${person.images[1]}" alt="" class="size-12 rounded-lg bg-red-300 object-cover">
            <img src="${person.images[2]}" alt="" class="size-12 rounded-lg bg-red-300 object-cover">
        </div>
    `;

    board.appendChild(personCard);
});

