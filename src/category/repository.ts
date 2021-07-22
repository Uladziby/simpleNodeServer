import { Category } from "./category";

const categories : Category [] = [
    {
        id: 1,
        name : 'setA',
        
    },
    {
        id: 2,
        name : 'setB',
        
    },
    {
        id: 3,
        name : 'setC',
        
    },
    {
        id: 4,
        name : 'setD',
        
    },
    {
        id: 5,
        name : 'setE',
        
    },
    {
        id: 6,
        name : 'setF',
        
    },
    {
        id: 7,
        name : 'setG',
        
    },
    {
        id: 8,
        name : 'setJ',
        
    },
    {
        id: 9,
        name : 'setK',
       /*  link: 'localhost:3000/src/images/cat.jpg' */
        
    },
    
]

const newId = (function(){
    let id  = categories.length;
    return ( )=> id ++;
})()


export function getCategories (): Promise<Category[]> {
    return Promise.resolve(categories)
}

export function getCategoryById ( id: number) : Promise<Category| undefined>{
    const category = categories.find((item) => item.id == id )    
    return Promise.resolve(category);
}

export function deleteCategory(id: number ): Promise<void>{
    const categoryIndex = categories.findIndex ((cat) => cat.id ==id)
    if (categoryIndex<0) return Promise.reject('category not found')
    categories.splice(categoryIndex, 1)
    return Promise.resolve()
}

export function createCategory ( data : Category): Promise<Category>{
    const isExists = categories.findIndex((cat)=> cat.name === data.name)>= 0;
    if ( isExists){
        return Promise.reject('this category is exist')
    }
    const newCategory : Category = {
        ...data,
        id: newId()
    }
    categories.push(newCategory)
    return Promise.resolve(newCategory)
}
 