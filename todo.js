function newtodo(){
    let li=document.createElement('li')
    let name=document.querySelector("#nameinput").value ;
    let content=document.querySelector("#contentinput").value ;
    let ch=name+ ' : '+content;
    let element=document.createTextNode(ch);
    li.appendChild(element);
    if(name===''||content===''){
        alert('Invalide Todo Element')
    }
    else {document.querySelector("#mylist").appendChild(li)}
    document.querySelector('#nameinput').value='';
    document.querySelector('#contentinput').value='';
    let close=document.createElement('span');
    let text=document.createTextNode('\u00D7');
    close.className='close';
    close.appendChild(text);
    li.appendChild(close);
    close.addEventListener('click',function(){
        this.parentElement.style.display='none';
    })
    let x=document.createElement('br');
    li.appendChild(x);
}