// Run Java Script in VS code

function helloWorld() {
    process.stdout.write("Hello World!\n")
}

function main(outputNum) {
    for (let i =0; i < outputNum; i++) {
        helloWorld();
    }
}

const args = process.argv.slice(2)
main(args[0])