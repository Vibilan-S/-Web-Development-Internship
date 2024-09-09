const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = [
    { id: 1, username: 'admin', password: bcrypt.hashSync('admin123', 8), role: 'admin' },
    { id: 2, username: 'cashier', password: bcrypt.hashSync('cashier123', 8), role: 'cashier' }
];

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey', { expiresIn: '1h' });
    res.send({ token });
};
