import Component from '../src/index.html';

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
