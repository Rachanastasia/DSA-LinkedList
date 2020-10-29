const LinkedList = require('./linked')

function main() {
    const SSL = new LinkedList()
    SSL.insertLast('Apollo')
    SSL.insertLast('Boomer')
    SSL.insertLast('Helo')
    SSL.insertLast('Husker')
    SSL.insertLast('Starbucks')
    SSL.insertFirst('Tauhida')
    console.log(SSL)
}

main()

