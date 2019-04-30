<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--cube-ui相关案例-->
    <h4 class="title">基础组件</h4>
    <div class="cube-container">
        <cube-button icon="cubeic-right" :disabled="true">Button</cube-button>
        <cube-button :light="true">Light Button</cube-button>
        <cube-button :inline="true">inline Button</cube-button>
        <cube-button :outline="true">Outline Button</cube-button>
        <cube-button :primary="true" @click="handleClick">Primary Button</cube-button>
        <cube-loading :size="28"></cube-loading>
        <cube-tab-bar
            v-model="selectedLabelDefault"
            show-slider
            inline
            @click="clickHandler"
            @change="changeHandler">
            <cube-tab v-for="(item,index) in tabs" :label="item.label" :key="item.label">
                <i slot="icon" :class="item.icon"></i>
                {{item.label}}
            </cube-tab>
        </cube-tab-bar>
    </div>
    <h4 class="title">表单组件</h4>
    <div class="cube-container">
        <cube-checkbox v-model="check">Checkbox</cube-checkbox>
        <cube-checkbox v-model="check" position="left" shape="square" :hollow-style="true">
            Styled Checkbox
        </cube-checkbox>
        <cube-checkbox-group 
            v-model="checklist" 
            :options="options"
            :horizontal="true"
            shape="square"
            :hollow-style="true" ></cube-checkbox-group>
        <cube-checker v-model="checkerValue" :options="checkerOptions" type="checkbox"/>
        <p>checker value: {{checkerValue}}</p>
        <cube-input 
            v-model="inputValue" 
            :clearable="clearable" 
            :type="type" 
            :eye="eye">
        </cube-input>
        <cube-validator
            v-model="valid"
            :model="inputValue"
            :rules="rules"
            :messages="messages"></cube-validator>
        <cube-textarea 
            v-model="textareaValue"
            :maxlength="maxlength"
            :autoExpand="true"
            :placeholder="placeholder"></cube-textarea>
        <cube-select 
            v-model="selectValue"
            :options="selectOptions">
        </cube-select>
        <cube-rate v-model="rateValue"></cube-rate>
        <!-- 文件上传 -->
        <UploadFile></UploadFile>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UploadFile from '@/components/uploadfile.vue';
import {get_tablelist} from '@/api.js';
export default {
  name: 'home',
  data() {
      return  {
        list: [],
        selectedLabelDefault: 'Vip',
        tabs: [
            {
                label: 'Home',
                icon: 'cubeic-home'
            },
            {
                label: 'Like',
                icon: 'cubeic-like'
            },
            {
                label: 'Vip',
                icon: 'cubeic-vip'
            },
            {
                label: 'Me',
                icon: 'cubeic-person'
            }
        ],
        check: true,
        checklist: ['1'],
        options: [
            '1',
            '2',
            {
                label: '3',
                value: '3',
                disabled: true
            }
        ],
        checkerValue: [],
        checkerOptions: [
            {
                value: 1,
                text: 'red'
            },
            {
                value: 2,
                text: 'yellow'
            },
            {
                value: 3,
                text: 'blue'
            },
            {
                value: 4,
                text: 'green'
            }
        ],
        inputValue: '',
        valid: undefined,
        rules: {
            required: true,
            type: 'number',
            pattern: /^\d{6}$/,
            custom: (val) => {
                return val.length > 6
            }
        },
        messages: {
            pattern: 'The password need to be number',
            custom: 'The password need contain at most 6 number'
        },
        clearable: {
            visible: true,
            blurHidden: true
        },
        type: 'password',
        eye: {
            open: true,
            reverse: false
        },
        textareaValue: '',
        maxlength: 400,
        placeholder: '请输入文本内容',
        selectValue: '',
        selectOptions: [2013, 2014, 2015, 2016, 2017, 2018],
        rateValue: 3
      }
  },
  mounted() {
      this.getTablelist()
  },
  methods: {
    clickHandler(label) {
        // console.log(label)
    },
    changeHandler(label) {
        // if you clicked different tab, this methods can be emitted
        console.log(label)
    },
    handleClick(e) {
        console.log(e.target)
    },
    async getTablelist() {
        try {
            let res = await get_tablelist();
            if (res.data.code === 0) {
                this.list = res.data.result.list;
            }
        } catch (error) {
            console.log(error);
        }
    }
  },
  components: {
    HelloWorld,
    UploadFile
  }
}
</script>
<style lang="scss">
    .cube-btn {
        margin-bottom: 10px;
    }
    .cube-textarea-wrapper {
        height: 100px;
    }
</style>
<style lang="scss" scoped>
    .title {
        padding: 10px 0;
    }
    .cube-container {
        padding: 30px;
        border: 3px dashed pink;
        text-align: left;
    }
    
</style>