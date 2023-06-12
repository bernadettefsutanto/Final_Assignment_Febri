const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo { Democratic Rep }",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea - Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland { Republic }",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, { Burma }",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

var navbarState = false;

function colorChange() {
    var navbar = document.getElementById("navbar");
    var menuButton = document.getElementById("menuButton");
    var joinButton = document.getElementById("joinButton");
    var logoNav = document.getElementById("logoNav");

    if (navbarState === false) {
        navbar.style.backgroundColor = "white";
        menuButton.style.color = "#032328";
        joinButton.style.color = "#032328";
        logoNav.setAttribute('src', 'Assets/Brand_ElysianLogo.png');
        navbarState = true;
    } else {
        navbar.style.backgroundColor = "transparent";
        menuButton.style.color = "white";
        joinButton.style.color = "white";
        logoNav.setAttribute('src', 'Assets/Brand.png');
        navbarState = false;
    }
}

function validateForm() {
    var salutation = document.getElementById("salutation").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var hearAbout = document.getElementById("hearAbout").value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d+$/;

    if (salutation === "" || firstName === "" || lastName === "" || country === "" || email === "" || phone === "" || hearAbout === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName) || !nameRegex.test(country)) {
        alert("Please enter a valid text for First Name, Last Name, and Country.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phoneRegex.test(phone) || phone.length < 8) {
        alert("Please enter a valid phone number (minimum 8 numeric characters).");
        return false;
    }

    if (hearAbout === "Friends" && friendName === "") {
        alert("Please enter your friend's name.");
        return false;
    }

    alert("Thank you " + salutation + " " + firstName + " " + lastName + " for reaching out to us!");
    return true;
}

if (document.getElementById("popupButton")) {

    document.getElementById("popupButton").addEventListener("click", function () {
        document.getElementById("popupTable").style.display = "block";
    });
}

if (document.getElementById("closeButton")) {
    document.getElementById("closeButton").addEventListener("click", function () {
        document.getElementById("popupTable").style.display = "none";
    });
}

if (document.getElementById("joinButton")) {
    document.getElementById("joinButton").addEventListener("click", function () {
        document.getElementById("registrationPopup").style.display = "block";
    });
}

if (document.getElementById("cancelButton")) {
    document.getElementById("cancelButton").addEventListener("click", function () {
        document.getElementById("registrationPopup").style.display = "none";
    });
}

if (document.getElementById("registrationForm")) {

    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const registrationData = {
            salutationReg: document.getElementById("salutationReg").value,
            firstNameReg: document.getElementById("firstNameReg").value,
            lastNameReg: document.getElementById("lastNameReg").value,
            emailReg: document.getElementById("emailReg").value,
            membershipReg: document.getElementById("membershipReg").value
        }
    
        var nameRegex = /^[a-zA-Z\s]+$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (registrationData.salutationReg === "" || registrationData.firstNameReg === "" || registrationData.lastNameReg === "" || registrationData.emailReg === "" || registrationData.membershipReg === "") {
            alert("Please fill in all the required fields.");
            return false;
        }
    
        if (!nameRegex.test(registrationData.firstNameReg) || !nameRegex.test(registrationData.lastNameReg)) {
            alert("Please enter a valid text for First Name, and Last Name");
            return false;
        }
    
        if (!emailRegex.test(registrationData.emailReg)) {
            alert("Please enter a valid email address.");
            return false;
        }
    
    
        if (registrationData.membershipReg === "member" && membershipReg === "") {
            alert("Please choose your membership type");
            return false;
        }
    
        alert("Thank you " + registrationData.salutationReg + " " + registrationData.firstNameReg + " " + registrationData.lastNameReg + " for your interest in joining our service. We will contact you soon!");
        document.getElementById("registrationPopup").style.display = "none";
        return true;
    });
}


function renderCountry() {
    var select = document.getElementById("country");
    countries.filter(item=> item.startsWith("A")).forEach(element => {
        const optionsComponent = document.createElement(
            "option"
        )
        optionsComponent.text = element;
        optionsComponent.value = element;
        select.appendChild(optionsComponent);
    });
}

readList();
function readList() {
    const todosLocalStorage = localStorage.getItem('todo');
    const todos = todosLocalStorage ? JSON.parse(todosLocalStorage) : [];
    if (todos) {
        todos.forEach(todo => {
            const todolistItemsList = document.getElementById("todolistItems");
            const todoChild = document.createElement(
                "p"
            )
            todoChild.innerText=todo;
            todolistItemsList.appendChild(todoChild);
        })
    }
}

function addList(){
    const todoInitial = localStorage.getItem('todo');
    
    var todolistValue = document.getElementById("inputTodoList").value;
    
    if (todolistValue) {
        var todolistItemsList = document.getElementById("todolistItems");
    
        const todoChild = document.createElement(
            "p"
        )
        todoChild.innerText=todolistValue;
        todolistItemsList.appendChild(todoChild);

        
        const todos = todoInitial ? JSON.parse(todoInitial) : [];
        console.log('todos', todos, todoInitial)
        todos.push(todolistValue);
        localStorage.setItem('todo', JSON.stringify(todos));
    }
}