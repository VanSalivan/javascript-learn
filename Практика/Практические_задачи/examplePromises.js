Promise.reject('a')
  .catch(err => {
    err = 'b'
    console.log(err)
    return err
  })
  .then(e => {
    console.log(e + '0')
    return e
  })
  .catch(err => {
    err = 'c'
    console.log(err)
    return err
  })
  .then(e => {
    console.log(e + '1')
    return e
  })
  .then(e => {
    console.log(e + '2')
    return e
  })
  .then(e => {
    console.log(e + '3')
    return e
  })