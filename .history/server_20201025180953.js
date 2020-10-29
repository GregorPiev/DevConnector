const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.get('/', (req, res) => res.send('API Running'))

api.use('/api/users', require('./routes/api/users'));
api.use('/api/auth', require('./routes/api/auth'));
api.use('/api/posts', require('./routes/api/posts'));
api.use('/api/profile', require('./routes/api/profile'));




const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));