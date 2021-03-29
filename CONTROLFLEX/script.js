
const test = document.querySelector("#test")

function O(x, y) {

    test.style.left = x
    test.style.top = y

}
O(0, 0)

const width = test.clientWidth
const height = test.clientHeight

const testStyle = getComputedStyle(test)


// document.addEventListener("mouseover", (e) => {
//     O(`${e.x - (test.clientWidth / 2)}px`, `${e.y - (test.clientHeight / 2)}px`)
//     print(e.x, e.y)
// })

let move = false


document.addEventListener("mouseup", e => {
    move = false
})

document.addEventListener("mousedown", e => {
    const x = parseInt(testStyle.left)
    const y = parseInt(testStyle.top)
    const ex = e.x + scrollX
    const ey = e.y + scrollY

    print(`${ex} -> ${ey}/// ${e.x} -> ${e.y}`)

    if (ex >= x && ex <= x + width && ey >= y && ey <= y + height) {
        move = true
    } else {
        print(`${x} -> ${y},,, ${e.x} -> ${e.y}`)
        move = false
    }
    document.addEventListener("mouseover", (e) => {
        if (move) {
            O(`${ex}px`, `${ey}px`)
        }
    })
})