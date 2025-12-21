const express = require('express');

const app = require();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { 
	res.send('Hello from express');
});
app.listen(PORT,"0.0.0.0" () => {
    console.log(`Server listening on: ${PORT}`);
});

