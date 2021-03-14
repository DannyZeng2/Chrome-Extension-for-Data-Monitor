<template>
  <div id="main">
    <!-- SPS Version -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="sps" name="sps">
        <div v-for="item in this.env" :key="item.message">
          <div><span class="prs-version">{{ item }} PRS</span><span class="dom-version">{{ item }} DOM</span></div>
          <div>
            <span class="prs-status">
              <div class="update-version">24.9.0.2.1557</div>
              <div class="update-time">2021-03-12 19:09</div>
            </span>
            <span class="dom-status">
              <div class="update-version">24.9.0.2.1557</div>
              <div class="update-time">2021-03-12 19:09</div>
            </span>
          </div>
        </div>
      </el-tab-pane>

      <!-- SPPM Version -->
      <el-tab-pane label="sppm" name="sppm">
       <div v-for="item in this.env" :key="item.message">
         <div><span class="prs-version">{{ item }} PRS</span><span class="dom-version">{{ item }} DOM</span></div>
         <div>
           <span class="prs-status">
             <div class="update-version">24.9.0.2.1557</div>
             <div class="update-time">2021-03-12 19:09</div>
           </span>
           <span class="dom-status">
             <div class="update-version">24.9.0.2.1557</div>
             <div class="update-time">2021-03-12 19:09</div>
           </span>
         </div>
       </div>
      </el-tab-pane>

      <!-- SPSI Version -->
      <el-tab-pane label="spsi" name="spsi">
        <div v-for="item in this.env" :key="item.message">
          <div><span class="prs-version">{{ item }} PRS</span><span class="dom-version">{{ item }} DOM</span></div>
          <div>
            <span class="prs-status">
              <div class="update-version">24.9.0.2.1557</div>
              <div class="update-time">2021-03-12 19:09</div>
            </span>
            <span class="dom-status">
              <div class="update-version">24.9.0.2.1557</div>
              <div class="update-time">2021-03-12 19:09</div>
            </span>
          </div>
        </div>
      </el-tab-pane>
      <!-- Other Tools -->
      <el-tab-pane label="tools" name="tools" style="padding-left:10px;height: 510px ">
        <el-button-group>
          <el-button class="tool-button" type="primary" size="mini">Clear Mask</el-button>
          <el-button class="tool-button" type="primary" size="mini">Iris Debug</el-button>
        </el-button-group>
        <el-button-group>
          <el-button id="sps-wiki" class="tool-button" type="primary" size="mini">SPS Wiki</el-button>
          <el-button id="sps-kanban" class="tool-button" type="primary" size="mini">SPS Kanban</el-button>
        </el-button-group>

        <el-divider>Fly To QA/PP</el-divider>
        <el-row>
          <el-col :span="15">
            <el-select size="mini" v-model="value" clearable placeholder="Please select env">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          </el-col>
          <el-col :span="9"><el-button class="trigger-btn" type="primary" size="mini">Go</el-button></el-col>
        </el-row>

        <el-divider>Clear DB Cache</el-divider>
        <el-row>
          <el-col :span="15">
            <el-select size="mini" v-model="value" clearable placeholder="Please select env">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="9"><el-button class="trigger-btn" type="primary" size="mini">Clear</el-button></el-col>
        </el-row>

        <el-divider>Open Story</el-divider>
        <el-row>
          <el-col :span="15"><el-input  size="mini" v-model="input" placeholder="Please input story No."></el-input></el-col>
          <el-col :span="9"><el-button class="trigger-btn" type="primary" size="mini">Open</el-button></el-col>
        </el-row>

      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
          options: [{
            value: 'qa1',
              label: 'QA1'
          }, {
            value: 'qa1',
            label: 'QA2'
          }, {
            value: 'qa1',
            label: 'QA3'
          }, {
            value: 'qa1',
            label: 'QA4'
          }, {
            value: 'oocluat',
            label: 'OOCL UAT'
          }, {
            value: 'coscouat',
            label: 'COSCO UAT'
          }, {
            value: 'ooclpp',
            label: 'OOCL PP'
          }, {
            value: 'coscopp',
            label: 'COSCO PP'
          }, {
            value: 'ooclprd',
            label: 'OOCL PRD'
          }, {
            value: 'coscoprd',
            label: 'COSCO PRD'
          }],
          value: '',
          activeName: 'sps',
          env:['QA1','QA2','QA3','QA4','COSCO UAT','OOCL PP','COSCO PP','OOCL PROD','COSCO PROD']
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
    padding-left: 15px;
    padding-right: 15px;
  }
  .prs-version{
    margin-left: 15px;
    font-weight: bold;
  }
  .dom-version{
    margin: auto;
    position: absolute;
    left: 0px;
    margin-left: 175px;
    font-weight: bold;
  }
  .update-version {
    margin-top: 2px;
    margin-left: 20px;
  }
  .update-time {
    margin-top: 3px;
    margin-left: 20px;
  }
  .prs-status{
    width: 135px;
    height: 40px;
    margin-right: 25px;
    background: #80ec80;
    display:inline-block;
    border-radius:5px;
    font-size: xx-small;
  }
  .dom-status{
    width: 135px;
    height: 40px;
    margin-left: 5px;
    background: #80ec80;
    display:inline-block;
    border-radius:5px;
    font-size: xx-small;
  }
  .status:hover{
    background-color: #5fc25f;
  }
  .tool-button{
    width: 135px;
    height: 30px;
    margin-bottom: 10px;
  }
  .trigger-btn{
    width: 80px;
    height: 28px;
    margin-left: 20px ;
  }
</style>
