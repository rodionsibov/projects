const { readdir, stat, writeFile, readFile } = require('fs')

const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
}

readdir('./', (err, files) => {
    const projects = []
    // files.includes()
    for (const file of files) {
        if (file.includes('index.html')) {
            console.log(file);

            stat(file, (err, stats) => {
                readFile(`${file}`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return
                    }
                    parseTitle(data)
                    parseDescription(data);
                    const project = {
                        id: Date.now(),
                        title: parseTitle(data),
                        description: parseDescription(data),
                        path: `${file}`,
                        date: new Intl.DateTimeFormat('default', options).format(new Date())
                    }
                    projects.push(project)
                    writeFile('./test2.json', JSON.stringify(projects), err => {
                        if (err) {
                            console.error(err);
                            return
                        };
                    })
                })
            })
        }
    }
    
})


// const isSameDay = (a, b) => {
//     return a.getFullYear() === b.getFullYear() &&
//         a.getMonth() === b.getMonth() &&
//         a.getDate() === b.getDate()
// }

const parseTitle = (body) => {
    let match = body.match(/<title>([^<]*)<\/title>/) // regular expression to parse contents of the <title> tag
    if (!match || typeof match[1] !== 'string')
        throw new Error('Unable to parse the title tag')
    return match[1]
}

const parseDescription = (body) => {
    let match = body.match(/<meta name="description" content="([^<]*)">/) // regular expression to parse contents of the <meta> tag
    // if (!match || typeof match[1] !== 'string')
    //     throw new Error('Unable to parse the meta tag')
    return match?.[1] || ''
}



// readFile('./projects.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return
//     }

//     let projects
//     projects = JSON.parse(data)
//     for (const item of projects) {
//         if (item.url === project.url) {
//             console.log('Error: Check URL, please!');
//             return
//         }
//     }
//     projects.push(project)

//     
// })