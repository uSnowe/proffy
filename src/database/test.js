const database = require("./db")
const createProffy = require("./createProffy")

database.then(async(db) => {
    //inserir dads

    proffyValue = {
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // o proffy id vira do banco de dados :o
    }

    classScheduleValues = [
        // class id vira pelo banco de dados após cadastrarmos a clase :3
        {
            weekday: 1,
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar dados

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    // consultar as classes de um determinado professor
    // e trazer junto os dados deles
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // o horario que a pessoa trabalha é das 8am até as 18pm

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectedClassesSchedules)
})