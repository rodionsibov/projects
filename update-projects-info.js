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
    files.forEach(file => {
        stat(file, (err, stats) => {
            if (err) {
                console.error(err);
                return
            }

            if (stats.isDirectory() && !['.git', 'api', 'img'].includes(file)) {
                readFile(`${file}/index.html`, 'utf8', (err, data) => {
                    parseTitle(data)
                    parseDescription(data);

                    const project = {
                        id: Math.random().toString(36).substr(2, 9),
                        title: parseTitle(data),
                        description: parseDescription(data),
                        path: `${file}/index.html`,
                        date: new Intl.DateTimeFormat('default', options).format(stats.mtime)
                    }
                    projects.push(project)
                })
            }
            if (file.includes('.html') && !file.includes('index.html')) {
                readFile(`${file}`, 'utf8', (err, data) => {
                    parseTitle(data)
                    parseDescription(data);

                    const project = {
                        id: Math.random().toString(36).substr(2, 9),
                        title: parseTitle(data),
                        description: parseDescription(data),
                        path: `${file}`,
                        date: new Intl.DateTimeFormat('default', options).format(stats.mtime)
                    }
                    projects.push(project)
                    writeFile('./projects.json', JSON.stringify(projects), err => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })
                })
            }
        })
    })
})

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


