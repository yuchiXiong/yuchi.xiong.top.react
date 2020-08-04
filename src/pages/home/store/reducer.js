const defaultState = {
    hots: [
        {
            id: 1,
            title: '快速搭建自己的个人博客！Hexo入门指南',
            description: '手把手教你使用Hexo搭建一个自己的博客',
            createdAt: '2020-07-28 19:10:47',
            tags: ['个人博客', 'Hexo', 'CMS'],
            image: null
        },
        {
            id: 2,
            title: 'React同构渲染，手把手教你搭建自己的SSR框架',
            description: 'React + NodeJS同构渲染，体验和SEO我都要!',
            createdAt: '2020-07-28 19:10:47',
            tags: ['React', 'SSR', 'Node'],
            image: null
        },
        {
            id: 3,
            title: 'Rails开发Guide，Rails一年经验总结',
            description: '一转眼入坑Rails一年了，分享一点自己的心得',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null
        }
    ],
    list: [
        {
            id: 1,
            title: '快速搭建自己的个人博客！Hexo入门指南',
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            description:
                '手把手教你使用Hexo搭建一个自己的博客',
            content:
                '# 1. 问题描述\n' +
                '\n' +
                '最近和朋友做一个个人项目，期间希望使用非对称加密来实现前端加密用户名和密码，后端解密验证的功能。\n' +
                '\n' +
                '在第一版设计的时候前后端技术栈是 `React + Express`，我们很快找到了 [node-rsa](https://www.npmjs.com/package/node-rsa) 这个包，由于前后端都是 `JavaScript`，使用同一个包之后这个问题很快解决了。\n' +
                '\n' +
                '但是后来因为一些事情导致了项目停滞了很久，之后再启动时我提出使用 `Ruby on Rails` 来快速完成后端，迁移的过程在其他方面都还算比较顺利，唯独在重写非对称加密的时候卡壳了，使用统一签发的证书，前端加密后后端怎么都解不开。\n' +
                '\n' +
                '前端参考代码：\n' +
                '\n' +
                '~~~ JavaScript\n' +
                'const NodeRSA = require(\'node-rsa\');\n' +
                'const obj = {\n' +
                '  public_key: "-----BEGIN PUBLIC KEY-----太长省略-----END PUBLIC KEY-----"\n' +
                '};\n' +
                '\n' +
                'let key = new NodeRSA(obj.public_key);\n' +
                '\n' +
                'const encode = key.encrypt({\n' +
                '  account: \'...\',\n' +
                '  password: \'...\'\n' +
                '}, \'base64\');\n' +
                '~~~\n' +
                '\n' +
                '后端参考代码：\n' +
                '\n' +
                '~~~ ruby\n' +
                'key = params[:key]\n' +
                '\n' +
                'rsa_client = OpenSSL::PKey::RSA.new Rails.application.credentials[:private_key]\n' +
                '\n' +
                'account_obj = JSON.parse(rsa_client.private_decrypt(key))\n' +
                'account = account_obj[\'account\']\n' +
                'password = account_obj[\'password\']\n' +
                '~~~\n' +
                '\n' +
                '使用上述代码无法完成解密。\n' +
                '\n' +
                '# 2. 解决方案\n' +
                '\n' +
                '无法完成解密主要原因有2个：\n' +
                '\n' +
                '1. 前端 `node-rsa` 库与后端 `OpenSSL::PKey::RSA` 库默认填充方式不一致。\n' +
                '2. 前端加密后对密文进行了 `Base64` 再加密（可能是考虑到字节编码对传输的影响）。\n' +
                '\n' +
                '修改代码为如下，**前端指定了填充方式而后端对密文先进行了Base64解密**。\n' +
                '前端参考代码：\n' +
                '\n' +
                '~~~ JavaScript\n' +
                'const NodeRSA = require(\'node-rsa\');\n' +
                'const obj = {\n' +
                '  public_key: "-----BEGIN PUBLIC KEY-----太长省略-----END PUBLIC KEY-----"\n' +
                '};\n' +
                '\n' +
                'let key = new NodeRSA(obj.public_key);\n' +
                '\n' +
                'key.setOptions({ encryptionScheme: \'pkcs1\' });\n' +
                '\n' +
                'const encode = key.encrypt({\n' +
                '  account: \'...\',\n' +
                '  password: \'...\'\n' +
                '}, \'base64\');\n' +
                '~~~\n' +
                '\n' +
                '后端参考代码：\n' +
                '\n' +
                '~~~ ruby\n' +
                'key = params[:key]\n' +
                '\n' +
                'rsa_client = OpenSSL::PKey::RSA.new Rails.application.credentials[:private_key]\n' +
                '\n' +
                'account_obj = JSON.parse(rsa_client.private_decrypt(Base64.decode64(key)))\n' +
                'account = account_obj[\'account\']\n' +
                'password = account_obj[\'password\']\n' +
                '~~~',
        }, {
            id: 2,
            title: 'React同构渲染，手把手教你搭建自己的SSR框架',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                'React + NodeJS同构渲染，体验和SEO我都要!',
            content:
                'React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架',
        }, {
            id: 3,
            title: 'Rails开发Guide，Rails一年经验总结',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '一转眼入坑Rails一年了，分享一点自己的心得',
            content:
                'Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结',
        }, {
            id: 4,
            title: '快速搭建自己的个人博客！Hexo入门指南',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '手把手教你使用Hexo搭建一个自己的博客',
            content:
                '快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南',
        }, {
            id: 5,
            title: 'React同构渲染，手把手教你搭建自己的SSR框架',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                'React + NodeJS同构渲染，体验和SEO我都要!',
            content:
                'React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架',
        }, {
            id: 6,
            title: 'Rails开发Guide，Rails一年经验总结',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '一转眼入坑Rails一年了，分享一点自己的心得',
            content:
                'Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结',
        }, {
            id: 7,
            title: '快速搭建自己的个人博客！Hexo入门指南',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '手把手教你使用Hexo搭建一个自己的博客',
            content:
                '快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南',
        }, {
            id: 8,
            title: 'React同构渲染，手把手教你搭建自己的SSR框架',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                'React + NodeJS同构渲染，体验和SEO我都要!',
            content:
                'React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架',
        }, {
            id: 9,
            title: 'Rails开发Guide，Rails一年经验总结',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '一转眼入坑Rails一年了，分享一点自己的心得',
            content:
                'Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结',
        }, {
            id: 10,
            title: '快速搭建自己的个人博客！Hexo入门指南',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '手把手教你使用Hexo搭建一个自己的博客',
            content:
                '快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南快速搭建自己的个人博客！Hexo入门指南',
        }, {
            id: 11,
            title: 'React同构渲染，手把手教你搭建自己的SSR框架',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                'React + NodeJS同构渲染，体验和SEO我都要!',
            content:
                'React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架React同构渲染，手把手教你搭建自己的SSR框架',
        }, {
            id: 12,
            title: 'Rails开发Guide，Rails一年经验总结',
            createdAt: '2020-07-28 19:10:47',
            tags: ['Rails', '全栈', 'Web'],
            image: null,
            avatar: 'https://www.xiongyuchi.top/img/avatar.jpg',
            description:
                '一转眼入坑Rails一年了，分享一点自己的心得',
            content:
                'Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结Rails开发Guide，Rails一年经验总结',
        }
    ]
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;