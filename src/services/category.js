export const getCategories = async () => {
   const result =  [
    { id: 1, name: '早餐' },
    { id: 2, name: '中餐' },
    { id: 3, name: '晚餐' },
  ]

  return await new Promise((res) => {
    setTimeout(() => {
      res(result)
    }, 3000)
  })
}