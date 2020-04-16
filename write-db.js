const {db, Tasks, Notes} = require('./db')

// adding some initial data
async function addTask(){
    await db.sync()

    await Tasks.bulkCreate([
        {
            title: 'Angular Classroom Session',
            description: 'Learn Angular Basics'
        },
        {
            title: 'MVC',
            description: 'Learn Building Application using ASP.Net MVC'
        },
        {
            title: 'Node Classroom Session',
            description: 'Learn Node Js Basics'
        }
    ])

    await Notes.bulkCreate([
            {taskId: 1, note: 'Read about TypeScript'},
            {taskId: 1, note: 'Read about Data Binding'},
            {taskId: 2, note: 'Read about CRUD Operations'},
            {taskId: 3, note: 'Read about Express'}
    ])
}

addTask()