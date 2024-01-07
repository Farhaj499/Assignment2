async function waitAndGreet(name: string): Promise<void> {
    setTimeout(() => {
            console.log("Hello "+name+"!");;
    }, 2000);
}
  
let myName : string = "Barry Allen";

waitAndGreet(myName);

export{}