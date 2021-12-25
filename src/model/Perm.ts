export default interface Perm {
  id: string; // id
  name: string; // 权限名
  createAt: string; // 创建时间
  updateAt: string; // 更新时间

  // menu
  isMenu: boolean; // 是否菜单
  isHide?: boolean; // 是否不在菜单中显视
  isMicroApp: boolean; // 是否微应用入口
  pID?: string; // 父级id
  url: string; // url
}
