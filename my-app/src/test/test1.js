var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("https://api.coingecko.com");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("Test Request FirstButton",function(done){

    // calling home page api
    server
    .get("/api/v3/search/trending")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.statusCode.should.equal(200);
      // Error key should be false.
      res.error.should.equal(false);
      done();
    });
  });

});


describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("Test Request FirstButton",function(done){

    // calling home page api
    server
    .get("/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.statusCode.should.equal(200);
      // Error key should be false.
      res.error.should.equal(false);
      done();
    });
  });

});