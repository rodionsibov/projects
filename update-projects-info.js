const { readdir, stat, writeFile, readFile } = require('fs')



const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
}

// readdir('./', (err, files) => {
//     files.forEach(file => {
//         stat(file, (err, stats) => {
//             if (stats.isDirectory()) {
//                 console.log(`${file} -> ${stats.birthtime.toLocaleString()}`)
//             }
//         })
//     })
// })

const isSameDay = (a, b) => {
    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
}

const project = {
    title: 'JavaScrip Form Validation',
    text: '',
    url: 'js-form-validation/index.html',
    date: new Intl.DateTimeFormat('default', options).format(new Date())
}

readFile('./projects.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }

    let projects
    projects = JSON.parse(data)
    for (const item of projects) {
        if (item.url === project.url) {
            console.log('Error: Check URL, please!');
            return
        }
    }
    projects.push(project)

    writeFile('./test.json', JSON.stringify(projects), err => {
        if (err) {
            console.error(err);
            return
        };
        console.log(`Project ${project.title} added successfully. There are ${projects.length} projects.`);
    })
})
