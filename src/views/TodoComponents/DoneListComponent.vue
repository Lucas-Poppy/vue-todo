<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">タイトル</th>
          <th scope="col">期限</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in doneList" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>
            <button type="button" class="btn btn-success" @click="doing(item.id)">
              <i class="material-icons">
              reply
              </i>
            </button>
            <button type="button" class="btn btn-primary">
              <i class="material-icons">
              edit
              </i>
            </button>
            <button type="button" class="btn btn-danger">
              <i class="material-icons">
              delete
              </i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters('todoList', ['doneList']),
  methods: {
    doing (id) {
      this.$emit('doing', id)
    }
  }
}
</script>
