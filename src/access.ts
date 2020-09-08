/*
 * @Author: wangyuan
 * @Date: 2020-06-30 17:38:56
 * @LastEditTime: 2020-09-08 14:04:16
 * @LastEditors: wangyuan
 * @Description:
 */
export default function(initialState) {
  const { userId, role } = initialState;
  return {
    canReadFoo: true,
    canReadPageA:true,
    canUpdateFoo: role === 'amin',
    canDeleteFoo: foo => {
      return foo.ownerId === userId;
    },
  };
}
