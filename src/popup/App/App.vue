<template>
  <div id="main">
    <h2>SPS Monitor Tool</h2>

    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="sps" name="first">
        <div v-for="item in this.env" :key="item.message">
          <div><span class="prs-version">{{ item }} PRS</span><span class="dom-version">{{ item }} DOM</span></div>
          <div>
            <button class="status"></button>
            <button class="status"></button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="sppm" name="second">
       <div v-for="item in this.env" :key="item.message">
         <div><span class="prs-version">{{ item }} PRS</span><span class="dom-version">{{ item }} DOM</span></div>
         <div>
           <button class="status"></button>
           <button class="status"></button>
         </div>
       </div>
      </el-tab-pane>

      <el-tab-pane label="spsi" name="third">
        <div v-for="item in this.env" :key="item.message">
          <div><span class="prs-version">{{ item }} PRS</span><span class="dom-version">{{ item }} DOM</span></div>
          <div>
            <button class="status"></button>
            <button class="status"></button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="tools" name="fourth">

      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            activeName: 'first',
            env:['QA1','QA2','QA3','QA4','OOCL UAT','COSCO UAT','OOCL PP','COSCO PP','OOCL PROD','COSCO PROD']
        };
    },
    methods:{

    }
}
</script>

<style>
  #main {
    width: 300px;
    padding-bottom: 10px;
  }
  .prs-version{
    margin-left: 15px;
    font-weight: bold;
  }
  .dom-version{
    margin: auto;
    position: absolute;
    left: 0px;
    margin-left: 160px;
    font-weight: bold;
  }
  .status{
    width: 135px;
    height: 50px;
    margin-bottom: 2px;
    margin-left:10px;
    background-color: #67c23a;
    border-radius:5px;
    border:none;
    outline: none;
  }
</style>
