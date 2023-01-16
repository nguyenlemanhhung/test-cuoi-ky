function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  function sumPrime(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  const min = document.getElementById('min');
  const max = document.getElementById("max");
  
  
  min.addEventListener("change", (e) => {
    const sum = sumPrime(min.value, max.value);
    document.getElementById('sum').innerHTML = sum;
  });
  
  max.addEventListener("change", (e) => {
    const sum = sumPrime(min.value, max.value);
    document.getElementById('sum').innerHTML = sum;
  });