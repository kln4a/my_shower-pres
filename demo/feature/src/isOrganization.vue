<template>
  <div class="is_organization">
    <h4>Я регистрируюсь как</h4>
    <el-row>
      <el-col :span="24">
        <el-radio class="radio" v-model="is_organization" label="Y">Организация</el-radio>
        <el-radio class="radio" v-model="is_organization" label="N">Частное лицо</el-radio>
      </el-col>
    </el-row>
    <el-row v-show="is_organization == 'Y'">
      <label for="company">Наименование организации</label>
      <el-input placeholder="Наименование организации" v-model="company"></el-input>
    </el-row>
  </div>
</template>

<script>
export default{
  data() {
    return {
      is_organization: 'Y',
      company: ''
    }
  }
}
</script>

<style scoped>
  .is_organization {
    color: red;
  }
</style>
