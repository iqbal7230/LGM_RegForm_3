function submitForm() {
    var name = document.getElementById('name').value.trim() || 'n/a';
    var email = document.getElementById('email').value.trim() || 'n/a';
    var website = document.getElementById('website').value.trim() || 'n/a';
    var imageLink = document.getElementById('Link').value.trim() || 'https://i.pinimg.com/originals/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg';
    var gender = getSelectedRadioValue('Gender') || 'n/a';
    var skills = getSelectedValues('Skills') || 'n/a';
    showStudentInfo(name, email, website, imageLink, gender, skills);
}

function getSelectedValues(name) {
    var checkboxes = document.querySelectorAll('input[name="' + name + '"]:checked');
    var output = name + ': ';
    checkboxes.forEach(function(checkbox) {
        output += checkbox.value + ', ';
    });
    if (output === name + ': ')
        output += 'n/a';
    else
        output = output.slice(0, -2);
    return output;
}

function getSelectedRadioValue(name) {
    var selectedRadio = document.querySelector('input[name="' + name + '"]:checked');
    return selectedRadio ? selectedRadio.value.toUpperCase() : 'n/a';
}

function showStudentInfo(name, email, website, imageLink, gender, skills) {
    var table = document.getElementById("studentTable");
    var row = table.insertRow(table.rows.length);
    var descCell = row.insertCell(0);
    var imageCell = row.insertCell(1);
    descCell.innerHTML = name + '<br>' + gender + '<br>' + email + '<br>' + website + '<br>' + skills;
    imageCell.innerHTML = '<img onerror="loadDefaultImage(this)" class="piic" src="' + imageLink + '" alt="' + name + '">';
    clearForm();
}

function clearForm() {
    var form = document.getElementById("Stud-form");
    form.reset();
}

function loadDefaultImage(image) {
    image.src = "https://i.pinimg.com/originals/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg";
    image.alt = "Default Image";
}
