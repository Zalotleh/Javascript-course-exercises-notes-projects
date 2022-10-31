export const users =[
    {name:'mario', premium:true },
    {name:'luigi', premium:false },
    {name:'yoshi', premium: true},
    {name:'toad', premium: true},
    {name:'peach', premium: false},
];

const greet= name =>{
    console.log(`hello ${name}`);
}

const getPremUsers = (items)=>{
    return items.filter(item=> item.premium);
};

export {getPremUsers, greet, users as default};