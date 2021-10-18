function list(type) { 
 // начинается список
 document.write('<p id="titleHobby">'+list.arguments[1]+'</p>');
 document.write("<" + type + "L>") 
 for (var i = 2; i < list.arguments.length; i++) {
 // Повторить для каждого аргумента
 document.write("<LI>" +"<a name='"+i+"'>"+ list.arguments[i]+"</LI>"+"<br>");
 }
 // заканчивается список 
 document.write("</" + type + "L>") 
 } 

list("O", "Мое хобби","Керамика", "Homescapes","Просмотр Youtube","Pinterest","Йога");

list("O", "Мои любимые книги","Джейн Эйр-Шарлотта Бронте","Токсичные родители-Сьюзен Форвард", "Мастер и Маргарита-Михаила Булгаков", "Гордость и предубеждение-Джейн Остен", "Евгений Онегин-Александр Пушкин");

list("O", "Моя любимая музыка","Nicki Minaj","SZA","Drake","Megan Thee Stallion","Doja Cat");

list("O", "Мои любимые фильмы","Мамма Mia!","Сумерки","Пила","Штурм белого дома", "Телохранитель");

 