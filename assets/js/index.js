document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto1codesign.firebaseio.com/')

  db.download('/', function(data) {
    context = data['projetos']
    console.log(context)
    coDesReplace('.main-menu', context)
    coDesReplace('.sections-menu', context)
  })
})
