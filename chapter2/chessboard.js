for (let i = 0; i < 8; i++) {
    let line = '';
    for (let j = 0; j < 8; j++) {
        line += ((i + j) % 2 === 0 ? ' ' : '#');
    }
    console.log(line);
}