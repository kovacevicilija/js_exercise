// funkcija za kreiranje paragarafa

    function createElement(type, className)
    {
        var element = document.createElement(type)
        if(className)
        {
            element.classList.add(className);

        }
        return element;
    }

    function createParagraph(text, className)
    {
        var p = createElement("p", className);
        p.innerText = text;
        return p;

    }

    function createUl(className)
    {

        var ul = createElement("ul", className);
        return ul;

    }
    

    function createDiv(className)
    {

        var div = createElement("div", className)
        return div;

    }

    function createButton(text, className, dataPurpose)
    {
        var btn = createElement("button", className);
        btn.innerText = text;
        btn.setAttribute("data-purpose", dataPurpose);
        return btn;
    }


    function createTodo(text)
    {

        var li = createElement("li", "todo");
        var parg = createParagraph(text);

        li.append(parg);

        var buttonCnt = createDiv("buttons");

        var upBtn = createButton("Up", "up", "up");
        var dBtn = createButton("Down", "down", "down");
        var rBtn = createButton("Remove", "remove", "remove");

        buttonCnt.append(upBtn);
        buttonCnt.append(dBtn);
        buttonCnt.append(rBtn);

        li.append(buttonCnt);

        return li;

    }



    //console.log(createTodo("task12"));



// oznacavanje inputa i buttona

let todo_input = document.querySelector("#todo-input");
let todo_add = document.querySelector("#add-todo");
let mainCont = document.querySelector("#todo-main");





todo_add.addEventListener("click", function(){

   if(todo_input.value.length > 0)
    {
        // keyCode kada pritisne odredeno slovo znak
        

        
        // var todo = createTodo(todo_input.value);
        // console.log(todo);
        // todo_input.value = "";
        
        var todo = createTodo(todo_input.value);

        todo.style.opacity = 0;
        setTimeout(function(){

            todo.style.opacity = 1;

        }, 50)

        if(!mainCont.querySelector(".todo")){

            var noTodoDisply = document.querySelector(".no-todos,p");

            mainCont.removeChild(noTodoDisply);

            var ul = createUl("todo-list");

            ul.append(todo);
            mainCont.append(ul);
        }

        else{

            var ul = document.querySelector(".todo-list");
            ul.append(todo);
            // mainCont.append(ul);


        }

        // mainCont.append(todo);
        todo_input.value = "";
        }
    

})

todo_input.addEventListener("keyup", function(e){


    if(todo_input.value.length > 0)
    {
        // keyCode kada pritisne odredeno slovo znak
        if(e.keyCode === 13){
        var todo = createTodo(todo_input.value);

        todo.style.opacity = 0;
        setTimeout(function(){

            todo.style.opacity = 1;

        }, 50)

        if(!mainCont.querySelector(".todo")){

            var noTodoDisply = document.querySelector(".no-todos,p");

            mainCont.removeChild(noTodoDisply);

            var ul = createUl("todo-list");

            ul.append(todo);
            mainCont.append(ul);
        }

        else{

            var ul = document.querySelector(".todo-list");
            ul.append(todo);
            // mainCont.append(ul);


        }

        // mainCont.append(todo);
        todo_input.value = "";
        }
    }

    

});



// buttons up, down, remove

mainCont.addEventListener("click", function(e){

    if(e.target.nodeName === "BUTTON")
    {

        var button = e.target;

        var typeBtn = button.getAttribute("data-purpose");

        var li = button.parentElement.parentElement;

        var ul = li.parentElement;

        switch (typeBtn) {
            case "remove":
            
                ul.removeChild(li);

                if(ul.children.length === 0)
                {
                    var p = createParagraph("No todos on display", "no-todos");
                    //var ul = document.querySelector(".todo-list");

                    // mainCont.removeChild(ul);
                    mainCont.append(p);

                }
            
                break;
        
            case "down":

                var nextEl = li.nextElementSibling;
                if(nextEl !== null)
                {
                    if(nextEl !== null)
                    {

                        ul.removeChild(li);
                        ul.insertBefore(li, nextEl.nextElementSibling);
                    }
                   
                   
                    

                }

                break;

            case "up":

                
                var previousEl = li.previousElementSibling;
                if(previousEl !== null)
                {
                    ul.removeChild(li);
                    ul.insertBefore(li, previousEl);
                    

                }

            break;

            
        }

    }
    // console.log(e.target.nodeName)

})
