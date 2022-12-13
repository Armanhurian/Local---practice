let btnColor = document.querySelectorAll('.btn')

document.documentElement.style.getPropertyValue('--theme-color');

let myArry = []

btnColor.forEach(function(item){
    item.addEventListener('click',function(event){
        document.documentElement.style.setProperty('--theme-color',event.target.getAttribute('data-color'));
        
        myArry.push(event.target.getAttribute('data-color'))
        console.log(myArry);
        localStorage.setItem('theme',JSON.stringify(myArry))
        
    })

})


window.addEventListener('load',function(){
   let getLocalStorage = JSON.parse(this.localStorage.getItem('theme'));
  let newLocal = getLocalStorage[getLocalStorage.length - 1];
    document.documentElement.style.setProperty('--theme-color', newLocal)
})

