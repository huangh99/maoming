import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  { files: [ '**/*.{js,mjs,cjs,vue}' ] },
  // 指定全局变量和环境
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  // 自定义规则
  {
    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-var': 'warn', // 要求使用 let 或 const 而不是 var
      semi: [ 'warn', 'never' ], // 禁用行尾使用分号
      'no-extra-semi': 'error', // 禁止不必要的分号
      'comma-dangle': [ 'warn', 'never' ], // 禁止末尾逗号
      'eol-last': 0, // 文件以换行符结束
      'no-multi-spaces': 'warn', // 禁止多余的空格
      'no-multiple-empty-lines': [ 'warn', { max: 1 } ], // 空行不能超过 1 行
      'max-len': [ 'warn', { code: 600 } ],
      'vue/multi-word-component-names': 'off', // 组件命名规则
      'linebreak-style': [ 'off', 'windows' ],
      'no-underscore-dangle': [ 'off', 'always' ],
      'no-console': 'warn', // 禁止出现console
      'no-debugger': 'warn', // 禁止出现debugger
      'no-duplicate-case': 'warn', // 禁止出现重复case
      'no-empty': 'warn', // 禁止出现空语句块
      'no-extra-parens': 'warn', // 禁止不必要的括号
      'no-func-assign': 'warn', // 禁止对Function声明重新赋值
      'no-unreachable': 'warn', // 禁止出现[return|throw]之后的代码块
      'no-else-return': 'warn', // 禁止if语句中return语句之后有else块
      'no-empty-function': 'warn', // 禁止出现空的函数块
      'no-lone-blocks': 'warn', // 禁用不必要的嵌套块
      'no-redeclare': 'warn', // 禁止多次声明同一变量
      'no-return-assign': 'warn', // 禁止在return语句中使用赋值语句
      'no-return-await': 'warn', // 禁用不必要的[return/await]
      'no-self-compare': 'warn', // 禁止自身比较表达式
      'no-useless-catch': 'warn', // 禁止不必要的catch子句
      'no-useless-return': 'warn', // 禁止不必要的return语句
      'no-mixed-spaces-and-tabs': 'warn', // 禁止空格和tab的混合缩进
      'no-trailing-spaces': 'warn', // 禁止一行结束后面不要有空格
      'no-useless-call': 'warn', // 禁止不必要的.call()和.apply()
      'no-delete-var': 'off', // 允许出现delete变量的使用
      'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名
      'dot-notation': 'warn', // 要求尽可能地使用点号
      'default-case': 'warn', // 要求switch语句中有default分支
      eqeqeq: 'warn', // 要求使用 === 和 !==
      curly: 'warn', // 要求所有控制语句使用一致的括号风格
      'space-before-blocks': 'warn', // 要求在块之前使用一致的空格
      'space-in-parens': 'warn', // 要求在圆括号内使用一致的空格
      'space-infix-ops': 'warn', // 要求操作符周围有空格
      'space-unary-ops': 'warn', // 要求在一元操作符前后使用一致的空格
      'switch-colon-spacing': 'warn', // 要求在switch的冒号左右有空格
      'arrow-spacing': 'warn', // 要求箭头函数的箭头前后使用一致的空格
      'array-bracket-spacing': [ 'warn', 'always' ], // 要求数组方括号中使用一致的空格
      'brace-style': 'warn', // 要求在代码块中使用一致的大括号风格
      // 'camelcase': 'warn', // 要求使用骆驼拼写法命名约定
      'object-curly-spacing': [ 'warn', 'always' ], // 在对象字面量、解构赋值和导入/导出说明符的大括号内保持一致的间距
      'comma-spacing': [ 'warn', { before: false, after: true } ],
      'comma-style': [ 'warn', 'last' ],
      'key-spacing': [ 'warn', { beforeColon: false, afterColon: true } ], // 对象字面量的属性中键和值之间使用一致的间距
      quotes: [ 'warn', 'single', 'avoid-escape' ] // 要求统一使用单引号符号
    }
  },
  // 忽略文件
  {
    ignores: [
      '**/dist',
      '.vscode',
      '.idea',
      '*.sh',
      '**/node_modules',
      '*.md',
      '*.woff',
      '*.woff',
      '*.ttf',
      'package-lock.json',
      '/public',
      '/docs',
      '**/output',
      '.husky',
      '.local'
    ]
  }
]
