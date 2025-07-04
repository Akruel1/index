const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Отдаём все файлы из текущей папки
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
