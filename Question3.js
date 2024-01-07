async function waitAndGreet(name) {
    setTimeout(() => {
        console.log("Hello " + name + "!");
        ;
    }, 2000);
}
let myName = "Barry Allen";
waitAndGreet(myName);
export {};
