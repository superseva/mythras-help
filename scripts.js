// Ensure specialEffectDescriptions is available here
console.log(specialEffectDescriptions); // Test if the variable is accessible

function filterTable(type, button) {
    var table, tr, tdOff, tdDef, i;
    table = document.getElementById("specialEffectsTable");
    tr = table.getElementsByTagName("tr");

    // Remove active class from all buttons except the critical filter button
    var buttons = document.querySelectorAll('.sticky-header button:not(#criticalFilterBtn, #specificWeaponRollFilterBtn)');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });

    // Add active class to the clicked button
    button.classList.add('active');

    // THIS will toggle visibility
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "";
        tdOff = tr[i].getElementsByTagName("td")[1];
        tdDef = tr[i].getElementsByTagName("td")[2];

        if (type === 'Defensive') {
            if (tdDef.textContent === "") {
                tr[i].style.display = "none";
            }
        } else if (type === 'Offensive') {
            if (tdOff.textContent === "") {
                tr[i].style.display = "none";
            }
        } else {
            tr[i].style.display = "";
        }
    }
}

function toggleCriticalFilter(button) {
    var table, tr, tdRoll, i;
    table = document.getElementById("specialEffectsTable");
    tr = table.getElementsByTagName("tr");

    // Toggle active class on the button
    button.classList.toggle('toggle-active');

    for (i = 1; i < tr.length; i++) {
        tdRoll = tr[i].getElementsByTagName("td")[4];

        if (button.classList.contains('toggle-active')) {
            if (tdRoll.textContent.trim() !== "") {
                tr[i].classList.add('grayed-out');
            }
        } else {
            if (tdRoll.textContent.trim() !== "") {
                tr[i].classList.remove('grayed-out');
            }
        }
    }
}

function specificWeaponRollFilterBtn(button) {
    var table, tr, tdSpecificRoll, i;
    table = document.getElementById("specialEffectsTable");
    tr = table.getElementsByTagName("tr");

    // Toggle active class on the button
    button.classList.toggle('toggle-active');

    for (i = 1; i < tr.length; i++) {
        tdSpecificRoll = tr[i].getElementsByTagName("td")[3]; // Assuming the "Specific Roll" column is the 4th column (index 3)

        if (button.classList.contains('toggle-active')) {
            if (tdSpecificRoll.textContent.trim() !== "") {
                tr[i].classList.add('grayed-out');
            }
        } else {
            if (tdSpecificRoll.textContent.trim() !== "") {
                tr[i].classList.remove('grayed-out');
            }
        }
    }
}

function addRibbons() {
    var table, tr, tdOff, tdDef, i, effectCell;
    table = document.getElementById("specialEffectsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        effectCell = tr[i].getElementsByTagName("td")[0];
        tdOff = tr[i].getElementsByTagName("td")[1];
        tdDef = tr[i].getElementsByTagName("td")[2];

        var ribbons = '';
        if (tdOff.textContent === "X") {
            ribbons += '<span class="ribbon offensive-ribbon"></span>';
        }
        if (tdDef.textContent === "X") {
            ribbons += '<span class="ribbon defensive-ribbon"></span>';
        }
        if (tdOff.textContent == "X" && tdDef.textContent == "X") {
           // ribbons = '<span class="ribbon offensive-ribbon"></span><span class="ribbon defensive-ribbon"></span>';
           ribbons = '<span class="ribbon combined-ribbon"></span>';
        }
        effectCell.innerHTML = ribbons + effectCell.innerHTML;

        // Add hover event listeners to show tooltip
        if (effectCell.id) {
            effectCell.addEventListener('mouseover', function(event) {
                var effectId = this.id;
                var tooltip = document.getElementById('tooltip');
                // tooltip.textContent = specialEffectDescriptions[effectId].title;
                tooltip.textContent = specialEffectDescriptions[effectId].text;
                tooltip.style.display = 'block';
                tooltip.style.left = event.pageX + 'px';
                tooltip.style.top = event.pageY + 'px';
            });

            effectCell.addEventListener('mousemove', function(event) {
                var tooltip = document.getElementById('tooltip');
                tooltip.style.left = event.pageX + 'px';
                tooltip.style.top = event.pageY + 'px';
            });

            effectCell.addEventListener('mouseout', function() {
                var tooltip = document.getElementById('tooltip');
                tooltip.style.display = 'none';
            });
        }
    }
}

// Add ribbons after the page loads
window.onload = addRibbons;
