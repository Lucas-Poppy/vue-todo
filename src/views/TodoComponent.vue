<template>
  <div id="main-content">
    <div>
      <form>
        <div class="form-row">
          <div class="col">
            <input
              v-model="title"
              type="text"
              class="form-control"
              placeholder="title"
            >
          </div>
          <div class="col">
            <input
              v-model="date"
              type="date"
              class="form-control"
              placeholder=""
            >
          </div>
          <div class="col">
            <button
              type="button"
              class="btn btn-primary"
              @click="add"
            >
              追加
            </button>
          </div>
        </div>
      </form>
    </div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link
          :to="{ name: 'AllListComponent' }"
          active-class="active"
          class="nav-link"
        >
          全リスト
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'DoingListComponent' }"
          active-class="active"
          class="nav-link"
        >
          未完了リスト
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'DoneListComponent' }"
          active-class="active"
          class="nav-link"
        >
          完了リスト
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'CalenderComponent' }"
          active-class="active"
          class="nav-link"
        >
          カレンダー
        </router-link>
      </li>
    </ul>
    <router-view
      @done="done"
      @doing="doing"
      @editOpen="editOpen"
      @del="del"
    />
    <ModalComponent
      v-if="modal"
      @close="closeModal"
    >
      <p>変更画面</p>
      <div>
        <input
          v-model="m_title"
          type="text"
        >
      </div>
      <div>
        <input
          v-model="m_date"
          type="date"
        >
      </div>
      <!-- /default -->
      <!-- footer スロットコンテンツ -->
      <template slot="footer">
        <button @click="edit(edit_id)">
          変更
        </button>
      </template>
    </ModalComponent>
    <div>{{ $store.state.loading }}</div>
    <LoadingComponent v-show="loading" />
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
  computed: {
    loading () {
      return this.$store.state.todoList.loading
    }
  },
  mounted () {
    this.$store.dispatch('todoList/load')
  },
  methods: {
    add () {
      // 未入力チェック
      if (!this.addValidation()) {
        return
      }
      const item = {
        title: this.title,
        time_limit: this.date,
        status: 'doing'
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
      this.m_date = item.time_limit
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    edit () {
      this.$store.dispatch('todoList/edit', { id: this.edit_id, title: this.m_title, time_limit: this.m_date })
      this.closeModal()
      this.m_title = ''
      this.m_date = ''
    },
    del (id) {
      this.$store.dispatch('todoList/delete', id)
    }
  }
}
</script>
