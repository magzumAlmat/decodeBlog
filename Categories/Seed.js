const Category = require("./Category")


const data=[
    'Прогнозы в IT',
    'Веб-разработка',
    'Мобильная разработка',
    "Фриланс",
    "Алгоритмы",
    'Тестирование IT систем',
    "Data Science",
    "Blockchain",
  
]



 async function writeDataCategory(){
    const length= await Category.count()
    if (length==0){
        data.map((item,index)=>{
            new Category({
                name:item,
                key:index
            }).save()
        })
    }
}
module.exports = writeDataCategory