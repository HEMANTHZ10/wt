document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    let isValid = true;
    
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let country = document.getElementById("country").value;

    let errors = {};

    if (fullName.length < 3) errors.fullName = "Full Name must be at least 3 characters.";
    if (!validateEmail(email)) errors.email = "Invalid email format.";
    if (password.length < 6) errors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
    if (!/^[0-9]{10}$/.test(phone)) errors.phone = "Phone number must be 10 digits.";
    if (!dob) errors.dob = "Please enter your date of birth.";
    if (!gender) errors.gender = "Please select your gender.";
    if (country === "") errors.country = "Please select your country.";

    document.querySelectorAll(".error-message").forEach(e => e.innerText = "");

    for (let field in errors) {
        document.getElementById(field + "Error").innerText = errors[field];
        isValid = false;
    }
    
    if (isValid) {
        alert("Registration successful!");
    }
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.write(`
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            // height: 100vh;
            margin: 0;
            padding-top :50px;
        }
        form {
            background: #fff;
            padding: 50px 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
        }
        input, select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .error-message {
            color: red;
            font-size: 12px;
        }
        button {
            background-color: #007BFF;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            width: 100%;
            margin-top: 15px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
    <form id="registerForm">
        <label>Full Name:</label>
        <input type="text" id="fullName"><span class="error-message" id="fullNameError"></span>
        
        <label>Email:</label>
        <input type="email" id="email"><span class="error-message" id="emailError"></span>
        
        <label>Password:</label>
        <input type="password" id="password"><span class="error-message" id="passwordError"></span>
        
        <label>Confirm Password:</label>
        <input type="password" id="confirmPassword"><span class="error-message" id="confirmPasswordError"></span>
        
        <label>Phone Number:</label>
        <input type="text" id="phone"><span class="error-message" id="phoneError"></span>
        
        <label>Date of Birth:</label>
        <input type="date" id="dob"><span class="error-message" id="dobError"></span>
        
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male"> Male
        <input type="radio" name="gender" value="Female"> Female
        <span class="error-message" id="genderError"></span>
        
        <label>Country:</label>
        <select id="country">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
        </select>
        <span class="error-message" id="countryError"></span>
        
        <button type="submit">Register</button>
    </form>
`);
