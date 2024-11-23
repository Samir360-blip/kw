
const Button = document.getElementById('Btn');

    Button.onclick = () => {
        const name = document.getElementById('nameInput').value;
        const age = document.getElementById('ageInput').value;

        const names = nameInput.value;



        addUser(name, age);
    }



 function addUser(name, age) {
    const ageNumber = +age;

    if (age === '' || ageNumber <= 0) {
        alert('Пожалуйста, введите корректный возраст!');
        return;
    }


    const newBox = UserBox(name, age);


    if (ageNumber < 25) {
        appendToColumn('column1', newBox);
    } else if (ageNumber < 60) {
        appendToColumn('column2', newBox);
    } else {
        appendToColumn('column3', newBox);
    }


    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
}



function UserBox(name, age) {
    const box = document.createElement('div');
    box.classList.add('box');


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete_btn');

    box.ondblclick = () => {
  
        document.getElementById('modalName').value = name;
        document.getElementById('modalAge').value = age;
        modal.style.display = "block"; 
    };

    
    deleteButton.onclick = () => {
        box.remove();  
    };


    box.innerHTML = `
        <div class="text">
            <h1 class ="tx">${name}</h1>
            <div class="input-container">
                <span class="Age">${age}</span>
            </div>
        </div>
    `;

    box.appendChild(deleteButton);


    return box;
}

function appendToColumn(columnId, userBox) {
    const column = document.getElementById(columnId);
    column.appendChild(userBox);
}

const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");


closeBtn.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


