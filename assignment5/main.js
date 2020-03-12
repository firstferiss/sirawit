var post = 1;

function PostFunc()
{
    
    var text = document.getElementById("text1").value;

    var post1 = document.getElementById("post1")
    var post2 = document.getElementById("reply1")
    var post3 = document.getElementById("reply2")
    
    if(post==1)
    {
        post1.innerText = text;
        post ++; 
    } 
    else if(post==2)
    {
        post2.innerText = text;
        post ++;
    }
    else if(post==3)
    {
        post3.innerText = text;
        post ++;
    }
}
function ClearFunc(){
    
    var text = ""

    var post1 = document.getElementById("post1")
    var post2 = document.getElementById("reply1")
    var post3 = document.getElementById("reply2")
    var text8 = document.getElementById("text1").value;
    
        post1.innerText = text;
        post2.innerText = text;
        post3.innerText = text;
        text8  = text;
        post = 1;
}