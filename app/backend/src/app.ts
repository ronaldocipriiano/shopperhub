import express, { Application } from 'express';

class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public start(port: string | number): void {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    }).on('error', (err) => {
      console.error(`Error starting server: ${err.message}`);
    });
  }
}


export default App;
