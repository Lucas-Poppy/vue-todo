<template>
  <div>
    <vc-calendar>
      <template slot='day-content' slot-scope='props'>
        <div class="vc-day-content" style="width:150px;height:130px;border:solid 1px;">
          <div style="width:100%;height:100%;">
            <span>
              {{ props.day.day }}
            </span>
            <div style="width:100%;height:calc(100% - 24px);overflow-y: scroll;">

              <p v-for="(item, index) in allListEachDay(props.day.year, props.day.month, props.day.day, allList)" :key="item.id" :style="style(index, item.status)">
                {{ item.title }}
              </p>
              <!-- <p style="width:100%; background-color:blue; border-radius: 3px;">
                2個目の予定
              </p> -->
            </div>
          </div>
        </div>
      </template>
    </vc-calendar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import moment from 'moment'
export default {
  // 少し別の書き方してみた
  computed: {
    ...mapGetters('todoList', {
      allList: 'allList'
    })
  },
  methods: {
    allListEachDay (year, month, day, allList) {
      if (allList.length === 0) {
        return []
      }
      const date = moment({years: year, months: month - 1, days: day}).format('YYYY-MM-DD')
      return allList.filter(el => el.date === date)
    },
    style (index, status) {
      const colors = ['#F5B2B2', '#9FD9F6', '#A5D4AD', '#F4B4D0', '#F5B090', '#DCDDDD']
      let color = colors[index % 5]
      if (status === 'done') {
        color = colors[5]
      }
      return {
        width: '100%',
        'background-color': color,
        'border-radius': '3px',
        'font-weight': 'bold'
      }
    }
  }
}
</script>
