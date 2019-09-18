document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let strlink = "projeto.html?pai=" + value + "&key={{@key}}"
  let link = document.querySelector(".destaque")
  link.href = strlink

  
  
  let db = coDesConnect('https://projeto1codesign.firebaseio.com/')

  db.download('/', function(data) {

    context = data['projetos']
    coDesReplace('.main-menu', context)
    console.log(context)
    
    context = data['projetos']['sessao'][value]
    console.log(context)
    coDesReplace('.section-para',context)
    coDesReplace('.projects-menu', context)
  })
})