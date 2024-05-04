const app = require('./server'); // Import the configured express app
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
