import readLine from 'readline'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = []

const handleInput = (optionStr) => {

    const option = Number(optionStr)
    if (option === 1) {
        rl.question('Enter the task : ', (task) => {
            todos.push(task)
            console.log('Task Added : ', task)
            showMenu()
        })
    } else if (option === 2) {
        console.log('\n Your todo list')
        todos.forEach((item, idx) => {
            console.log(`${idx + 1} : ${item}`)
        })
        showMenu()
    } else if (option === 3) {
        console.log('Good Bye')
        rl.close()
    } else {
        console.log('Some Error')
    }

}

const showMenu = () => {
    console.log("\n 1: Add a Task")
    console.log("\n 2: View a Task")
    console.log("\n 3: Exit")
    rl.question("Choose an Option : ", handleInput)
}

showMenu()