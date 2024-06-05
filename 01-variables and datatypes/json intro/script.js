// const post ={
//     id: 1,
//     title: 'abhaya'
// }
// // converst json to string
// const str= JSON.stringify(post);
// console.log(str)
// //string to json // parse json
// const obj=JSON.parse(str);
// console.log(obj)

// challages

const library =[
    {
        title:'Dune',
        author:'frank herbert',
            status:{
                own:true,
                reading:false,
                read:false,
            }
        },
        {
            title:'Dune',
            author:'frank herbert',
                status:{
                    own:true,
                    reading:false,
                    read:false,
                }
            },
            {
                title:'Dune',
                author:'frank herbert',
                    status:{
                        own:true,
                        reading:false,
                        read:false,
                    }
                },
    
];

// challange 2

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library)

// challange 3

const {title:firstBoook}=library[0]


console.log(firstBoook)
const abh =JSON.stringify(library);
console.log(abh);