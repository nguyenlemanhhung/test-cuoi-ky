function numberOneTriangle(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
      str = str + '<div>' + '*'.repeat(i) + '</div>';
    }
    
    return str;
  }
  
  const number = document.getElementById('number');
  
  number.addEventListener("change", (e) => {
     const str = numberOneTriangle(number.value);
    document.getElementById('result').innerHTML = str
  });