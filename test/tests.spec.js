import Component from '../src/index.html';

// You can import more unit test files or just use these file to import all your unit tests

describe('Given a component', () => {
  const domContainer = document.getElementById('dom');
  const expect = chai.expect;

  beforeEach((done) => {
    domContainer.innerHTML = '';
    new Component({
      target: domContainer
    });
    done();
  });
 

  it('My first test', () => {
    expect(true).to.be.true;
  });

});
