const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica se a função uppercase, retorna palavras com letra maiuscula',(done) => {
  const expected = 'ANDRÉ' 

  const callback = (result) => {
    try {
      expect(result).toBe(expected);
      done();
    } catch (error) {
      done(error);
    }
  } 
  uppercase('André', callback)  
})