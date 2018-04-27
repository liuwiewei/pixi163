<template>
  <div class="wrap">
  </div>
</template>

<script>
export default {
  name: 'MyPixi',
  data () {
    return {
    }
  },
  mounted () {
    /* eslint-disable */
    // 数组方法
    const array1 = [1, 2, 3]
    const array2 = ['a', 'b', 'c']
    array1.reverse()
    array1.push(4)
    array1.reverse()
    // console.log(array1)

    array1.concat(array2)
    // console.log(array1.concat(array2))

    const arrresult = array1.every(item => {
      return item > 0
    })
    const arrFilter = array1.filter(item => {
      return item >= 2
    })


    // 判断是否是回文
    const str = 'aabcbaa'
    const result = str == str.split('').reverse().join('')
    // console.log(result)
    const findStr = 'a'
    const findStrLen = findStr.length
    for (let i = 0; str[i]; i += findStrLen) {
      console.log(str.indexOf(findStr, i))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
