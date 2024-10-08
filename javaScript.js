function getDOB() {
    // Get the values from the input fields
    const dobInput = document.getElementById('inputDob').value;
    

    // Validate if birth date is provided
    if (!dobInput) {
        alert('Please enter  Date of Birth.');
        return;
    }

    // Convert input values to Date objects
    const dob = new Date(dobInput);
    const currentDate = new Date();

    // Calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('currentAge').textContent = `Your age is ${age} years.`;
}
