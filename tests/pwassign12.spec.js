const {test , expect} = require ('@playwright/test')

test.describe('firstBlock' , async()=>{
    
    test.beforeAll(async()=>{

        console.log('Before All Hook inside describe block')
    })

    test.afterAll(async()=>{

        console.log('After All Hook inside describe block')
    })

    test ('test1', async()=>{
        console.log('first test')
    
    })
    
    test ('test2', async()=>{
        console.log('second test')
        
    })
})

test.beforeAll(async()=>{

    console.log('Before All Hook Outside describe block')
})

test.afterAll(async()=>{

    console.log('After All Hook Outside describe block')
})

test.beforeEach(async()=>{

    console.log('Before Each Hook Outside describe block')
})

test.afterEach(async()=>{

    console.log('After Each Hook Outside describe block')
})



test ('test3', async()=>{
    console.log('third test')
    
})

test ('test4', async()=>{
    console.log('fourth test')
        
})

test ('test5', async()=>{
    console.log('fifth test')
        
})    

