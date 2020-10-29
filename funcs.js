const LinkedList = require('./linked')

function main() {
    const SSL = new LinkedList()
    SSL.insertLast('Apollo')
    SSL.insertLast('Boomer')
    SSL.insertLast('Helo')
    SSL.insertLast('Husker')
    SSL.insertLast('Starbuck')
    SSL.insertLast('Tauhida')
    SSL.insertBefore('Athena', 'Boomer')
    SSL.insertAfter('Hotdog', 'Helo')
    SSL.insertAt('Kat', 3)
    SSL.remove('Helo')

    // display(SSL)
    // size(SSL)
    // isEmpty(SSL)
    // findPrevious(SSL, 'Helo')
    // findLast(SSL)
    // reverse(SSL)
    // thirdFromTheEnd(SSL)

}

function mainDLL() {
    const LL = new LinkedList()
    LL.insertLast('Aquaria')
    LL.insertLast('Caprica')
    LL.insertLast('Gemenon')
    LL.insertLast('Picon')
    LL.insertLast('Sagittaton')
    LL.insertLast('Tauron')
    LL.remove('Picon')

    display(LL)
    size(LL)
}

function display(list) {
    let thisNode = list.head;
    let output = "";
    while (thisNode !== null) {
        if (thisNode !== list.head) {
            output += " -> ";
        }
        output += `${thisNode.value}`;
        thisNode = thisNode.next;
    }

    console.log(output)
    return output;
}

function size(list) {
    let thisNode = list.head;
    let output = 0;
    while (thisNode !== null) {
        output++;
        thisNode = thisNode.next;
    }

    console.log(output)
    return output;
}

function isEmpty(list) {
    let thisNode = list.head;
    let output = thisNode ? false : true
    console.log(output)
    return output;
}

function findPrevious(list, n) {
    let thisNode = list.head;
    let output = "";

    while (thisNode !== null) {
        if (thisNode.value === n) {
            console.log(output)
            return output;
        }
        if (thisNode !== list.head) {
            output += " -> ";
        }
        output += `${thisNode.value}`;
        thisNode = thisNode.next;
    }

    console.log(output)
    return output;
}

function findLast(list) {
    let thisNode = list.head;
    let output = "";

    while (thisNode !== null) {
        if (!thisNode.next) {
            output = thisNode;
            console.log(output)
            return output;
        }
        thisNode = thisNode.next;
    }

    console.log(output)
    return output;
}

function reverse(list, prev = null, node = null, output = '') {

    let thisNode = node === null ? list.head : node;

    if (!thisNode.next) {
        thisNode.next = prev;
        console.log(output)
        return null;
    }

    node = thisNode.next;
    thisNode.next = prev;
    prev = thisNode;

    output = thisNode.next === null ? thisNode.value : output + '<-- ' + thisNode.value;

    return reverse(list, prev, node, output)
}

function thirdFromTheEnd(list, prev = null, node = null) {

    let thisNode = node === null ? list.head : node;

    if (!thisNode.next) {
        thisNode.next = prev;
        return thisNode;
    }

    node = thisNode.next;
    thisNode.next = prev;
    prev = thisNode;


    return reverse(list, prev, node)
}

mainDLL()
main()




