//! to metch 
// getEleementbyId('heading')

document.getElementById('Utkarsh');
    // we can access the id then we 
    // this method calls on the document object
    // returns a single object

// getElementsByClassName
    // return html colection like an object
    // returns multiple items
    // return an array like object

// getElementtByTagName('h1);


// $0 



// ways to access
    // id , class , tag
    // if we have selected some element then we could equate it with $0
// querySelector
    // . class , # is , tag
    // single object is its output , 
    // query selector

// querySelectorAll('..hidden')


// Task 1 :- update existing content.
    // innerText

    // outerhtml
    // innerHtml
        // get an elemnt / all of its descendent
        // update the content
    
    // textContent 
        // get set textual content ko update 
        // ye as a plain text dekhta hi , whhi innertext me in sbko render kiya jayega. 
        // suppose if display hidden kiya hota to , textContent me dikhata , whi innerHtml me nhi dikhata 


    // adding new element
        // createElement , then appendChild
    
        let content = document.querySelector('.paraClass');
        console.log(content);

        let newPara = document.createElement('p');
        console.log(newPara);

        content.appendChild(newPara);
        console.log(content);

    // creating text-node;
        // Method 1 
        let newPar = document.createElement('p');
        let textPara = document.createTextNode('I am the text');
        newPar.appendChild(textPara);
        content.append(newPar);

        // method 2
        let myPara = document.createElement('p');
        myPara.textContent = 'I am the text';
        content.appendChild(myPara);

    // insertAdjacentHTML()
        // has to be called 2 argument
        // location / position --> before begin , after end , after begin , before end
        // html.text content to be inserted.
        // before begin , before end is repected to open and close tag.
    

    // how he inserted as per above
        // by $0 he selected the attribute or the element before which he wanttd to inset

        // let newText = doccument.createElement('h3');
        // newText.textContent = 'ABCD';
        // content.insertAdjacentElement('beforebegin' , newText); 

    // removing 
        // removeChild()
            // opposite of appendChild
            // need to know parent elementt
            // the child element to remove
            // parentElement.removeChild(ChildElement);

            // access child and parent and apply syntax

        // method 2
            // parent ko fincd krne ka , as sometime pta nhi hota ki konsa arent hi 
            // child.parent.remove(child);



// Css change krna , java script ka use krke 
    // inline > internal > external 

    // .style property
    // single property hi change hota hi , ek baar
    // let content = $0;
    // content.style.property name = 'single changes';
    //content.style.color = 'red';

    // ! multiple items change
    // content.style.cssText = ' color:green ; background-color : yellow ; font-size : 4em; ' ;



    // method 3
    // setAttribute --> used to style , used to add id 
    // content.setAttribute("style" , " color : red ;   background-color : red;");
    // content.setAttribute("id","HeadingId");

    // method 4
    // className --> show all the classes of selected element , as given element may be coming under multiple class
    
    // method 5
    // classList --> give an list / array / object --> array of classes return kr deta hi
    // toggle()--> add or delete if not present or present 
    // add() -> adds class
    // remove()
    // contains()


