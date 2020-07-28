let args = process.argv.slice(2);
const timer = (arr) => {
  for (let num of arr) {
    num = Number(num);
    if (!num || typeof num !== "number" || num < 0) {
      console.log("Invalid arguments");
      process.exit(1);
    }
    setTimeout(() => {
      process.stdout.write(".");
    }, num * 1000);
  }
};

timer(args);
