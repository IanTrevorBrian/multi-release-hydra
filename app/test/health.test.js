const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => res.status(200).json({ status: 'UP' }));

test('GET /health returns UP', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
});
