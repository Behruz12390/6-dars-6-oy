const s = document.querySelector('.s');
const loadUsersButton = document.getElementById('loadUsers');

const getUsers = async () => {
    const url = 'https://randomuser.me/api/';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        return err.message;
    }
};

const drawUI = async () => {
    const data = await getUsers();
    const users = data.results;


    s.innerHTML = '<button id="loadUsers">Load Users</button>';

    for (let user of users) {
        s.innerHTML += `
        <div class="j">
            <img class="d" src="${user.picture.large}" alt="User Picture">
            <h1>Gender: ${user.gender}</h1>
            <p>Title: ${user.name.title}</p>
            <p>First Name: ${user.name.first}</p>
            <p>Last Name: ${user.name.last}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Country: ${user.location.country}</p>
        </div>`;
    }

    document.getElementById('loadUsers').addEventListener('click', drawUI);
};

loadUsersButton.addEventListener('click', drawUI);