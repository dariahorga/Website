function style1(elementclass) {
	var element1 = document.getElementsByClassName(elementclass);
	for (var i = 0; i < element1.length; i++) {
		element1[i].style.border = "7px solid black";
	}
}
function style2(elementTag) {
    var elements = document.querySelectorAll(elementTag);
    elements.forEach(function (element) {
        element.style.color = 'black';
        element.style.backgroundColor = 'grey';
        element.style.textAlign = 'center';
    });
}

function deleteElement() {
    var footerElement = document.querySelector('footer');
    if (footerElement) {
        var parentElement = footerElement.parentNode;
        parentElement.removeChild(footerElement);
    }
}
function createElement() {
    var paragraph = document.createElement('p');
    paragraph.textContent = '!!We strongly advise all visitors to book a time slot in advance to guarantee their admission to the museum in case of overcrowding.!!';
    var parentElement = document.getElementsByTagName('section')[0];
    parentElement.appendChild(paragraph);
}

document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = 'block';
        dropdownContent.style.backgroundColor = 'grey';
        dropdownContent.style.color = 'white';
        dropdownContent.style.fontSize = '20px';
        dropdownContent.style.padding = '10px';
    });
});

function handleDropdownSelection() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        var checkboxValue = localStorage.getItem(checkbox.id);
        checkbox.checked = checkboxValue === 'true';
    });
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function () {
        window.location.href = 'next-page.html';
    });
}
function changeTableColors() {
    var table = document.getElementById('myTable');
    var cells = table.getElementsByTagName('td'); 

    document.addEventListener('keydown', function (event) {
        var key = event.key.toLowerCase();

        if (key === 'g') {
            for (var i = 0; i < cells.length; i++) {
                cells[i].style.backgroundColor = 'gray';
            }
        }

        if (key === 'w') {
            for (var i = 0; i < cells.length; i++) {
                cells[i].style.backgroundColor = 'white';
            }
        }
        localStorage.setItem('tableData', table.innerHTML);
    });
}

window.onload = function () {
	style1("dropdown");
    style2("nav");
    deleteElement();
    createElement();
    handleDropdownSelection();
    changeTableColors();
}