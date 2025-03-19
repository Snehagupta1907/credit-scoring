import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port :${port}`);
});
