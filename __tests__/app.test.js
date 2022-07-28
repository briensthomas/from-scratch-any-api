const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('user information routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/users should return a list of users first names and emails', async () => {
    const response = await request(app).get('/users');
    expect(response.body.length).toEqual(50);
    expect(response.body[7]).toEqual({
      first_name: 'Opalina',
      email: 'owale7@tiny.cc',
    });
  });

  it('/users/:id should return a specific users details', async () => {
    const response = await request(app).get('/users/50');
    const tatum = {
      id: '50',
      first_name: 'Tatum',
      last_name: 'Louca',
      email: 'tlouca1d@senate.gov',
      gender: 'Female',
      ip_address: '40.150.247.89'
    };
    expect(response.body).toEqual(tatum);
  });

  afterAll(() => {
    pool.end();
  });
});
