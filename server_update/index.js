const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

const folderPath = '/joker/BrainPy'
const batchFilePath = 'make html'

app.post('/', (req, res) => {
  console.log('Received a POST request.');
//   const { folderPath, batchFilePath } = req.body;
  if (!folderPath || !batchFilePath) {
    res.status(400).send('Invalid request parameters.');
    return;
  }
  exec(`cd ${folderPath} && git pull`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error occurred while executing git pull: ${error}`);
      res.status(500).send(`Error occurred while executing git pull: ${error}`);
      return;
    }
    console.log(`Git pull output: ${stdout}`);
    console.error(`Git pull error: ${stderr}`);
    exec(`cd ${folderPath}&& cd docs && ${batchFilePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error occurred while executing batch file: ${error}`);
        res.status(500).send(`Error occurred while executing batch file: ${error}`);
        return;
      }
      console.log(`Batch file output: ${stdout}`);
      console.error(`Batch file error: ${stderr}`);
      res.send('Request processed successfully.');
    });
  });
});

const options = {
  key: fs.readFileSync('/etc/nginx/crt/9761914_www.zhaoshaofeng.xyz.key'),
  cert: fs.readFileSync('/etc/nginx/crt/9761914_www.zhaoshaofeng.xyz.pem')
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

