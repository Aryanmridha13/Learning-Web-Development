let head_element = document.createElement('h1')
head_element.textContent ="this is head from js"

let bd = document.body
 bd.append(head_element)

let head1 = document.createElement('h3')
head1.textContent ="this is second element " 
bd.append(head1)

head1.setAttribute('style','color:blue')
head1.setAttribute('align','center')

head_element.setAttribute('style','background-color:red')
head_element.setAttribute('style','color:red')

bd.setAttribute('style','background-color:gray')

head1.removeAttribute('style')
bd.removeAttribute('style')

let img = document.getElementById('img')
img.setAttribute('src','images/newmain.jpg')

