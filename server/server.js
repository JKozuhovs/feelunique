const express = require('express');
const app = express();

app.get('/api', (req, res) =>{
    res.json({message: 'Hello from the server!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server running on port ${PORT}`);
});