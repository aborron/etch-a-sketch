const container = document.querySelector('.container')

for (let y = 0; y < 16; y++) {
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)

    for (let x = 0; x < 16; x++) {
        const div = document.createElement('div')
        row.appendChild(div)
    }
}

