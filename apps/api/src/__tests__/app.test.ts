import request from 'supertest';
import app from '../main';

describe('Integration Tests', () => {
  const [validToken, invalidToken] = ['mysecrettoken', 'mywrongtoken'];
  describe('Authentication', () => {
    it.each(['/time', '/metrics'])(
      `GET %s should be forbidden without auth token`,
      async (path) => {
        const response = await request(app).get(path);
        expect(response.statusCode).toBe(403);
      }
    );

    it.each(['/time', '/metrics'])(
      `GET %s should be forbidden with ivalid token`,
      async (path) => {
        const response = await request(app)
          .get(path)
          .set({ Authorization: invalidToken });
        expect(response.statusCode).toBe(403);
      }
    );
  });

  describe('GET /time', () => {
    it('get current time', async () => {
      const response = await request(app)
        .get('/time')
        .set({ Authorization: validToken });

      expect(typeof response.body.epoch).toBe('number');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /metrics', () => {
    it('get current metrics', async () => {
      const response = await request(app)
        .get('/metrics')
        .set({ Authorization: validToken });

      expect(typeof response.body).toBeDefined();
      expect(response.statusCode).toBe(200);
    });
  });
});
