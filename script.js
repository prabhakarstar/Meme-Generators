const meme_generator_btn = document.querySelector('.genertor-meme-btn');
const meme_img = document.querySelector('#meme_genertor img');
const meme_title = document.querySelector('.title-meme');
const meme_autor = document.querySelector('.meme_autor');

const updatedetail = (url,title,author) =>{
    meme_img.setAttribute('src',url);
    meme_title.innerHTML = title;
    meme_autor.innerHTML = `meme by : ${author}`;
}


const generatememe = () => {
    fetch('https://meme-api.com/gimme')
    .then((res)=> res.json())
    .then((data)=> updatedetail(data.url,data.title,data.author))
}

meme_generator_btn.addEventListener('click',generatememe)

generatememe();
