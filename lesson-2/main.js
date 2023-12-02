
// Типы Данных 8
// Ключевые сдова var let const
 // переменные - озгормо
 // оператор(=,==,===,=,-,+,/.*,>< >= <=,)
 var  carname ="fit"
 var userName =`Nurshola`
 //2 number
 var applePrice2 =100
 var batteryMass=70
 //3 boolen
 var isSnow = false
 var isSnow2 =true
 //4 null
 var baha = null
 baha='Baha'
 //5 undefined
 var jok;
 //6---
 var id = symbol("userid")
 //7 -- bigint
 var maxkm =100n
 // 8 object object {},Array[], 
 var  headerManu =['Home','About','Contacts']
var table ={
    //key:value
    color:'red',
    height:2,
    width:3,
    material:'metal'
}
var user ={
    name:"Isa",
    ismarried:false,
    salary:50000
    age: 20
    car: null
}



    var baby = {
        image: 'https://i.ytimg.com/vi/-5maIvilOK4/maxresdefault.jpg,
        movieName: "Малыш",
        year: 2023,
        author: "Учкун Жакыпбеков",
        description: `
        Талант отчаянный хулиган из провинциального городка Балыкчы.  Однаждны в очередной драке он пулучает травму головы и умственно становится настоящим младенцем. Маме Таланта Толгонай приходится воспитывать своего большого сына с самого начало и сделать его снова взрослым человеком, но к ней на помощ приходит Бакыт, который давно женился бы на Толгонай, если бы не Талант.`,
        country: "Кыргызстан",
        genre: 'Комедия, драма',
        roles: ['Аскат Сулайманов',' Шумкарбек Бейшеналиев', 'Элмира Тагаева', 'Адеми Бейшенбекова']
      }


document.write(`<img  src='${baby.image}'alt='image' />`)
document.write(`<h3>${baby.mavieName}</h3`)
document.write(`<h3>${baby.year}-жыл </h3>`)
document.write(`<p>${baby.description}</p>`)