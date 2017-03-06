<template>
  <el-cascader
    :options="addresses"
    v-model="selected"
    placeholder="Введите населенный пункт"
    filterable
    ></el-cascader>
</template>

<script>

import { Cascader } from 'element-ui'

export default {
  components: {
    'el-cascader': Cascader
  },
  data(){
    return {
      addresses: [{
        value: '1',
        label: 'Московская область',
        children: [
          {
            value: '5',
            label: 'Волоколамск'
          },
          {
            value: '6',
            label: 'Москва'
          },
          {
            value: '8',
            label: 'Воскресенкс'
          },
          {
            value: '10',
            label: 'Дубна'
          },
          {
            value: '11',
            label: 'Коломна'
          }
        ]
      },
      {
        value: '2',
        label: 'Ленинградская область',
        children: [
          {
            value: '20',
            label: 'Санкт-Петербург'
          },
          {
            value: '21',
            label: 'Выборг'
          },
          {
            value: '22',
            label: 'Волховы'
          },
          {
            value: '23',
            label: 'Кировск'
          },
          {
            value: '24',
            label: 'Тихвин'
          }
        ]
      }],
      selected: []
    }
  }
}
</script>
