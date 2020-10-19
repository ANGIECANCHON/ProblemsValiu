function watchmen(req, res) {

    const n = req.body.watchmen
    const m = req.body.days
    const A = req.body.daysIni
    const B = req.body.daysEnd
    let fullArray = []
    let j = 0

    if (!n || !m || !A || !B) {
        return res.status(400).send({ error: 'missing parameters' })
    }
    if (A.length != B.length) {
        return res.status(400).send({ error: 'the days numbers, don not match' })
    }

    for (let i = 0; i < A.length; i++) {
        for (let a = A[i]; a <= B[j]; a++) {
            fullArray.push(a)
        }
        j++
    }

    fullArray = fullArray.filter((value, index, array) => array.indexOf(value) === index);
    console.log(fullArray)
    let response = fullArray.length

    return res.status(200).send({ result: response })
}

function pairs(req, res) {
    const a = req.body.array
    let cont = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            cont = cont + 1
        }
    }
    return res.status(200).send({ result: cont })
}

function knight(req, res) {
    const a = req.body.PiX
    const b = req.body.PiY
    const c = req.body.PfX
    const d = req.body.PfY
    let cont
    let total = []
    let result = 0
    let init = [a, b]

    const goal = [c, d]

    cont = recursive(init, goal)
   
    total.push(cont)
    result = Math.min.apply(null, total);

    return res.status(200).send({ result: result })
}

function getMoves(a, b) {

    let newMoves = []
    const possibleMoves = [[-2, -1], [-2, +1], [-1, +2], [+1, +2], [+2, -1], [+2, +1], [-1, -2], [+1, -2]]
    possibleMoves.forEach(i => {
        newA = a + i[0]
        newB = b + i[1]

        newMoves.push([newA, newB])
    })
    console.log(newMoves)

    return newMoves
}

function recursive(init, goal){
    let cont = 0

    while (JSON.stringify(init) != JSON.stringify(goal)) {
        let response = getMoves(init[0], init[1])
        response.forEach(i => {
            init = i
            cont++
        });
    }

    return cont
}

module.exports = {
    watchmen,
    pairs,
    knight
}