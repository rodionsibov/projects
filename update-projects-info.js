const { readdir, stat, writeFile, readFile } = require('fs')

readdir('./', (err, files) => {
    files.forEach(file => {
        stat(file, (err, stats) => {
            if (stats.isDirectory() && stats.birthtime === new Date()) {
                console.log(`${file} -> ${stats.birthtime.toLocaleString()}`)
            }
        })
    })
})

const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
}

const project = {
    title: 'New project4',
    text: 'description',
    url: 'url',
    date: new Intl.DateTimeFormat('default', options).format(new Date())
}


readFile('./test.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }

    let projects
    projects = JSON.parse(data)
    for (const item of projects) {
        if (item.url === project.url) {
            console.log('Error: Check URL');
            return
        }
    }
    projects.unshift(project)

    writeFile('./test.json', JSON.stringify(projects), err => {
        if (err) {
            console.error(err);
            return
        };
        console.log(`Project ${project.title} added successfully. There are ${projects.length} projects.`);
    })
})
