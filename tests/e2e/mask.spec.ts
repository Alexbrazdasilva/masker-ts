import { masker } from '../../lib/masker'

const CPF = '12345678911'

describe('Should return a cpf masked', () => {
  it('A valid cpf', () => {
    const res = masker(CPF, { mask: '###.###.###-##' })
    expect(res).toBe('123.456.789-11')
  })
})
