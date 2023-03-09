import { useSelector } from 'react-redux'
import { useGetProductsQuery } from './store/apis'
import { useGetUsersQuery } from './store/apis/userApi'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const App = () => {
  const users = useSelector(state => state.users)
  const usersApi = useGetUsersQuery()
  const productsApi = useGetProductsQuery()

  // console.log(users)
  // console.log(usersApi)
  // console.log(productsApi)
  
  return(
    <h1>App</h1>
  )
}

export default App