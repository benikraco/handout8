document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['pai']
  let strlink =  "assets/img/"+value+".jpg"
  let link = document.querySelector(".project-image")
  link.src = strlink


  
  
  let db = coDesConnect('https://projeto1codesign.firebaseio.com/')

  db.download('/', function(data) {

    context = data['projetos']
    coDesReplace('.main-menu', context)
    console.log(context)
    
    context = data['projetos']['sessao'][value2]['projetos'][value]
    console.log(context)
    coDesReplace('.project-main',context)

  })
})