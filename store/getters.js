const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  email: state => state.user.email,
  phone: state => state.user.phone,
  addressId: state => state.user.addressId,
  role: state => state.user.role,
}
export default getters
