const users = [];

const addUser = ({ id, name, room }) => {

    if (getUsersinRoom(room).length == 2) return { error: 'Entry not allowed !' }

    const userExists = users.find((user) => user.name === name);
    if (userExists) {
        return { error: 'User Exists !!' };
    }

    const newUser = { id, name, room };
    users.push(newUser);

    return { user: newUser };
};

const removeUser = (id) => {
    const idx = users.findIndex((user) => user.id === id);

    if (idx != -1) {
        return users.splice(idx, 1)[0];
    }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersinRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersinRoom };