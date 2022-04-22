const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello world smart world');
});

const users = [
  { id: 1, name: 'sabana', email: 'sbana@gmail.com', phone: 01666666666 },
  { id: 2, name: 'samiya', email: 'samiya@gmail.com', phone: 01666666666 },
  { id: 3, name: 'sumayia', email: 'sumayia@gmail.com', phone: 01666666666 },
  { id: 4, name: 'sorna', email: 'ssorna@gmail.com', phone: 01666666666 },
  { id: 5, name: 'riama', email: 'riam@gmail.com', phone: 01666666666 },
];

app.get('/users', (req, res) => {
  if (req.query.name) {
    // user search query
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log('reqq', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log('local host starting', port);
});
