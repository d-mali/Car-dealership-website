
function openImagePopup(imageSrc) {
    var popup = document.getElementById('popupForm1');
    var popupImage = document.getElementById('popupImage');
    popupImage.src = imageSrc;
    popup.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.tab button').click();
    var popupButtons = document.querySelectorAll('.openPopup');
    popupButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var popupId = this.getAttribute('data-popup');
            var popup = document.getElementById(popupId);
            popup.style.display = 'block';
        });
    });

    // Event listener for close buttons in popups
    var closeButtons = document.querySelectorAll('.popup .close');
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var popup = this.closest('.popup');
            popup.style.display = 'none';
        });
    });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('openPopup').addEventListener('click', function () {
    var form = document.getElementById('popupForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

var modal = document.getElementById("popupForm1");

var btn = document.getElementById("openPopup");

var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
    var popup = document.getElementById('popupForm1');
    popup.style.display = "none";
}

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    var popup = document.getElementById('popupForm1');
    if (event.target == popup) {
        popup.style.display = "none";
    }
}



