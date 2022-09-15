const imagem = [
    {
        'id': '1' , 'url': '1.jpg'
    },
    {
        'id': '2' , 'url': '2.jpg'
    },
    {
        'id': '3' , 'url': 'SSG_profile1.webp'
    },
    {
        'id': '4' , 'url': '3.jpg'
    },
    
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( imagem, container ) => {
    imagem.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( imagem, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);