function timer(x, y, duration) {
  for (let i = x; i <= y; i++) {
    setTimeout(() => {
      console.log(i);
    }, duration * i);
  }
}
timer(1, 5, 500);
timer(10, 20, 1500);
