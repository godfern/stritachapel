const express = require('express')

// Create Express app
const app = express()

app.use('/assets/css', express.static('./assets/css'));
app.use('/assets/js', express.static('./assets/js'));
app.use('/assets/images', express.static('./assets/images'));
app.use('*', express.static('./'));
// app.get('*', (req, res) => res.send('./index.html'));

// Start the Express server
app.listen(3000, () => console.log('Server running on port http://localhost:3000!'))