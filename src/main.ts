import appConfig from 'config/app';
import app from 'app';

app.listen(appConfig.port, () => {
  console.log(`App running on port: ${appConfig.port}`);
})