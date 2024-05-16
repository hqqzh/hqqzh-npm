import type { HotParams, PageParams, PageResult } from '@/types/global'
import type {
  BannerItem,
  CategoryItem,
  CategoryTopItem,
  GoodsResult,
  GuessItem,
  HotItem,
  HotResult,
  LoginResult,
} from '@/types/home'
import { http } from '@/utils/http'

// 广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>('GET', '/home/banner', {
    distributionSite,
  })
}

// 前台分类
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>('GET', '/home/category/mutli')
}

// 热门推荐
export const getHomeHotAPI = () => {
  return http<HotItem[]>('GET', '/home/hot/mutli')
}

// 猜你喜欢
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>('GET', '/home/goods/guessLike', data)
}

// 热门推荐
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>('GET', url, data)
}

// 分类列表
export const getCategoryTopAPI = () => {
  return http<Array<CategoryTopItem>>('GET', '/category/top')
}

// 商品详情
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>('GET', '/goods', { id })
}

// 登录用户信息
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>('POST', '/login/wxMin', data)
}

// 模拟登录
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>('POST', '/login/wxMin/simple', {
    phoneNumber,
  })
}
