<template>
  <div>
    <div>
      <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="title" v-model="title">
          </div>
          <div class="col">
            <input type="date" class="form-control" placeholder="" v-model="date">
          </div>
          <div class="col">
            <button class="btn btn-primary" @click="add">追加</button>
          </div>
        </div>
      </form>
    </div>
    <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link :to="{ name: 'AllListComponent' }" active-class="active" class="nav-link">全リスト</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'DoingListComponent' }" active-class="active" class="nav-link">未完了リスト</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'DoneListComponent' }" active-class="active" class="nav-link">完了リスト</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'CalenderComponent' }" active-class="active" class="nav-link">カレンダー</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data: () => {
    return {
      title: '',
      date: ''
    }
  },
  methods: {
    add () {
      const item = {
        'title': this.title,
        'date': this.date
      }
      this.clear()
      this.$store.dispatch('todoList/add', item)
    },
    clear () {
      this.title = ''
      this.date = ''
    }
  }
}
</script>
