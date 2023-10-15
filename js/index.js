document.getElementsByClassName('btn')[0].onclick = ()=>{

    let flask =  document.getElementById('flask');
    let lang =  document.getElementById('lang');

    localStorage.clear();
    localStorage.setItem("flask",flask.value)
    localStorage.setItem("lang",lang.value)

    if(flask.value =="a")
    location.href = './html/index1.html'
    else if(flask.value =="b")
    location.href = './html/index2.html'
    else if(flask.value =="c")
    location.href = './html/index3.html'
    else
    location.href = './html/index4.html'
    
}