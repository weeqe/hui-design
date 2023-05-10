import React from 'react'

interface FilterContext {
  /** activated 页面遮罩层是否显示 */
  activated: boolean
  /** 修改 activated  */
  setActivated: React.Dispatch<React.SetStateAction<boolean>>
  /** 页面滚动的top  */
  scrollTop: number
  /** 是否固定 */
  isFixed: boolean
  /** 隐藏下拉菜单 */
  hideMenu: () => void
  /** 隐藏右侧filter组件的popup */
  hideFilter: () => void
}

const FilterContext = React.createContext<FilterContext | Record<string, any>>({})

export default FilterContext
