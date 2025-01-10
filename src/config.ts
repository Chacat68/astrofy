// 将任何全局数据放在此文件中。
// 你可以使用 `import` 关键字从站点的任何位置导入此数据。

import { z, defineCollection } from "astro:content";

export const SITE_TITLE = 'CHACAT | 个人作品集';
export const SITE_DESCRIPTION = '网站会展示我的作品，技能，以及我的职业经历。';
export const ABOUT_ME = `Hey there 👋
我是CHACAT
一个游戏开发者和个人公司实践者
这是我的个人作品集网站，希望你喜欢！`;
export const GENERATE_SLUG_FROM_TITLE = true
export const TRANSITION_API = true
export const SHOP_ENABLED = false; // 控制商店功能开关

import { blogSchema } from './content/blogSchema';
import { storeSchema } from './content/storeSchema';
import type { BlogSchema } from './content/blogSchema';
import type { StoreSchema } from './content/storeSchema';

export type { StoreSchema };

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection
}
