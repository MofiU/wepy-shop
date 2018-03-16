export const getCategories = async () => {
   const result =  [
    { id: 1, quanity: 2 },
    { id: 2, quanity: 3 },
    { id: 3, quanity: 4 },
  ]

  return await new Promise((res) => {
    setTimeout(() => {
      res(result)
    }, 3000)
  })
}