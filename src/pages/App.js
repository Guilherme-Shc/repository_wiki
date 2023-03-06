import { Container } from "./styles";
import git_logo from '../assets/git_logo.webp';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { useState } from "react";
import { api } from '../services/api';

function App() {
  
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev,data])
        setCurrentRepo('');
        return
      }
    }
    alert('Repository not found')
  }

  const handleRemoveRepo = (id) => {
    console.log('Removing register', id);
    //use filter
  }

  return (
    <Container>
      
      <img src={git_logo} alt="github logo"class="git_logo"/>
      
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>

      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo()} repo={repo}/>)}

    </Container>
  );
}

export default App;
