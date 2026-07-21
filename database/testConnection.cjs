const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error('Error: MONGODB_URL environment variable is not set.');
  process.exit(1);
}

async function run() {
  try {
    const conn = await mongoose.connect(MONGODB_URL, { bufferCommands: false });
    console.log('✅ MongoDB connection successful');
    console.log(`Connected to: ${MONGODB_URL}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB connection failed');
    console.error(error);
    process.exit(1);
  }
}

run();
