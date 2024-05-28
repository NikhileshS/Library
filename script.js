const btn = document.querySelector('.btn');
const grid = document.querySelector('grid');

const title = document.createElement('div');
title.textContent = 'Title :' 
const author = document.createElement('div');
author.textContent = 'Author :'
const page = document.createElement('div');
page.textContent = 'Pages :'
const remove = document.createElement('button');
remove.textContent = 'X'
const container = document.createElement('div');

container.appendChild(title);
container.appendChild(remove);
container.appendChild(author);
container.appendChild(page);

function library(name,author,page){
    this.name = name;
    this.author = author;
    this.page = page;
}

const lib = []


