const grid = document.querySelector('.grid');
const submit = document.querySelector('.submit');
const dialog = document.querySelector('dialog');
const contain  = document.querySelector('.container');
const exit = document.querySelector('.delete');
const form = document.querySelector('form');




function library(name,author,page){
    this.name = name;
    this.author = author;
    this.page = page;
}



const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    dialog.showModal();
})

submit.addEventListener('click',function addbutton(event){
    let name = document.getElementById('book-name').value;
    let bookAuthor = document.getElementById('book-author').value;
    let bookPage = document.getElementById('book-pages').value;

    if(name === ''| bookAuthor === ''| bookPage === ''){
        alert('Please fill the following forms with valid info');
    }
    else{
    const books = new library(name,bookAuthor,bookPage);

    const title = document.createElement('div');
    title.textContent = `Title : ${books.name}`;
    title.classList.add('title'); 

    const author = document.createElement('div');
    author.textContent = `Author : ${books.author}`
    author.classList.add('author');

    const page = document.createElement('div');
    page.textContent = `Pages : ${books.page}`;
    page.classList.add('pages');

    const remove = document.createElement('button');
    remove.textContent = 'X';
    remove.classList.add('removebtn');
    remove.addEventListener('click',() =>{
        grid.removeChild(container);
    })

    const container = document.createElement('div');
    container.classList.add('gridcon');

    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(page);
    container.appendChild(remove);
    grid.appendChild(container);
    dialog.close();
    form.reset();
    event.preventDefault();
}
})

exit.addEventListener('click',() =>{
    dialog.close();
    form.reset();
})