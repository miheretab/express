process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);


describe('/GET api/treasure/boxes', () => {
  it('it should GET treasue boxes', (done) => {
        var token = "";
        chai.request(server)
        .post('/api/users/login')
        .send({password: "luckyshine006", email: "u6@luckyshine.xyz"})
        .end((err, res) => {
              res.should.have.status(200);
              token = res.body["token"];

            chai.request(server)
            .get('/api/treasure/boxes?latitude=1.32&longitude=103.87&distance=10&prize_value=10')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
        });

  });

  it('it should fail with no authorization', (done) => {
    chai.request(server)
    .get('/api/treasure/boxes?latitude=1.32&longitude=103.87&distance=10&prize_value=10')
    .end((err, res) => {
          res.should.have.status(401);
      done();
    });

  });

  it('it should fail with distance other than 1 or 10', (done) => {
        var token = "";
        chai.request(server)
        .post('/api/users/login')
        .send({password: "luckyshine006", email: "u6@luckyshine.xyz"})
        .end((err, res) => {
              res.should.have.status(200);
              token = res.body["token"];

            chai.request(server)
            .get('/api/treasure/boxes?latitude=1.32&longitude=103.87&distance=5')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                  res.should.have.status(500);
              done();
            });
        });

  });

});
