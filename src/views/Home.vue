<template>
  <div class="home">
    <div class="pc hidden-sm-and-down">
      <div class="aside">
        <div class="aside-on">
          <div class="aside-intro">{{voteTip}}</div>
          <div class="aside-vote">
            <el-button
              v-show="checkedTutor.length < 8"
              type="success"
              disabled
            >投票({{checkedTutor.length}}/8)</el-button>
            <el-button @click="toVote" v-show="checkedTutor.length == 8" type="success">投票(8/8)</el-button>
          </div>
        </div>
      </div>
      <div class="main">
        <el-checkbox-group 
          :change="updateChecked"
          v-model="checkedTutor" 
          :min="0" 
          :max="8">
          <div v-for="tutor in TeacherList" :key="tutor.id">
            <vote-card
              :id="tutor.id"
              :name="tutor.name"
              :position="tutor.position"
              :academy="tutor.academy"
              :introduce="tutor.introduce"
              :TotalVotes="tutor.TotalVotes"
              :AllVotes="totleVotes"
            ></vote-card>
          </div>
          <div class="place"></div>
          <div class="place"></div>
          <!-- <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox> -->
        </el-checkbox-group>
      </div>
    </div>
    <div class="mb hidden-md-and-up">
      <div class="main-mb">
        <el-checkbox-group 
          :change="updateChecked"
          v-model="checkedTutor" 
          :min="0" 
          :max="8">
          <div v-for="tutor in TeacherList" :key="tutor.id">
            <vote-card
              :isMb="true"
              :id="tutor.id"
              :name="tutor.name"
              :position="tutor.position"
              :academy="tutor.academy"
              :introduce="tutor.introduce"
              :TotalVotes="tutor.TotalVotes"
              :AllVotes="totleVotes"
            ></vote-card>
          </div>
        </el-checkbox-group>
        <div class="mb-bt">
          <el-button
            v-if="checkedTutor.length < 8"
            type="info"
            @click="openTip"
          >投票({{checkedTutor.length}}/8)</el-button>
          <el-button @click="toVote" v-else-if="checkedTutor.length == 8" type="success">投票(8/8)</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TeacherList } from "@/tutor.json";
import VoteCard from "@/components/VoteCard";
const voteTip = "每名学生一次可以选择八位导师投票，投票机会只有一次。";
export default {
  name: "home",
  data() {
    return {
      voteTip,
      setTime: null,
      TeacherList,
      checkedTutor: [],
      totleVotes: TeacherList.reduce(
        (t1, t2) => {
          return { TotalVotes: t1.TotalVotes + t2.TotalVotes };
        },
        { TotalVotes: 0 }
      ).TotalVotes
    };
  },
  methods: {
    updateChecked() {
      console.log(this.checkedTutor)
    },
    toVote() {
      console.log(this.checkedTutor);
    },
    openTip() {
      if (!this.setTime) {
        this.setTime = true;
        this.$notify({
          title: "说明",
          message: this.voteTip,
          onClose: () => {
            this.setTime = false;
          }
        });
      }
    }
  },
  computed: {

  },
  components: {
    VoteCard
  },
  created() {
    console.log(this.$store.state.checkedTutor)
  }
};
</script>

<style lang="stylus" scoped>
.home {
  margin-top: 20px;
  padding-bottom: 100px;
}

.pc {
  display: flex;
  display: -webkit-flex;
  display-direction: row;
  width: 990px;
  margin: 0 auto;

  .aside {
    width: 280px;
    margin-right: 20px;
    margin-top: 20px;

    .aside-on {
      width: 260px;
      position: fixed;
      background: #fff;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
      z-index: 9;
      padding: 10px 10px 10px 10px;

      .aside-intro {
        font-size: 16px;
        font-family: 'PingFang SC';
        text-align: left;
        color: #303133;
      }

      .aside-vote {
        text-align: right;
        margin-top: 20px;
      }
    }
  }

  .main {
    width: 690px;
    min-height: 800px;
    background: transparentify;
    border: 1px solid #DCDFE6;
    border-radius: 4px;

    .el-checkbox-group {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .el-checkbox-group > div {
      margin-top: 40px;
    }

    .el-checkbox-group:last-child {
      margin-bottom: 40px;
    }

    .place {
      width: 200px;
      height: 0;
    }
  }
}

.mb {
  width: 100%;

  .main-mb {
    margin: 0 auto;
    width: 300px;
  }

  .mb-bt {
    position: fixed;
    top: 60%;
    left: 0;
    z-index: 9;
  }
}
</style>
