import { expect } from 'chai'
import Greeter from '../src/scripts/greeter.js'

describe('Greeter', () => {
  describe('#hi', () => {
    it('knows how to greet April cohort', () => {
      expect(Greeter.hi()).to.eq('Hello April 2018 cohort!')
    })
  })
})
