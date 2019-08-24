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
    <router-view @done="done" @doing="doing" @editOpen="editOpen"></router-view>

    <ModalComponent @close="closeModal" v-if="modal">
      <p>変更画面</p>
      <div>
        <input type="text" v-model="m_title">
      </div>
      <div>
        <input type="date" v-model="m_date">
      </div>
      <!-- /default -->
      <!-- footer スロットコンテンツ -->
      <template slot="footer">
        <button @click="edit(edit_id)">変更</button>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: '',
      date: '',
      m_title: '',
      m_date: '',
      modal: false,
      edit_id: 0
    }
  },
  methods: {
    add () {
      // 未入力チェック
      if (!this.addValidation()) {
        return
      }
      const item = {
        'title': this.title,
        'date': this.date,
        'status': 'doing'
      }
      this.clear()
      this.$store.dispatch('todoList/add', item)
    },
    clear () {
      this.title = ''
      this.date = ''
    },
    addValidation () {
      if (this.title && this.date) {
        return true
      }
      return false
    },
    done (id) {
      this.$store.dispatch('todoList/done', id)
    },
    doing (id) {
      this.$store.dispatch('todoList/doing', id)
    },
    editOpen (item) {
      this.edit_id = item.id
      this.m_title = item.title
      this.m_date = item.date
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    edit () {
      this.$store.dispatch('todoList/edit', {id: this.edit_id, title: this.m_title, date: this.m_date})
      this.closeModal()
      this.m_title = ''
      this.m_date = ''
    }
  }
}
</script>
