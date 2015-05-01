import src from '../src/module.js'

import {expect} from 'chai'

describe('testing test', () => {

  it('should be true', () => {
    expect(true).to.be.true
  });

  it('should be false', () => {
    expect(false).to.be.false
  });

  it('should be supah true', () => {
    expect(src()).to.be.true
  });

});
