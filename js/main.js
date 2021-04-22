const container  = document.querySelector('.container'),
    inputTitle   = document.querySelector('#inputTitle'),
    inputImg     = document.querySelector('#inputImg'),
    inputContent = document.querySelector('#inputContent'),
    addBtn       = document.querySelector('button')


let database = [
    {
        title: 'Uzbekistan',
        url: 'img/image-1.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero nemo, facilis ducimus iusto eius libero eveniet illum.'
    },
    {
        title: 'America',
        url: 'img/image-2.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero nemo, facilis ducimus iusto eius libero eveniet illum.'
    },
    {
        title: 'Germany',
        url: 'img/image-3.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero nemo, facilis ducimus iusto eius libero eveniet illum.'
    },
    {
        title: 'Korea',
        url: 'img/image-4.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero nemo, facilis ducimus iusto eius libero eveniet illum.'
    }
]

const renderer = (data) => {
    container.innerHTML = null
    for (let element of data) {
        let card = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('h1')
        let content = document.createElement('p')
        let imageHover = document.createElement('img')
        let wrapper = document.createElement('div')
        
        card.classList.add('card')
        image.classList.add('image')
        title.classList.add('heading')
        content.classList.add('content')
        imageHover.classList.add('image-hover')
        wrapper.classList.add('wrapper')
        
        image.src = element.url
        title.textContent = element.title
        imageHover.src = element.url
        content.textContent = element.content
        
        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(content)
        card.appendChild(imageHover)
        card.appendChild(wrapper)
        
        container.appendChild(card)


        card.addEventListener('mouseleave', () => {
            title.style.transition = 'none'
            content.style.transition = 'none'
            imageHover.style.transition = 'none'
            wrapper.style.transition = 'none'
        })
        card.addEventListener('mouseenter', () => {
            title.style.transition = 'all 0.8s ease'
            title.style.transitionDelay = '0.4s'
            content.style.transition = 'all 0.8s ease'
            content.style.transitionDelay = '0.4s'
            imageHover.style.transition = 'all 1s ease'
            imageHover.style.transitionDelay = '0.8s'
            wrapper.style.transition = 'all 0.4s ease'
        })
    }
}

renderer(database)

addBtn.addEventListener('click', () => {
    if (inputTitle.value !== '' && inputImg.value !== '' && inputContent.value !== '') {
        let title = inputTitle.value
        let url = inputImg.value
        let content = inputContent.value
        let newData = {title, url, content}
        database.push(newData)
        renderer(database)
        inputTitle.value = ''
        inputImg.value = ''
        inputContent.value = ''        
    }
})