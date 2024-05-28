const grid = document.querySelector('.grid');
const submit = document.querySelector('.submit');
const dialog = document.querySelector('dialog');
const contain  = document.querySelector('.container');
const exit = document.querySelector('.delete');




function library(name,author,page){
    this.name = name;
    this.author = author;
    this.page = page;
}



const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    dialog.showModal();
})

submit.addEventListener('click',function addbutton(){

    const books = new library('steve diary','steve','67');

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
})

exit.addEventListener('click',() =>{
    dialog.close();
})