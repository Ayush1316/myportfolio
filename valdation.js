function checkage(x){
    const selecteddate= new Date(x);
    const currentdate =new Date();
    const mindate= new Date(currentdate.getFullYear()-18,currentdate.getMonth(),currentdate.getDate());
    if(selecteddate>mindate){
        
        return false;
    }
    else
    {
        return true;
    }
   }

   function checkname(y){
    if(y==null||y==""){
        return false;
    }
    else{
        return true;
    }
   }
   function checksurname(z){
    if(z==null||z==""){
        return false;
    }
    else{
        return true;
    }
}
function checkEmail(a) {
    
    var z = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!z.test(y.value)) {
    alert('Please provide a valid email address');
    a.focus;
    return false;
 }
 else{
    return true;
}
}

function comparepassword(p1,p2){
    if(p1==p2){
        return true;
    }
    else
    return false;
}