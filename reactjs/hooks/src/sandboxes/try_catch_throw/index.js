function divide(a, b) {
  if (b === 0) {
    throw new "Please don't divide by 0"();
  }
  return a / b;
}
function calculate() {
  try {
    const result = divide(1, 0);
    console.log("Result", result);
  } catch (error) {
    // alert(error.message);
    if (true) {
      return;
    } else {
    }
  } finally {
    console.log("FINALLY");
  }

  console.log("End of code");
}

calculate();
