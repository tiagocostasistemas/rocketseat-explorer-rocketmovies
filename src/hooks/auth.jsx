//hook de autenticação
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

 function AuthProvider({children}) {
  const [data, setData] = useState({})

  //função signin
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })//realiza o login com email e password
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))//armazena o usuário
      localStorage.setItem("@rocketmovies:token", token)//armazena o token

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`//inserindo token por padrão em todas as requisições do usuário
      setData({ user, token })

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message) 
        } else {
          alert("Não foi possível entrar.")
        }
    }
}

  //função signout
  function signOut() {
    localStorage.removeItem("@rocketmovies:token")
    localStorage.removeItem("@rocketmovies:user")

    setData({})
  }

  //função que atualiza o perfil
  async function updateProfile({ user, avatarFile }) {
    try {
      //verifica se há uma atualização de avatar
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado!")

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message) 
        } else {
          alert("Não foi possível atualizar o perfil.")
        }
    }
  }

  //mantém os dados do usuário salvos no browser
  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  
  return(
    <AuthContext.Provider value={{ 
      signIn,
      signOut, 
      updateProfile,
      user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }