function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const interest = document.getElementById('interest').value;
    const time = document.getElementById('time').value;
    
    const monthlyInterest = (principal * interest) / (12 * 100);
    const totalInterest = monthlyInterest * time * 12;
    const totalAmount = parseFloat(principal) + totalInterest;
    
    document.getElementById('result').innerHTML = `
      Interest per Month: ${monthlyInterest.toFixed(2)}<br>
      Total Interest: ${totalInterest.toFixed(2)}<br>
      Total Amount: ${totalAmount.toFixed(2)}
    `;
  }
  