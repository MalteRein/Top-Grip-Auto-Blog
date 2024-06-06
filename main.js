//////////////////////////
// TOP GRIP Blog Header //



// Blog Header Button
function openNavbar() {
    document.getElementById('navbarMenu').style.display = 'block';
    document.getElementById('navbarBackground').style.display = 'block';
}

function closeNavbar() {
    document.getElementById('navbarMenu').style.display = 'none';
    document.getElementById('navbarBackground').style.display = 'none';
}

////////////////////////
// Navbar Navigations //
function navigateToHome() {
    // Show Home
    document.getElementById('header').style.display = 'block';
    document.getElementById('websiteHeading').style.display = 'block';

    // Hide other navbav sections
    document.getElementById('sectionUnderground').style.display = 'none';
    document.getElementById('sectionCars').style.display = 'none';

    // Close Navbar
    document.getElementById('navbarMenu').style.display = 'none';
    document.getElementById('navbarBackground').style.display = 'none';
}

function navigateToUndergound() {
     // Show Tuning section
    document.getElementById('sectionUnderground').style.display = 'block';

    // Hide other navbav sections
    document.getElementById('sectionCars').style.display = 'none';
    
    // Close Navbar
    document.getElementById('navbarMenu').style.display = 'none';
    document.getElementById('navbarBackground').style.display = 'none';

    // Hide Homepage
    document.getElementById('websiteHeading').style.display = 'none';
    document.getElementById('carModel').style.display = 'none';
}


function navigateToCars() {
    // Show Cars section
    document.getElementById('sectionCars').style.display = 'block';

    // Hide other navbav sections
    document.getElementById('sectionUnderground').style.display = 'none';
    
    // Hide Navbar
    document.getElementById('navbarMenu').style.display = 'none';
    document.getElementById('navbarBackground').style.display = 'none';

    // Hide Homepage
    document.getElementById('websiteHeading').style.display = 'none';
    document.getElementById('carModel').style.display = 'none';
}

function navigateToContact() {
    alert('Es tut mir leid, aber leider können wir zurzeit nicht kontaktiert werden');
}





// Audi 
// Audi A3
function showAudiA3Dropdown() {
    document.getElementById('audiA3Dropdown').style.display = 'block';

    document.getElementById('audiEtronDropdown').style.display = 'none';
    document.getElementById('audiRS6Dropdown').style.display = 'none';
    document.getElementById('Ferrari12CilindriDropdown').style.display = 'none';
    document.getElementById('FerrariFS90Dropdown').style.display = 'none';
    document.getElementById('FerrariLaFerrariDropdown').style.display = 'none';
}

// Audi E-Tron GT
function showAudiEtronDropdown() {
    document.getElementById('audiA3Dropdown').style.display = 'none';

    document.getElementById('audiEtronDropdown').style.display = 'block';

    document.getElementById('audiRS6Dropdown').style.display = 'none';
    document.getElementById('Ferrari12CilindriDropdown').style.display = 'none';
    document.getElementById('FerrariFS90Dropdown').style.display = 'none';
    document.getElementById('FerrariLaFerrariDropdown').style.display = 'none';
}

// Audi RS6
function showAudiRS6Dropdown() {
    document.getElementById('audiA3Dropdown').style.display = 'none';
    document.getElementById('audiEtronDropdown').style.display = 'none';

    document.getElementById('audiRS6Dropdown').style.display = 'block';

    document.getElementById('Ferrari12CilindriDropdown').style.display = 'none';
    document.getElementById('FerrariFS90Dropdown').style.display = 'none';
    document.getElementById('FerrariLaFerrariDropdown').style.display = 'none';
}

// Ferarri
// Ferarri 12Cilindri
function showFerarri12CilindriDropdown() {
    document.getElementById('audiA3Dropdown').style.display = 'none';
    document.getElementById('audiEtronDropdown').style.display = 'none';
    document.getElementById('audiRS6Dropdown').style.display = 'none';

    document.getElementById('Ferrari12CilindriDropdown').style.display = 'block';

    document.getElementById('FerrariFS90Dropdown').style.display = 'none';
    document.getElementById('FerrariLaFerrariDropdown').style.display = 'none';
}
// Ferarri FS90 Stradale
function showFerarriFS90Dropdown() {
    document.getElementById('audiA3Dropdown').style.display = 'none';
    document.getElementById('audiEtronDropdown').style.display = 'none';
    document.getElementById('audiRS6Dropdown').style.display = 'none';
    document.getElementById('Ferrari12CilindriDropdown').style.display = 'none';

    document.getElementById('FerrariFS90Dropdown').style.display = 'block';

    document.getElementById('FerrariLaFerrariDropdown').style.display = 'none';
}
// Ferarri LaFerarri
function showFerarriLaFerarriDropdown() {
    document.getElementById('audiA3Dropdown').style.display = 'none';
    document.getElementById('audiEtronDropdown').style.display = 'none';
    document.getElementById('audiRS6Dropdown').style.display = 'none';
    document.getElementById('FerrariFS90Dropdown').style.display = 'none';
    document.getElementById('FerrariFS90Dropdown').style.display = 'none';

    document.getElementById('FerrariLaFerrariDropdown').style.display = 'block';
}

