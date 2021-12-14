import request from 'supertest';
import { AppFactory } from '../factory/app';

describe('Health check e2e', () => {
  let app: AppFactory;

  beforeAll(async () => {
    app = await AppFactory.new();
  });

  afterEach(async () => {
    await app.refreshDatabase();
  });

  it('GET /health-check returns 200 ok', () => {
    return request(app.instance)
      .get('/health-check')
      .send()
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});