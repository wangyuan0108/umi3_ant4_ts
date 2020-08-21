export default function(initialState) {
  const { userId, role } = initialState;
  console.log('initialState=====', initialState);

  return {
    canReadFoo: true,
    canReadPageA:true,
    canUpdateFoo: role === 'amin',
    canDeleteFoo: foo => {
      return foo.ownerId === userId;
    },
  };
}
