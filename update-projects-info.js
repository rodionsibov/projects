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
//     files.find(file => {
//         file === 'video.html'
//         stat(file, (err, stats) => {
//             readFile(file`, 'utf8', (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     return
//                 }
//                 console.log(data);
//             })
//         })
//     })
// })

readdir('./', (err, files) => {
    const file = files.find(file => file === 'temp-folder')
    stat(file, (err, stats) => {
        readFile(`${file}/index.html`, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return
            }
            parseDescription(data);
        })
    })
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
    let match = body.match(/<meta name="description" content="([^]+)"/) // regular expression to parse contents of the <meta> tag
    // if (!match || typeof match[1] !== 'string')
    //     throw new Error('Unable to parse the title tag')
    console.log(match[1]);
    // return match[1]
}

const project = {
    title: 'JavaScrip Form Validation',
    text: '',
    url: 'js-form-validation/index.html',
    date: new Intl.DateTimeFormat('default', options).format(new Date())
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

//     writeFile('./test.json', JSON.stringify(projects), err => {
//         if (err) {
//             console.error(err);
//             return
//         };
//         console.log(`Project ${ project.title } added successfully.There are ${ projects.length } projects.`);
//     })
// })