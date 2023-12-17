const person = {
    name: '佐科姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2022,title:'GoodStudent'}]
 }
 const {name,age:year,address:{city,area:mountain},title:[title1,{title:title2}]}=person
 console.log(name)
 console.log(year)
 console.log(city)
 console.log(mountain)
 console.log(title1)
 console.log(title2)